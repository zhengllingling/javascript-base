vue3实现响应式的最主要方式

与vue2使用的defineProperty的区别
(1) defineProperty针对对象属性的监听而Proxy针对整个属性
``` javascript
   
   const obj = {
       count: 0
   }
   function definePropertyWatch(obj, key) {
       let val = obj[key];
        Object.defineProperty(obj, key, {
            get(){
                console.log("get value", val);
                return val;
            },
            set(value){
                console.log("set value", value);
                val = value;
            }
        })
   }
   definePropertyWatch(obj, "count");

   function proxyWatch(obj) {
       const watchObj = new Proxy(obj, {
           get(key) {
               console.log("get value", obj[key]);
               return obj[key];
           },
           set(key, value) {
               console.log("set value", value);
               obj[key] = value
           }
       })
       return watchObj;
   }
```
(2) defineProperty会更改原对象，Proxy不在原对象监听，会返回一个新的对象

(3) 相比defineProperty，Proxy除了可以拦截get、set以外还可以拦截其他很多操作