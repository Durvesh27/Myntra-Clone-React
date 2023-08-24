import mongoose,{Schema} from "mongoose";

const productSchema=new Schema({
 name:{
    type:String,
    required:true
 },
 price:{
    type:Number,
    required:true
 },
 category:{
    type:String,
    required:true
 },
 image:{
    type:String,
    required:true
 },
 userId:{
   type:mongoose.Schema.Types.ObjectId,
   ref:"User"
 },
 isBlocked:{
   type:Boolean,
   default:false
},
 isVerified:{
   type:Boolean,
   default:false
},
ratings:{
   type:[Number],
   enum:[1,2,3,4,5]
},
comments:{
type:[Object]
}
})

export default mongoose.model("product",productSchema)