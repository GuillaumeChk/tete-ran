import{c as E,r as p,w as X,h as v,W as ie,g as J,o as le,X as I,t as ne,u as O,b as S,z as w,s as re,Y as se}from"./index.1a11ac99.js";import{Q as ae}from"./QSpinner.307d9f61.js";import{c as ue,h as ce}from"./render.fb336e1d.js";import{b as W,v as de,c as U,g as fe}from"./vm.930f1261.js";import{u as j}from"./use-tick.b95fb45a.js";const me={ratio:[String,Number]};function ge(e,t){return E(()=>{const o=Number(e.ratio||(t!==void 0?t.value:void 0));return isNaN(o)!==!0&&o>0?{paddingBottom:`${100/o}%`}:null})}const ve=16/9;var Ve=ue({name:"QImg",props:{...me,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:ve},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:t,emit:o}){const n=p(e.initialRatio),r=ge(e,n),f=J(),{registerTimeout:a,removeTimeout:u}=j(),{registerTimeout:m,removeTimeout:b}=j(),s=[p(null),p(M())],c=p(0),h=p(!1),g=p(!1),T=E(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),C=E(()=>({width:e.width,height:e.height})),H=E(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),V=E(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));X(()=>Y(),$);function i(){if(b(),e.loadingShowDelay===0){h.value=!0;return}m(()=>{h.value=!0},e.loadingShowDelay)}function d(){b(),h.value=!1}function Y(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function M(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function $(l){u(),g.value=!1,l===null?(d(),s[c.value^1].value=M()):i(),s[c.value].value=l}function Z({target:l}){W(f)===!1&&(u(),n.value=l.naturalHeight===0?.5:l.naturalWidth/l.naturalHeight,R(l,1))}function R(l,_){_===1e3||W(f)===!0||(l.complete===!0?ee(l):a(()=>{R(l,_+1)},50))}function ee(l){W(f)!==!0&&(c.value=c.value^1,s[c.value].value=null,d(),g.value=!1,o("load",l.currentSrc||l.src))}function te(l){u(),d(),g.value=!0,s[c.value].value=null,s[c.value^1].value=M(),o("error",l)}function A(l){const _=s[l].value,P={key:"img_"+l,class:H.value,style:V.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,..._};return c.value===l?(P.class+=" q-img__image--waiting",Object.assign(P,{onLoad:Z,onError:te})):P.class+=" q-img__image--loaded",v("div",{class:"q-img__container absolute-full",key:"img"+l},v("img",P))}function oe(){return h.value===!1?v("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},ce(t[g.value===!0?"error":"default"])):v("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},t.loading!==void 0?t.loading():e.noSpinner===!0?void 0:[v(ae,{color:e.spinnerColor,size:e.spinnerSize})])}return $(Y()),()=>{const l=[];return r.value!==null&&l.push(v("div",{key:"filler",style:r.value})),g.value!==!0&&(s[0].value!==null&&l.push(A(0)),s[1].value!==null&&l.push(A(1))),l.push(v(ie,{name:"q-transition--fade"},oe)),v("div",{class:T.value,style:C.value,role:"img","aria-label":e.alt},l)}}});function _e(e,t,o){let n;function r(){n!==void 0&&(I.remove(n),n=void 0)}return le(()=>{e.value===!0&&r()}),{removeFromHistory:r,addToHistory(){n={condition:()=>o.value===!0,handler:t},I.add(n)}}}const Pe={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},xe=["beforeShow","show","beforeHide","hide"];function ze({showing:e,canShow:t,hideOnRouteChange:o,handleShow:n,handleHide:r,processOnMount:f}){const a=J(),{props:u,emit:m,proxy:b}=a;let s;function c(i){e.value===!0?T(i):h(i)}function h(i){if(u.disable===!0||i!==void 0&&i.qAnchorHandled===!0||t!==void 0&&t(i)!==!0)return;const d=u["onUpdate:modelValue"]!==void 0;d===!0&&(m("update:modelValue",!0),s=i,O(()=>{s===i&&(s=void 0)})),(u.modelValue===null||d===!1)&&g(i)}function g(i){e.value!==!0&&(e.value=!0,m("beforeShow",i),n!==void 0?n(i):m("show",i))}function T(i){if(u.disable===!0)return;const d=u["onUpdate:modelValue"]!==void 0;d===!0&&(m("update:modelValue",!1),s=i,O(()=>{s===i&&(s=void 0)})),(u.modelValue===null||d===!1)&&C(i)}function C(i){e.value!==!1&&(e.value=!1,m("beforeHide",i),r!==void 0?r(i):m("hide",i))}function H(i){u.disable===!0&&i===!0?u["onUpdate:modelValue"]!==void 0&&m("update:modelValue",!1):i===!0!==e.value&&(i===!0?g:C)(s)}X(()=>u.modelValue,H),o!==void 0&&de(a)===!0&&X(()=>b.$route.fullPath,()=>{o.value===!0&&e.value===!0&&T()}),f===!0&&ne(()=>{H(u.modelValue)});const V={show:h,hide:T,toggle:c};return Object.assign(b,V),V}const he=[null,document,document.body,document.scrollingElement,document.documentElement];function Me(e,t){let o=fe(t);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return he.includes(o)?window:o}function we(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function ye(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let x;function We(){if(x!==void 0)return x;const e=document.createElement("p"),t=document.createElement("div");U(e,{width:"100%",height:"200px"}),U(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const o=e.offsetWidth;t.style.overflow="scroll";let n=e.offsetWidth;return o===n&&(n=t.clientWidth),t.remove(),x=o-n,x}function pe(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let L=0,N,k,q,B=!1,D,F,Q,y=null;function Se(e){be(e)&&re(e)}function be(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=se(e),o=e.shiftKey&&!e.deltaX,n=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),r=o||n?e.deltaY:e.deltaX;for(let f=0;f<t.length;f++){const a=t[f];if(pe(a,n))return n?r<0&&a.scrollTop===0?!0:r>0&&a.scrollTop+a.clientHeight===a.scrollHeight:r<0&&a.scrollLeft===0?!0:r>0&&a.scrollLeft+a.clientWidth===a.scrollWidth}return!0}function K(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function z(e){B!==!0&&(B=!0,requestAnimationFrame(()=>{B=!1;const{height:t}=e.target,{clientHeight:o,scrollTop:n}=document.scrollingElement;(q===void 0||t!==window.innerHeight)&&(q=o-t,document.scrollingElement.scrollTop=n),n>q&&(document.scrollingElement.scrollTop-=Math.ceil((n-q)/8))}))}function G(e){const t=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:n,overflowX:r}=window.getComputedStyle(t);N=ye(window),k=we(window),D=t.style.left,F=t.style.top,Q=window.location.href,t.style.left=`-${N}px`,t.style.top=`-${k}px`,r!=="hidden"&&(r==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),n!=="hidden"&&(n==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,S.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",z,w.passiveCapture),window.visualViewport.addEventListener("scroll",z,w.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",K,w.passiveCapture))}S.is.desktop===!0&&S.is.mac===!0&&window[`${e}EventListener`]("wheel",Se,w.notPassive),e==="remove"&&(S.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",z,w.passiveCapture),window.visualViewport.removeEventListener("scroll",z,w.passiveCapture)):window.removeEventListener("scroll",K,w.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=D,t.style.top=F,window.location.href===Q&&window.scrollTo(N,k),q=void 0)}function Te(e){let t="add";if(e===!0){if(L++,y!==null){clearTimeout(y),y=null;return}if(L>1)return}else{if(L===0||(L--,L>0))return;if(t="remove",S.is.ios===!0&&S.is.nativeMobile===!0){y!==null&&clearTimeout(y),y=setTimeout(()=>{G(t),y=null},100);return}}G(t)}function Ne(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,Te(t))}}}export{Ve as Q,xe as a,ze as b,_e as c,Ne as d,we as e,ye as f,Me as g,We as h,Pe as u};
