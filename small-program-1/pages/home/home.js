// pages/home/home.js
Page({
  data: {
    allMovies: [
      {
        title: '影院热映',
        url: 'v2/movie/in_theaters',
        movies: []
      },
      {
        title: '新片榜',
        url: 'v2/movie/new_movies',
        movies: []
      },
      {
        title: '口碑榜',
        url: 'v2/movie/weekly',
        movies: []
      },
      {
        title: '北美票房榜',
        url: 'v2/movie/us_box',
        movies: []
      },
      {
        title: 'Top250',
        url: 'v2/movie/top250',
        movies: []
      }
    ],
    topHeight: 0
  },
  // 进入后直接执行onLoad
  onLoad: function() {
    // 动态的获取状态栏+导航栏的高度
    this.data.topHeight = wx.db.statusBarHeight + wx.db.navBarHeight;

    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#42BD55'
    });

    this.loadLocalData();
    this.loadCity((city) => {
      this.loadNewData(0, {city: city});
    });
    this.loadNewData(1);
    this.loadNewData(2);
    this.loadNewData(3);
    this.loadNewData(4);
  },
// 获取本地的数据
  loadLocalData: function() {
    for (let index = 0; index < this.data.allMovies.length; index++) {
      let obj = this.data.allMovies[index];
      obj.movies = wx.getStorageSync(obj.title);
    }
    this.setData(this.data);
  },
  // 获取城市数据
  loadNewData: function(idx, params) {
    wx.request({
      url: wx.db.url(this.data.allMovies[idx].url),
      data: params,
      header: {'content-type':'json'},
      success: (res) => {
        console.log('影院数据✅'+JSON.stringify(res));
        const movies = res.data.subjects;
        let obj = this.data.allMovies[idx];
        // 此处要赋值为空
        obj.movies = [];
        for (let index = 0; index < movies.length; index++) {
          let movie = movies[index].subject || movies[index];
          this.updateMovie(movie);
          obj.movies.push(movie);
        }
        console.log(this.data);
        this.setData(this.data);
        // 将movies数组缓存到本地
        wx.setStorage({
          key: obj.title,
          data: obj.movies
        });
      },
      fail: () => {
        wx.db.toast(`获取${ this.data.allMovies[idx].title }失败`);
      }
    });
  },
  // 根据微信api,获取经纬度
  // 根据百度api,把经纬度转成城市
  // 根据豆瓣api,把城市转成具体影院
  loadCity: function(success) {
    // 获取经纬度
    wx.getLocation({
      success: (res) => {
        console.log('经纬度✅'+JSON.stringify(res));
        // 逆地理编码
        wx.request({
          url: 'https://api.map.baidu.com/reverse_geocoding/v3',
          data: {
            output: 'json',
            coordtype: 'wgs84ll',
            ak: '9zTl9xXSCCA8FTnsqQA9Ro8B1mO85v4W',
            location: `${res.latitude},${res.longitude}`
            // location: res.latitude + ',' + res.longitude
          },
          success: (res) => {
            console.log('城市✅'+JSON.stringify(res));
            let city = res.data.result.addressComponent.city;
            city = city.substring(0, city.length - 1);
            success && success(city);
          },
          fail: () => {
            wx.db.toastError('获取城市失败');
          }
        });
      },
      fail: () => {
        wx.db.toastError('获取位置失败');
      }
    });
  },
// 处理每个城市数据,展示星星
  updateMovie: function(movie) {
    let stars = parseInt(movie.rating.stars);
    if (stars == 0) return;
    movie.stars = {};
    movie.stars.on = parseInt(stars / 10);
    movie.stars.half = (stars - (movie.stars.on) * 10) > 0;
    movie.stars.off = parseInt((50 - stars) / 10);
  },
  viewMore: function(evt) {
    const index = evt.currentTarget.dataset.index;
    const obj = this.data.allMovies[index];
    wx.navigateTo({
      url: `/pages/list/list?title=${ obj.title }&url=${ obj.url }`
    });
  }
})