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
			<view class="cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">
				<view class="cu-item">
					<view class="content padding-tb-sm">
						<view class="pick-list">
							<view class="">
								<view>
									<text class="cuIcon-pay text-blue margin-right-xs"></text>课程名称: 高数
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
									<text class="text-blue margin-right-xs"></text>
								</view>
								<view class="text-gray text-sm">
									<text class="margin-right-xs"></text> 周开发：
								</view>
								<view class="text-gray text-sm">
									<text class="margin-right-xs"></text> 22222222222222:
								</view>
								<view class="text-gray text-sm">
									<text class="margin-right-xs"></text> 5:
								</view>
								<view class="text-gray text-sm">
									<text class="margin-right-xs"></text> 2打发:
								</view>
								<view class="text-gray text-sm">
									<text class="margin-right-xs"></text> 2仍然若:
								</view>
								<view class="text-gray text-sm">
									<text class="margin-right-xs"></text> 课程性质:
								</view>
							</view>
						</view>
					</view>
					<view class="action">
						<switch class="swiper-item" @change="SwitchSex" :class="skin?'checked':''" :checked="skin?true:false"></switch>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				iconList: [{
					icon: 'cardboardfill',
					color: 'red',
					badge: 120,
					name: 'VR'
				}, {
					icon: 'recordfill',
					color: 'orange',
					badge: 1,
					name: '录像'
				}, {
					icon: 'picfill',
					color: 'yellow',
					badge: 0,
					name: '图像'
				}, {
					icon: 'noticefill',
					color: 'olive',
					badge: 22,
					name: '通知'
				}, {
					icon: 'upstagefill',
					color: 'cyan',
					badge: 0,
					name: '排行榜'
				}, {
					icon: 'clothesfill',
					color: 'blue',
					badge: 0,
					name: '皮肤'
				}, {
					icon: 'discoverfill',
					color: 'purple',
					badge: 0,
					name: '发现'
				}, {
					icon: 'questionfill',
					color: 'mauve',
					badge: 0,
					name: '帮助'
				}, {
					icon: 'commandfill',
					color: 'purple',
					badge: 0,
					name: '问答'
				}, {
					icon: 'brandfill',
					color: 'mauve',
					badge: 0,
					name: '版权'
				}],
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
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			Gridchange(e) {
				this.gridCol = e.detail.value
			},
			Gridswitch(e) {
				this.gridBorder = e.detail.value
			},
			MenuBorder(e) {
				this.menuBorder = e.detail.value
			},
			MenuArrow(e) {
				this.menuArrow = e.detail.value
			},
			MenuCard(e) {
				this.menuCard = e.detail.value
			},
			SwitchSex(e) {
				this.skin = e.detail.value
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
