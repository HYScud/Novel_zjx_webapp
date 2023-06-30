<template>
	<view class="content-margin-center bg-danger">
		<u-row justify="space-between" gutter="0.1" customStyle="margin-bottom: 10px">
			<u-col span="6" class="margin-center">
				<view class="flex flex-column">
					<text class="flex-1 font-lg text_ellipsis_2">
						书名书名书名书名书名书名书名
					</text>
					<view class="flex flex-2 flex-row mt-2">
						<text class="font">作者：</text>
						<text class="font">name name</text>
					</view>
					<text class="flex-1 font mt-1">玄幻·连载中·40万字</text>
				</view>
			</u-col>
			<u-col span="3.5">
				<view class="rounded-circle">
					<image src="../../static/test.jpg" class="rounded" mode="aspectFill"
						style="width: 100%;height: 280rpx;"></image>
				</view>
			</u-col>
		</u-row>
	</view>
</template>

<script>
	export default {
		name:"bookDetailInfo",
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>