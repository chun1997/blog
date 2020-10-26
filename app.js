const express = require("express");
const app = express();
const path = require("path");

require("./model/connect");

// 引入路由模块
const home = require("./route/home");
const admin = require("./route/admin");

// 开放静态资源文件
app.use(express.static(path.join(__dirname, "public")));

// 为路由匹配路径
app.use("/home", home);
app.use("/admin", admin);

app.listen(3000);
console.log("服务器启动成功");
