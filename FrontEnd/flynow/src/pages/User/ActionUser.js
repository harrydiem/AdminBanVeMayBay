import React, { Component } from 'react'
import { fetchLoading } from '../../common/utils/effect'

import { Button , Modal} from 'antd'

export class ActionUser extends Component {
    constructor(props){
        super(props)
        this.state = {
            OneUser: [],
            setState: true,
            Status: this.props.recore.TrangThai

        }
    }
    getAction =()  => { //RenDer lấy hàm này
        if(this.props.recore.TrangThai === 0){ //Trạng thái cũ == 0 (Chưa bị khóa) hiện button Khóa lại
                return(<Button type='danger' onClick={this.clickLock} size="small" icon='lock' >Khóa</Button>)           
        }
        else // Button mở khóa
        {
            return(<Button type='primary' onClick={this.clickLock} size="small" icon='unlock'>Mở</Button>)
        }    
    }
     clickLock = () =>{
        Modal.confirm({
            title: 'Bạn có chắc chắn muốn Thay đổi ?',
            // content: 'Điều này không thể hoàn tác lại !',
            okText : ' Đồng ý ',
            okType: 'danger',
            cancelText: 'Hủy',
            onOk : () => {
                this.setStatus()                      
            },
            onCancel : () => {
                
            },
        })
        
    }
    setStatus = async () => {
        if(this.props.recore.TrangThai===0){ //Lay cai status cu~ check
            await this.updateStatus(1)
        }else{
            await this.updateStatus(0)
        }
        this.getAction() 
    }

    updateStatus = async (status) => {
        let data = { 
            ID_KH :this.props.recore.ID_KH,
            TrangThai: status //Truyền từ Click
        }
        await fetchLoading({
            url: 'http://localhost:4000/db/user/status',
            method: 'POST',
            data :data
        })
        this.props.getAllUser() // Sau khi updata goi render lai
       //  console.log("Sua Xong",this.props.recore.TrangThai)

    }

    render() {

        // const {ID_KH} =this.props.recore
        // console.log(this.props.recore.ID_KH)
        return (
            <div>
                {this.getAction()}
                {/* <Button type='danger' icon='lock' onClick={this.clickFunc}>Khóa </Button> */}
                {/* {this.getAction} */}
            </div>
        )
    }
}

export default ActionUser
