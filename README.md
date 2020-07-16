# 高考成绩查询项目

## 先决条件 

1、安装Redis数据库

2、安装node
 
## 代码结构说明

1、public：存放公共的js/css等文件

2、db.js：与数据库的交互功能

3、index.html：查询首页

4、details.html：成绩详情页面

5、main.js：业务逻辑相关js

## 运行流程
 
1、安装项目依赖模块包：开启cmd，在cmd中进入到项目根目录，执行 npm install

2、项目默认运行端口为8082。若需要修改端口，打开目录下main.js修改port参数
 
3、项目默认连接本地redis的6379端口。若需要修改，打开目录下db.js修改createClient参数 

4、在cmd进入到项目根目录，执行 node main.js 

5、cmd显示【应用实例，访问地址为xxx】则为运行成功，可在浏览器中打开xxx地址访问项目
   
