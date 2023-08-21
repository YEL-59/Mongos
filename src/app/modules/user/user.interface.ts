

  // creating interface
 export interface IUser {
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