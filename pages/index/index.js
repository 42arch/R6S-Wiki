//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  toOperatorPage: function () {
    wx.navigateTo({
      url: '/pages/operator/operator'
    })
  },
  toOperationPage: function () {
    wx.navigateTo({
      url: '/pages/operation/operation'
    })
  },
  toMapPage: function () {
    wx.navigateTo({
      url: '/pages/map/map'
    })
  },
  toAffiliationPage: function () {
    wx.navigateTo({
      url: '/pages/affiliation/affiliation'
    })
  }
})
