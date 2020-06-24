import React, { Component } from 'react'
import { Modal  , Button } from 'antd'

import { fetchLoading } from '../../common/utils/effect';
import FormEditAriport from './FormEditAriport';


export class ModalEditAirport extends Component {
constructor(props){
    super(props)
    this.state = {
        OneAirport :[]
    }
}

getOneAirport = async (id) => {
    let result = await fetchLoading({
        url: 'http://localhost:4000/db/' +this.props.idEdit+ '/airport/',
        method: 'GET'
    })
    this.setState({
       OneAirport : result.data
    })
}

async componentDidMount(){
    await this.getOneAirport()
}

    render() {
        const {OneAirport} = this.state
        return (
            <div>
                <Modal
                    title="Sửa Sân Bay"                 
                    visible={this.props.visible}
                    onOk={this.props.onOk}                    
                    onCancel={this.props.onCancel}
                    footer={[
                        <Button key="back" type="danger" onClick={this.props.onCancel}>
                          Đóng
                        </Button>,
                      ]}
                 >
                    <FormEditAriport 
                    // idEdit = {this.props.idEdit}
                    onEdit = {this.props.onEdit}
                    onHandel
                    OneAirport = {OneAirport}
                     />         
                </Modal>
            </div>
        )
    }
}

export default ModalEditAirport
