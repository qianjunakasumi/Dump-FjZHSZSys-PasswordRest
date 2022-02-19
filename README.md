# 禁用福建综合素质系统重置密码提醒

禁用福建省中学生综合素质评价信息管理系统重置密码提醒

## 如何食用

1. 安装支持扩展（插件）功能的主流浏览器，例如 Edge、Chrome 等
2. 安装 TamperMonkey （[chrome 网上应用店](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)）
3. 新建用户脚本，并复制 main.js 内容到编辑器中
4. 保存并启用脚本
5. 打开网站，Enjoy yourself!

## 温馨提示

及时更新过期的密码，有助增强您账号的安全性

## 屏幕截图

![image](https://user-images.githubusercontent.com/53565118/154807940-484d42af-a091-4492-b2dc-82f47c19f90a.png)

## 实现原理

为请求用户信息的函数进行了改造，使 `passType` 返回值恒为 0 以达到欺骗系统（本地浏览器环境）从而绕过修改密码提醒的目的。（详见 `main.js` 注释部分）

## 法律责任

您使用本脚本前，理解并同意：我们无法预测您的行为，因此您必须为您滥用脚本而违反相关法律法规的行为负有全部法律责任

## 许可证

[![GitHub license](https://img.shields.io/github/license/qianjunakasumi/Dump-FjZHSZSys-PasswordRest?style=for-the-badge)](https://github.com/qianjunakasumi/Dump-FjZHSZSys-PasswordRest/blob/main/LICENSE)
