//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    title:'我是谁',
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    array: [1, 2, 3, 4, 5],
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onShow() {
    console.log(this.route)
    this.dialog = this.selectComponent("#dialog");
  },
  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  },
  onPullDownRefresh(){
    console.log('onPullDownRefresh')
  },
  showDialog() {
    this.dialog.showDialog();
  },
  //取消事件
  _cancelEvent() {
    console.log('你点击了取消');
    this.dialog.hideDialog();
  },
  //确认事件
  _confirmEvent() {
    console.log('你点击了确定');
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
    this.dialog.hideDialog();
  },
  //事件处理函数
  bindViewTap: function() {
    // wx.switchTab({
    //   url: '/pages/luo/my'
    // })
    wx.reLaunch({
      url: '/pages/luo/my?id=1'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
