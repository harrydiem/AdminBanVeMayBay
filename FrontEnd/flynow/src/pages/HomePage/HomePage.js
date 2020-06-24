import React, { Component } from 'react'
// import { fetchLoading } from '../../common/utils/effect'



export class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            users: []
        }
    }
    // getData = async () => {
    //     let result = await fetchLoading({
    //         url:'http://localhost:4000/db/',
    //         method:'GET'
    //     })
    //     this.setState({
    //         users : result.data
    //     })
    //     // this.props.getData(result.data)
    // }
    // async componentDidMount(){ //Sau khi Render se chay va setState roi Render lai
        // await this.getData() 
        // var result = JSON.parse(localStorage.getItem('login'))
        // if(result){
        // }
        // else{
        //  this.props.history.push('/dangky')   
        // }
    
    render() {
        // const {users} = this.state
        // console.log(users)
        return (
            <div></div>
            // <div>
            //     this is : HomePage
                
            //    <Card>
            //         {/* Không cho table tràng ra sát lề */}     
            //        <TableDate users={users} /> 

            //     {/* <Table pagination={{
            //         pageSize:5,
            //         // size:'small' Làm mất Ô của class phân trang
            //     }} rowKey={k=>k.ID_KH} dataSource={users}>
            //         <Column title='Mã KH'  dataIndex='ID_KH'
            //                 //sorter={(a,b)=> a.id - b.id } sap xep id
            //         /> 
            //         <Column title='Tên KH' dataIndex='TenKH'></Column>
            //         <Column title='Ngày Sinh' dataIndex='NgaySinh'></Column>
            //         <Column title='CMND' dataIndex='CMND'></Column>
            //         <Column title='Giới Tính' dataIndex='GioiTinh'></Column>
            //     </Table> */}
            //    </Card>
            // </div>
        )
    }
    
}

// const mapDispathToProps = (dispatch)=>{
//     return {
//         getData:(data)=>{
//             return dispatch(actions.getData(data))
//         }
//     }
// }
// const mapStateToProps = (state)=>{
//     return {
//         users:state.list
//     }
// }

export default (HomePage)


