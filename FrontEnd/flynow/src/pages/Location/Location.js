import React, { Component } from 'react'
import { fetchLoading } from '../../common/utils/effect'
import { Table, Card, Button, Input} from 'antd'
import ActionsLocation from './ActionsLocation'
import ModalCreate from './ModalCreate'
import "../../components/App.css";
import Column from 'antd/lib/table/Column'
const { Search } = Input;
export class Location extends Component {
    constructor(props){
        super(props)
        this.state = {
            location: []
        }
    }
    getLocation = async () => {
        let result = await fetchLoading({
            url: 'http://localhost:4000/db/location/',
            method: 'GET'
        })
        this.setState({
            location: result.data
        })
    }
    getDateCreate = async (data) => { 
        // console.log('data: ',data)
         await fetchLoading({
            url: 'http://localhost:4000/db/location/insert/',
            method: 'POST',
            data: data
        })
        // console.log("Thêm Thành công",result)
        this.getLocation() 

    }
    onDelete = async (idDelete) => {
        await fetchLoading({
            url: 'http://localhost:4000/db/location/'+idDelete+'/delete/', //router.delete('/flight/:id/delete',userController.deleteFlight)
            method: 'DELETE'
        })
        // console.log('Xoa Thanh cong')
        this.getLocation() 
    }
    onEdit = async (data)  => {
        // console.log("data: ",data)
         await fetchLoading({
            url : 'http://localhost:4000/db/location/update',
            method: 'POST',
            data: data
        })
        // console.log(result.data);
        this.getLocation() 
    }    

    async componentDidMount() { //Sau khi Render se chay va setState roi Render lai
        await this.getLocation()
    } 
    showModal = () => {
        this.setState({            
            visible: true,
        })
    }
    handleOk = e => {
        // console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        // console.log(e);
        this.setState({
            visible: false,
        });
    };
    
    formatNumber = (nStr, decSeperate, groupSeperate) => { // (num,'.','.')
        nStr += '';
        let x = nStr.split(decSeperate);
        let x1 = x[0];
        let x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + groupSeperate + '$2');
        }
        return x1 + x2;
    }
    render() {
        const { location }= this.state
        return (
                <Card>
                <div className="listAction">
                <Button type="primary" style={{margin:"0 5px 0 0" }} onClick={this.showModal} icon='plus'>
                   Thêm Chặng
                </Button>
                <Search
                     placeholder="Tìm kiếm chặng bay"
                     onSearch={value => console.log(value)}
                     style={{ width: 170 }}
                />            
                </div>
                <ModalCreate
                    title="Thêm chặng bay"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    getDataCreate  = {this.getDateCreate}
                    onSubmit
                >                 
                </ModalCreate>


                <Table
                    scroll={{ x: 150 }}
                    style={{ color: 'black' }}
                    tableLayout={'auto'}
                    pagination={{ pageSize: 5 }}
                    rowKey={e => e.ID_Chang}
                    dataSource={location}
                    bordered
                >

                    <Column title='Mã Chặng' dataIndex='ID_Chang' align='center'
                        sorter={(a, b) => a.ID_Chang - b.Id_Chang}
                    />
                    <Column title='Điểm đi' dataIndex='DiemDi' align='center' sorter={(a, b) => a.DiemDi - b.DiemDi}/>
                    <Column title='Điểm đến' dataIndex='DiemDen' align='center' sorter={(a, b) => a.DiemDen - b.DiemDen}/>
                    <Column title='Sân bay đi' dataIndex='SanBayDi' align='center' sorter={(a, b) => a.SanBayDi - b.SanBayDi}/>
                    <Column title='Sân bay đến' dataIndex='SanBayDen'  align='center' sorter={(a, b) => a.SanBayDen - b.SanBayDen}/>
                    <Column title='Giá' dataIndex=''  align='center' sorter={(a, b) => a.Gia - b.Gia} render={(recore) => { return(this.formatNumber(recore.Gia,'.','.')+' đ') }}/>
                    <Column title='Thao tác' dataIndex='' align='center' render={(recore) => { return(< ActionsLocation recore={recore} onDelete={this.onDelete} onEdit={this.onEdit}/>) } } />
                </Table>
            </Card>
        )
    }
}

export default Location
