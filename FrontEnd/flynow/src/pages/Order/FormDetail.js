import React, { Component } from 'react'
import {
    Form,
    Tag,
    Button
} from 'antd';
import {Link} from 'react-router-dom'



class FormDetail extends Component {
    showPay = (pay) =>{
        if(pay==="1"){
            return(<Tag color="#2db7f5" style={{fontSize:'13px'}}>Trực tiếp</Tag>)
        }else{
        return(<Tag style={{fontSize:'13px'}} color="#87d068">Thẻ tín dụng</Tag>)
        }
    }

    showStatus = (status) =>{
        if(status === 1){
            return(<Button style={{margin:'0 0 0 20px' , fontSize:'13px'}} type="danger" ghost>Đã bị hủy</Button>)      
        }else{
            return(<Button style={{margin:'0 0 0 20px' , fontSize:'13px'}} type="primary" ghost>Đã thanh toán</Button>)
        }
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
    formatDate = (input) => {
        var datePart = input.match(/\d+/g),
        year = datePart[0], // get only two digits
        month = datePart[1], day = datePart[2];
      
        return day+'/'+month+'/'+year;
      }

    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };


        // console.log(this.props.recore)
        return (
            <div>
            <Form {...formItemLayout} onSubmit={this.handleSubmit} >
                <Form.Item style={{margin:'0px'}} label="Mã hóa đơn:">
                <h3 style={{color:'#262626', margin:'0 0 0 20px'}}>{this.props.recore.ID_HoaDon}</h3>
                </Form.Item>

                <Form.Item style={{margin:'0px'}} label="Mã khách hàng:">
                <h3 style={{fontStyle:'italic' , margin:'0 0 0 20px'}}>
                    <Link to='/user' style={{color:"blue"}}>{this.props.recore.MaKH}</Link>
                    <Button icon="search" type="default" size="small" style={{margin:"0 0 0 20px"}}>
                        <Link to='/user'>Xem khách hàng</Link>
                    </Button>
                </h3>
                
               
                </Form.Item>

                <Form.Item style={{margin:'0px'}} label="Tên khách hàng:">
                <h3 style={{color:'#262626', margin:'0 0 0 20px'}}>{this.props.recore.TenKH}</h3>
                </Form.Item>
                
                <Form.Item style={{margin:'0px'}} label="Điện Thoại:">
                <h3 style={{color:'#262626', margin:'0 0 0 20px'}}>0{this.props.recore.DienThoai}</h3>
                </Form.Item>

                <Form.Item style={{margin:'0px'}} label="Email:">
                <h3 style={{color:'#262626', margin:'0 0 0 20px'}}>{this.props.recore.Email}</h3>
                </Form.Item>

                <Form.Item style={{margin:'0px'}} label="Ngày đặt vé:">
                <h3 style={{color:'#262626', margin:'0 0 0 20px'}}>{this.formatDate(this.props.recore.NgayDatVe.split('T')[0])}</h3>
                </Form.Item>

                <Form.Item style={{margin:'0px'}} label="Số lượng vé">
                <h3 style={{color:'#262626', margin:'0 0 0 20px'}}>{this.props.recore.SoLuong}<Button  icon="search" type="default" size="small" style={{margin:"0 0 0 20px"}}><Link to='/ticket'>Xem chi tiết vé</Link></Button></h3>
                </Form.Item>

                <Form.Item style={{margin:'0px'}} label="Phương thức thanh toán:">
                <h3 style={{color:'#262626', margin:'0 0 0 20px'}}>{this.showPay(this.props.recore.PT_Payment)}</h3>
                </Form.Item>    
                <Form.Item style={{margin:'0px'}} label="Trạng thái:">
                    {this.showStatus(this.props.recore.Trangthai)}
                </Form.Item>  

                <Form.Item style={{margin:'0px'}} label="Thành Tiền:">
                   <h2 style={{color:'#ff4d4f', margin:'0 0 0 20px'}}>{this.formatNumber(this.props.recore.ThanhTien,'.','.')+' VNĐ'}</h2>
                </Form.Item>

            </Form>
            </div>
        )
    }
}
export default Form.create({ name: 'register' })(FormDetail);


