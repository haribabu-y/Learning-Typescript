enum direction {
    Up,
    Down,
    Left,
    Right
}

let move: direction = direction.Up;
console.log(move);
console.log(direction[0]);

if(move === direction.Up) {
    console.log("Moving Up!");    
}

enum Status {
    pending = "PENDING",
    InProgress = "INPROGRASS",
    compleated = "COMPLEATED",
    failed = "FAILED"
}

let Astatus = Status.InProgress;
console.log(Astatus);
console.log(Status.compleated);

// enum Mixed {
//     A,
//     B = "B_VALUE",
//     C,
//     D = "D_VALUE",
//     E

// }

enum Month {
    Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec
}

function isItSummer(month: Month) {
    let isSummer: boolean;
    // console.log(month);
    
    switch(month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}
// console.log(Month.Jun);
console.log(isItSummer(Month.Jun));
// console.log(Month.Jan);
console.log(isItSummer(Month.Jan));
console.log(isItSummer(6));




