const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

const UserSchema = mongoose.Schema(
    {
        firstName:String,
        LastName:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    }
)


const User= mongoose.model('User',UserSchema)

export default User