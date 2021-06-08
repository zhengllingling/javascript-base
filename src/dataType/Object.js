// let a = { a: 1};

// let b = Object.assign({b: 2}, a)

// Object.create()

let obj  = {
    a: 1,
    b: 2
}
// Object.defineProperty Object.defineProperties
function observer(obj) {
    console.log(Object.keys(obj));
    Object.keys(obj).forEach(key => {
        let value = obj[key];
        Object.defineProperty(obj, key, {
            get() {
                console.log("获取值")
                return value
            },
            set(val) {
                console.log("设置值")
                value = val;
            }
        })
    })
}

observer(obj);

obj.a
obj.a = 4;
console.log(obj.a);

// Object.freeze() 冻结对象 被冻结的对象不能添加删除修改属性 对象原型相应的也不能改

let obj1 = {
    a: 1
}

Object.freeze(obj1);
Object.isFrozen(obj1) // true

obj1.a = 2;

let obj2 = {
    a: 1
}

Object.seal(obj2) // 密封一个对象 不能添加删除属性 原有属性不可配置 但是可以修改属性值
Object.isSealed(obj2) // true

let obj3 = {
    a: 1
}

Object.preventExtensions(obj3) // 使对象变得不可扩展 就是不可扩展属性
Object.isExtensible(obj3) // false

// Object.getOwnPropertyDescriptor
// Object.getOwnPropertyNames
// Object.getOwnPropertySymbols
// Object.getPrototypeOf
// Object.setPrototypeOf // 设置对象原型

/* 
    比较方式和===一样，弥补了===的不足 
    即 -0 不等于 +0
       NaN 等于 NaN
 */
Object.is(-0,+0) // false
Object.is(NaN, NaN) // true

/* 
    以下方法会忽略对象的不可枚举属性
    for ... in 遍历自身和继承的可枚举属性
    Object.keys
    JSON.stringifty
    Object.assign
*/

// Reflect.ownKeys(obj) // 返回自身的不含继承的所有键名

// 对象解构赋值
let { x, ...a } = {x: 1, y: 2, z: 3};
// x 1
// a { y: 2, z: 3}
// 取出所有可遍历属性到当前对象中
let c = {...a}

/* 
    Object.values
    Object.keys
    Object.enteries
    Object.fromEnteries 是 Object.enteries 的逆操作
*/

/* 
    for...in 和 for...of的区别
    for in 遍历的是对象的key 还能遍历原型上的属性
*/