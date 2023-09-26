import {ref} from 'vue'
import {showErrorNotify} from '../notify'
const { Buffer } = require('buffer')

function base64Enc(data) {
  const buff = Buffer.from(data); // 默认用 utf-8 编码格式解释字符串
  const base64data = buff.toString('base64');
  return base64data;
}

function base64Dec(base64data) {
  const buff = Buffer.from(base64data, "base64"); // 默认用 utf-8 编码格式解释字符串
  const data = buff.toString();
  return data;
}

export default {
    name: "TransCode",
    setup () {
      const trans = (t, s, p) => {
        return t.$t(`TransCode.${s}`, p);
      }
      const methodList = ref(["Uri", "UriComponent", "Base64"]);
      const textSource = ref('')
      const textResult = ref('')
      const selectMethod = ref('Uri')
      return {
        methodList,
        textSource,
        textResult,
        selectMethod,
        encodeText() {
          if (!textSource.value) return showErrorNotify(trans(this,'emptyNotify', {param: trans(this,'sourceText')}))
          const funcList = [encodeURI, encodeURIComponent, base64Enc]
          const index = methodList.value.indexOf(selectMethod.value)
          textResult.value = funcList[index](textSource.value)
        },
        decodeText() {
          if (!textResult.value) return showErrorNotify(trans(this,'emptyNotify', {param: trans(this,'resultText')}))
          const funcList = [decodeURI, decodeURIComponent, base64Dec]
          const index = methodList.value.indexOf(selectMethod.value)
          textSource.value = funcList[index](textResult.value)
        }
      }
    }
  }