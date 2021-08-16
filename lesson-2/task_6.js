// 6. Реализовать функцию с тремя параметрами: 
// function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, 
// operation – строка с названием операции. В зависимости от переданного значения операции 
// выполнить одну из арифметических операций 
// (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
function getSumm(a, b) {
    return a + b
}

function getDifference(a, b) {
    return a - b
}

function getOp(a, b) {
    return a * b
}
function getDivisionRes(a, b) {
    return a / b
}

function mathOperation(arg1, arg2, operation) {
    alert('hello')
    switch (operation) {
        case 'сложение': return getSumm(arg1, arg2)
        case 'разность': return getDifference(arg1, arg2)
        case 'частное': return getDivisionRes(arg1, arg2)
        case 'произведение': return getOp(arg1, arg2)
    }
}
