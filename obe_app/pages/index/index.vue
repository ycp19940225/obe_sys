<template>
	<view>
		<check></check>
		<obe v-if="PageCur=='obe'"></obe>
		<pick v-if="PageCur=='pick'"></pick>
		<person v-if="PageCur=='person'"></person>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="obe">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/basics' + [PageCur=='basics'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='obe'?'text-green':'text-gray'">成绩统计</view>
			</view>
			<view class="action" @click="NavChange" data-cur="pick">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/component' + [PageCur == 'component'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='pick'?'text-green':'text-gray'">快速选课</view>
			</view>
			<view class="action" @click="NavChange" data-cur="person">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/plugin' + [PageCur == 'plugin'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='person'?'text-green':'text-gray'">个人中心</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				PageCur: 'obe'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		},
		onLoad: function() {
			
		}
	}
</script>

<style>

</style>
