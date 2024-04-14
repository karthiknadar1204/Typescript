// const AISLE = 0
// const MIDDLE = 1
// const WINDOW = 2
var hcseat = 0 /* SeatChoice.AISLE */;
// Above, we have a numeric enum where Up is 0. All of the
// following members are auto-incremented from that point on. 
// In other words, MIDDLE has the value 1, WINDOW has 2 and FOURTH has 3.
var SeatChoice2;
(function (SeatChoice2) {
    SeatChoice2[SeatChoice2["AISLE2"] = 0] = "AISLE2";
    SeatChoice2[SeatChoice2["MIDDLE2"] = 1] = "MIDDLE2";
    SeatChoice2[SeatChoice2["WINDOW2"] = 2] = "WINDOW2";
    SeatChoice2[SeatChoice2["FOURTH2"] = 3] = "FOURTH2";
})(SeatChoice2 || (SeatChoice2 = {}));
var hcseat_2 = SeatChoice2.AISLE2;
