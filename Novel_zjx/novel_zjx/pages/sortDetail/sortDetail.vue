<template>
	<view class="margin-center">
		<u-sticky customNavHeight="0" class="calHeight bg-danger">
			<sortMenu :labelList="labelList"></sortMenu>
		</u-sticky>

		<u-list @scrolltolower="scrolltolower" :height="scollListHeight">
			<u-list-item v-for="(item, index) in indexList" :key="index" class="pb-2">
				<view class="flex flex-row">
					<view class="flex-1 margin-center">
						<image :src="src" style="width:150rpx; height:250rpx"></image>
					</view>
					<view class="flex-3 w-50">
						<view class="justify-between">
							<u-row justify="space-between">
								<u-col span="8">
									<text class="text_ellipsis">狼人在月下长啸，血族在幽影中徘徊。</text>
								</u-col>
								<u-col span="3">
									<text class="text_rategrade">9.4分</text>
								</u-col>
							</u-row>
						</view>
						<view class="mt-2 justify-between pr-2">
							<text class="font-sm text_ellipsis_2 text-muted">这是最好的时代，也是最坏的时代。
								狼人在月下长啸，血族在幽影中徘徊。
								仙长们修道证长生，苦行僧一心入佛国。
								狐生九尾蔽日遮天，八百万神明端坐高天原。
								有人叹血肉苦弱，不如机械飞升。
								也有人欲探寻真理，一窥那镜中的混沌与狂乱……
								路晨原本只是一个普通到不能再普通的普通人，在“超管局”的保护下，这一切本该与他无缘。
								可是突然有一天，有人告诉他，他其实是血族最后一位真祖……
								“不信？不信你问问你家养着的那只狐狸？”</text>
						</view>
						<view class="mt-2 pr-4">
							<text class="font-sm text-muted text_ellipsis_1">玄幻·重生·玄幻·重生·重生·玄幻··重生·玄幻··重生·玄幻··重生·玄幻··重生·玄幻·</text>
						</view>
					</view>
				</view>
			</u-list-item>
		</u-list>
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
				scollListHeight: 0,
				windowHeight: 0,
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
		onLoad() {
			this.windowHeight = uni.getSystemInfoSync().windowHeight
		},
		mounted() {
			this.CalHeight()
		},
		methods: {
			CalHeight() {
				// 组件高度
				return new Promise((resolve, reject) => {
					this.$nextTick(function() {
						let tempHeight = 0
						console.log("计算高度")
						// #ifdef APP-PLUS

						const query1 = uni.createSelectorQuery().in(this);
						query1.select('.calHeight').boundingClientRect(data => {
							console.log("得到布局位置信息" + JSON.stringify(data));
							tempHeight = data.height
							console.log("tempHeight", tempHeight)
							console.log(this.windowHeight)
							this.scollListHeight = this.windowHeight - tempHeight - 20
							// console.log("节点离页面顶部的距离为" + data.top);		
							console.log(this.scollListHeight)
							resolve()
						}).exec();
						// #endif

						// #ifdef H5 || MP-WEIXIN
						const query2 = uni.createSelectorQuery();
						query2.select('.calHeight').boundingClientRect(data => {
							console.log("得到布局位置信息" + JSON.stringify(data));
							tempHeight = data.height
							console.log("tempHeight", tempHeight)
							console.log(this.windowHeight)
							this.scollListHeight = this.windowHeight - tempHeight - 20
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
				console.log("jiazazhong")
			}
		},
	}
</script>

<style>

</style>
