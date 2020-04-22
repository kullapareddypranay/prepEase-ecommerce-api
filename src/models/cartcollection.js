const mongoose=require('mongoose')
const validator=require('validator')
const Product=require('./product')
const cartSchema=mongoose.Schema({
    quantity:{
        type:Number,
        validate(value){
            if(value<0){
                throw new Error('cart cant be zero')
            }
        }
    },
    shippingdata:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discount:{
        type:Number,
        default:0
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Product'
    }
  
},{
    timestamps:true
})



const Cart=mongoose.model('Cart',cartSchema)

module.exports=Cart