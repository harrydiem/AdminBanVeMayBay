import React, { Component } from 'react'
import { Modal  , Button } from 'antd'
import FormEdit from './FormEdit'

import { fetchLoading } from '../../common/utils/effect';


export class ModalEdit extends Component {
constructor(props){
    super(props)
    this.state = {
        OneFlight :[]
    }
}

getOneFlight = async (id) => {
    let result = await fetchLoading({
        url: 'http://localhost:4000/db/' +this.props.idEdit+ '/flight/',
        method: 'GET'
    })
    this.setState({
        OneFlight : result.data
    })
}

async componentDidMount(){
    await this.getOneFlight()
}

    render() {
        const {OneFlight} = this.state
        return (
            <div>
                <Modal
                    title="Sửa chuyến bay"                 
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
                    idEdit = {this.props.idEdit}
                    onEdit = {this.props.onEdit}
                    onHandel
                    OneFlight = {OneFlight}
                     />         
                </Modal>
            </div>
        )
    }
}

export default ModalEdit
