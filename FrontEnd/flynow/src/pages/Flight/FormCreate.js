import React, { Component } from 'react'

import {
    Form,
    Input,
    Icon,
    Button,
    DatePicker,
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
            maMayBay: '',
            maChang: '',
            date: '', //dạng trong sql: yyyy-mm-dd
            time: '', // HH:mm:ss
            soGheTrong: ''
        }
        // console.log("props of FormCreate: ",this.props)
    }
    getData = (object) =>{
        // console.log("object get :",object)
        this.props.getDataCreate(object)
    }


    onChange = (value, dateString)  => {
        var getDate = dateString.split(' ')[0] // yyyy-mm-dd
        var getTime = dateString.split(' ')[1] // HH-mm-ss

        this.setState({
            date : getDate ,
            time : getTime
        });        

        // this.getDateTimeInForm(getDate,getTime)
    }
      onOk = (value,dateString) => {
        // console.log('onOk: ', value);
        // console.log('onOk: ', dateString);
      }

    handleSubmit = e => {
        e.preventDefault();

        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);
                var data = {
                    MaMayBay : values.maMayBay,
                    MaChang  : values.maChang,
                    SoGheConTrong: values.soGheTrong,
                    NgayDi: this.state.date,
                    ThoiGianDi: this.state.time,
                    
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
                <Form.Item label="Mã máy bay">
                    {getFieldDecorator('maMayBay', {
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng nhập mã máy bay !' 
                            },
                        ],
                    })(<Input placeholder="Nhập mã máy bay"/>)}
                </Form.Item>


                <Form.Item label="Mã chặng">
                    {getFieldDecorator('maChang', {
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng nhập mã chặng !' 
                            },
                        ],
                    })(<Input placeholder="Nhập mã chặng"/>)}
                </Form.Item>
                
                <Form.Item label="Thời gian đi:">
                    {getFieldDecorator('time', {
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng nhập chọn thời gian !' 
                            },
                        ],
                    })( <DatePicker  showTime placeholder="Chọn thời gian" 
                            onChange={this.onChange}
                            onOk={this.onOk} 
                            // getDateTime={this.getDateTime}
                            />)}
                </Form.Item>

                <Form.Item label="Số ghế trống:">
                    {getFieldDecorator('soGheTrong', {
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng nhập số !' 
                            },
                        ],
                    })(<Input type='number' min={1} max={300} style={{ width: 200 }} maxLength={4} placeholder="Nhập số ghế trống"/>)}
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


