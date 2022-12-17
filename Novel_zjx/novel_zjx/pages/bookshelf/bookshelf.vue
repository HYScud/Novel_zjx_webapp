<template>
	<view>
		<u-sticky>
			<view class="margin-center bg-white">
				<u-status-bar></u-status-bar>
				<view class="flex flex-row justify-between">
					<view class="flex-3 font-larger">书架</view>
					<view class="flex flex-1 flex-row">
						<u-row justify="space-between" gutter="1">
							<u-col span="6" offset="3">
								<view class="iconfont icon-lishi font-larger"></view>
							</u-col>
							<u-col span="6" offset="3">
								<view class="iconfont icon-menu font-larger"></view>
							</u-col>
						</u-row>
					</view>
				</view>
			</view>
		</u-sticky>
		<view class="margin-center">
			<u-row justify="start" class="flex-wrap" gutter="0.1">
				<block v-for="(item,index) in historyList":key="index">
					<u-col span="4" class="mt-3">
						<view class="flex-column flex m-2">
							<image src="../../static/logo.png" style="height:260rpx;width: 200rpx;"></image>
							<text class="font-lg text_ellipsis_1">{{item.bookName}}</text>
							<text class="text-muted">{{item.progress}}</text>
						</view>
					</u-col>
				</block>
			</u-row>
		</view>
		<u-divider text="到底了" :hairline="true"></u-divider>
		<view style="height: 100rpx;"></view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				historyList: [{
						imgUrl: '../../static/logo.png',
						bookName: '斗破苍穹12312312312313',
						progress: '未读'
					}, {
						imgUrl: '../../static/logo.png',
						bookName: '斗破苍穹',
						progress: '未读'
					}, {
						imgUrl: '../../static/logo.png',
						bookName: '斗破苍穹',
						progress: '未读'
					},{
						imgUrl: '../../static/logo.png',
						bookName: '斗破苍穹12312312312313',
						progress: '未读'
					}, {
						imgUrl: '../../static/logo.png',
						bookName: '斗破苍穹',
						progress: '未读'
					}, {
						imgUrl: '../../static/logo.png',
						bookName: '斗破苍穹',
						progress: '未读'
					},{
						imgUrl: '../../static/logo.png',
						bookName: '斗破苍穹12312312312313',
						progress: '未读'
					}, {
						imgUrl: '../../static/logo.png',
						bookName: '斗破苍穹',
						progress: '未读'
					}, {
						imgUrl: '../../static/logo.png',
						bookName: '斗破苍穹',
						progress: '未读'
					},{
						imgUrl: '../../static/logo.png',
						bookName: '斗破苍穹12312312312313',
						progress: '未读'
					}, {
						imgUrl: '../../static/logo.png',
						bookName: '斗破苍穹',
						progress: '未读'
					}, {
						imgUrl: '../../static/logo.png',
						bookName: '斗破苍穹',
						progress: '未读'
					}
				
				]
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
