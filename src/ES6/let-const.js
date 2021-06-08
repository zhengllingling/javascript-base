/* 
    ES5：全局作用域 函数作用域
    ES6中新增了块级作用域
*/

// (1) var
var arr = [];
// for(var i = 0; i < 3; i++) {
//     arr[i] = function() {
//         console.log(i);
//     }
// }
// arr[2]();

// let
for(let i = 0; i < 3; i++) {
    arr[i] = function() { // 暂时性死区
        console.log(i);
    }
    // let i = "abc";
    // console.log(i);
}
arr[2]();

/* 
    let声明的变量
    1. 不存在变量提升
    暂时性死区：在代码块内，在变量声明之前不能使用变量，否则会报错，在进入代码块时变量就
    已经存在，只是不允许使用，直到执行变量声明之后
    2. 不允许重复声明

    const
    作用和let类似 
    不同的是 const一旦声明就不允许修改变量指向的那个内存地址所保存的值，所以const一旦声明就必须初始化
*/
// {
//     console.log(x); // x
//     let x = 3;
// }
{
    console.log(x); // undefined
    var x = 3;
}

// const a; // 报错 ，没有初始化
const c = "12";
// c = 1; // 报错 不允许修改
const obj = {
    a: 1
}
obj.a = 3; 