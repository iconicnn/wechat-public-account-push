export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx3e63b6bf7a22f8df",
    // 公众号appSecret
    appSecret: "63e7fcf97ec287461f634cca96db98e8",
    // 模板消息id
    templateId: "yN1Dq-URgHe0Ui2vSH4Nqgr7YF7tH3A201EqoaVPerM",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["oUbJj6GzUToGXJNkbrsiDhGsPZLw","oUbJj6OfvjYV1DbZpWesjHnN1JoE"],
     
    // 信息配置
    // 所在省份
    province: "河南",
    // 所在城市
    city: "驻马店",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "李♥颖小仙女", "year": "1999", "date": "08-31", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2015-05-01",
    // 结婚纪念日
    marryDate: "2020-01-04"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
