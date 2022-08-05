<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
			<swiper-item v-for="(item,i) in swiperList " :key="i">
				<navigator class="swiper-item" :url="'/subpkg/goods_detail/goods_detail?goods_id='+item.goods_id">
					<image :src="item.image_src"></image>
				</navigator>
			</swiper-item>
		</swiper>
		<view class="nav-list">
			<view class="nav-item" v-for="(item, i) in navList" :key="i" @click="navhandel(item)">
				<image :src="item.image_src" class="nav-img"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperList: [], //轮播图数据
				navList: []
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
</style>
