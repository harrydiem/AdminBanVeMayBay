const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')

router.post('/login',userController.loginAdmin)
router.get('/',userController.getUser)
router.post('/login',userController.sendDataUser)
router.get('/:id/khachhang',userController.getOneKhachHang)
//Flight
router.get('/flight',userController.getAllChuyenBay)
router.get('/:id/flight',userController.getOneFlight)
router.delete('/flight/:id/delete',userController.deleteFlight)
router.post('/flight/insert',userController.insertFlight)//INSERT INTO `chuyenbay` (`ID_ChuyenBay`, `MaMayBay`, `MaChuyenBay`, `MaChang`, `ThoiGianDi`, `ThoiGianDen`, `NgayDi`, `NgayDen`, `SoGheConTrong`) VALUES (NULL, 'MB2', 'CB3', '123', '11:30:00', '12:00:00', '2019-12-15', '2019-12-15', '20');
router.post('/flight/update',userController.updateFlight) //UPDATE chuyenbay SET MaMayBay = 'MH375', MaChang = 'C10', ThoiGianDi = '09:00:00', NgayDi = '2019-11-14', SoGheConTrong = '250' WHERE chuyenbay.ID_ChuyenBay = '54'
//User
router.get('/user',userController.getAllUser)
router.get('/:id/user',userController.getOneUser) //user/2/user
router.post('/user/status',userController.updateStatusUser)
//Airport
router.get('/:id/airport',userController.getOneAirport)
router.get('/airport',userController.getAllAirport)
router.post('/airport/insert',userController.insertAirport)
router.delete('/airport/:id/delete',userController.deleteAirport)
router.post('/airport/update',userController.updateAirport)
//Employee
router.get('/employees',userController.getAllEmployees)
router.get('/employees/desc',userController.getEmployeesDESC)
router.get('/employees/idMax',userController.getEmployeesMax)
router.post('/employee/status',userController.updateStatusEmployee)
router.post('/employee/insert',userController.insertEmployee)
router.post('/employee/update',userController.updateEmployee)
//Airline
router.get('/Airline',userController.getAllAirline)
//Location
router.get('/location',userController.getAllLocation)
router.get('/:id/location',userController.getOneLocation)
router.post('/location/insert',userController.insertLocation)
router.delete('/location/:id/delete',userController.deleteLocation)
router.post('/location/update',userController.updateLocation)
//Order
router.get('/order',userController.getAllOrder)

//Ticket
router.get('/ticket',userController.getAllTicket)
router.post('/ticket/insert',userController.insertTicket)
router.delete('/ticket/:id/delete',userController.deleteTicket)
router.post('/ticket/update',userController.updateTicket)

//
module.exports = router