const messages = {
  en: {
    mainContext: {
      title: "Tool Box",
      mainMenu: "Please select one: ",
      language: "select language",
      home: "Home"
    },
    functionMenu: {
      Hash: "Hash create",
      Password: "Password generate",
      TimeConvert: "Date convert",
      TransCode: "Text transcode"
    },
    Hash: {
      plainText: "Plain text",
      resultText: "Output text",
      lowerCase: "lower case",
      upperCase: "upper case",
      appendKey: "append key",
      repeatCount: "repeat count"
    },
    TimeConvert: {
      now: "Current time",
      timeStamp: "Timestamp",
      localeTime: "Local time",
      convert: "Convert",
      emptyNotify: "{param} is required",
      stampLengthNotify: "Only seconds or millisecond timestamps are supported"
    },
    TransCode: {
      sourceText: "Origin text",
      resultText: "Encoded text",
      encode: "Encode",
      decode: "Decode",
      emptyNotify: "{param} is required"
    },
    Password: {
      password: "Password",
      length: "Password length",
      strength: "Password strength",
      low: "weak",
      veryLow: "very weak",
      high: "strong",
      veryHigh: "very strong",
      normal: "moderate",
      include: "Characters used",
      qualityDetail: "Brute-forcing takes about attempts needed: {count}, time needed: {crackTime}{units}",
      crackCenturies: "centuries",
      crackDecades: "decades",
      crackYear: "year(s)",
      crackDay: "day(s)",
      crackHour: "hour(s)",
      crackMinute: "minute(s)",
      crackSecond: "second(s)",
      hint: "The brute force cracking speed is assumed to be 10,000 times/second"
    }
  }
}
const {en} = messages;
export default en;
