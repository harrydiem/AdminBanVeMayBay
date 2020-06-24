import React, { Component } from 'react'
import { fetchLoading } from '../../common/utils/effect'
import { Table, Card, Input ,Tag} from 'antd'
import "../../components/App.css"
import Column from 'antd/lib/table/Column'
import ActionOrder from './ActionOrder'
const { Search } = Input;
export class Order extends Component {
    constructor(props){
        super(props)
        this.state = {
            orders: [],
        }
    }
    getOrder = async () => {
        let result = await fetchLoading({
            url: 'http://localhost:4000/db/order',
            method: 'GET'
        })
        this.setState({
            orders: result.data,
        })
    }
    async componentDidMount() { //Sau khi Render se chay va setState roi Render lai
        await this.getOrder()
    } 
    formatDate = (input) => {
        var datePart = input.match(/\d+/g),
        year = datePart[0], // get only two digits
        month = datePart[1], day = datePart[2];
      
        return day+'/'+month+'/'+year;
      }
      formatNumber = (nStr, decSeperate, groupSeperate) => { // formatNumber(num,'.','.')
        nStr += '';
        let x = nStr.split(decSeperate);
        let x1 = x[0];
        let x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + groupSeperate + '$2');
        }
        return x1 + x2;
    }
    statusOrder = (status) => {
        if(status===0){
            return(<Tag color="green">Đã Thanh Toán</Tag>)
        }else{
        return(<Tag color="red">Đã bị hủy</Tag>)
        }
    }
    render() {
        const { orders } = this.state
        // console.log("orders: ",orders)

        return (
            <Card>
                <div className="listAction">
                <Search
                     placeholder="Tìm kiếm hóa đơn"
                     onSearch={value => console.log(value)}
                     style={{ width: "20%", margin:"0 0 0 0px" }}
                />            
                </div>
 
                <Table
                    scroll={{ x: 150 }}
                    style={{ color: 'black' }}
                    tableLayout={'auto'}
                    pagination={{ pageSize: 5 }}
                    rowKey={e => e.ID_HoaDon}
                    dataSource={orders}
                    // columns={columns} 
                    bordered
                >

                    <Column title='Mã HĐ' dataIndex='ID_HoaDon' align='center'
                        sorter={(a, b) => a.ID_HoaDon - b.ID_HoaDon}
                    />
                    <Column title='Mã KH' dataIndex='MaKH' align='center' sorter={(a, b) => a.MaKH - b.MaKH}/>
                    <Column title='Tên KH' dataIndex='TenKH' align='center' />
                    {/* <Column title='Quyền' dataIndex='Quyen' align='center' sorter={(a, b) => a.Quyen - b.Quyen}/> */}
                    <Column title='Ngày đặt' dataIndex='' sorter={(a, b) => a.NgayDatVe - b.NgayDatVe} render={(recore) =>this.formatDate(recore.NgayDatVe.split('T')[0]) } align='center'  />
                    <Column title='Số Lượng' dataIndex='SoLuong' sorter={(a, b) => a.SoLuong - b.SoLuong} align='center'  />
                    <Column title='Trạng Thái' dataIndex='' align='center' render={(recore) => { return(<div>{this.statusOrder(recore.Trangthai)}</div>)}} />

                    <Column title='Tổng Tiền' dataIndex=''  align='center' sorter={(a, b) => a.ThanhTien - b.ThanhTien} render={(recore) =>this.formatNumber(recore.ThanhTien,'.','.')+' đ' }/>
                    <Column title='Thao tác' dataIndex=''  align='center' render={(recore) => { return(< ActionOrder recore={recore} />) } }/>

               
                </Table>
            </Card>
        )
    }
}

export default Order
