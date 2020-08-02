// pages/operator/operator.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    operators: null,
    name: null
  },
  goDetail: function(e){
    this.setData({
      name: e.currentTarget.dataset.name
    })
    console.log(this.data.name)
    wx.navigateTo({
      url: '/pages/op_detail/op_detail?name='+this.data.name,
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
      url : "https://api.ing3n.xyz/r6s/operators/simple",
      data: {},
      header:{
          // "Content-Type":"application/json"
          "content-type": "application/texts"
      },
      success(res){
        // console.log(res.data)
        self.setData({
          operators: res.data
        })
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