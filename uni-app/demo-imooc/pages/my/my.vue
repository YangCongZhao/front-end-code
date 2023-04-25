<template>
	<view class="page page-fill">
		<view class="header">
			<view class="info-wapper">
				<view v-if="userIsLogin">
						<image src="../../static/icos/108x108.png" class="face" mode=""></image>
				</view>
				<view v-else>
					<image src="../../static/icos/QQ.png" class="face" mode=""></image>
				</view>
			
			<view v-if="userIsLogin">
				<view class="nickname">
					yc
				</view>
				<view class="nav-info">
					id:3333232323
				</view>
			</view>
			<view v-else>
				<text @click="sinUp">
					注册:
				</text>
				<text>登录</text>
				
			</view>
			</view>
			<view class="set-wapper">
				<image src="../../static/icos/settings.png" class="settings" mode=""></image>	
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userIsLogin:false
			};
		},
		methods:{
			login(){
				this.userIsLogin = true
			},
			sinUp(){
				uni.navigateTo({
					url:'/pages/sinUp/sinUp'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
@import url('my.scss');
</style>
