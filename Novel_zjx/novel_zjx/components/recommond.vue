<template>
	<view class="margin-center rounded-20 bg-white">
		<list-header>
			<template v-slot:title>{{cardName}}</template>
			<template v-slot:tips>
				<view @click="toCardDetail(cardName)">更多</view>
			</template>
		</list-header>
		<view class="m-1"> 
			<u-row justify="" class="flex-wrap">
				<block v-for="(item, index) in Rebooks" :key="index">
					<u-col span="3" class="flex-1">
							<view class="flex align-center flex-column m-1" @click="toBookDetail(index)">
								<image :src="item.src" mode="widthFix" class="w-100 rounded" style="height: 230rpx;"></image>
								<text style="height: 70rpx; line-height: 30rpx;" class="font text_ellipsis_2 mb-1 mt-1 flex">{{item.name}}</text>
								<text class="font-sm text-muted flex">标签</text>
							</view>
					</u-col>
				</block>
			</u-row>
		</view>
		
	</view>
</template>

<script>
	import listHeader from '@/components/listHeader.vue';
	export default {
		props: {
			cardName: {
				type: String,
				default: "推荐",
			},
			Rebooks: {
				type: Array,
				default: () => []
			},
			tips:{
				type: String,
				default: "更多",
			}
		},
		components: {
			listHeader
		},
		beforeCreate() {
			// #ifdef APP-NVUE
			var domModule = weex.requireModule('dom');
			domModule.addRule('fontFace', {
				'fontFamily': "texticon",
				'src': "url('/static/texticon/texticon.ttf')"
			});
			// #endif
		},
		methods: {
			toBookDetail(bookIndex) {
				console.log("dianji")
				console.log(this.Rebooks[bookIndex])
				uni.navigateTo({
					url: '/pages/bookDetail/bookDetail?bookId=' + this.Rebooks[bookIndex].bookId,
				});
			},
			toCardDetail(cardName) {
				uni.navigateTo({
					url: '/pages/cardDetail/cardDetail?cardName=' + cardName,
				});
			},
		}
	}
</script>

<style>
	.align-center{
		align-items: center;
	}
</style>
