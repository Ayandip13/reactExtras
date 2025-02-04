import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderPrice:{
        type:Number
    }
},{timestamps:true})

export const Order = mongoose.model('Order', orderSchema)