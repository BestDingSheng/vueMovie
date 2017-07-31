let url = `https://api.douban.com/v2/movie/in_theaters?start=${vm.start}&count=10` /// 热门
let url_com = 'https://api.douban.com/v2/movie/coming_soon?start=${vm.start}&count=10' /// 即将上映
let url_top = 'https://api.douban.com/v2/movie/top250?start=${vm.start}&count=10' /// top250 榜单
let url_detila = 'https://api.douban.com/v2/movie/subject/' + id  // 电影详情
