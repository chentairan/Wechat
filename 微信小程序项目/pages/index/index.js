Page({
  data: {
        test:'123'
  },

  onLoad: function (options) {
    // Do some initialize when page load.
  },
  onReady: function () {
    // Do something when page ready.
  },
  onShow: function () {
    // Do something when page show.
  },
  onHide: function () {
    // Do something when page hide.
  },
  onUnload: function () {
    // Do something when page close.
  },
  onPullDownRefresh: function () {
    // Do something when pull down.
  },
  onReachBottom: function () {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
  },
  // Event handler.
  handleTap1: function () {
   this.setData({test:'00000'})
  },
  handleTap2: function () {
    this.setData({ test: '111111' })
  },
  handleTap3: function () {
    this.setData({ test: '222222' })
  },
})