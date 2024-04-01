import{c as k,h as M,z as Se,r as D,q as G,i as Me,w as N,o as oe,aj as he,g as W,ag as Re,aa as be,ah as qe,m as ae,t as Q,$ as pe,a0 as ye,f as J,W as Ve,Y as Fe,a as Ae,s as ie,v as _e}from"./index.99cbd99a.js";import{Q as se}from"./QIcon.b452112d.js";import{Q as Ee}from"./QSpinner.bbc61544.js";import{u as Be,a as $e}from"./use-prevent-scroll.b593bc64.js";import{u as ke}from"./uid.42677368.js";import{h as X,c as xe}from"./render.aeb3b3ee.js";import{f as ue,j as Oe}from"./QDialog.5357f6fb.js";import{a as Pe}from"./vm.0711697f.js";const Te={name:String};function ct(e){return k(()=>({type:"hidden",name:e.name,value:e.modelValue}))}function vt(e={}){return(t,u,i)=>{t[u](M("input",{class:"hidden"+(i||""),...e.value}))}}function Ie(e){return k(()=>e.name||e.for)}function Ce(e,t){return e===void 0?t===!0?`f_${ke()}`:void 0:e}function je(e,t=!0){if(Se.value===!0){const u=D(e);return t===!0&&e===void 0&&G(()=>{u.value=`f_${ke()}`}),u}return D(Ce(e,t))}function De({validate:e,resetValidation:t,requiresQForm:u}){const i=Me(he,!1);if(i!==!1){const{props:f,proxy:d}=W();Object.assign(d,{validate:e,resetValidation:t}),N(()=>f.disable,c=>{c===!0?(typeof t=="function"&&t(),i.unbindComponent(d)):i.bindComponent(d)}),G(()=>{f.disable!==!0&&i.bindComponent(d)}),oe(()=>{f.disable!==!0&&i.unbindComponent(d)})}else u===!0&&console.error("Parent QForm not found on useFormChild()!")}const de=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,fe=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,ce=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,ee=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,te=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,le={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>de.test(e),hexaColor:e=>fe.test(e),hexOrHexaColor:e=>ce.test(e),rgbColor:e=>ee.test(e),rgbaColor:e=>te.test(e),rgbOrRgbaColor:e=>ee.test(e)||te.test(e),hexOrRgbColor:e=>de.test(e)||ee.test(e),hexaOrRgbaColor:e=>fe.test(e)||te.test(e),anyColor:e=>ce.test(e)||ee.test(e)||te.test(e)},ze=[!0,!1,"ondemand"],Le={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>ze.includes(e)}};function Ne(e,t){const{props:u,proxy:i}=W(),f=D(!1),d=D(null),c=D(!1);De({validate:T,resetValidation:A});let y=0,B;const R=k(()=>u.rules!==void 0&&u.rules!==null&&u.rules.length!==0),x=k(()=>u.disable!==!0&&R.value===!0&&t.value===!1),m=k(()=>u.error===!0||f.value===!0),U=k(()=>typeof u.errorMessage=="string"&&u.errorMessage.length!==0?u.errorMessage:d.value);N(()=>u.modelValue,()=>{c.value=!0,x.value===!0&&u.lazyRules===!1&&I()});function v(){u.lazyRules!=="ondemand"&&x.value===!0&&c.value===!0&&I()}N(()=>u.reactiveRules,z=>{z===!0?B===void 0&&(B=N(()=>u.rules,v,{immediate:!0,deep:!0})):B!==void 0&&(B(),B=void 0)},{immediate:!0}),N(()=>u.lazyRules,v),N(e,z=>{z===!0?c.value=!0:x.value===!0&&u.lazyRules!=="ondemand"&&I()});function A(){y++,t.value=!1,c.value=!1,f.value=!1,d.value=null,I.cancel()}function T(z=u.modelValue){if(u.disable===!0||R.value===!1)return!0;const $=++y,V=t.value!==!0?()=>{c.value=!0}:()=>{},F=(w,C)=>{w===!0&&V(),f.value=w,d.value=C||null,t.value=!1},_=[];for(let w=0;w<u.rules.length;w++){const C=u.rules[w];let j;if(typeof C=="function"?j=C(z,le):typeof C=="string"&&le[C]!==void 0&&(j=le[C](z)),j===!1||typeof j=="string")return F(!0,j),!1;j!==!0&&j!==void 0&&_.push(j)}return _.length===0?(F(!1),!0):(t.value=!0,Promise.all(_).then(w=>{if(w===void 0||Array.isArray(w)===!1||w.length===0)return $===y&&F(!1),!0;const C=w.find(j=>j===!1||typeof j=="string");return $===y&&F(C!==void 0,C),C===void 0},w=>($===y&&(console.error(w),F(!0)),!1)))}const I=Re(T,0);return oe(()=>{B!==void 0&&B(),I.cancel()}),Object.assign(i,{resetValidation:A,validate:T}),be(i,"hasError",()=>m.value),{isDirtyModel:c,hasRules:R,hasError:m,errorMessage:U,validate:T,resetValidation:A}}const ve=/^on[A-Z]/;function Ke(e,t){const u={listeners:D({}),attributes:D({})};function i(){const f={},d={};for(const c in e)c!=="class"&&c!=="style"&&ve.test(c)===!1&&(f[c]=e[c]);for(const c in t.props)ve.test(c)===!0&&(d[c]=t.props[c]);u.attributes.value=f,u.listeners.value=d}return qe(i),i(),u}function re(e){return e!=null&&(""+e).length!==0}const Ze={...Be,...Le,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Ue=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function He({requiredForAttr:e=!0,tagProp:t}={}){const{props:u,attrs:i,proxy:f,vnode:d}=W(),c=$e(u,f.$q),y=je(u.for,e);return{requiredForAttr:e,tag:t===!0?k(()=>u.tag):{value:"label"},isDark:c,editable:k(()=>u.disable!==!0&&u.readonly!==!0),innerLoading:D(!1),focused:D(!1),hasPopupOpen:!1,splitAttrs:Ke(i,d),targetUid:y,rootRef:D(null),targetRef:D(null),controlRef:D(null)}}function Qe(e){const{props:t,emit:u,slots:i,attrs:f,proxy:d}=W(),{$q:c}=d;let y=null;e.hasValue===void 0&&(e.hasValue=k(()=>re(t.modelValue))),e.emitValue===void 0&&(e.emitValue=n=>{u("update:modelValue",n)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:a,onFocusout:l}),Object.assign(e,{clearValue:s,onControlFocusin:a,onControlFocusout:l,focus:C}),e.computedCounter===void 0&&(e.computedCounter=k(()=>{if(t.counter!==!1){const n=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,h=t.maxlength!==void 0?t.maxlength:t.maxValues;return n+(h!==void 0?" / "+h:"")}}));const{isDirtyModel:B,hasRules:R,hasError:x,errorMessage:m,resetValidation:U}=Ne(e.focused,e.innerLoading),v=e.floatingLabel!==void 0?k(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):k(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),A=k(()=>t.bottomSlots===!0||t.hint!==void 0||R.value===!0||t.counter===!0||t.error!==null),T=k(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),I=k(()=>`q-field row no-wrap items-start q-field--${T.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(v.value===!0?" q-field--float":"")+($.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(x.value===!0?" q-field--error":"")+(x.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&A.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),z=k(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(x.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),$=k(()=>t.labelSlot===!0||t.label!==void 0),V=k(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&x.value!==!0?` text-${t.labelColor}`:"")),F=k(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:v.value,modelValue:t.modelValue,emitValue:e.emitValue})),_=k(()=>{const n={};return e.targetUid.value&&(n.for=e.targetUid.value),t.disable===!0&&(n["aria-disabled"]="true"),n});N(()=>t.for,n=>{e.targetUid.value=Ce(n,e.requiredForAttr)});function w(){const n=document.activeElement;let h=e.targetRef!==void 0&&e.targetRef.value;h&&(n===null||n.id!==e.targetUid.value)&&(h.hasAttribute("tabindex")===!0||(h=h.querySelector("[tabindex]")),h&&h!==n&&h.focus({preventScroll:!0}))}function C(){ue(w)}function j(){Oe(w);const n=document.activeElement;n!==null&&e.rootRef.value.contains(n)&&n.blur()}function a(n){y!==null&&(clearTimeout(y),y=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,u("focus",n))}function l(n,h){y!==null&&clearTimeout(y),y=setTimeout(()=>{y=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,u("blur",n)),h!==void 0&&h())})}function s(n){ae(n),c.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),u("update:modelValue",null),u("clear",t.modelValue),Q(()=>{const h=B.value;U(),B.value=h})}function r(){const n=[];return i.prepend!==void 0&&n.push(M("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:J},i.prepend())),n.push(M("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},b())),x.value===!0&&t.noErrorIcon===!1&&n.push(q("error",[M(se,{name:c.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?n.push(q("inner-loading-append",i.loading!==void 0?i.loading():[M(Ee,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&n.push(q("inner-clearable-append",[M(se,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||c.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:s})])),i.append!==void 0&&n.push(M("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:J},i.append())),e.getInnerAppend!==void 0&&n.push(q("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&n.push(e.getControlChild()),n}function b(){const n=[];return t.prefix!==void 0&&t.prefix!==null&&n.push(M("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&n.push(e.getShadowControl()),e.getControl!==void 0?n.push(e.getControl()):i.rawControl!==void 0?n.push(i.rawControl()):i.control!==void 0&&n.push(M("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},i.control(F.value))),$.value===!0&&n.push(M("div",{class:V.value},X(i.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&n.push(M("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),n.concat(X(i.default))}function g(){let n,h;x.value===!0?m.value!==null?(n=[M("div",{role:"alert"},m.value)],h=`q--slot-error-${m.value}`):(n=X(i.error),h="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(n=[M("div",t.hint)],h=`q--slot-hint-${t.hint}`):(n=X(i.hint),h="q--slot-hint"));const K=t.counter===!0||i.counter!==void 0;if(t.hideBottomSpace===!0&&K===!1&&n===void 0)return;const S=M("div",{key:h,class:"q-field__messages col"},n);return M("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:J},[t.hideBottomSpace===!0?S:M(Ve,{name:"q-transition--field-message"},()=>S),K===!0?M("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():e.computedCounter.value):null])}function q(n,h){return h===null?null:M("div",{key:n,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},h)}let p=!1;return pe(()=>{p=!0}),ye(()=>{p===!0&&t.autofocus===!0&&d.focus()}),t.autofocus===!0&&G(()=>{d.focus()}),oe(()=>{y!==null&&clearTimeout(y)}),Object.assign(d,{focus:C,blur:j}),function(){const h=e.getControl===void 0&&i.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,..._.value}:_.value;return M(e.tag.value,{ref:e.rootRef,class:[I.value,f.class],style:f.style,...h},[i.before!==void 0?M("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:J},i.before()):null,M("div",{class:"q-field__inner relative-position col self-stretch"},[M("div",{ref:e.controlRef,class:z.value,tabindex:-1,...e.controlEvents},r()),A.value===!0?g():null]),i.after!==void 0?M("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:J},i.after()):null])}}const me={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},ne={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},we=Object.keys(ne);we.forEach(e=>{ne[e].regex=new RegExp(ne[e].pattern)});const Ye=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+we.join("")+"])|(.)","g"),ge=/[.*+?^${}()|[\]\\]/g,O=String.fromCharCode(1),We={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Je(e,t,u,i){let f,d,c,y,B,R;const x=D(null),m=D(v());function U(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}N(()=>e.type+e.autogrow,T),N(()=>e.mask,a=>{if(a!==void 0)I(m.value,!0);else{const l=C(m.value);T(),e.modelValue!==l&&t("update:modelValue",l)}}),N(()=>e.fillMask+e.reverseFillMask,()=>{x.value===!0&&I(m.value,!0)}),N(()=>e.unmaskedValue,()=>{x.value===!0&&I(m.value)});function v(){if(T(),x.value===!0){const a=_(C(e.modelValue));return e.fillMask!==!1?j(a):a}return e.modelValue}function A(a){if(a<f.length)return f.slice(-a);let l="",s=f;const r=s.indexOf(O);if(r!==-1){for(let b=a-s.length;b>0;b--)l+=O;s=s.slice(0,r)+l+s.slice(r)}return s}function T(){if(x.value=e.mask!==void 0&&e.mask.length!==0&&U(),x.value===!1){y=void 0,f="",d="";return}const a=me[e.mask]===void 0?e.mask:me[e.mask],l=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=l.replace(ge,"\\$&"),r=[],b=[],g=[];let q=e.reverseFillMask===!0,p="",n="";a.replace(Ye,(P,o,E,H,Z)=>{if(H!==void 0){const L=ne[H];g.push(L),n=L.negate,q===!0&&(b.push("(?:"+n+"+)?("+L.pattern+"+)?(?:"+n+"+)?("+L.pattern+"+)?"),q=!1),b.push("(?:"+n+"+)?("+L.pattern+")?")}else if(E!==void 0)p="\\"+(E==="\\"?"":E),g.push(E),r.push("([^"+p+"]+)?"+p+"?");else{const L=o!==void 0?o:Z;p=L==="\\"?"\\\\\\\\":L.replace(ge,"\\\\$&"),g.push(L),r.push("([^"+p+"]+)?"+p+"?")}});const h=new RegExp("^"+r.join("")+"("+(p===""?".":"[^"+p+"]")+"+)?"+(p===""?"":"["+p+"]*")+"$"),K=b.length-1,S=b.map((P,o)=>o===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+P):o===K?new RegExp("^"+P+"("+(n===""?".":n)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+P));c=g,y=P=>{const o=h.exec(e.reverseFillMask===!0?P:P.slice(0,g.length+1));o!==null&&(P=o.slice(1).join(""));const E=[],H=S.length;for(let Z=0,L=P;Z<H;Z++){const Y=S[Z].exec(L);if(Y===null)break;L=L.slice(Y.shift().length),E.push(...Y)}return E.length!==0?E.join(""):P},f=g.map(P=>typeof P=="string"?P:O).join(""),d=f.split(O).join(l)}function I(a,l,s){const r=i.value,b=r.selectionEnd,g=r.value.length-b,q=C(a);l===!0&&T();const p=_(q),n=e.fillMask!==!1?j(p):p,h=m.value!==n;r.value!==n&&(r.value=n),h===!0&&(m.value=n),document.activeElement===r&&Q(()=>{if(n===d){const S=e.reverseFillMask===!0?d.length:0;r.setSelectionRange(S,S,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const S=r.selectionEnd;let P=b-1;for(let o=B;o<=P&&o<S;o++)f[o]!==O&&P++;$.right(r,P);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)!==-1){const S=e.reverseFillMask===!0?b===0?n.length>p.length?1:0:Math.max(0,n.length-(n===d?0:Math.min(p.length,g)+1))+1:b;r.setSelectionRange(S,S,"forward");return}if(e.reverseFillMask===!0)if(h===!0){const S=Math.max(0,n.length-(n===d?0:Math.min(p.length,g+1)));S===1&&b===1?r.setSelectionRange(S,S,"forward"):$.rightReverse(r,S)}else{const S=n.length-g;r.setSelectionRange(S,S,"backward")}else if(h===!0){const S=Math.max(0,f.indexOf(O),Math.min(p.length,b)-1);$.right(r,S)}else{const S=b-1;$.right(r,S)}});const K=e.unmaskedValue===!0?C(n):n;String(e.modelValue)!==K&&(e.modelValue!==null||K!=="")&&u(K,!0)}function z(a,l,s){const r=_(C(a.value));l=Math.max(0,f.indexOf(O),Math.min(r.length,l)),B=l,a.setSelectionRange(l,s,"forward")}const $={left(a,l){const s=f.slice(l-1).indexOf(O)===-1;let r=Math.max(0,l-1);for(;r>=0;r--)if(f[r]===O){l=r,s===!0&&l++;break}if(r<0&&f[l]!==void 0&&f[l]!==O)return $.right(a,0);l>=0&&a.setSelectionRange(l,l,"backward")},right(a,l){const s=a.value.length;let r=Math.min(s,l+1);for(;r<=s;r++)if(f[r]===O){l=r;break}else f[r-1]===O&&(l=r);if(r>s&&f[l-1]!==void 0&&f[l-1]!==O)return $.left(a,s);a.setSelectionRange(l,l,"forward")},leftReverse(a,l){const s=A(a.value.length);let r=Math.max(0,l-1);for(;r>=0;r--)if(s[r-1]===O){l=r;break}else if(s[r]===O&&(l=r,r===0))break;if(r<0&&s[l]!==void 0&&s[l]!==O)return $.rightReverse(a,0);l>=0&&a.setSelectionRange(l,l,"backward")},rightReverse(a,l){const s=a.value.length,r=A(s),b=r.slice(0,l+1).indexOf(O)===-1;let g=Math.min(s,l+1);for(;g<=s;g++)if(r[g-1]===O){l=g,l>0&&b===!0&&l--;break}if(g>s&&r[l-1]!==void 0&&r[l-1]!==O)return $.leftReverse(a,s);a.setSelectionRange(l,l,"forward")}};function V(a){t("click",a),R=void 0}function F(a){if(t("keydown",a),Fe(a)===!0||a.altKey===!0)return;const l=i.value,s=l.selectionStart,r=l.selectionEnd;if(a.shiftKey||(R=void 0),a.keyCode===37||a.keyCode===39){a.shiftKey&&R===void 0&&(R=l.selectionDirection==="forward"?s:r);const b=$[(a.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(a.preventDefault(),b(l,R===s?r:s),a.shiftKey){const g=l.selectionStart;l.setSelectionRange(Math.min(R,g),Math.max(R,g),"forward")}}else a.keyCode===8&&e.reverseFillMask!==!0&&s===r?($.left(l,s),l.setSelectionRange(l.selectionStart,r,"backward")):a.keyCode===46&&e.reverseFillMask===!0&&s===r&&($.rightReverse(l,r),l.setSelectionRange(s,l.selectionEnd,"forward"))}function _(a){if(a==null||a==="")return"";if(e.reverseFillMask===!0)return w(a);const l=c;let s=0,r="";for(let b=0;b<l.length;b++){const g=a[s],q=l[b];if(typeof q=="string")r+=q,g===q&&s++;else if(g!==void 0&&q.regex.test(g))r+=q.transform!==void 0?q.transform(g):g,s++;else return r}return r}function w(a){const l=c,s=f.indexOf(O);let r=a.length-1,b="";for(let g=l.length-1;g>=0&&r!==-1;g--){const q=l[g];let p=a[r];if(typeof q=="string")b=q+b,p===q&&r--;else if(p!==void 0&&q.regex.test(p))do b=(q.transform!==void 0?q.transform(p):p)+b,r--,p=a[r];while(s===g&&p!==void 0&&q.regex.test(p));else return b}return b}function C(a){return typeof a!="string"||y===void 0?typeof a=="number"?y(""+a):a:y(a)}function j(a){return d.length-a.length<=0?a:e.reverseFillMask===!0&&a.length!==0?d.slice(0,-a.length)+a:a+d.slice(a.length)}return{innerValue:m,hasMask:x,moveCursorForPaste:z,updateMaskValue:I,onMaskedKeydown:F,onMaskedClick:V}}function Xe(e,t){function u(){const i=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(d=>{f.items.add(d)}),{files:f.files}}catch{return{files:void 0}}}return t===!0?k(()=>{if(e.type==="file")return u()}):k(u)}const Ge=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,et=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,tt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,nt=/[a-z0-9_ -]$/i;function ot(e){return function(u){if(u.type==="compositionend"||u.type==="change"){if(u.target.qComposing!==!0)return;u.target.qComposing=!1,e(u)}else u.type==="compositionupdate"&&u.target.qComposing!==!0&&typeof u.data=="string"&&(Ae.is.firefox===!0?nt.test(u.data)===!1:Ge.test(u.data)===!0||et.test(u.data)===!0||tt.test(u.data)===!0)===!0&&(u.target.qComposing=!0)}}var mt=xe({name:"QInput",inheritAttrs:!1,props:{...Ze,...We,...Te,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Ue,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:u}){const{proxy:i}=W(),{$q:f}=i,d={};let c=NaN,y,B,R=null,x;const m=D(null),U=Ie(e),{innerValue:v,hasMask:A,moveCursorForPaste:T,updateMaskValue:I,onMaskedKeydown:z,onMaskedClick:$}=Je(e,t,p,m),V=Xe(e,!0),F=k(()=>re(v.value)),_=ot(g),w=He(),C=k(()=>e.type==="textarea"||e.autogrow===!0),j=k(()=>C.value===!0||["text","search","url","tel","password"].includes(e.type)),a=k(()=>{const o={...w.splitAttrs.listeners.value,onInput:g,onPaste:b,onChange:h,onBlur:K,onFocus:ie};return o.onCompositionstart=o.onCompositionupdate=o.onCompositionend=_,A.value===!0&&(o.onKeydown=z,o.onClick=$),e.autogrow===!0&&(o.onAnimationend=q),o}),l=k(()=>{const o={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:U.value,...w.splitAttrs.attributes.value,id:w.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return C.value===!1&&(o.type=e.type),e.autogrow===!0&&(o.rows=1),o});N(()=>e.type,()=>{m.value&&(m.value.value=e.modelValue)}),N(()=>e.modelValue,o=>{if(A.value===!0){if(B===!0&&(B=!1,String(o)===c))return;I(o)}else v.value!==o&&(v.value=o,e.type==="number"&&d.hasOwnProperty("value")===!0&&(y===!0?y=!1:delete d.value));e.autogrow===!0&&Q(n)}),N(()=>e.autogrow,o=>{o===!0?Q(n):m.value!==null&&u.rows>0&&(m.value.style.height="auto")}),N(()=>e.dense,()=>{e.autogrow===!0&&Q(n)});function s(){ue(()=>{const o=document.activeElement;m.value!==null&&m.value!==o&&(o===null||o.id!==w.targetUid.value)&&m.value.focus({preventScroll:!0})})}function r(){m.value!==null&&m.value.select()}function b(o){if(A.value===!0&&e.reverseFillMask!==!0){const E=o.target;T(E,E.selectionStart,E.selectionEnd)}t("paste",o)}function g(o){if(!o||!o.target)return;if(e.type==="file"){t("update:modelValue",o.target.files);return}const E=o.target.value;if(o.target.qComposing===!0){d.value=E;return}if(A.value===!0)I(E,!1,o.inputType);else if(p(E),j.value===!0&&o.target===document.activeElement){const{selectionStart:H,selectionEnd:Z}=o.target;H!==void 0&&Z!==void 0&&Q(()=>{o.target===document.activeElement&&E.indexOf(o.target.value)===0&&o.target.setSelectionRange(H,Z)})}e.autogrow===!0&&n()}function q(o){t("animationend",o),n()}function p(o,E){x=()=>{R=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==o&&c!==o&&(c=o,E===!0&&(B=!0),t("update:modelValue",o),Q(()=>{c===o&&(c=NaN)})),x=void 0},e.type==="number"&&(y=!0,d.value=o),e.debounce!==void 0?(R!==null&&clearTimeout(R),d.value=o,R=setTimeout(x,e.debounce)):x()}function n(){requestAnimationFrame(()=>{const o=m.value;if(o!==null){const E=o.parentNode.style,{scrollTop:H}=o,{overflowY:Z,maxHeight:L}=f.platform.is.firefox===!0?{}:window.getComputedStyle(o),Y=Z!==void 0&&Z!=="scroll";Y===!0&&(o.style.overflowY="hidden"),E.marginBottom=o.scrollHeight-1+"px",o.style.height="1px",o.style.height=o.scrollHeight+"px",Y===!0&&(o.style.overflowY=parseInt(L,10)<o.scrollHeight?"auto":"hidden"),E.marginBottom="",o.scrollTop=H}})}function h(o){_(o),R!==null&&(clearTimeout(R),R=null),x!==void 0&&x(),t("change",o.target.value)}function K(o){o!==void 0&&ie(o),R!==null&&(clearTimeout(R),R=null),x!==void 0&&x(),y=!1,B=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{m.value!==null&&(m.value.value=v.value!==void 0?v.value:"")})}function S(){return d.hasOwnProperty("value")===!0?d.value:v.value!==void 0?v.value:""}oe(()=>{K()}),G(()=>{e.autogrow===!0&&n()}),Object.assign(w,{innerValue:v,fieldClass:k(()=>`q-${C.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:k(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:m,emitValue:p,hasValue:F,floatingLabel:k(()=>F.value===!0&&(e.type!=="number"||isNaN(v.value)===!1)||re(e.displayValue)),getControl:()=>M(C.value===!0?"textarea":"input",{ref:m,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...l.value,...a.value,...e.type!=="file"?{value:S()}:V.value}),getShadowControl:()=>M("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(C.value===!0?"":" text-no-wrap")},[M("span",{class:"invisible"},S()),M("span",e.shadowText)])});const P=Qe(w);return Object.assign(i,{focus:s,select:r,getNativeElement:()=>m.value}),be(i,"nativeEl",()=>m.value),P}}),gt=xe({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(e,{slots:t,emit:u}){const i=W(),f=D(null);let d=0;const c=[];function y(v){const A=typeof v=="boolean"?v:e.noErrorFocus!==!0,T=++d,I=(V,F)=>{u("validation"+(V===!0?"Success":"Error"),F)},z=V=>{const F=V.validate();return typeof F.then=="function"?F.then(_=>({valid:_,comp:V}),_=>({valid:!1,comp:V,err:_})):Promise.resolve({valid:F,comp:V})};return(e.greedy===!0?Promise.all(c.map(z)).then(V=>V.filter(F=>F.valid!==!0)):c.reduce((V,F)=>V.then(()=>z(F).then(_=>{if(_.valid===!1)return Promise.reject(_)})),Promise.resolve()).catch(V=>[V])).then(V=>{if(V===void 0||V.length===0)return T===d&&I(!0),!0;if(T===d){const{comp:F,err:_}=V[0];if(_!==void 0&&console.error(_),I(!1,F),A===!0){const w=V.find(({comp:C})=>typeof C.focus=="function"&&Pe(C.$)===!1);w!==void 0&&w.comp.focus()}}return!1})}function B(){d++,c.forEach(v=>{typeof v.resetValidation=="function"&&v.resetValidation()})}function R(v){v!==void 0&&ae(v);const A=d+1;y().then(T=>{A===d&&T===!0&&(e.onSubmit!==void 0?u("submit",v):v!==void 0&&v.target!==void 0&&typeof v.target.submit=="function"&&v.target.submit())})}function x(v){v!==void 0&&ae(v),u("reset"),Q(()=>{B(),e.autofocus===!0&&e.noResetFocus!==!0&&m()})}function m(){ue(()=>{if(f.value===null)return;const v=f.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||f.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||f.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(f.value.querySelectorAll("[tabindex]"),A=>A.tabIndex!==-1);v!=null&&v.focus({preventScroll:!0})})}_e(he,{bindComponent(v){c.push(v)},unbindComponent(v){const A=c.indexOf(v);A!==-1&&c.splice(A,1)}});let U=!1;return pe(()=>{U=!0}),ye(()=>{U===!0&&e.autofocus===!0&&m()}),G(()=>{e.autofocus===!0&&m()}),Object.assign(i.proxy,{validate:y,resetValidation:B,submit:R,reset:x,focus:m,getValidationComponents:()=>c}),()=>M("form",{class:"q-form",ref:f,onSubmit:R,onReset:x},X(t.default))}});export{gt as Q,ct as a,vt as b,mt as c,Ze as d,Ue as e,Qe as f,He as g,Ie as h,re as i,ot as j,Te as u};
