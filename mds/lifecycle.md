## Vue什么周期
### 1.beforeCreate
    刚开始初始化 data 、methods等还未完成配置
### 2.created
    初始化完成 data 、methods、props 、watch 等这些都已完成配置 （初始数据获取）
### 3.beforeMounted
    虚拟dom编译完成，还未挂载
### 4.mounted
    挂载完成，可操作dom 但不保证所有的子实例渲染完成
### 5.beforeUpdate
    数据更新之前回调，可操作现有的所有dom
### 6.updated
    数据更新之后回调，可操作更新之后的dom
### 7.activated 
    被keep-alive缓存的组件激活时的回调
### 8.deactivated
    被keep-alive缓存的组件停用时的回调
### 9.beforeDestory
    组件销毁时的回调，还可以访问实例 一般善后工作会在这边作 比如清除定时器，解绑事件等
### 10.destoryed
    组件销毁回调，子实例销毁、指令解绑、事件解绑等操作已完成