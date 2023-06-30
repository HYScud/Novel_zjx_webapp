<!-- 书籍详情页 -->
<template>
	<view class="tabs bg-white">
		<!-- 自定义导航栏 -->
		<u-sticky class="bg-theme" customNavHeight="0" style="height: 73px;background-color: gold;">
			<u-status-bar></u-status-bar>
			<view class="content-margin-center padding-center">
				<u-row justify="space-between">
					<u-col span="0.5">
						<view class="icon-zuojiantou iconfont font-lg" @click="back"></view>
					</u-col>
					<u-col span="6" v-if="show">
						<text class="font-md font-weight-bold text_ellipsis_1"
							style="width: 300rpx;">{{novelData.novelName}}</text>
					</u-col>
					<u-col span="4">
						<view class="flex flex-row justify-between">
							<view><text class="font-md">加入书架</text></view>
							<text class="iconfont icon-menu font-lg"></text>
						</view>
					</u-col>
				</u-row>
			</view>
		</u-sticky>
		<view class="tab-view">
			<view class="swiper-item" :style="{'height':`${height}`+'px'}">
				<BookDetails class="swiper-page" :novelData="novelData" :style="{'height':`${height}`+'px'}"></BookDetails>
			</view>
		</view>
		<u-sticky class="border-top bg-white">
			<view class="margin-center padding-center-10">
				<view class="mr-3 ml-3 flex flex-row justify-between align-center">
					<text class="margin-center font-md padding-center font-weight-bold-sm">下载</text>
					<view class="bg-theme flex align-center m-1 rounded-circle">
						<text class="pr-4 pl-4 pt-2 pb-2 font-weight-bold-sm text-white">免费阅读</text>
					</view>
				</view>
			</view>
		</u-sticky>	
	</view>
</template>

<script>
	import BookDetails from '@/components/bookDetail/bookDetails.nvue';
	export default {
		components: {
			BookDetails,
		},
		data() {
			return {
				height:300,
				novelData:{},
				isComRes: false,
				isFail: false,
				loading_text: '正在加载',
				loaded_fail: '服务器异常',
				show: true,
			}
		},
		onLoad(e) {
			console.log(e)
			this.initData(e.novelId)
		},
		methods: {
			initData(novelId){
				uni.request({
					url: getApp().globalData.baseUrl+'novel/search/'+novelId, //仅为示例，并非真实接口地址。
					method: "GET",
					success: (res) => {
						console.log("请求")
						if (res.data.code == 20000) {
							console.log(res.data);
							this.novelData=res.data.data
							this.isComRes=true
						}else{
							console.log(res)
						}
					},
					fail: (error) => {
						console.log(error);
						this.isFail = true
					},
				});
			},
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
		}
	}
</script>

<style>
	/* #ifndef APP-PLUS */
	page {
		width: 100%;
		min-height: 100%;
		display: flex;
	}
	
	/* #endif */
	
	.page {
		flex: 1;
	}
	.swiper-item {
		flex: 1;
		flex-direction: column;
	}
	
	.tab-view {
		flex: 1;
	}
	
	.swiper-page {
		flex: 1;
		flex-direction: column;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
	}
	.tabs {
		flex: 1;
		flex-direction: column;
		overflow: hidden;
		/* #ifdef MP-ALIPAY || MP-BAIDU */
		height: 100vh;
		/* #endif */
	}
</style>
