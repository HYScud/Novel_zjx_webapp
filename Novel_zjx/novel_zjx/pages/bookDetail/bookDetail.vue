<!-- 书籍详情页 -->
<template>
	<view>
		<BookDetail v-if="isComRes"></BookDetail>
		<u-loading-page icon-size="72" :loading-text="isFail?loaded_fail:loading_text" :loading="!isComRes"
			:image="isFail?'../../static/load_fail.png':'../../static/loading.gif'"></u-loading-page>
	</view>
</template>

<script>
	import BookDetail from '@/components/BookDetail/BookDetail.vue';
	export default {
		components: {
			BookDetail
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
			setTimeout(()=>{
				this.isComRes=true
			},1000)
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
	page {
		background-image: linear-gradient(to bottom left, rgba(255, 0, 0, 0.0), rgba(255, 255, 127, 1.0));
	}
</style>
