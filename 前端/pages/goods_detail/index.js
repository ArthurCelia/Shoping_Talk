// pages/goods_datail/index.js
/*
1.点击轮播图预览大图功能
  1.1给轮播图绑定点击事件
  1.2调用小程序的api
2.点击 加入购物车
  2.1 先绑定点击事件
  2.2 获取缓存中的购物车数据，数组格式
  2.3 先判断当前商品是否已经存在
  2.4 已经存在修改商品数据，执行购物车数量++,重新把购物车数组添加到缓存中
  2.5 不在在与购物车数组中，直接给购物车数组添加一个新元素，新元素带上购买数量属性num，重新把购物车数组填充回缓存中
  2.6 弹出提示
*/
import { request } from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsObj:{}
  },
  GoodsInfo:{},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {goods_id}=options;
    this.getGoodsDetail(goods_id);
  },

  //获取商品详情数据
  async getGoodsDetail(goods_id){
    const goodsObj=await request({url:"https://api-hmugo-web.itheima.net/api/public/v1/goods/detail",data:{goods_id}});
    this.GoodsInfo=goodsObj.data.message;
    console.log(this.GoodsInfo);
    this.setData({
      goodsObj:{
        goods_name:goodsObj.data.message.goods_name,
        goods_price:goodsObj.data.message.goods_price,
        //iphone部分手机不识别webp图片格式
        //最好找到后台让其进行修改
        //确保后台存在1.webp=>1.jpg
        goods_introduce:goodsObj.data.message.goods_introduce.replace(/\.webp/g,'.jpg'),
        pics:goodsObj.data.message.pics
      }
    })
  },
  //点击轮播图放大预览
  handlePreviewImage(e){
    //1.构造要预览的图片数组
    const urls= this.GoodsInfo.pics.map(v=>v.pics_mid);
    //2.接收传递过来的图片url
    const current=e.currentTarget.dataset.url;
    wx.previewImage({
      current,
      urls
    });
      
  },

  //点击加入购物车
  handleCartAdd(){
    //获取缓存中的购物车数组
    let cart=wx.getStorageSync("cart")||[];
    let index=cart.findIndex(v=>v.goods_id===this.GoodsInfo.goods_id);
    if(index===-1){
      //不存在，第一次添加
      this.GoodsInfo.num=1;
      cart.push(this.GoodsInfo);
    }else{
        //已经存在购物车数据 执行 num++
        cart[index].num++;
        console.log(this.GoodsInfo);
    }
    wx.setStorageSync("cart",cart);
    //弹窗提示
    wx.showToast({
      title: '加入成功',
      icon: 'success',
      //改为true，防止用户疯狂点击这个按钮
      mask: true
    });
  }
})