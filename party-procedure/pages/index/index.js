//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    movies: [
      { url: '../images/1.jpg' },
      { url: '../images/2.jpg' },
      { url: '../images/3.jpg' },
      { url: '../images/3.jpg' }
    ],
    dynamic:'党建动态',
    information:'市场信息',
    activity:'活动预告',
    informations:[],
    dynamics:[],
    activities:[]
   
  },
  onLoad: function () {
    wx.request({
      url: 'https://hanzhengjie.tenqent.com/index.php/Api/Dangjian/index', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) =>{
        var dynamics = res.data.data;
        console.log(dynamics);
        this.setData({
          dynamics:dynamics
        })
      }
    });
   
    wx.request({
      url: 'https://hanzhengjie.tenqent.com/index.php/Api/Shichang/index', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res)=> {
        var informations = res.data.data;
        console.log(informations)
        this.setData({
          informations:informations
        })
      }
    })
    wx.request({
      url: 'https://hanzhengjie.tenqent.com/index.php/Api/Yugao/index', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:  (res)=> {
        var activities = res.data.data;
        console.log(activities)
        this.setData({
          activities:activities
        })
      }
    })
  },
  tapName1: function (event) {
    wx.navigateTo({
      url: 'Dynamic_Details/index?id=0'
    })
  },
  tapName2: function (event) {
    wx.navigateTo({
      url: 'Dynamic_Details/index?id=1'
    })
  },
  tapName3: function (event) {
    wx.navigateTo({
      url: 'Dynamic_Details/index?id=2'
    })
  },
}) 