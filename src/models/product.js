const mongoose=require('mongoose')
const Cart=require('./cartcollection')
const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true
    },
    supplierid:{
        type:String,
        required:true
    },
    unitprice:{
        type:Number,
        required:true
    },
    size:{
        type:Number,
        required:true
    },
    discount:{
        type:Number,
        default:0
    },
    unitsonorder:{
        type:Number,
        default:1
    },
    ranking:{
        type:Number,
        required:true
    },
    picture:{
        type:Buffer,
        required:true
    }
},{
    timestamps:true
})

productSchema.virtual('objects',{
    ref:'Cart',
    localField:'_id',
    foreignField:'product'
})

const Product=mongoose.model('Product',productSchema)

module.exports=Product