//index.js
Page({
  data: {

  },
  onLoad: function () {

  },
  viewTap: ()=> {
    wx.navigateTo({
      url: '../login/login'
    })
  },
  tapName :()=> {
    wx.navigateTo({
      url: '../micro_class/class'
    })
  },
  map:function(e){
    wx.navigateTo({
      url: '../map/map'
    })
  }


}) ;