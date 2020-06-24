import React, { Component } from 'react'
// import { fetchLoading } from '../../common/utils/effect'

import {
    Form,
    Input,
    Icon,
    Button,
    message,
    Select,
} from 'antd';

function success(text){
    message.success(text);
};

const { Option } = Select;



class FormCreate extends Component {
    constructor(props){
        super(props)
        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
            // MaNV : ''
        }
    }


    getData = (object) =>{
        // console.log("object get :",object)
        this.props.getDataCreate(object)
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                let MaNV = parseInt(this.props.MaNV.split('_')[1])+1
                // console.log('maNV TOP',MaNV)
                //  console.log('Received values of form: ', values);
                 if(values.Chucvu==='Manager'){}
                 var Quyen = (values.Chucvu==='Manager')? 1 : 2 
                var data = {
                    MaNV: 'NV_'+MaNV,
                    TenNV : values.TenNV,
                    TenTK  : values.TenTK,
                    MatKhau: values.MatKhau,
                    Chucvu  : values.Chucvu,
                    Quyen: Quyen                
                }
                this.getData(data)
                // console.log("send data: ",data)
                success('Thêm Thành Công')
            }else{
                console.log(err)
            }
            
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        // const { autoCompleteResult } = this.state;
        // console.log(MaNV[0].MAX(MaNV))

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };


        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="Mã nhân viên:">                   
                    {getFieldDecorator('MaNV', {
                        initialValue : "Được tạo tự động",
                        // rules: [
                        //     {
                        //         required: true,
                        //         message: 'Vui lòng nhập điểm đi !' 
                        //     },
                        // ],
                    })(<Input disabled />)}
                </Form.Item>


                <Form.Item label="Tên nhân viên:">
                    {getFieldDecorator('TenNV', {
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng nhập tên nhân viên !' 
                            },
                        ],
                    })(<Input placeholder="Nhập tên nhân viên"/>)}
                </Form.Item>
                

                <Form.Item label="Tên tài khoản">
                    {getFieldDecorator('TenTK', {
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng nhập tên tài khoản!' 
                            },
                        ],
                    })(<Input  placeholder="Nhập tên tài khoản"/>)}
                </Form.Item>
                <Form.Item label="Mật khẩu">
                    {getFieldDecorator('MatKhau', {
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng nhập mật khẩu!' 
                            },
                        ],
                    })(<Input.Password placeholder="Nhập mật khẩu"/>)}
                </Form.Item>           
                    
                <Form.Item label="Chức vụ:">
                    {getFieldDecorator('Chucvu', {
                        initialValue: 'Manager'
                        // rules: [{ required: true, 
                        // message: 'Please input your phone number!' }],
                    })( <Select
                        style={{ width: '32%' }}
                      >
                        <Option value="Admin">Admin</Option>
                        <Option value="Manager">Manager</Option>
                      </Select>)}
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    <Button  type="infor" >                   
                        Reset
                   </Button>
                    <Button style={{ marginLeft :10}} type="primary" htmlType="submit" >
                    <Icon type="plus" />
                        Thêm
                   </Button>                   
                </Form.Item>
            </Form>
        )
    }
}
export default Form.create({ name: 'register' })(FormCreate);


