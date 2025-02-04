import mongoose from "mongoose";



const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    currentHospitals: [
      {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
      },
    ],
    salary: {
      type: String,
      required: true,
    },
    qualifications: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
