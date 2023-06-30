<template>
	<view class="flex flex-column flex-1">
		<!--分类 排行榜 -->
		<view class="flex-1">
			<view class=" flex flex-row">
				<view style="height: 180rpx;background-color: aqua;" class="rounded-20 flex flex-1 justify-between m-1"
					v-for="i in 2" :key="i">
					<view class="flex flex-1 justify-between flex-row margin-center align-center mt-1"
						@click="toRankList">
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
				</view>
			</view>
		</view>

		<!-- 签到 抽奖 -->
		<view>
			<view class="flex flex-row m-0 justify-between row flex-nowrap" ref="row">
				<view class=" bg-lightorange rounded-20 flex flex-1 m-1" v-for="i in 3" :key="i">
					<view class="flex-column margin-center justify-center" style="height: 130rpx;">
						<text class="font-md font-weight-bold ">签到</text>
						<text class="font-sm text-muted">天天领金币</text>
					</view>
				</view>
			</view>
		</view>

		<!--  主页推荐卡片等-->
		<block v-for="(item,index) in homeCards" :key="index">
			<recommond :cardList="item.cardList" :cardName="item.cardName" class="mt-1 mb-1"></recommond>
		</block>

		<u-divider text="到底了" :dashed="true"></u-divider>
		
	</view>
</template>

<script>
	import Recommond from '@/components/recommond.vue'
	export default {
		name: "indexItem",
		components: {
			Recommond
		},
		props: {
			homeCards: {
				type: Array,
				default: [],
				required: true,
			}
		},
		mounted(){
			console.log("打印")
			console.log(this.homeCards)
		},
		data() {
			return {
				// bottomHeight:0,
				colWidth: 0,
				show: false,
			}
		},
		mounted() {
			// this.getComponentWidth()
		},
		methods: {
			toSearch() {
				uni.navigateTo({
					url: "/pages/search/search"
				})
			},
			toRankList() {
				uni.navigateTo({
					url: '/pages/rankingList/rankingList'
				})
			},
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

	.flex {
		display: flex;
	}

	.flex-1 {
		flex: 1;
	}
</style>
