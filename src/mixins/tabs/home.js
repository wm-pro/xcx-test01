import wepy from 'wepy'
export default class extends wepy.mixin {
    data = {
        swiperList: [],
        catitemsList: [],
        floorList: []
    }
    onLoad() {
        this.getswiperData()
        this.getCateData()
        this.getfloorData()
    }

    methods = {
            // 首页楼层列表跳转函数
            goGoosList(url) {
                console.log(url);
                wepy.navigateTo({
                    url: url
                })
            }
        }
        // 获取首页轮播图数据
    async getswiperData() {
            const { data: res } = await wepy.request({
                url: 'https://www.zhengzhicheng.cn/api/public/v1/home/swiperdata'
            })
            if (res.meta.status != 200) {
                return wepy.showToast({
                    title: '获取首页轮播图数据失败',
                    icon: 'none'
                })
            }
            this.swiperList = res.message
            this.$apply()
        }
        // 获取首页分类数据
    async getCateData() {
            const { data: res } = await wepy.request({
                url: 'https://www.zhengzhicheng.cn/api/public/v1/home/catitems'
            })
            if (res.meta.status != 200) {
                return wepy.showToast({
                    title: '获取首页分类数据失败'
                })
            }
            this.catitemsList = res.message
            this.$apply()
        }
        // 获取首页楼层数据
    async getfloorData() {
        const { data: res } = await wepy.request({
            url: 'https://www.zhengzhicheng.cn/api/public/v1/home/floordata'
        })
        if (res.meta.status != 200) {
            return wepy.showToast({
                title: '获取首页楼层数据失败'
            })
        }
        this.floorList = res.message
        this.$apply()
        console.log(res);

    }
}