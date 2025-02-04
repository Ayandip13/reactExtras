import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    diagonsWith: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    age: {
      required: true,
      type: Number,
    },
    bloodGroup: {
      enum: [
        "A",
        "A+",
        "A-",
        "B",
        "B+",
        "B-",
        "AB",
        "AB+",
        "AB-",
        "O",
        "O+",
        "O-",
      ],
      default: "A",
      type: String,
    },
    gender: {
      type: String,
      enum: ["Female", "Male", "Prefer not to say"],
      required: true,
    },
    addmitedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
      required: true
    },
  },
  { timestamps }
);

export const Patient = mongoose.model("Patient", patientSchema);
