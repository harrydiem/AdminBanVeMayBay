import React, { Component } from "react";
import { Form, Icon, Input, Button, Card, Row, Col ,message} from 'antd';
import '../../components/App.css'
import { fetchLoading } from './../../common/utils/effect'
import { withRouter } from 'react-router-dom'

const success = (text) => {
  message.success(text);
};
const error = (text) => {
  message.error(text);
};
export class LoginAdmin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      TenTK: "",
      MatKhau: ""
    }
    // console.log('1.Constructor');
  }
  updateData(txtInput) {
    var target = txtInput.target; // => <input type="..." name="txtName" value="admin123" />
    var name = target.name //  => txtName
    var value = target.value // => admin123
    this.setState({
      [name]: value
    })
  }
  onHandleSubmit = async (e) => {
    e.preventDefault()
    localStorage.removeItem('login'); //Xóa Local trước để tạo mới

    let data = {
      TenTK: this.state.TenTK,
      MatKhau: this.state.MatKhau
    }
    //  console.log("Dữ liệu: ", data)
    try {
      let result = await fetchLoading({
        url: 'http://localhost:4000/db/login',
        method: 'POST',
        data: data
      })
      if (result.data.length !== 0) {
        if (result.status === 200) {
          success("Đăng nhập thành công")
          var loginLocal = {
            username: result.data[0].TenTK,
            quyen: result.data[0].Quyen,
          }
          localStorage.setItem('login', JSON.stringify(loginLocal))        
          //  this.props.history.push('/')
          window.location.assign('/')  
          // var result = JSON.parse(localStorage.getItem('login'))
        }
      }
      else {

        error("Đăng nhập thất bại")
      }
    } catch (error) {
      console.log(error);
    }

  }

  render() {

    return (
      <div style={{}}>
        <div>
          <Row type="flex" justify="center">
            <Col span={9}>
            </Col>
            <Col span={6} >
              <Card style={{
                margin: '100px 0 0 0',
                background: '#f5f5f5'
              }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#1890ff' }}>LOGIN ADMIN</h2>
                <Form className="login-form" onSubmit={(e) => this.onHandleSubmit(e)}>
                  <Form.Item>
                    <Input
                      pattern= '^\w+$|^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$'                      
                      name="TenTK"
                      style={{ size: '100px' }}
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Username"
                      onChange={(txtInput) => this.updateData(txtInput)}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Input.Password
                      name="MatKhau"
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password"
                      placeholder="Password"

                      onChange={(txtInput) => this.updateData(txtInput)}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                      Log in
                            </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
            <Col span={9}>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default withRouter(LoginAdmin)

// const info = {name: 'Diem' , age: 20 }
// localStorage.setItem('login',JSON.stringify(info))
// const ketqua = localStorage.getItem('login') 
// ketqua
// "{"name":"Diem","age":20}"