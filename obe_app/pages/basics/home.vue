
<template name="basics">
	<view>
		<scroll-view scroll-y class="page">
			 <cu-custom bgImage="https://image.weilanwl.com/color2.0/plugin/cjkz2329.jpg">
			 	<block slot="content">
					<view class="cardTitle">
						成绩中心
					</view>
			 	</block>
			 </cu-custom>
			 <view class="uni-btn-v">
			 	<button type="default" @click="showSinglePicker">选择学年</button>
			 </view>
			 <mpvue-picker :themeColor="themeColor" ref="mpvuePicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
			  @onConfirm="onConfirm" @onCancel="onCancel" :pickerValueArray="pickerValueArray">
			  </mpvue-picker>
			<view class="nav-list">
				<navigator hover-class="none" :url="'/pages/basics/' + item.name" class="nav-li" navigateTo :class="'bg-'+item.color"
				 :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" v-for="(item,index) in elements" :key="index">
					<view class="nav-title">{{item.title}}</view>
					<view class="nav-name">{{item.name}}</view>
					<text :class="'cuIcon-' + item.icon"></text>
				</navigator>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
	
</template>

<script>
	import mpvuePicker from '../plugin/mpvuePicker.vue';
	
	export default {
		name: "basics",
		components: {
			mpvuePicker,
		},
		data() {
			return {
				pickerSingleArray: [{
						label: '中国',
						value: 1
					},
					{
						label: '俄罗斯',
						value: 2
					},
					{
						label: '美国',
						value: 3
					},
					{
						label: '日本',
						value: 4
					}
				],
				pickerValueDefault: [0],
				deepLength: 1,
				themeColor: '#007AFF',
				pickerText: '',
				mode: '',
				pickerValueArray:[],
				elements: [{
						title: '布局',
						name: 'layout',
						color: 'cyan',
						icon: 'newsfill'
					},
					{
						title: '背景',
						name: 'background',
						color: 'blue',
						icon: 'colorlens'
					},
					{
						title: '文本',
						name: 'text',
						color: 'purple',
						icon: 'font'
					},
					{
						title: '图标 ',
						name: 'icon',
						color: 'mauve',
						icon: 'icon'
					},
					{
						title: '按钮',
						name: 'button',
						color: 'pink',
						icon: 'btn'
					},
					{
						title: '标签',
						name: 'tag',
						color: 'brown',
						icon: 'tagfill'
					},
					{
						title: '头像',
						name: 'avatar',
						color: 'red',
						icon: 'myfill'
					},
					{
						title: '进度条',
						name: 'progress',
						color: 'orange',
						icon: 'icloading'
					},
					{
						title: '边框阴影',
						name: 'shadow',
						color: 'olive',
						icon: 'copy'
					},
					
				],
				swiperList: [{
						id: 0,
						type: 'image',
						url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
					}, {
						id: 1,
						type: 'image',
						url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
					}, {
						id: 2,
						type: 'image',
						url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
					}, {
						id: 3,
						type: 'image',
						url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
					}, {
						id: 4,
						type: 'image',
						url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
					}, {
						id: 5,
						type: 'image',
						url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
					}, {
						id: 6,
						type: 'image',
						url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
					}],
				}
		},
		methods:{
			// 单列
			showSinglePicker() {
				this.pickerValueArray = this.pickerSingleArray
				this.mode = 'selector'
				this.deepLength = 1
				this.pickerValueDefault = [0]
				this.$refs.mpvuePicker.show()
			},
			onCancel(e) {
				console.log(e)
			},
			onConfirm(e) {
				this.pickerText = JSON.stringify(e)
			}
		},
		onBackPress() {
		  if (this.$refs.mpvuePicker.showPicker) {
		  	this.$refs.mpvuePicker.pickerCancel();
		    return true;
		  }
		  if (this.$refs.mpvueCityPicker.showPicker) {
		  	this.$refs.mpvueCityPicker.pickerCancel();
		    return true;
		  }
		},
			onUnload() {
				if (this.$refs.mpvuePicker.showPicker) {
					this.$refs.mpvuePicker.pickerCancel()
				}
				if (this.$refs.mpvueCityPicker.showPicker) {
					this.$refs.mpvueCityPicker.pickerCancel()
				}
			},
		onLoad:function(){
			
		}
	}
	
	
</script>

<style>
	.page {
		height: 100vh;
	}
	.nav-list{
		padding-top: 5vh;
	}
</style>
