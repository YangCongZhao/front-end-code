<template>
	<view class="pageIndex">
		<view class="pageIndex__input">
			<uni-easyinput prefixIcon="search"  v-model="formLine.searchValue" placeholder="请输入" @iconClick="iconClick" />
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				formLine:{
					searchValue:''
				},
			
			}
		},
		onLoad() {

		},
		methods: {
			iconClick(){
				
			}

		}
	}
</script>

<style lang="scss" scoped>
	.pageIndex{
		&__input{
			padding: 0 20px 0 20px;
			overflow: hidden;
	
		
		
			
		}
		
	}
	
</style>
