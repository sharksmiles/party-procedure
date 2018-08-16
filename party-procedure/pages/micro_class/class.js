{
  Page({
    data: {
      msg:[]
    },
    onLoad: function () {

      wx.request({
        url: 'https://hanzhengjie.tenqent.com/index.php/Api/Weike/index', //仅为示例，并非真实的接口地址
        data: {
          x: '' ,
          y: ''
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: (res)=> {
          console.log(res.data.data);
          let resss=res.data.data;
          this.setData({
               msg:resss
          });



        }
      });

    }

  }) 
}
