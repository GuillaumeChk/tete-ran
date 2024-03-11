import{a as O,v as B,c as W,g as D}from"./vm.c657a067.js";import{q as $,o as V,l as L,g as S,a4 as k,j as X,a as N,x as p,m as c,s as _,a5 as I}from"./index.f57f5ebf.js";function le(){let e;const o=S();function t(){e=void 0}return $(t),V(t),{removeTick:t,registerTick(l){e=l,L(()=>{e===l&&(O(o)===!1&&e(),e=void 0)})}}}function ie(){let e=null;const o=S();function t(){e!==null&&(clearTimeout(e),e=null)}return $(t),V(t),{removeTimeout:t,registerTimeout(l,r){t(),O(o)===!1&&(e=setTimeout(l,r))}}}function re(e,o,t){let l;function r(){l!==void 0&&(k.remove(l),l=void 0)}return V(()=>{e.value===!0&&r()}),{removeFromHistory:r,addToHistory(){l={condition:()=>t.value===!0,handler:o},k.add(l)}}}const ne={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},se=["beforeShow","show","beforeHide","hide"];function ue({showing:e,canShow:o,hideOnRouteChange:t,handleShow:l,handleHide:r,processOnMount:m}){const n=S(),{props:s,emit:u,proxy:H}=n;let d;function j(i){e.value===!0?g(i):x(i)}function x(i){if(s.disable===!0||i!==void 0&&i.qAnchorHandled===!0||o!==void 0&&o(i)!==!0)return;const f=s["onUpdate:modelValue"]!==void 0;f===!0&&(u("update:modelValue",!0),d=i,L(()=>{d===i&&(d=void 0)})),(s.modelValue===null||f===!1)&&P(i)}function P(i){e.value!==!0&&(e.value=!0,u("beforeShow",i),l!==void 0?l(i):u("show",i))}function g(i){if(s.disable===!0)return;const f=s["onUpdate:modelValue"]!==void 0;f===!0&&(u("update:modelValue",!1),d=i,L(()=>{d===i&&(d=void 0)})),(s.modelValue===null||f===!1)&&q(i)}function q(i){e.value!==!1&&(e.value=!1,u("beforeHide",i),r!==void 0?r(i):u("hide",i))}function C(i){s.disable===!0&&i===!0?s["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!1):i===!0!==e.value&&(i===!0?P:q)(d)}X(()=>s.modelValue,C),t!==void 0&&B(n)===!0&&X(()=>H.$route.fullPath,()=>{t.value===!0&&e.value===!0&&g()}),m===!0&&N(()=>{C(s.modelValue)});const M={show:x,hide:g,toggle:j};return Object.assign(H,M),M}const K=[null,document,document.body,document.scrollingElement,document.documentElement];function de(e,o){let t=D(o);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return K.includes(t)?window:t}function R(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function G(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let h;function ce(){if(h!==void 0)return h;const e=document.createElement("p"),o=document.createElement("div");W(e,{width:"100%",height:"200px"}),W(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const t=e.offsetWidth;o.style.overflow="scroll";let l=e.offsetWidth;return t===l&&(l=o.clientWidth),o.remove(),h=t-l,h}function J(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let v=0,b,T,w,E=!1,Y,A,U,a=null;function Q(e){Z(e)&&_(e)}function Z(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=I(e),t=e.shiftKey&&!e.deltaX,l=!t&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),r=t||l?e.deltaY:e.deltaX;for(let m=0;m<o.length;m++){const n=o[m];if(J(n,l))return l?r<0&&n.scrollTop===0?!0:r>0&&n.scrollTop+n.clientHeight===n.scrollHeight:r<0&&n.scrollLeft===0?!0:r>0&&n.scrollLeft+n.clientWidth===n.scrollWidth}return!0}function z(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function y(e){E!==!0&&(E=!0,requestAnimationFrame(()=>{E=!1;const{height:o}=e.target,{clientHeight:t,scrollTop:l}=document.scrollingElement;(w===void 0||o!==window.innerHeight)&&(w=t-o,document.scrollingElement.scrollTop=l),l>w&&(document.scrollingElement.scrollTop-=Math.ceil((l-w)/8))}))}function F(e){const o=document.body,t=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:r}=window.getComputedStyle(o);b=G(window),T=R(window),Y=o.style.left,A=o.style.top,U=window.location.href,o.style.left=`-${b}px`,o.style.top=`-${T}px`,r!=="hidden"&&(r==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,p.is.ios===!0&&(t===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",y,c.passiveCapture),window.visualViewport.addEventListener("scroll",y,c.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",z,c.passiveCapture))}p.is.desktop===!0&&p.is.mac===!0&&window[`${e}EventListener`]("wheel",Q,c.notPassive),e==="remove"&&(p.is.ios===!0&&(t===!0?(window.visualViewport.removeEventListener("resize",y,c.passiveCapture),window.visualViewport.removeEventListener("scroll",y,c.passiveCapture)):window.removeEventListener("scroll",z,c.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=Y,o.style.top=A,window.location.href===U&&window.scrollTo(b,T),w=void 0)}function ee(e){let o="add";if(e===!0){if(v++,a!==null){clearTimeout(a),a=null;return}if(v>1)return}else{if(v===0||(v--,v>0))return;if(o="remove",p.is.ios===!0&&p.is.nativeMobile===!0){a!==null&&clearTimeout(a),a=setTimeout(()=>{F(o),a=null},100);return}}F(o)}function ae(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,ee(o))}}}export{ie as a,ne as b,se as c,ue as d,re as e,ae as f,de as g,R as h,G as i,ce as j,le as u};
