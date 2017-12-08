#安装依赖
npm install



配置应用程序

1、在VS Code中，在根文件夹（angular2-quickstart）下，创建.vscode子文件夹。
2、在.vscode子文件夹下，创建settings.json文件：
// 将设置放入此文件中以覆盖默认值和用户设置。
settings.json是VS Code的用户设置文件，可以设置，编辑器的字体、颜色等
"typescript.tsdk": "node_modules/typescript/lib"，指出Angular 2的开发库
"files.exclude": ts 项目, 隐藏 .js 和 .js.map 文件
{
    "typescript.tsdk": "node_modules/typescript/lib",

    // ts 项目, 隐藏 .js 和 .js.map 文件
    "files.exclude": {
        "node_modules": true,
        "**/*.js": { "when": "$(basename).ts" },
        "**/*.js.map": true
    }

}
3、在.vscode子文件夹下，创建tasks.json文件：
"command": "cmd"，命令方式
"isShellCommand": true，是否使用命令行方式
"showOutput": "always"，输出显示
"args": ["/C npm start"]，命令参数
{
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "0.1.0",
    "command": "cmd",
    "isShellCommand": true,
    "showOutput": "always",
    "args": ["/C npm start"]
}
4.在.vscode子文件夹下，创建launch.json
launch.json用于Debug调试选项配置
"version": 版本号
"name"："Attach to Chrome, with sourcemaps" 附加到Chrome,带映射信息
"type": "chrome"，启用谷歌chrome浏览器
"request": "launch"，发送到浏览器
"request": "attach"，附加到浏览器
"port": 9222，端口号
"sourceMaps": true，源码映射
"webRoot": "${workspaceRoot}"，根路径
{
    "version": "0.2.0",
    "configurations": [{
            "name": "Launch Chrome against localhost, with sourcemaps",
            "type": "chrome",
            "request": "launch",
            "url": "http://localhost:8080/index.html",
            "sourceMaps": true,
            "webRoot": "${workspaceRoot}"
        },
        {
            "name": "Attach to Chrome, with sourcemaps",
            "type": "chrome",
            "request": "attach",
            "port": 9222,
            "sourceMaps": true,
            "webRoot": "${workspaceRoot}"
        }
    ]
}