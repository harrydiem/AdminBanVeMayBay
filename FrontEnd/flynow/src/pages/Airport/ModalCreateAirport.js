import React, { Component } from 'react'
import { Modal  , Button } from 'antd'
import FormCreateAirport from './FormCreateAirport.js'
// import FormCreateAirport from './FormCreateAirport'
// const FormItem = Form.Item

export class ModalCreateAirport extends Component {
 

    render() {
        return (
            <div>
                <Modal
                    title="Thêm Sân Bay"                
                    visible={this.props.visible}
                    onOk={this.props.onOk}
                    onCancel={this.props.onCancel}
                    footer={[
                        <Button key="back" type="danger" onClick={this.props.onCancel}>
                          Đóng
                        </Button>,
                      ]}
                 >
                    <FormCreateAirport 
                          getDataCreate={this.props.getDataCreate}
                     />
                    
                
                
                </Modal>
            </div>
        )
    }
}

export default ModalCreateAirport
