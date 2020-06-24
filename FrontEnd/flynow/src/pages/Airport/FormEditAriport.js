import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import {
    Form,
    Input,
    Icon,
    Button,
    message

} from 'antd';
// import moment from 'moment';
function success(text){
    message.success(text);
};


class FormEditAirport extends Component {
    constructor(props) {
        super(props)
        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
            date: '',
            time: '',
            ma: "20",
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                 console.log('Received values of form: ', values);
                var data = {
                    MaSanBay: values.maSanBay,
                    TenSanBay: values.tenSanBay,
                    ThanhPho: values.thanhPho,
                    // SoGheConTrong: values.soGheTrong,
                    // NgayDi: this.state.date,
                    // ThoiGianDi: this.state.time,

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
        // console.log("Render : ",this.props.OneFlight[0]);
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
                <Form.Item label="Mã sân bay">
                    {getFieldDecorator('maSanBay', {
                        initialValue : this.props.OneAirport[0].MaSanBay,
                        // rules: [
                        //     {
                        //         required: true,
                        //         message: 'Vui lòng nhập mã máy bay !'
                        //     },
                        // ],
                    })(<Input disabled/>)}
                </Form.Item>


                <Form.Item label="Tên Sân Bay:">
                    {getFieldDecorator('tenSanBay', {
                        initialValue : this.props.OneAirport[0].TenSanBay,
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng nhập tên sân bay !'
                            },
                        ],
                    })(<Input/>)}
                </Form.Item>


                <Form.Item label="Thành Phố:">
                    {getFieldDecorator('thanhPho', {
                        initialValue : this.props.OneAirport[0].ThanhPho,
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng nhập số !'
                            },
                        ],
                    })(<Input />)}
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
export default Form.create({ name: 'register' })(FormEditAirport);


