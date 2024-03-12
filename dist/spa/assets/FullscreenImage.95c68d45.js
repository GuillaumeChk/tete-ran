import{u as ye,Q as H}from"./QImg.52a5f201.js";import{c as g,a6 as V,r as x,H as xe,a7 as we,h as y,a8 as be,x as Z,b as pe,j as W,o as ke,a1 as j,g as qe,K as Se,U as Ce,N as E,T as z,S as G,M as Ee,Q as Be,W as Fe}from"./index.539467ea.js";import{a as Te,b as _e,u as Pe,c as $e,d as De,e as He}from"./use-prevent-scroll.41f2da7f.js";import{c as ze,h as Me}from"./render.b5e4ceae.js";import{a as Oe}from"./dom.983fdd35.js";const Ie={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Le(e,n=()=>{},i=()=>{}){return{transitionProps:g(()=>{const l=`q-transition--${e.transitionShow||n()}`,o=`q-transition--${e.transitionHide||i()}`;return{appear:!0,enterFromClass:`${l}-enter-from`,enterActiveClass:`${l}-enter-active`,enterToClass:`${l}-enter-to`,leaveFromClass:`${o}-leave-from`,leaveActiveClass:`${o}-leave-active`,leaveToClass:`${o}-leave-to`}}),transitionStyle:g(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}let k=[],q=[];function ee(e){q=q.filter(n=>n!==e)}function Ke(e){ee(e),q.push(e)}function U(e){ee(e),q.length===0&&k.length!==0&&(k[k.length-1](),k=[])}function Re(e){q.length===0?e():k.push(e)}let Ae=1,Ne=document.body;function Qe(e,n){const i=document.createElement("div");if(i.id=n!==void 0?`q-portal--${n}--${Ae++}`:e,V.globalNodes!==void 0){const l=V.globalNodes.class;l!==void 0&&(i.className=l)}return Ne.appendChild(i),i}function Ve(e){e.remove()}const M=[];function We(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function je(e,n,i,l){const o=x(!1),u=x(!1);let s=null;const c={},r=l==="dialog"&&We(e);function d(m){if(m===!0){U(c),u.value=!0;return}u.value=!1,o.value===!1&&(r===!1&&s===null&&(s=Qe(!1,l)),o.value=!0,M.push(e.proxy),Ke(c))}function f(m){if(u.value=!1,m!==!0)return;U(c),o.value=!1;const b=M.indexOf(e.proxy);b!==-1&&M.splice(b,1),s!==null&&(Ve(s),s=null)}return xe(()=>{f(!0)}),e.proxy.__qPortal=!0,we(e.proxy,"contentEl",()=>n.value),{showPortal:d,hidePortal:f,portalIsActive:o,portalIsAccessible:u,renderPortal:()=>r===!0?i():o.value===!0?[y(be,{to:s},i())]:void 0}}const h=[];let w;function Ge(e){w=e.keyCode===27}function Ue(){w===!0&&(w=!1)}function Je(e){w===!0&&(w=!1,pe(e,27)===!0&&h[h.length-1](e))}function te(e){window[e]("keydown",Ge),window[e]("blur",Ue),window[e]("keyup",Je),w=!1}function Xe(e){Z.is.desktop===!0&&(h.push(e),h.length===1&&te("addEventListener"))}function J(e){const n=h.indexOf(e);n!==-1&&(h.splice(n,1),h.length===0&&te("removeEventListener"))}const v=[];function ne(e){v[v.length-1](e)}function Ye(e){Z.is.desktop===!0&&(v.push(e),v.length===1&&document.body.addEventListener("focusin",ne))}function X(e){const n=v.indexOf(e);n!==-1&&(v.splice(n,1),v.length===0&&document.body.removeEventListener("focusin",ne))}let B=0;const Ze={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},Y={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var et=ze({name:"QDialog",inheritAttrs:!1,props:{...Te,...Ie,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[..._e,"shake","click","escapeKey"],setup(e,{slots:n,emit:i,attrs:l}){const o=qe(),u=x(null),s=x(!1),c=x(!1);let r=null,d=null,f,m;const b=g(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:O}=He(),{registerTimeout:I}=ye(),{registerTick:le,removeTick:L}=Pe(),{transitionProps:oe,transitionStyle:K}=Le(e,()=>Y[e.position][0],()=>Y[e.position][1]),{showPortal:R,hidePortal:A,portalIsAccessible:ie,renderPortal:ae}=je(o,u,ve,"dialog"),{hide:S}=$e({showing:s,hideOnRouteChange:b,handleShow:fe,handleHide:me,processOnMount:!0}),{addToHistory:se,removeFromHistory:ue}=De(s,S,b),re=g(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${Ze[e.position]}`+(c.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),C=g(()=>s.value===!0&&e.seamless!==!0),ce=g(()=>e.autoClose===!0?{onClick:ge}:{}),de=g(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${C.value===!0?"modal":"seamless"}`,l.class]);W(()=>e.maximized,t=>{s.value===!0&&_(t)}),W(C,t=>{O(t),t===!0?(Ye(P),Xe(T)):(X(P),J(T))});function fe(t){se(),d=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,_(e.maximized),R(),c.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),le(p)):L(),I(()=>{if(o.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:a,bottom:$}=document.activeElement.getBoundingClientRect(),{innerHeight:Q}=window,D=window.visualViewport!==void 0?window.visualViewport.height:Q;a>0&&$>D/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-D,$>=Q?1/0:Math.ceil(document.scrollingElement.scrollTop+$-D/2))),document.activeElement.scrollIntoView()}m=!0,u.value.click(),m=!1}R(!0),c.value=!1,i("show",t)},e.transitionDuration)}function me(t){L(),ue(),N(!0),c.value=!0,A(),d!==null&&(((t&&t.type.indexOf("key")===0?d.closest('[tabindex]:not([tabindex^="-"])'):void 0)||d).focus(),d=null),I(()=>{A(!0),c.value=!1,i("hide",t)},e.transitionDuration)}function p(t){Re(()=>{let a=u.value;a===null||a.contains(document.activeElement)===!0||(a=(t!==""?a.querySelector(t):null)||a.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||a.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||a.querySelector("[autofocus], [data-autofocus]")||a,a.focus({preventScroll:!0}))})}function F(t){t&&typeof t.focus=="function"?t.focus({preventScroll:!0}):p(),i("shake");const a=u.value;a!==null&&(a.classList.remove("q-animate--scale"),a.classList.add("q-animate--scale"),r!==null&&clearTimeout(r),r=setTimeout(()=>{r=null,u.value!==null&&(a.classList.remove("q-animate--scale"),p())},170))}function T(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&F():(i("escapeKey"),S()))}function N(t){r!==null&&(clearTimeout(r),r=null),(t===!0||s.value===!0)&&(_(!1),e.seamless!==!0&&(O(!1),X(P),J(T))),t!==!0&&(d=null)}function _(t){t===!0?f!==!0&&(B<1&&document.body.classList.add("q-body--dialog"),B++,f=!0):f===!0&&(B<2&&document.body.classList.remove("q-body--dialog"),B--,f=!1)}function ge(t){m!==!0&&(S(t),i("click",t))}function he(t){e.persistent!==!0&&e.noBackdropDismiss!==!0?S(t):e.noShake!==!0&&F()}function P(t){e.allowFocusOutside!==!0&&ie.value===!0&&Oe(u.value,t.target)!==!0&&p('[tabindex]:not([tabindex="-1"])')}Object.assign(o.proxy,{focus:p,shake:F,__updateRefocusTarget(t){d=t||null}}),ke(N);function ve(){return y("div",{role:"dialog","aria-modal":C.value===!0?"true":"false",...l,class:de.value},[y(j,{name:"q-transition--fade",appear:!0},()=>C.value===!0?y("div",{class:"q-dialog__backdrop fixed-full",style:K.value,"aria-hidden":"true",tabindex:-1,onClick:he}):null),y(j,oe.value,()=>s.value===!0?y("div",{ref:u,class:re.value,style:K.value,tabindex:-1,...ce.value},Me(n.default)):null)])}return ae}});const at={__name:"FullscreenImage",props:{imagePath:String,width:String},setup(e){let n=x(!1);return(i,l)=>(Se(),Ce(Fe,null,[E(H,{onClick:l[0]||(l[0]=o=>z(n)?n.value=!0:n=!0),class:"gt-sm",style:G({maxWidth:e.width}),src:e.imagePath},null,8,["style","src"]),E(H,{class:"lt-md",style:G({maxWidth:e.width}),src:e.imagePath},null,8,["style","src"]),E(et,{modelValue:Be(n),"onUpdate:modelValue":l[2]||(l[2]=o=>z(n)?n.value=o:n=o),"full-height":"","full-width":"",style:{overflow:"hidden"}},{default:Ee(()=>[E(H,{src:e.imagePath,class:"full-width",fit:"contain",onClick:l[1]||(l[1]=o=>z(n)?n.value=!1:n=!1)},null,8,["src"])]),_:1},8,["modelValue"])],64))}};export{at as _};
