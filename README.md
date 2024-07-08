# vite-plugin-deploy-notify

## 安装所需依赖

```js
typescript: ts 开发, 更有助于插件后续的维护.

@types/node: 在 node 中使用 typescript 时, 用来加载所有的类型定义。

tsup: 可以快速打包 typescript 库, 无需任何配置, 并且基于 esbuild 进行打包, 同时也可以快速生成 ts 类型, 打包 ts 文件速度是 tsc 的 100 多倍.
```

## package.json 说明

```js
在 dev 的情况下你可以进行打包并监听文件的改变进行打包, 可快速看到效果

--clean: 打包时需要清除上一次的打包

--dts: 打包附带类型定义文件

--format: 参数指定即可打包出 cjs, esm 格式的文件

打包出口默认是 dist 文件夹, 并且默认是符合 commonJS 的 cjs 格式

--splitting: 默认情况下打包 esm 会进行代码分割, 但是 cjs 并不默认支持, 如果需要启用 cjs 代码分割需要加上
```
