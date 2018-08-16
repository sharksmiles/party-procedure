Page({

  data: {
    currentData: 0,
    text:[],
    text1:[],
    text2:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {

    wx.request({
      url: 'https://hanzhengjie.tenqent.com/index.php/Api/Dangjian/index', //仅为示例，并非真实的接口地址
      data: {
        x: '' ,
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:(res)=>{
        console.log(res.data.data);

        this.setData({
              text: res.data.data
            })
      }
    });
    wx.request({
      url: 'https://hanzhengjie.tenqent.com/index.php/Api/Shichang/index', //仅为示例，并非真实的接口地址
      data: {
        x: '' ,
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:(res)=>{
        console.log(res.data.data);


        this.setData({
          text1: res.data.data
        })
      }
    });
    wx.request({
      url: 'https://hanzhengjie.tenqent.com/index.php/Api/Yugao/index', //仅为示例，并非真实的接口地址
      data: {
        x: '' ,
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:(res)=>{
        console.log(res.data.data);

        this.setData({
          text2: res.data.data
        })
      }
    })
  },
  //获取当前滑块的index
  bindchange: function (e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent: function (e) {
    const that = this;

    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } else {

      that.setData({
        currentData: e.target.dataset.current
      })
    }
  }


});