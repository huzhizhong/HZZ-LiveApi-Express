一.本地环境搭建:
1.node
2.npm 
3.express安装
 	(1).npm install express -g
  (2).npm install -g express-generator

二.创建项目:
1.express+项目名
2.cd到项目文件夹.运行:npm install
3.运行项目:npm start或node ./bin/www
4.http://localhost:3000/


三.基础设置
1.修改入口文件,将bin目录下改到app.js下
 // 修改项目入口
var http = require('http');
/**
 * Create HTTP server.
 */
var server = http.createServer(app);

server.listen(3000)

运行使用:node app.js 如果运行正常,删掉bin目录

2.安装sql:npm install mysql --save
3.npm install nodemon -g 热启动
   nodemon app.js
4.配置项目
   (1).数据库连接基本配置------------------util
   (2).封装接口(测试工具:PostMan)---------controller
 

四.连接数据库mySql(我用的是:Navicate for MySQL)


连接数据库遇到问题解决方案:
https://baijiahao.baidu.com/s?id=1663734534335365714&wfr=spider&for=pc
https://www.jianshu.com/p/b7e9a4da81a3
