// Task1
function getFactorial(num) {
    if (num === 1 || num === 0){
        return 1
    }else {
        return num * getFactorial(num - 1)
    }
}

console.log(getFactorial(3))

// Task2
function pow(num , degree) {
    if (degree === 1 ){
        return 1
    }else {
        return  num * pow(num , degree - 1 )
    }
}
console.log(pow(4 ,4))
// Task3
function sum( x , y) {
    if (y === 0 ){
        return x
    }else {
        return sum (x + 1 , y - 1 )
    }
}

console.log(sum(10 , 10))