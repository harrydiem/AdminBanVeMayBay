import React, { Component } from "react";
import { Avatar, Dropdown , Menu, Icon} from "antd";
import { Link , withRouter} from 'react-router-dom'

const menu = (
    <Menu>
      <Menu.Item>
        <Link to='/employees'>
        <Icon type="idcard" />  Quản lý thông tin
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/homepage' target="_blank" rel="noopener noreferrer" >
          <Icon type='setting'/>  Cài đặt
        </Link>
      </Menu.Item>
      <Menu.Item onClick={() => {localStorage.removeItem('login');}}>
        <Link to='/dangnhap' >
        <Icon type="logout" />  Đăng xuất
        </Link>
      </Menu.Item>
    </Menu>
  );




export class Avata extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      name : '',
      Avatar : ''
    }
    // console.log("truoc ",this.state)
  }
  

  componentDidMount(){
    this.getAvatar()
    // console.log("sau khi set ",this.state)
  }

  getAvatar = () => {
    const result = JSON.parse(localStorage.getItem('login'))
    // const name =  result.username.charAt(0).toUpperCase() + result.username.slice(1)
    if(result){
      this.setState({
        name : result.username,
        Avatar : result.username.charAt(0).toUpperCase()
      })    
    }
  }

  render() {

    return (
      <Dropdown overlay={menu}>
        <div className="avata">
          <span className="nameAdmin">Hi!</span>
          <span className="nameAdmin"> {this.state.name.charAt(0).toUpperCase()+ this.state.name.slice(1)} </span>
          <Avatar
            size={40}
            style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
          >
            {this.state.Avatar}
            {/* {result.username.charAt(0).toUpperCase()}  */}
            {/* Chữ cái đầu tiên và viết hoa avata  */}
          </Avatar>
        </div>
      </Dropdown>
    );
  }
}

export default withRouter(Avata);
