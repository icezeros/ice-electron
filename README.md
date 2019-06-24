# umi-electron-javecript

### 一个基于 umijs + electron + javecript 的模板

[![Umi](https://img.souche.com/f2e/a92fc3dfdb4918578861c42bbfcfaf7f.png)](https://umijs.org/)
[![Webpack](https://img.souche.com/f2e/cdc96229f3f9b7068a9b13f7658a9b0e.png)](https://webpack.js.org/)
[![Electron](https://img.souche.com/f2e/4f18b23a82d106ce023cdaf17c6dfd51.png)](https://electronjs.org/)

## 主要特性

- 支持整个应用的热重载

## 安装

然后通过 yarn 下载依赖

```javascript
  $ yarn
```

## 开发

首先通过以下命令启动渲染进程(默认端口：8000)

### 一条命令启动

```javascript
  $ yarn start:dev
```

### 分开启动

首先通过以下命令启动渲染进程(默认端口：8000)

```javascript
  $ yarn start:renderer
```

然后启动主进程

```javascript
  $ yarn start:main
```

## 打包

```javascript
  $ npm run pack
```

如果想把代码打包成一个 dmg 文件或者 zip 文件，可以执行以下命令

```javascript
  $ npm run dist
```

## 致谢

- [@williamnie](https://github.com/williamnie)提供的模板([umi-electron](https://github.com/williamnie/umi-electron))
- [@agalwood](https://github.com/agalwood/Motrix)提供的项目([Motrix](https://github.com/agalwood/Motrix))
- [@ConardLi](https://github.com/ConardLi)提供的模板([electron-react](https://github.com/ConardLi/electron-react))，本项目是根据这些项目修改而来。
- [Electron](https://github.com/electron/electron), [Umi](https://github.com/umijs/umi), [Dva](https://github.com/dvajs/dva), [Antd](https://github.com/ant-design/ant-design)等框架的开发者们。
