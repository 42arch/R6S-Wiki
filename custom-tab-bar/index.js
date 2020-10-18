Component({
  options: {
    styleIsolation: 'shared',
  },
  data: {
    active: 0,
    list: [
      {
        "url": "/pages/index/index",
        "icon": "home-o",
        "text": "首页"
      },
      {
        "url": "/pages/about/about",
        "icon": "setting-o",
        "text": "关于"
      }
    ]
  },
  methods: {
    onChange(e) {
      wx.switchTab({
        url: this.data.list[e.detail].url
      });
      this.setData({ active: e.detail });
    },
    init() {
      const page = getCurrentPages().pop();
      this.setData({
     　  active: this.data.list.findIndex(item => item.url === `/${page.route}`)
      });
    }
  }
})