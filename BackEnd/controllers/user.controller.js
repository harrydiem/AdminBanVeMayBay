const query = require('../db')

module.exports = {
    loginAdmin: async (req , res , next) => {
        console.log(req.body)     
        try{
            // console.log(`Select * from NhanVien Where TenTK = '${req.body.TenTK}'  and MatKhau = '${req.body.MatKhau}`)
            const row = await query(`Select * from NhanVien Where TenTK = '${req.body.TenTK}'  and MatKhau = '${req.body.MatKhau}'  `)
            // res.send(row)
            if(row.length <= 1){
                if(row.length == 1){
                    console.log(true)
                    res.send(row)
                }else{
                     console.log("false")
                     res.send(row)
                } 
            }
            else{
                res.json({ login : false})
            }
        }catch(error){
            console.log(error)
        }
       
    },
    getOneKhachHang : async (req, res , next) => {
        let rows = await query(`select * from khachhang where khachhang.ID_KH = ${req.params.id}`)
        res.send(rows)
    },
    getUser: async (req, res, next) => { //Khai bao getUser la BDB
        let stringQuey = 'select * from khachhang '
        const { order, page, offset } = req.query // url: /user?{order= &page= &offset}
        if(order)
            if(order === 'asc')
                stringQuey+=' order by id asc'
            else stringQuey += ' order by id desc' // Cao -> Thấp
        if(page){
            let pos = (page-1) * offset
            stringQuey += ` limit ${pos},${offset}`
        }
        const rows = await query(stringQuey) // Chờ rows nhận đc query('queryString')
        res.send(rows) //gửi rows
    },
    
    sendDataUser:async(req,res,next)=>{
    //    console.log(req.body);
    //    console.log(req.body.txtName);
       //let rows = await query(`select * from user where username= '${req.body.txtName} and password = '${req.body.txtPass}' `)      
    },
    getAllChuyenBay: async(req , res , next) =>{
        try {
        const row = await query(`select ID_ChuyenBay , MaMayBay , MaChang , ThoiGianDi , NgayDi , SoGheConTrong from chuyenbay`)
         return res.status(200).send(row)
        } catch (error) {
            console.log(error)
        }
    },
    getOneFlight: async ( req , res ,next ) => {
        const{id} = req.params
        const row = await query(`select ID_ChuyenBay , MaMayBay , MaChang , ThoiGianDi , NgayDi , SoGheConTrong from chuyenbay Where chuyenbay.ID_ChuyenBay = '${id}'`)
        res.send(row)
    },
    deleteFlight : async(req , res , next) => {
        const id= req.params.id
        // console.log(id)
        try{
            const row = await query(`DELETE FROM chuyenbay WHERE ID_ChuyenBay = ${req.params.id}`)
            res.send(row).status(200)
        }catch(error){
            console.log(error)
        }
    },    
    insertFlight : async(req , res , next ) => {
        const {MaMayBay} = req.body
        const {MaChang} = req.body
        const {ThoiGianDi} = req.body
        const {NgayDi} = req.body
        const {SoGheConTrong} = req.body
        const soGhe = parseInt(SoGheConTrong)
        // console.log(soGhe)
        const row = await query(`INSERT INTO chuyenbay (MaMayBay, MaChang, ThoiGianDi, NgayDi, SoGheConTrong) VALUES ('${MaMayBay}', '${MaChang}', '${ThoiGianDi}', '${NgayDi}','${soGhe}')`)
        // console.log(row)
        res.status(200).send(row)       
    },
    updateFlight:async (req , res , next ) => {
        //UPDATE chuyenbay SET MaMayBay = 'MH375', MaChang = 'C10', ThoiGianDi = '09:00:00', NgayDi = '2019-11-14', SoGheConTrong = '250' WHERE chuyenbay.ID_ChuyenBay = '54'
        // console.log(req.body)
        const {ID_ChuyenBay} = req.body
        const {MaMayBay} = req.body
        const {MaChang} = req.body
        const {ThoiGianDi} = req.body
        const {NgayDi} = req.body
        const {SoGheConTrong} = req.body
        const soGhe = parseInt(SoGheConTrong)   
        const row = await query(`UPDATE chuyenbay SET MaMayBay = '${MaMayBay}', MaChang = '${MaChang}', ThoiGianDi = '${ThoiGianDi}', NgayDi = '${NgayDi}', SoGheConTrong = '${soGhe}' WHERE chuyenbay.ID_ChuyenBay = '${ID_ChuyenBay}'`)
        res.status(200).send({status:'Sửa thành công'})
    },
    
    //Khach hang
    getAllUser: async(req , res , next) =>{
        try {
        const row = await query(`select * from khachhang`)
        // console.log(row)
         return res.status(200).send(row)        
        } catch (error) {
            console.log(error)
        }
    },
    updateStatusUser:async (req , res , next ) => {
        // console.log(req.body)
        const {ID_KH} = req.body
        const {TrangThai} = req.body  
        const row = await query(`UPDATE khachhang SET TrangThai = '${TrangThai}' WHERE ID_KH = '${ID_KH}' `)
        res.status(200).send({status:'Sửa thành công'})
    },
    getOneUser:async(req,res,next)=>{
        let rows = await query(`select * from khachhang where ID_KH = ${req.params.id}`)// cho query ket thuc de tra ve ket qua
        res.send(rows)
    },
    //Airport
    getAllAirport:async(req,res,next)=>{
        let rows = await query(`select * from sanbay`)// 
        res.send(rows)
    },
    getOneAirport:async(req,res,next)=>{
        let rows = await query(`select * from sanbay where MaSanBay like '${req.params.id}'`)// cho query ket thuc de tra ve ket qua
        res.send(rows)
    },
    deleteAirport : async(req , res , next) => {
        const id= req.params.id
        // console.log(id)
        try{
            const row = await query(`DELETE FROM sanbay WHERE MaSanBay = '${req.params.id}'`)
            res.send(row).status(200)
        }catch(error){
            console.log(error)
        }
    },
    insertAirport : async(req , res , next ) => {
        const {MaSanBay} = req.body
        const {TenSanBay} = req.body
        const {ThanhPho} = req.body
        const row = await query(`INSERT INTO sanbay (MaSanBay, TenSanBay, ThanhPho) VALUES ('${MaSanBay}', '${TenSanBay}', '${ThanhPho}')`)
        res.status(200).send({success:  true})       
    },
    updateAirport:async (req , res , next ) => {
        // console.log(req.body)
        const {MaSanBay} = req.body
        const {TenSanBay} = req.body
        const {ThanhPho} = req.body  
        const row = await query(`UPDATE sanbay SET TenSanBay = '${TenSanBay}', ThanhPho = '${ThanhPho}' WHERE MaSanBay = '${MaSanBay}' `)
        res.status(200).send({status:'Sửa thành công'})
    },
    //Employees
    getAllEmployees:async(req,res,next)=>{
        let rows = await query(`select * from nhanvien`)// 
        res.send(rows)
    },
    //SELECT * FROM `nhanvien` ORDER BY `nhanvien`.`MaNV` DESC
    getEmployeesDESC:async(req,res,next)=>{
        // console.log('SELECT * FROM nhanvien ORDER BY nhanvien.MaNV DESC')
        let rows = await query(`SELECT * FROM nhanvien ORDER BY nhanvien.MaNV DESC`)// 
        res.send(rows)
    },
    getEmployeesMax:async(req,res,next)=>{
        let rows = await query(`SELECT MAX(MaNV) FROM nhanvien`)// 
        res.send(rows)
    },
    insertEmployee : async(req , res , next ) => {
        console.log(req.body)
        const {MaNV} = req.body
        const {TenNV} = req.body
        const {TenTK} = req.body
        const {MatKhau} = req.body
        const {Quyen} = req.body
        const {Chucvu} = req.body
        const row = await query(`INSERT INTO nhanvien (MaNV, TenNV, TenTK,MatKhau,Quyen,Chucvu,TrangThai) VALUES ('${MaNV}','${TenNV}','${TenTK}', '${MatKhau}', '${Quyen}', '${Chucvu}', '0')`)
        res.status(200).send({success:  true})       
    },
    updateStatusEmployee:async (req , res , next ) => {
        console.log(req.body)
        const {MaNV} = req.body
        const {TrangThai} = req.body 
        const row = await query(`UPDATE nhanvien SET TrangThai = '${TrangThai}' WHERE MaNV Like '${MaNV}' `)
        
        res.status(200).send({status:'Sửa thành công'})
    },
    updateEmployee:async (req , res , next ) => {
        // console.log(req.body)
        const {MaNV} = req.body
        const {TenNV} = req.body
        // const {TenTK} = req.body
        const {MatKhau} = req.body
        const {Quyen} = req.body
        const {Chucvu} = req.body
        const row = await query(`UPDATE nhanvien SET TenNV = '${TenNV}', MatKhau = '${MatKhau}', Quyen = '${Quyen}', Chucvu = '${Chucvu}'  WHERE MaNV = '${MaNV}' `)
        res.status(200).send({status:'Sửa thành công'})
    },

    //Airline
    getAllAirline:async(req,res,next)=>{
        // let rows = await query(`select * from hang`)// Ko co db
        // res.send(rows)
    },

    //Chang
    getAllLocation:async(req,res,next)=>{
        let rows = await query(`select * from chang`)
        res.send(rows)
    },
    getOneLocation:async(req,res,next)=>{
        let rows = await query(`select * from chang where ID_Chang = '${req.params.id}'`)// cho query ket thuc de tra ve ket qua
        res.send(rows)
    },
    deleteLocation : async(req , res , next) => {
        const id= req.params.id
        // console.log(id)
        try{
            const row = await query(`DELETE FROM chang WHERE ID_Chang = '${req.params.id}'`)
            res.send(row).status(200)
        }catch(error){
            console.log(error)
        }
    },
    insertLocation : async(req , res , next ) => {
        const {DiemDi} = req.body
        const {DiemDen} = req.body
        const {SanBayDi} = req.body
        const {SanBayDen} = req.body
        const {Gia} = req.body
        const row = await query(`INSERT INTO chang (DiemDi, DiemDen, SanBayDi , SanBayDen , Gia) VALUES ('${DiemDi}', '${DiemDen}', '${SanBayDi}','${SanBayDen}',${Gia} )`)
        res.status(200).send({success:  true})       
    },
    updateLocation:async (req , res , next ) => {
        // console.log(req.body)
        const {ID_Chang} =req.body
        const {DiemDi} = req.body
        const {DiemDen} = req.body
        const {SanBayDi} = req.body
        const {SanBayDen} = req.body
        const {Gia} = req.body
        const row = await query(`UPDATE chang SET DiemDi = '${DiemDi}', DiemDen = '${DiemDen}',SanBayDi = '${SanBayDi}',SanBayDen= '${SanBayDen}',Gia= '${Gia}' WHERE ID_Chang = '${ID_Chang}' `)
        res.status(200).send({status:'Sửa thành công'})
    },
    //Order
    getAllOrder:async(req,res,next)=>{
        let rows = await query(`SELECT * FROM hoadon ORDER BY hoadon.ID_HoaDon DESC`)
        res.send(rows)
    },  

    //ticket
    getAllTicket:async(req,res,next)=>{
        let rows = await query(`SELECT * FROM hangve`)
        res.send(rows)
    },  
    deleteTicket : async(req , res , next) => {
        try{
            const row = await query(`DELETE FROM hangve WHERE MaHangVe = '${req.params.id}'`)
            res.send(row).status(200)
        }catch(error){
            console.log(error)
        }
    },
    insertTicket : async(req , res , next ) => {
        // const {MaHangVe} = req.body
        const {TenHangVe} = req.body
        const {GiaHangVe} = req.body
        const row = await query(`INSERT INTO hangve ( TenHangVe, GiaHangVe) VALUES ( '${TenHangVe}', '${GiaHangVe}')`)
        res.status(200).send({success:  true})       
    },
    updateTicket:async (req , res , next ) => {
        // console.log(req.body)
        const {MaHangVe} =req.body
        const {TenHangVe} = req.body
        const {GiaHangVe} = req.body
        const row = await query(`UPDATE hangve SET TenHangVe = '${TenHangVe}', GiaHangVe = '${GiaHangVe}' WHERE MaHangVe = '${MaHangVe}' `)
        res.status(200).send({status:'Sửa thành công'})
    },

    //
    //cac function dc goi trong user.router.js
}