<template>
	<el-row class="tac">
		<el-col :span="24">
			<!--
				default-active="1" 默认打开选择的index
				collapse 菜单是否折叠
			-->
			<el-menu
				active-text-color="#ffd04b"
				background-color="var(--main--one-bg)"
				class="el-menu-vertical-demo"
				:default-active="defaultShowId"
				text-color="#fff"
				@open="handleOpen"
				@close="handleClose"
				:collapse="mainStore.isCollapse"
			>
				<el-sub-menu :index="String(item.id)" v-for="item in loginStore.userMenus" :key="item.id">
					<template #title>
						<el-icon><FolderOpened /></el-icon>
						<!-- <el-icon>
							<component :is="item.icon.replace('el-icon', '')"></component>
						</el-icon> -->
						<span>{{ item.name }}</span>
					</template>
					<!-- :index="String(item.id) + '-' + String(subItem.id)" index 不一定要用他模板的1-1-->
					<el-menu-item
						:index="String(subItem.id)"
						v-for="subItem in item.children"
						:key="subItem.id"
						@click="toPath(subItem)"
					>
						<template #title>
							<el-icon>
								<component :is="subItem.icon.replace('el-icon', '')"></component>
							</el-icon>
							<span>{{ subItem.name }}</span>
						</template>
					</el-menu-item>
				</el-sub-menu>
			</el-menu>
		</el-col>
	</el-row>
</template>

<script setup lang="ts">
	import router from '@/router'
	import useLoginStore from '@/store/login/login'
	import useMainStore from '@/store/main/main'
	import { computed, ref } from 'vue'
	import { useRoute } from 'vue-router'
	import { mapPathToMenu } from '@/utils/map-menus'

	let loginStore = useLoginStore()
	let mainStore = useMainStore()

	// 设置默认激活菜单
	const route = useRoute()
	// 通过路径获取id
	let id = computed(() => {
		return mapPathToMenu(route.path, loginStore.userMenus)
	})
	let defaultShowId = ref(id)

	const handleOpen = (key: string, keyPath: string[]) => {
		console.log(key, keyPath)
	}
	const handleClose = (key: string, keyPath: string[]) => {
		console.log(key, keyPath)
	}

	const toPath = (submenu: any) => {
		router.push(submenu.url)
	}
</script>

<style lang="scss" scoped>
	.el-menu {
		border-right: 0;
		// .el-menu-item {
		// 	transition: all 0.2s;
		// 	&:hover {
		// 		transform: scale(0.95);
		// 	}
		// }
	}
</style>
