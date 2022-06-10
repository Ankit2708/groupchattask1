const User=require('../models/user')
const bcrypt=require('bcrypt')
const saltRounds=10
exports.createUser=(req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const phoneNumber=req.body.phoneNumber;
    const password=req.body.password
    User.findAll({where:{email}})
    .then(res=>{
        if(res.length>0){
            return res.json({message:'User already exist'})
        }
        bcrypt.hash(password, saltRounds,function(err,hash){
            User.create({
                name:name,
                email:email,
                phoneNumber:phoneNumber,
                password:hash
            }).then(res=>{
                res.json({
                    name:req.body.name,
                    email:req.body.email,
                    message:'successfully logged in'
                })
            }).catch(err=>console.log(err))
        })
    }).catch(err=>console.log(err))
}