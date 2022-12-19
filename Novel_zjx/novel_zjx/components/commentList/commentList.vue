<template>
	<view>
		<view class="flex pt-2 flex-column">
			<view class="flex justify-between  align-center flex-nowrap">
				<view class=" flex flex-row flex-nowrap">
					<u-avatar src="../../static/logo.png"></u-avatar>
					<view class="flex flex-column padding-center-LR">
						<text class="text_ellipsis">{{commitList.name}}</text>
						<text class="font-sm text-muted">{{commitList.createTime}}</text>
					</view>
				</view>
				<text class="iconfont icon-opt text-muted"></text>
			</view>
			<view class="padding-center flex flex-row">
				<u-rate count="5" :value="commitList.value" active-color="black" size="14" readonly></u-rate>
				<text class="pl-1 text-muted font-sm">阅读不足3分钟</text>
			</view>
			<view>
				<text class="text_ellipsis_3">{{commitList.content}}</text>
			</view>
			<view class="flex justify-end align-center padding-center">
				<view class="flex flex-row align-center">
					<text class="iconfont font-md icon-zhichi"></text>
					<text class="pr pl font-sm text-muted">赞同</text>
					<text class="text-muted font-sm">{{commitList.upnum}}</text>
				</view>
				<view class="flex flex-row pl-2 align-center ">
					<text class="iconfont font-md icon-buzhichi"></text>
					<text class="pr pl text-muted font-sm">反对</text>
				</view>
			</view>
			<!-- 折叠评论 -->
				<view class="bg-theme rounded-20" v-if="commitList.commitDelList.num!=0">
					<block v-for="(item ,index) in commitList.commitDelList.list">
						<view class="margin-center flex-wrap pt-1">
							<text class="text_ellipsis_2 comment_text">
								<text class="text-muted pr">
									{{item.name}}:
								</text>
								{{item.commitContent}}
							</text>
						</view>
					</block>	
					<view class="margin-center flex align-center text-link pb-2" @click="">
						<text class="comment_text">全部{{commitList.commitDelList.num}}条评论</text>
						<text class="iconfont font-sm icon-youjiantou pl-1"></text>
					</view>
				</view>
		</view>

		<u-divider></u-divider>
	</view>
</template>

<script>
	export default {
		props: {
			commitList: {
				type: Object,
				Array,
				default: function() {
					return {};
				},
			}
		},
		name: "commentList",
		mounted() {
			
		},
		onLoad() {
		},
		data() {
			return {

			};
		}
	}
</script>

<style>

</style>
