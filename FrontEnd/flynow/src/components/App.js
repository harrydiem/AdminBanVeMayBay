import React from 'react'
import './App.css'
import MainLayout from './MainLayout'
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import Employees from '../pages/Employees/Employees'
import User from '../pages//User/User'
import Flight from '../pages/Flight/Flight'
import NotFound404 from '../pages/404NotFound/NotFound404'
import Order from '../pages/Order/Order'
import Ticket from '../pages/Ticket/Ticket'
import LoginAdmin from './../pages/LoginAdmin/LoginAdmin'
import Airport from '../pages/Airport/Airport'
import Location from '../pages/Location/Location'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/dangnhap' component={LoginAdmin} >
            <LoginAdmin></LoginAdmin>
          </Route>

          <Route exact path={["/", "/employees", "/user", "/flight", "/order", "/ticket", "/location", "/airport", "/ticket"]}>
            <MainLayout path=''>
              <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/employees' component={Employees} />
                <Route exact path='/user' component={User} />
                <Route exact path='/flight' component={Flight} />
                <Route exact path='/ticket' component={Ticket} />
                <Route exact path='/airport' component={Airport} />
                <Route exact path='/order' component={Order} />
                <Route exact path='/location' component={Location} />
              </Switch>
            </MainLayout>
          </Route>
          <Route component={NotFound404} />
        </Switch>

      </BrowserRouter>
    );
  }
}

export default (App);