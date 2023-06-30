<template>
	<view class="margin-center rounded-20 bg-white" @touchmove.stop="touchMoveStop($event)">
		<list-header>
			<template v-slot:title>{{cardName}}</template>
			<template v-slot:tips>
				<view @click="toCardDetail(cardName)">更多</view>
			</template>
		</list-header>
		<view>
			<u-scroll-list indicatorWidth="0" indicatorBarWidth="0" ref="crad" class="flex crad">
				<view class="flex flex-column flex-wrap margin-center"
					:style="{'width':`${cardWidth}`+'px','height':`${cardHeight}`+'px'}">
					<view class="flex flex-row m-1 justify-between" v-for="(item,index) in Rebooks" :key="index"
						:style="{'width':`${itemWidth}`+'px','height':`${imgHeight}`+'px'}" @click="getComponentWidth">
						<image :src="item.src" mode="aspectFill" class="rounded" :style="{'width':`${imgWidth}`+'px','height':`${imgHeight}`+'px'}">
						</image>
						<text class="flex flex-nowrap justify-center text-center" style="width:45rpx">{{index+1}}</text>
						<view class="flex flex-column bg-theme">
							<text class="text_ellipsis_2" :style="{'width':`${itemWidth-imgWidth-20}`+'px','font-size':`${fontsize}` +'rpx'}">万世为王万万世为王万万世为王万万世万世为王万万世为王万万世为王万为王万万世为王万万世为王万万世为王万</text>
							<text class="text-muted font-sm">都市·热血</text>
							<text class="text-muted font-sm">9.5分</text>
						</view>
					</view>
				</view>
			</u-scroll-list>
		</view>
	</view>
</template>

<script>
	// #ifdef APP-NVUE
	const dom = uni.requireNativePlugin('dom')
	// #endif
	import listHeader from '@/components/listHeader.vue';
	export default {
		name: "rankListCard",
		components: {
			listHeader
		},
		props: {
			cardName: {
				type: String,
				default: "口碑榜",
			},
			Rebooks: {
				type: Array,
				default: () => []
			},
			tips: {
				type: String,
				default: "完整榜单",
			}
		},
		data() {
			return {
				cardWidth: 0,
				cardHeight: 0,
				itemWidth: 0,
				imgHeight: 0,
				imgWidth: 0,
				fontsize:14
			};
		},
		mounted() {
			const {windowHeight,windowWidth,pixelRatio}=uni.getSystemInfoSync()
			this.cardHeight = (windowHeight)/2*(3/Math.min(pixelRatio,3))
			this.cardWidth = (windowWidth) * 2.1
			this.itemWidth = (windowWidth) / 2
			this.imgHeight = (this.cardHeight-40) / 4
			this.imgWidth = this.imgHeight / 1.5
			this.fontsize = Math.sqrt((this.itemWidth-25))*3
			console.log(this.fontsize)
			// this.getComponentWidth()
		},
		methods: {
			async getComponentWidth() {
				// 延时一定时间，以确保节点渲染完成
				await uni.$u.sleep()
				return new Promise(resolve => {
					// uView封装的获取节点的方法，详见文档
					// #ifndef APP-NVUE
					this.$uGetRect('.crad').then(res => {
						console.log(res)
						resolve(res.width)
					})
					// #endif
					// #ifdef APP-NVUE
					const ref = this.$refs['crad']
					ref && dom.getComponentRect(ref, (res) => {
						console.log(res)
						this.scrollWidth = res.size.width
					})
					// #endif
				})
			},
			touchMoveStop(e) {

			}
		}
	}
</script>

<style>
</style>
