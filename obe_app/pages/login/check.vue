<template name="checkLogin">
	<view>
	</view>
</template>
<script>
	export default {
		mounted: function() {
			var _this = this;
			uni.getStorage({
				key: 'userInfo',
				success: function(res) {
					let data = res.data;
					console.log(data, data.length)
					if (data.length == 2 && data == '[]') {
						uni.reLaunch({
							url: '/pages/login/login'
						});
					}
				},
				fail: function(res) {
					uni.reLaunch({
						url: '/pages/login/login'
					});
				}
			});
		}
	}
</script>
