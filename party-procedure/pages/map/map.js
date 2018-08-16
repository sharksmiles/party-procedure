const app = getApp()

Page({
  data: {
    scale: 18,
    latitude: "",
    longitude: "",
    markers: [],
  },

  onLoad: function () {
    var that = this;
    wx.getLocation({
      success: function (res) {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [{
            id: "1",
            latitude: res.latitude,
            longitude: res.longitude,
            width: 20,
            height: 20,
            iconPath: ""
          }],
        })
      },
    })
  }
})

