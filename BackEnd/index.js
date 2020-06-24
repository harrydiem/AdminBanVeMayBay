const express = require('express')
const app = express()
const port = 4000
const userRouter = require('./routers/user.router')
//const db = require('./db')    

const cors = require('cors')


app.use(cors())
// app.use(express.urlencoded({
//     extended: false
// }))

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/db',userRouter)
app.listen(port,()=>{
    console.log(`Server open port ${port}`);
})