export default function createConfig(answers) {
    function haveMiddleware(name) {
        return answers.middleware.indexOf(name) !== -1
    }
    return {
        packageName: answers.packageName,
        port: answers.port,
        middleware: {
            static: haveMiddleware("koaStatic"),
            router: haveMiddleware("koaRouter")
        }
    }
}