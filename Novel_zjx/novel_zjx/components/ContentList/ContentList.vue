<template>
	<view class="tab-view">
		<view class="swiper-item">
			<view class="swiper-page">
				<view class="flex flex-column">
					<!-- 书籍 -->
					<u-read-more>
						<rich-text :nodes="novelData.novelName"></rich-text>
					</u-read-more>
					<u-list>
						<u-list-item>
							<u-cell><text>{{novelData.novelName}}</text></u-cell>
						</u-list-item>
					</u-list>
					<!-- 目录 -->
					<u-popup :show="popupShow" @close="close" @open="open">
						<view class="flex flex-column">
							<view class="border-bottom">
								<view class="mr-4 ml-4 mt-2 mb-2 flex justify-between align-center">
									<text class="iconfont icon-zuojiantou"></text>
									<text class="font-md font-weight-bold">目录</text>
									<text>倒序</text>
								</view>
							</view>
							<view class="mr-4 ml-4 mt-2 mb-2 ">
								<!-- <text class="text-muted">{{novelData.statusName}}</text> -->
								<text class="text-muted pl-2" style="font-size: 28rpx;">{{getStatusName}}</text>
							</view>
						</view>
						<u-list style="height: 500px;" class="">
							<u-list-item class="m-2">
								<view v-for="(item,index) in Catalogue" :key="index"
									class="margin-center justify-between align-center flex m-3">
									<text>{{item.chapterName}}</text>
									<!-- <text class="text-muted font-sm"> 已读%1</text> -->
								</view>
							</u-list-item>
						</u-list>
					</u-popup>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "ContentList",
		props: {
			novelData: {
				type: Object,
				default: {}
			}
		},
		data() {
			return {
				popupShow: false,
				tagsList: [],
				commitList: [],
				value: 3,
				count: 5,
				Catalogue: [],
				scollListHeight: 0,
				windowHeight: 0,
			};
		},
		mounted() {
			console.log(this.novelData)
		}
	}
</script>

<style>

</style>
