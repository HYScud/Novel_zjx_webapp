<template>
	<view>
		<DetailList v-if="isComRes"></DetailList>
		<u-loading-page icon-size="72" :loading-text="isFail?loaded_fail:loading_text" :loading="!isComRes"
			:image="isFail?'../../static/load_fail.png':'../../static/loading.gif'"></u-loading-page>
		<v </view>
</template>

<script>
	import DetailList from '@/components/DetailList/DetailList.vue';
	export default {
		components: {
			DetailList
		},
		data() {
			return {
				isComRes: false,
				isFail: false,
				loading_text: '正在加载',
				loaded_fail: '服务器异常'
			}
		},
		onLoad(e) {
			console.log(e)
			setTimeout(function() {
					uni.setNavigationBarTitle({
						title: e.cardName,
						success(e) {
							console.log(e)
						},
						fail(e) {
							console.log(e)
						}
					})
				}, 100),
				this.change()

		},
		methods: {
			change() {
				uni.request({
					url: 'http://192.168.0.101:8081/chapter/getAllChapters', //仅为示例，并非真实接口地址。
					method: "GET",
					header: {
						'content-type': 'application/json'
					},
					data: {
						bookId: 1
					},
					success: (res) => {
						console.log("请求")
						if (res.data.code == 20000) {
							// console.log(res.data.datalist);
							this.$nextTick(function() {
								/*下次 DOM 更新时，找到某个控件，再进行复杂计算并确定其高度后*/
								setTimeout(() => {
									this.isComRes = !this.isComRes
								}, 300)


							});
						}
					},
					fail: (error) => {
						console.log(error);
						this.isFail = true
					},
				});


			}
		}
	}
</script>

<style>

</style>
