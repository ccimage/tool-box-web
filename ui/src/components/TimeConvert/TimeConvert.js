import {ref} from 'vue'
import {showErrorNotify} from '../notify'



export default {
    name: "TimeConvert",
    props: {
      value: {
      }    
    },
    setup () {
      const trans = (t, s, p) => {
        return t.$t(`TimeConvert.${s}`, p);
      }
      const timeStamp = ref(Date.now())
      const localeString = ref(new Date().toLocaleString())

      const inputTimeStamp = ref('')
      const inputLocaleTime = ref('')
      const resultLocaleTime = ref('')
      const resultTimeStamp = ref('')
      setInterval(() => {
        timeStamp.value = Date.now()
        localeString.value = new Date().toLocaleString()
      }, 1000)
      return {
        timeStamp, 
        localeString, 
        inputTimeStamp,
        inputLocaleTime,
        resultLocaleTime,
        resultTimeStamp,
        timeStampClick(){
          inputTimeStamp.value = timeStamp.value.toString();
        },
        localeStringClick(){
          inputLocaleTime.value = localeString.value;
        },
        convertToLocale(){
          if (!inputTimeStamp.value) return showErrorNotify(trans(this,'emptyNotify', {param: trans(this,'timeStamp')}))
          if (inputTimeStamp.value.length !== 10 && inputTimeStamp.value.length !== 13) return  showErrorNotify(trans(this,'stampLengthNotify'))
          const stamp = inputTimeStamp.value.length === 10 ? Number(inputTimeStamp.value) * 1000 : Number(inputTimeStamp.value)
          resultLocaleTime.value = new Date(stamp).toLocaleString();
        },
        convertToStamp(){
          if (!inputLocaleTime.value) return showErrorNotify(trans(this,'emptyNotify', {param: trans(this,'localeTime')}))
          resultTimeStamp.value = new Date(inputLocaleTime.value).getTime();
        }
    }
    }
  }