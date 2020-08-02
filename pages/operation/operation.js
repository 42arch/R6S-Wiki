// pages/operation/operation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    operations: null,
    opt_index: null
  },
  goOptDetail: function(e){
    this.setData({
      opt_index: e.currentTarget.dataset.name
    })
    console.log(this.data.opt_index)
    wx.navigateTo({
      url: '/pages/opt_detail/opt_detail?name=' + this.data.opt_index,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this
    wx.request({
      url: 'https://api.ing3n.xyz/r6s/operation',
      success(res){
        self.setData({
          operations: res.data.operations
        })
        console.log(res.data)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})