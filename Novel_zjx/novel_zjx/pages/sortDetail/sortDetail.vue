<template>
	<view>
		<u-sticky customNavHeight="0">
			<u-status-bar class="bg-white"></u-status-bar>
			<sortMenu :labelList="labelList"></sortMenu>
		</u-sticky>

		<view>
			<u-list @scrolltolower="scrolltolower" >
				<u-list-item v-for="(item, index) in indexList" :key="index">
					<view class="flex flex-row mb-2">
						<view class="flex-1 bg-dark margin-center">
							<image :src="src" style="width:150rpx; height:250rpx"></image>
						</view>
						<view class="flex-3 bg-danger w-50">
							<view class="justify-between">
								<u-row justify="space-between" customStyle="margin-bottom: 10px">
									<u-col span="5" class="bg-purple">
										<view class="text_ellipsis">狼人在月下长啸，血族在幽影中徘徊。</view>
									</u-col>
									<u-col span="3">
										<view class="bg-purple">9.4分</view>
									</u-col>
								</u-row>
							</view>
							<view class="mt-2 ">
								<view class="text_ellipsis_2 bg-muted ">这是最好的时代，也是最坏的时代。
									狼人在月下长啸，血族在幽影中徘徊。
									仙长们修道证长生，苦行僧一心入佛国。
									狐生九尾蔽日遮天，八百万神明端坐高天原。
									有人叹血肉苦弱，不如机械飞升。
									也有人欲探寻真理，一窥那镜中的混沌与狂乱……
									路晨原本只是一个普通到不能再普通的普通人，在“超管局”的保护下，这一切本该与他无缘。
									可是突然有一天，有人告诉他，他其实是血族最后一位真祖……
									“不信？不信你问问你家养着的那只狐狸？”</view>
							</view>
							<view class="mt-2 flex-row text_ellipsis_1">
								<text class="text-muted font-sm">玄幻·重生·玄幻·重生·重生·玄幻··重生·玄幻··重生·玄幻··重生·玄幻··重生·玄幻·</text>
							</view>
						</view>
					</view>
				</u-list-item>
			</u-list>
		</view>
	</view>
</template>

<script>
	import sortMenu from "@/components/sortMenu/sortMenu.vue"
	export default {
		components: {
			sortMenu
		},
		data() {
			return {
				src: "https://cdn.uviewui.com/uview/swiper/swiper1.png",
				indexList: [{
					url: 'https://cdn.uviewui.com/uview/album/1.jpg',
				}, {
					url: 'https://cdn.uviewui.com/uview/album/1.jpg',
				}, {
					url: 'https://cdn.uviewui.com/uview/album/1.jpg',
				}, {
					url: 'https://cdn.uviewui.com/uview/album/1.jpg',
				}, {
					url: 'https://cdn.uviewui.com/uview/album/1.jpg',
				}, {
					url: 'https://cdn.uviewui.com/uview/album/1.jpg',
				}, {
					url: 'https://cdn.uviewui.com/uview/album/1.jpg',
				}, {
					url: 'https://cdn.uviewui.com/uview/album/1.jpg',
				}],

				labelList: [{
					id: 0,
					name: '异世大陆',
					isActive: false
				}, {
					id: 1,
					name: '传统玄幻',
					isActive: false
				}, {
					id: 2,
					name: '架空',
					isActive: false
				}, {
					id: 3,
					name: '天才',
					isActive: false
				}, {
					id: 4,
					name: '开局',
					isActive: false
				}, {
					id: 5,
					name: '武侠',
					isActive: false
				}, {
					id: 6,
					name: '重生',
					isActive: false
				}, {
					id: 7,
					name: '异世大陆',
					isActive: false
				}, {
					id: 8,
					name: '异世大陆',
					isActive: false
				}, ],
			}
		},
		methods: {
			scrolltolower() {
				this.loadmore()
			},
			loadmore() {
				console.log("jiazazhong")
			}
		},
	}
</script>

<style>
	.scroll-view-item_H {
		display: inline-block;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		font-size: 30rpx;
		margin-left: 20rpx;
		margin-top: 20rpx;
		border-radius: 20px;
	}
</style>
