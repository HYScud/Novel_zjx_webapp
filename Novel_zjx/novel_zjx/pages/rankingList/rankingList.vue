<template>
	<view>
		<!-- <scroll-view ref="tabbar1" id="tab-bar" class="tab-bar" :scroll="false" :scroll-x="true" :show-scrollbar="false"
		  :scroll-into-view="scrollInto">
		  <view style="flex-direction: column;">
		    <view style="flex-direction: row;">
		      <view class="uni-tab-item" v-for="(tab,index) in tabList" :key="tab.id" :id="tab.id" :ref="'tabitem'+index"
		        :data-id="index" :data-current="index" @click="ontabtap">
		        <text class="uni-tab-item-title" :class="tabIndex==index ? 'uni-tab-item-title-active' : ''">{{tab.name}}</text>
		      </view>
		    </view>
		    <view class="scroll-view-indicator">
		      <view ref="underline" class="scroll-view-underline" :class="isTap ? 'scroll-view-animation':''" :style="{left: indicatorLineLeft + 'px', width: indicatorLineWidth + 'px'}"></view>
		    </view>
		  </view>
		</scroll-view> -->
		<u-sticky class="calHeight bg-white border-bottom" customNavHeight="0">
			<u-status-bar></u-status-bar>
			<view class="flex align-center">
				<view class="flex flex-row flex-nowrap w-100 align-center">
					<text class="iconfont icon-zuojiantou font-lg  p-2 border-shadow calWidth"
						style="z-index: 201;" @click="back"></text>
					<scroll-view class="p-2" :style="{'width':`${menuWidth}`+'px'}" scroll-x="true"
						style="white-space: nowrap;" :scroll-left="scollLeft">
						<view class="flex flex-row flex-nowrap mr-4">
							<block v-for="(item,index) in list.tabName">
								<view class="scroll-view-item_H" @click="changeMenuStatus(index,list)"
									:class="'list'+index">
									<view class="margin-center flex flex-1 align-center"
										:class="list.tabIndex===index?'border-bottom-menu':''">
										<text class="font-md font-weight-bold"
											:class="list.tabIndex===index?'text-theme':'text-muted'">
											{{item.name}}
										</text>
									</view>
								</view>
							</block>
						</view>
					</scroll-view>
				</view>
			</view>
		</u-sticky>

		<swiper :style="{'height':`${scrollHeight}`+'px'}" @animationfinish="changeListtabIndex"
			:current="list.tabIndex" :duration="300">
			<block v-for="(item,index) in list.tabName">
				<swiper-item>
					<rank-list :LeftWidth="LeftWidth" :listWidth="listWidth" :scrollHeight="scrollHeight"
						:whichRank="whichRank"></rank-list>
				</swiper-item>
			</block>

		</swiper>

	</view>
</template>

<script>
	import rankList from '@/components/rankList/rankList.vue';
	export default {
		components: {
			rankList
		},
		data() {
			return {
				scollLeft: 0,
				listWidth: 0,
				LeftWidth: 0,
				windHeight: 0,
				windowWidth: 0,
				scrollHeight: 0,
				menuWidth: 0,
				whichRank: {
					tabIndex: 0,
					tabName: [{
						name: "阅读榜",
					}, {
						name: "推荐榜",
					}, {
						name: "高分榜",
					}, {
						name: "新书榜"
					}]
				},
				list: {
					tabIndex: 0,
					tabName: [{
						name: '玄幻',

					}, {
						name: '都市',

					}, {
						name: '奇幻仙侠',

					}, {
						name: '架空',

					}, {
						name: '玄幻脑洞',

					}, {
						name: '传统玄幻',

					}, {
						name: '科幻',

					}, {
						name: '历史',

					}, {
						name: '末世生存',

					}, {
						name: '末世生存',

					}, ]
				},
			}
		},
		onLoad() {
			this.windowWidth = uni.getSystemInfoSync().windowWidth
			this.listWidth = uni.getSystemInfoSync().windowWidth / 5 * 4
			this.windHeight = uni.getSystemInfoSync().windowHeight
			this.LeftWidth = uni.getSystemInfoSync().windowWidth / 5
			this.scollLeft = 0
			console.log(this.listWidth, this.windowWidth)
		},
		mounted() {
			this.CalHeight()
			this.CalWidth()
			console.log(this.menuWidth)
		},
		methods: {
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			CalHeight() {
				// 组件高度
				return new Promise((resolve, reject) => {
					this.$nextTick(function() {
						let tempHeight = 0
						console.log("计算高度")
						// #ifdef APP-PLUS

						const query1 = uni.createSelectorQuery().in(this);
						query1.select('.calHeight').boundingClientRect(data => {
							// console.log("得到布局位置信息" + JSON.stringify(data));
							tempHeight = data.height
							// console.log("tempHeight", tempHeight)
							this.scrollHeight = this.windHeight - tempHeight
							// console.log("节点离页面顶部的距离为" + data.top);		

							resolve()
						}).exec();
						// #endif

						// #ifdef H5 || MP-WEIXIN
						const query2 = uni.createSelectorQuery();
						query2.select('.calHeight').boundingClientRect(data => {
							// console.log("得到布局位置信息" + JSON.stringify(data));
							tempHeight = data.height
							// console.log("tempHeight", tempHeight)
							this.scrollHeight = this.windHeight - tempHeight
							// console.log("节点离页面顶部的距离为" + data.top);
							resolve()
						}).exec();
						// #endif
					});
				})
			},
			changeMenuStatus(index, status) {
				console.log("切换状态")
				if (status.tabIndex != index) {
					status.tabIndex = index
				}
			},
			CalWidth() {
				return new Promise((resolve, reject) => {
					this.$nextTick(function() {
						let tempWidth = 0
						console.log("计算宽度")
						// #ifdef APP-PLUS

						const query1 = uni.createSelectorQuery().in(this);
						query1.select('.calWidth').boundingClientRect(data => {
							// console.log("得到布局位置信息" + JSON.stringify(data));
							tempWidth = data.width + 10
							// console.log("tempWidth", tempWidth)
							this.menuWidth = this.windowWidth - tempWidth
							// console.log("节点离页面顶部的距离为" + data.top);		

							resolve()
						}).exec();
						// #endif

						// #ifdef H5 || MP-WEIXIN
						const query2 = uni.createSelectorQuery();
						query2.select('.calWidth').boundingClientRect(data => {
							// console.log("得到布局位置信息" + JSON.stringify(data));
							tempWidth = data.width + 10
							// console.log("tempWidth", tempWidth)
							this.menuWidth = this.windowWidth - tempWidth
							// console.log("menuWidth为" + this.menuWidth);
							resolve()
						}).exec();
						// #endif
					});
				})
			},
			async changeListtabIndex(e) {
			
				if (this.list.tabIndex >= 2 && this.scollLeft < this.listWidth) {
					if (this.scollLeft > this.listWidth) {
						this.scollLeft = this.listWidth
					}
					await this.calScollWidth(this.list.tabIndex).then((res) => {
						console.log(res)
						this.scollLeft = this.scollLeft + (e.detail.current - this.list.tabIndex) * res
						console.log(this.scollLeft)
					})
					console.log("执行", this.scollLeft)
				}
				this.list.tabIndex = e.detail.current
			},
			calScollWidth(tabIndex) {
				return new Promise((resolve, reject) => {
					this.$nextTick(() => {
						let tempHeight = 0,
							temp = '.list' + tabIndex
						var query1 = null
						console.log("计算高度")

						// #ifdef APP-PLUS
						query1 = uni.createSelectorQuery().in(this);
						// #endif

						// #ifdef H5 || MP-WEIXIN
						query1 = uni.createSelectorQuery();
						// #endif

						query1.select(temp).boundingClientRect(data => {
							// console.log("得到布局位置信息" + JSON.stringify(data));
							tempHeight = data.width
							// console.log("tempHeight", tempHeight)
							// console.log("节点离页面顶部的距离为" + data.top);
							resolve(tempHeight)
						}).exec();
					});
				})
			}
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
