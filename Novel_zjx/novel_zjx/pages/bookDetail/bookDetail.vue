<!-- 书籍详情页 -->
<template>
	<view>
		<!-- 自定义导航栏 -->
		<u-sticky customNavHeight="0" class="nav" id="nav">
			<u-status-bar></u-status-bar>
			<view class="content-margin-center padding-center">
				<u-row justify="space-between">
					<u-col span="0.5">
						<view class="icon-zuojiantou iconfont font-lg" @click="back"></view>
					</u-col>
					<u-col span="6" v-if="show">
						<text class="font-md font-weight-bold text-ellipsis" style="width: 200rpx;">123121231231</text>
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
		<!-- 书籍 -->

		<u-list @scrolltolower="scrolltolower" :scrollable="isApp" :height="scollListHeight">
			<view class="content-margin-center mt-2">
				<u-row justify="space-between" gutter="0.1" customStyle="margin-bottom: 10px">
					<u-col span="6" class="margin-center">
						<view class="flex flex-column">
							<text class="flex-1 font-lg text_ellipsis_2">
								书名书名书名书名书名书名书名
							</text>
							<view class="flex flex-2 flex-row mt-2">
								<text class="font">作者：</text>
								<text class="font">name name</text>
							</view>
							<text class="flex-1 font">玄幻·连载中·40万字</text>
						</view>
					</u-col>
					<u-col span="3.5">
						<view class="rounded-circle">
							<image src="../../static/test.jpg" class="rounded" mode="aspectFill"
								style="width: 100%;height: 280rpx;"></image>
						</view>
					</u-col>
				</u-row>
			</view>

			<u-list-item class="bg-white rounded">
				<!-- 评分 月票 阅读人数 -->
				<view class="content-margin-center justify-between flex flex-row padding-center">
					<view class="padding-center-LR">
						<view>
							<text class="font-lg font-weight-bold">9.8</text>
							<text class="font-weight-bold">分</text>
						</view>
						<view>
							<text class="font-sm text-muted">96.1万点评</text>
							<text class="font-sm iconfont icon-youjiantou text-muted"></text>
						</view>
					</view>
					<view class="padding-center-LR">
						<view>
							<text class="font-lg font-weight-bold">223</text>
							<text class="font-weight-bold">万人</text>
						</view>
						<view>
							<text class="font-sm text-muted">正在阅读</text>
						</view>
					</view>
					<view class="padding-center-LR">
						<view>
							<text class="font-lg font-weight-bold">9.8</text>
							<text class="font-weight-bold">万票</text>
						</view>
						<view>
							<text class="font-sm text-muted">累计月票</text>
							<text class="font-sm iconfont icon-youjiantou text-muted"></text>
						</view>
					</view>
				</view>
				<u-divider></u-divider>
				<!-- 简介 标签 -->
				<view class="content-margin-center flex-column pb-2">
					<text class="font-lg font-weight-bold">书籍简介</text>
					<u-read-more class="pt-2 pb-2" :toggle="true" :showHeight="200">
						<rich-text :nodes="content"></rich-text>
					</u-read-more>
					<view class="flex flex-row mt-2">
						<view class="tag_label flex rounded-circle">
							<text class="font-sm text-muted">玄幻</text>
						</view>
					</view>
				</view>
				<u-divider></u-divider>
				<!-- 目录 -->
				<view class="flex flex-row margin-center padding-center justify-between align-center">
					<text class="font-lg font-weight-bold-sm">查看目录</text>
					<view class="padding-center-LR">
						<text class="text-muted">1天前更新至1525章</text>
						<text class="iconfont icon-youjiantou text-muted pl-2"></text>
					</view>

				</view>

				<u-gap height="10" bgColor="#FFB74D"></u-gap>
				<!-- 书评 评论 -->
				<view class="margin-center">
					<view class="margin-center justify-between flex padding-center">
						<view class="">
							<text class="font-md font-weight-bold">书评</text>
							<text class="pl-1 pr-1">·</text>
							<text class="font-md font-weight-bold">824</text>
						</view>
						<view>
							<text class="iconfont text-muted font-sm font-weight-bold">全部书评</text>
							<text class="iconfont text-muted font-sm icon-youjiantou pl-2"></text>
						</view>
					</view>
					<view class="flex flex-row rounded-20 bg-lightorange margin-center p-2 justify-between">
						<text class="iconfont text-muted font-md font-weight-bold">轻点评论</text>
						<u-rate :count="count" v-model="value" size="24" minCount="0" gutter="6"></u-rate>
					</view>
					<view class="mt-2">1231231313123123123</view>
				</view>
			</u-list-item>
		</u-list>
	</view>


</template>

<script>
	export default {
		data() {
			return {
				content: `山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
								苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
								无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
								苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
								无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
								苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
								无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有`,
				count: 5,
				value: 0,
				show: true,
				isApp: false,
				indexList: [],
				scollListHeight: 0,
				windowHeight: 0,
				urls: [
					'https://cdn.uviewui.com/uview/album/1.jpg',
					'https://cdn.uviewui.com/uview/album/2.jpg',
					'https://cdn.uviewui.com/uview/album/3.jpg',
					'https://cdn.uviewui.com/uview/album/4.jpg',
					'https://cdn.uviewui.com/uview/album/5.jpg',
					'https://cdn.uviewui.com/uview/album/6.jpg',
					'https://cdn.uviewui.com/uview/album/7.jpg',
					'https://cdn.uviewui.com/uview/album/8.jpg',
					'https://cdn.uviewui.com/uview/album/9.jpg',
					'https://cdn.uviewui.com/uview/album/10.jpg',
				]
			}
		},
		onLoad(e) {
			console.log(e)
			this.windowHeight = uni.getSystemInfoSync().windowHeight

			this.judgeplatform()
			this.loadmore()
		},
		mounted() {
			this.CalHeight()
		},
		methods: {
			// 计算高度
			CalHeight() {
				// 组件高度
				return new Promise((resolve, reject) => {
					this.$nextTick(function() {
						let tempHeight = 0
						console.log("计算高度")
						// #ifdef APP-PLUS

						const query1 = uni.createSelectorQuery().in(this);
						query1.select('#nav').boundingClientRect(data => {
							console.log("得到布局位置信息" + JSON.stringify(data));
							tempHeight = data.height
							console.log("tempHeight", tempHeight)
							console.log(this.windowHeight)
							this.scollListHeight = this.windowHeight - tempHeight
							// console.log("节点离页面顶部的距离为" + data.top);		
							console.log(this.scollListHeight)
							resolve()
						}).exec();
						// #endif

						// #ifdef H5 || MP-WEIXIN
						const query2 = uni.createSelectorQuery();
						query2.select('#nav').boundingClientRect(data => {
							console.log("得到布局位置信息" + JSON.stringify(data));
							tempHeight = data.height
							console.log("tempHeight", tempHeight)
							console.log(this.windowHeight)
							this.scollListHeight = this.windowHeight - tempHeight
							// console.log("节点离页面顶部的距离为" + data.top);
							console.log(this.scollListHeight)
							resolve()
						}).exec();
						// #endif
					});
				})
			},
			scrolltolower() {
				this.loadmore()
			},
			loadmore() {
				for (let i = 0; i < 30; i++) {
					this.indexList.push({
						url: this.urls[uni.$u.random(0, this.urls.length - 1)]
					})
				}
			},
			back() {
				console.log("返回")
				uni.navigateBack({
					delta: 1
				});
			},
			change() {
				this.show = !this.show
			},
			judgeplatform() {
				// this.$nextTick(function() {
				// 	//#ifdef App-plus
				// 	this.isApp = true
				// 	// #endif

				// 	// #ifdef H5||MP-WEIXIN
				// 	this.isApp = false
				// 	// #endif
				// });

			}
		}
	}
</script>

<style>
	page {
		background-image: linear-gradient(to bottom left, rgba(255, 0, 0, 0.0), rgba(255, 255, 127, 1.0));
	}
</style>
