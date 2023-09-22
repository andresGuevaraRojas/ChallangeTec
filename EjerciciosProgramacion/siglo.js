//For year = 1905, the output should be
//solution(year) = 20;
//For year = 1700, the output should be
//solution(year) = 17.

//1-100
//101-200


function calcSiglo(year){
    return Math.ceil(year/100);
}

console.log(calcSiglo(1905))
console.log(calcSiglo(1700))
console.log(calcSiglo(2023))
