<template>
	<u-list class="flex">
		<u-list-item>
			<view class="flex flex-column">
				<view class="flex flex flex-row justify-between flex-nowrap align-center">
					<image src="../../static/logo.png" style="width: 80rpx;height: 80rpx;"></image>
					<view class="flex flex-column" style="width: 350rpx;">
						<text class="flex text_ellipsis_1">name</text>
						<text class="flex text_ellipsis_1">name</text>
					</view>
					<view class="flex flex-row padding-center-LR pt-1 pb-1 rounded-circle bg-theme">
						<text class="flex text_ellipsis_1 pr-1">+</text>
						<text class="flex text_ellipsis_1">关注</text>
					</view> 
				</view>
				<view>
					<u-rate></u-rate>
				</view>
				
			</view>
		</u-list-item>
	</u-list>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
