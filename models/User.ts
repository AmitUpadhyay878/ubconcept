import {Schema,model} from 'mongoose';

export const UserSchema=new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String,enum:['admin','editor','viewer'],default:'viewer'},
    avatar:{type:String},
    bio:{type:String},
    socialLinks:{
        linkedin:{type:String},
    },
    isActive:{type:Boolean,default:true}
},{timestamps:true});

export const User=model('User',UserSchema);
export default User;