// miniprogram/pages/base_function/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        name: '设备配网',
        text: '体验设备配网操作与查看示例代码文档',
        url: '/pages/function_center/device_connect/index'
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

  gotoOtherage: function (event) {
    const { dataset: { url } } = event.currentTarget
    const { list } = this.data
    let Url = url
    if(url == list[1].url) {
      Url = `${url}?urlType=dpUrl`
    }

    wx.navigateTo({
      url: Url,
    })
  },
})