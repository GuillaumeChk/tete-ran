import{c as i,h as s}from"./index.539467ea.js";import{c as o}from"./render.b5e4ceae.js";const n={xs:18,sm:24,md:32,lg:38,xl:46},m={size:String};function z(e,t=n){return i(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const u={size:{type:[Number,String],default:"1em"},color:String};function c(e){return{cSize:i(()=>e.size in n?`${n[e.size]}px`:e.size),classes:i(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var S=o({name:"QSpinner",props:{...u,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:r}=c(e);return()=>s("svg",{class:r.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[s("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function f(e){return e.appContext.config.globalProperties.$router!==void 0}function d(e){return e.isUnmounted===!0||e.isDeactivated===!0}export{S as Q,z as a,d as b,m as u,f as v};
