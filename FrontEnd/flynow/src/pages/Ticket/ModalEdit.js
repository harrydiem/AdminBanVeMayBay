import React, { Component } from 'react'
import { Modal  , Button } from 'antd'
import FormEdit from './FormEdit';

export class ModalEdit extends Component {

    render() {
        return (
            <div>
                <Modal
                    title="Sửa Chặng Bay"                 
                    visible={this.props.visible}
                    onOk={this.props.onOk}                    
                    onCancel={this.props.onCancel}
                    footer={[
                        <Button key="back" type="danger" onClick={this.props.onCancel}>
                          Đóng
                        </Button>,
                      ]}
                 >
                    <FormEdit 
                    onEdit = {this.props.onEdit}
                    onHandel
                    recore={this.props.recore}
                    />         
                </Modal>
            </div>
        )    
    }
}

export default ModalEdit
