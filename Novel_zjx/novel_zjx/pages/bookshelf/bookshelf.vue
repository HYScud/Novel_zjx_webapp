<template>
	<view>
		<u-sticky customNavHeight="0">
			<view class="margin-center bg-white">
				<u-status-bar></u-status-bar>
				<view class="flex flex-row justify-between">
					<view class="flex-3 font-larger">
						<text>书架</text>
					</view>
					<view class="flex flex-1 flex-row">
						<u-row justify="space-between" gutter="1">
							<u-col span="6" offset="3">
								<view class="iconfont icon-lishi font-larger" @click="toReadHIST"></view>
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
				<block v-for="(item,index) in historyList" :key="index">
					<u-col span="4" class="mt-3">
						<view class="flex-column position-relative flex m-2">
							<view class="tag">
								<text class="flex flex-column text-center font-sm">原创</text>
							</view>
							<image src="../../static/logo.png" style="height:260rpx;width: 200rpx;"></image>
							<text class="font-lg text_ellipsis_1">{{item.bookName}}</text>
							<text class="text-muted font-sm">{{item.progress}}</text>
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
					}, {
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
					}, {
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
					}, {
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
			toReadHIST(){
				uni.navigateTo({
					url:'/pages/readHIST/readHIST'
				})
			}
		}
	}
</script>

<style>
	.tag {
		position: absolute;
		background: #FFB62E;
		/* padding: 5px 0; */
		right: 20rpx;
		display: flex;
		align-items: center;
		width:20px;
		color: #fff;
		z-index: 233;
	}

	.tag::after {
		content: "";
		position: absolute;
		left: 0;
		top: 100%;
		border-color: #FFB62E #FFB62E transparent #FFB62E;
		border-width: 0 10px 10px 10px;
		border-style: solid;
	}
</style>
