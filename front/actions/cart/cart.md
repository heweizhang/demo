购物车js前端操作
---
#### jquery插件引用
- bootcdn上下载文件或者拷贝链接：[http://www.bootcdn.cn/](http://www.bootcdn.cn/)
- npm安装，需要先安装nodejs,[https://nodejs.org/en/download/](https://nodejs.org/en/download/)
```cmd
# 点击idea下面的`Terminal`
cd front
npm i jquery@2.1.4
# 运行完毕后，源文件会被下载到 front/node_modules/jquery/dist 这个目录下
```
#### 功能概述

##### 涉及文件
- 页面文件(无需修改)：server/src/main/resources/static/src/html/cart_jquery.html
- 新建一个js文件编写代码

##### 功能需求
- 在不修改html文件下完成以下功能，只允许引用一个jquery和一个js文件
- 左侧涉及的所有checkbox
  * 点击全选按钮，所有商品选中
  * 点击店铺的全选按钮，该店铺下的所有按钮必须全部选中
  * 如果某个店铺下的所有按钮全部选中，那么店铺左侧的全选按钮也必须选中
  * 如果所有店铺都已经选中，那么上下2个全选按钮也必须选中
- 购物车单个商品的数量修改
  * 可以增加数量，每点击一次加一
  * 可以减少数量，每点击一次减一
  * 数量为一的时候，减少的按钮隐藏，大于一显示
- 商品的删除
  * 删除单个商品
  * 如果删除完后店铺下的商品为空，则店铺也删除
- 计算总价
  * 实时计算选中的商品数量
  * 实时计算选中的总价
- 结算
  * 没有选中任何商品的时候，按钮为灰色的，有选中按钮的时候为橙色的
  * 点击的时候统计用户选中的商品，并且组成一串数据

##### 代码提示
- 将计算总价的操作封装成一个方法，在点击checkbox、修改数量、删除商品等操作后调用，
- checkbox操作
  * 全选 ===》 触发所有商品全选
  * 店铺全选 ===》 店铺下的所有商品全选
  * 商品选中的时候调用计算总价
- 不显示数量的减号，控制是否有一个class ===》 no-minus
- 控制计算按钮的颜色，控制是否有一个class ===》 submit-btn-disabled