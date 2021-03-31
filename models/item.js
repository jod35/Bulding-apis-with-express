const mongoose=require('mongoose');

const itemSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            maxlength:50,
        },
        status:boolean,
        due:Date,
        createdBy:{
            type:mongoose.Types.ObjectId,
            ref:'User',
            required:true
        }

    })


const Item=mongoose.model('Item',itemSchema)


module.exports = Item