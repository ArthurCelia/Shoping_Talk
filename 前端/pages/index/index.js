// pages/category/index.js
import { request } from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:[],
    leftMenuList:[],
    rightContent:[],
    currentIndex:0,
    scrollTop:0
  },

  Cates:[],

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*
    web中本地存储和小程序本地存储：
    web:localStorage.setItem("key","value") localStorage.getItem("key")
    小程序中：wx:setStorageSync("key","value");wx.getStorageSync("key")
    web中 不管存的什么数据都要先调用toString()，把数据变成字符串，再存入进去
    小程序：存什么类型数据，获取时候就是什么类型
    1.先判断本地存储中有没有旧的数据
    2.没有旧数据 直接发送新请求
    3.有旧数据 同时 旧的数据也没有过期，就使用本地存储中的旧数据
    */
    // const Cates=wx.getStorageSync("cates");
    // if(!Cates){
    //   this.getCates();
    // }else{
    //   if(Date.now()-Cates.time>1000*10){
    //     this.getCates();
    //   }else{
    //     this.Cates=Cates.data;
    //     let leftMenuList=this.Cates.map(v=>v.cat_name);

    //     let rightContent=this.Cates[0].children;
  
    //     this.setData({
    //       leftMenuList,
    //       rightContent
    //     })
    //   }
    // }
    this.getSwiperList(),
    this.getCates();
  },

  getSwiperList(){
    request({url:"https://www.fastmock.site/mock/3caf8f9ab79a647b69ae91f1d72141ef/_shop_01/api/lunbotu"})
    .then(result=>{
              this.setData({
          swiperList:result.data.message
        })
    })
  },

 async getCates(){
  //   request({
  //     url:"https://api-hmugo-web.itheima.net/api/public/v1/categories"
  //     //url:"/categories"   
  //   })
  //   .then(res=>{
  //     this.Cates=res.data.message;

  //     wx.setStorageSync("cates", {time:Date.now(),data:this.Cates});

  //     let leftMenuList=this.Cates.map(v=>v.cat_name);

  //     let rightContent=this.Cates[0].children;

  //     this.setData({
  //       leftMenuList,
  //       rightContent
  //     })
  //   })
      const res=await request({url:"https://www.fastmock.site/mock/3caf8f9ab79a647b69ae91f1d72141ef/_shop_01/api/goods_list"});
      this.Cates=res.data.message;
      wx.setStorageSync("cates", {time:Date.now(),data:this.Cates});

      let leftMenuList=this.Cates.map(v=>v.goods_name);

      let rightContent=this.Cates[0].children;

      this.setData({
        leftMenuList,
        rightContent
      })
   },

  handleItemTap(e){
    const {index}=e.currentTarget.dataset;
    let rightContent=this.Cates[index].children;
    this.setData({
      currentIndex:index,
      rightContent,
      scrollTop:0
    })

  }

  
})