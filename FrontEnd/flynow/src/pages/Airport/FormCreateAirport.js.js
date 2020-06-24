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

class FormCreateAirport extends Component {
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
        console.log("object get :",object)
        this.props.getDataCreate(object)
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {

                 console.log('Received values of form: ', values);
                var data = {
                    MaSanBay : values.maSanBay,
                    TenSanBay  : values.tenSanBay,
                    ThanhPho: values.thanhPho,                  
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
                <Form.Item label="Mã sân bay:">
                    {getFieldDecorator('maSanBay', {
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng nhập mã sân bay !' 
                            },
                        ],
                    })(<Input />)}
                </Form.Item>


                <Form.Item label="Tên Sân Bay:">
                    {getFieldDecorator('tenSanBay', {
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng nhập tên sân bay !' 
                            },
                        ],
                    })(<Input />)}
                </Form.Item>
                

                <Form.Item label="Thành phố">
                    {getFieldDecorator('thanhPho', {
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng thành phố !' 
                            },
                        ],
                    })(<Input  />)}
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
export default Form.create({ name: 'register' })(FormCreateAirport);


