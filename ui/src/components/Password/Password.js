import {ref} from 'vue'
import * as zxcvbn from 'zxcvbn'

function generateRandomString(length, options) {
  let characters = '';
  if (options.includes('U')) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (options.includes('L')) characters += 'abcdefghijklmnopqrstuvwxyz';
  if (options.includes('N')) characters += '0123456789';
  if (options.includes('S')) characters += '~!@#$%^&*()_,.';

  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
export default {
    name: 'Password',
    setup() {
      const colors = ['negative','red', 'orange', 'light-green', 'green']
      const qualityList = ['veryLow', 'low', 'normal', 'high', 'veryHigh']
      const getQualityMeasure = (seconds) => {
        if (seconds < 1) return {text: '<1', units: 'crackSecond'}
        if (seconds < 120) return {text: Math.round(seconds).toString(), units: 'crackSecond'}
        if (seconds < 3600) return {text: Math.round(seconds / 60).toString(), units: 'crackMinute'}
        if (seconds < 3600 * 24) return {text: Math.round(seconds / 60 / 60).toString(), units: 'crackHour'}
        if (seconds < 3600 * 24 * 365) return {text: Math.round(seconds / 60 / 60 / 24).toString(), units: 'crackDay'}
        if (seconds < 3600 * 24 * 365 * 10) return {text: Math.round(seconds / 60 / 60 / 24 / 365).toString(), units: 'crackYear'}
        if (seconds < 3600 * 24 * 365 * 100) return {text: "", units: 'crackDecades'}
        return {text: "", units: 'crackCenturies'}
      }


      const pwdLength = ref(15)
      const includeLetters = [{ label: 'ABC', value: 'U', color: 'red' },
      { label: 'abc', value: 'L', color: 'orange' },
      { label: '123', value: 'N', color: 'primary' },
      { label: '$%@', value: 'S', color: 'green' }];
      const selectLetters = ref(['U','L','N'])
      const password = ref('')
      const resultColor = ref('light-green')
      const quality = ref('normal')
      const count = ref(0)
      const crackTime = ref(0)
      const units = ref('')
      const checkQuality = () => {
        const checkRet = zxcvbn(password.value)
        console.log(checkRet)
        resultColor.value = colors[checkRet.score]
        quality.value = qualityList[checkRet.score]
        count.value = checkRet.guesses
        const crack = getQualityMeasure(Number(checkRet.crack_times_seconds.offline_slow_hashing_1e4_per_second))
        crackTime.value = crack.text
        units.value = crack.units
      }
      return {
        pwdLength, 
        includeLetters, 
        selectLetters,
        password,
        resultColor,
        quality,
        crackTime,
        count,
        units,
        checkQuality,        
        generatePassword(...args) {
          console.log(...args);
          password.value = generateRandomString(pwdLength.value, selectLetters.value)
          checkQuality();
        }
      }
    },
    created(){
      this.generatePassword()
    }
  }