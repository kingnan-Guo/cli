#! /usr/bin/env node
// 告诉系统使用什么脚本来执行
import fs from "fs";
import {execa} from "execa";
import createIndexTemplate from "./createIndexTemplate.js";
import createPackageTempale from "./createPackageTempale.js";
import question from "./question/index.js";
import createConfig from "./config.js";
import chalk from "chalk";
import { config } from "process";

const answers = await question();
// input 输入
// process 处理过程
// output 输出
// const inputConfig = {
//     packageName: 'k',
//     prot: 3338,
//     middleware: {
//         static: true,
//         router: false
//     }
// }
const inputConfig = createConfig(answers)
// return false
// 1、创建文件夹
console.log(chalk.blue(`创建文件夹 --> ${config.packageName}`));
fs.mkdirSync(getRootPath())
// 2、创建入口文件 -> index.js
console.log(chalk.blue(`创建入口文件 --> index.js`));
fs.writeFileSync(`${getRootPath()}/index.js`, createIndexTemplate(inputConfig))
// 3、创建 package.js
console.log(chalk.blue(`创建 --> package.js`));
fs.writeFileSync(`${getRootPath()}//package.json`, createPackageTempale(inputConfig))

// 4、安装 node_modules 依赖
console.log(chalk.yellow(`安装 node_modules 依赖`));
const { stdout } = await execa("npm i", {
    cwd: getRootPath(),
    stdio: [2, 2, 2]// 继承父进程
})
console.log(chalk.green(`创建完成`));
// console.log("stdout ==", stdout);
function getRootPath() {
    // return "./MyPage"
    return `./${inputConfig.packageName}`
}