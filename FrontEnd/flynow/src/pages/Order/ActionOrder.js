import React, { Component } from 'react'
import { 
        Button ,
    } 
from 'antd'
import "../../components/App.css";
import ModalDetail from './ModalDetail'

export class ActionOrder extends Component {
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

    clickEdit= () => {
        this.setState({            
            visibleEdit: true,
        })       
    }
    render() {
        return (
            <div>               
                <Button onClick={this.clickEdit} className="btnSuaXoa" type='primary' icon='info-circle' size="small">Chi tiết</Button>
                <ModalDetail
                 title="THÔNG TIN ĐƠN HÀNG"
                 visible={this.state.visibleEdit}
                 onOk={this.handleOkEdit}
                 onCancel={this.handleCancelEdit}
                 onSubmit
                 recore={this.props.recore}
                ></ModalDetail>    
            </div>
        )
    }
}

export default ActionOrder
