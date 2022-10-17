(function(){"use strict";var e={9733:function(e,t,n){var o=n(9242),r=n(3396),i=n(7139);const a={class:"position-relative"},l={class:"div"},s={class:"position-absolute top-0 end-0"},c={class:"mt-3"};function u(e,t,n,o,u,d){const p=(0,r.up)("router-link"),f=(0,r.up)("MyButtons"),m=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",a,[(0,r._)("div",l,[(0,r.Wm)(p,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(p,{to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(p,{to:"/plugin"},{default:(0,r.w5)((()=>[(0,r.Uk)("Plugin")])),_:1})]),(0,r._)("div",s,[(0,r.Wm)(f,{onClick:d.changeLang,color:"light",size:"sm",class:"btn-outline-success"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(u.currentLanguage),1)])),_:1},8,["onClick"])]),(0,r._)("div",c,[(0,r._)("h6",null,(0,i.zw)(e.$i18n("app.title")),1)])]),(0,r.Wm)(m)],64)}function d(e,t,n,o,a,l){return(0,r.wg)(),(0,r.iD)("button",{class:(0,i.C_)(["btn m-1",[`btn-${n.color}`,`btn-${n.size}`]]),onClick:t[0]||(t[0]=t=>e.$emit("click"))},[(0,r.WI)(e.$slots,"default")],2)}var p={name:"MyButtons",props:{color:{type:String,default:"primary"},size:{type:String,default:"lg"},type:{type:String,default:"button"}},emits:["click"]},f=n(89);const m=(0,f.Z)(p,[["render",d]]);var g=m,v={inject:["changeI18N"],components:{MyButtons:g},data(){return{currentLanguage:"en"}},methods:{changeLang(){this.currentLanguage="en"===this.currentLanguage?"uk":"en",this.changeI18N(this.currentLanguage),this.$forceUpdate()}}};const h=(0,f.Z)(v,[["render",u]]);var b=h,y=n(2483);const k=e=>((0,r.dD)("data-v-386650a8"),e=e(),(0,r.Cn)(),e),w={key:0,class:"container"},_={class:"mb-3"},C={class:"d-flex justify-content-center align-items-center"},j={class:"card p-3"},x={class:"mx-auto mt-3 mb-3"},L=k((()=>(0,r._)("label",{for:"input"},null,-1))),z={type:"text",id:"input"},A={class:"d-flex justify-content-center align-items-center"};function O(e,t,n,o,a,l){const s=(0,r.up)("AppAlert"),c=(0,r.up)("MyButtons"),u=(0,r.Q2)("color"),d=(0,r.Q2)("focus");return a.show?((0,r.wg)(),(0,r.iD)("div",w,[(0,r._)("div",_,[(0,r._)("div",C,[e.alert?((0,r.wg)(),(0,r.j4)(s,{key:0,title:"Important information!",text:"Be carefull",color:"success",class:"border border-light",closable:!0,onClose:t[0]||(t[0]=t=>e.alert=!1)})):(0,r.kq)("",!0)]),(0,r.Wm)(c,{onClick:e.toggleAlert,color:"success",size:"sm"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(e.alert?"Hide":"Show message"),1)])),_:1},8,["onClick"])]),(0,r._)("div",j,[(0,r.wy)(((0,r.wg)(),(0,r.iD)("h6",null,[(0,r.Uk)("Directives")])),[[u,a.baseColor,a.type,{blink:!0,hover:!0}]]),(0,r._)("div",x,[L,(0,r.wy)((0,r._)("input",z,null,512),[[d]])]),(0,r._)("div",A,[(0,r.Wm)(c,{onClick:t[1]||(t[1]=e=>a.baseColor="blue"),color:"success",size:"sm",class:"width-alert"},{default:(0,r.w5)((()=>[(0,r.Uk)("Change color ")])),_:1}),(0,r.Wm)(c,{onClick:t[2]||(t[2]=e=>a.type="color"===a.type?"backgroundColor":"color"),color:"success",size:"sm",class:"width-alert"},{default:(0,r.w5)((()=>[(0,r.Uk)("Change type ")])),_:1}),(0,r.Uk)(" "+(0,i.zw)(a.type),1)])])])):(0,r.kq)("",!0)}const U={class:"mx-3"},B={class:"alert-title"},M={class:"m-0"};function W(e,t,n,o,a,l){const s=(0,r.up)("CloseButton");return(0,r.wg)(),(0,r.iD)("div",{class:(0,i.C_)(["alert d-flex justify-content-center align-items-start",[`alert-${n.color}`]]),role:"alert"},[(0,r._)("div",U,[(0,r._)("h6",B,(0,i.zw)(n.title),1),(0,r._)("p",M,(0,i.zw)(n.text),1)]),n.closable?((0,r.wg)(),(0,r.j4)(s,{key:0,onClick:t[0]||(t[0]=t=>e.$emit("close")),size:"xs"})):(0,r.kq)("",!0)],2)}function I(e,t,n,o,a,l){return(0,r.wg)(),(0,r.iD)("button",{type:"button",class:(0,i.C_)(["btn-close",[n.color,n.size]]),"aria-label":"Close",onClick:t[0]||(t[0]=t=>e.$emit("click"))},null,2)}var S={name:"CloseButton",props:{color:{type:String,default:"primary"},size:{type:String,default:"clxs"}},emits:["click"]};const $=(0,f.Z)(S,[["render",I]]);var T=$,D={name:"AppAlert",components:{CloseButton:T},emits:["close"],props:{title:{type:String,default:"I am a title component"},text:{type:String,default:"I am a text component"},color:{type:String,requeired:!1,default:"primary",validator(e){return["secondary","success","danger","warning","info","light","dark"].includes(e)}},closable:{type:Boolean,requeired:!1,default:!1}}};const E=(0,f.Z)(D,[["render",W]]);var N=E,P={data(){return{alert:!1}},methods:{toggleAlert(){this.alert=!this.alert}}},q={mounted(e){e.focus,console.log(e)}};let Z,H;const F=e=>{e.target.style.color="pink"},Q=e=>{e.target.style.color=H};var V={mounted(e,t){if(console.log(e),console.log(t),H=t.value,e.style[t.arg]=t.value,t.modifiers.blink){let n=!0;setInterval((()=>{e.style.color=n?"#fff":t.value,n=!n}),900)}t.modifiers.hover&&(e.addEventListener("mouseover",F),e.addEventListener("mouseout",Q))},updated(e,t){e.style[t.arg]=t.value},unmounted(e){console.log("unmounted"),Z&&clearInterval(Z),e.removeEventListener("mouseover",F),e.removeEventListener("mouseout",Q)}},K={name:"HomeView",mixins:[P],directives:{focus:q,color:V},components:{AppAlert:N,MyButtons:g},data(){return{baseColor:"green",type:"color",show:!0}}};const R=(0,f.Z)(K,[["render",O],["__scopeId","data-v-386650a8"]]);var Y=R;const G={class:"about"},J=(0,r._)("h1",null,"How plugins work in vue",-1),X={class:"mb-3"};function ee(e,t,n,o,i,a){const l=(0,r.up)("MyButtons"),s=(0,r.up)("ModalWindow");return(0,r.wg)(),(0,r.iD)("div",G,[J,(0,r._)("div",X,[(0,r.Wm)(l,{onClick:t[0]||(t[0]=t=>e.$alert("It is working")),color:"light",size:"sm",class:"btn-outline-info"},{default:(0,r.w5)((()=>[(0,r.Uk)("Alert! ")])),_:1}),(0,r.Wm)(l,{onClick:t[1]||(t[1]=e=>i.modal=!0),color:"light",size:"sm",class:"btn-outline-warning"},{default:(0,r.w5)((()=>[(0,r.Uk)(" Modal ")])),_:1})]),((0,r.wg)(),(0,r.j4)(r.lR,{to:"#modal"},[i.modal?((0,r.wg)(),(0,r.j4)(s,{key:0,onClose:t[2]||(t[2]=e=>i.modal=!1)})):(0,r.kq)("",!0)]))])}const te=e=>((0,r.dD)("data-v-e9af97f4"),e=e(),(0,r.Cn)(),e),ne=te((()=>(0,r._)("div",{class:"modal-dialog modal-sm"},[(0,r._)("div",{class:"card p-3"},[(0,r._)("h3",null,"Title modal"),(0,r._)("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum corporis, saepe architecto sequi qui repudiandae odit ex maxime voluptas aspernatur. ")])],-1))),oe=[ne];function re(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)("div",{class:"modal-backdrop d-flex justify-content-center align-items-center",onClick:t[0]||(t[0]=t=>e.$emit("close"))},oe)}var ie={name:"ModalWindow",emits:["close"]};const ae=(0,f.Z)(ie,[["render",re],["__scopeId","data-v-e9af97f4"]]);var le=ae,se={name:"PluginView",inject:["changeI18N"],data(){return{currentLanguage:"en",modal:!1}},components:{MyButtons:g,ModalWindow:le},methods:{changeLang(){this.currentLanguage="en"===this.currentLanguage?"uk":"en",this.changeI18N(this.currentLanguage),this.$forceUpdate()}}};const ce=(0,f.Z)(se,[["render",ee]]);var ue=ce;const de=[{path:"/",name:"home",component:Y},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,7381))},{path:"/plugin",name:"plugin",component:ue}],pe=(0,y.p7)({history:(0,y.PO)("/TestAlert/"),routes:de});var fe=pe,me=n(65),ge=(0,me.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),ve={install(e,t){let n="en";const o=e=>{n=e,console.log(n)};console.log("app",e),console.log("options",t),e.config.globalProperties.$alert=e=>{window.alert(e)},e.config.globalProperties.$i18n=e=>e.split(".").reduce(((e,t)=>e[t]||"===UNKNOWN===="),t[n]),e.provide("changeI18N",o)}};const he={app:{title:"Це vue плагін",changeBtn:"Укр"}},be={app:{title:"This is a vue plugin",changeBtn:"Eng"}};(0,o.ri)(b).use(ge).use(fe).use(ve,{uk:he,en:be}).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],i=e[u][2];for(var l=!0,s=0;s<o.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(l=!1,i<a&&(a=i));if(l){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.8b7f031b.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="testalert:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var l,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+i),l.src=o),e[o]=[r];var p=function(t,n){l.onerror=l.onload=null,clearTimeout(f);var r=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/TestAlert/"}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),l=new Error,s=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,r[1](l)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],l=o[1],s=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(s)var u=s(n)}for(t&&t(o);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},o=self["webpackChunktestalert"]=self["webpackChunktestalert"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9733)}));o=n.O(o)})();
//# sourceMappingURL=app.dcbc662b.js.map