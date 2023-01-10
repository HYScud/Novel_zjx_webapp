<template>
	<view class="flex align-center flex-row justify-between pt-2 pr-2 pl-2 my-1">
		<view class="font-lg">
			<slot name="title"></slot>
		</view>
		<view class="flex align-center flex-row">
			<view class="font text-light-black">
				<slot name="tips"></slot>
			</view>
			<text class="iconfont icon-youjiantou ml-1"></text>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.align-center{
		align-items: center;
	}
</style>
