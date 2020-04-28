
const TestArray = [
  {
    state:1,
    stateDesc:'跟进中',
    name:'张1',
    phone:'138****0000',
    carName:'观致5S暗夜英雄版',
    storeName:'深圳科技园宝能观致店1111111111111111111111111111',
    time:'2020年4月27日 19:33:20'
  },{
    state:2,
    stateDesc:'已到店',
    name:'张2',
    phone:'138****0000',
    carName:'观致5S暗夜英雄版',
    storeName:'深圳科技园宝能观致店',
    time:'2020年4月27日 19:33:20'
  },{
    state:3,
    stateDesc:'已成交',
    name:'张3',
    phone:'138****0000',
    carName:'观致5S暗夜英雄版',
    storeName:'深圳科技园宝能观致店',
    time:'2020年4月27日 19:33:20'
  },{
    state:4,
    stateDesc:'已失效',
    name:'张4',
    phone:'138****0000',
    carName:'观致5S暗夜英雄版',
    storeName:'深圳科技园宝能观致店',
    time:'2020年4月27日 19:33:20'
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
        mobile: tel
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'POST',
      success(res) {
        console.log(res)
        let data = Array.from(new Set(res.data.rows))
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