# BEND-Maker

react + redux + antd + webpack

### redux

* redux
  * createStore
    > 创建 store
  * combineReducers
    > 结合多个细分 reducer
  * applyMiddleware
    > 包裹 createStore 增加中间件处理
* react-redux
  * Provider
    > 作为 store 顶层容器，通过 props 注入 store 到此组件
  * connect
    >  connect 对 APP 进行一次封装，返回一个包裹 App 的新容器，该容器从父组件       
    >  Provider 的 context 中获取 store，并在组件内保存一份 state 状态，然后通过传进去      
    >  的 select 方法筛选 App 组件用到的数据，并通过 props 的方式传给 App 组件      
    >  Provider 和 connect 所做的就是对 react 组件和 store 进行关联     
* redux-actions
  * createAction
    > 生成 action 生成函数
  * handleAction
    > 创建处理单一 action reducer
  * handleActions
    > 创建处理多个 action 的 reducer
* redux-thunk
  * thunkMiddleware
    > 当 dispatch 一个函数时，进行处理


### classnames

* classnames/bind
  > css module support
