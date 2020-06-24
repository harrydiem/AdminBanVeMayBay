import React, { Component } from 'react'
import { Modal  , Button } from 'antd'
import { fetchLoading } from '../../common/utils/effect';
import FormEdit from './FormEdit';

export class ModalEdit extends Component {
    constructor(props){
        super(props)
        this.state = {
            OneLocation :[]
        }
    }
    getOneLocation = async (id) => {
        let result = await fetchLoading({
            url: 'http://localhost:4000/db/' +this.props.idEdit+ '/location/',
            method: 'GET'
        })
        this.setState({
           OneLocation : result.data
        })
    }
    
    async componentDidMount(){
        await this.getOneLocation()
    }
    
    render() {
        const {OneLocation} = this.state
        // console.log("L: ",OneLocation)
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
                    // idEdit = {this.props.idEdit}
                    onEdit = {this.props.onEdit}
                    onHandel
                    OneLocation = {OneLocation}
                    />         
                </Modal>
            </div>
        )    
    }
}

export default ModalEdit
