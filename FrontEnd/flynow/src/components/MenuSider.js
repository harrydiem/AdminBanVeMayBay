import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import { Icon, Menu } from 'antd'
import '../../node_modules/antd/dist/antd.css'
import router from './menu' //DS Menu 

export class MenuSider extends Component {
    componentWillMount() {
        this.showRoter(router)
    }
    showRoter = (router) => {
        var result = null
        if(router){
            if (router.length > 0) {
                result = router.map((route, index) => {
                    return (
                        <Menu.Item key={index + 1} >
                            <Link to={route.to}>
                                <Icon type={route.icontype} />
                                <span>{route.name}</span>
                            </Link>
                        </Menu.Item>
                    )
                })
                //defaultSelectedKeys 1. Dùng switch case , 2.
                return <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline"> 
                    {result}
                </Menu>
    
            }
        }
    
    }
    render() {
        return (
            <div>
                {/* <Menu theme="dark" defaultSelectedKeys={['1']}  mode="inline">*/}
                {this.showRoter(router)}
                {/* <Menu.Item key="1">
                                <Link to='/' >
                                    <Icon type="home" />
                                    <span>Trang chủ</span>
                                </Link>
                            </Menu.Item>

                            <Menu.Item key="2" >
                                <Link to='./flight'>
                                    <Icon type="rocket" />
                                    <span>Chuyến bay</span>
                                </Link>
                            </Menu.Item>

                            <Menu.Item key="3">
                                <Link to="/employees">
                                    <Icon type="team" />
                                    <span>Nhân viên</span>
                                </Link>
                            </Menu.Item>

                            <Menu.Item key="4">
                                <Link to='/user'>
                                    <Icon type="user" />
                                    <span>Khách hàng</span>
                                </Link>
                            </Menu.Item>

                            <Menu.Item key="5">
                                <Link to='/login'>
                                    <Icon type="file" />
                                    <span>File</span>
                                </Link>
                            </Menu.Item>*/}
                {/* </Menu>  */}


            </div>

        )
    }
}

export default MenuSider
