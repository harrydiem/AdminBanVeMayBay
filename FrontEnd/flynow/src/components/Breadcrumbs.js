import React, { Component } from 'react'
import { Breadcrumb} from 'antd';
import {  withRouter } from 'react-router-dom'
export class Breadcrumbs extends Component {
    render() {
        // console.log(this.props.history)
        return (
            <div>
                <Breadcrumb 
                separator = ' / '
                style={{ margin: '16px 0' }}
                >
                    {/* <Breadcrumb.Item>
                        <Link to='/'>
                            <Icon type='home' />
                            <span>Trang chủ</span>
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to='/flight'>
                            <Icon type='rocket' />
                            <span>Chuyến Bay</span>
                        </Link>
                    </Breadcrumb.Item> */}
                </Breadcrumb>
            </div>
        )
    }
}

export default withRouter(Breadcrumbs)
