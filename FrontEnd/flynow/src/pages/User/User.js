import React, { Component } from 'react'
import { fetchLoading } from '../../common/utils/effect'
import { Table, Card, Button, Input} from 'antd'
import "../../components/App.css";
import Column from 'antd/lib/table/Column'
import ActionUser from './ActionUser';
const { Search } = Input;

export class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: [],
        }
    }
    onLoad(){
        var Quyen =1
        if(Quyen === 1){
        return(<Button type='danger' icon='lock' >Khóa </Button>)
        }else{
        return(<Button type='primary' icon='unlock'>Mở</Button>)
        }  
    }
    // getAction =(ma) => {
    //     var id = ma
    //     // var result =this.getOneUser(id)
    //     //  console.log(result)
    //     var Quyen =1
    //     if(Quyen === 1){
    //     return(<Button type='danger' icon='lock' onClick={(id)=>this.getData(id)}>Khóa {id}</Button>)
    //     }else{
    //     return(<Button type='primary' icon='unlock' onClick={(id)=>this.getData(id)}>Mở {id}</Button>)
    //     }    
    // }
    //<Button type='danger' icon='lock'>Khóa</Button>
    //<Button type='primary' icon='unlock'>Mở</Button>
    // cLick = (id) => {
    //     console.log(id)
    // }
    // getData = async (id) => {
    //     console.log("id",id)
    //     let result = await this.getOneUser(id)
    //     return result
    // }
    // getOneUser = async (id) => {
    //     let result = await fetchLoading({
    //         url: 'http://localhost:4000/db/'+id+'/user/',
    //         method: 'GET'
    //     })
    //     this.setState({
    //         OneUser: result.data
    //     })
    //     console.log("ID one ",result.data)
    //     return result.data
    // }
    getUser = async () => {
        let result = await fetchLoading({
            url: 'http://localhost:4000/db/user/',
            method: 'GET'
        })
        this.setState({
            user: result.data
        })
    }

    async componentDidMount() { //Sau khi Render se chay va setState roi Render lai
        await this.getUser()
    }  

    // formatDate = (input) => {
    //     var datePart = input.match(/\d+/g),
    //     year = datePart[0], // get only two digits
    //     month = datePart[1], day = datePart[2];   
    //     return day+'/'+month+'/'+year;
    //   }

    render() {
        const { user } = this.state
        // console.log(user)
        // const {OneUser} = this.state
        // console.log("One",OneUser)
        return (
            <Card>
                <div className="listAction">
                <Search
                     placeholder="Tìm kiếm khách hàng"
                     onSearch={value => console.log(value)}
                     style={{ width: 170 , margin:"0 0 0 0px" }}
                />            
                </div>
                <Table
                    scroll={{ x: 150 }}
                    style={{ color: 'black' }}
                    tableLayout={'auto'}
                    pagination={{ pageSize: 5 }}
                    rowKey={e => e.ID_KH}
                    dataSource={user}
                    // columns={columns} 
                    bordered
                >

                    <Column title='Mã KH' dataIndex='MaKH' align='center'
                        sorter={(a, b) => a.ID_KH- b.ID_KH}
                    />
                    <Column title='Tên KH' dataIndex='TenKH' align='center' sorter={(a, b) => a.TenKH - b.TenKH}/>
                    <Column title='CMND' dataIndex='CMND' align='center' />
                    <Column title='SĐT' dataIndex='SDT' align='center' />
                    <Column title='Ngày Sinh' dataIndex='NgaySinh' sorter={(a, b) => a.NgaySinh - b.NgaySinh} 
                    // render={(recore) =>this.formatDate(recore.NgaySinh)} //Vì ko có dữ liệu ngay sinh nen loi
                     align='center'/>
                    <Column title='Giới tính' dataIndex='GioiTinh' sorter={(a, b) => a.GioiTinh - b.Gioitinh}  align='center' />
                    <Column title='Tên tài khoản' dataIndex='TenDangNhap'  align='center' />
                    <Column title='Thao tác' dataIndex='' align='center' render={(recore)=><ActionUser getAllUser={this.getUser} recore={recore}/>} />
                </Table>
            </Card>
        )
    }
}

export default User

