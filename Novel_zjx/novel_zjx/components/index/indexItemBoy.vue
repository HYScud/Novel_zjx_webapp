<template>
	<view>
		<!--  主页推荐卡片等-->
		<rankListCard class="mt-2 mb-1" :Rebooks="homeCards[0].Rebooks" @touchmove.stop="touchMoveStop($event)"></rankListCard>
		<block v-for="(item,index) in homeCards" :key="index">
			<recommond :Rebooks="item.Rebooks" :cardName="item.cardName" class="mt-1 mb-1"></recommond>
		</block>
		<u-divider text="到底了" :dashed="true"></u-divider>
	</view>
</template>

<script>
	import Recommond from '@/components/recommond.vue'
	import rankListCard from '@/components/rankListCard.vue'
	export default {
		name: "indexItemBoy",
		components: {
			Recommond,
			rankListCard
		},
		data() {
			return {
				homeCards: [{
						/* 移动所需参数 */
						cardName: "推荐",
						Rebooks: [{
								src: "../../static/test.jpg",
								name: "菜菜的新人出书的新人",
								bookId: "1",
								tags: ["玄幻"]
							},
							{
								src: "../../static/test.jpg",
								name: "斗破苍穹2",
								bookId: "2",
								tags: ["玄幻"]
							}, {
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								bookId: "3",
								tags: ["玄幻"]
							}, {
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								bookId: "4",
								tags: ["玄幻"]
							}, {
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								bookId: "5",
								tags: ["玄幻"]
							}, {
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								bookId: "6",
								tags: ["玄幻"]
							}, {
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								bookId: "7",
								tags: ["玄幻"]
							}, {
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								bookId: "8",
								tags: ["玄幻"]
							}, {
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								bookId: "9",
								tags: ["玄幻"]
							}, {
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								bookId: "10",
								tags: ["玄幻"]
							}, {
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								bookId: "11",
								tags: ["玄幻"]
							}, {
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								bookId: "12",
								tags: ["玄幻"]
							}, {
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								bookId: "13",
								tags: ["玄幻"]
							}, {
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								bookId: "14",
								tags: ["玄幻"]
							}
						]
					},
					{
						cardName: "高分佳作",
						Rebooks: [{
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								bookId: "1",
								tags: ["玄幻"]
							},
							{
								src: "../../static/test.jpg",
								name: "斗破苍穹2",
								bookId: "1",
								tags: ["玄幻"]
							}, {
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								bookId: "1",
								tags: ["玄幻"]
							}, {
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								bookId: "1",
								tags: ["玄幻"]
							}, {
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								bookId: "1",
								tags: ["玄幻"]
							}, {
								src: "../../static/test.jpg",
								name: "斗破苍穹",
								bookId: "1",
								tags: ["玄幻"]
							}
						]
					},
				],
			}
		},
		methods: {
			touchMoveStop(e){
				console.log(e)
				e.stopPropagation()
			}
		}
	}
</script>

<style>

</style>
