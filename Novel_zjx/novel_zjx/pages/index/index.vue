<template>
	<view>
		<u-sticky>
			<!-- 顶层高度 -->
			<u-status-bar style="background-color: gold;"></u-status-bar>
			<!-- 导航菜单 -->
			<view style="background-color: gold;">
				<view class="margin-center">
					<u-row justify="space-between" gutter="10">
						<u-col span="9">
							<view class="text-center">
								<u-tabs :list="list" :scrollable="show" lineWidth="30" lineColor="#f56c6c" :activeStyle="{
								            color: '#303133',
								            fontWeight: 'bold',
								            transform: 'scale(1.05)'
								        }" :inactiveStyle="{
											fontsize:'35rpx',
								            color: '#606266',
								            transform: 'scale(1)'
								        }" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;">
								</u-tabs>
							</view>
						</u-col>
						<u-col span="3">
							<view class="text-center" @click="toSearch()">
								<view class="iconfont font-lg icon-search"></view>
							</view>
						</u-col>
					</u-row>
				</view>
			</view>
		</u-sticky>
		<!-- 轮播图 -->
		<view style="background-color: gold;">
			<view class="margin-center">
				<view>
					<u-swiper :list="list1"></u-swiper>
				</view>
			</view>
		</view>

		<!--分类 排行榜 -->
		<view class="mt-2 margin-center">
			<u-row justify="space-between" gutter="0.1">
				<u-col span="5.8" style="height: 180rpx;background-color: aqua;" class="rounded-20">
					<view class="flex justify-between margin-center align-center mt-1">
						<view class="flex flex-column">
							<text class="font-md font-weight-bold">分类</text>
							<view class="justify-between  flex flex-row">
								<view class="text-muted font-sm ">玄幻</view>
								<view class="text-muted font-sm ml-2">玄幻</view>
							</view>
						</view>
						<view>
							<image src="../../static/logo.png" style="height: 155rpx;width: 130rpx;">
							</image>
						</view>
					</view>
				</u-col>
				<u-col span="5.8" style="height: 180rpx;background-color: aqua;" class="rounded-20">
					<view class="flex justify-between margin-center align-center mt-1">
						<view class="flex flex-column">
							<text class="font-md font-weight-bold">分类</text>
							<view class="justify-between  flex flex-row">
								<view class="text-muted font-sm ">玄幻</view>
								<view class="text-muted font-sm ml-2">玄幻</view>
							</view>
						</view>
						<view>
							<image src="../../static/logo.png" style="height: 155rpx;width: 130rpx;">
							</image>
						</view>
					</view>
				</u-col>
			</u-row>
		</view>

		<!-- 签到 抽奖 -->
		<view class="margin-center mt-2">
			<u-row justify="space-between" gutter="1">
				<u-col span="3.8" class=" bg-lightorange rounded-20 flex">
					<view class="flex-column margin-center justify-center flex" style="height: 130rpx;">
						<view class="font-md font-weight-bold ">签到</view>
						<view class="font-sm text-muted">天天领金币</view>
					</view>
				</u-col>
				<u-col span="3.8" class="bg-lightorange rounded-20">
					<view class="flex-column margin-center justify-center flex" style="height: 130rpx;">
						<view class="font-md font-weight-bold ">签到</view>
						<view class="font-sm text-muted">天天领金币</view>
					</view>
				</u-col>
				<u-col span="3.8" class="bg-lightorange rounded-20">
					<view class="rounded-20 flex-column margin-center justify-center flex" style="height: 130rpx;">
						<view class="font-md font-weight-bold ">签到</view>
						<view class="font-sm text-muted">天天领金币</view>
					</view>
				</u-col>
			</u-row>
		</view>

		<!--  主页推荐卡片等-->
		<block v-for="(item,index) in homeCards">
			<recommond :Rebooks="item.Rebooks" :cardName="item.cardName"></recommond>
			<view class="mt-2"></view>
		</block>
		
		<!-- 底部分割线 -->
		<u-divider text="已经到底了" :dashed="true"></u-divider>
		<view class="mt-3" style="height: 10rpx;"></view>
	</view>
</template>

<script>
	import StatusHeight from '@/components/StatusHeight.vue'
	import Recommond from '@/components/recommond.vue'
	export default {
		components: {
			Recommond
		},
		data() {
			return {
				homeCards: [{
						/* 移动所需参数 */
						startX: 0,
						startY: 0,
						endX: 0,
						endY: 0,
						status: false,

						cardName: "推荐",
						Rebooks: [{
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								id: "1"
							},
							{
								src: "../../static/test.jpg",
								name: "斗破苍穹2",
								id: "1"
							}, {
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								id: "1"
							}, {
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								id: "1"
							}, {
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								id: "1"
							}, {
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								id: "1"
							}
						]
					},
					{
						cardName: "高分佳作",
						Rebooks: [{
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								id: "1"
							},
							{
								src: "../../static/test.jpg",
								name: "斗破苍穹2",
								id: "1"
							}, {
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								id: "1"
							}, {
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								id: "1"
							}, {
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								id: "1"
							}, {
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								id: "1"
							}
						]
					},
				],
				show: false,
				list: [{
						name: '推荐'
					}, {
						name: '男频',
					}, {
						name: '女频',
					},
					{
						name: '出版'
					}
				],
				list1: [
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				],
				list4: [{
					name: '关注'
				}, {
					name: '推荐',
					badge: {
						isDot: true
					}
				}, {
					name: '电影',
				}, {
					name: '科技'
				}],
				Rebooks: [{
						src: '../../static/test.jpg',
						name: "斗破"
					},
					{
						src: '../../static/test.jpg',
						name: "斗破"
					}, {
						src: '../../static/test.jpg',
						name: "斗破"
					}, {
						src: '../../static/test.jpg',
						name: "斗破"
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			toSearch() {
				uni.navigateTo({
					url: "/pages/search/search"
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #e0ebf4;
	}

	.wrap {
		padding: 12px;
	}

	.demo-layout {
		height: 45px;
		border-radius: 4px;
	}

	.bg-purple {
		background: #CED7E1;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}
</style>
