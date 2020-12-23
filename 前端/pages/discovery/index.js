// pages/luntan/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        value:"推荐",
        isActive:true
      },
      {
        id:1,
        value:"最热",
        isActive:false
      },
      {
        id:0,
        value:"最新",
        isActive:false
      },
    ],
    list:[
      {
        face_url:"/icons/add.png",
        username:"多啦B梦",
        send_timestamp:"2019-03-19 12:41:12",
        content:"正式版，仅在当前小程序为开发版或体验版时此参数有效；如果当前小程序是正式版，则打开的小程序必定是正式版。",
        total_likes:99,
        total_reciew:10,
      },
      {
        face_url:"/icons/add.png",
        username:"多啦C梦",
        send_timestamp:"2019-03-19 12:41:12",
        content:"正式版，仅在当前小程序为开发版或体验版时此参数有效；如果当前小程序是正式版，则打开的小程序必定是正式版。",
        total_likes:23,
        total_reciew:10,
      },
      {
        face_url:"/icons/add.png",
        username:"多啦D梦",
        send_timestamp:"2019-03-20 12:41:12",
        content:"正式版，仅在当前小程序为开发版或体验版时此参数有效；如果当前小程序是正式版，则打开的小程序必定是正式版。",
        total_likes:22,
        total_reciew:10,
      },
      {
        face_url:"/icons/add.png",
        username:"多啦D梦",
        send_timestamp:"2019-03-20 12:41:12",
        content:"正式版，仅在当前小程序为开发版或体验版时此参数有效；如果当前小程序是正式版，则打开的小程序必定是正式版。",
        total_likes:22,
        total_reciew:10,
      }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  handletabsItemChange(e){
    const {index}=e.detail;
    let {tabs}=this.data;
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    this.setData({
      tabs
    })
  }
})