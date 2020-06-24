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
                    TenHangVe : values.TenHangVe,
                    GiaHangVe  : values.GiaHangVe,                                   
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
                <Form.Item label="Tên Hạng Vé:">
                    {getFieldDecorator('TenHangVe', {
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng nhập tên hạng vé !' 
                            },
                        ],
                    })(<Input placeholder="Nhập tên hạng vé"/>)}
                </Form.Item>

                <Form.Item label="Giá:">
                    {getFieldDecorator('GiaHangVe', {
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng nhập giá!' 
                            },
                        ],
                    })(<Input type='number'  placeholder="Nhập giá"/>)}
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


