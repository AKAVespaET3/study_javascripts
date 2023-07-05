function calculateSumFirst(first, second){
    return first + second
}

let third = calculateSumFirst(4, 6);

let calculateMinusSecond = (first, second) => {
    return first - second;
}



// calculateMinusSecond(2,1)
// 1

// calculateMinusSecond
// (first, second) => {
//     return first - second;
// }

// let calculateThird = calculateMinusSecond
// undefined

// calculateThird
// (first, second) => {
//     return first - second;
// }

//callback function
function calculateForth(funcName, param1, param2){
    let result = funcName(param1, param2);
    result = result + 10;
    return result
}