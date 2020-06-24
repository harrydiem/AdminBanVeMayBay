import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import {
    Form,
    Input,
    Icon,
    Button,
    DatePicker,
    message

} from 'antd';
// import moment from 'moment';
function success(text){
    message.success(text);
};


class FormEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
            date: '',
            time: '',
            ma: "20",
            // visibleEdit: true,
        }
        // console.log("props of FormCreate: ", this.props)
    }
    
    onChange = (value, dateString) => {

        var getDate = dateString.split(' ')[0] // yyyy-mm-dd
        var getTime = dateString.split(' ')[1] // HH-mm-ss

        this.setState({
            date: getDate,
            time: getTime
        });

    }
    onOk = (value, dateString) => {
        // console.log('onOk: ', value);
        // console.log('onOk: ', dateString);
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);
                var data = {
                    ID_ChuyenBay: this.props.idEdit,
                    MaMayBay: values.maMayBay,
                    MaChang: values.maChang,
                    SoGheConTrong: values.soGheTrong,
                    NgayDi: this.state.date,
                    ThoiGianDi: this.state.time,

                }
                success('Sửa thành công') 
                this.props.onEdit(data)
                this.props.visible(false)
                
            } else {
                console.log(err)
            }
        });
        
    };

    getDateTime = () => {
        var time = this.props.OneFlight[0].ThoiGianDi ;
        var date = this.props.OneFlight[0].NgayDi.split('T')[0];
        return date+' '+time
    }


    render() {
        // console.log("Render : ",this.props.OneFlight[0]);
        // console.log("Du lieu cu: ",this.props.OneFlight[0].MaMayBay);
        const { getFieldDecorator } = this.props.form;
        // const { autoCompleteResult } = this.state;
        // console.log(getFieldDecorator);
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
                <Form.Item label="Mã máy bay">
                    {getFieldDecorator('maMayBay', {
                        initialValue : this.props.OneFlight[0].MaMayBay,
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng nhập mã máy bay !'
                            },
                        ],
                    })(<Input />)}
                </Form.Item>


                <Form.Item label="Mã chặng">
                    {getFieldDecorator('maChang', {
                        initialValue : this.props.OneFlight[0].MaChang,
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng nhập mã chặng !'
                            },
                        ],
                    })(<Input />)}
                </Form.Item>
                
                <Form.Item label="Thời gian đi:">
                    {getFieldDecorator('time', {
                        //  initialValue : moment().fromNow(),
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng nhập chọn thời gian !'
                            },
                        ],
                    })(<DatePicker showTime placeholder={this.getDateTime()}
                        onChange={this.onChange}
                        onOk={this.onOk}     
                        // defaultValue={this.getDateTime()}             
                    />)}
                </Form.Item>

                <Form.Item label="Số ghế trống:">
                    {getFieldDecorator('soGheTrong', {
                        initialValue : this.props.OneFlight[0].SoGheConTrong,
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng nhập số !'
                            },
                        ],
                    })(<Input type='number' min={1} max={300} style={{ width: 120 }} maxLength={4} />)}
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


