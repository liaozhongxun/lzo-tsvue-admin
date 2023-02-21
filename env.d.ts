/// <reference types="vite/client" />

import type { AxiosRequestConfig } from 'axios'

// 自己定义一个vue文件声明，让vscode提示 vue组件的类型(不配置的话main映入.vue是会报错的)
// TypeScript Vue Plugin (Volar) 让项目自动识别 .vue 文件，也会导致我们配置这个的不生效
declare module '*.vue' {
	import { DefineComponent } from 'vue'
	const src: DefineComponent
	export default src
}

// 处理 类型“AxiosResponse<any, any>”上不存在属性“token”
declare module 'axios' {
	interface AxiosInstance {
		(config: AxiosRequestConfig): Promise<any>
	}
}

interface errorCodes {
	'401': string
	'403': string
	'404': string
	default: string
}
