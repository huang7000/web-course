:::snippet NPM 使用介绍
NPM 是随同 NodeJS 一起安装的包管理工具，常见的使用场景有以下几种：

1. 允许用户从 NPM 服务器下载别人编写的第三方包到本地使用。
2. 允许用户从 NPM 服务器下载并安装别人编写的命令行程序到本地使用。
3. 允许用户将自己编写的包或命令行程序上传到 NPM 服务器供别人使用。

安装

```bash
$ npm install npm -g
```

查看

```bash
$ npm -v
```

使用 npm 命令安装模块

```bash
$ npm install <Module Name>
```

全局安装与本地安装

```bash
npm install express          # 本地安装
npm install express -g   # 全局安装
```

卸载模块

```bash
$ npm uninstall express
```

更新模块

```bash
$ npm update express
```

搜索模块

```bash
$ npm search express
```

查看安装信息

```bash
$ npm list -g
```

创建模块

```bash
$ npm init
$ npm adduser //注册用户（使用邮箱注册）
$ npm publish //发布模块
```

查看安装信息

```bash
$ npm list -g
```

:::

:::snippet Package.json 属性说明

```json
{
  "name": "exchange",
  "version": "0.1.0",
  "author": "zhangsan <zhangsan@163.com>",
  "description": "第一个node.js程序",
  "keywords": ["node.js", "javascript"],
  "private": true,
  "bugs": { "url": "http://path/to/bug", "email": "bug@example.com" },
  "contributors": [{ "name": "李四", "email": "lisi@example.com" }],
  "repository": {
    "type": "git",
    "url": "https://path/to/url"
  },
  "homepage": "http://necolas.github.io/normalize.css",
  "license": "MIT",
  "dependencies": {
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "react-router-dom": "^5.0.1",
    "react-scripts": "3.0.1"
  },
  "devDependencies": {
    "browserify": "~13.0.0",
    "karma-browserify": "~5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "bin": {
    "webpack": "./bin/webpack.js"
  },
  "main": "lib/webpack.js",
  "module": "es/index.js",
  "eslintConfig": {
    "extends": "react-app"
  },
  "engines": {
    "node": ">=0.10.3 <0.12"
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "style": ["./node_modules/tipso/src/tipso.css"],
  "files": [
    "lib/",
    "bin/",
    "buildin/",
    "declarations/",
    "hot/",
    "web_modules/",
    "schemas/",
    "SECURITY.md"
  ]
}
```

name：项目/模块名称，长度必须小于等于214个字符，不能以"."(点)或者"_"(下划线)开头，不能包含大写字母。
version：项目版本。
author：项目开发者，它的值是你在`https://npmjs.org`网站的有效账户名，遵循“账户名<邮件>”的规则，例如：zhangsan zhangsan@163.com。
description：项目描述，是一个字符串。它可以帮助人们在使用npm search时找到这个包。
keywords：项目关键字，是一个字符串数组。它可以帮助人们在使用npm search时找到这个包。
private：是否私有，设置为 true 时，npm 拒绝发布。
license：软件授权条款，让用户知道他们的使用权利和限制。
bugs：bug 提交地址。
contributors：项目贡献者 。
repository：项目仓库地址。
homepage：项目包的官网 URL。
dependencies：生产环境下，项目运行所需依赖。
devDependencies：开发环境下，项目所需依赖。
scripts：执行 npm 脚本命令简写，比如 “start”: “react-scripts start”, 执行 npm start 就是运行 “react-scripts start”。
bin：内部命令对应的可执行文件的路径。
main：项目默认执行文件，比如 require(‘webpack’)；就会默认加载 lib 目录下的 webpack.js 文件，如果没有设置，则默认加载项目跟目录下的 index.js 文件。
module：是以 ES Module(也就是 ES6)模块化方式进行加载，因为早期没有 ES6 模块化方案时，都是遵循 CommonJS 规范，而 CommonJS 规范的包是以 main 的方式表示入口文件的，为了区分就新增了 module 方式，但是 ES6 模块化方案效率更高，所以会优先查看是否有 module 字段，没有才使用 main 字段。
eslintConfig：EsLint 检查文件配置，自动读取验证。
engines：项目运行的平台。
browserslist：供浏览器使用的版本列表。
style：供浏览器使用时，样式文件所在的位置；样式文件打包工具parcelify，通过它知道样式文件的打包位置。
files：被项目包含的文件名数组。

:::

:::snippet 使用淘宝 NPM 镜像

使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm

```bash
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
$ cnpm install [name]
```

:::
