import {ref} from 'vue'
import crypto from 'crypto'

export default {
    name: "Hash",
    setup () {
        const textSource = ref('');
        const textResult = ref('');
        const algorithmList = ref(['md5', 'sha1', 'sha256', 'sha512']);
        const upperCase = ref('lowerCase');
        const textKey = ref('');
        const repeatCount = ref(1);
        return {
          algorithmList: algorithmList,
          textSource,
          textResult,
          upperCase,
          textKey,
          repeatCount,
          onItemClick (method) {
            const first = algorithmList.value.splice(algorithmList.value.indexOf(method), 1)[0];
            algorithmList.value.unshift(first);
            const hash = crypto.createHash(method);
            for(let i = 0; i < repeatCount.value; i++) {
                hash.update(textSource.value).update(textKey.value);
            }
            const hexRet = hash.digest('hex');
            textResult.value = upperCase.value === 'upperCase' ? hexRet.toUpperCase() : hexRet.toLowerCase();
          }
        }
      }
  }