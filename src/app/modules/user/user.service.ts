import User from "./user.model"

export const createUserToDB = async () => {
    const user = await new User({
        id: "781",
        role: "student",
        password: 'james123rtrt',
        name: {
          firstName: "Mr.",
          middleName: "Tofayel",
          lastName:     "islam",
        },
        dateofBirth: 6-12-1998,
        gender: "male" ,
        email: 'jhjkkjkhkj',
        contactNo: '1234567890',
        emergencycontactno: '1234567890',
        address: {
          street: 'Mirpur-12',
          city: 'Dhaka',
          state: 'mirpur',
          country: 'Bd',
          zip: '1207',
        },
    
    
    })
    await user.save()
    return user
  }