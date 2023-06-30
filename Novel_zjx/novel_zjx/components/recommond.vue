<template>
	<view class="rounded-20 bg-white">
		<list-header>
			<template v-slot:title>{{cardName}}</template>
			<template v-slot:tips>
				<view @click="toCardDetail(cardName)">更多</view>
			</template>
		</list-header>
		<view class="mb-2">
			<view class="flex flex-row flex-wrap justify-start flex-1 margin-center row" ref="row">
				<view class="flex" v-for="(item, index) in cardList" :key="index">
					<view class="flex align-center flex-column m-1 flex-1" :style="{'width':`${colWidth}`+'px'}" @click="toBookDetail(index)">
						<image :src="item.pic" mode="widthFix" class="w-100 rounded" style="height: 230rpx;"></image>
						<text style="height: 60rpx;width: 130rpx; line-height: 30rpx;"
							class="font text_ellipsis_2 mb-1 mt-1">{{item.novelName}}</text>
						<text class="font-sm text-muted flex">{{item.categoryName}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// #ifdef APP-NVUE
	const dom = uni.requireNativePlugin('dom')
	// #endif
	import listHeader from '@/components/listHeader.vue';
	export default {
		props: {
			cardName: {
				type: String,
				default: "推荐",
			},
			cardList: {
				type: Array,
				default: () => []
			},
			tips: {
				type: String,
				default: "更多",
			}
		},
		components: {
			listHeader
		},
		data() {
			return {
				colWidth: 0
			}
		},
		mounted() {
			// this.getComponentWidth()
			this.colWidth = (uni.getSystemInfoSync().windowWidth-86)/4
			this.getComponentWidth()
		},
		methods: {
			toBookDetail(bookIndex) {
				console.log(this.cardList[bookIndex].novelId)
				uni.navigateTo({
					url: '/pages/bookDetailV2/bookDetailV2?data='+JSON.stringify(this.cardList[bookIndex])
				});
			},
			toCardDetail(cardName) {
				uni.navigateTo({
					url: '/pages/cardDetail/cardDetail?cardName=' + cardName,
				});
			},
			getComponentWidth() {
				// 延时一定时间，以确保节点渲染完成
				// var tn =('col'+index)
				// await uni.$u.sleep()
				return new Promise(resolve => {
					// uView封装的获取节点的方法，详见文档
					this.$nextTick(function() {
						// #ifndef APP-NVUE
						this.$uGetRect('.row').then(res => {
							// console.log(res)
							this.colWidth=(res.width-40)/4
							resolve(res.width)
						})
						// #endif
						// #ifdef APP-NVUE
						// nvue的dom模块用于获取节点
						dom.getComponentRect(this.$refs['row'], (res) => {
							
							resolve(res.size)
						})
						// #endif
					})
				})
			},
		}
	}
</script>

<style>
	.align-center {
		align-items: center;
	}
</style>
