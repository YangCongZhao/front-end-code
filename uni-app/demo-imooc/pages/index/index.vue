<template>
	<view class="pageIndex">
		<view class="pageIndex__logo">
			<image src="@/static/huoSelect.png" alt=""></image> 
		</view>
		<homeSearch />
		
	</view>
</template>

<script>
	import homeSearch from '@/components/homeSearch/homeSearch.vue'
	export default {
		components:{
			homeSearch	
		},
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
		&__logo{
			width: 50px;
			height: 50px;
			margin: 0 auto;
			margin-bottom: 10px;
		image{
				width: 100%;
				height: 100%;
			}
		}
		&__input{
			padding: 0 20px 0 20px;
			overflow: hidden;
	
		
		
			
		}
		
	}
	
</style>
