<template>
	<view class="flex flex-row">
		<view class="flex flex-column align-center border-right"
			:style="[{'width':`${LeftWidth}`+'px'},{'height':`${scrollHeight}`+'px'}]">
			<block v-for="(item,index) in whichRank.tabName">
				<view class="p-2" :class="whichRank.tabIndex===index?'text-theme':'text-muted'"
					@click="changeMenuStatus(index,whichRank)"><text class="flex flex-nowrap">{{item.name}}</text></view>
			</block>

		</view>
		<u-list :width="listWidth" :height="scrollHeight">
			<u-list-item>
				
			</u-list-item>
		</u-list>
	</view>
</template>

<script>
	export default {
		props: {
			whichRank: {
				type: Object,
				default: {},
				required: true,
			},
			scrollHeight:{
				type: Number,
				default: 0,
				required: true,
			},
			LeftWidth:{
				type: Number,
				default: 0,
				required: true,
			},
			listWidth:{
				type: Number,
				default: 0,
				required: true,
			}
			
		},
		name: "rankList",
		data() {
			return {

			};
		},
		methods:{
			changeMenuStatus(index, status) {
				console.log("1")
				if (status.tabIndex != index) {
					status.tabIndex = index
				}
			},
		}
	}
</script>

<style>

</style>
