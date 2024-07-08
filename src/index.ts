// 插件入口
import type { Plugin } from 'vite'

export default function deployNotify(): Plugin {
  return {
    name: 'vite-plugin-deploy-notify', // 插件名称
    // enforce: 'post', // 在 Vite 构建插件之后调用该插件
    // apply: serve | build  默认情况下插件在开发 (serve) 和生产 (build) 模式中都会调用。
    config(config, env) {
      // 这个钩子接收原始用户配置和一个描述配置环境的变量
      console.log('config>>>', config)
      console.log('env>>>', env)
    },
  }
}
