
Page({
  data: {
    movies: [
      { url: '../images/1.jpg' },
      { url: '../images/2.jpg' },
      { url: '../images/3.jpg' },
      { url: '../images/3.jpg' }
    ]
  },
  onLoad: function () {

  },
  viewTap() {
    wx.navigateTo({
      url: '../micro_wish/wish'
    })
  }
}) ;