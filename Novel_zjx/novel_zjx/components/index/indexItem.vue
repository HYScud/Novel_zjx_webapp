<template>
	<view>
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
			<u-row justify="space-between" gutter="1">
				<u-col span="5.8" style="height: 180rpx;background-color: aqua;" class="rounded-20">
					<view class="flex justify-between flex-row margin-center align-center mt-1" @click="toRankList">
						<view class="flex flex-column">
							<text class="font-md font-weight-bold">分类</text>
							<view class="justify-between flex flex-row">
								<text class="text-muted font-sm ">玄幻</text>
								<text class="text-muted font-sm ml-2">玄幻</text>
							</view>
						</view>
						<view>
							<image src="../../static/logo.png" style="height: 155rpx;width: 130rpx;">
							</image>
						</view>
					</view>
				</u-col>
				<u-col span="5.8" style="height: 180rpx;background-color: aqua;" class="rounded-20">
					<view class="flex justify-between flex-row margin-center align-center mt-1">
						<view class="flex flex-column">
							<text class="font-md font-weight-bold">分类</text>
							<view class="justify-between  flex flex-row">
								<text class="text-muted font-sm ">玄幻</text>
								<text class="text-muted font-sm ml-2">玄幻</text>
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
						<text class="font-md font-weight-bold ">签到</text>
						<text class="font-sm text-muted">天天领金币</text>
					</view>  
				</u-col>
				<u-col span="3.8" class="bg-lightorange rounded-20">
					<view class="flex-column margin-center justify-center flex" style="height: 130rpx;">
						<text class="font-md font-weight-bold ">签到</text>
						<text class="font-sm text-muted">天天领金币</text>
					</view>
				</u-col>
				<u-col span="3.8" class="bg-lightorange rounded-20">
					<view class="rounded-20 flex-column margin-center justify-center flex" style="height: 130rpx;">
						<text class="font-md font-weight-bold ">签到</text>
						<text class="font-sm text-muted">天天领金币</text>
					</view>
				</u-col>
			</u-row>
		</view>

		<!--  主页推荐卡片等-->
		<block v-for="(item,index) in homeCards" :key="index">
			<recommond :Rebooks="item.Rebooks" :cardName="item.cardName"  class="mt-2"></recommond>
		</block>

		<u-divider text="到底了" :dashed="true"></u-divider>
	</view>
</template>

<script>
	import Recommond from '@/components/recommond.vue'
	import {
		onMounted
	} from "vue"
	export default {
		name:"indexItem",
		components: {
			Recommond
		},
		data() {
			return {
				// bottomHeight:0,
				homeCards: [{
						/* 移动所需参数 */
						cardName: "推荐",
						Rebooks: [{
								src: "../../static/test.jpg",
								name: "菜菜的新人出书的新人",
								bookId: "1",
								tags: ["玄幻"]
							},
							{
								src: "../../static/test.jpg",
								name: "斗破苍穹2",
								bookId: "1",
								tags: ["玄幻"]
							}, {
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								bookId: "1",
								tags: ["玄幻"]
							}, {
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								bookId: "1",
								tags: ["玄幻"]
							}, {
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								bookId: "1",
								tags: ["玄幻"]
							}, {
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								bookId: "1",
								tags: ["玄幻"]
							}
						]
					},
					{
						cardName: "高分佳作",
						Rebooks: [{
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								bookId: "1",
								tags: ["玄幻"]
							},
							{
								src: "../../static/test.jpg",
								name: "斗破苍穹2",
								bookId: "1",
								tags: ["玄幻"]
							}, {
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								bookId: "1",
								tags: ["玄幻"]
							}, {
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								bookId: "1",
								tags: ["玄幻"]
							}, {
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								bookId: "1",
								tags: ["玄幻"]
							}, {
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								bookId: "1",
								tags: ["玄幻"]
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
				]
			}
		},
		onLoad() {
			this.bottomHeight=uni.getSystemInfoSync().windowBottom+10
			console.log(this.bottomHeight)
		},
		methods: {
			toSearch() {
				uni.navigateTo({
					url: "/pages/search/search"
				})
			},
			toRankList(){
				uni.navigateTo({
					url:'/pages/rankingList/rankingList'
				})
			}
		}
	}
</script>

<style lang="scss">
    .wrap {
        padding: 12px;
    }

    .demo-layout {
        height: 25px;
        border-radius: 4px;
    }

    .bg-purple {
        background: #CED7E1;
    }

    .bg-purple-light {
        background: #ff5500;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }
</style>
