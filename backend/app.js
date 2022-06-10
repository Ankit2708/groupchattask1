const express=require('express')
const cors=require('cors')
const userRoutes=require('./routes/user')

const app=express()
const sequelize=require('./util/database')
app.use(cors())
app.use(express.json())
app.use(userRoutes)
app.use('/',(req,res)=>{
    console.log('working')
})
sequelize.sync()
.then(()=>{
    console.log('database is connected')
}).catch(err=>console.log(err))
app.listen(3000)
