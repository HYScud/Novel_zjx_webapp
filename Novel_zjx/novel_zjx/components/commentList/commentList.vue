<template>
	<view class="flex pt-2 flex-column" @click="toCommentDetail">
		<view class="flex justify-between  align-center flex-nowrap">
			<view class=" flex flex-row flex-nowrap">
				<u-avatar src="../../static/logo.png"></u-avatar>
				<view class="flex flex-column padding-center-LR">
					<text class="text_ellipsis">{{commitList.nickName}}</text>
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
				<text class="text-muted font-sm">{{commitList.up}}</text>
			</view>
			<view class="flex flex-row pl-2 align-center ">
				<text class="iconfont font-md icon-buzhichi"></text>
				<text class="pr pl text-muted font-sm">反对</text>
			</view>
		</view>
		<!-- 折叠评论 -->
		<view class="bg-theme rounded-20" v-if="commitList.numDET!=0">
			<block v-for="(item ,index) in commitList.commentDETDTOList" :key="index">
				<view class="margin-center flex-wrap pt-1">
					<view class="text_ellipsis_2 comment_text">
						<text class="text-muted pr">
							{{item.nickName}}:
						</text>
						{{item.content}}
					</view>
				</view>
			</block>
			<view class="margin-center flex align-center pb-2" @click="">
				<text class="comment_text text-link">全部{{commitList.numDET}}条评论</text>
				<text class="iconfont font-sm icon-youjiantou pl-1 text-link"></text>
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
			// console.log(this.commitList)
		},
		onLoad() {},
		data() {
			return {
				toCommentDetail() {
					console.log("点击")
					uni.navigateTo({
						url: '/pages/commentDetail/commentDetail',
						success: function(res) {
							console.log(res)
						},
						fail(res) {
							console.log(res)
						}
					})
				}
			};
		}
	}
</script>

<style>

</style>
