import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

const app: Application = express();

//using cors

app.use(cors());
//parse data

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  //inserting testdata to database
  /*
    step1:interface,
    step2:schema,
    step3:model,
    step4:database query

    */
  // res.send('Hello World!')
  // next()

  // creating interface
  interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
      firstName: string;
      middleName: string;
      lastName: string;
    };
    dateofBirth?: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencycontactno: string;
    address: {
      street: string;
      city: string;
      state: string;
      country: string;
      zip: string;
    };
  }
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
    gender: { type: String, enum:['male','female'], required: true },
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
  const createUserToDB = async () => {
    const user = new User({
        id: "778",
        role: "student",
        password: 'james123',
        name: {
          firstName: "jame",
          middleName: "bond",
          lastName:     "bond",
        },
        dateofBirth: 678677,
        gender: "male" ,
        email: 'jhjkkjkhkj',
        contactNo: '1234567890',
        emergencycontactno: '1234567890',
        address: {
          street: 'lklklklkl',
          city: 'lklklklkl',
          state: 'lklklklkl',
          country: 'lklklklkl',
          zip: 'lklklklkl',
        },
    
    
    })
    await user.save()
    console.log(user)
  }

createUserToDB()

//await user.save()

   


});

export default app;
