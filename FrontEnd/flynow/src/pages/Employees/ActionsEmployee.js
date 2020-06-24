import React, { Component } from 'react'
import {
    Modal,
    Button,
    message
}
    from 'antd'
import "../../components/App.css";
import { fetchLoading } from '../../common/utils/effect'
import ModalEdit from "./ModalEdit"
function success(text){
    message.success(text);
};
export class ActionsEmployee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visibleEdit: false,
            // status: this.props.recore.TrangThai
        }
    }

    handleOkEdit = e => {
        this.setState({
            visibleEdit: false,
        });
    };

    handleCancelEdit = e => {
        this.setState({
            visibleEdit: false,
        });
    };
    updateStatus = async (status) => {
        // console.log(status)
        let data = {
            MaNV: this.props.recore.MaNV,
            TrangThai: status //Truyền từ Click
        }
        await fetchLoading({
            url: 'http://localhost:4000/db/employee/status',
            method: 'POST',
            data: data
        })
        this.props.getEmployees()
       success('Sửa thành công')
        // Sau khi updata goi render lai
        //  console.log("Sua Xong",this.props.recore.TrangThai)
    }
    setStatus = async () => {
        // console.log(this.props.recore.TrangThai)
        if (this.props.recore.TrangThai === 0) { //Lay cai status cu~ check
            await this.updateStatus(1)
        } else {
            await this.updateStatus(0)
        }
        this.showAction()
    }
    clickLock = () => {
        Modal.confirm({
            title: 'Bạn có chắc chắn về thay đổi này ?',
            okText: ' Đồng ý ',
            okType: 'danger',
            cancelText: 'Hủy',
            onOk: () => {
                this.setStatus()
                // success('Xóa thành công')                           
            },
            onCancel: () => {

            },
        })
    }
    clickEdit = () => {
        this.setState({
            visibleEdit: true,
        })
    }
    showAction = () => {
        let result = JSON.parse(localStorage.getItem('login'))
        let name = result.username
        let quyen = result.quyen
        // console.log("name",name)

        //Chưa được tối ưu !  
        if (this.props.recore.Quyen === 2) { //la` admin
            if (name === this.props.recore.TenTK) {// Chính là bản thân admin
                return (<Button onClick={this.clickEdit} className="btnSuaXoa" type='primary' icon='edit' size="small">Sửa</Button>)
            } else
                return (<div></div>)
        }
        else { // manager
            if (quyen === 1) {//Ko cho thao tác gì cả
                if (name === this.props.recore.TenTK) {// Chính là bản thân manager
                    return (<Button onClick={this.clickEdit} className="btnSuaXoa" type='primary' icon='edit' size="small">Sửa</Button>)
                } else
                    return (<div></div>)
            } else {
                if (this.props.recore.TrangThai === 0) {
                    return (<div>
                        <Button onClick={this.clickEdit} className="btnSuaXoa" type='primary' icon='edit' size="small">Sửa</Button>
                        <Button onClick={this.clickLock} className="btnSuaXoa" type='danger' icon='lock' size="small">Khóa</Button>
                    </div>)
                } else {
                    return (<div>
                        <Button onClick={this.clickEdit} className="btnSuaXoa" type='primary' icon='edit' size="small">Sửa</Button>
                        <Button onClick={this.clickLock} className="btnSuaXoa" type='primary' icon='unlock' size="small">Mở</Button>
                    </div>)
                }
            }


        }
    }


    render() {
        // console.log(this.props.recore)
        return (
            <div>
                {this.showAction()}
                {/* <Button onClick={this.clickEdit} className="btnSuaXoa" type='primary' icon='edit' size="small">Sửa</Button>
                <Button onClick={this.clickDelete} className="btnSuaXoa" type='danger' icon='lock' size="small">Khóa</Button> */}
                <ModalEdit
                    title="Sửa thông tin nhân viên"
                    visible={this.state.visibleEdit}
                    onOk={this.handleOkEdit}
                    onCancel={this.handleCancelEdit}
                    onSubmit
                    recore={this.props.recore}
                    //idEdit = {this.props.recore.ID_ChuyenBay}
                    onEdit={this.props.onEdit}
                />
            </div>
        )
    }
}

export default ActionsEmployee
