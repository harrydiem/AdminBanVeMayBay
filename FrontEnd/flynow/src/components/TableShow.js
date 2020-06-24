import React from 'react'
import {Table} from 'antd';
import "antd/dist/antd.css";
import axios from 'axios';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];

  // const getData = () => {
  //   return(
  //     axios.get('http://localhost:4000/user?order')
  //         .then((response) => {
           
  //         )
  //   )
  // }

  // axios.get('http://localhost:4000/user?order')
  // .then(function (response) {
  //   // handle success
  //   console.log(response.data);

  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // });

class TableShow extends React.Component {
    constructor(props) {
      super(props);
      this.state ={
        data : null
      }
    }
    componentWillMount(){
      if(this.state.data===null){
        axios.get('http://localhost:4000/user?order')
        .then(function (response) {
          console.log(response);
         this.setState({
           data: response
         })
         console.log(this.state.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
      }
    }
    postFunction(){
      console.log('postFunc');
      axios.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    render() {
      console.log(this.state.data)
        return (
            <div>
                <Table columns={columns} dataSource={data} size="middle" />
            </div>
        )
    }
}

export default TableShow
