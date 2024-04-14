// const AISLE = 0
// const MIDDLE = 1
// const WINDOW = 2




// Enums are a feature added to JavaScript by TypeScript which allows for describing a
// value which could be one of a set of possible named constants.

//This snippet gives a cleaner single lines js code in return
const enum SeatChoice{
    AISLE,
    MIDDLE,
    WINDOW,
    FOURTH
}

const hcseat = SeatChoice.AISLE


// Above, we have a numeric enum where Up is 0. All of the
// following members are auto-incremented from that point on. 
// In other words, MIDDLE has the value 1, WINDOW has 2 and FOURTH has 3.


//This snippet gives a rather complex series fo lines of code in return.
enum SeatChoice2{
    AISLE2,
    MIDDLE2,
    WINDOW2,
    FOURTH2
}

const hcseat_2 = SeatChoice2.AISLE2




