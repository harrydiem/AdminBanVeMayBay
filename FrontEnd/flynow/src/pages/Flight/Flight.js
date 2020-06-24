
import React, { Component } from 'react'
import { fetchLoading } from '../../common/utils/effect'
import { Table, Card, Button, Input } from 'antd'
import Actions from './actions'
import "../../components/App.css";
import Column from 'antd/lib/table/Column'
import ModalCreate from './ModalCreate';

const { Search } = Input;

export class Flight extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flight: [],
            visible: false,
            visibleEdit: false,
            OneFlight: [],
        }
    }
    //Lấy bảng
    getFlight = async () => {
        let result = await fetchLoading({
            url: 'http://localhost:4000/db/flight/',
            method: 'GET'
        })
        this.setState({
            flight: result.data
        })
    }

    //Thêm
    getDateCreate = async (data) => {
        await fetchLoading({
            url: 'http://localhost:4000/db/flight/insert/',
            method: 'POST',
            data: data
        })
        this.getFlight()

    }
    //Xóa
    onDelete = (idDelete) => {
        var { flight } = this.state
        var index = this.findIndexID(idDelete)
        if (index !== -1) {
            fetchLoading({
                url: 'http://localhost:4000/db/flight/' + idDelete + '/delete/', //router.delete('/flight/:id/delete',userController.deleteFlight)
                method: 'DELETE'
            })
            flight.splice(index, 1)  //Chỉ xóa trên state
            this.setState({
                flight
            })
        }
    }
    //Sửa   

    onEdit = async (data) => {
        await fetchLoading({
            url: 'http://localhost:4000/db/flight/update',
            method: 'POST',
            data: data
        })
        this.getFlight()
    }
    clickButtonEdit = (data) => {
        return data
    }
    // Tìm id trong state để xóa nó ra khỏi state
    findIndexID = (id) => {
        var { flight } = this.state
        var result = -1
        flight.forEach((flights, index) => {
            if (flights.ID_ChuyenBay === id) {
                result = index
            }
        })
        return result
    }

    async componentDidMount() { //Sau khi Render se chay va setState roi Render lai
        await this.getFlight()
    }
    // modal
    showModal = () => {
        this.setState({
            visible: true,
        })
    }
    handleOk = e => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };
    //End Modal
    formatDate = (input) => {
        var datePart = input.match(/\d+/g),
            year = datePart[0], // get only two digits
            month = datePart[1], day = datePart[2];

        return day + '/' + month + '/' + year;
    }

    //   formatDate ('2010/01/18');

    render() {
        const { flight } = this.state
        return (
            <Card>
                <div className="listAction">
                    <Button type="primary" style={{ margin: "0 5px 0 0" }} onClick={this.showModal} icon='plus'>
                        Thêm chuyến bay
                </Button>
                    <Search
                        placeholder="Tìm theo mã chuyến bay"
                        onSearch={value => console.log(value)}
                        style={{ width: '170px' }}
                    />
                </div>

                <ModalCreate
                    title="Thêm chuyến bay"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    getDataCreate={this.getDateCreate}
                    onSubmit
                >
                </ModalCreate>

                <Table
                    scroll={{ x: 150 }}
                    style={{ color: 'black' }}
                    tableLayout={'auto'}
                    pagination={{ pageSize: 5 }}
                    rowKey={e => e.ID_ChuyenBay}
                    dataSource={flight}
                    bordered
                >

                    <Column title='Mã chuyến bay' dataIndex='ID_ChuyenBay' align='center'
                        sorter={(a, b) => a.ID_ChuyenBay - b.ID_ChuyenBay}
                    />
                    <Column title='Mã máy bay' dataIndex='MaMayBay' align='center' sorter={(a, b) => a.MaMayBay - b.MaMayBay} />
                    <Column title='Mã chặng' dataIndex='MaChang' align='center' sorter={(a, b) => a.MaChang - b.MaChang} />
                    <Column title='Thời gian đi' dataIndex='ThoiGianDi' align='center' />
                    <Column title='Ngày đi' dataIndex='' sorter={(a, b) => a.NgayDi - b.NgayDi} render={(recore) => this.formatDate(recore.NgayDi.split('T')[0])} align='center' />
                    <Column title='Số ghế trống' dataIndex='SoGheConTrong' align='center' sorter={(a, b) => a.SoGheConTrong - b.SoGheConTrong} />
                    <Column title='Thao tác' dataIndex='' align='center' render={(recore) => { return (< Actions flight={flight} recore={recore} onDelete={this.onDelete} onEdit={this.onEdit} />) }} />
                </Table>
            </Card>
        )
    }
}
// const mapDispatchToProps = (dispatch) =>{
//     return{
//         getFlight:(data) =>{
//             return dispatch(actions.getFlight(data)) // Flight sẽ lấy type, payload de dispatch đẩy lên Store
//         }
//     }
// }
// const mapStateToProps = (state) => {
//     return{
//         flight : state.flight,
//         idDelete : state.dlOneFlight
//     }
// }

export default (Flight)
