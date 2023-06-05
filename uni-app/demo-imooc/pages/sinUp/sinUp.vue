<template>
	<view class="body">
		<form @submit="formSubmit">
			<view class="face-wapper">
				<image src="../../static/icos/default-face.png" class="face"></image>
			</view>
			
			<view class="info-wapper">
				<label class="words-lbl">账号</label>
				<input name="username" type="text" value="" class="input" placeholder="请输入用户名" placeholder-class="graywords"/>
			</view>
			
			<view class="info-wapper" style="margin-top: 40upx;">
				<label class="words-lbl">密码</label>
				<input name="password" type="text" value="" password="true" class="input" placeholder="请输入密码" placeholder-class="graywords"/>
			</view>
			
			<button type="primary" form-type="submit" style="margin-top: 60upx;width: 90%;">注册/登录</button>
		</form>
		
		
		<!-- 第三方登录H5不支持，所以隐藏掉 -->
		<!-- #ifndef H5 -->
			<view class="third-wapper">
				<view class="third-line">
					<view class="single-line">
						<view class="line"></view>
					</view>
					
					<view class="third-words">第三方账号登录</view>
					
					<view class="single-line">
						<view class="line"></view>
					</view>
				</view>
				
				<view class="third-icos-wapper">
					<!-- 5+app 用qq/微信/微博 登录 小程序用微信小程序登录 h5不支持 -->
					<!-- #ifdef APP-PLUS -->
						<image src="../../static/icos/weixin.png" data-logintype="weixin" @click="appOAuthLogin" class="third-ico"></image>
						<image src="../../static/icos/QQ.png" data-logintype="qq" @click="appOAuthLogin" class="third-ico" style="margin-left: 80upx;"></image>
						<image src="../../static/icos/weibo.png" data-logintype="sinaweibo" @click="appOAuthLogin" class="third-ico" style="margin-left: 80upx;"></image>
					<!-- #endif -->
					<!-- #ifdef MP-WEIXIN -->
						<button  open-type='getUserInfo' @getuserinfo="wxLogin" class="third-btn-ico">
						</button>
					<!-- #endif -->
				</view>
			</view>
		<!-- #endif -->
	</view>
</template>


<script> 
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			formSubmit(val){
					console.log(val)
			},
			wxLogin(e){
				uni.login({ 
	"provider": "weixin",
	"onlyAuthorize": true, // 微信登录仅请求授权认证
	success: function(event){
		const {code} = event
		//客户端成功获取授权临时票据（code）,向业务服务器发起登录请求。
		uni.request({
		    url: 'https://www.example.com/loginByWeixin', //仅为示例，并非真实接口地址。
		    data: {
		        code: event.code
		    },
		    success: (res) => {
		        //获得token完成登录
				uni.setStorageSync('token',res.token)
		    }
		});
	},
	fail: function (err) {
        // 登录授权失败  
        // err.code是错误码
    }
})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.body {
		border-top: solid 1px #DBDBDA;
		padding: 0 40upx;
	}
	
	/* 头像 start */
	.face-wapper {
		display: flex;
		flex-direction: row;
		justify-content: center;
		
		margin-top: 120upx;
		margin-bottom: 120upx;
	}
	
	.face {
		width: 160upx;
		height: 160upx;
	}
	/* 头像 end */
	
	/* 注册登录 start */
	.info-wapper {
		display: flex;
		flex-direction: row;
		justify-content: center;
		
		border-bottom: solid 1px #DBDBDA;
		
		padding-bottom: 20upx;
	}
	
	.words-lbl {
		color: #808080;
	}
	
	.input {
		width: 500upx;
		margin-left: 40upx;
	}
	
	.graywords {
		color: #EAEAEA;
	}
	
	/* 注册登录 end */
	
	/* 第三方登录 start */
	.third-wapper {
		width: 100%;
		/* 固定底部 */
		/* bottom: 0;
		position: fixed; */
		
		margin-top: 60upx;
		
	}
	
	.third-line {
		display: flex;
		flex-direction: row;
		justify-content: center
	}
	
	.third-words {
		color: #A9A9A9;
		font-size: 13px;
		
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	
	.single-line {
		padding: 15upx 20upx;
		width: 25%;
		align-items: center;
	}
	
	.third-icos-wapper {
		margin-top: 30upx;
		
		display: flex;
		flex-direction: row;
		justify-content: center
	}
	
	.third-ico {
		width: 60upx;
		height: 60upx;
	}
	
	.third-btn-ico {
		background-image:url('../../static/icos/weixin.png');
		width: 60upx;
		height: 60upx;
		background-color: white;
		background-size: 60upx 60upx;
		background-repeat:no-repeat;
		border:none;
		padding: 0;
	}
	button::after{
		border: none;
	}
	/* 第三方登录 end */
</style>
