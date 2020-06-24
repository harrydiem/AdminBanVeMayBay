import React, { Component } from 'react'
import { Table } from 'antd'
import Column from 'antd/lib/table/Column'
// import { connect } from 'react-redux'

export class TableData extends Component {

    
    render() {
        const {users}  = this.props
        //  console.log("props table",this.props)
        return (
            <div>
                
                <Table pagination={{pageSize: 5}}  
                    rowKey={e => e.ID_KH} 
                    dataSource={users}
                    // thay vì dùng props để lấy user[] thì TABLE tự lên Store lấy 
                    >                  
                    <Column title='Mã KH' dataIndex='ID_KH'
                    //sorter={(a,b)=> a.id - b.id } sap xep id
                    />
                    <Column title='Tên KH' dataIndex='TenKH'></Column>
                    <Column title='Ngày Sinh' dataIndex='NgaySinh'></Column>
                    <Column title='CMND' dataIndex='CMND'></Column>
                    <Column title='Giới Tính' dataIndex='GioiTinh'></Column>
                </Table>

            </div>
        )
    }
}

// const mapStateToProps = (state)=>{
//     return {
//         users:state.list // Component chính chuyền dữ liệu vào store , và userss sẽ lẩy ra 
//     }
// }

export default (TableData)
