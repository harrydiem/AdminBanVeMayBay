import React, { Component } from 'react'
import { Modal  , Button } from 'antd'
import FormDetail from './FormDetail';

export class ModalDetail extends Component {

    render() {
        return (
            <div>
                <Modal
                    title="CHI TIẾT ĐƠN HÀNG"                 
                    visible={this.props.visible}
                    onOk={this.props.onOk}                    
                    onCancel={this.props.onCancel}
                    footer={[
                        <Button key="back" type="danger" onClick={this.props.onCancel}>
                          Đóng
                        </Button>,
                      ]}
                 >
                    <FormDetail
                    onEdit = {this.props.onEdit}
                    onHandel
                    recore={this.props.recore}
                    />         
                </Modal>
            </div>
        )    
    }
}

export default ModalDetail
