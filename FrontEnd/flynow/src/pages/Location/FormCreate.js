import React, { Component } from 'react'

import {
    Form,
    Input,
    Icon,
    Button,
    message
} from 'antd';

function success(text){
    message.success(text);
};

class FormCreate extends Component {
    constructor(props){
        super(props)
        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
            // MaSanBay: '',
            // TenSanBay: '',
            // ThanhPho: ''
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

                //  console.log('Received values of form: ', values);
                var data = {
                    DiemDi : values.DiemDi,
                    DiemDen  : values.DiemDen,
                    SanBayDi: values.SanBayDi,
                    SanBayDen  : values.SanBayDen,
                    Gia: values.Gia                  
                }
                this.getData(data)
                success('Thêm Thành Công')
            }else{
                console.log(err)
            }
            
        });
    };



    render() {
        const { getFieldDecorator } = this.props.form;
        // const { autoCompleteResult } = this.state;

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
                <Form.Item label="Điểm Đi:">
                    {getFieldDecorator('DiemDi', {
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng nhập điểm đi !' 
                            },
                        ],
                    })(<Input placeholder="Nhập điểm đi"/>)}
                </Form.Item>


                <Form.Item label="Điểm đến:">
                    {getFieldDecorator('DiemDen', {
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng nhập điểm đến !' 
                            },
                        ],
                    })(<Input placeholder="Nhập điểm đến"/>)}
                </Form.Item>
                

                <Form.Item label="Sân bay đi">
                    {getFieldDecorator('SanBayDi', {
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng nhập sân bay đi!' 
                            },
                        ],
                    })(<Input  placeholder="Nhập sân bay đi"/>)}
                </Form.Item>
                <Form.Item label="Sân bay đến">
                    {getFieldDecorator('SanBayDen', {
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng nhập sân bay đến!' 
                            },
                        ],
                    })(<Input  placeholder="Nhập sân bay đến"/>)}
                </Form.Item>
                <Form.Item label="Giá:">
                    {getFieldDecorator('Gia', {
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng nhập giá!' 
                            },
                        ],
                    })(<Input type='number' placeholder="Nhập giá"/>)}
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


