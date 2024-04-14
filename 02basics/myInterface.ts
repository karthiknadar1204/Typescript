interface User{
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string
    startTrail: () => string
}

const karthik:User={
    dbId:22,
    email:"k@gmail.com",
    userId:12345,
    startTrail: () => {
        return "Trail Started"
    }
}



