(()=>{var e={2385:(e,t,o)=>{var a={"./Error404.vue":9973,"./Hash.vue":5349,"./Index.vue":498,"./Password.vue":9592,"./TimeConvert.vue":3650,"./TransCode.vue":1674};function l(e){return Promise.resolve().then((()=>{if(!o.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}var l=a[e];return o(l)}))}l.keys=()=>Object.keys(a),l.id=2385,e.exports=l},7057:(e,t,o)=>{var a={"./Error404.vue":9973,"./Hash.vue":5349,"./Index.vue":498,"./Password.vue":9592,"./TimeConvert.vue":3650,"./TransCode.vue":1674};function l(e){var t=n(e);return o(t)}function n(e){if(!o.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}l.keys=function(){return Object.keys(a)},l.resolve=n,e.exports=l,l.id=7057},6967:(e,t,o)=>{"use strict";var a=o(7004),l=o(604),n=o(7071),r=o(5008);function s(e,t,o,a,l,n){const s=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(s)}const c={name:"App"};var u=o(446);const i=(0,u.Z)(c,[["render",s]]),d=i;var m=o(9930),p=o(7324),v=o(6010);const h=v.Z.map((e=>({path:e.path,component:()=>o(2385)("./"+e.file+".vue")}))),f=[{path:"/index.html",component:()=>Promise.all([o.e(736),o.e(133)]).then(o.bind(o,9133)),children:[{path:"",component:()=>Promise.resolve().then(o.bind(o,498))}]},{path:"/",component:()=>Promise.all([o.e(736),o.e(133)]).then(o.bind(o,9133)),children:[{path:"",component:()=>Promise.resolve().then(o.bind(o,498))}].concat(h)},{path:"/:catchAll(.*)*",component:()=>Promise.resolve().then(o.bind(o,9973))}],w=f,g=(0,m.BC)((function(){const e=p.r5,t=(0,p.p7)({scrollBehavior:()=>({left:0,top:0}),routes:w,history:e("")});return t}));async function b(e,t){const o=e(d);o.use(l.Z,t);const a=(0,n.Xl)("function"===typeof g?await g({}):g);return{app:o,router:a}}var C=o(2815),y=o(1134);const k={config:{dark:"auto"},plugins:{LocalStorage:C.Z,Notify:y.Z}},_="";async function x({app:e,router:t},o){let a=!1;const l=e=>{try{return t.resolve(e).href}catch(o){}return Object(e)===e?null:e},n=e=>{if(a=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=l(e);null!==t&&(window.location.href=t,window.location.reload())},r=window.location.href.replace(window.location.origin,"");for(let c=0;!1===a&&c<o.length;c++)try{await o[c]({app:e,router:t,ssrContext:null,redirect:n,urlPath:r,publicPath:_})}catch(s){return s&&s.url?void n(s.url):void console.error("[Quasar] boot error:",s)}!0!==a&&(e.use(t),e.mount("#q-app"))}b(a.ri,k).then((e=>{const[t,a]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(o.bind(o,2303))]).then((t=>{const o=a(t).filter((e=>"function"===typeof e));x(e,o)}))}))},2303:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>p});var a=o(9930),l=o(5017),n=o(1467);const r={"zh-CN":{mainContext:{title:"工具盒子",mainMenu:"请选择一项: ",language:"选择语言",home:"首页"},functionMenu:{Hash:"哈希散列",Password:"密码生成",TimeConvert:"时间转换",TransCode:"文本转码"},Hash:{plainText:"明文",resultText:"输出结果",lowerCase:"小写输出",upperCase:"大写输出",appendKey:"拼接密钥",repeatCount:"循环次数"},TimeConvert:{now:"现在",timeStamp:"时间戳",localeTime:"本地时间",convert:"转换",emptyNotify:"{param} 不能为空",stampLengthNotify:"请输入秒或者毫秒时间戳"},TransCode:{sourceText:"编码前",resultText:"编码后",encode:"编码",decode:"解码",emptyNotify:"{param}的内容不能为空"},Password:{password:"密码",length:"密码长度",strength:"密码强度",low:"低",veryLow:"非常低",high:"高",veryHigh:"非常高",normal:"一般",include:"使用字符",qualityDetail:"暴力破解大约需要尝试次数：{count}, 时间：{crackTime}{units}",crackCenturies:"几个世纪",crackDecades:"几十年",crackYear:"年",crackDay:"天",crackHour:"小时",crackMinute:"分钟",crackSecond:"秒",hint:"暴力破解速度假设为10000次/秒"}}},{"zh-CN":s}=r,c=s,u={en:{mainContext:{title:"Tool Box",mainMenu:"Please select one: ",language:"select language",home:"Home"},functionMenu:{Hash:"Hash create",Password:"Password generate",TimeConvert:"Date convert",TransCode:"Text transcode"},Hash:{plainText:"Plain text",resultText:"Output text",lowerCase:"lower case",upperCase:"upper case",appendKey:"append key",repeatCount:"repeat count"},TimeConvert:{now:"Current time",timeStamp:"Timestamp",localeTime:"Local time",convert:"Convert",emptyNotify:"{param} is required",stampLengthNotify:"Only seconds or millisecond timestamps are supported"},TransCode:{sourceText:"Origin text",resultText:"Encoded text",encode:"Encode",decode:"Decode",emptyNotify:"{param} is required"},Password:{password:"Password",length:"Password length",strength:"Password strength",low:"weak",veryLow:"very weak",high:"strong",veryHigh:"very strong",normal:"moderate",include:"Characters used",qualityDetail:"Brute-forcing takes about attempts needed: {count}, time needed: {crackTime}{units}",crackCenturies:"centuries",crackDecades:"decades",crackYear:"year(s)",crackDay:"day(s)",crackHour:"hour(s)",crackMinute:"minute(s)",crackSecond:"second(s)",hint:"The brute force cracking speed is assumed to be 10,000 times/second"}}},{en:i}=u,d=i,m={"zh-CN":c,en:d},p=(0,a.xr)((({app:e})=>{const t=(0,n.o)({legacy:!1,locale:"zh-CN",globalInjection:!0,messages:m});e.use(t).use(l.ZP)}))},6010:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});const a=o(7057).keys().map((e=>e.slice(2).replace(".vue",""))).filter((e=>"Index"!==e&&"Error404"!==e)).map((e=>({file:e,title:e,path:`/${e}`})))},5017:(e,t,o)=>{"use strict";o.d(t,{ZP:()=>Me,i8:()=>Ie});var a={};o.r(a),o.d(a,{Components:()=>Ne,install:()=>je,version:()=>Ie});var l=o(5008),n=o(6594);const r={class:"q-pa-md"},s={class:"row"},c={class:"row"},u={class:"col-lg-1 col-md-4 col-xs-6"},i={class:"col-lg-1 col-md-4 col-xs-6"},d={class:"col-lg-2 col-md-4 col-xs-12"},m={class:"col-lg-8 col-xs-12"},p={class:"row"};function v(e,t,o,a,v,h){const f=(0,l.up)("q-input"),w=(0,l.up)("q-item-label"),g=(0,l.up)("q-item-section"),b=(0,l.up)("q-item"),C=(0,l.up)("q-list"),y=(0,l.up)("q-btn-dropdown"),k=(0,l.up)("q-toggle"),_=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.iD)("div",r,[(0,l._)("div",s,[(0,l.Uk)((0,n.zw)(e.$t("Hash.plainText"))+": ",1),(0,l.Wm)(f,{class:"full-row",modelValue:e.textSource,"onUpdate:modelValue":t[0]||(t[0]=t=>e.textSource=t),filled:"",autogrow:""},null,8,["modelValue"])]),(0,l._)("div",c,[(0,l._)("div",u,[(0,l.Wm)(y,{split:"",color:"primary",label:e.algorithmList[0],onClick:t[1]||(t[1]=t=>e.onItemClick(e.algorithmList[0])),style:{width:"120px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(C,null,{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.algorithmList.slice(1),(t=>(0,l.wy)(((0,l.wg)(),(0,l.j4)(b,{clickable:"",onClick:o=>e.onItemClick(t),key:t},{default:(0,l.w5)((()=>[(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(t),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])),[[_]]))),128))])),_:1})])),_:1},8,["label"])]),(0,l._)("div",i,[(0,l.Wm)(k,{label:e.$t(`Hash.${e.upperCase}`),color:"pink","false-value":"lowerCase","true-value":"upperCase",modelValue:e.upperCase,"onUpdate:modelValue":[t[2]||(t[2]=t=>e.upperCase=t),t[3]||(t[3]=t=>e.onItemClick(e.algorithmList[0]))]},null,8,["label","modelValue"])]),(0,l._)("div",d,[(0,l.Wm)(f,{type:"number",standout:"",modelValue:e.repeatCount,"onUpdate:modelValue":t[4]||(t[4]=t=>e.repeatCount=t),label:e.$t("Hash.repeatCount"),max:10,min:1},null,8,["modelValue","label"])]),(0,l._)("div",m,[(0,l.Wm)(f,{standout:"",modelValue:e.textKey,"onUpdate:modelValue":t[5]||(t[5]=t=>e.textKey=t),label:e.$t("Hash.appendKey")},null,8,["modelValue","label"])])]),(0,l._)("div",p,[(0,l.Wm)(f,{class:"full-row",modelValue:e.textResult,"onUpdate:modelValue":t[6]||(t[6]=t=>e.textResult=t),placeholder:e.$t("Hash.resultText")},null,8,["modelValue","placeholder"])])])}o(5430);var h=o(7071),f=o(7059);const w={name:"Hash",setup(){const e=(0,h.iH)(""),t=(0,h.iH)(""),o=(0,h.iH)(["md5","sha1","sha256","sha512"]),a=(0,h.iH)("lowerCase"),l=(0,h.iH)(""),n=(0,h.iH)(1);return{algorithmList:o,textSource:e,textResult:t,upperCase:a,textKey:l,repeatCount:n,onItemClick(r){const s=o.value.splice(o.value.indexOf(r),1)[0];o.value.unshift(s);const c=f.createHash(r);for(let t=0;t<n.value;t++)c.update(e.value).update(l.value);const u=c.digest("hex");t.value="upperCase"===a.value?u.toUpperCase():u.toLowerCase()}}}};var g=o(446),b=o(6370),C=o(5812),y=o(7405),k=o(1297),_=o(8097),x=o(2156),T=o(9264),S=o(5598),Z=o(1288),P=o.n(Z);const H=(0,g.Z)(w,[["render",v]]),W=H;P()(w,"components",{QInput:b.Z,QBtnDropdown:C.Z,QList:y.Z,QItem:k.Z,QItemSection:_.Z,QItemLabel:x.Z,QToggle:T.Z}),P()(w,"directives",{ClosePopup:S.Z});const q={class:"q-pa-md"},V={class:"row"},L={class:"row"},U={class:"row"},$={class:"row"},Q={class:"col col-12 items-start"},O={class:"row"},D={class:"col col-auto"},N={class:"col col-auto"};function I(e,t,o,a,r,s){const c=(0,l.up)("q-badge"),u=(0,l.up)("q-slider"),i=(0,l.up)("q-option-group"),d=(0,l.up)("q-btn"),m=(0,l.up)("q-input"),p=(0,l.up)("q-chip");return(0,l.wg)(),(0,l.iD)("div",q,[(0,l._)("div",V,[(0,l.Wm)(c,{color:"primary"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.$t("Password.length")),1)])),_:1}),(0,l.Wm)(u,{modelValue:e.pwdLength,"onUpdate:modelValue":t[0]||(t[0]=t=>e.pwdLength=t),min:3,max:50,step:1,label:"",onChange:e.generatePassword},null,8,["modelValue","onChange"])]),(0,l._)("div",L,[(0,l.Wm)(c,{color:"primary"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.$t("Password.include")),1)])),_:1})]),(0,l._)("div",U,[(0,l.Wm)(i,{options:e.includeLetters,type:"checkbox",modelValue:e.selectLetters,"onUpdate:modelValue":[t[1]||(t[1]=t=>e.selectLetters=t),e.generatePassword],inline:""},null,8,["options","modelValue","onUpdate:modelValue"])]),(0,l._)("div",$,[(0,l._)("div",Q,[(0,l.Wm)(m,{inline:"","label-color":e.resultColor,outlined:"",modelValue:e.password,"onUpdate:modelValue":t[2]||(t[2]=t=>e.password=t),label:e.$t("Password.password"),onBlur:e.checkQuality},{append:(0,l.w5)((()=>[(0,l.Wm)(c,{color:e.resultColor},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.$t("Password.strength")+e.$t(`Password.${e.quality}`)),1)])),_:1},8,["color"])])),prepend:(0,l.w5)((()=>[(0,l.Wm)(d,{round:"",flat:"",icon:"refresh",onClick:e.generatePassword},null,8,["onClick"])])),_:1},8,["label-color","modelValue","label","onBlur"])])]),(0,l._)("div",O,[(0,l._)("div",D,[(0,l.Wm)(p,{color:e.resultColor,"text-color":"white"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.$t("Password.qualityDetail",{count:e.count,crackTime:e.crackTime,units:e.$t(`Password.${e.units}`)})),1)])),_:1},8,["color"])]),(0,l._)("div",N,[(0,l.Wm)(p,{color:"gray",icon:"info"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.$t("Password.hint")),1)])),_:1})])])])}var j=o(4489);function M(e,t){let o="";t.includes("U")&&(o+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"),t.includes("L")&&(o+="abcdefghijklmnopqrstuvwxyz"),t.includes("N")&&(o+="0123456789"),t.includes("S")&&(o+="~!@#$%^&*()_,.");let a="";for(let l=0;l<e;l++)a+=o.charAt(Math.floor(Math.random()*o.length));return a}const B={name:"Password",setup(){const e=["negative","red","orange","light-green","green"],t=["veryLow","low","normal","high","veryHigh"],o=e=>e<1?{text:"<1",units:"crackSecond"}:e<120?{text:Math.round(e).toString(),units:"crackSecond"}:e<3600?{text:Math.round(e/60).toString(),units:"crackMinute"}:e<86400?{text:Math.round(e/60/60).toString(),units:"crackHour"}:e<31536e3?{text:Math.round(e/60/60/24).toString(),units:"crackDay"}:e<31536e4?{text:Math.round(e/60/60/24/365).toString(),units:"crackYear"}:e<31536e5?{text:"",units:"crackDecades"}:{text:"",units:"crackCenturies"},a=(0,h.iH)(15),l=[{label:"ABC",value:"U",color:"red"},{label:"abc",value:"L",color:"orange"},{label:"123",value:"N",color:"primary"},{label:"$%@",value:"S",color:"green"}],n=(0,h.iH)(["U","L","N"]),r=(0,h.iH)(""),s=(0,h.iH)("light-green"),c=(0,h.iH)("normal"),u=(0,h.iH)(0),i=(0,h.iH)(0),d=(0,h.iH)(""),m=()=>{const a=j(r.value);s.value=e[a.score],c.value=t[a.score],u.value=a.guesses;const l=o(Number(a.crack_times_seconds.offline_slow_hashing_1e4_per_second));i.value=l.text,d.value=l.units};return{pwdLength:a,includeLetters:l,selectLetters:n,password:r,resultColor:s,quality:c,crackTime:i,count:u,units:d,checkQuality:m,generatePassword(...e){console.log(...e),r.value=M(a.value,n.value),m()}}},created(){this.generatePassword()}};var z=o(7582),E=o(6380),R=o(5515),A=o(8472),K=o(6632);const Y=(0,g.Z)(B,[["render",I]]),F=Y;P()(B,"components",{QBadge:z.Z,QSlider:E.Z,QOptionGroup:R.Z,QInput:b.Z,QBtn:A.Z,QChip:K.Z});const G={class:"q-pa-md"},X={class:"row"},J={class:"col col-sm-5 col-md-3"},ee=(0,l._)("div",{class:"col col-auto"},[(0,l._)("span",null," <- -> ")],-1),te={class:"col col-sm-5 col-md-3"},oe={class:"row"},ae={class:"col col-sm-5 col-md-3"},le={class:"col col-auto"},ne={class:"col col-sm-5 col-md-3"},re={class:"row"},se={class:"col col-sm-5 col-md-3"},ce={class:"col col-auto"},ue={class:"col col-sm-5 col-md-3"};function ie(e,t,o,a,r,s){const c=(0,l.up)("q-chip"),u=(0,l.up)("q-input"),i=(0,l.up)("q-btn");return(0,l.wg)(),(0,l.iD)("div",G,[(0,l._)("div",X,[(0,l._)("div",J,[(0,l.Wm)(c,{clickable:"",onClick:e.timeStampClick,icon:"alarm"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.timeStamp),1)])),_:1},8,["onClick"])]),ee,(0,l._)("div",te,[(0,l.Wm)(c,{clickable:"",onClick:e.localeStringClick,icon:"alarm"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.localeString),1)])),_:1},8,["onClick"])])]),(0,l._)("div",oe,[(0,l._)("div",ae,[(0,l.Wm)(u,{standout:"",modelValue:e.inputTimeStamp,"onUpdate:modelValue":t[0]||(t[0]=t=>e.inputTimeStamp=t),label:e.$t("TimeConvert.timeStamp")},null,8,["modelValue","label"])]),(0,l._)("div",le,[(0,l.Wm)(i,{color:"primary",label:e.$t("TimeConvert.convert"),onClick:t[1]||(t[1]=t=>e.convertToLocale())},null,8,["label"])]),(0,l._)("div",ne,[(0,l.Wm)(u,{standout:"",modelValue:e.resultLocaleTime,"onUpdate:modelValue":t[2]||(t[2]=t=>e.resultLocaleTime=t),label:e.$t("TimeConvert.localeTime")},null,8,["modelValue","label"])])]),(0,l._)("div",re,[(0,l._)("div",se,[(0,l.Wm)(u,{standout:"",modelValue:e.inputLocaleTime,"onUpdate:modelValue":t[3]||(t[3]=t=>e.inputLocaleTime=t),label:e.$t("TimeConvert.localeTime")},null,8,["modelValue","label"])]),(0,l._)("div",ce,[(0,l.Wm)(i,{color:"primary",label:e.$t("TimeConvert.convert"),onClick:t[4]||(t[4]=t=>e.convertToStamp())},null,8,["label"])]),(0,l._)("div",ue,[(0,l.Wm)(u,{standout:"",modelValue:e.resultTimeStamp,"onUpdate:modelValue":t[5]||(t[5]=t=>e.resultTimeStamp=t),label:e.$t("TimeConvert.timeStamp")},null,8,["modelValue","label"])])])])}var de=o(1134);function me(e){de.Z.create({type:"negative",message:e})}const pe={name:"TimeConvert",props:{value:{}},setup(){const e=(e,t,o)=>e.$t(`TimeConvert.${t}`,o),t=(0,h.iH)(Date.now()),o=(0,h.iH)((new Date).toLocaleString()),a=(0,h.iH)(""),l=(0,h.iH)(""),n=(0,h.iH)(""),r=(0,h.iH)("");return setInterval((()=>{t.value=Date.now(),o.value=(new Date).toLocaleString()}),1e3),{timeStamp:t,localeString:o,inputTimeStamp:a,inputLocaleTime:l,resultLocaleTime:n,resultTimeStamp:r,timeStampClick(){a.value=t.value.toString()},localeStringClick(){l.value=o.value},convertToLocale(){if(!a.value)return me(e(this,"emptyNotify",{param:e(this,"timeStamp")}));if(10!==a.value.length&&13!==a.value.length)return me(e(this,"stampLengthNotify"));const t=10===a.value.length?1e3*Number(a.value):Number(a.value);n.value=new Date(t).toLocaleString()},convertToStamp(){if(!l.value)return me(e(this,"emptyNotify",{param:e(this,"localeTime")}));r.value=new Date(l.value).getTime()}}}},ve=(0,g.Z)(pe,[["render",ie]]),he=ve;P()(pe,"components",{QChip:K.Z,QInput:b.Z,QBtn:A.Z});const fe={class:"q-pa-md"},we={class:"row"},ge={class:"row"},be={class:"col col-sm-2 col-md-2 col-lg-2"},Ce={class:"col-auto"},ye={class:"col-auto"},ke={class:"row"};function _e(e,t,o,a,r,s){const c=(0,l.up)("q-input"),u=(0,l.up)("q-select"),i=(0,l.up)("q-btn");return(0,l.wg)(),(0,l.iD)("div",fe,[(0,l._)("div",we,[(0,l.Uk)((0,n.zw)(e.$t("TransCode.sourceText"))+": ",1),(0,l.Wm)(c,{class:"full-row",modelValue:e.textSource,"onUpdate:modelValue":t[0]||(t[0]=t=>e.textSource=t),filled:"",autogrow:""},null,8,["modelValue"])]),(0,l._)("div",ge,[(0,l._)("div",be,[(0,l.Wm)(u,{modelValue:e.selectMethod,"onUpdate:modelValue":t[1]||(t[1]=t=>e.selectMethod=t),options:e.methodList,label:""},null,8,["modelValue","options"])]),(0,l._)("div",Ce,[(0,l.Wm)(i,{color:"primary",icon:"expand_more",label:e.$t("TransCode.encode"),onClick:t[2]||(t[2]=t=>e.encodeText())},null,8,["label"])]),(0,l._)("div",ye,[(0,l.Wm)(i,{color:"primary",icon:"expand_less",label:e.$t("TransCode.decode"),onClick:t[3]||(t[3]=t=>e.decodeText())},null,8,["label"])])]),(0,l._)("div",ke,[(0,l.Uk)((0,n.zw)(e.$t("TransCode.resultText"))+": ",1),(0,l.Wm)(c,{class:"full-row",modelValue:e.textResult,"onUpdate:modelValue":t[4]||(t[4]=t=>e.textResult=t),filled:"",autogrow:""},null,8,["modelValue"])])])}const{Buffer:xe}=o(2042);function Te(e){const t=xe.from(e),o=t.toString("base64");return o}function Se(e){const t=xe.from(e,"base64"),o=t.toString();return o}const Ze={name:"TransCode",setup(){const e=(e,t,o)=>e.$t(`TransCode.${t}`,o),t=(0,h.iH)(["Uri","UriComponent","Base64"]),o=(0,h.iH)(""),a=(0,h.iH)(""),l=(0,h.iH)("Uri");return{methodList:t,textSource:o,textResult:a,selectMethod:l,encodeText(){if(!o.value)return me(e(this,"emptyNotify",{param:e(this,"sourceText")}));const n=[encodeURI,encodeURIComponent,Te],r=t.value.indexOf(l.value);a.value=n[r](o.value)},decodeText(){if(!a.value)return me(e(this,"emptyNotify",{param:e(this,"resultText")}));const n=[decodeURI,decodeURIComponent,Se],r=t.value.indexOf(l.value);o.value=n[r](a.value)}}}};var Pe=o(4363);const He=(0,g.Z)(Ze,[["render",_e]]),We=He;P()(Ze,"components",{QInput:b.Z,QSelect:Pe.Z,QBtn:A.Z});const qe={class:"q-pa-md"};function Ve(e,t,o,a,n,r){const s=(0,l.up)("q-breadcrumbs-el"),c=(0,l.up)("q-breadcrumbs");return(0,l.wg)(),(0,l.iD)("div",qe,[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(s,{label:e.$t("mainContext.home"),icon:"home",to:"/"},null,8,["label"]),(0,l.Wm)(s,{label:e.$t(`functionMenu.${a.param}`)},null,8,["label"])])),_:1})])}const Le={name:"BreadCrumbs",setup(){const e=(0,h.iH)("");return{param:e}},created(){const e=window.location.hash;console.log("location =",window.location),this.param=e.substring(e.lastIndexOf("/")+1)}};var Ue=o(534),$e=o(2712);const Qe=(0,g.Z)(Le,[["render",Ve]]),Oe=Qe;P()(Le,"components",{QBreadcrumbs:Ue.Z,QBreadcrumbsEl:$e.Z});const De=[Oe,W,F,he,We],Ne=De,Ie="0.0.1";function je(e){Ne.forEach((t=>{e.component(t.name,t)}))}const Me=a},9973:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>v});var a=o(5008);const l={class:"fullscreen bg-blue text-white text-center q-pa-md flex flex-center"},n=(0,a._)("div",{style:{"font-size":"30vh"}}," 404 ",-1),r=(0,a._)("div",{class:"text-h2",style:{opacity:".4"}}," Oops. Nothing here... ",-1);function s(e,t,o,s,c,u){const i=(0,a.up)("q-btn");return(0,a.wg)(),(0,a.iD)("div",l,[(0,a._)("div",null,[n,r,(0,a.Wm)(i,{class:"q-mt-xl",color:"white","text-color":"blue",unelevated:"",to:"/",label:"Go Home","no-caps":""})])])}const c=(0,a.aZ)({name:"Error404"});var u=o(446),i=o(8472),d=o(1288),m=o.n(d);const p=(0,u.Z)(c,[["render",s]]),v=p;m()(c,"components",{QBtn:i.Z})},5349:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>d});var a=o(5008);function l(e,t){const o=(0,a.up)("BreadCrumbs"),l=(0,a.up)("Hash",!0),n=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(n,{padding:""},{default:(0,a.w5)((()=>[(0,a.Wm)(o),(0,a.Wm)(l)])),_:1})}var n=o(446),r=o(4237),s=o(1288),c=o.n(s);const u={},i=(0,n.Z)(u,[["render",l],["__scopeId","data-v-2b570c73"]]),d=i;c()(u,"components",{QPage:r.Z})},498:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>g});var a=o(5008),l=o(6594);const n={class:"text-h4 q-mb-md"};function r(e,t,o,r,s,c){const u=(0,a.up)("q-icon"),i=(0,a.up)("q-item-section"),d=(0,a.up)("q-item"),m=(0,a.up)("q-list"),p=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(p,{padding:"",class:"row justify-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{dense:"",class:"list"},{default:(0,a.w5)((()=>[(0,a._)("div",n,(0,l.zw)(e.$t("mainContext.mainMenu")),1),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.pages,(t=>((0,a.wg)(),(0,a.j4)(d,{key:t.path,to:t.path},{default:(0,a.w5)((()=>[(0,a.Wm)(i,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{name:"pages"})])),_:1}),(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.$t(`functionMenu.${t.title}`)),1)])),_:2},1024),(0,a.Wm)(i,{side:""},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{name:"chevron_right"})])),_:1})])),_:2},1032,["to"])))),128))])),_:1})])),_:1})}var s=o(6010);const c={setup(){return{pages:s.Z}}};var u=o(446),i=o(4237),d=o(7405),m=o(1297),p=o(8097),v=o(2254),h=o(1288),f=o.n(h);const w=(0,u.Z)(c,[["render",r],["__scopeId","data-v-57550ce1"]]),g=w;f()(c,"components",{QPage:i.Z,QList:d.Z,QItem:m.Z,QItemSection:p.Z,QIcon:v.Z})},9592:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>d});var a=o(5008);function l(e,t){const o=(0,a.up)("BreadCrumbs"),l=(0,a.up)("Password",!0),n=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(n,{padding:""},{default:(0,a.w5)((()=>[(0,a.Wm)(o),(0,a.Wm)(l)])),_:1})}var n=o(446),r=o(4237),s=o(1288),c=o.n(s);const u={},i=(0,n.Z)(u,[["render",l],["__scopeId","data-v-b36811e6"]]),d=i;c()(u,"components",{QPage:r.Z})},3650:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>d});var a=o(5008);function l(e,t){const o=(0,a.up)("BreadCrumbs"),l=(0,a.up)("TimeConvert",!0),n=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(n,{padding:""},{default:(0,a.w5)((()=>[(0,a.Wm)(o),(0,a.Wm)(l)])),_:1})}var n=o(446),r=o(4237),s=o(1288),c=o.n(s);const u={},i=(0,n.Z)(u,[["render",l],["__scopeId","data-v-786816f6"]]),d=i;c()(u,"components",{QPage:r.Z})},1674:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>d});var a=o(5008);function l(e,t){const o=(0,a.up)("BreadCrumbs"),l=(0,a.up)("TransCode",!0),n=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(n,{padding:""},{default:(0,a.w5)((()=>[(0,a.Wm)(o),(0,a.Wm)(l)])),_:1})}var n=o(446),r=o(4237),s=o(1288),c=o.n(s);const u={},i=(0,n.Z)(u,[["render",l],["__scopeId","data-v-05976fb6"]]),d=i;c()(u,"components",{QPage:r.Z})},5545:()=>{},8028:()=>{},695:()=>{},471:()=>{},1632:()=>{}},t={};function o(a){var l=t[a];if(void 0!==l)return l.exports;var n=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}o.m=e,(()=>{var e=[];o.O=(t,a,l,n)=>{if(!a){var r=1/0;for(i=0;i<e.length;i++){for(var[a,l,n]=e[i],s=!0,c=0;c<a.length;c++)(!1&n||r>=n)&&Object.keys(o.O).every((e=>o.O[e](a[c])))?a.splice(c--,1):(s=!1,n<r&&(r=n));if(s){e.splice(i--,1);var u=l();void 0!==u&&(t=u)}}return t}n=n||0;for(var i=e.length;i>0&&e[i-1][2]>n;i--)e[i]=e[i-1];e[i]=[a,l,n]}})(),(()=>{o.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(t,{a:t}),t}})(),(()=>{o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,a)=>(o.f[a](e,t),t)),[]))})(),(()=>{o.u=e=>"js/"+e+".1440b00f.js"})(),(()=>{o.miniCssF=e=>{}})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="dev:";o.l=(a,l,n,r)=>{if(e[a])e[a].push(l);else{var s,c;if(void 0!==n)for(var u=document.getElementsByTagName("script"),i=0;i<u.length;i++){var d=u[i];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+n){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+n),s.src=a),e[a]=[l];var m=(t,o)=>{s.onerror=s.onload=null,clearTimeout(p);var l=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),l&&l.forEach((e=>e(o))),t)return t(o)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),c&&document.head.appendChild(s)}}})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{o.p=""})(),(()=>{var e={143:0};o.f.j=(t,a)=>{var l=o.o(e,t)?e[t]:void 0;if(0!==l)if(l)a.push(l[2]);else{var n=new Promise(((o,a)=>l=e[t]=[o,a]));a.push(l[2]=n);var r=o.p+o.u(t),s=new Error,c=a=>{if(o.o(e,t)&&(l=e[t],0!==l&&(e[t]=void 0),l)){var n=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",s.name="ChunkLoadError",s.type=n,s.request=r,l[1](s)}};o.l(r,c,"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,a)=>{var l,n,[r,s,c]=a,u=0;if(r.some((t=>0!==e[t]))){for(l in s)o.o(s,l)&&(o.m[l]=s[l]);if(c)var i=c(o)}for(t&&t(a);u<r.length;u++)n=r[u],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(i)},a=globalThis["webpackChunkdev"]=globalThis["webpackChunkdev"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=o.O(void 0,[736],(()=>o(6967)));a=o.O(a)})();