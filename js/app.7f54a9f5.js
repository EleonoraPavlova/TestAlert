(function(){"use strict";var e={1972:function(e,t,n){var o=n(9242),r=n(3396);function l(e,t){const n=(0,r.up)("router-link"),o=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",null,[(0,r.Wm)(n,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(n,{to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1})]),(0,r.Wm)(o)],64)}var i=n(89);const a={},s=(0,i.Z)(a,[["render",l]]);var u=s,c=n(2483),f=n(7139);const d=e=>((0,r.dD)("data-v-386650a8"),e=e(),(0,r.Cn)(),e),p={key:0,class:"container"},m={class:"mb-3"},v={class:"d-flex justify-content-center align-items-center"},g={class:"card p-3"},b={class:"mx-auto mt-3 mb-3"},y=d((()=>(0,r._)("label",{for:"input"},null,-1))),h={type:"text",id:"input"},k={class:"d-flex justify-content-center align-items-center"};function w(e,t,n,o,l,i){const a=(0,r.up)("AppAlert"),s=(0,r.up)("MyButtons"),u=(0,r.Q2)("color"),c=(0,r.Q2)("focus");return l.show?((0,r.wg)(),(0,r.iD)("div",p,[(0,r._)("div",m,[(0,r._)("div",v,[e.alert?((0,r.wg)(),(0,r.j4)(a,{key:0,title:"Important information!",text:"Be carefull",color:"success",class:"border border-light",closable:!0,onClose:t[0]||(t[0]=t=>e.alert=!1)})):(0,r.kq)("",!0)]),(0,r.Wm)(s,{onClick:e.toggleAlert,color:"success",size:"sm"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,f.zw)(e.alert?"Hide":"Show message"),1)])),_:1},8,["onClick"])]),(0,r._)("div",g,[(0,r.wy)(((0,r.wg)(),(0,r.iD)("h6",null,[(0,r.Uk)("Directives")])),[[u,l.baseColor,l.type,{blink:!0,hover:!0}]]),(0,r._)("div",b,[y,(0,r.wy)((0,r._)("input",h,null,512),[[c]])]),(0,r._)("div",k,[(0,r.Wm)(s,{onClick:t[1]||(t[1]=e=>l.baseColor="blue"),color:"success",size:"sm",class:"width-alert"},{default:(0,r.w5)((()=>[(0,r.Uk)("Change color ")])),_:1}),(0,r.Wm)(s,{onClick:t[2]||(t[2]=e=>l.type="color"===l.type?"backgroundColor":"color"),color:"success",size:"sm",class:"width-alert"},{default:(0,r.w5)((()=>[(0,r.Uk)("Change type ")])),_:1}),(0,r.Uk)(" "+(0,f.zw)(l.type),1)])])])):(0,r.kq)("",!0)}const C={class:"mx-3"},_={class:"alert-title"},j={class:"m-0"};function x(e,t,n,o,l,i){const a=(0,r.up)("CloseButton");return(0,r.wg)(),(0,r.iD)("div",{class:(0,f.C_)(["alert d-flex justify-content-center align-items-start",[`alert-${n.color}`]]),role:"alert"},[(0,r._)("div",C,[(0,r._)("h6",_,(0,f.zw)(n.title),1),(0,r._)("p",j,(0,f.zw)(n.text),1)]),n.closable?((0,r.wg)(),(0,r.j4)(a,{key:0,onClick:t[0]||(t[0]=t=>e.$emit("close")),size:"xs"})):(0,r.kq)("",!0)],2)}function A(e,t,n,o,l,i){return(0,r.wg)(),(0,r.iD)("button",{type:"button",class:(0,f.C_)(["btn-close",[n.color,n.size]]),"aria-label":"Close",onClick:t[0]||(t[0]=t=>e.$emit("click"))},null,2)}var O={name:"CloseButton",props:{color:{type:String,default:"primary"},size:{type:String,default:"clxs"}},emits:["click"]};const S=(0,i.Z)(O,[["render",A]]);var z=S,E={name:"AppAlert",components:{CloseButton:z},emits:["close"],props:{title:{type:String,default:"I am a title component"},text:{type:String,default:"I am a text component"},color:{type:String,requeired:!1,default:"primary",validator(e){return["secondary","success","danger","warning","info","light","dark"].includes(e)}},closable:{type:Boolean,requeired:!1,default:!1}}};const T=(0,i.Z)(E,[["render",x]]);var B=T;function D(e,t,n,o,l,i){return(0,r.wg)(),(0,r.iD)("button",{class:(0,f.C_)(["btn m-1",[`btn-${n.color}`,`btn-${n.size}`]]),onClick:t[0]||(t[0]=t=>e.$emit("click"))},[(0,r.WI)(e.$slots,"default")],2)}var U={name:"MyButtons",props:{color:{type:String,default:"primary"},size:{type:String,default:"lg"},type:{type:String,default:"button"}},emits:["click"]};const I=(0,i.Z)(U,[["render",D]]);var M=I,P={data(){return{alert:!1}},methods:{toggleAlert(){this.alert=!this.alert}}},W={mounted(e){e.focus,console.log(e)}};let $,q;const L=e=>{e.target.style.color="pink"},Z=e=>{e.target.style.color=q};var H={mounted(e,t){if(console.log(e),console.log(t),q=t.value,e.style[t.arg]=t.value,t.modifiers.blink){let n=!0;setInterval((()=>{e.style.color=n?"#fff":t.value,n=!n}),900)}t.modifiers.hover&&(e.addEventListener("mouseover",L),e.addEventListener("mouseout",Z))},updated(e,t){e.style[t.arg]=t.value},unmounted(e){console.log("unmounted"),$&&clearInterval($),e.removeEventListener("mouseover",L),e.removeEventListener("mouseout",Z)}},N={name:"HomeView",mixins:[P],directives:{focus:W,color:H},components:{AppAlert:B,MyButtons:M},data(){return{baseColor:"green",type:"color",show:!0}}};const F=(0,i.Z)(N,[["render",w],["__scopeId","data-v-386650a8"]]);var Q=F;const V=[{path:"/",name:"home",component:Q},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,7381))}],Y=(0,c.p7)({history:(0,c.PO)("/TestAlert/"),routes:V});var G=Y,J=n(65),K=(0,J.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,o.ri)(u).use(K).use(G).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var l=t[o]={exports:{}};return e[o](l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,l){if(!o){var i=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],l=e[c][2];for(var a=!0,s=0;s<o.length;s++)(!1&l||i>=l)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(a=!1,l<i&&(i=l));if(a){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[o,r,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.24e93f22.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="testalert:";n.l=function(o,r,l,i){if(e[o])e[o].push(r);else{var a,s;if(void 0!==l)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var f=u[c];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+l){a=f;break}}a||(s=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+l),a.src=o),e[o]=[r];var d=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),s&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/TestAlert/"}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var l=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=l);var i=n.p+n.u(t),a=new Error,s=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var l=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+l+": "+i+")",a.name="ChunkLoadError",a.type=l,a.request=i,r[1](a)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,l,i=o[0],a=o[1],s=o[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(s)var c=s(n)}for(t&&t(o);u<i.length;u++)l=i[u],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(c)},o=self["webpackChunktestalert"]=self["webpackChunktestalert"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(1972)}));o=n.O(o)})();
//# sourceMappingURL=app.7f54a9f5.js.map