Page({
  onLoad(option){
    console.log(option)
  },
  data: {
    iconSize: [20, 30, 40, 50, 60, 70],
    iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ],
    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ]
  },
  onPullDownRefresh(){
    wx.getSavedFileList({
      success(res) {
        console.log(res.fileList)
      }
    })
  },
  showModal(){
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  showLoading(){
    wx.showLoading({
      title:"加载中..."
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
  showActionSheet(){
    wx.showActionSheet({
      itemList:['我','你','他'],
      success(res){
        console.log(res.tapIndex)
      },
      fail(){

      }
    })
  },
  scanCode(){
    wx.scanCode({
      onlyFromCamera: true,
      success(res) {
        console.log(res)
      }
    })
  }
})