<template>
	<view class="flex align-center justify-between pt-2 pr-2 pl-2 my-1">
		<view class="font-lg">
			<slot name="title"></slot>
		</view>
		<view class="flex align-center">
			<view class="font text-light-black">
				<slot name="tips"></slot>
			</view>
			<view class="ml-1"><text class="iconfont icon-youjiantou"></text></view>
		</view>
	</view>
</template>

<script>
</script>

<style>
</style>
