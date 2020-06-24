import React, { Component } from 'react'
import { fetchLoading } from '../../common/utils/effect'
import { Table, Card, Button, Input} from 'antd'
import ActionsEmployee from './ActionsEmployee'
import "../../components/App.css"
import Column from 'antd/lib/table/Column'
import ModalCreate from './ModalCreate'
const { Search } = Input;
export class Employees extends Component {
    constructor(props){
        super(props)
        this.state = {
            employees: [],
            idTop : '', 
        }
    }
    getEmployees = async () => {
        let result = await fetchLoading({
            url: 'http://localhost:4000/db/employees/desc',
            method: 'GET'
        })
        // console.log("get",result.data[0].MaNV)
        this.setState({
            employees: result.data,
            idTop: result.data[0].MaNV
        })
    }
    getDateCreate = async (data) => { 
        // console.log('data: ',data)
        var result = await fetchLoading({
            url: 'http://localhost:4000/db/employee/insert/',
            method: 'POST',
            data: data
        })
        console.log("Thêm Thành công",result)
        this.getEmployees() 
    }
    onEdit = async (data)  => {
        console.log("data: ",data)
        var result = await fetchLoading({
            url : 'http://localhost:4000/db/employee/update',
            method: 'POST',
            data: data
        })
        console.log(result.data);
        this.getEmployees()
    }  
    showModal = () => {
        this.setState({            
            visible: true,
        })
    }
    handleOk = e => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };
    async componentDidMount() { //Sau khi Render se chay va setState roi Render lai
        await this.getEmployees()
    } 

    render() {
        const { employees } = this.state
        // console.log("Em: ",employees[0])
        const {idTop} = this.state
        // console.log("ID TOP",idTop)
        return (
            <Card>
                {/* {employees[0]} */}
                <div className="listAction">
                <Button type="primary" style={{ margin:"0 5px 0 0" }} onClick={this.showModal} icon='plus'>
                     Thêm Nhân Viên
                </Button>
                <Search
                     placeholder="Tìm kiếm nhân viên"
                     onSearch={value => console.log(value)}
                     style={{ width: '170px' }}
                />            
                </div>
                <ModalCreate
                    title="Thêm Nhân Viên"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    idTop = {idTop}
                    getDataCreate  = {this.getDateCreate}
                    onSubmit
                >                 
                </ModalCreate>
 
                <Table
                    scroll={{ x: 150 }}
                    style={{ color: 'black' }}
                    tableLayout={'auto'}
                    pagination={{ pageSize: 5 }}
                    rowKey={e => e.MaNV}
                    dataSource={employees}
                    // columns={columns} 
                    bordered
                >

                    <Column title='Mã Nhân Viên' dataIndex='MaNV' align='center'
                        sorter={(a, b) => a.MaNV - b.MaNV}
                    />
                    <Column title='Tên Nhân Viên' dataIndex='TenNV' align='center' sorter={(a, b) => a.TenNV - b.TenNV}/>
                    {/* <Column title='Tên Tài Khoản' dataIndex='TenTK' align='center' /> */}
                    {/* <Column title='Quyền' dataIndex='Quyen' align='center' sorter={(a, b) => a.Quyen - b.Quyen}/> */}
                    <Column title='Chức Vụ' dataIndex='Chucvu'  align='center' sorter={(a, b) => a.Quyen - b.Quyen}/>
                    <Column title='Thao tác' dataIndex='' align='center' render={(recore) =>< ActionsEmployee getEmployees={this.getEmployees} recore={recore} onEdit={this.onEdit}/>} />
                </Table>
            </Card>
        )
    }
}

export default Employees
