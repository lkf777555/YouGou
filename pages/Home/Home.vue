<template>
	<view>
		<!-- 轮播图部分 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
			<swiper-item v-for="(item,i) in swiperList " :key="i">
				<navigator class="swiper-item" :url="'/subpkg/goods_detail/goods_detail?goods_id='+item.goods_id">
					<image :src="item.image_src"></image>
				</navigator>
			</swiper-item>
		</swiper>
		<!-- 分类列表部分 -->
		<view class="nav-list">
			<view class="nav-item" v-for="(item, i) in navList" :key="i" @click="navhandel(item)">
				<image :src="item.image_src" class="nav-img"></image>
			</view>
		</view>
		<!-- 楼层部分 -->
		<view class="floor-list">
			<!-- 楼层 item 项 -->
			<view class="floor-item" v-for="(item, i) in floorList" :key="i">
				<!-- 楼层标题 -->
				<image :src="item.floor_title.image_src" class="floor-title"></image>
				<view class="floor-img-box">
					<!-- 左侧大图片的盒子 -->
					<navigator class="left-img-box" :url="item.product_list[0].url">
						<image :src="item.product_list[0].image_src"
							:style="{width: item.product_list[0].image_width + 'rpx'}" mode="widthFix"></image>
					</navigator>
					<!-- 右侧 4 个小图片的盒子 -->
					<view class="right-img-box">
						<navigator class="right-img-item" v-for="(item2, i2) in item.product_list" :key="i2"
							v-if="i2 !== 0" :url="item2.url">
							<image :src="item2.image_src" mode="widthFix" :style="{width: item2.image_width + 'rpx'}">
							</image>
						</navigator>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperList: [], //轮播图数据
				navList: [], //分类列表数据
				floorList: [],
			}
		},
		methods: {
			// 请求轮播图数据
			async getSwiperList() {
				const {
					data: res
				} = await uni.$http.get('/home/swiperdata')
				console.log('轮播图数据=>',
					res);
				if (res.meta.status !== 200) return uni.$showMsg()
				this.swiperList = res.message
			},
			// 请求分类列表数据
			async getNavList() {
				const {
					data: res
				} = await uni.$http.get('/home/catitems')
				console.log('分类列表数据=>', res);
				if (res.meta.status !== 200) return uni.$showMsg()
				this.navList = res.message
			},
			// 请求楼层数据
			async getFooter() {
				const {
					data: res
				} = await uni.$http.get('/home/floordata')
				if (res.meta.status !== 200) return uni.$showMsg()
				console.log('楼层数据=>', res);
				// 通过双层 forEach 循环，处理 URL 地址
				res.message.forEach(floor => {
					floor.product_list.forEach(prod => {
						prod.url = '/subpkg/goods_list/goods_list?' + prod.navigator_url.split('?')[1]
					})
				})

				this.floorList = res.message
			},
			// 跳转到分类页面
			navhandel(item) {
				if (item.name === '分类') {
					uni.switchTab({
						url: '/pages/Cate/Cate'
					})
				}
			}
		},
		onLoad() {
			this.getSwiperList() // 获取轮播图
			this.getNavList() // 获取分类列表
			this.getFooter() // 获取楼层数据
		}
	}
</script>

<style lang="scss" scoped>
	// 轮播图数据
	swiper {
		height: 330rpx;

		.swiper-item,
		image {
			width: 100%;
			height: 100%;
		}
	}

	// 分类列表数据
	.nav-list {
		display: flex;
		justify-content: space-around;
		margin: 15px 0;

		.nav-img {
			width: 128rpx;
			height: 140rpx;
		}
	}

	// 楼层
	.floor-title {
		height: 60rpx;
		width: 100%;
		display: flex;
	}

	.right-img-box {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	.floor-img-box {
		display: flex;
		padding-left: 10rpx;
	}
</style>
