// pages/opt_detail/opt_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    opt_name: null,
    opt_detail_data: null,
    full_show: false
  },
  /**
   * 显示全身像
   */
  showFull(){
    console.log("xianshi")
    this.setData({ full_show: true });
  },
  hideFull(){
    console.log("yiicnag")
    this.setData({ full_show: false });
  },
  onChange(){

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '数据加载中',
    })
    this.setData({
      opt_name: options.name
    })

    let _this = this
    wx.request({
      url: 'https://api.ing3n.xyz/r6s/operators?name=' + options.name,
      header: {
        "content-type": "application/texts"
      },
      success(res) {
        console.log(res.data)
        res.data.ability_icon = "http://ing3n.xyz/ability/" + res.data.ability_icon
        if(res.data.height == null) {
          res.data.height = "[遭到屏蔽]"
        } else {
          res.data.height = res.data.height + " 公分"
        }
        if(res.data.weight == null) {
          res.data.weight = "[遭到屏蔽]"
        } else {
          res.data.weight = res.data.weight + " 公分"
        }

        _this.setData({
          opt_detail_data: res.data
        })
        wx.hideLoading({
          success: (res) => {},
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