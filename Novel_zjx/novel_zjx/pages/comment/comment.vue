<template>
	<view>
		<u-list @scrolltolower="scrolltolower">
			<u-list-item>
				<view class="flex flex-row rounded-20 bg-lightorange margin-center p-4 justify-between">
					<view class="flex flex-column justify-center">
						<text class="iconfont text-muted font-md font-weight-bold padding-center">9.2分</text>
						<text class="font-sm text-muted">28.2万人点评</text>
					</view>
					<u-rate count="5" v-model="value" size="24" minCount="0" gutter="6"></u-rate>
				</view>

				<view class="justify-between align-center flex p-2">
					<view class="">
						<text class="font-md font-weight-bold-sm">全部书评</text>
						<text class="pl-1 pr-1 font-weight-bold-sm">·</text>
						<text class="font-md font-weight-bold-sm ">824</text>
					</view>
					<!-- 全部书评 最新最热 -->
					<view class="flex">
						<view class="bg-theme justify-center p-1 flex rounded-circle">
							<view class="rounded-circle flex align-center pt-1 pb-1" :class="!isSelect?'':'bg-white'"
								@click="changeSelect(0)">
								<text class="margin-center font-sm">最新</text>
							</view>
							<view class="rounded-circle flex align-center pt-1 pb-1" :class="!isSelect?'bg-white':''"
								@click="changeSelect(1)">
								<text class="margin-center font-sm">热度</text>
							</view>
						</view>
					</view>
					<!-- 品论列表 -->
				</view>
				<view class=" flex flex-column margin-center">
					<block v-for="(item,index) in commitList">
						<comment-list :commitList="item"></comment-list>
					</block>
				</view>
			</u-list-item>
		</u-list>


	</view>
</template>

<script>
	import commentList from '@/components/commentList/commentList.vue';
	export default {
		components: {
			commentList
		},
		data() {
			return {
				isSelect: true,
				value: 3,
				commitList: [{
						avatar: "../../static/logo.png",
						name: '爱睡的猪',
						createTime: '1-24',
						upOrno: 0,
						upnum: 30,
						value: 3,
						content: `山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
								苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
								无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
								苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
								无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
								苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
								无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有`,
						commitDelList: {
							num: 135,
							list: [{
								name: "起飞的老鼠",
								commitContent: `无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
								苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。`,
							}, {
								name: "陆上的鸭",
								commitContent: `无丝竹之乱耳，无案牍之劳形。。`,
							}, ]
						}
					},
					{
						avatar: "../../static/logo.png",
						name: '爱睡的猪',
						createTime: '1-24',
						upOrno: 0,
						upnum: 30,
						value: 3,
						content: `山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
								苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
								无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
								苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
								无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
								苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
								无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有`,
						commitDelList: {
							num: 0,
							list:[]
						}
					}
				],

			}
		},
		methods: {
			changeSelect(index) {
				if (index == 0 && !this.isSelect) {
					this.isSelect = true
					// 请求搜索
				}
				if (index == 1 && this.isSelect) {
					this.isSelect = false
					// 请求搜索
				}
			},
			scrolltolower() {

			}
		}
	}
</script>

<style>

</style>
