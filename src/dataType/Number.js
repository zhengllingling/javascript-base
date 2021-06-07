// Number 浮点数类型

// 属性
Number.NaN
Number.MAX_VALUE
Number.MIN_VALUE
Number.POSITIVE_INFINITY // 正无穷大
Number.NEGATIVE_INFINITY // 负无穷大

var a = 12.34567;
a.toExponential();
a.toFixed(2) // 12.35
a.toPrecision(5)
a.toString()
a.valueOf()

// ES6新增
Number.isFinite(a)
Number.isNaN(a)
Number.parseInt("123.12")
Number.parseFloat("123.12")
Number.isInteger(a);
Number.isSafeInteger(a);

Number.EPSILON // 最小误差
Number.MAX_SAFE_INTEGER
Number.MIN_SAFE_INTEGER


// BigInt：大整数 用来表示整数，任何位数的整数都可以准确表示
let bn = 1n;
