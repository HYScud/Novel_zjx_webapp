<template>
	<view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad(e) {
			console.log(e)
			setTimeout(function(){
				uni.setNavigationBarTitle({
					title:e.cardName,
					success(e) {
						console.log(e)
					},
					fail(e) {
						console.log(e)
					}
				})
			},100)	
		},
		methods: {

		}
	}
</script>

<style>

</style>
