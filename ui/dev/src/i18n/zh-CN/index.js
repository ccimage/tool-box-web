const messages = {
  "zh-CN": {
    mainContext: {
      title: "工具盒子",
      mainMenu: "请选择一项: ",
      language: "选择语言",
      home: "首页"
    },
    functionMenu: {
      Hash: "哈希散列",
      Password: "密码生成",
      TimeConvert: "时间转换",
      TransCode: "文本转码"
    },
    Hash: {
      plainText: "明文",
      resultText: "输出结果",
      lowerCase: "小写输出",
      upperCase: "大写输出",
      appendKey: "拼接密钥",
      repeatCount: "循环次数"
    },
    TimeConvert: {
      now: "现在",
      timeStamp: "时间戳",
      localeTime: "本地时间",
      convert: "转换",
      emptyNotify: "{param} 不能为空",
      stampLengthNotify: "请输入秒或者毫秒时间戳"
    },
    TransCode: {
      sourceText: "编码前",
      resultText: "编码后",
      encode: "编码",
      decode: "解码",
      emptyNotify: "{param}的内容不能为空"
    },
    Password: {
      password: "密码",
      length: "密码长度",
      strength: "密码强度",
      low: "低",
      veryLow: "非常低",
      high: "高",
      veryHigh: "非常高",
      normal: "一般",
      include: "使用字符",
      qualityDetail: "暴力破解大约需要尝试次数：{count}, 时间：{crackTime}{units}",
      crackCenturies: "几个世纪",
      crackDecades: "几十年",
      crackYear: "年",
      crackDay: "天",
      crackHour: "小时",
      crackMinute: "分钟",
      crackSecond: "秒",
      hint: "暴力破解速度假设为10000次/秒"
    }
  }
}
const {"zh-CN": zhCN} = messages
export default zhCN
