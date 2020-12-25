// pages/pot_detail/index.js
import { request } from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {

    postObj:{},

    pinglun:[
      [
        {},{},{},{},
      ],
      [],
      [],
      [],
    ],

    list:[
      {
        //id:1,
        face_url:"/icons/add.png",
        username:"多啦B梦",
        post_id:1,
        send_timestamp:"2019-03-19 12:41:12",
        content:"正式版，仅在当前小程序为开发版或体验版时此参数有效；如果当前小程序是正式版，则打开的小程序必定是正式版。",
        total_likes:99,
        total_reciew:10,
        pinglun:"测试评论用....."
      },
      {
        //id:2,
        face_url:"/icons/add.png",
        username:"多啦C梦",
        post_id:2,
        send_timestamp:"2019-03-19 12:41:12",
        content:"正式版，仅在当前小程序为开发版或体验版时此参数有效；如果当前小程序是正式版，则打开的小程序必定是正式版。",
        total_likes:23,
        total_reciew:10,
        pinglun:"测试评论用....."
      },
      {
        //id:3,
        face_url:"/icons/add.png",
        username:"多啦D梦",
        post_id:3,
        send_timestamp:"2019-03-20 12:41:12",
        content:"正式版，仅在当前小程序为开发版或体验版时此参数有效；如果当前小程序是正式版，则打开的小程序必定是正式版。",
        total_likes:22,
        total_reciew:10,
        pinglun:"测试评论用....."
      },
      {
        //id:4,
        face_url:"/icons/add.png",
        username:"多啦D梦",
        post_id:4,
        send_timestamp:"2019-03-20 12:41:12",
        content:"正式版，仅在当前小程序为开发版或体验版时此参数有效；如果当前小程序是正式版，则打开的小程序必定是正式版。",
        total_likes:22,
        total_reciew:10,
        pinglun:"测试评论用....."
      }

    ]

  },

  onLoad: function (options) {
    const {post_id}=options;
    this.getPostDetail(post_id);
    console.log(this.data.postObj);

  },

  getPostDetail(post_id){
    this.setData({
      postObj:{
        face_url:this.data.list[post_id].face_url,
        username:this.data.list[post_id].username,
        send_timestamp:this.data.list[post_id].send_timestamp,
        content:this.data.list[post_id].content,
        total_likes:this.data.list[post_id].total_likes,
        total_reciew:this.data.list[post_id].total_reciew,
        pinglun:this.data.list[post_id].pinglun
      }
    });
  }



})