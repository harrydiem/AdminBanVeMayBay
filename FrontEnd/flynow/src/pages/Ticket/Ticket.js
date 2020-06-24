import React, { Component } from 'react'
import { fetchLoading } from '../../common/utils/effect'
import { Table, Card, Button, Input} from 'antd'
import "../../components/App.css"
import Column from 'antd/lib/table/Column'
import ActionTicket from './ActionTicket'
import ModalCreate from './ModalCreate'
const { Search } = Input;
export class Ticket extends Component {
    constructor(props){
        super(props)
        this.state = {
            tickets: [],
        }
    }
    getTicket = async () => {
        let result = await fetchLoading({
            url: 'http://localhost:4000/db/ticket',
            method: 'GET'
        })
        this.setState({
            tickets: result.data,
        })
    }
    getDateCreate = async (data) => { 
        // console.log('data: ',data)
        await fetchLoading({
            url: 'http://localhost:4000/db/ticket/insert/',
            method: 'POST',
            data: data
        })
        // console.log("Thêm Thành công",result)
        this.getTicket() 

    }
    onDelete = async (idDelete) => {
        await fetchLoading({
            url: 'http://localhost:4000/db/ticket/'+idDelete+'/delete/', //router.delete('/flight/:id/delete',userController.deleteFlight)
            method: 'DELETE'
        })
        console.log('Xoa Thanh cong')
        this.getTicket() 
    }
    onEdit = async (data)  => {
        console.log("data: ",data)
        var result = await fetchLoading({
            url : 'http://localhost:4000/db/ticket/update',
            method: 'POST',
            data: data
        })
        console.log(result.data);
        this.getTicket() 
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
    async componentDidMount() { //Sau khi Render se chay va setState roi Render lai
        await this.getTicket()
    } 
    formatNumber = (nStr, decSeperate, groupSeperate) => { // formatNumber(num,'.','.')
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
        const { tickets } = this.state
        // console.log("orders: ",tickets)

        return (
            <Card>
                <div className="listAction">
                <Button type="primary" onClick={this.showModal} icon='plus'>
                   Thêm hạng Vé
                </Button>
                <Search
                     placeholder="Tìm kiếm hạng vé"
                     onSearch={value => console.log(value)}
                     style={{ width: "25%", margin:"0 0 0 5px" }}
                />            
                </div>
                <ModalCreate
                title="Thêm Hạng Vé"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                getDataCreate  = {this.getDateCreate}
                onSubmit
                ></ModalCreate>
                <Table
                    scroll={{ x: 150 }}
                    style={{ color: 'black' }}
                    tableLayout={'auto'}
                    pagination={{ pageSize: 5 }}
                    rowKey={e => e.MaHangVe}
                    dataSource={tickets}
                    // columns={columns} 
                    bordered
                >

                    <Column title='Mã Hạng Vé' dataIndex='MaHangVe' align='center'
                        sorter={(a, b) => a.MaHangVe - b.MaHangVe}
                    />
                    <Column title='Tên Hạng Vé' dataIndex='TenHangVe' align='center' sorter={(a, b) => a.TenHangVe - b.TenHangVe}/>
                    <Column title='Giá Hạng Vé' dataIndex='' sorter={(a, b) => a.GiaHangVe - b.GiaHangVe} render={(recore) =>this.formatNumber(recore.GiaHangVe,'.','.')+' đ' } align='center'  />
                    <Column title='Thao tác' dataIndex='' align='center' render={(recore) => { return(< ActionTicket recore={recore} onDelete={this.onDelete} onEdit={this.onEdit}/>) } } />
                </Table>
            </Card>
        )
    }
}

export default Ticket
