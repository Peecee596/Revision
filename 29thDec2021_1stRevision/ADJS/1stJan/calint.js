function interest(principal){
    var int=20/100;
    console.log(principal*int)
    return principal*int
}
var principal=5000;
let interestAmount=interest(principal)
let finalAmount=principal+interestAmount
console.log(finalAmount)
