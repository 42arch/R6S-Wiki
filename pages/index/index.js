// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    opt_data: null,
    opt_atk_data: null,
    opt_def_data: null,
    height: 0
  },
  methods: {
    chunk: function(array, size) {
      let newArray = []
      for(let i=0; i<array.length;i+=size) {
        newArray.push(array.slice(i, i + size))
      }
      return newArray
    }
  },
  goToDetail(e){
    if(e.currentTarget.dataset.name) {
      wx.navigateTo({
        url: '/pages/opt_detail/opt_detail?name='+this.data.op_name
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this
    wx.request({
      url: 'https://api.ing3n.xyz/r6s/operators/simple',
      header: {
        "content-type": "application/texts"
      },
      success(res) {
        let atk_data = []
        let def_data = []
        res.data.forEach(item => {
          if(item.role === 'atk') {
            atk_data.push(item)
          } else {
            def_data.push(item)
          }
        })

        _this.setData({
          opt_data: res.data,
          opt_atk_data: _this.methods.chunk(atk_data, 2),
          opt_def_data: _this.methods.chunk(def_data, 2)
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
    this.getTabBar().init()
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