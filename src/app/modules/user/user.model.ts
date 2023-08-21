import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

// creating schema
const userSchema = new Schema<IUser>({
  id: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  dateofBirth: { type: String },
  gender: { type: String, enum: ["male", "female"], required: true },
  email: { type: String },
  contactNo: { type: String, required: true },
  emergencycontactno: { type: String, required: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    zip: { type: String, required: true },
  },
});
const User = model<IUser>("User", userSchema);


export default User;