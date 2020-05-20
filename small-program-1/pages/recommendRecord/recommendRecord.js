
const TestArray = [
  {
    "activityName": null,
    "username": "改好test",
    "sex": null,
    "mobilePhone": "13696436666",
    "provinceName": "河北省",
    "cityName": "邢台市",
    "dealerCode": "CN1078",
    "dealerName": "邢台致祥汽车销售服务有限公司",
    "intentionVehicleModel": "观致5s",
    "createTime": "2020-04-27T17:39:42",
    "status": 0,
    "statusString": '跟进中',
    "businessDate": null
  },{
    "activityName": null,
    "username": "陈test",
    "sex": null,
    "mobilePhone": "13104999785",
    "provinceName": "广东省",
    "cityName": "深圳市",
    "dealerCode": "CN1222",
    "dealerName": "深圳宝能汽车销售服务有限公司",
    "intentionVehicleModel": "观致5s暗黑英雄",
    "createTime": "2020-04-27T17:30:49",
    "status": 5,
    "statusString": '已到店',
    "businessDate": "2020-04-28T15:56:20"
  },{
    "activityName": null,
    "username": "陈深圳市",
    "sex": null,
    "mobilePhone": "13104999785",
    "provinceName": "广东省",
    "cityName": "深圳市",
    "dealerCode": "CN1222",
    "dealerName": "深圳宝能汽车销售服务有限公司",
    "intentionVehicleModel": "观致5s暗黑英雄",
    "createTime": "2020-04-27T15:04:06",
    "status": 10,
    "statusString": '已成交',
    "businessDate": null
  },{
    "activityName": null,
    "username": "test刘",
    "sex": null,
    "mobilePhone": "15915105122",
    "provinceName": "广东省",
    "cityName": "深圳市",
    "dealerCode": "CN1222",
    "dealerName": "深圳宝能汽车销售服务有限公司",
    "intentionVehicleModel": "观致5s暗黑英雄",
    "createTime": "2020-04-27T15:01:10",
    "status": 15,
    "statusString": '已失效',
    "businessDate": 'afdsl'
  }
];

Page({

  /**
   * 页面的初始数据
   */
  data: {
    select: false,
    selectTitle:'全部',
    animationData: '',
    titleArray:[
      {
        state:0,
        stateDesc:'全部',
      },{
        state:1,
        stateDesc:'跟进中',
      },{
        state:2,
        stateDesc:'已到店',
      },{
        state:3,
        stateDesc:'已成交',
      },{
        state:4,
        stateDesc:'已失效',
      }
    ],
    listArray:TestArray,
    selectArray:TestArray
  },

  // ✅系统方法:页面即将显示
  onShow:function(){
  console.log('✅即将进入');
  
  // 获取推荐列表接口
    wx.request({
      url: 'https://microsales.qorosauto.com/workplace/activity/testDrive',
      data: {
        openId: wx.getStorageSync('openid'),
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'POST',
      success(res) {
        console.log(res)
        let data = Array.from(new Set(res.data.records))
        that.setData({
          listArray: data,
          selectArray:data
        })
      },
      fail(err) {
        wx.showToast({
          title: '获取数据失败',
          icon: 'none',
          duration: 2000
        })
      }
    });

  },

  // 点击筛选下拉箭头
  onFilterClick() {
    this.setData({
      select: !this.data.select
    });
    // 动画时相对初始值,第一次点击传180,第二次传0
    this.showAnimator(this.data.select?180:0);
  },

  // 点击勾选item
  onSelectedClick(e) {
    console.log(e);
    let stateDesc = e.currentTarget.dataset.desc;
    let state = e.currentTarget.dataset.state;
    let selectArray= this.getSelectArray(state);
    this.setData({
      select: false,
      selectTitle: stateDesc,
      selectArray:selectArray
    })
    this.showAnimator(0);
  },

  // 获取点击后的数组
  getSelectArray:function(state){
    let selectArray = [];
    if(state == 0){
      selectArray = this.data.listArray;
    }else{
      for(let index = 0;index < this.data.listArray.length;index++){
        let listItem = this.data.listArray[index];
        if(state == listItem.state){
            selectArray.push(listItem);
        };
      };
    };
    return selectArray;
  },

  // 开始旋转动画
  showAnimator: function(e) {
      var animation = wx.createAnimation({
          duration: 300,
          timingFunction: "linear",
      });
      this.animation = animation;
      animation.rotate(e).step();
      this.setData({
          animationData: animation.export()
      });
    },

})