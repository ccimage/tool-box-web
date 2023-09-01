const messages = {
  'zh-CN': {
    mainContext: {
      title: '工具盒子',
      mainMenu: '请选择一项: '
    },
    functionMenu: {
      Hash: '哈希散列',
      Password: '密码生成',
      TimeConvert: '时间转换',
      TransCode: '文本转码'
    },
    Hash: {
      plainText: '明文',
      resultText: '输出结果',
      lowerCase: '小写输出',
      upperCase: '大写输出',
      appendKey: '拼接密钥',
      repeatCount: '循环次数'
    },
    TimeConvert: {
      now: "现在",
      timeStamp: "时间戳",
      localeTime: "本地时间",
      convert: "转换",
      emptyNotify: "{param} 不能为空",
      stampLengthNotify: "请输入秒或者毫秒时间戳"
    }
  }
}
const {'zh-CN': zhCN} = messages
export default zhCN
