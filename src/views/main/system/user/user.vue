<template>
	<div class="user-page page">
		<PageSearch @handleSearchClick="handleSearchClick"></PageSearch>
		<div class="tables">
			<UserContent
				ref="tableRef"
				@handleAddClick="handleAddClick"
				@handleEditClick="handleEditClick"
			></UserContent>
		</div>
		<UserModal ref="dialogModalRef"></UserModal>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import PageSearch from './user-search.vue'
	import UserContent from './user-content.vue'
	import UserModal from './user-modal.vue'

	// 对表格的操作
	const tableRef = ref<InstanceType<typeof UserContent>>()
	const handleSearchClick = (data: any) => {
		tableRef.value?.getData(data)
	}

	// 对弹窗的操作
	let dialogModalRef = ref<InstanceType<typeof UserModal>>()
	const handleAddClick = () => {
		dialogModalRef.value?.showDialog(true)
	}

	const handleEditClick = (row: any) => {
		dialogModalRef.value?.showDialog(false, row)
	}
</script>

<style lang="scss" scoped>
	.user-page {
		padding: 0 20px;
		overflow: auto;
	}
	.page-search {
		margin: 20px 0;
	}
	// .tables {
	// 	padding-left: 20px;
	// }
</style>
