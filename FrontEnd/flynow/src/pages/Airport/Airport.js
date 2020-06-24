import React, { Component } from 'react'
import { fetchLoading } from '../../common/utils/effect'
import { Table, Card, Button, Input} from 'antd'
import "../../components/App.css";
import Column from 'antd/lib/table/Column'
import ActionAirport  from './actionAirport';
import ModalCreateAirport from './ModalCreateAirport'

const { Search } = Input;
export class Airport extends Component {
    constructor(props) {
        super(props)
        this.state = {
            airports : [],
        }
    }
    getAirport = async () => {
        let result = await fetchLoading({
            url: 'http://localhost:4000/db/airport/',
            method: 'GET'
        })
        this.setState({
            airports: result.data
        })
    }
    getDateCreate = async (data) => { 
        console.log('data: ',data)
        var result = await fetchLoading({
            url: 'http://localhost:4000/db/airport/insert/',
            method: 'POST',
            data: data
        })
        console.log("Thêm Thành công",result)
        this.getAirport() 

    }
    onDelete = async (idDelete) => {
        await fetchLoading({
            url: 'http://localhost:4000/db/airport/'+idDelete+'/delete/', //router.delete('/flight/:id/delete',userController.deleteFlight)
            method: 'DELETE'
        })
        console.log('Xoa Thanh cong')
        this.getAirport()
    }
    onEdit = async (data)  => {
        console.log("data: ",data)
        var result = await fetchLoading({
            url : 'http://localhost:4000/db/airport/update',
            method: 'POST',
            data: data
        })
        console.log(result.data);
        this.getAirport()
    }    

    async componentDidMount() { //Sau khi Render se chay va setState roi Render lai
        await this.getAirport()
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
    render() {
        const { airports } = this.state
        // console.log(airports)
        return (
            <Card>
                <div className="listAction">
                <Button type="primary" style={{margin:"0 5px 0 0px" }} onClick={this.showModal} icon='plus'>
                     Thêm Sân Bay
                </Button>
                <Search
                     placeholder="Tìm kiếm sân bay"
                     onSearch={value => console.log(value)}
                     style={{ width: 170}}
                />                                     
                </div>
                <ModalCreateAirport
                    title="Thêm Sân Bay"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    // getDateTime={this.getDateTimeToFormCreate}
                    getDataCreate  = {this.getDateCreate}
                    onSubmit
                >                 
                </ModalCreateAirport>
                <Table
                    scroll={{ x: 150 }}
                    style={{ color: 'black' }}
                    tableLayout={'auto'}
                    pagination={{ pageSize: 5 }}
                    rowKey={e => e.MaSanBay}
                    dataSource={airports}
                    // columns={columns} 
                    bordered
                >

                    <Column title='Mã Sân Bay' dataIndex='MaSanBay' align='center'
                        sorter={(a, b) => a.MaSanBay- b.MaSanBay}
                    />
                    <Column title='Tên Sân Bay' dataIndex='TenSanBay' align='center' sorter={(a, b) => a.TenSanBay - b.TenSanBay}/>
                    <Column title='Thành Phố' dataIndex='ThanhPho' align='center' sorter={(a, b) => a.ThanhPho - b.ThanhPho}/>       
                    <Column title='Thao tác' dataIndex='' align='center' render={(recore) => {return( <ActionAirport recore={recore} onDelete={this.onDelete} onEdit={this.onEdit} />)}} />
                </Table>
            </Card>
        )
    }
}

export default Airport
