// import "./Boolean";
// import "./String";

/** 
 * 基本包装类型： Number Boolean String
 * 装箱：将基本数据类型转换成相对应的引用类型 分两种 显示装箱 和 隐式装箱
 * 拆箱：将引用类型转换为基本数据类型 实现方式 valueOf 、toString
 */

// 隐身装箱过程
var str = "123";
var str1 = str.slice(0, 1); 
// str.length = 3;
console.log(str1, "1")
// console.log(str.length, "2") // 会报错 隐式装箱只会发生在调用方法的一瞬间，执行完毕对象就销毁

// 显示装箱
const str2 = new String("234");
const str3 = str2.slice(0, 2);
str2.test = function(){
    console.log("测试")
}
str2.test();

// 拆箱 valueOf toString
var a = new Boolean(true);
var b = new String("123")
b.valueOf();
a.toString();