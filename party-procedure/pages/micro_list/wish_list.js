
Page({
  data: {
    pages:[],
  },
  onLoad: function () {
    wx.request({
      url: 'https://hanzhengjie.tenqent.com/index.php/Api/Weixinyuan/index', //仅为示例，并非真实的接口地址

      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res)=> {
        console.log(res.data.data);
        var pages =res.data.data
        this.setData({
          pages: pages

        });
      }
    });
  },
  viewTap: function() {
    wx.navigateTo({
      url: '../micro_wish-submit/wish'
    });
  },
  viewTap1: function() {
    wx.navigateTo({
      url: '../micro_mywish-submit/wish'
    });
  }
});
