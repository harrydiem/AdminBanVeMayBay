import React, { Component } from "react";
import { Form, Input, Icon, Button, message, Select } from "antd";
function success(text) {
  message.success(text);
}
const { Option } = Select;


class FormEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
      date: "",
      time: "",
      ma: "20"
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
        console.log("Received values of form: ", values);
        let Quyen =(values.Chucvu ==='Manager')?1:2;
        var data = {
          MaNV: values.MaNV,
          TenNV: values.TenNV,
          TenTK: values.TenTK,
          MatKhau: values.MatKhau,
          Quyen: Quyen,
          Chucvu: values.Chucvu,
        };
        
        // console.log("data:",data)
        this.props.onEdit(data)
        success("Sửa thành công");
        // this.props.visible(false)
      } else {
        console.log(err);
      }
    });
  };
  showChucVu = () => {   
    let result = JSON.parse(localStorage.getItem("login"));
    let quyen = result.quyen;
    // let Chucvu = quyen === 1 ? "Manage" : "Admin";
    if (quyen===2) {
        if(this.props.recore.Quyen===1){
            return (
                <Select style={{ width: "32%" }}>
                  <Option value="Manager">Manager</Option>
                  <Option value="Admin">Admin</Option>
                </Select>
              )
        }else{
            return (
                <Select style={{ width: "32%" }}>
                  <Option value="Manager">Manager</Option>
                  <Option value="Admin">Admin</Option>
                </Select>
              )
        }
      
    }else{
        return(
            <Select style={{ width: "32%" }} disabled>
              <Option value="Admin">Admin</Option>
              <Option value="Manager">Manager</Option>
            </Select>
        )
    }
  };
  render() {
    const Chucvu = (this.props.recore.Quyen===1)?"Manager":"Admin"
    const { recore } = this.props;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    
    return (
      <div>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="Mã nhân viên:">
            {getFieldDecorator("MaNV", {
              initialValue: recore.MaNV

            })(<Input disabled />)}
          </Form.Item>
          <Form.Item label="Tên tài khoản:">
            {getFieldDecorator("TenTK", {
              initialValue: recore.TenTK

            })(<Input disabled />)}
          </Form.Item>

          <Form.Item label="Tên nhân viên:">
            {getFieldDecorator("TenNV", {
              initialValue: recore.TenNV,
              rules: [
                {
                  required: true,
                  message: "Vui lòng nhập tên nhân viên !"
                }
              ]
            })(<Input />)}
          </Form.Item>

          <Form.Item label="Mật khẩu:">
            {getFieldDecorator("MatKhau", {
              initialValue: recore.MatKhau,
              rules: [
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu !"
                }
              ]
            })(<Input.Password />)}
          </Form.Item>

            <Form.Item label="Chức vụ:">
                {getFieldDecorator("Chucvu", {
                    initialValue: Chucvu
                })(
                    this.showChucVu()
                )}
            </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="infor">Reset</Button>
            <Button style={{ marginLeft: 10 }} type="primary" htmlType="submit">
              <Icon type="edit" />
              Sửa
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
export default Form.create({ name: "register" })(FormEdit);
