import React, { Component } from 'react'
import {Modal, Button , message} from 'antd'
import "../../components/App.css";


import ModalEdit from './ModalEdit';
// const { confirm } = Modal;

function success(text){
    message.success(text);
};


export class actions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visibleEdit: false,
            idEdit : this.props.recore.ID_ChuyenBay
        }
    }

    // Dùng clickEdỉt thay vì showModal
    // showModal = () => {
    //     this.setState({            
    //         visible: true,
    //     })
    // }
    handleOkEdit = e => {
        // console.log(e);
        this.setState({
            visibleEdit: false,
        });
    };

    handleCancelEdit = e => {
        // console.log(e);
        this.setState({
            visibleEdit: false,
        });
    };

    clickDelete = ()=>{

        var result = JSON.parse(localStorage.getItem('login')) //{ username : "string" , quyen : num}
        if(result.quyen!==2){   //  1: admin , 2 :employee
            Modal.error({
                title: 'LỖI',
                content: 'Bạn không có quyền thực thi hành động này',
              });
        }
        else{
            Modal.confirm({
                title: 'Bạn có chắc chắn muốn xóa chuyến bay này ?',
                content: 'Điều này không thể hoàn tác lại !',
                okText : ' Đồng ý ',
                okType: 'danger',
                cancelText: 'Hủy',
                onOk : () => {
                    // this.callDelete()
                    this.props.onDelete(this.props.recore.ID_ChuyenBay)    
                    success('Xóa thành công')                           
                },
                onCancel : () => {
    
                },
            })
        }


        // this.props.onDelete(this.state.idEdit)   
        // console.log("Id chuyền từ action" ,this.props.recore.ID_ChuyenBay)        
        // this.props.onDelete(this.props.recore.ID_ChuyenBay)       
    }
    clickEdit= () => {
        this.setState({            
            visibleEdit: true,
        })
        // console.log("ID Cần sửa: ",this.props.recore.ID_ChuyenBay);
    }

    render() {
        return (
            <div>
                <Button onClick={this.clickEdit} className="btnSuaXoa" type='primary' icon='edit' size="small">Sửa</Button>
                <Button onClick={this.clickDelete} className="btnSuaXoa" type='danger' icon='delete' size="small">Xóa</Button>
                <ModalEdit
                    title="Sửa chuyến bay"
                    visible={this.state.visibleEdit}
                    onOk={this.handleOkEdit}
                    onCancel={this.handleCancelEdit}
                    onSubmit
                    idEdit = {this.props.recore.ID_ChuyenBay}
                    onEdit= {this.props.onEdit}  
                    // OneFight = {this.props.OneFight}                  
                />
            </div>
            

        )
    }
}


export default(actions)
