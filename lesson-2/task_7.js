// *Сравнить null и 0. Попробуйте объяснить результат.
alert(null == 0) // false
alert(null === 0) // false
alert(null >= 0) // true при использовании операторов сравнения < > <= >= null становится 0
// сравнение null и undefined
alert(null == undefined) // true
alert(null === undefined) // false строгое сравнение, null и undefined имееют разный тип
alert(null >= undefined) // false undefined принимает значение NaN