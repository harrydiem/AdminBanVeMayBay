import React, { Component } from 'react'
import { Modal  , Button } from 'antd'
import FormCreate from './FormCreate'
// const FormItem = Form.Item

export class ModalCreate extends Component {
 

    render() {
        return (
            <div>
                <Modal
                    title="Thêm chuyến bay"
                    
                    visible={this.props.visible}
                    onOk={this.props.onOk}
                    onCancel={this.props.onCancel}
                    footer={[
                        <Button key="back" type="danger" onClick={this.props.onCancel}>
                          Đóng
                        </Button>,
                        // <Button key="submit" type="primary" onClick={this.props.onOk}>
                        //   Hoàn thành
                        // </Button>,
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
