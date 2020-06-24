import React, { Component } from 'react'
import { Modal  , Button } from 'antd'
import FormCreate from './FormCreate'
// const FormItem = Form.Item

export class ModalCreate extends Component {
    render() {
        // console.log(this.props.idTop)
        return (
            <div>
                <Modal
                    
                    title="Thêm Nhân Viên"                
                    visible={this.props.visible}
                    onOk={this.props.onOk}
                    onCancel={this.props.onCancel}
                    footer={[
                        <Button key="back" type="danger" onClick={this.props.onCancel}>
                          Đóng
                        </Button>,
                      ]}
                >
                    <FormCreate
                        MaNV = {this.props.idTop}
                        getDataCreate={this.props.getDataCreate}
                    />                                  
                </Modal>
            </div>
        )
    }
}

export default ModalCreate
