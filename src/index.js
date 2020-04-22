const express=require('express')
require('./database/mongoose')
const User=require('./models/user')

const app=express()

const port=process.env.PORT || 3000


app.use(express.json())



app.post('/users/login',async(req,res)=>{
    try{
        const user=await User.findByCredentials(req.body.email,req.body.password)
        const token=await user.generateAuthToken()
        res.send({user:user,token:token})

    }catch(e){
        res.status(400).send()
    }

})



app.listen(port,()=>{
    console.log('server is up on port '+port)
})
