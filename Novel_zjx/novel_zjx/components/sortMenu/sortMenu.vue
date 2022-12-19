<template>
	<view>
		<!-- <u-status-bar></u-status-bar> -->
		<scroll-view scroll-x="true" class="w-100" style="white-space: nowrap;">
			<view class="flex flex-row flex-nowrap">
				<block v-for="(item,index) in labelList">
					<view class="scroll-view-item_H" :class="item.isActive?'bg-danger':''"
						@click="changeMenuStatus(index,labelList)">
						<view class="margin-center flex flex-1">
							<text>
								{{item.name}}
							</text>
						</view>
					</view>
				</block>
			</view>

		</scroll-view>
		<scroll-view scroll-x="true" class="w-100" style="white-space: nowrap;">
			<view class="flex flex-row flex-nowrap">
			<block v-for="(item,index) in wordNum">
				<view class="scroll-view-item_H" :class="item.isActive?'bg-danger':''"
					@click="changeMenuStatus(index,wordNum)">
					<view class="margin-center">
						<text>
							{{item.name}}
						</text>
					</view>
				</view>
			</block>
			</view>
		</scroll-view>
		<view class="flex flex-row">
			<block v-for="(item,index) in status">
				<view class="scroll-view-item_H" :class="item.isActive?'bg-danger':''"
					@click="changeMenuStatus(index,status)">
					<view class="margin-center">
						<text>
							{{item.name}}
						</text>
					</view>
				</view>
			</block>
		</view>
		<view class="flex flex-row">
			<block v-for="(item,index) in sortByWhat">
				<view class="scroll-view-item_H" :class="item.isActive?'bg-danger':''"
					@click="changeMenuStatus(index,sortByWhat)">
					<view class="margin-center">
						<text>
							{{item.name}}
						</text>
					</view>
				</view>
			</block>
		</view>
		<view class="margin-center">
			<u-divider text="分割线"></u-divider>
		</view>

	</view>
</template>

<script>
	export default {
		props: {
			// 检测类型 + 其他验证
			labelList: {
				type: Array,
				default: [],
			}
		},
		data() {
			return {
				wordNum: [{
					id: -1,
					name: '全部',
					isActive: true

				}, {
					id: 0,
					name: '100万以下',
					isActive: false
				}, {
					id: 1,
					name: '100万-500万',
					isActive: false
				}, {
					id: 2,
					name: '500万以上',
					isActive: false
				}],
				status: [{
						id: 0,
						name: '全部',
						isActive: true
					},
					{
						id: 1,
						name: '连载中',
						isActive: false
					}, {
						id: 2,
						name: '完结',
						isActive: false
					},

				],
				sortByWhat: [{
					id: 0,
					name: '最新',
					isActive: false
				}, {
					id: 1,
					name: '评分',
					isActive: false
				}],
			}
		},
		mounted() {
			console.log(this.labelList)
		},
		methods: {
			// 切换搜索条件
			changeMenuStatus(index, status) {
				console.log("切换状态")
				if (!status[index].isActive) {
					for (var i = 0; i < status.length; i++) {
						if (status[i].isActive) {
							status[i].isActive = !status[i].isActive
						}
					}
					status[index].isActive = !status[index].isActive
				}
			},
			// 请求数据
			resSortList() {

			}
		},
	}
</script>

<style>
	.scroll-view-item_H {
		display: flex;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		font-size: 30rpx;
		margin-left: 20rpx;
		margin-top: 20rpx;
		border-radius: 20px;
	}
</style>
