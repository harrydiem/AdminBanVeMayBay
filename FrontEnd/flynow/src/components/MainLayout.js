import React, { Component } from 'react'
import { Layout , Icon , message} from 'antd';
import { withRouter } from 'react-router-dom'
import './App.css'
import Avata from './Avata'
import MenuSider from './MenuSider'
import Breadcrumbs from './Breadcrumbs'
const { Header, Content, Footer, Sider } = Layout;

const error = (text) => {
    message.error(text);
  };

export class MainLayout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
        }
        
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    componentDidMount(){ //Sau khi Render se chay va setState roi Render lai
        var result = JSON.parse(localStorage.getItem('login'))
        if(result){
            // console.log(result)
            
        }
        else{
            error('Bạn cần đăng nhập')
         this.props.history.push('/dangnhap')  
        }
    }
    render() {
        return (
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                    {/* <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}> */}
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <div className="logo" >
                            <img alt="logo" className="logoStyle" src="logo-white.png"/>

                        </div>
                        <MenuSider/>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }} >

                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                            <Avata/>
                        </Header>

                        <Content style={{ margin: '0 16px' }}>

                        <Breadcrumbs> </Breadcrumbs>
                            
                            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                                {this.props.children}
                            </div>
                        </Content>

                        <Footer style={{ textAlign: 'center' }}> Công nghệ phần mềm ©2019</Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default withRouter(MainLayout);
