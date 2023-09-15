import ejs from "ejs";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export default (config) => {
    // return `
    //     const  serve = require("koa-static")
    // `
    const __dirname = fileURLToPath(import.meta.url)
    const indexTemplate = fs.readFileSync(path.resolve(__dirname, "../template/index.ejs"))
    // console.log("indexTemplate ==", indexTemplate.toString());
    const code = ejs.render(indexTemplate.toString(), {
        middleware: config.middleware,
        port: config.port
    })
    // console.log("code ==", code)
    return code
}