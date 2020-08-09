// pages/op_detail/op_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: null,
    operator_name: null
  },

  // 跳转到武器详情页面
  goToWeaponPage(e){
    console.log(e.currentTarget.dataset.name)
    wx.navigateTo({
      url: '/pages/weapon_detail/weapon_detail?name='+this.data.name
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      operator_name: options.name
    })

    var self = this
    wx.request({
      url: 'https://api.ing3n.xyz/r6s/operators?name='+ options.name,
      header:{
        "content-type": "application/texts"
      },
      success(res) {
        console.log(res.data)
        self.setData({
          detail: res.data
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