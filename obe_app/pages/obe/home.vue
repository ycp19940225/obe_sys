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
			<view class="warp">
				<view class="box">
					<t-table border="2" border-color="#95b99e" :is-check="false" @change="change">
						<t-tr font-size="14" color="#95b99e" align="left">
							<t-th align="left">课程名称</t-th>
							<t-th align="left">学分</t-th>
							<t-th align="left">课程性质</t-th>
							<t-th align="left">课程成绩</t-th>
						</t-tr>
						<t-tr font-size="12" color="#5d6f61" align="right" v-for="item in tableList" :key="item.id">
							<t-td align="left">{{ item.name }}</t-td>
							<t-td align="left">{{ item.credits }}</t-td>
							<t-td align="left">{{ item.course_name }}</t-td>
							<t-td align="left">{{ item.score }}</t-td>
						</t-tr>
					</t-table>
				</view>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>
<script>
	import mpvuePicker from '../plugin/mpvuePicker.vue';
	import tTable from '@/components/t-table/t-table.vue';
	import tTh from '@/components/t-table/t-th.vue';
	import tTr from '@/components/t-table/t-tr.vue';
	import tTd from '@/components/t-table/t-td.vue';
	import qs from 'qs';
	export default {
		name: "basics",
		components: {
			mpvuePicker,
			tTable,
			tTh,
			tTr,
			tTd
		},
		data() {
			return {
				userId: '',
				tableList: [
				],
				pickerValueDefault: [0],
				deepLength: 1,
				themeColor: '#007AFF',
				pickerText: '',
				mode: '',
				pickerValueArray: [],
			}
		},
		methods: {
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
				var _this = this;
				let userInfo;
				_this.pickerText = e.label
				uni.getStorage({
					key: 'userInfo',
					success: function(res) {
						let userData = JSON.parse(res.data);
						_this.userId = userData.id
					},
				});
				var data = {
					'year':_this.pickerText,
					'studentId': _this.userId
				}
				uni.request({
					url: 'http://www.obe_sys.com/api/index/getPerformance',
					header: {
						'content-type': 'application/x-www-form-urlencoded',
					},
					method: 'POST',
					data:data,
					dataType: 'json',
					success: (res) => {
						console.log(res)
						if (res.data.code != 1) {
							uni.showToast({
								title: res.data.info,
								icon: 'none'
							});
						} else {
							console.log(res)
							var data = res.data.data
							var tempArray = new Array();
							for (let i in data) {
								tempArray.push(data[i])
							}
							_this.tableList = tempArray;
						}
					}
				});
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
		mounted: function() {
			var _this = this;
			uni.request({
				url: 'http://www.obe_sys.com/api/index/getSchoolYear',
				header: {
					'content-type': 'application/x-www-form-urlencoded',
				},
				method: 'GET',
				dataType: 'json',
				success: (res) => {
					if (res.data.code != 1) {
						uni.showToast({
							title: res.data.info,
							icon: 'none'
						});
					} else {
						var data = res.data.data
						var tempArray = new Array();
						for (let i in data) {
							tempArray.push(data[i])
						}
						_this.pickerSingleArray = tempArray;
					}
				}
			});
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}

	.nav-list {
		padding-top: 5vh;
	}
</style>
