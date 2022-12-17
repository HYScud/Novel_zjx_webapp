<template>
	<view class="bg-white margin-center rounded-20">
		<list-header>
			<template v-slot:title>{{cardName}}</template>
			<template v-slot:tips>
				<view @click="toCardDetail(cardName)">更多</view>
			</template>
		</list-header>
		<u-row justify="start" class="flex-wrap" gutter="0.1">

			<block v-for="(item, index) in Rebooks" :key="index">
				<u-col span="3" style="height: 350rpx;" class="rounded-20">
					<view class="flex align-center flex-column  m-2" @click="toBookDetail(index)">
						<image :src="item.src" mode="widthFix" class="w-100"></image>
						<text class="font ">{{item.name}}</text>
						<text class="font-sm text-muted">标签</text>
					</view>
				</u-col>
			</block>
			
		</u-row>

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
			}
		},
		components: {
			listHeader
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
		},
	}
</script>

<style>
	/* .list{
		padding: 30rpx;
		// 设置父元素成为弹性盒
		display: flex;
		// 让弹性盒元素在必要的时候拆行
		flex-wrap: wrap;
		.item{
			background-color: deeppink;
			height: 100rpx;
			// 每个元素都要设置右边距margin-right（每个元素的左右间隙）
			// 同时设置下边距margin-bottom（每个元素的上下间隙）
			margin: 0 20rpx 20rpx 0;
			width: calc((100% - 60rpx) / 4);   
			// 这里一行显示4个，所以是/4，一行显示几个就除以几 
			// 这里的60rpx = (分布个数4-1)*间隙20rpx, 可以根据实际的分布个数和间隙区调整
			min-width: calc((100% - 60rpx) / 4);
			max-width: calc((100% - 60rpx) / 4);
			// 每行最右侧的那个不设置右外边距
			&:nth-child(4n + 4) {
				margin-right: 0;
			} 
		}
	}
	*/
</style>
