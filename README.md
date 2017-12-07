#安装依赖
npm install



配置应用程序

1、在VS Code中，在根文件夹（angular2-quickstart）下，创建.vscode子文件夹。
2、在.vscode子文件夹下，创建settings.json文件：
// 将设置放入此文件中以覆盖默认值和用户设置。
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
{
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "0.1.0",
    "command": "cmd",
    "isShellCommand": true,
    "showOutput": "always",
    "args": ["/C npm start"]
}