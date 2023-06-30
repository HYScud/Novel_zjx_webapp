<template>
	<view class="content-margin-center flex-column pb-2">
		<text class="font-lg font-weight-bold">书籍简介</text>
		<u-read-more class="pt-2 pb-2 InfoHeight" :toggle="true" :showHeight="InfoHeight">
			<rich-text :nodes="content"></rich-text>
		</u-read-more>
		<scroll-view scroll-x="true" class="w-100" style="white-space: nowrap;">
			<view class="flex flex-row">
				<block v-for="(item,index) in 10">
					<view class="tag_label flex rounded-circle ml-1 mr-1">
						<text class="font-sm text-muted">玄幻{{item}}</text>
					</view>
				</block>
			</view>
		</scroll-view>
	</view>
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
