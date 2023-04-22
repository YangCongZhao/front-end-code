<template>
	<view class="homeSearch">
		<view class="homeSearch__box">
			<image class="icon" src="@/static/search.png"></image>
			<text class="placeholder">请搜索</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"homeSearch",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.homeSearch{
		width: 100%;
		height: 36px;
		.homeSearch__box{
			display: flex;
			align-items: center;
			height: 100%;
			margin: 0 20px;
			padding: 0 16px;

			border-radius: 10px;
			box-sizing: border-box;
			border: 1px solid gray;
			image{
				width: 20px;
				height: 20px;
				padding-left: 5px;
				padding-right: 5px;
				
			}
			.placeholder{
				color: gray;
			}
		}
		
	}

</style>