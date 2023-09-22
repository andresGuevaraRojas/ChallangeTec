function isPalindrome (input){
    
    const temp = input
  
    const reversed = temp.split("").reverse().join("")
    console.log(reversed)
    return input === reversed
}

console.log(isPalindrome("abba"))
console.log(isPalindrome("patricio"))
console.log(isPalindrome("alomomola"))
console.log(isPalindrome("comida"))


