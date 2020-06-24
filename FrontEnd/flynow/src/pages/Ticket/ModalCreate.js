import React, { Component } from 'react'
import { Modal  , Button } from 'antd'
import FormCreate from './FormCreate.js'
export class ModalCreate extends Component {
 
    render() {
        return (
            <div>
                <Modal
                    title="Thêm Hạng Vé"                
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
                          getDataCreate={this.props.getDataCreate}
                     />
                               
                
                </Modal>
            </div>
        )
    }
}

export default ModalCreate
