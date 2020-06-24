import React, { Component } from 'react'
import { Modal,
         Button ,
         message} 
from 'antd'
import "../../components/App.css";
// import FormEditAriport from './FormEditAriport';
import ModalEditAirport from './ModalEditAirport';


function success(text){
    message.success(text);
};

export class actionAirport extends Component {
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
        // console.log('Id ', this.props.recore.MaSanBay )     
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
                    this.props.onDelete(this.props.recore.MaSanBay)    
                    success('Xóa thành công')                           
                },
                onCancel : () => {
                    
                },
            })
        }
    }
    clickEdit= () => {
        var result = JSON.parse(localStorage.getItem('login')) //{ username : "string" , quyen : num}
        if(result.quyen!==2){   //  1: admin , 2 :employee
            Modal.error({
                title: 'LỖI',
                content: 'Bạn không có quyền thực thi hành động này',
              });
        }
        else{
            this.setState({            
                visibleEdit: true,
            }) 
        }
              
    }

    render() {
        return (
            <div>
                <Button onClick={this.clickEdit} className="btnSuaXoa" type='primary' icon='edit' size="small">Sửa</Button>
                <Button onClick={this.clickDelete} className="btnSuaXoa" type='danger' icon='delete' size="small">Xóa</Button>
                <ModalEditAirport 
                    title="Sửa chuyến bay"
                    visible={this.state.visibleEdit}
                    onOk={this.handleOkEdit}
                    onCancel={this.handleCancelEdit}
                    onSubmit
                    idEdit = {this.props.recore.MaSanBay}
                    onEdit= {this.props.onEdit}  
                    // OneFight = {this.props.OneFight}                  
                />
            </div>
            

        )
    }
}


export default(actionAirport)
