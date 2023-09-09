import mongoose,{Schema} from "mongoose";

const productSchema=new Schema({
 pri:{
    type:String,
    required:true
 },
 sec:{
    type:String,
    required:true
 },
 price1:{
    type:Number,
    required:true
 },
 price2:{
    type:Number,
    required:true
 },
 category:{
    type:String,
    required:true
 },
 imgsrc:{
    type:String,
    required:true
 },
discount:{
    type:Number,
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