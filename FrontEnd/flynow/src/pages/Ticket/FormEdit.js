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


class FormEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                 console.log('Received values of form: ', values);
                var data = {
                    MaHangVe: this.props.recore.MaHangVe,
                    TenHangVe: values.DiemDi,
                    GiaHangVe: values.GiaHangVe,
                }
                success('Sửa thành công') 
                this.props.onEdit(data)
            } else {
                console.log(err)
            }
        });
        
    };
    render() {
        const { getFieldDecorator } = this.props.form;
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
            <div>
            <Form {...formItemLayout} onSubmit={this.handleSubmit}  >
                <Form.Item label="Mã Hạng Vé">
                    {getFieldDecorator('MaHangVe', {
                        initialValue : this.props.recore.MaHangVe,
                    })(<Input disabled/>)}
                </Form.Item>


                <Form.Item label="Tên Hạng Vé:">
                    {getFieldDecorator('DiemDi', {
                         initialValue : this.props.recore.TenHangVe,
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng nhập điểm đi !'
                            },
                        ],
                    })(<Input/>)}
                </Form.Item>


               
                <Form.Item label="Giá:">
                    {getFieldDecorator('GiaHangVe', {
                        initialValue : this.props.recore.GiaHangVe,
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng nhập số !'
                            },
                        ],
                    })(<Input type='number'/>)}
                </Form.Item>



                <Form.Item {...tailFormItemLayout}>
                    <Button type="infor" >
                        Reset
                   </Button>
                    <Button style={{ marginLeft: 10 }} type="primary" htmlType="submit" >
                        <Icon type="edit" />
                        Sửa
                       
                   </Button>
                </Form.Item>
            </Form>
            </div>
        )
    }
}
export default Form.create({ name: 'register' })(FormEdit);


