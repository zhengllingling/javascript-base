解决跨域的方式
1.CORS跨域资源共享
主要后端实现，将请求资源域设置到一个白名单中，只要在白名单中的域就可以访问当前域的资源
2.jsonp
浏览器对于script 、iframe等的src没有同源策略限制，jsonp就是利用这一点实现跨域请求的
实现方式：动态创建script标签，通过src请求接口，将数据放到一个制定名称回调函数中来
只适用get请求，且js之间不能作交互
```javascript
    // 前端回调
    function callback(data) {
        console.log(data)
    }
    // 发送请求
    <script src="http://localhost:3000/users?fn=callback"></script>
    // 服务器端
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        // 响应数据
        // 响应的数据必须是JSON格式
        // 响应的数据作为调用的函数的参数传递
        res.end('fn({"msg":"Hello world"})');
    });
```
3.document.domain + iframe 
适用主域相同子域不想同的情况，例如
map.baidu.com 和 detail.baidu.com
只要在这两个页面下设置document.domain="baidu.com"
获取数据window.parent