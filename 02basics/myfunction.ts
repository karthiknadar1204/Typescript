function addTwo(num:number){
    return num + 2;
}
addTwo(5);


function getUpper(val:string){
    return val.toUpperCase();
}
getUpper("kartHik")


function signUpUser(name:string, email:string, isPaid:boolean){
    return `User ${name} with email ${email} signed up`;
}
signUpUser("karthik","karthiknadar1204@gmail.com",false)


//default values for function parameters
let loginUser=(name:string, email:string, isPaid:boolean=false)=>{


}
loginUser("k","k@k.com")





//making sure the function returns the correct type of data
function addThree(num:number):number{
    return num + 3;
}
addThree(5);




const getHello=(s:string):string=>{
    return ""
}



//void
//void represents the return value of functions which don’t return a value. It’s the inferred type any time a 
// function doesn’t have any return statements, or doesn’t return any explicit value from those return statements:
// The inferred return type is void
function noop() {
    return;
  }


  //never
//   Some functions never return a value:

function fail(msg: string): never {
  throw new Error(msg);
}



export {}
