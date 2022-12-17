<template>
	<view class="margin-center">
		<u-list>
			<u-list-item v-for="(item, index) in indexList" :key="index">
				<view class="flex flex-row mb-2 mt-3">
					<view class="flex-1 margin-center">
						<image :src="item.url" style="width:180rpx; height:240rpx"></image>
					</view>
					<view class="flex-3 w-50">
						<view class="justify-between">
							<u-row justify="space-between" customStyle="margin-bottom: 10px">
								<u-col span="5">
									<view class="text_ellipsis">狼人在月下长啸，血族在幽影中徘徊。</view>
								</u-col>
								<u-col span="3">
									<text class="text-danger font-weight-bold">9.4分</text>
								</u-col>
							</u-row>
						</view>
						<view class="mt-2 ">
							<view class="text_ellipsis_2 text-muted">这是最好的时代，也是最坏的时代。
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
			<view class="mb-3">
				<u-divider text="到底咯"></u-divider>
			</view>
		</u-list>
	</view>
</template>

<script>
	export default {
		name: "DetailList",
		data() {
			return {
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
			};
		},
		methods: {
			
		},
	}
</script>

<style>

</style>
