<template>
	<view>
		<cu-custom bgImage="https://image.weilanwl.com/color2.0/plugin/cjkz2329.jpg">
			<block slot="content">
				<view class="cardTitle">
					选课中心
				</view>
			</block>
		</cu-custom>
		<scroll-view :scroll-y="modalName==null" class="page" :class="modalName!=null?'show':''">
			<view class="cu-bar bg-white solid-bottom margin-top course_title">
				<view class="action">
					<text class="cuIcon-title text-orange"></text> 课程列表
				</view>
			</view>
			<view v-for="course in courseData" :key="course.id">
				<view class="cu-list menu" >
					<view class="cu-item">
						<view class="content padding-tb-sm">
							<view class="pick-list">
								<view class="">
									<view>
										<text class="cuIcon-pay text-blue margin-right-xs"></text>课程名称:
									</view>
									<view class="text-gray text-sm">
										<text class="cuIcon-addressbook margin-right-xs"></text> 老师：
									</view>
									<view class="text-gray text-sm">
										<text class="cuIcon-timefill margin-right-xs"></text> 课程代码:
									</view>
									<view class="text-gray text-sm">
										<text class="cuIcon-timefill margin-right-xs"></text> 学分:
										<text class="padding-lr-xl"></text>
									</view>
									<view class="text-gray text-sm">
										<text class="cuIcon-timefill margin-right-xs"></text> 周学时:
									</view>
									<view class="text-gray text-sm">
										<text class="cuIcon-timefill margin-right-xs"></text> 考核方式:
									</view>
									<view class="text-gray text-sm">
										<text class="cuIcon-timefill margin-right-xs"></text> 课程性质:
									</view>
								</view>
								<view class="pick-item">
									<view>
										<text class="text-blue margin-right-xs"></text>{{course.name}}
									</view>
									<view class="text-gray text-sm">
										<text class="margin-right-xs"></text> {{course.teacherName}}
									</view>
									<view class="text-gray text-sm">
										<text class="margin-right-xs"></text> {{course.code}}
									</view>
									<view class="text-gray text-sm">
										<text class="margin-right-xs"></text> {{course.credits}}
									</view>
									<view class="text-gray text-sm">
										<text class="margin-right-xs"></text> {{course.week_of_school}}
									</view>
									<view class="text-gray text-sm">
										<text class="margin-right-xs"></text> {{course.evaluation_mode}}
									</view>
									<view class="text-gray text-sm">
										<text class="margin-right-xs"></text> {{course.course_type}}
									</view>
								</view>
							</view>
						</view>
						<view class="action">
							<switch class="swiper-item" :data-id="course.id" @change="SwitchCourse" :class="course.checked?'checked':''" :checked="course.checked"></switch>
						</view>
					</view>
				</view>

			</view>
		</scroll-view>
	</view>
</template>

<script>
	import qs from 'qs';
	export default {
		data() {
			return {
				userId: '',
				courseData: [],
				modalName: null,
				gridCol: 3,
				gridBorder: false,
				menuBorder: false,
				menuArrow: false,
				menuCard: false,
				skin: false,
				listTouchStart: 0,
				listTouchDirection: null,
			};
		},
		methods: {
			//选课
			SwitchCourse(e) {
				let _this = this;
				_this.skin = e.detail.value
				let courseId = e.currentTarget.dataset.id;
				let type = e.detail.value;
				let userId;
				uni.getStorage({
					key: 'userInfo',
					success: function(res) {
						let userData = JSON.parse(res.data);
						userId = userData.id
					},
				});
				//变换颜色
				let tempArray = new Array();
				let courseData = _this.courseData;
				for (let i in courseData) {
					console.log(courseData[i]['id'])
					if(courseData[i]['id'] == courseId){
						courseData[i].checked = type
						tempArray.push(_this.courseData[i])
					}else{
						tempArray.push(courseData[i])
					}
				}
				console.log(tempArray)
				_this.courseData = tempArray;
				let data = {
					'courseId': courseId,
					'userId': userId,
					'type': type
				}
				data = qs.stringify(data)
				console.log(type)
				uni.request({
					url: 'http://www.obe_sys.com/api/index/selectionCourse',
					header: {
						'content-type': 'application/x-www-form-urlencoded',
					},
					data: data,
					method: 'POST',
					dataType: 'json',
					success: (res) => {
						console.log(res)
						if (res.data.code != 1) {
							uni.showToast({
								title: res.data.info,
								icon: 'none'
							});
						} else {
							uni.showToast({
								title: res.data.info,
								icon: 'none'
							});
						}
					}
				});
			},

			// ListTouch触摸开始
			ListTouchStart(e) {
				this.listTouchStart = e.touches[0].pageX
			},

			// ListTouch计算方向
			ListTouchMove(e) {
				this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left'
			},

			// ListTouch计算滚动
			ListTouchEnd(e) {
				if (this.listTouchDirection == 'left') {
					this.modalName = e.currentTarget.dataset.target
				} else {
					this.modalName = null
				}
				this.listTouchDirection = null
			}
		},
		mounted: function() {
			var _this = this;
			uni.request({
				url: 'http://www.obe_sys.com/api/index/getCourse',
				header: {
					'content-type': 'application/x-www-form-urlencoded',
				},
				method: 'GET',
				dataType: 'json',
				success: (res) => {
					console.log(res)
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
						_this.courseData = tempArray;
					}
				}
			});
		}
	}
</script>

<style>
	.page {
		height: 100Vh;
		width: 100vw;
	}

	.page.show {
		overflow: hidden;
	}

	.switch-sex::after {
		content: "\e716";
	}

	.switch-sex::before {
		content: "\e7a9";
	}

	.switch-music::after {
		content: "\e66a";
	}

	.switch-music::before {
		content: "\e6db";
	}

	.pick-list {
		display: flex;
	}

	.pick-item {
		flex-grow: 1;
	}

	.course_title {
		border-bottom: solid 1px #8799a3;
		border-top: solid 1px #8799a3;
	}
</style>
