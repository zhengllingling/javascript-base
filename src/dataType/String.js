// es6新增特性和方法

let test = String.fromCharCode(0x20BB9);
for(let c of test) {
    console.log(c);
}
// String.fromCodePoint
// codePointAt
// includes
// startsWith
// endsWith
// padEnd
// padStart
// replaceAll
// matchAll
// trim
// trimStart
// trimEnd



const str = "banana";

// 字符串检索
str.indexOf("b"); // 0 找不到返回-1
str.lastIndexOf("a"); // 5 从后向前找 找不大返回-1
str.charAt(1); // a 没找到返回 ""
console.log(str.charCodeAt(1)) // 返回对应的字符编码 没找到返回NaN
console.log(str.match("a"));  // ["a", index: 1, ...]
console.log(str.match(/a/g)); // ["a","a","a"]
console.log(str.match(/c/)); // null
console.log(str.replace("a", "e")); // benana
console.log(str.replace(/a/g, 'e')); // benene
console.log(str.replace(/c/, "8")); // banana
console.log(str.search("a")); // 1
console.log(str.search(/c/)); // -1

// 字符串操作
console.log(str.concat("1", "2")); // banana12;
console.log(String.fromCharCode(65,66,67));
console.log(str.toLowerCase());
console.log(str.toUpperCase())

// 截取字符串
console.log(str.slice(0,1)); // b
console.log(str.slice(-2, -1)); // a
console.log(str.slice(-1, -2)); // ""
console.log(str.slice(0)); // banana
console.log(str.substr(0, 3)); // ban
console.log(str.substr(0, -1)); // ""
console.log(str.substr(-1, 1)); // a
console.log(str.substr(6, 9)); // ""
console.log(str.substring(0, 1)); // b 参数不允许有负值
console.log(str.substring(2, 1)); // a

const app = document.getElementById("app");
// 返回html字符串的
app.innerHTML = str.anchor("test")
app.innerHTML = str.italics()
app.innerHTML = str.blink();
app.innerHTML = str.big();
app.innerHTML = str.small();
app.innerHTML = str.bold();
app.innerHTML = str.fontcolor("#fcf0f0");
app.innerHTML = str.fontsize(24)
app.innerHTML = str.strike()
app.innerHTML = str.link()
app.innerHTML = str.sub()


