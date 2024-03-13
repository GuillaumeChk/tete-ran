import{c as d,h as m,g as N,b as Q,z as oe,E as ce,C as te,D as de,r as V,o as fe,w as ve,s as T,a1 as me,m as ge,B as be}from"./index.86fec3ff.js";import{u as ne,a as ae,v as he,Q as ye}from"./vm.7e065798.js";import{c as re,h as ke,a as K,d as pe}from"./render.c45d14df.js";import{c as xe}from"./dom.d7de4124.js";const F="0 0 24 24",H=e=>e,D=e=>`ionicons ${e}`,le={"mdi-":e=>`mdi ${e}`,"icon-":H,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":D,"ion-ios":D,"ion-logo":D,"iconfont ":H,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},ue={o_:"-outlined",r_:"-round",s_:"-sharp"},ie={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},qe=new RegExp("^("+Object.keys(le).join("|")+")"),Ee=new RegExp("^("+Object.keys(ue).join("|")+")"),U=new RegExp("^("+Object.keys(ie).join("|")+")"),$e=/^[Mm]\s?[-+]?\.?\d/,Re=/^img:/,we=/^svguse:/,Le=/^ion-/,Be=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var W=re({name:"QIcon",props:{...ne,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:l}}=N(),n=ae(e),i=d(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),f=d(()=>{let o,a=e.name;if(a==="none"||!a)return{none:!0};if(l.iconMapFn!==null){const s=l.iconMapFn(a);if(s!==void 0)if(s.icon!==void 0){if(a=s.icon,a==="none"||!a)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if($e.test(a)===!0){const[s,y=F]=a.split("|");return{svg:!0,viewBox:y,nodes:s.split("&&").map(u=>{const[k,b,p]=u.split("@@");return m("path",{style:b,d:k,transform:p})})}}if(Re.test(a)===!0)return{img:!0,src:a.substring(4)};if(we.test(a)===!0){const[s,y=F]=a.split("|");return{svguse:!0,src:s.substring(7),viewBox:y}}let q=" ";const h=a.match(qe);if(h!==null)o=le[h[1]](a);else if(Be.test(a)===!0)o=a;else if(Le.test(a)===!0)o=`ionicons ion-${l.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(U.test(a)===!0){o="notranslate material-symbols";const s=a.match(U);s!==null&&(a=a.substring(6),o+=ie[s[1]]),q=a}else{o="notranslate material-icons";const s=a.match(Ee);s!==null&&(a=a.substring(2),o+=ue[s[1]]),q=a}return{cls:o,content:q}});return()=>{const o={class:i.value,style:n.value,"aria-hidden":"true",role:"presentation"};return f.value.none===!0?m(e.tag,o,ke(t.default)):f.value.img===!0?m(e.tag,o,K(t.default,[m("img",{src:f.value.src})])):f.value.svg===!0?m(e.tag,o,K(t.default,[m("svg",{viewBox:f.value.viewBox||"0 0 24 24"},f.value.nodes)])):f.value.svguse===!0?m(e.tag,o,K(t.default,[m("svg",{viewBox:f.value.viewBox},[m("use",{"xlink:href":f.value.src})])])):(f.value.cls!==void 0&&(o.class+=" "+f.value.cls),m(e.tag,o,K(t.default,[f.value.content])))}}});function Ce(e,t=250){let l=!1,n;return function(){return l===!1&&(l=!0,setTimeout(()=>{l=!1},t),n=e.apply(this,arguments)),n}}function X(e,t,l,n){l.modifiers.stop===!0&&te(e);const i=l.modifiers.color;let f=l.modifiers.center;f=f===!0||n===!0;const o=document.createElement("span"),a=document.createElement("span"),q=de(e),{left:h,top:s,width:y,height:u}=t.getBoundingClientRect(),k=Math.sqrt(y*y+u*u),b=k/2,p=`${(y-k)/2}px`,c=f?p:`${q.left-h-b}px`,x=`${(u-k)/2}px`,S=f?x:`${q.top-s-b}px`;a.className="q-ripple__inner",xe(a,{height:`${k}px`,width:`${k}px`,transform:`translate3d(${c},${S},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${i?" text-"+i:""}`,o.setAttribute("dir","ltr"),o.appendChild(a),t.appendChild(o);const C=()=>{o.remove(),clearTimeout(_)};l.abort.push(C);let _=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${p},${x},0) scale3d(1,1,1)`,a.style.opacity=.2,_=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,_=setTimeout(()=>{o.remove(),l.abort.splice(l.abort.indexOf(C),1)},275)},250)},50)}function Y(e,{modifiers:t,value:l,arg:n}){const i=Object.assign({},e.cfg.ripple,t,l);e.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||n,keyCodes:[].concat(i.keyCodes||13)}}var _e=pe({name:"ripple",beforeMount(e,t){const l=t.instance.$.appContext.config.globalProperties.$q.config||{};if(l.ripple===!1)return;const n={cfg:l,enabled:t.value!==!1,modifiers:{},abort:[],start(i){n.enabled===!0&&i.qSkipRipple!==!0&&i.type===(n.modifiers.early===!0?"pointerdown":"click")&&X(i,e,n,i.qKeyEvent===!0)},keystart:Ce(i=>{n.enabled===!0&&i.qSkipRipple!==!0&&Q(i,n.modifiers.keyCodes)===!0&&i.type===`key${n.modifiers.early===!0?"down":"up"}`&&X(i,e,n,!0)},300)};Y(n,t),e.__qripple=n,oe(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const l=e.__qripple;l!==void 0&&(l.enabled=t.value!==!1,l.enabled===!0&&Object(t.value)===t.value&&Y(l,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(l=>{l()}),ce(t,"main"),delete e._qripple)}});const se={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Se=Object.keys(se),Te={align:{type:String,validator:e=>Se.includes(e)}};function Pe(e){return d(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${se[t]}`})}function G(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function J(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Oe(e,t){for(const l in t){const n=t[l],i=e[l];if(typeof n=="string"){if(n!==i)return!1}else if(Array.isArray(i)===!1||i.length!==n.length||n.some((f,o)=>f!==i[o]))return!1}return!0}function Z(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((l,n)=>l===t[n]):e.length===1&&e[0]===t}function Ae(e,t){return Array.isArray(e)===!0?Z(e,t):Array.isArray(t)===!0?Z(t,e):e===t}function Me(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const l in e)if(Ae(e[l],t[l])===!1)return!1;return!0}const je={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Ke({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const l=N(),{props:n,proxy:i,emit:f}=l,o=he(l),a=d(()=>n.disable!==!0&&n.href!==void 0),q=t===!0?d(()=>o===!0&&n.disable!==!0&&a.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):d(()=>o===!0&&a.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),h=d(()=>q.value===!0?S(n.to):null),s=d(()=>h.value!==null),y=d(()=>a.value===!0||s.value===!0),u=d(()=>n.type==="a"||y.value===!0?"a":n.tag||e||"div"),k=d(()=>a.value===!0?{href:n.href,target:n.target}:s.value===!0?{href:h.value.href,target:n.target}:{}),b=d(()=>{if(s.value===!1)return-1;const{matched:v}=h.value,{length:E}=v,R=v[E-1];if(R===void 0)return-1;const L=i.$route.matched;if(L.length===0)return-1;const B=L.findIndex(J.bind(null,R));if(B!==-1)return B;const I=G(v[E-2]);return E>1&&G(R)===I&&L[L.length-1].path!==I?L.findIndex(J.bind(null,v[E-2])):B}),p=d(()=>s.value===!0&&b.value!==-1&&Oe(i.$route.params,h.value.params)),c=d(()=>p.value===!0&&b.value===i.$route.matched.length-1&&Me(i.$route.params,h.value.params)),x=d(()=>s.value===!0?c.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":p.value===!0?` ${n.activeClass}`:"":"");function S(v){try{return i.$router.resolve(v)}catch{}return null}function C(v,{returnRouterError:E,to:R=n.to,replace:L=n.replace}={}){if(n.disable===!0)return v.preventDefault(),Promise.resolve(!1);if(v.metaKey||v.altKey||v.ctrlKey||v.shiftKey||v.button!==void 0&&v.button!==0||n.target==="_blank")return Promise.resolve(!1);v.preventDefault();const B=i.$router[L===!0?"replace":"push"](R);return E===!0?B:B.then(()=>{}).catch(()=>{})}function _(v){if(s.value===!0){const E=R=>C(v,R);f("click",v,E),v.defaultPrevented!==!0&&E()}else f("click",v)}return{hasRouterLink:s,hasHrefLink:a,hasLink:y,linkTag:u,resolvedLink:h,linkIsActive:p,linkIsExactActive:c,linkClass:x,linkAttrs:k,getLink:S,navigateToRouterLink:C,navigateOnClick:_}}const ee={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Ie={xs:8,sm:10,md:14,lg:20,xl:24},ze=["button","submit","reset"],De=/[^\s]\/[^\s]/,Qe=["flat","outline","push","unelevated"],Ne=(e,t)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t,Ve={...ne,...je,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Qe.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Te.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Fe(e){const t=ae(e,Ie),l=Pe(e),{hasRouterLink:n,hasLink:i,linkTag:f,linkAttrs:o,navigateOnClick:a}=Ke({fallbackTag:"button"}),q=d(()=>{const c=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},c,{padding:e.padding.split(/\s+/).map(x=>x in ee?ee[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):c}),h=d(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),s=d(()=>e.disable!==!0&&e.loading!==!0),y=d(()=>s.value===!0?e.tabindex||0:-1),u=d(()=>Ne(e,"standard")),k=d(()=>{const c={tabindex:y.value};return i.value===!0?Object.assign(c,o.value):ze.includes(e.type)===!0&&(c.type=e.type),f.value==="a"?(e.disable===!0?c["aria-disabled"]="true":c.href===void 0&&(c.role="button"),n.value!==!0&&De.test(e.type)===!0&&(c.type=e.type)):e.disable===!0&&(c.disabled="",c["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(c,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),c}),b=d(()=>{let c;e.color!==void 0?e.flat===!0||e.outline===!0?c=`text-${e.textColor||e.color}`:c=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(c=`text-${e.textColor}`);const x=e.round===!0?"round":`rectangle${h.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${u.value} q-btn--${x}`+(c!==void 0?" "+c:"")+(s.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),p=d(()=>l.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:b,style:q,innerClasses:p,attributes:k,hasLink:i,linkTag:f,navigateOnClick:a,isActionable:s}}const{passiveCapture:$}=ge;let P=null,O=null,A=null;var Ye=re({name:"QBtn",props:{...Ve,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:l}){const{proxy:n}=N(),{classes:i,style:f,innerClasses:o,attributes:a,hasLink:q,linkTag:h,navigateOnClick:s,isActionable:y}=Fe(e),u=V(null),k=V(null);let b=null,p,c=null;const x=d(()=>e.label!==void 0&&e.label!==null&&e.label!==""),S=d(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:q.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),C=d(()=>({center:e.round})),_=d(()=>{const r=Math.max(0,Math.min(100,e.percentage));return r>0?{transition:"transform 0.6s",transform:`translateX(${r-100}%)`}:{}}),v=d(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if(y.value===!0){const r={onClick:R,onKeydown:L,onMousedown:I};if(n.$q.platform.has.touch===!0){const g=e.onTouchstart!==void 0?"":"Passive";r[`onTouchstart${g}`]=B}return r}return{onClick:T}}),E=d(()=>({ref:u,class:"q-btn q-btn-item non-selectable no-outline "+i.value,style:f.value,...a.value,...v.value}));function R(r){if(u.value!==null){if(r!==void 0){if(r.defaultPrevented===!0)return;const g=document.activeElement;if(e.type==="submit"&&g!==document.body&&u.value.contains(g)===!1&&g.contains(u.value)===!1){u.value.focus();const z=()=>{document.removeEventListener("keydown",T,!0),document.removeEventListener("keyup",z,$),u.value!==null&&u.value.removeEventListener("blur",z,$)};document.addEventListener("keydown",T,!0),document.addEventListener("keyup",z,$),u.value.addEventListener("blur",z,$)}}s(r)}}function L(r){u.value!==null&&(l("keydown",r),Q(r,[13,32])===!0&&O!==u.value&&(O!==null&&M(),r.defaultPrevented!==!0&&(u.value.focus(),O=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("keyup",w,!0),u.value.addEventListener("blur",w,$)),T(r)))}function B(r){u.value!==null&&(l("touchstart",r),r.defaultPrevented!==!0&&(P!==u.value&&(P!==null&&M(),P=u.value,b=r.target,b.addEventListener("touchcancel",w,$),b.addEventListener("touchend",w,$)),p=!0,c!==null&&clearTimeout(c),c=setTimeout(()=>{c=null,p=!1},200)))}function I(r){u.value!==null&&(r.qSkipRipple=p===!0,l("mousedown",r),r.defaultPrevented!==!0&&A!==u.value&&(A!==null&&M(),A=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("mouseup",w,$)))}function w(r){if(u.value!==null&&!(r!==void 0&&r.type==="blur"&&document.activeElement===u.value)){if(r!==void 0&&r.type==="keyup"){if(O===u.value&&Q(r,[13,32])===!0){const g=new MouseEvent("click",r);g.qKeyEvent=!0,r.defaultPrevented===!0&&be(g),r.cancelBubble===!0&&te(g),u.value.dispatchEvent(g),T(r),r.qKeyEvent=!0}l("keyup",r)}M()}}function M(r){const g=k.value;r!==!0&&(P===u.value||A===u.value)&&g!==null&&g!==document.activeElement&&(g.setAttribute("tabindex",-1),g.focus()),P===u.value&&(b!==null&&(b.removeEventListener("touchcancel",w,$),b.removeEventListener("touchend",w,$)),P=b=null),A===u.value&&(document.removeEventListener("mouseup",w,$),A=null),O===u.value&&(document.removeEventListener("keyup",w,!0),u.value!==null&&u.value.removeEventListener("blur",w,$),O=null),u.value!==null&&u.value.classList.remove("q-btn--active")}function j(r){T(r),r.qSkipRipple=!0}return fe(()=>{M(!0)}),Object.assign(n,{click:R}),()=>{let r=[];e.icon!==void 0&&r.push(m(W,{name:e.icon,left:e.stack!==!0&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&r.push(m("span",{class:"block"},[e.label])),r=K(t.default,r),e.iconRight!==void 0&&e.round===!1&&r.push(m(W,{name:e.iconRight,right:e.stack!==!0&&x.value===!0,role:"img","aria-hidden":"true"}));const g=[m("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&g.push(m("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[m("span",{class:"q-btn__progress-indicator fit block",style:_.value})])),g.push(m("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},r)),e.loading!==null&&g.push(m(me,{name:"q-transition--fade"},()=>e.loading===!0?[m("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[m(ye)])]:null)),ve(m(h.value,E.value,g),[[_e,S.value,void 0,C.value]])}}});export{W as Q,_e as R,Ke as a,Ye as b,je as u};