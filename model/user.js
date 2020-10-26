const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    minlength: 2,
    maxlength: 20,
  },
  email: {
    type: String,
    //   保证邮箱地址不重复
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },

  //   admin: 超级管理员  normal:普通用户
  role: {
    type: String,
    require: true,
  },
  state: {
    // 0:启用  1：禁用
    type: Number,
    default: 0,
  },
});

const User = new mongoose.model("User", userSchema);

// User.create({
//   username: "liuxiang",
//   email: "iteima@itcast.cn",
//   password: "123456",
//   role: "admin",
//   state: 0,
// })
//   .then(() => {
//     console.log("用户创建成功");
//   })
//   .catch(() => {
//     console.log("用户创建失败 ");
//   });

module.exports = {
  User,
};
