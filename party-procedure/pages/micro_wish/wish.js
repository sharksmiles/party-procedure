
Page({
  data: {
    openid:'',
    name:'',
    tel:'',
    content:'',
    title:'',

  },
  onLoad: function () {

  },
  viewTap: function(){
    wx.request({
      url: 'https://hanzhengjie.tenqent.com/index.php/Api/Weixinyuan/add', //仅为示例，并非真实的接口地址
      data: {
        openid:'',
        name:'',
        tel:'',
        content:'',
        title:''

      },

      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: (res) =>{
        console.log(res.data)

      }
    })

  }
});
