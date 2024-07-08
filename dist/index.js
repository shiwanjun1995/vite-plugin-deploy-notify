var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => deployNotify
});
module.exports = __toCommonJS(src_exports);
function deployNotify() {
  return {
    name: "vite-plugin-deploy-notify",
    // 插件名称
    enforce: "post",
    // 在 Vite 构建插件之后调用该插件
    // apply: serve | build  默认情况下插件在开发 (serve) 和生产 (build) 模式中都会调用。
    config(config, env) {
      console.log(config, env);
    }
  };
}
