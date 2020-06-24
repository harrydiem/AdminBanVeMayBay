import React, { Component } from 'react'
import { Modal  , Button } from 'antd'

// import { fetchLoading } from '../../common/utils/effect';
import FormEdit from './FormEdit';


export class ModalEdit extends Component {
// constructor(props){
//     super(props)
//     this.state = {
//         OneAirport :[]
//     }
// }

// getOneAirport = async (id) => {
//     // let result = await fetchLoading({
//     //     url: 'http://localhost:4000/db/' +this.props.idEdit+ '/airport/',
//     //     method: 'GET'
//     // })
//     // this.setState({
//     //    OneAirport : result.data
//     // })
// }

// async componentDidMount(){
//     await this.getOneAirport()
// }

    render() {
        // const {OneAirport} = this.state
        // console.log("recore: ",this.props.recore)
        return (
            <div>
                <Modal
                    title="Sửa Thông Tin"                 
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
                    //idEdit = {this.props.idEdit}
                    onEdit = {this.props.onEdit}
                    onHandel
                    recore={this.props.recore}
                    // OneAirport = {OneAirport}
                     />         
                </Modal>
            </div>
        )
    }
}

export default ModalEdit
