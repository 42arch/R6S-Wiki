// pages/seasons/seasons.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    seasons_data: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this
    wx.request({
      url: 'https://api.ing3n.xyz/r6s/seasons',
      header: {
        "content-type": "application/texts"
      },
      success(res) {
        res.data.forEach(item => {
          item.image = "http://ing3n.xyz/season/" + item.year_season + ".jpg"
          item.year_season = item.year_season !== null ? item.year_season.toUpperCase() : null
        })

        _this.setData({
          seasons_data: res.data.slice(1, res.data.length)
        })
        console.log(_this.data.seasons_data)
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