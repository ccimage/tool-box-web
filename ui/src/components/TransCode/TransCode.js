import {ref} from 'vue'
import {showErrorNotify} from '../notify'

export default {
    name: "TransCode",
    setup () {
      const trans = (t, s, p) => {
        return t.$t(`TransCode.${s}`, p);
      }
      const methodList = ref(["Uri", "UriComponent"]);
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
          const funcList = [encodeURI, encodeURIComponent]
          const index = methodList.value.indexOf(selectMethod.value)
          textResult.value = funcList[index](textSource.value)
        },
        decodeText() {
          if (!textResult.value) return showErrorNotify(trans(this,'emptyNotify', {param: trans(this,'resultText')}))
          const funcList = [decodeURI, decodeURIComponent]
          const index = methodList.value.indexOf(selectMethod.value)
          textSource.value = funcList[index](textResult.value)
        }
      }
    }
  }