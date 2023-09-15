import inquirer from 'inquirer';
import packageName from "./packageName.js";
import port from "./port.js";
import middleware from "./middleware.js";
export default () => {
    // 使用到的是 nodeJs 的 esm 模块 所以直接支持   await
    return inquirer.prompt([
        packageName(),
        port(),
        middleware()
    ])
    // .then((answers) => {
    //     console.log("answers =", answers);
    // })
}

