<template>
	<view>
		<u-sticky bgColor="#ffffff" customNavHeight="10">
			<u-status-bar></u-status-bar>
			<view class="align-center flex flex-row margin-center">
				<view class="iconfont icon-zuojiantou flex font-larger" @click="back"></view>
				<u-search class="mr-2 flex-9" placeholder="请输入书名或作者" :showAction="true" actionText="搜索"
					:animation="true" @search="toSearch()" @custom="toSearch " @focus="showHistory"
					v-model="searchText">
				</u-search>
			</view>
		</u-sticky>

		<!--  搜索记录-->
		<block v-if="isShow==0">
			<view class="mt-2 margin-center">
				<view class="justify-between align-center flex flex-row margin-center">
					<view class="font-lg">搜索历史</view>
					<view class="iconfont icon-shanchu font-lg text-muted" @click="clearHistory"></view>
				</view>
			</view>
			<view class="mt-2 margin-center flex flex-wrap">
				<block v-for="(item,index) in searchHistory">
					<view class="text-muted margin-center mr-1 rounded-20">
						<text class="text-muted">{{item}}</text>
					</view>
				</block>
			</view>
		</block>

		<!-- 加载中 -->
		<block v-if="isShow==1">
			<u-loading-page :loading="true"></u-loading-page>
		</block>

		<!-- 搜索列表 -->
		<block v-if="isShow==2">
			<u-list @scrolltolower="scrolltolower" class="mt-2 margin-center">
				<u-list-item v-for="(item, index) in searchList" :key="index" class="flex flex-row">
					<view class="">
						<image src="../../static/logo.png" mode="aspectFill" style="height: 150rpx;width: 100rpx;">
						</image>
					</view>
					<view class="flex flex-column">
						<view class=" flex flex-row justify-between">
							<view >
								{{item.bookName}}
							</view>
							<view class="">
								{{item.rate}}
							</view>
						</view>
						<view>
							<u-parse :content="item.bookInfo"></u-parse> 
						</view>
						<view class="flex flex-row">
							<view class="">
								{{item.author}}
							</view>
							<view class="">
								{{item.author}}
							</view>
							<view class="">
								{{item.author}}
							</view>
							<view class="">
								{{item.author}}
							</view>
						</view>
					</view>
				</u-list-item>
			</u-list>
		</block>
	</view>
</template>

<script>
	import utils from "@/common/js/utils.js"
	export default {
		data() {
			return {
				isShow: 0,
				searchText: "",
				searchHistory: ["斗破苍穹", "斗破苍穹", "斗破苍穹", "斗破苍穹", "斗破苍穹", "斗破苍穹", "斗破苍穹", "斗破苍穹", "斗破苍穹", "斗破苍穹", "斗破苍穹"],
				searchList: [{
					image: "../../static/logo.png",
					bookName: "斗破苍穹",
					rate: 9.4,
					author: "土豆",
					bookInfo: '/n/n《阴符经》有云：其盗机也，天下莫能见，莫能知。/r许鸿穿越异界，发现脑海中多出一卷《长生图》。/r依靠这个，不仅可以实时监控自己和别人的寿命，还能盗取天机，让能力与寿命相互转换。/r长生图，图长生。/r于是，许鸿定下了一个小目标……要活一亿年。/r本书又名：《我有一本长生图》、《长生我是认真的》、《先活一亿年》……'
				}]
			}
		},

		methods: {
			back() {
				uni.navigateBack({
					delta: 1,
				})
			},
			clearHistory() {
				this.searchHistory = []
			},
			toSearch() {
				this.isShow = this.isShow + 2
				this.searchHistory = utils.pushHistory(this.searchHistory, this.searchText)
			},
			showHistory() {
				this.isShow = 0
			},
			scrolltolower() {
				this.loadmore()
			},
			loadmore() {
				for (let i = 0; i < 30; i++) {
					this.searchList.push({
						image: "../../static/logo.png",
						bookName: "斗破苍穹",
						rate: 9.4,
						author: 土豆,
						bookInfo: '/n/n阴符经》有云：其盗机也，天下莫能见，莫能知。/r许鸿穿越异界，发现脑海中多出一卷《长生图》。/r依靠这个，不仅可以实时监控自己和别人的寿命，还能盗取天机，让能力与寿命相互转换。/r长生图，图长生。/r于是，许鸿定下了一个小目标……要活一亿年。/r本书又名：《我有一本长生图》、《长生我是认真的》、《先活一亿年》……'
					})
				}
			}
		}
	}
</script>

<style>

</style>
