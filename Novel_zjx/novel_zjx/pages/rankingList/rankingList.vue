<template>
	<view>
		<u-sticky class="calHeight bg-white border-bottom" customNavHeight="0">
			<u-status-bar></u-status-bar>
			<view class="flex align-center">
				<view class="flex flex-row flex-nowrap p-2 w-100 align-center">
					<text class=" iconfont icon-zuojiantou font-lg pr-2 pl-2 border-shadow"
						style="z-index: 201;"></text>
					<scroll-view scroll-x="true" class="w-100" style="white-space: nowrap;">
						<view class="flex flex-row flex-nowrap">
							<block v-for="(item,index) in list">
								<view class="scroll-view-item_H" @click="changeMenuStatus(index,list)">
									<view class="margin-center flex flex-1 align-center"
										:class="item.isSelect?'border-bottom-menu':''">
										<text class="font-md font-weight-bold" :class="item.isSelect?'text-theme':'text-muted'">
											玄幻
										</text>
									</view>
								</view>
							</block>
						</view>
					</scroll-view>
				</view>
			</view>
		</u-sticky>

		<view class="flex flex-row" :style="{}">
			<view class="flex flex-column align-center border-right" :style="[{'width':`${LeftWidth}`+'px'},{'height':`${scrollHeight}`+'px'}]">
			<block v-for="(item,index) in whichRank">
				<view class="p-2" :class="item.isSelect?'text-theme':'text-muted'" @click="changeMenuStatus(index,whichRank)"><text>{{item.name}}</text></view>
			</block>
				
			</view>
			<u-list :width="listWidth" :height="scrollHeight" >
				<u-list-item>
					
				</u-list-item>
			</u-list>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listWidth: 0,
				LeftWidth: 0,
				windHeight: 0,
				scrollHeight: 0,
				whichRank:[
					{
						name:"阅读榜",
						isSelect:true
					},{
						name:"口碑榜",
						isSelect:false
					},{
						name:"高分榜",
						isSelect:false
					},{
						name:"新书榜",
						isSelect:false
					}
				],
				list: [{
					name: '玄幻',
					isSelect: true
				}, {
					name: '都市',
					isSelect: false
				}, {
					name: '奇幻仙侠',
					isSelect: false
				}, {
					name: '架空',
					isSelect: false
				}, {
					name: '玄幻脑洞',
					isSelect: false
				}, {
					name: '传统玄幻',
					isSelect: false
				}, {
					name: '科幻',
					isSelect: false
				}, {
					name: '历史',
					isSelect: false
				}, {
					name: '末世生存',
					isSelect: false
				}, ]
			}
		},
		onLoad() {
			this.listWidth = uni.getSystemInfoSync().windowWidth / 5 * 4
			this.windHeight =uni.getSystemInfoSync().windowHeight
			this.LeftWidth = uni.getSystemInfoSync().windowWidth / 5
			console.log(this.listWidth)
		},
		mounted() {
			this.CalHeight()
			console.log(this.scrollHeight)
		},
		methods: {
			CalHeight() {
				// 组件高度
				return new Promise((resolve, reject) => {
					this.$nextTick(function() {
						let tempHeight = 0
						console.log("计算高度")
						// #ifdef APP-PLUS

						const query1 = uni.createSelectorQuery().in(this);
						query1.select('.calHeight').boundingClientRect(data => {
							console.log("得到布局位置信息" + JSON.stringify(data));
							tempHeight = data.height
							console.log("tempHeight", tempHeight)
							this.scrollHeight=this.windHeight-tempHeight
							// console.log("节点离页面顶部的距离为" + data.top);		

							resolve()
						}).exec();
						// #endif

						// #ifdef H5 || MP-WEIXIN
						const query2 = uni.createSelectorQuery();
						query2.select('.calHeight').boundingClientRect(data => {
							console.log("得到布局位置信息" + JSON.stringify(data));
							tempHeight =data.height
							console.log("tempHeight", tempHeight)
							this.scrollHeight=this.windHeight-tempHeight
							// console.log("节点离页面顶部的距离为" + data.top);
							resolve()
						}).exec();
						// #endif
					});
				})
			},
			changeMenuStatus(index, status) {
				console.log("切换状态")
				if (!status[index].isSelect) {
					for (var i = 0; i < status.length; i++) {
						if (status[i].isSelect) {
							status[i].isSelect = !status[i].isSelect
						}
					}
					status[index].isSelect = !status[index].isSelect
				}
			},
		}
	}
</script>

<style>
	.scroll-view-item_H {
		display: flex;
		height: 60rpx;
		/* line-height: 60rpx; */
		text-align: center;
		font-size: 30rpx;
		/* margin-left: 20rpx; */
		/* margin-top: 20rpx; */
		border-radius: 20px;
	}

	.border-shadow {
		box-shadow: 0 0 15px 10px #fff;
	}
</style>
