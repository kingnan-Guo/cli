#! /usr/bin/env node
// 告诉系统使用什么脚本来执行
import fs from "fs";
import {execa} from "execa";
// import createIndexTemplate from "./createIndexTemplate.js";
// import createPackageTempale from "./createPackageTempale.js";
import question from "./question/index.js";
import createConfig from "./config.js";
import chalk from "chalk";
import { config } from "process";
import { NodeSSH } from "node-ssh";
import path from "path";
import { fileURLToPath } from "url";
import readline from "readline";
// import { Client } from "ssh2";

const answers = await question();

console.log("answers ", answers);
const ssh = new NodeSSH()

// const conn = new Client();



// conn.on('ready', () => {
//     console.log('Client :: ready');
//     //执行uptime
//     conn.exec('uptime', (err, stream) => {
//       if (err) throw err;
//       stream.on('close', (code, signal) => {
//         console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
//         conn.end();
//       }).on('data', (data) => {
//         //监听数据
//         console.log('STDOUT: ' + data);
//       }).stderr.on('data', (data) => {
//         console.log('STDERR: ' + data);
//       });
//     });
//   })


const sshConnet  = await ssh.connect({
    host: 'linux-2.local',
    username: 'root',
    password: 'G14789gyn'
    // privateKeyPath: '/home/steel/.ssh/id_rsa'
})
// console.log("sshConnet =", sshConnet);

const __dirname = fileURLToPath(import.meta.url)
// const fileNamePath = path.resolve(__dirname, "../path/fileName.txt")
const fileNamePath = path.resolve(__dirname, "../path/fileName.sh")
// const fileNamePathZip = path.resolve(__dirname, "../path/fileName.txt.zip")
const DonePath = '/home/parallels/Downloads/fileName.sh'
// const DonePath = '/home/parallels/Downloads/fileName.txt.zip'
ssh.putFile(fileNamePath, DonePath).then(function() {
    console.log("The File thing is done")

    // ssh.execCommand('ls', { cwd: '/home/parallels/Downloads/'}).then
    ssh.execCommand('sh ./fileName.sh', { cwd: '/home/parallels/Downloads/' }).then((result) => {
        console.log(result.stdout);
        if (!result.stderr) {
          console.log('Gratefule! update success!');
          process.exit(0);
        } else {
          console.log('Something wrong:', result);
          process.exit(0);
        }
    });

    // ssh.connect({
    //   host: 'linux-2.local',
    //   username: 'parallels',
    //   password: 'G14789gyn'
    // }).then((res) => {
    //   ssh.execCommand('whoami', { cwd: '/root' }).then((res) => {
    //     console.log("parallels res", res);
    //   })
    // })

}, function(error) {
    console.log("Something's wrong")
    console.log(error)
})


// ssh.execCommand('cd /mnt').then((res) => {
//     console.log("res =", res);
// })

// ssh.execCommand('ls', { cwd: '/home/parallels/Downloads/' }).then((res) => {
//     console.log(res.stdout);
//     // ssh.execCommand('ls').then((res) => {
//     //     console.log("ls res =", res);
//     // })
// })




// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
// rl.question("What is the host? ", (host) => {
//     console.log(host);
// })



// ssh.requestShell()




// async function runCommand(command, webDir) {
//     await ssh.execCommand(command, { cwd: webDir });
// }



// let sshexecCommandll =  await ssh.execCommand('ls')
// console.log('sshexecCommandll =',sshexecCommandll.stdout);
// const sshexecCommand =  await ssh.execCommand('cd /opt | ls')
// console.log('sshexecCommand =',sshexecCommand)
// sshexecCommandll =  await ssh.execCommand('ls')
// console.log('sshexecCommandll =',sshexecCommandll.stdout);
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
// const inputConfig = createConfig(answers)
// // return false
// // 1、创建文件夹
// console.log(chalk.blue(`创建文件夹 --> ${config.packageName}`));
// fs.mkdirSync(getRootPath())
// // 2、创建入口文件 -> index.js
// console.log(chalk.blue(`创建入口文件 --> index.js`));
// fs.writeFileSync(`${getRootPath()}/index.js`, createIndexTemplate(inputConfig))
// // 3、创建 package.js
// console.log(chalk.blue(`创建 --> package.js`));
// fs.writeFileSync(`${getRootPath()}//package.json`, createPackageTempale(inputConfig))

// // 4、安装 node_modules 依赖
// console.log(chalk.yellow(`安装 node_modules 依赖`));
// const { stdout } = await execa("npm i", {
//     cwd: getRootPath(),
//     stdio: [2, 2, 2]// 继承父进程
// })
// console.log(chalk.green(`创建完成`));
// // console.log("stdout ==", stdout);
// function getRootPath() {
//     // return "./MyPage"
//     return `./${inputConfig.packageName}`
// }