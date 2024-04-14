// function createUser({name:string, isPaid:boolean}){}


// createUser({name:"karthik",isPaid:false});

// //function return type is defined as an object
// function createCourse():{name:string,price:number}{
//     return {name:"reactJS",price:399}
// }




// type User={
//     name:string,
//     email:string,
//     isActive:boolean
// }

// function createUser(user:User){
//     return {name:"",email:"",isActive:true}
// }
// createUser({name:"karthik",email:"k@gmail.com",isActive:true})


// function createUserAgain(user:User):User{
//     return {name:"",email:"",isActive:true}
// }
// createUserAgain({name:"karthik",email:"k@gmail.com",isActive:true})








//"readonly" means the variable is read-only and cannot be reassigned once it's assigned with a value. 
type User={
    readonly _id:string,
    name:string,
    email:string,
    isActive:boolean,
    credNumberDetail?:number  //optional property(?) here means that it is fine if the user doesn't give credNumerDetail as not all users will have it.
}

let myUser:User={
    _id:"1245",
    name:"karthik",
    email:"k@gmail.com",
    isActive:true
}

myUser.email="n@gmail.com"
// myUser._id="1234"  ---->error




type cardNumber={
    cardnumber:string
}

type cardDate={
    carddate:string
}

type cardDetails=cardNumber & cardDate & {
    cvv:number
}



export {}