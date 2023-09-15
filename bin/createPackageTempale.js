import ejs from "ejs";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import prettier from "prettier";

export default (config) => {
    const __dirname = fileURLToPath(import.meta.url)
    const indexTemplate = fs.readFileSync(path.resolve(__dirname, "../template/package.ejs"))
    // console.log("indexTemplate ==", indexTemplate.toString());
    const code = ejs.render(indexTemplate.toString(), {
        packageName: config.packageName,
        middleware: config.middleware,
        
    })
    // console.log('prettier.format(code, {parser: "json"})  ==', prettier.format(code, {parser: "json"}) );
    return code
    // return prettier.format(code, {parser: "json"}) 
}