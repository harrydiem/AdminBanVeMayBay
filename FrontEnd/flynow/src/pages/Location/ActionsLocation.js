import React, { Component } from 'react'
import { Modal,
        Button ,
        message} 
from 'antd'
import "../../components/App.css";
import ModalEdit from './ModalEdit'
function success(text){
    message.success(text);
};
export class ActionsLocation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visibleEdit: false,
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

    clickDelete = ()=>{

           Modal.confirm({
                title: 'Bạn có chắc chắn muốn xóa chuyến bay này ?',
                content: 'Điều này không thể hoàn tác lại !',
                okText : ' Đồng ý ',
                okType: 'danger',
                cancelText: 'Hủy',
                onOk : () => {                   
                    success('Xóa thành công')        
                    this.props.onDelete(this.props.recore.ID_Chang)                     
                },
                onCancel : () => {
   
                },
            }) 
    }
    clickEdit= () => {
        this.setState({            
            visibleEdit: true,
        })       
    }
    render() {
        return (
            <div>
                <div>
                <Button onClick={this.clickEdit} className="btnSuaXoa" type='primary' icon='edit' size="small">Sửa</Button>
                <Button onClick={this.clickDelete} className="btnSuaXoa" type='danger' icon='delete' size="small">Xóa</Button>
                <ModalEdit
                    title="Sửa chuyến bay"
                    visible={this.state.visibleEdit}
                    onOk={this.handleOkEdit}
                    onCancel={this.handleCancelEdit}
                    onSubmit
                    idEdit = {this.props.recore.ID_Chang}
                    onEdit= {this.props.onEdit}  
                    // OneFight = {this.props.OneFight}                  
                />
            </div>
            </div>
        )
    }
}

export default ActionsLocation
