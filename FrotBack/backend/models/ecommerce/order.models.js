import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderItems: {
      type: [
        {
          productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
          },
          quantity: {
            type: Number,
            required: true,
          },
        },
      ],
    },
    address: {
      type: [
        {
          pinCode: String,
          mainAddress: String,
          required: true,
          city: String,
        },
      ],
    },
    status: {
        type: String,
        enum:["PENDING", "CANCELLED", "DELIVERED"],
        default: "PENDING"    
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
