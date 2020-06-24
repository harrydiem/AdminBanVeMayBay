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
                //  console.log('Received values of form: ', values);
                var data = {
                    ID_Chang: this.props.OneLocation[0].ID_Chang,
                    DiemDi: values.DiemDi,
                    DiemDen: values.DiemDen,
                    SanBayDi: values.SanBayDi,
                    SanBayDen: values.SanBayDen,
                    Gia: values.Gia,

                }
                success('Sửa thành công') 
                this.props.onEdit(data)
                this.props.visible(false)               
            } else {
                console.log(err)
            }
        });
        
    };
    render() {
        // console.log("Render : ",this.props.OneLocation[0]);
        // console.log("Du lieu cu: ",this.props.OneFlight[0].MaMayBay);
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
                <Form.Item label="Mã Chặng">
                    {getFieldDecorator('MaChang', {
                        initialValue : this.props.OneLocation[0].ID_Chang,
                        // rules: [
                        //     {
                        //         required: true,
                        //         message: 'Vui lòng nhập mã máy bay !'
                        //     },
                        // ],
                    })(<Input disabled/>)}
                </Form.Item>


                <Form.Item label="Điểm Đi:">
                    {getFieldDecorator('DiemDi', {
                         initialValue : this.props.OneLocation[0].DiemDi,
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng nhập điểm đi !'
                            },
                        ],
                    })(<Input/>)}
                </Form.Item>


                <Form.Item label="Điểm đến:">
                    {getFieldDecorator('DiemDen', {
                        initialValue : this.props.OneLocation[0].DiemDen,
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng nhập sân bay đi !'
                            },
                        ],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Sân bay đi:">
                    {getFieldDecorator('SanBayDi', {
                        initialValue : this.props.OneLocation[0].SanBayDi,
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng nhập sân bay đi !'
                            },
                        ],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Sân bay đến:">
                    {getFieldDecorator('SanBayDen', {
                        initialValue : this.props.OneLocation[0].SanBayDen,
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng nhập sân bay đến!'
                            },
                        ],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Giá:">
                    {getFieldDecorator('Gia', {
                        initialValue : this.props.OneLocation[0].Gia,
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng nhập số !'
                            },
                        ],
                    })(<Input type='number' />)}
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


