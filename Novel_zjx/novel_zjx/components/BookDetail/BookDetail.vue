<template>
	<view>
		<!-- 自定义导航栏 -->
		<u-sticky customNavHeight="0" class="nav">
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

		<u-list @scrolltolower="scrolltolower" :height="scollListHeight">
			<view class="content-margin-center pt-2">
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
					<u-read-more class="pt-2 pb-2 InfoHeight" :toggle="true" :showHeight="InfoHeight">
						<rich-text :nodes="content"></rich-text>
					</u-read-more>
					<scroll-view scroll-x="true" class="w-100" style="white-space: nowrap;">
						<view class="flex flex-row">
							<block v-for="(item,index) in 10">
								<view class="tag_label flex rounded-circle ml-1 mr-1">
									<text class="font-sm text-muted">玄幻{{item}}</text>
								</view>
							</block>
						</view>
					</scroll-view>
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

				<u-gap height="8" bgColor="#FFB74D"></u-gap>
				<!-- 书评 评论 -->
				<view class="content-margin-center">
					<view class="justify-between flex padding-center">
						<view class="">
							<text class="font-md font-weight-bold">书评</text>
							<text class="pl-1 pr-1">·</text>
							<text class="font-md font-weight-bold">824</text>
						</view>
						<view @click="toComment">
							<text class="iconfont text-muted font-sm font-weight-bold">全部书评</text>
							<text class="iconfont text-muted font-sm icon-youjiantou pl-2"></text>
						</view>
					</view>
					<view class="flex flex-row rounded-20 bg-lightorange margin-center p-3 justify-between">
						<text class="iconfont text-muted font-md font-weight-bold">轻点评论</text>
						<u-rate :count="count" v-model="value" size="24" minCount="0" gutter="6"></u-rate>
					</view>

					<!-- 评论展示 -->
					<block v-for="(item,index) in commitList" :key="index">
						<commentList :commitList="item"></commentList>
					</block>
				</view>

				<!-- 查看全部评论 -->
				<view class="flex align-center justify-center padding-center text-orange" @click="toComment">
					<text>查看全部书评</text>
					<text class="iconfont icon-youjiantou"></text>
				</view>
				<u-divider></u-divider>

				<view class="margin-center pb-4">
					<text
						class="font-sm text-muted">版权与免责声明系为保证本网站的正常发展、规避意外风险而设，其初衷是为了向用户提供不间断的优质服务。因此，建议您在接受本站服务之前，请务必仔细阅读本条款</text>
				</view>
			</u-list-item>
		</u-list>
		<u-sticky bgColor="white" class="border-top nav2">
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
	import commentList from '@/components/commentList/commentList.vue';
	export default {
		name: "BookDetail",
		components: {
			commentList
		},
		data() {
			return {
				InfoHeight: 0,
				pixelRatio: 0,
				commitList: [{
						avatar: "../../static/logo.png",
						name: '爱睡的猪',
						createTime: '1-24',
						upOrno: 0,
						upnum: 30,
						value: 3,
						content: `山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
								苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
								无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
								苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
								无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
								苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
								无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有`,
						commitDelList: {
							num: 135,
							list: [{
								name: "起飞的老鼠",
								commitContent: `无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
								苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。`,
							}, {
								name: "陆上的鸭",
								commitContent: `无丝竹之乱耳，无案牍之劳形。。`,
							}, ]
						}
					},
					{
						avatar: "../../static/logo.png",
						name: '爱睡的猪',
						createTime: '1-24',
						upOrno: 0,
						upnum: 30,
						value: 3,
						content: `山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
								苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
								无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
								苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
								无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
								苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
								无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有`,
						commitDelList: {
							num: 0,
							list: []
						}
					}
				],
				content: `山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
							苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
							无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
							苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
							无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
							苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
							无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有`,
				value: 3,
				count: 5,
				name: '爱睡的猪',
				show: true,
				indexList: [],
				scollListHeight: 0,
				windowHeight: 0,
			}
		},
		mounted() {
			console.log(uni.getSystemInfoSync())
			this.windowHeight = uni.getSystemInfoSync().windowHeight
			this.pixelRatio = uni.getSystemInfoSync().pixelRatio
			console.log(this.pixelRatio)
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
						query1.select('.nav').boundingClientRect(data => {
							console.log("得到布局位置信息" + JSON.stringify(data));
							tempHeight = data.height
							console.log("tempHeight", tempHeight)
							console.log(this.windowHeight)
							this.scollListHeight = this.windowHeight - tempHeight
							// console.log("节点离页面顶部的距离为" + data.top);		
							console.log(this.scollListHeight)
							resolve()
						}).exec();

						query1.select('.nav2').boundingClientRect(data => {
							console.log("得到布局位置信息" + JSON.stringify(data));
							tempHeight = data.height
							console.log("tempHeight", tempHeight)
							console.log(this.windowHeight)
							this.scollListHeight = this.scollListHeight - tempHeight
							// console.log("节点离页面顶部的距离为" + data.top);		
							console.log(this.scollListHeight)
							resolve()
						}).exec();

						query1.select('.InfoHeight').boundingClientRect(data => {
							let height = data.height;
							this.contentHeight = height;
							let lineHeight = lineHeight = 14 * 1.5;

							// #ifdef APP-PLUS || MP-WEIXIN
							lineHeight = Math.floor(lineHeight * this.pixelRatio) / this
								.pixelRatio
							// #endif
							let lineNum = Math.floor((height + Math.floor((lineHeight -
								14) / 2)) / lineHeight)
							this.InfoHeight = (lineNum - 1) * lineHeight
							console.log(this.InfoHeight)
							resolve()
						}).exec();
						// #endif

						// #ifdef H5 || MP-WEIXIN
						const query2 = uni.createSelectorQuery();
						query2.select('.nav').boundingClientRect(data => {
							console.log("得到布局位置信息" + JSON.stringify(data));
							tempHeight = data.height
							console.log("tempHeight", tempHeight)
							console.log(this.windowHeight)
							this.scollListHeight = this.windowHeight - tempHeight
							// console.log("节点离页面顶部的距离为" + data.top);
							console.log(this.scollListHeight)
							resolve()
						}).exec();

						query2.select('.nav2').boundingClientRect(data => {
							console.log("得到布局位置信息" + JSON.stringify(data));
							tempHeight = data.height
							console.log("tempHeight", tempHeight)
							console.log(this.windowHeight)
							this.scollListHeight = this.scollListHeight - tempHeight
							// console.log("节点离页面顶部的距离为" + data.top);
							console.log(this.scollListHeight)
							resolve()
						}).exec();

						query2.select('.InfoHeight').boundingClientRect(data => {
							let height = data.height;
							this.contentHeight = height;
							let lineHeight = 20
							lineHeight = Math.floor(lineHeight * this.pixelRatio) / this
								.pixelRatio;

							console.log(lineHeight, this.pixelRatio)
							let lineNum = Math.floor((height + Math.floor((lineHeight -
								14) / 2)) / lineHeight)

							this.InfoHeight = lineHeight + 40
							console.log(this.InfoHeight)
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
			toComment() {
				uni.navigateTo({
					url: '/pages/comment/comment'
				})
			}
		}
	}
</script>

<style>

</style>
