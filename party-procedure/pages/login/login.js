//index.js
//获取应用实例
var app = getApp();
Page({
    data: {
        isShow: true,
        currentTab: 0,
        tel:'',
        array: [],
    },
    onLoad(){
        wx.request({
            url: 'https://hanzhengjie.tenqent.com/index.php/Api/Dangyuan/index',
            header: {
                'content-type': 'application/json' // 默认值
            },
            success:(res)=> {
                console.log(res.data.data);
                var arrays=res.data.data;
                var arraies=new Array
                for(var i=0;i<arrays.length;i++){
                    console.log(arrays[i].title);
                        arraies.push(arrays[i].title)
                }
                this.setData({
                    array:arraies
                })
            }
        })

},

    bindtel:function(e){
        //var tel=e.detail.value.replace(/\s/g,"");
        this.setData({
            tel:e.detail.value.replace(/\s/g,"")
        })
    },

    login: function(e){
       var tels=this.data.tel;
       // var that=this;
       // var tels=that.data.tel;
        wx.showToast({
            title:"登录中",
            icon:'loading',
            duration: 10000
        });
        wx.request({

            url:'https://hanzhengjie.tenqent.com/index.php/Api/Dangyuan/yzcode',
            data:{
                tel:tels
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function(res) {
                //wx.hideToast();
                console.log(res.data)
            }
        })

    },
    bindPickerChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index: e.detail.value
        });

    },
    swichNav: function (e) {
        if (this.data.currentTab === e.target.dataset.current) {
            return false;
        } else {
            var showMode = e.target.dataset.current == 0;
            this.setData({
                currentTab: e.target.dataset.current,
                isShow: showMode
            })
        }
    },
})