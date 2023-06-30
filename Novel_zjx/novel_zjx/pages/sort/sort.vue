<template>
	<view>
		<u-sticky  customNavHeight="0">
			<!-- 顶层高度 -->
			<u-status-bar style="background-color: gold;"></u-status-bar>
			<!-- 导航菜单 -->
			<view style="background-color: gold;">
				<view class="margin-center">
					<u-row justify="space-between" gutter="10">
						<u-col span="6">
							<view class="text-center">
								<u-tabs :list="list" :scrollable="show" lineWidth="30" lineColor="#f56c6c" :activeStyle="{
											fontSize:'40rpx',
								            color: '#303133',
								            fontWeight: 'bold',
								            transform: 'scale(1.05)'
								        }" :inactiveStyle="{
											fontSize:'32rpx',
								            color: '#606266',
								            transform: 'scale(1)'
								        }" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;">
								</u-tabs>
							</view>
						</u-col>
						<view class="text-center mr-2" @click="toSearch()">
							<view class="iconfont font-lg icon-search"></view>
						</view>
					</u-row>
				</view>
			</view>
		</u-sticky>
		<block v-for="(item,index) in bookTabs" >
			<sortItem :bookTabs="item"></sortItem>
		</block>
		
		<u-divider text="novel_zjx" :textSize="20" class="mb-3"></u-divider>
	</view>
</template>

<script>
	import sortItem from "@/components/sortItem/sortItem.vue"
	export default {
		components: {
			sortItem
		},
		data() {
			return {
				bookTabs: [{
						tabs: "热门",
						label: ["玄幻", "仙侠", "末世", "异界", "校园", "科幻", "奇幻", "校园"]
					},
					{
						tabs: "情节",
						label: ["玄幻", "仙侠", "末世", "异界", "校园", "科幻", "奇幻", "校园"]
					}, {
						tabs: "角色",
						label: ["玄幻", "仙侠", "末世", "异界", "校园", "科幻", "奇幻", "校园"]
					}, {
						tabs: "主题",
						label: ["玄幻", "仙侠", "末世", "异界", "校园", "科幻", "奇幻", "校园"]
					}
				],
				list: [{
					name: '男生'
				}, {
					name: '女生',
				}, ],
				show: false,
			}
		},
		methods: {
			toSearch(){}
		}
	}
</script>

<style>

</style>
