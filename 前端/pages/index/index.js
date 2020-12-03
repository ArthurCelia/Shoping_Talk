//Page Object
Page({
  data: {
    switerList:[],
    catesList:[]
  },
  //options(Object)
  /*
  onLoad: function(options){
    var reqTask = wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
      success: (result)=>{
        this.setData({
          swiperList:result.data.message
        })
      }
    });
  },
 */
  skip1:function (params) {
    wx.redirectTo({
      url: '/pages/index_2/index_2'
    })
    
  }

  
});