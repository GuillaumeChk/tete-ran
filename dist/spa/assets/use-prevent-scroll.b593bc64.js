import{a as B,v as F}from"./vm.0711697f.js";import{$ as O,o as z,t as L,g as D,c as N,a3 as q,w as C,q as _,a as p,y as a,m as j,a4 as I}from"./index.99cbd99a.js";import{g as K,c as M}from"./QBtn.dad1e4a2.js";function ie(){let e;const o=D();function r(){e=void 0}return O(r),z(r),{removeTick:r,registerTick(t){e=t,L(()=>{e===t&&(B(o)===!1&&e(),e=void 0)})}}}const ne={dark:{type:Boolean,default:null}};function se(e,o){return N(()=>e.dark===null?o.dark.isActive:e.dark)}function de(e,o,r){let t;function i(){t!==void 0&&(q.remove(t),t=void 0)}return z(()=>{e.value===!0&&i()}),{removeFromHistory:i,addToHistory(){t={condition:()=>r.value===!0,handler:o},q.add(t)}}}const ue={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},ae=["beforeShow","show","beforeHide","hide"];function ce({showing:e,canShow:o,hideOnRouteChange:r,handleShow:t,handleHide:i,processOnMount:m}){const n=D(),{props:s,emit:d,proxy:V}=n;let u;function $(l){e.value===!0?g(l):S(l)}function S(l){if(s.disable===!0||l!==void 0&&l.qAnchorHandled===!0||o!==void 0&&o(l)!==!0)return;const f=s["onUpdate:modelValue"]!==void 0;f===!0&&(d("update:modelValue",!0),u=l,L(()=>{u===l&&(u=void 0)})),(s.modelValue===null||f===!1)&&H(l)}function H(l){e.value!==!0&&(e.value=!0,d("beforeShow",l),t!==void 0?t(l):d("show",l))}function g(l){if(s.disable===!0)return;const f=s["onUpdate:modelValue"]!==void 0;f===!0&&(d("update:modelValue",!1),u=l,L(()=>{u===l&&(u=void 0)})),(s.modelValue===null||f===!1)&&x(l)}function x(l){e.value!==!1&&(e.value=!1,d("beforeHide",l),i!==void 0?i(l):d("hide",l))}function P(l){s.disable===!0&&l===!0?s["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):l===!0!==e.value&&(l===!0?H:x)(u)}C(()=>s.modelValue,P),r!==void 0&&F(n)===!0&&C(()=>V.$route.fullPath,()=>{r.value===!0&&e.value===!0&&g()}),m===!0&&_(()=>{P(s.modelValue)});const k={show:S,hide:g,toggle:$};return Object.assign(V,k),k}const R=[null,document,document.body,document.scrollingElement,document.documentElement];function fe(e,o){let r=K(o);if(r===void 0){if(e==null)return window;r=e.closest(".scroll,.scroll-y,.overflow-auto")}return R.includes(r)?window:r}function G(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function J(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let h;function pe(){if(h!==void 0)return h;const e=document.createElement("p"),o=document.createElement("div");M(e,{width:"100%",height:"200px"}),M(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const r=e.offsetWidth;o.style.overflow="scroll";let t=e.offsetWidth;return r===t&&(t=o.clientWidth),o.remove(),h=r-t,h}function Q(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let w=0,b,T,v,E=!1,W,A,X,c=null;function Z(e){ee(e)&&j(e)}function ee(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=I(e),r=e.shiftKey&&!e.deltaX,t=!r&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),i=r||t?e.deltaY:e.deltaX;for(let m=0;m<o.length;m++){const n=o[m];if(Q(n,t))return t?i<0&&n.scrollTop===0?!0:i>0&&n.scrollTop+n.clientHeight===n.scrollHeight:i<0&&n.scrollLeft===0?!0:i>0&&n.scrollLeft+n.clientWidth===n.scrollWidth}return!0}function Y(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function y(e){E!==!0&&(E=!0,requestAnimationFrame(()=>{E=!1;const{height:o}=e.target,{clientHeight:r,scrollTop:t}=document.scrollingElement;(v===void 0||o!==window.innerHeight)&&(v=r-o,document.scrollingElement.scrollTop=t),t>v&&(document.scrollingElement.scrollTop-=Math.ceil((t-v)/8))}))}function U(e){const o=document.body,r=window.visualViewport!==void 0;if(e==="add"){const{overflowY:t,overflowX:i}=window.getComputedStyle(o);b=J(window),T=G(window),W=o.style.left,A=o.style.top,X=window.location.href,o.style.left=`-${b}px`,o.style.top=`-${T}px`,i!=="hidden"&&(i==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),t!=="hidden"&&(t==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,p.is.ios===!0&&(r===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",y,a.passiveCapture),window.visualViewport.addEventListener("scroll",y,a.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Y,a.passiveCapture))}p.is.desktop===!0&&p.is.mac===!0&&window[`${e}EventListener`]("wheel",Z,a.notPassive),e==="remove"&&(p.is.ios===!0&&(r===!0?(window.visualViewport.removeEventListener("resize",y,a.passiveCapture),window.visualViewport.removeEventListener("scroll",y,a.passiveCapture)):window.removeEventListener("scroll",Y,a.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=W,o.style.top=A,window.location.href===X&&window.scrollTo(b,T),v=void 0)}function oe(e){let o="add";if(e===!0){if(w++,c!==null){clearTimeout(c),c=null;return}if(w>1)return}else{if(w===0||(w--,w>0))return;if(o="remove",p.is.ios===!0&&p.is.nativeMobile===!0){c!==null&&clearTimeout(c),c=setTimeout(()=>{U(o),c=null},100);return}}U(o)}function me(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,oe(o))}}}export{se as a,ue as b,ae as c,ce as d,de as e,me as f,fe as g,G as h,J as i,pe as j,ie as k,ne as u};