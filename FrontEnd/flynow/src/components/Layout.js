import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Layout extends Component {
    render() {
        return (
            <div>
              <div>
                  <Link to='/'>Homepage</Link>
                  <br/>
                  <Link to='/about'>About</Link>
                  <br/>
                  <Link to='/user' >User</Link>
                  <br></br>
                  <Link to='/login'>Login</Link>
                  <br/>
              </div>
              <br/>
              <div>{this.props.children}</div>
              <div>Footer</div>  
            </div>
        )
    }
}

export default Layout
