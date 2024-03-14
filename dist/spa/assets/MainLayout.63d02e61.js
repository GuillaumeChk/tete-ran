import{u as Ne,a as Ke,Q as me}from"./QBtn.0da04859.js";import{u as ft,a as mt,b as ht,c as gt,d as yt,g as bt,e as pt,f as wt,h as he,Q as X}from"./use-prevent-scroll.414896ad.js";import{Q as ee}from"./Ripple.a3442941.js";import{c as M,h as N,a as Ue,b as xt,d as Qe,e as qt}from"./render.fb336e1d.js";import{c,h as k,w as q,i as Se,e as O,r as S,o as Be,l as le,g as V,a as _t,s as Xe,b as Y,n as Ye,d as kt,f as te,p as ge,j as Me,k as ye,m as ke,q as be,t as Ge,u as Pe,v as Ct,x as Je,y as St,z as Bt,A as Lt,B as ae,C as Tt,_ as $t,D as zt,E as Oe,F as I,G as j,H as L,I as _,J as T,K as G,L as pe,M as Et,N as Qt,O as De,P as Re,Q as Ie,R as Mt,S as we,T as Pt,U as Ot,V as Dt}from"./index.1a11ac99.js";import{u as Rt,a as It,b as Vt,Q as Ce,c as ie,d as oe,g as Ve,s as Fe,e as Ft,f as Ht}from"./selection.3849a85c.js";import{u as At}from"./use-tick.b95fb45a.js";import"./QSpinner.307d9f61.js";import"./vm.930f1261.js";var Wt=M({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const n=c(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>k("div",{class:n.value,role:"toolbar"},N(o.default))}}),jt=M({name:"QRouteTab",props:{...Ne,...Rt},emits:It,setup(e,{slots:o,emit:n}){const r=Ke({useDisableForRouterLinkProps:!1}),{renderTab:t,$tabs:a}=Vt(e,o,n,{exact:c(()=>e.exact),...r});return q(()=>`${e.name} | ${e.exact} | ${(r.resolvedLink.value||{}).href}`,()=>{a.verifyRouteModel()}),()=>t(r.linkTag.value,r.linkAttrs.value)}}),Nt=M({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:n}){const{proxy:{$q:r}}=V(),t=Se(le,O);if(t===O)return console.error("QHeader needs to be child of QLayout"),O;const a=S(parseInt(e.heightHint,10)),u=S(!0),h=c(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||r.platform.is.ios&&t.isContainer.value===!0),m=c(()=>{if(e.modelValue!==!0)return 0;if(h.value===!0)return u.value===!0?a.value:0;const f=a.value-t.scroll.value.position;return f>0?f:0}),s=c(()=>e.modelValue!==!0||h.value===!0&&u.value!==!0),i=c(()=>e.modelValue===!0&&s.value===!0&&e.reveal===!0),x=c(()=>"q-header q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(s.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),d=c(()=>{const f=t.rows.value.top,b={};return f[0]==="l"&&t.left.space===!0&&(b[r.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),f[2]==="r"&&t.right.space===!0&&(b[r.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),b});function v(f,b){t.update("header",f,b)}function g(f,b){f.value!==b&&(f.value=b)}function $({height:f}){g(a,f),v("size",f)}function B(f){i.value===!0&&g(u,!0),n("focusin",f)}q(()=>e.modelValue,f=>{v("space",f),g(u,!0),t.animate()}),q(m,f=>{v("offset",f)}),q(()=>e.reveal,f=>{f===!1&&g(u,e.modelValue)}),q(u,f=>{t.animate(),n("reveal",f)}),q(t.scroll,f=>{e.reveal===!0&&g(u,f.direction==="up"||f.position<=e.revealOffset||f.position-f.inflectionPoint<100)});const w={};return t.instances.header=w,e.modelValue===!0&&v("size",a.value),v("space",e.modelValue),v("offset",m.value),Be(()=>{t.instances.header===w&&(t.instances.header=void 0,v("size",0),v("offset",0),v("space",!1))}),()=>{const f=Ue(o.default,[]);return e.elevated===!0&&f.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),f.push(k(Ce,{debounce:0,onResize:$})),k("header",{class:x.value,style:d.value,onFocusin:B},f)}}}),He=M({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:o}){const n=c(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>k("div",{class:n.value},N(o.default))}}),Kt=M({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:o}){const n=c(()=>parseInt(e.lines,10)),r=c(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),t=c(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>k("div",{style:t.value,class:r.value},N(o.default))}}),Ut=M({name:"QItem",props:{...ie,...Ne,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:o,emit:n}){const{proxy:{$q:r}}=V(),t=oe(e,r),{hasLink:a,linkAttrs:u,linkClass:h,linkTag:m,navigateOnClick:s}=Ke(),i=S(null),x=S(null),d=c(()=>e.clickable===!0||a.value===!0||e.tag==="label"),v=c(()=>e.disable!==!0&&d.value===!0),g=c(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(a.value===!0&&e.active===null?h.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(v.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),$=c(()=>{if(e.insetLevel===void 0)return null;const b=r.lang.rtl===!0?"Right":"Left";return{["padding"+b]:16+e.insetLevel*56+"px"}});function B(b){v.value===!0&&(x.value!==null&&(b.qKeyEvent!==!0&&document.activeElement===i.value?x.value.focus():document.activeElement===x.value&&i.value.focus()),s(b))}function w(b){if(v.value===!0&&_t(b,[13,32])===!0){Xe(b),b.qKeyEvent=!0;const y=new MouseEvent("click",b);y.qKeyEvent=!0,i.value.dispatchEvent(y)}n("keyup",b)}function f(){const b=Ue(o.default,[]);return v.value===!0&&b.unshift(k("div",{class:"q-focus-helper",tabindex:-1,ref:x})),b}return()=>{const b={ref:i,class:g.value,style:$.value,role:"listitem",onClick:B,onKeyup:w};return v.value===!0?(b.tabindex=e.tabindex||"0",Object.assign(b,u.value)):d.value===!0&&(b["aria-disabled"]="true"),k(m.value,b,f())}}}),Xt=M({name:"QList",props:{...ie,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:o}){const n=V(),r=oe(e,n.proxy.$q),t=c(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(r.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>k(e.tag,{class:t.value},N(o.default))}});const Yt={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},xe={xs:2,sm:4,md:8,lg:16,xl:24};var Ae=M({name:"QSeparator",props:{...ie,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const o=V(),n=oe(e,o.proxy.$q),r=c(()=>e.vertical===!0?"vertical":"horizontal"),t=c(()=>` q-separator--${r.value}`),a=c(()=>e.inset!==!1?`${t.value}-${Yt[e.inset]}`:""),u=c(()=>`q-separator${t.value}${a.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(n.value===!0?" q-separator--dark":"")),h=c(()=>{const m={};if(e.size!==void 0&&(m[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const s=e.spaced===!0?`${xe.md}px`:e.spaced in xe?`${xe[e.spaced]}px`:e.spaced,i=e.vertical===!0?["Left","Right"]:["Top","Bottom"];m[`margin${i[0]}`]=m[`margin${i[1]}`]=s}return m});return()=>k("hr",{class:u.value,style:h.value,"aria-orientation":r.value})}});function qe(e,o,n){const r=ke(e);let t,a=r.left-o.event.x,u=r.top-o.event.y,h=Math.abs(a),m=Math.abs(u);const s=o.direction;s.horizontal===!0&&s.vertical!==!0?t=a<0?"left":"right":s.horizontal!==!0&&s.vertical===!0?t=u<0?"up":"down":s.up===!0&&u<0?(t="up",h>m&&(s.left===!0&&a<0?t="left":s.right===!0&&a>0&&(t="right"))):s.down===!0&&u>0?(t="down",h>m&&(s.left===!0&&a<0?t="left":s.right===!0&&a>0&&(t="right"))):s.left===!0&&a<0?(t="left",h<m&&(s.up===!0&&u<0?t="up":s.down===!0&&u>0&&(t="down"))):s.right===!0&&a>0&&(t="right",h<m&&(s.up===!0&&u<0?t="up":s.down===!0&&u>0&&(t="down")));let i=!1;if(t===void 0&&n===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,i=!0,t==="left"||t==="right"?(r.left-=a,h=0,a=0):(r.top-=u,m=0,u=0)}return{synthetic:i,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:r,direction:t,isFirst:o.event.isFirst,isFinal:n===!0,duration:Date.now()-o.event.time,distance:{x:h,y:m},offset:{x:a,y:u},delta:{x:r.left-o.event.lastX,y:r.top-o.event.lastY}}}}let Gt=0;var _e=xt({name:"touch-pan",beforeMount(e,{value:o,modifiers:n}){if(n.mouse!==!0&&Y.has.touch!==!0)return;function r(a,u){n.mouse===!0&&u===!0?Xe(a):(n.stop===!0&&ye(a),n.prevent===!0&&Me(a))}const t={uid:"qvtp_"+Gt++,handler:o,modifiers:n,direction:Ve(n),noop:Ye,mouseStart(a){Fe(a,t)&&kt(a)&&(te(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(Fe(a,t)){const u=a.target;te(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,u){if(Y.is.firefox===!0&&ge(e,!0),t.lastEvt=a,u===!0||n.stop===!0){if(t.direction.all!==!0&&(u!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const s=a.type.indexOf("mouse")!==-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&Me(s),a.cancelBubble===!0&&ye(s),Object.assign(s,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:s}}ye(a)}const{left:h,top:m}=ke(a);t.event={x:h,y:m,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:h,lastY:m}},move(a){if(t.event===void 0)return;const u=ke(a),h=u.left-t.event.x,m=u.top-t.event.y;if(h===0&&m===0)return;t.lastEvt=a;const s=t.event.mouse===!0,i=()=>{r(a,s);let v;n.preserveCursor!==!0&&n.preservecursor!==!0&&(v=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),s===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ft(),t.styleCleanup=g=>{if(t.styleCleanup=void 0,v!==void 0&&(document.documentElement.style.cursor=v),document.body.classList.remove("non-selectable"),s===!0){const $=()=>{document.body.classList.remove("no-pointer-events--children")};g!==void 0?setTimeout(()=>{$(),g()},50):$()}else g!==void 0&&g()}};if(t.event.detected===!0){t.event.isFirst!==!0&&r(a,t.event.mouse);const{payload:v,synthetic:g}=qe(a,t,!1);v!==void 0&&(t.handler(v)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&i(),t.event.lastX=v.position.left,t.event.lastY=v.position.top,t.event.lastDir=g===!0?void 0:v.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||s===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){i(),t.event.detected=!0,t.move(a);return}const x=Math.abs(h),d=Math.abs(m);x!==d&&(t.direction.horizontal===!0&&x>d||t.direction.vertical===!0&&x<d||t.direction.up===!0&&x<d&&m<0||t.direction.down===!0&&x<d&&m>0||t.direction.left===!0&&x>d&&h<0||t.direction.right===!0&&x>d&&h>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,u){if(t.event!==void 0){if(be(t,"temp"),Y.is.firefox===!0&&ge(e,!1),u===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(qe(a===void 0?t.lastEvt:a,t).payload);const{payload:h}=qe(a===void 0?t.lastEvt:a,t,!0),m=()=>{t.handler(h)};t.styleCleanup!==void 0?t.styleCleanup(m):m()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,n.mouse===!0){const a=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";te(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}Y.has.touch===!0&&te(t,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const n=e.__qtouchpan;n!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&n.end(),n.handler=o.value),n.direction=Ve(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),be(o,"main"),be(o,"temp"),Y.is.firefox===!0&&ge(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});function ne(e,o,n){return n<=o?o:Math.min(n,Math.max(o,e))}const We=150;var Jt=M({name:"QDrawer",inheritAttrs:!1,props:{...ft,...ie,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...mt,"onLayout","miniState"],setup(e,{slots:o,emit:n,attrs:r}){const t=V(),{proxy:{$q:a}}=t,u=oe(e,a),{preventBodyScroll:h}=yt(),{registerTimeout:m,removeTimeout:s}=At(),i=Se(le,O);if(i===O)return console.error("QDrawer needs to be child of QLayout"),O;let x,d=null,v;const g=S(e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint),$=c(()=>e.mini===!0&&g.value!==!0),B=c(()=>$.value===!0?e.miniWidth:e.width),w=S(e.showIfAbove===!0&&g.value===!1?!0:e.modelValue===!0),f=c(()=>e.persistent!==!0&&(g.value===!0||Ze.value===!0));function b(l,p){if(F(),l!==!1&&i.animate(),Q(0),g.value===!0){const z=i.instances[J.value];z!==void 0&&z.belowBreakpoint===!0&&z.hide(!1),D(1),i.isContainer.value!==!0&&h(!0)}else D(0),l!==!1&&de(!1);m(()=>{l!==!1&&de(!0),p!==!0&&n("show",l)},We)}function y(l,p){K(),l!==!1&&i.animate(),D(0),Q(A.value*B.value),ve(),p!==!0?m(()=>{n("hide",l)},We):s()}const{show:C,hide:E}=ht({showing:w,hideOnRouteChange:f,handleShow:b,handleHide:y}),{addToHistory:F,removeFromHistory:K}=gt(w,E,f),H={belowBreakpoint:g,hide:E},P=c(()=>e.side==="right"),A=c(()=>(a.lang.rtl===!0?-1:1)*(P.value===!0?1:-1)),Te=S(0),W=S(!1),re=S(!1),$e=S(B.value*A.value),J=c(()=>P.value===!0?"left":"right"),se=c(()=>w.value===!0&&g.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:B.value:0),ue=c(()=>e.overlay===!0||e.miniToOverlay===!0||i.view.value.indexOf(P.value?"R":"L")!==-1||a.platform.is.ios===!0&&i.isContainer.value===!0),U=c(()=>e.overlay===!1&&w.value===!0&&g.value===!1),Ze=c(()=>e.overlay===!0&&w.value===!0&&g.value===!1),et=c(()=>"fullscreen q-drawer__backdrop"+(w.value===!1&&W.value===!1?" hidden":"")),tt=c(()=>({backgroundColor:`rgba(0,0,0,${Te.value*.4})`})),ze=c(()=>P.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),at=c(()=>P.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),nt=c(()=>{const l={};return i.header.space===!0&&ze.value===!1&&(ue.value===!0?l.top=`${i.header.offset}px`:i.header.space===!0&&(l.top=`${i.header.size}px`)),i.footer.space===!0&&at.value===!1&&(ue.value===!0?l.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(l.bottom=`${i.footer.size}px`)),l}),lt=c(()=>{const l={width:`${B.value}px`,transform:`translateX(${$e.value}px)`};return g.value===!0?l:Object.assign(l,nt.value)}),it=c(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),ot=c(()=>`q-drawer q-drawer--${e.side}`+(re.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(W.value===!0?" no-transition":w.value===!0?"":" q-layout--prevent-focus")+(g.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${$.value===!0?"mini":"standard"}`+(ue.value===!0||U.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ze.value===!0?" q-drawer--top-padding":""))),rt=c(()=>{const l=a.lang.rtl===!0?e.side:J.value;return[[_e,dt,void 0,{[l]:!0,mouse:!0}]]}),st=c(()=>{const l=a.lang.rtl===!0?J.value:e.side;return[[_e,Ee,void 0,{[l]:!0,mouse:!0}]]}),ut=c(()=>{const l=a.lang.rtl===!0?J.value:e.side;return[[_e,Ee,void 0,{[l]:!0,mouse:!0,mouseAllDir:!0}]]});function ce(){vt(g,e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint)}q(g,l=>{l===!0?(x=w.value,w.value===!0&&E(!1)):e.overlay===!1&&e.behavior!=="mobile"&&x!==!1&&(w.value===!0?(Q(0),D(0),ve()):C(!1))}),q(()=>e.side,(l,p)=>{i.instances[p]===H&&(i.instances[p]=void 0,i[p].space=!1,i[p].offset=0),i.instances[l]=H,i[l].size=B.value,i[l].space=U.value,i[l].offset=se.value}),q(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&ce()}),q(()=>e.behavior+e.breakpoint,ce),q(i.isContainer,l=>{w.value===!0&&h(l!==!0),l===!0&&ce()}),q(i.scrollbarWidth,()=>{Q(w.value===!0?0:void 0)}),q(se,l=>{R("offset",l)}),q(U,l=>{n("onLayout",l),R("space",l)}),q(P,()=>{Q()}),q(B,l=>{Q(),fe(e.miniToOverlay,l)}),q(()=>e.miniToOverlay,l=>{fe(l,B.value)}),q(()=>a.lang.rtl,()=>{Q()}),q(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(ct(),i.animate())}),q($,l=>{n("miniState",l)});function Q(l){l===void 0?Pe(()=>{l=w.value===!0?0:B.value,Q(A.value*l)}):(i.isContainer.value===!0&&P.value===!0&&(g.value===!0||Math.abs(l)===B.value)&&(l+=A.value*i.scrollbarWidth.value),$e.value=l)}function D(l){Te.value=l}function de(l){const p=l===!0?"remove":i.isContainer.value!==!0?"add":"";p!==""&&document.body.classList[p]("q-body--drawer-toggle")}function ct(){d!==null&&clearTimeout(d),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),re.value=!0,d=setTimeout(()=>{d=null,re.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function dt(l){if(w.value!==!1)return;const p=B.value,z=ne(l.distance.x,0,p);if(l.isFinal===!0){z>=Math.min(75,p)===!0?C():(i.animate(),D(0),Q(A.value*p)),W.value=!1;return}Q((a.lang.rtl===!0?P.value!==!0:P.value)?Math.max(p-z,0):Math.min(0,z-p)),D(ne(z/p,0,1)),l.isFirst===!0&&(W.value=!0)}function Ee(l){if(w.value!==!0)return;const p=B.value,z=l.direction===e.side,Z=(a.lang.rtl===!0?z!==!0:z)?ne(l.distance.x,0,p):0;if(l.isFinal===!0){Math.abs(Z)<Math.min(75,p)===!0?(i.animate(),D(1),Q(0)):E(),W.value=!1;return}Q(A.value*Z),D(ne(1-Z/p,0,1)),l.isFirst===!0&&(W.value=!0)}function ve(){h(!1),de(!0)}function R(l,p){i.update(e.side,l,p)}function vt(l,p){l.value!==p&&(l.value=p)}function fe(l,p){R("size",l===!0?e.miniWidth:p)}return i.instances[e.side]=H,fe(e.miniToOverlay,B.value),R("space",U.value),R("offset",se.value),e.showIfAbove===!0&&e.modelValue!==!0&&w.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),Ge(()=>{n("onLayout",U.value),n("miniState",$.value),x=e.showIfAbove===!0;const l=()=>{(w.value===!0?b:y)(!1,!0)};if(i.totalWidth.value!==0){Pe(l);return}v=q(i.totalWidth,()=>{v(),v=void 0,w.value===!1&&e.showIfAbove===!0&&g.value===!1?C(!1):l()})}),Be(()=>{v!==void 0&&v(),d!==null&&(clearTimeout(d),d=null),w.value===!0&&ve(),i.instances[e.side]===H&&(i.instances[e.side]=void 0,R("size",0),R("offset",0),R("space",!1))}),()=>{const l=[];g.value===!0&&(e.noSwipeOpen===!1&&l.push(Ct(k("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),rt.value)),l.push(Qe("div",{ref:"backdrop",class:et.value,style:tt.value,"aria-hidden":"true",onClick:E},void 0,"backdrop",e.noSwipeBackdrop!==!0&&w.value===!0,()=>ut.value)));const p=$.value===!0&&o.mini!==void 0,z=[k("div",{...r,key:""+p,class:[it.value,r.class]},p===!0?o.mini():N(o.default))];return e.elevated===!0&&w.value===!0&&z.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(Qe("aside",{ref:"content",class:ot.value,style:lt.value},z,"contentclose",e.noSwipeClose!==!0&&g.value===!0,()=>st.value)),k("div",{class:"q-drawer-container"},l)}}}),Zt=M({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:n}}=V(),r=Se(le,O);if(r===O)return console.error("QPageContainer needs to be child of QLayout"),O;Je(St,!0);const t=c(()=>{const a={};return r.header.space===!0&&(a.paddingTop=`${r.header.size}px`),r.right.space===!0&&(a[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${r.right.size}px`),r.footer.space===!0&&(a.paddingBottom=`${r.footer.size}px`),r.left.space===!0&&(a[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${r.left.size}px`),a});return()=>k("div",{class:"q-page-container",style:t.value},N(o.default))}});const{passive:je}=Bt,ea=["both","horizontal","vertical"];var ta=M({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ea.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let r=null,t,a;q(()=>e.scrollTarget,()=>{m(),h()});function u(){r!==null&&r();const x=Math.max(0,pt(t)),d=wt(t),v={top:x-n.position.top,left:d-n.position.left};if(e.axis==="vertical"&&v.top===0||e.axis==="horizontal"&&v.left===0)return;const g=Math.abs(v.top)>=Math.abs(v.left)?v.top<0?"up":"down":v.left<0?"left":"right";n.position={top:x,left:d},n.directionChanged=n.direction!==g,n.delta=v,n.directionChanged===!0&&(n.direction=g,n.inflectionPoint=n.position),o("scroll",{...n})}function h(){t=bt(a,e.scrollTarget),t.addEventListener("scroll",s,je),s(!0)}function m(){t!==void 0&&(t.removeEventListener("scroll",s,je),t=void 0)}function s(x){if(x===!0||e.debounce===0||e.debounce==="0")u();else if(r===null){const[d,v]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];r=()=>{v(d),r=null}}}const{proxy:i}=V();return q(()=>i.$q.lang.rtl,u),Ge(()=>{a=i.$el.parentNode,h()}),Be(()=>{r!==null&&r(),m()}),Object.assign(i,{trigger:s,getPosition:()=>n}),Ye}}),aa=M({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:n}){const{proxy:{$q:r}}=V(),t=S(null),a=S(r.screen.height),u=S(e.container===!0?0:r.screen.width),h=S({position:0,direction:"down",inflectionPoint:0}),m=S(0),s=S(Lt.value===!0?0:he()),i=c(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),x=c(()=>e.container===!1?{minHeight:r.screen.height+"px"}:null),d=c(()=>s.value!==0?{[r.lang.rtl===!0?"left":"right"]:`${s.value}px`}:null),v=c(()=>s.value!==0?{[r.lang.rtl===!0?"right":"left"]:0,[r.lang.rtl===!0?"left":"right"]:`-${s.value}px`,width:`calc(100% + ${s.value}px)`}:null);function g(y){if(e.container===!0||document.qScrollPrevented!==!0){const C={position:y.position.top,direction:y.direction,directionChanged:y.directionChanged,inflectionPoint:y.inflectionPoint.top,delta:y.delta.top};h.value=C,e.onScroll!==void 0&&n("scroll",C)}}function $(y){const{height:C,width:E}=y;let F=!1;a.value!==C&&(F=!0,a.value=C,e.onScrollHeight!==void 0&&n("scrollHeight",C),w()),u.value!==E&&(F=!0,u.value=E),F===!0&&e.onResize!==void 0&&n("resize",y)}function B({height:y}){m.value!==y&&(m.value=y,w())}function w(){if(e.container===!0){const y=a.value>m.value?he():0;s.value!==y&&(s.value=y)}}let f=null;const b={instances:{},view:c(()=>e.view),isContainer:c(()=>e.container),rootRef:t,height:a,containerHeight:m,scrollbarWidth:s,totalWidth:c(()=>u.value+s.value),rows:c(()=>{const y=e.view.toLowerCase().split(" ");return{top:y[0].split(""),middle:y[1].split(""),bottom:y[2].split("")}}),header:ae({size:0,offset:0,space:!1}),right:ae({size:300,offset:0,space:!1}),footer:ae({size:0,offset:0,space:!1}),left:ae({size:300,offset:0,space:!1}),scroll:h,animate(){f!==null?clearTimeout(f):document.body.classList.add("q-body--layout-animate"),f=setTimeout(()=>{f=null,document.body.classList.remove("q-body--layout-animate")},155)},update(y,C,E){b[y][C]=E}};if(Je(le,b),he()>0){let E=function(){y=null,C.classList.remove("hide-scrollbar")},F=function(){if(y===null){if(C.scrollHeight>r.screen.height)return;C.classList.add("hide-scrollbar")}else clearTimeout(y);y=setTimeout(E,300)},K=function(H){y!==null&&H==="remove"&&(clearTimeout(y),E()),window[`${H}EventListener`]("resize",F)},y=null;const C=document.body;q(()=>e.container!==!0?"add":"remove",K),e.container!==!0&&K("add"),Tt(()=>{K("remove")})}return()=>{const y=qt(o.default,[k(ta,{onScroll:g}),k(Ce,{onResize:$})]),C=k("div",{class:i.value,style:x.value,ref:e.container===!0?void 0:t,tabindex:-1},y);return e.container===!0?k("div",{class:"q-layout-container overflow-hidden",ref:t},[k(Ce,{onResize:B}),k("div",{class:"absolute-full",style:d.value},[k("div",{class:"scroll",style:v.value},[C])])]):C}}});const Le=e=>(Ot("data-v-004131aa"),e=e(),Dt(),e),na={class:"lt-sm q-px-xs q-px-md row inline"},la=Le(()=>T("div",{class:"lt-sm",style:{width:"50px"}},null,-1)),ia={class:"gt-xs row items-center"},oa={class:"q-py-md q-pl-md row inline"},ra=Le(()=>T("div",{class:"gt-xs q-px-sm"},[T("div",{class:"gt-xs text-h5 column inline"}," Chalet Ski Club T\xEAte de Ran ")],-1)),sa={class:"gt-xs column q-gutter-y-sm justify-evenly"},ua={style:{display:"inline-block","white-space":"nowrap","font-size":"14px"}},ca={class:"gt-sm",style:{"font-size":"0.9em"}},da={class:"lt-md text-uppercase",style:{"font-size":"0.9em"}},va={class:"row justify-center"},fa={class:"column q-gutter-y-sm items-center"},ma={style:{display:"inline-block","white-space":"nowrap","font-size":"14px"}},ha=Le(()=>T("a",{style:{color:"#395875"},href:"mailto:contact@gslr.ch"},"contact@gslr.ch",-1)),ga={__name:"MainLayout",setup(e){let o=S("unique"),n=zt();const r=[{title:"Le chalet",icon:"chalet",to:"description"},{title:"Tarifs et R\xE9servation",icon:"calendar_month",to:"booking"},{title:"Taxe de s\xE9jour",icon:"attach_money",to:"tax"},{title:"Acc\xE8s",icon:"route",to:"contact"}],t=S(!1);function a(){t.value=!t.value}let u=S(!1);q(()=>n.name,()=>{u.value=n.name==="description"},{immediate:!0}),window.onscroll=function(){u.value&&h()};function h(){document.body.scrollTop>20||document.documentElement.scrollTop>20?(document.getElementById("navbar").classList.add("navbar-solid"),document.getElementById("navbar").classList.remove("navbar-transparent"),document.getElementById("navbar").classList.remove("gradient")):(document.getElementById("navbar").classList.add("navbar-transparent"),document.getElementById("navbar").classList.remove("navbar-solid"),document.getElementById("navbar").classList.add("gradient"))}return(m,s)=>{const i=Oe("router-link"),x=Oe("router-view");return I(),j(aa,{view:"lHh Lpr lFf"},{default:L(()=>[_(Nt,{id:"navbar",class:Mt(G(n).name==="home"?"navbar-transparent gradient":"navbar-solid"),"height-hint":"98"},{default:L(()=>[_(Wt,{id:"toolbar",class:"justify-between q-pa-md"},{default:L(()=>[_(me,{flat:"",dense:"",round:"",class:"lt-sm q-mx-sm",icon:"menu","aria-label":"Menu",onClick:a}),T("div",na,[_(i,{to:"/",rounded:"",class:"homeLogoTab"},{default:L(()=>[G(n).name==="home"?(I(),j(X,{key:0,"no-spinner":"",style:{"max-width":"150px","min-width":"100px","max-height":"80px"},src:`sctdr.svg\r
            `,fit:"contain"})):(I(),j(X,{key:1,"no-spinner":"",style:{"max-width":"150px","min-width":"100px","max-height":"80px"},src:`sctdr.svg\r
            `,fit:"contain"}))]),_:1})]),la,T("div",ia,[_(me,{flat:"",dense:"",round:"",class:"lt-sm q-mx-sm",icon:"menu","aria-label":"Menu",onClick:a}),T("div",oa,[_(i,{to:"/",rounded:"",class:"homeLogoTab"},{default:L(()=>[G(n).name==="home"?(I(),j(X,{key:0,"no-spinner":"",style:{"max-width":"150px","min-width":"100px","max-height":"80px"},src:`sctdr.svg\r
            `,fit:"contain"})):(I(),j(X,{key:1,"no-spinner":"",style:{"max-width":"150px","min-width":"100px","max-height":"80px"},src:`sctdr.svg\r
            `,fit:"contain"}))]),_:1})])]),ra,T("div",sa,[T("div",ua,[_(ee,{name:"mail"}),pe("\u202F\u202F"),T("a",{style:Et(G(n).name==="home"?"color:#395875":"color: #395875"),href:"mailto:jpamcollaud@hotmail.com"},"jpamcollaud@hotmail.com",4)])])]),_:1}),_(Ht,{modelValue:G(o),"onUpdate:modelValue":s[0]||(s[0]=d=>Qt(o)?o.value=d:o=d),"no-caps":"",dense:"",align:"justify",class:"gt-xs",style:{"font-size":"10px","background-color":"rgba(255, 255, 255, 0.7)"}},{default:L(()=>[(I(),De(Ie,null,Re(r,d=>_(jt,{key:d.title,name:d.title,exact:"",to:d.to},{default:L(()=>[T("span",ca,we(d.title),1),T("span",da,we(d.title),1)]),_:2},1032,["name","to"])),64))]),_:1},8,["modelValue"])]),_:1},8,["class"]),_(Jt,{modelValue:t.value,"onUpdate:modelValue":s[1]||(s[1]=d=>t.value=d),elevated:"",overlay:"",class:"col items-center"},{default:L(()=>[T("div",va,[_(me,{flat:"",rounded:"",size:"xl",class:"q-ma-lg text-brand",onClick:a},{default:L(()=>[_(ee,{name:"close",size:"lg",class:"textSize"})]),_:1})]),_(Xt,{class:"q-gutter-y-sm text-brand q-pl-xl"},{default:L(()=>[(I(),De(Ie,null,Re(r,d=>_(Ut,{clickable:"",tag:"to",key:d.to,to:d.to,active:!1,class:"items-center"},{default:L(()=>[d.icon?(I(),j(He,{key:0,avatar:""},{default:L(()=>[_(ee,{name:d.icon},null,8,["name"])]),_:2},1024)):Pt("",!0),_(He,null,{default:L(()=>[_(Kt,null,{default:L(()=>[pe(we(d.title),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"])),64))]),_:1}),_(Ae,{class:"q-my-lg q-mx-xl",inset:""}),_(i,{to:"/",rounded:"",class:"homeLogoTab column items-center"},{default:L(()=>[_(X,{"no-spinner":"",style:{"max-width":"150px","min-width":"100px","max-height":"80px"},src:`sctdr.svg\r
          `,fit:"contain"})]),_:1}),_(Ae,{class:"q-my-lg q-mx-xl",inset:""}),T("div",fa,[T("div",ma,[_(ee,{name:"mail"}),pe("\u202F\u202F"),ha])])]),_:1},8,["modelValue"]),_(Zt,{class:"text-white"},{default:L(()=>[_(x)]),_:1})]),_:1})}}};var Ba=$t(ga,[["__scopeId","data-v-004131aa"]]);export{Ba as default};
