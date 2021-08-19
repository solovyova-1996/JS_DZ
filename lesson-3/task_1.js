// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

let arr = Array()
let i = 0;
while (i < 100) {
    if (i > 1 && i < 4) {
        arr.push(i)
    }
    else if ((i % 2 !== 0) && (i > 1 && i < 9)) {
        arr.push(i)
    }
    else if ((i % 2 !== 0) && (i > 1) && (i % 3 !== 0) && (i % 5 !== 0) && (i % 7 !== 0)) {
        arr.push(i)
    }
    i++
}
console.log(arr)