<template>
	<view class="mt-2 margin-center">
		<u-divider :text="'按'+bookTabs.tabs+'分类'" :textSize="20" textColor="black"></u-divider>
		<u-row justify="start" class="flex-wrap" gutter="0.1" @click="toread">
			<block v-for="(item, index) in bookTabs.label" :key="index">
				<u-col span="4" style="height: 120rpx; width: 300rpx;">
					<view class="flex align-center margin-center justify-center text-light-muted rounded-20 bg-light-grey" style="height: 100rpx;">
						<text class="font-lg text-muted">{{item}}</text>
					</view>
				</u-col>
			</block>
		</u-row>
		
	</view>
</template>

<script>
	export default {
		name: "sortItem",
		props: {
			bookTabs: {
				type: Object,
				default:()=>[],
			},
		},
		mounted() {
			console.log(this.bookTabs)
		},
		methods:{
			toread(){
				console.log("touch")
				uni.navigateTo({
					url:'/pages/sortDetail/sortDetail'
				})
			}
		}
	}
</script>

<style>

</style>
