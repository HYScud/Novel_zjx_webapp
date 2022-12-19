<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>


<style lang="scss">
	/*每个页面公共css */
	@import "@/uni_modules/uview-ui/index.scss";
	@import url("./common/free.css");
	@import url("http://at.alicdn.com/t/c/font_3823791_tafqpql576h.css");
	@import url("./common/animate/animate.min.css");
	@import url("./common/css/personal.scss");
</style>
