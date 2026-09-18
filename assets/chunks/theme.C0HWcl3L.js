import{d as K,o as i,c,n as g,u as o,r as y,a as S,m as Ie,b as k,_ as oo,w as Le,e as We,f as _,g as bt,F as D,h as pe,i as N,j as Pa,k as lo,l as u,p as $,t as z,q as Qe,s as Je,v as on,x as Yn,y as ht,z as at,A as Fe,B as so,C as m,D as v,E as pt,G as nt,H as Vt,T as ln,I as sn,J as st,K as jn,L as Bt,M as rn,N as Jt,O as Qt,P as io,Q as ma,R as Pt,S as re,U as Xn,V as ro,W as uo,X as Mt,Y as Dn,Z as Zn,$ as Jn,a0 as co,a1 as po,a2 as It,a3 as Kn,a4 as La,a5 as Ot,a6 as vo,a7 as fo,a8 as Ba,a9 as Cn,aa as mo,ab as Ma,ac as ko,ad as go,ae as bo}from"./framework.DT0gx6UF.js";function Ae(a,n){const t=a;return t.install=e=>{const s=n||a.name;s&&e.component(s,t)},t}const ka="kk";function Re(a){const n=`${ka}-${a}`,t=()=>n,e=h=>`${n}__${h}`,s=h=>`${n}--${h}`,l=(h,x)=>`${n}__${h}--${x}`,r=(h,x=!0)=>x?`is-${h}`:"",d=h=>`--${ka}-${h}`;return{b:t,e,m:s,em:l,is:r,cssVar:h=>`var(${d(h)})`,cssVarBlock:h=>`var(--${n}-${h})`,cssVarName:d}}const ho=["type","disabled","aria-disabled","aria-busy"],yo=K({name:"KkButton",inheritAttrs:!1,__name:"Button",props:{type:{default:"default"},size:{default:"medium"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},block:{type:Boolean,default:!1},nativeType:{default:"button"}},emits:["click"],setup(a,{emit:n}){const t=a,e=n,s=Re("button"),l=k(()=>[s.b(),s.m(t.type),s.m(t.size),s.is("disabled",t.disabled),s.is("loading",t.loading),s.is("block",t.block)]);function r(d){if(t.disabled||t.loading){d.preventDefault(),d.stopPropagation();return}e("click",d)}return(d,p)=>(i(),c("button",Ie({class:l.value,type:a.nativeType,disabled:a.disabled||a.loading,"aria-disabled":a.disabled||a.loading,"aria-busy":a.loading},d.$attrs,{onClick:r}),[a.loading?(i(),c("span",{key:0,class:g(o(s).e("spinner")),"aria-hidden":"true"},null,2)):d.$slots.icon?(i(),c("span",{key:1,class:g(o(s).e("icon"))},[y(d.$slots,"icon")],2)):S("",!0),d.$slots.default?(i(),c("span",{key:2,class:g(o(s).e("text"))},[y(d.$slots,"default")],2)):S("",!0)],16,ho))}}),me=Ae(yo,"KkButton"),tn=new Map,Fn=[];function ga(a){const n={width:a.width??24,height:a.height??24};let t=0;for(const[e,s]of Object.entries(a.icons))tn.set(`${a.prefix}:${e}`,{...n,...s}),t+=1;if(a.aliases)for(const[e,s]of Object.entries(a.aliases)){const l=a.icons[s.parent];l&&(tn.set(`${a.prefix}:${e}`,{...n,...l,rotate:s.rotate??l.rotate,hFlip:s.hFlip??l.hFlip,vFlip:s.vFlip??l.vFlip}),t+=1)}return Fn.includes(a.prefix)||Fn.push(a.prefix),t}function ba(a){if(!a)return;const n=tn.get(a);if(n)return n;if(!a.includes(":"))for(const t of Fn){const e=tn.get(`${t}:${a}`);if(e)return e}}function _o(){return Array.from(tn.keys())}function xo(a){const n=a.left??0,t=a.top??0,e=a.width??24,s=a.height??24;return`${n} ${t} ${e} ${s}`}function wo(a){const n=[],t=a.width??24,e=a.height??24;return a.hFlip&&n.push(`translate(${t} 0) scale(-1 1)`),a.vFlip&&n.push(`translate(0 ${e}) scale(1 -1)`),a.rotate&&n.push(`rotate(${a.rotate} ${t/2} ${e/2})`),n.join(" ")}let kn=null,Gt=null;function $o(){return _o().some(a=>a.startsWith("lucide:"))}async function So(){if(!(kn&&$o()))return Gt||(Gt=(async()=>{try{if(kn){ga(kn);return}const a=await oo(()=>import("./index.C9150cnU.js"),[]),n=a.icons??a.default;n&&(kn=n,ga(n))}catch{}finally{Gt=null}})(),Gt)}const Ko=["viewBox","aria-label"],Co=["transform","innerHTML"],To=["innerHTML"],zo=K({name:"KkIcon",inheritAttrs:!1,__name:"Icon",props:{name:{},size:{default:"var(--kk-font-size-lg)"},color:{default:""},spin:{type:Boolean,default:!1}},setup(a){const n=a,t=Re("icon"),e=_(0),s=k(()=>(e.value,ba(n.name))),l={small:"var(--kk-font-size-sm)",medium:"var(--kk-font-size-lg)",large:"var(--kk-font-size-xl)"},r=k(()=>{const C=n.size,B=typeof C=="number"?`${C}px`:l[C]??C;return{width:B,height:B,color:n.color||void 0}}),d=k(()=>[t.b(),t.is("spin",n.spin)]),p=k(()=>s.value?xo(s.value):"0 0 24 24"),f=k(()=>s.value?wo(s.value):""),h=k(()=>{var C;return((C=s.value)==null?void 0:C.body)??""});async function x(C){!C||ba(C)||(await So(),e.value+=1)}return Le(()=>n.name,x,{immediate:!0}),We(()=>{x(n.name)}),(C,B)=>(i(),c("svg",Ie({class:d.value,style:r.value,viewBox:p.value,xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",role:"img","aria-label":a.name},C.$attrs),[f.value?(i(),c("g",{key:0,transform:f.value,innerHTML:h.value},null,8,Co)):(i(),c("g",{key:1,innerHTML:h.value},null,8,To))],16,Ko))}}),Ge=Ae(zo,"KkIcon"),Po=K({name:"KkSpace",inheritAttrs:!1,__name:"Space",props:{size:{default:"small"},direction:{default:"horizontal"},align:{default:"center"},wrap:{type:Boolean,default:!1},fill:{type:Boolean,default:!1},split:{type:Boolean,default:!1}},setup(a){const n=a,t=bt(),e=Re("space"),s={small:"var(--kk-space-2)",medium:"var(--kk-space-3)",large:"var(--kk-space-4)"};function l(h){return h===void 0?s.small:typeof h=="number"?`${h}px`:s[h]??s.small}const r=k(()=>[e.b(),e.m(n.direction),e.m(`align-${n.align}`),e.is("wrap",n.wrap),e.is("fill",n.fill)]),d=k(()=>{const h=n.size,[x,C]=Array.isArray(h)?h:[h,h];return{"--kk-space-row-gap":l(x),"--kk-space-column-gap":l(C)}}),p=k(()=>{var B;const h=[],x=L=>{if(Array.isArray(L)){L.forEach(x);return}if(lo(L)){if(L.type===D&&Array.isArray(L.children)){x(L.children);return}h.push(L)}};if(x(((B=t.default)==null?void 0:B.call(t))??[]),!n.split||h.length<=1)return h;const C=[];return h.forEach((L,U)=>{var Z;U>0&&C.push(Pa("span",{class:e.e("split"),key:`split-${U}`},(Z=t.split)==null?void 0:Z.call(t))),C.push(L)}),C}),f=h=>h.node;return(h,x)=>(i(),c("div",Ie({class:r.value,style:d.value},h.$attrs),[(i(!0),c(D,null,pe(p.value,(C,B)=>(i(),N(f,{key:B,node:C},null,8,["node"]))),128))],16))}}),ut=Ae(Po,"KkSpace"),Lo=["role"],Bo=K({name:"KkDivider",inheritAttrs:!1,__name:"Divider",props:{direction:{default:"horizontal"},contentPosition:{default:"center"},borderStyle:{default:"solid"},accent:{type:Boolean,default:!1}},setup(a){const n=a,t=bt(),e=Re("divider"),s=k(()=>n.direction==="horizontal"&&!!t.default),l=k(()=>[e.b(),e.m(n.direction),e.m(`content-${n.contentPosition}`),e.m(`style-${n.borderStyle}`),e.is("accent",n.accent),e.is("with-text",s.value)]);return(r,d)=>(i(),c("div",Ie({class:l.value,role:a.direction==="horizontal"?"separator":void 0},r.$attrs),[s.value?(i(),c("span",{key:0,class:g(o(e).e("text"))},[y(r.$slots,"default")],2)):S("",!0)],16,Lo))}}),Lt=Ae(Bo,"KkDivider"),Mo=K({name:"KkCard",inheritAttrs:!1,__name:"Card",props:{title:{default:""},subtitle:{default:""},shadow:{default:"always"},padding:{default:"medium"},hoverable:{type:Boolean,default:!1},bordered:{type:Boolean,default:!0},loading:{type:Boolean,default:!1}},setup(a){const n=a,t=bt(),e=Re("card"),s=k(()=>!!t.header||!!n.title||!!n.subtitle||!!t.extra),l=k(()=>!!t.footer),r=k(()=>!!t.cover),d=k(()=>[e.b(),e.m(`shadow-${n.shadow}`),e.m(`padding-${n.padding}`),e.is("hoverable",n.hoverable),e.is("bordered",n.bordered),e.is("loading",n.loading)]);return(p,f)=>(i(),c("div",Ie({class:d.value},p.$attrs),[r.value?(i(),c("div",{key:0,class:g(o(e).e("cover"))},[y(p.$slots,"cover")],2)):S("",!0),s.value?(i(),c("div",{key:1,class:g(o(e).e("header"))},[y(p.$slots,"header",{},()=>[u("div",{class:g(o(e).e("title-group"))},[a.title||p.$slots.title?(i(),c("div",{key:0,class:g(o(e).e("title"))},[y(p.$slots,"title",{},()=>[$(z(a.title),1)])],2)):S("",!0),a.subtitle||p.$slots.subtitle?(i(),c("div",{key:1,class:g(o(e).e("subtitle"))},[y(p.$slots,"subtitle",{},()=>[$(z(a.subtitle),1)])],2)):S("",!0)],2)]),p.$slots.extra?(i(),c("div",{key:0,class:g(o(e).e("extra"))},[y(p.$slots,"extra")],2)):S("",!0)],2)):S("",!0),u("div",{class:g(o(e).e("body"))},[y(p.$slots,"default"),a.loading?(i(),c("div",{key:0,class:g(o(e).e("loading")),"aria-hidden":"true"},[u("span",{class:g(o(e).e("spinner"))},null,2)],2)):S("",!0)],2),l.value?(i(),c("div",{key:2,class:g(o(e).e("footer"))},[y(p.$slots,"footer")],2)):S("",!0)],16))}}),zt=Ae(Mo,"KkCard"),Vo=K({name:"KkTag",inheritAttrs:!1,__name:"Tag",props:{type:{default:"default"},size:{default:"medium"},effect:{default:"light"},closable:{type:Boolean,default:!1},round:{type:Boolean,default:!1},bordered:{type:Boolean,default:!0}},emits:["close","click"],setup(a,{emit:n}){const t=a,e=n,s=Re("tag"),l=k(()=>[s.b(),s.m(t.type),s.m(t.size),s.m(`effect-${t.effect}`),s.is("round",t.round),s.is("bordered",t.bordered)]);function r(p){p.stopPropagation(),e("close",p)}function d(p){e("click",p)}return(p,f)=>(i(),c("span",Ie({class:l.value},p.$attrs,{onClick:d}),[p.$slots.icon?(i(),c("span",{key:0,class:g(o(s).e("icon"))},[y(p.$slots,"icon")],2)):S("",!0),u("span",{class:g(o(s).e("text"))},[y(p.$slots,"default")],2),a.closable?(i(),c("button",{key:1,class:g(o(s).e("close")),type:"button","aria-label":"关闭",onClick:r},[...f[0]||(f[0]=[u("svg",{viewBox:"0 0 24 24",width:"10",height:"10","aria-hidden":"true"},[u("path",{d:"M5 5L19 19M19 5L5 19",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1)])],2)):S("",!0)],16))}}),tt=Ae(Vo,"KkTag"),Ut=Symbol("kk-form-context"),Tn=Symbol("kk-form-item-context"),Io=["type","value","placeholder","disabled","readonly","maxlength","minlength","name","autocomplete","autofocus","aria-invalid"],Oo=["aria-label"],Eo={viewBox:"0 0 24 24",width:"14",height:"14","aria-hidden":"true"},Ao={key:0,d:"M4 20L20 4",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"},Ro=K({name:"KkInput",inheritAttrs:!1,__name:"Input",props:{modelValue:{default:""},type:{default:"text"},size:{},placeholder:{default:""},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},maxlength:{},minlength:{},invalid:{type:Boolean,default:!1},errorMessage:{default:""},block:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},name:{default:""},autocomplete:{default:"off"}},emits:["update:modelValue","input","change","clear","focus","blur","keydown","enter"],setup(a,{expose:n,emit:t}){const e=a,s=t,l=Re("input"),r=Qe(Ut,void 0),d=Qe(Tn,void 0),p=_(),f=_(!1),h=_(!1),x=k(()=>e.disabled||!!(r!=null&&r.disabled)),C=k(()=>e.size??(r==null?void 0:r.size)??"medium"),B=k(()=>{var X;return e.invalid||!!((X=d==null?void 0:d.message)!=null&&X.value)}),L=k(()=>e.showPassword?h.value?"text":"password":e.type),U=k(()=>e.modelValue===void 0||e.modelValue===null?"":String(e.modelValue)),Z=k(()=>e.clearable&&!x.value&&!e.readonly&&U.value.length>0),M=k(()=>[l.b(),l.is("block",e.block)]),O=k(()=>[l.e("control"),l.em("control",C.value),l.is("disabled",x.value),l.is("focused",f.value),l.is("readonly",e.readonly),l.is("invalid",B.value)]);function E(X){const ce=X.target.value;s("update:modelValue",ce),s("input",ce),d==null||d.validate("change")}function j(X){s("change",X.target.value),d==null||d.validate("change")}function I(X){f.value=!0,s("focus",X)}function G(X){f.value=!1,s("blur",X),d==null||d.validate("blur")}function ae(X){X.key==="Enter"&&s("enter",X),s("keydown",X)}function H(){s("update:modelValue",""),s("input",""),s("change",""),s("clear"),Je(()=>{var X;return(X=p.value)==null?void 0:X.focus()})}function Q(){h.value=!h.value,Je(()=>{const X=p.value;if(!X)return;const ce=X.value.length;X.setSelectionRange(ce,ce)})}function ne(){var X;(X=p.value)==null||X.focus()}function le(){var X;(X=p.value)==null||X.blur()}function xe(){var X;(X=p.value)==null||X.select()}return n({focus:ne,blur:le,select:xe,inputRef:p}),(X,ce)=>(i(),c("div",{class:g(M.value)},[u("div",Ie({class:o(l).e("row")},X.$attrs),[X.$slots.prepend?(i(),c("span",{key:0,class:g(o(l).e("prepend"))},[y(X.$slots,"prepend")],2)):S("",!0),u("div",{class:g(O.value)},[X.$slots.prefix?(i(),c("span",{key:0,class:g(o(l).e("prefix"))},[y(X.$slots,"prefix")],2)):S("",!0),u("input",{ref_key:"inputRef",ref:p,class:g(o(l).e("inner")),type:L.value,value:U.value,placeholder:a.placeholder,disabled:x.value,readonly:a.readonly,maxlength:a.maxlength,minlength:a.minlength,name:a.name,autocomplete:a.autocomplete,autofocus:a.autofocus,"aria-invalid":B.value,onInput:E,onChange:j,onFocus:I,onBlur:G,onKeydown:ae},null,42,Io),Z.value?(i(),c("button",{key:1,class:g(o(l).e("clear")),type:"button","aria-label":"清空",onClick:H},[...ce[0]||(ce[0]=[u("svg",{viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":"true"},[u("path",{d:"M5 5L19 19M19 5L5 19",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1)])],2)):S("",!0),a.showPassword?(i(),c("button",{key:2,class:g(o(l).e("password")),type:"button","aria-label":h.value?"隐藏密码":"显示密码",onClick:Q},[(i(),c("svg",Eo,[ce[1]||(ce[1]=u("path",{d:"M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z",fill:"none",stroke:"currentColor","stroke-width":"2"},null,-1)),ce[2]||(ce[2]=u("circle",{cx:"12",cy:"12",r:"2.5",fill:"none",stroke:"currentColor","stroke-width":"2"},null,-1)),h.value?S("",!0):(i(),c("path",Ao))]))],10,Oo)):S("",!0),X.$slots.suffix?(i(),c("span",{key:3,class:g(o(l).e("suffix"))},[y(X.$slots,"suffix")],2)):S("",!0)],2),X.$slots.append?(i(),c("span",{key:1,class:g(o(l).e("append"))},[y(X.$slots,"append")],2)):S("",!0)],16),a.errorMessage?(i(),c("div",{key:0,class:g(o(l).e("error")),role:"alert"},[ce[3]||(ce[3]=u("svg",{viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":"true"},[u("circle",{cx:"12",cy:"12",r:"9",fill:"none",stroke:"currentColor","stroke-width":"2"}),u("path",{d:"M12 7v6M12 16.5v.5",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"})],-1)),u("span",null,z(a.errorMessage),1)],2)):S("",!0)],2))}}),Ye=Ae(Ro,"KkInput"),jo=K({name:"KkForm",inheritAttrs:!1,__name:"Form",props:{model:{default:()=>({})},rules:{default:()=>({})},labelWidth:{default:""},labelPosition:{default:"right"},size:{default:"medium"},disabled:{type:Boolean,default:!1},showMessage:{type:Boolean,default:!0},inline:{type:Boolean,default:!1},validateOnRuleChange:{type:Boolean,default:!0}},emits:["submit","reset","validate"],setup(a,{expose:n,emit:t}){const e=a,s=t,l=Re("form"),r=Yn([]),d=k(()=>e.disabled),p=on({model:e.model,rules:e.rules,size:e.size,disabled:e.disabled,labelWidth:e.labelWidth,labelPosition:e.labelPosition,showMessage:e.showMessage,inline:e.inline,addField(M){r.value.includes(M)||r.value.push(M)},removeField(M){const O=r.value.indexOf(M);O>-1&&r.value.splice(O,1)},notifyValidate(M,O,E){s("validate",M,O,E)}});ht(Ut,p),Le(()=>e.model,M=>{p.model=M},{deep:!1}),Le(()=>e.rules,M=>{p.rules=M}),Le(()=>e.disabled,M=>{p.disabled=M}),Le(()=>e.size,M=>{p.size=M}),Le(()=>e.labelPosition,M=>{p.labelPosition=M}),Le(()=>e.labelWidth,M=>{p.labelWidth=M});const f=k(()=>[l.b(),l.m(`label-${e.labelPosition}`),l.is("inline",e.inline),l.is("disabled",e.disabled)]);async function h(M){let O=!0;return(await Promise.all(r.value.map(async j=>{const I=await j.validate();return{prop:j.prop,valid:!I,message:I}}))).forEach(j=>{j.valid||(O=!1)}),M==null||M(O),O}async function x(M){const O=Array.isArray(M)?M:[M];await Promise.all(r.value.filter(E=>O.includes(E.prop)).map(E=>E.validate()))}function C(M){(M?r.value.filter(E=>M.includes(E.prop)):r.value).forEach(E=>E.resetField()),s("reset")}function B(M){(M?r.value.filter(E=>M.includes(E.prop)):r.value).forEach(E=>E.clearValidate())}function L(M){const O=document.querySelector(`[data-kk-form-prop="${M}"]`);O==null||O.scrollIntoView({block:"center",behavior:"smooth"})}function U(M){M.preventDefault(),s("submit",M)}function Z(M){M.preventDefault(),C()}return n({validate:h,validateField:x,resetFields:C,clearValidate:B,scrollToField:L,fields:r,disabled:d}),(M,O)=>(i(),c("form",Ie({class:f.value},M.$attrs,{onSubmit:U,onReset:Z}),[y(M.$slots,"default")],16))}});function ha(a,n){if(!n)return a;if(typeof a!="object"||a===null)return;const t=n.split(".");let e=a;for(const s of t){if(typeof e!="object"||e===null)return;e=e[s]}return e}function Va(a){return a?Array.isArray(a)?a:[a]:[]}function Do(...a){return a.flatMap(n=>Va(n))}function Fo(a,n){return a.trigger?(Array.isArray(a.trigger)?a.trigger:[a.trigger]).includes(n):n==="change"}const ya=a=>a==null?!0:typeof a=="string"?a.trim()==="":Array.isArray(a)?a.length===0:!1,No=/^[\w.!#$%&'*+/=?^`{|}~-]+@[\w-]+(\.[\w-]+)+$/,Ho=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;async function Uo(a,n){if(typeof n.validator=="function"){const e=await n.validator(a,n);return e===!0||e===void 0||e===null?"":e===!1?n.message||"校验未通过":typeof e=="string"?e:n.message||"校验未通过"}if(n.required&&ya(a))return n.message||"该字段为必填项";if(ya(a))return"";if(n.type==="number"&&(typeof a!="number"||Number.isNaN(a)))return n.message||"请输入数字";if(n.type==="array"&&!Array.isArray(a))return n.message||"请选择至少一项";if(n.type==="email"&&(typeof a!="string"||!No.test(a)))return n.message||"请输入正确的邮箱地址";if(n.type==="url"&&(typeof a!="string"||!Ho.test(a)))return n.message||"请输入正确的链接地址";if(n.pattern&&typeof a=="string"&&!n.pattern.test(a))return n.message||"格式不正确";const t=Array.isArray(a)||typeof a=="string"?a.length:void 0;if(t!==void 0){if(n.min!==void 0&&t<n.min)return n.message||`长度不能少于 ${n.min}`;if(n.max!==void 0&&t>n.max)return n.message||`长度不能超过 ${n.max}`;if(n.len!==void 0&&t!==n.len)return n.message||`长度必须为 ${n.len}`}return""}async function Wo(a,n,t){const e=Array.isArray(n)?n:Va(n),s=t?e.filter(l=>Fo(l,t)):e;for(const l of s){const r=await Uo(a,l);if(r)return r}return""}const zn=Ae(jo,"KkForm"),qo=["data-kk-form-prop"],Go=K({name:"KkFormItem",inheritAttrs:!1,__name:"FormItem",props:{prop:{default:""},label:{default:""},labelWidth:{default:""},required:{type:Boolean,default:!1},rules:{default:()=>[]},showMessage:{type:Boolean,default:!0},error:{default:""}},setup(a,{expose:n}){const t=a,e=Re("form-item"),s=Qe(Ut,void 0),l=_(""),r=_(!1),d=k(()=>(s==null?void 0:s.labelPosition)??"right"),p=k(()=>{const j=t.labelWidth||(s==null?void 0:s.labelWidth)||"";return typeof j=="number"?`${j}px`:j}),f=k(()=>t.showMessage&&((s==null?void 0:s.showMessage)??!0)),h=k(()=>{var j;return Do((j=s==null?void 0:s.rules)==null?void 0:j[t.prop],t.rules)}),x=k(()=>t.required||h.value.some(j=>j.required)),C=k(()=>t.prop&&s?ha(s.model,t.prop):void 0),B=k(()=>t.error||l.value),L=k(()=>[e.b(),e.m(`label-${d.value}`),e.is("required",x.value),e.is("error",!!B.value),e.is("validating",r.value)]),U=k(()=>p.value?{width:p.value}:void 0);async function Z(j){if(!t.prop||h.value.length===0)return l.value="","";r.value=!0;try{const I=await Wo(C.value,h.value,j);return l.value=I,s==null||s.notifyValidate(t.prop,!I,I),I}finally{r.value=!1}}function M(){l.value=""}function O(){if(l.value="",!t.prop||!s)return;const j=ha(s.model,t.prop);Array.isArray(j)&&j.splice(0,j.length)}const E={get prop(){return t.prop},message:l,validate:Z,resetField:O,clearValidate:M};return ht(Tn,E),We(()=>{t.prop&&(s==null||s.addField(E))}),at(()=>{s==null||s.removeField(E)}),Le(C,()=>{l.value&&Z("change")}),n({validate:Z,clearValidate:M,resetField:O,message:l}),(j,I)=>(i(),c("div",Ie({class:L.value,"data-kk-form-prop":a.prop||void 0},j.$attrs),[a.label||j.$slots.label?(i(),c("label",{key:0,class:g(o(e).e("label")),style:Fe(U.value)},[y(j.$slots,"label",{},()=>[$(z(a.label),1)])],6)):S("",!0),u("div",{class:g(o(e).e("content"))},[u("div",{class:g(o(e).e("control"))},[y(j.$slots,"default")],2),f.value&&B.value?(i(),c("div",{key:0,class:g(o(e).e("error")),role:"alert"},[y(j.$slots,"error",{},()=>[$(z(B.value),1)])],2)):S("",!0)],2)],16,qo))}}),Ft=Ae(Go,"KkFormItem");let _a=0;function Et(a="kk-id"){return _a+=1,`${a}-${_a}`}const Yo=Object.prototype.toString;function In(a){return a==null}function gn(a){return typeof a=="function"}function Yt(a){return Array.isArray(a)}function Xo(a){return Yo.call(a)==="[object Object]"}function Nn(a){if(!Xo(a))return!1;const n=Object.getPrototypeOf(a);return n===null||n===Object.prototype}const $n={name:"zh-CN",label:"简体中文",short:"中",common:{confirm:"确定",cancel:"取消",close:"关闭",clear:"清空",reset:"重置",loading:"加载中",empty:"暂无数据",search:"搜索",noMatch:"无匹配数据",selectAll:"全选",remove:"移除",retry:"重试",expand:"展开",collapse:"收起",copy:"复制",copied:"已复制",preview:"预览",download:"下载",back:"返回",next:"下一步",finish:"完成",yes:"是",no:"否",more:"更多",total:"共 {total} 条",selected:"已选 {count} 项"},modal:{close:"关闭弹窗"},drawer:{close:"关闭抽屉",resize:"拖动调整尺寸"},select:{placeholder:"请选择",multiplePlaceholder:"请选择（可多选）",noData:"无匹配数据",loading:"加载中",create:"创建「{label}」",clear:"清空",removeTag:"移除 {label}",selectAll:"全选",deselectAll:"取消全选",selectedCount:"已选 {count} 项"},cascader:{placeholder:"请选择",noData:"无匹配数据",loading:"加载中",clear:"清空"},upload:{selectFile:"选择文件",drop:"将文件拖到此处，或",clickUpload:"点击上传",uploading:"上传中",success:"上传成功",fail:"上传失败",retry:"重试",remove:"删除",preview:"预览",close:"关闭",exceed:"最多只能上传 {limit} 个文件",sizeExceed:"「{name}」大小超过 {size}",typeNotAllowed:"「{name}」不在允许的文件类型内",empty:"暂无文件"},table:{empty:"暂无数据",loading:"加载中",selectAll:"全选本页",selectRow:"选择该行",expandRow:"展开行",collapseRow:"收起行",sortAsc:"点击升序",sortDesc:"点击降序",sortClear:"取消排序"},pagination:{prev:"上一页",next:"下一页",total:"共 {total} 条",sizes:"{size} 条/页",jumper:"前往",page:"页",goto:"跳至 {page} 页"},tabs:{add:"新增标签",close:"关闭「{label}」"},watermark:{text:"KK UI"},skeleton:{loading:"内容加载中"}},Hn={name:"en-US",label:"English",short:"EN",common:{confirm:"OK",cancel:"Cancel",close:"Close",clear:"Clear",reset:"Reset",loading:"Loading",empty:"No data",search:"Search",noMatch:"No matching data",selectAll:"Select all",remove:"Remove",retry:"Retry",expand:"Expand",collapse:"Collapse",copy:"Copy",copied:"Copied",preview:"Preview",download:"Download",back:"Back",next:"Next",finish:"Finish",yes:"Yes",no:"No",more:"More",total:"{total} items in total",selected:"{count} selected"},modal:{close:"Close dialog"},drawer:{close:"Close drawer",resize:"Drag to resize"},select:{placeholder:"Please select",multiplePlaceholder:"Please select (multiple)",noData:"No matching data",loading:"Loading",create:'Create "{label}"',clear:"Clear",removeTag:"Remove {label}",selectAll:"Select all",deselectAll:"Unselect all",selectedCount:"{count} selected"},cascader:{placeholder:"Please select",noData:"No matching data",loading:"Loading",clear:"Clear"},upload:{selectFile:"Select file",drop:"Drop file here, or",clickUpload:"click to upload",uploading:"Uploading",success:"Upload succeeded",fail:"Upload failed",retry:"Retry",remove:"Remove",preview:"Preview",close:"Close",exceed:"You can upload at most {limit} file(s)",sizeExceed:'"{name}" exceeds the size limit of {size}',typeNotAllowed:'"{name}" is not an allowed file type',empty:"No files"},table:{empty:"No data",loading:"Loading",selectAll:"Select all rows on this page",selectRow:"Select this row",expandRow:"Expand row",collapseRow:"Collapse row",sortAsc:"Click to sort ascending",sortDesc:"Click to sort descending",sortClear:"Clear sort"},pagination:{prev:"Previous",next:"Next",total:"{total} items in total",sizes:"{size} / page",jumper:"Go to",page:"page",goto:"Go to page {page}"},tabs:{add:"Add tab",close:'Close "{label}"'},watermark:{text:"KK UI"},skeleton:{loading:"Content is loading"}},Ia="kk-locale",Oa="zh-CN",$t=new Map;$t.set($n.name,$n);$t.set(Hn.name,Hn);const yn=_([$n.name,Hn.name]),Pn=_($n.name),Zo=()=>typeof document<"u";function Ea(a,n,t={}){const e=$t.get(a),s=e&&!t.replace?Ra(e,{...n,name:a,label:n.label??e.label}):{...n,name:a};return $t.set(a,s),yn.value.includes(a)||(yn.value=[...yn.value,a]),s}function Jo(){return[...yn.value]}function en(a=Aa()){const n=$t.get(a);return typeof(n==null?void 0:n.label)=="string"?n.label:String(a)}function Qo(a=Aa()){const n=$t.get(a);return typeof(n==null?void 0:n.short)=="string"?n.short:en(a)}function Aa(){return Pn.value}function Nt(a){Pn.value=a,Zo()&&document.documentElement.setAttribute("lang",String(a));try{localStorage.setItem(Ia,String(a))}catch{}}function el(){let a=null;try{a=localStorage.getItem(Ia)}catch{}if(a&&$t.has(a))return Nt(a),a;const n=typeof navigator<"u"&&navigator.language||"",t=n.toLowerCase().startsWith("zh")?"zh-CN":n?"en-US":Oa;return Nt(t),t}const tl=/\{(\w+)\}/g;function Ra(a,n){const t={...a};for(const[e,s]of Object.entries(n)){const l=t[e];t[e]=Nn(s)&&Nn(l)?Ra(l,s):s}return t}function nl(a,n){let t=a;for(const e of n.split(".")){if(!Nn(t))return;t=t[e]}return typeof t=="string"?t:void 0}function al(a,n){if(!n)return a;const t=Array.isArray(n)?n:void 0;return a.replace(tl,(e,s)=>{const l=t?t[Number(s)]:n[s];return l==null?e:String(l)})}function ol(a,n,t){const e=new Set([t??Pn.value,Oa,"en-US"]);for(const s of e){const l=$t.get(s);if(!l)continue;const r=nl(l,a);if(r!==void 0)return al(r,n)}return a}function et(a){const n=k(()=>Jo()),t=k(()=>so(a)??Pn.value),e=k(()=>en(t.value)),s=k(()=>Qo(t.value));function l(d,p){return ol(d,p,t.value)}function r(){const p=String(t.value).startsWith("zh")?"en-US":"zh-CN";Nt(p)}return{locale:t,locales:n,label:e,short:s,setLocale:Nt,toggleLocale:r,t:l}}const ll=1e3;let xa=0,Xt=0,wa="",$a="";function Qn(){return xa+=1,ll+xa}function ea(){if(typeof document>"u")return()=>{};if(Xt===0){const{body:n}=document;wa=n.style.overflow,$a=n.style.paddingRight;const t=window.innerWidth-document.documentElement.clientWidth;n.style.overflow="hidden",t>0&&(n.style.paddingRight=`${t}px`)}Xt+=1;let a=!1;return()=>{a||(a=!0,Xt=Math.max(0,Xt-1),Xt===0&&(document.body.style.overflow=wa,document.body.style.paddingRight=$a))}}const bn=56,sl="button, a, input, textarea, select, [data-kk-modal-no-drag]";function il(a){const n=_(!1),t=_({x:0,y:0});let e=0,s=0,l=0,r=0,d=0,p=0,f=0,h=0,x=!0,C="";function B(){const I=a.target.value;if(!I)return;const{x:G,y:ae}=t.value;if(G===0&&ae===0){I.style.removeProperty("transform");return}I.style.transform=`translate3d(${G.toFixed(1)}px, ${ae.toFixed(1)}px, 0)`}function L(){x=a.bounds()!=="none";const I=a.target.value;if(!x||!I)return;const G=I.getBoundingClientRect();d=bn-G.right,p=window.innerWidth-bn-G.left,f=bn-G.bottom,h=window.innerHeight-bn-G.top}function U(I){I.addEventListener("pointermove",O),I.addEventListener("pointerup",E),I.addEventListener("pointercancel",E)}function Z(I){I.removeEventListener("pointermove",O),I.removeEventListener("pointerup",E),I.removeEventListener("pointercancel",E)}function M(I){var H,Q;if(!a.enabled()||I.button!==0)return;const G=I.target;if(G!=null&&G.closest(sl))return;const ae=a.target.value;ae&&(I.preventDefault(),n.value=!0,e=I.clientX,s=I.clientY,l=t.value.x,r=t.value.y,L(),C=document.body.style.userSelect,document.body.style.userSelect="none",(H=ae.setPointerCapture)==null||H.call(ae,I.pointerId),U(ae),(Q=a.onStart)==null||Q.call(a))}function O(I){var H;if(!n.value)return;const G=l+(I.clientX-e),ae=r+(I.clientY-s);t.value={x:x?Math.min(p,Math.max(d,G)):G,y:x?Math.min(h,Math.max(f,ae)):ae},B(),(H=a.onMove)==null||H.call(a,t.value)}function E(I){var ae,H;if(!n.value)return;const G=a.target.value;n.value=!1,G&&((ae=G.hasPointerCapture)!=null&&ae.call(G,I.pointerId)&&G.releasePointerCapture(I.pointerId),Z(G)),document.body.style.userSelect=C,(H=a.onEnd)==null||H.call(a,t.value)}function j(){t.value={x:0,y:0},B()}return{dragging:n,position:t,onPointerDown:M,reset:j}}const rl=["aria-label","aria-labelledby"],ul=["id"],cl=["aria-label"],dl=400,pl=K({name:"KkModal",inheritAttrs:!1,__name:"Modal",props:{modelValue:{type:Boolean,default:!1},title:{default:""},subtitle:{default:""},width:{},height:{},maxHeight:{},top:{},center:{type:Boolean,default:!1},size:{default:"medium"},draggable:{type:Boolean,default:!1},dragHandle:{default:"header"},dragBounds:{default:"viewport"},resetOnClose:{type:Boolean,default:!0},mask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},destroyOnClose:{type:Boolean,default:!1},lockScroll:{type:Boolean,default:!0},appendTo:{default:"body"},zIndex:{},footer:{type:Boolean,default:!1},okText:{default:""},cancelText:{default:""},okLoading:{type:Boolean,default:!1},bordered:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},ariaLabel:{default:""}},emits:["update:modelValue","open","opened","close","closed","confirm","cancel","drag-start","drag","drag-end"],setup(a,{expose:n,emit:t}){const e=a,s=t,l={small:"420px",medium:"560px",large:"760px",full:"92vw"},r=["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(", "),d=bt(),p=Re("modal"),f=Et("kk-modal-title"),{t:h}=et(),x=k(()=>e.okText||h("common.confirm")),C=k(()=>e.cancelText||h("common.cancel")),B=_(null),L=_(!1),U=_(!1),Z=_(0);let M=null,O=null,E;const j=il({target:B,enabled:()=>e.draggable&&!e.disabled,bounds:()=>e.dragBounds,onStart:()=>s("drag-start",{...j.position.value}),onMove:T=>s("drag",{...T}),onEnd:T=>s("drag-end",{...T})}),I=k(()=>!!d.header||!!d.title||!!e.title||!!e.subtitle||e.showClose),G=k(()=>!!d.footer||e.footer),ae=k(()=>!!d.title||!!e.title),H=k(()=>e.zIndex??Z.value),Q=k(()=>[p.is("center",e.center)]),ne=k(()=>{const T={zIndex:H.value},J=X(e.top);return J&&(T["--kk-modal-top"]=J),T}),le=k(()=>[p.b(),p.is("draggable",e.draggable),p.is("drag-modal",e.draggable&&e.dragHandle==="modal"),p.is("dragging",j.dragging.value),p.is("disabled",e.disabled),p.is("loading",e.loading),p.is("bordered",e.bordered)]),xe=k(()=>{const T={};T.width=X(e.width)??l[e.size];const J=X(e.height);J&&(T.height=J);const te=X(e.maxHeight);return te&&(T["--kk-modal-max-height"]=te),T});function X(T){if(T!==void 0)return typeof T=="number"?`${T}px`:T}function ce(){Ve(),e.resetOnClose&&j.reset(),O=document.activeElement,U.value=!0,e.lockScroll&&(M=ea()),document.addEventListener("keydown",De,!0),s("open"),Je(()=>{var T;return(T=B.value)==null?void 0:T.focus()})}function $e(){e.zIndex===void 0&&(Z.value=Qn());const T=L.value;if(L.value=!0,T){ce();return}Je(ce)}function Ee(){L.value&&(U.value=!1,document.removeEventListener("keydown",De,!0),M==null||M(),M=null,he(),e.destroyOnClose&&ke())}function Ve(){E&&clearTimeout(E),E=void 0}function ke(){Ve(),E=setTimeout(()=>{E=void 0,L.value=!1},dl)}function ve(){s("update:modelValue",!0)}function Ke(T="close"){s("close",T),s("update:modelValue",!1)}function Y(T){e.disabled||Ke(T)}function se(){s("cancel"),Y("cancel")}function ze(){s("closed"),e.destroyOnClose&&(Ve(),L.value=!1)}function _e(){e.maskClosable&&Y("mask")}function be(T){e.dragHandle==="header"&&j.onPointerDown(T)}function Be(T){e.dragHandle==="modal"&&j.onPointerDown(T)}function De(T){if(T.key==="Escape"&&e.closeOnEsc){T.stopPropagation(),Y("esc");return}T.key==="Tab"&&W(T)}function W(T){const J=B.value;if(!J)return;const te=Array.from(J.querySelectorAll(r)),Se=document.activeElement;if(te.length===0){T.preventDefault(),J.focus();return}const ee=te[0],ye=te[te.length-1];T.shiftKey&&(Se===ee||Se===J)?(T.preventDefault(),ye.focus()):!T.shiftKey&&Se===ye&&(T.preventDefault(),ee.focus())}function he(){var J;const T=O;O=null,T&&document.contains(T)&&((J=T.focus)==null||J.call(T))}return Le(()=>e.modelValue,T=>{T?$e():Ee()},{immediate:!0}),at(()=>{document.removeEventListener("keydown",De,!0),M==null||M(),M=null,Ve()}),n({open:ve,close:Ke,reset:j.reset}),(T,J)=>L.value?(i(),N(sn,{key:0,to:a.appendTo},[m(ln,{name:"kk-modal",onAfterEnter:J[2]||(J[2]=te=>s("opened")),onAfterLeave:ze},{default:v(()=>[pt(u("div",{class:g([o(p).e("overlay"),Q.value]),style:Fe(ne.value),onClick:nt(_e,["self"])},[u("div",Ie({ref_key:"dialogRef",ref:B},T.$attrs,{class:le.value,style:xe.value,role:"dialog","aria-modal":"true","aria-label":a.ariaLabel||void 0,"aria-labelledby":ae.value?o(f):void 0,tabindex:"-1",onPointerdown:Be}),[I.value?(i(),c("header",{key:0,class:g(o(p).e("header")),onPointerdown:be},[u("div",{class:g(o(p).e("titles"))},[y(T.$slots,"header",{},()=>[ae.value?(i(),c("div",{key:0,id:o(f),class:g(o(p).e("title"))},[y(T.$slots,"title",{},()=>[$(z(a.title),1)])],10,ul)):S("",!0),a.subtitle?(i(),c("div",{key:1,class:g(o(p).e("subtitle"))},z(a.subtitle),3)):S("",!0)])],2),a.showClose?(i(),c("button",{key:0,class:g(o(p).e("close")),type:"button","aria-label":o(h)("modal.close"),onClick:J[0]||(J[0]=te=>Y("close"))},[y(T.$slots,"close",{},()=>[J[3]||(J[3]=u("svg",{viewBox:"0 0 24 24",width:"14",height:"14","aria-hidden":"true"},[u("path",{d:"M5 5L19 19M19 5L5 19",fill:"none",stroke:"currentColor","stroke-width":"2.4","stroke-linecap":"round"})],-1))])],10,cl)):S("",!0)],34)):S("",!0),u("div",{class:g(o(p).e("body"))},[y(T.$slots,"default"),a.loading?(i(),c("div",{key:0,class:g(o(p).e("loading")),"aria-hidden":"true"},[u("span",{class:g(o(p).e("spinner"))},null,2)],2)):S("",!0)],2),G.value?(i(),c("footer",{key:1,class:g(o(p).e("footer"))},[y(T.$slots,"footer",{},()=>[m(o(me),{disabled:a.disabled,onClick:se},{default:v(()=>[$(z(C.value),1)]),_:1},8,["disabled"]),m(o(me),{type:"primary",loading:a.okLoading,disabled:a.disabled,onClick:J[1]||(J[1]=te=>s("confirm"))},{default:v(()=>[$(z(x.value),1)]),_:1},8,["loading","disabled"])])],2)):S("",!0)],16,rl)],6),[[Vt,U.value]])]),_:3})],8,["to"])):S("",!0)}}),Wt=Ae(pl,"KkModal");function Xe(a,n="px"){if(!(a==null||a===""))return typeof a=="number"?`${a}${n}`:String(a)}const On=["B","KB","MB","GB","TB","PB"];function vl(a,n=1){if(!Number.isFinite(a)||a<=0)return`0 ${On[0]}`;const t=Math.min(Math.floor(Math.log(a)/Math.log(1024)),On.length-1),e=a/1024**t;return`${Number.isInteger(e)?String(e):e.toFixed(n)} ${On[t]}`}function hn(a,n,t=1){if(t===0)return[];const e=[];if(t>0)for(let s=a;s<=n;s+=t)e.push(s);else for(let s=a;s>=n;s+=t)e.push(s);return e}function _n(a,n,t){return Math.min(Math.max(a,n),t)}const fl=["aria-label","aria-labelledby"],ml=["id"],kl=["aria-label"],gl=["aria-label"],bl=400,hl=K({name:"KkDrawer",inheritAttrs:!1,__name:"Drawer",props:{modelValue:{type:Boolean,default:!1},title:{default:""},subtitle:{default:""},placement:{default:"right"},size:{default:"30%"},width:{},height:{},resizable:{type:Boolean,default:!1},minSize:{default:200},maxSize:{default:0},mask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},destroyOnClose:{type:Boolean,default:!1},lockScroll:{type:Boolean,default:!0},appendTo:{default:"body"},zIndex:{},footer:{type:Boolean,default:!1},okText:{default:""},cancelText:{default:""},okLoading:{type:Boolean,default:!1},bordered:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},ariaLabel:{default:""}},emits:["update:modelValue","open","opened","close","closed","confirm","cancel","resize"],setup(a,{expose:n,emit:t}){const e=a,s=t,l=["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(", "),r=bt(),d=Re("drawer"),p=Et("kk-drawer-title"),{t:f}=et(),h=k(()=>e.okText||f("common.confirm")),x=k(()=>e.cancelText||f("common.cancel")),C=_(null),B=_(!1),L=_(!1),U=_(0),Z=_(0),M=_(!1);let O=null,E=null,j,I=0,G=0;const ae=k(()=>e.placement==="top"||e.placement==="bottom"),H=k(()=>e.placement==="left"||e.placement==="top"),Q=k(()=>!!r.title||!!e.title),ne=k(()=>!!r.header||Q.value||!!e.subtitle||e.showClose),le=k(()=>!!r.footer||e.footer),xe=k(()=>e.zIndex??U.value),X=k(()=>[d.b(),d.m(e.placement),d.is("resizable",e.resizable),d.is("resizing",M.value),d.is("disabled",e.disabled),d.is("loading",e.loading),d.is("bordered",e.bordered)]),ce=k(()=>{const ee={zIndex:xe.value},ye=ae.value?e.height:e.width,Ce=Z.value>0?`${Z.value}px`:Xe(ye)??Xe(e.size);return Ce&&(ae.value?ee.height=Ce:ee.width=Ce),ee});function $e(){ke(),E=document.activeElement,L.value=!0,e.lockScroll&&(O=ea()),document.addEventListener("keydown",Be,!0),s("open"),Je(()=>{var ee;return(ee=C.value)==null?void 0:ee.focus()})}function Ee(){e.zIndex===void 0&&(U.value=Qn());const ee=B.value;if(B.value=!0,ee){$e();return}Je($e)}function Ve(){B.value&&(L.value=!1,document.removeEventListener("keydown",Be,!0),O==null||O(),O=null,W(),e.destroyOnClose&&ve())}function ke(){j&&clearTimeout(j),j=void 0}function ve(){ke(),j=setTimeout(()=>{j=void 0,B.value=!1},bl)}function Ke(){s("update:modelValue",!0)}function Y(ee="close"){s("close",ee),s("update:modelValue",!1)}function se(ee){e.disabled||Y(ee)}function ze(){s("closed"),e.destroyOnClose&&(ke(),B.value=!1)}function _e(){s("cancel"),se("cancel")}function be(){e.maskClosable&&se("mask")}function Be(ee){if(ee.key==="Escape"&&e.closeOnEsc){ee.stopPropagation(),se("esc");return}ee.key==="Tab"&&De(ee)}function De(ee){const ye=C.value;if(!ye)return;const Ce=Array.from(ye.querySelectorAll(l)),qe=document.activeElement;if(Ce.length===0){ee.preventDefault(),ye.focus();return}const He=Ce[0],je=Ce[Ce.length-1];ee.shiftKey&&(qe===He||qe===ye)?(ee.preventDefault(),je.focus()):!ee.shiftKey&&qe===je&&(ee.preventDefault(),He.focus())}function W(){var ye;const ee=E;E=null,ee&&document.contains(ee)&&((ye=ee.focus)==null||ye.call(ee))}const he={right:-1,left:1,bottom:-1,top:1};function T(ee){var qe;if(!e.resizable||e.disabled)return;const ye=C.value;if(!ye)return;ee.preventDefault(),M.value=!0,I=ye.getBoundingClientRect()[ae.value?"height":"width"],G=ae.value?ee.clientY:ee.clientX;const Ce=ee.currentTarget;try{(qe=Ce.setPointerCapture)==null||qe.call(Ce,ee.pointerId)}catch{}Ce.addEventListener("pointermove",J),Ce.addEventListener("pointerup",te),Ce.addEventListener("pointercancel",te)}function J(ee){if(!M.value)return;const ye=(ae.value?ee.clientY:ee.clientX)-G,Ce=I+ye*he[e.placement],qe=window.innerHeight||window.innerWidth||0,He=e.maxSize>0?e.maxSize:qe,je=Math.min(e.minSize,He);Z.value=_n(Math.round(Ce),je,He)}function te(ee){var Ce;if(!M.value)return;M.value=!1;const ye=ee.currentTarget;try{(Ce=ye.releasePointerCapture)==null||Ce.call(ye,ee.pointerId)}catch{}ye.removeEventListener("pointermove",J),ye.removeEventListener("pointerup",te),ye.removeEventListener("pointercancel",te),s("resize",Z.value)}function Se(){Z.value=0}return Le(()=>e.modelValue,ee=>{ee?Ee():Ve()},{immediate:!0}),Le(()=>e.placement,()=>{Z.value=0}),at(()=>{document.removeEventListener("keydown",Be,!0),O==null||O(),O=null,ke()}),n({open:Ke,close:Y,reset:Se}),(ee,ye)=>B.value?(i(),N(sn,{key:0,to:a.appendTo},[m(ln,{name:"kk-drawer",onAfterEnter:ye[2]||(ye[2]=Ce=>s("opened")),onAfterLeave:ze},{default:v(()=>[pt(u("div",{class:g(o(d).e("overlay")),style:Fe({zIndex:xe.value}),onClick:nt(be,["self"])},[u("div",Ie({ref_key:"drawerRef",ref:C},ee.$attrs,{class:X.value,style:ce.value,role:"dialog","aria-modal":"true","aria-label":a.ariaLabel||void 0,"aria-labelledby":Q.value?o(p):void 0,tabindex:"-1"}),[ne.value?(i(),c("header",{key:0,class:g(o(d).e("header"))},[u("div",{class:g(o(d).e("titles"))},[y(ee.$slots,"header",{},()=>[Q.value?(i(),c("div",{key:0,id:o(p),class:g(o(d).e("title"))},[y(ee.$slots,"title",{},()=>[$(z(a.title),1)])],10,ml)):S("",!0),a.subtitle?(i(),c("div",{key:1,class:g(o(d).e("subtitle"))},z(a.subtitle),3)):S("",!0)])],2),a.showClose?(i(),c("button",{key:0,class:g(o(d).e("close")),type:"button","aria-label":o(f)("drawer.close"),onClick:ye[0]||(ye[0]=Ce=>se("close"))},[y(ee.$slots,"close",{},()=>[ye[3]||(ye[3]=u("svg",{viewBox:"0 0 24 24",width:"14",height:"14","aria-hidden":"true"},[u("path",{d:"M5 5L19 19M19 5L5 19",fill:"none",stroke:"currentColor","stroke-width":"2.4","stroke-linecap":"round"})],-1))])],10,kl)):S("",!0)],2)):S("",!0),u("div",{class:g(o(d).e("body"))},[y(ee.$slots,"default"),a.loading?(i(),c("div",{key:0,class:g(o(d).e("loading")),"aria-hidden":"true"},[u("span",{class:g(o(d).e("spinner"))},null,2)],2)):S("",!0)],2),le.value?(i(),c("footer",{key:1,class:g(o(d).e("footer"))},[y(ee.$slots,"footer",{},()=>[m(o(me),{disabled:a.disabled,onClick:_e},{default:v(()=>[$(z(x.value),1)]),_:1},8,["disabled"]),m(o(me),{type:"primary",loading:a.okLoading,disabled:a.disabled,onClick:ye[1]||(ye[1]=Ce=>s("confirm"))},{default:v(()=>[$(z(h.value),1)]),_:1},8,["loading","disabled"])])],2)):S("",!0),a.resizable?(i(),c("span",{key:2,class:g([o(d).e("resizer"),o(d).is("vertical",ae.value),o(d).is("reverse",H.value)]),role:"separator","aria-orientation":"vertical","aria-label":o(f)("drawer.resize"),onPointerdown:T},null,42,gl)):S("",!0)],16,fl)],6),[[Vt,L.value]])]),_:3})],8,["to"])):S("",!0)}}),un=Ae(hl,"KkDrawer"),yl=K({name:"KkContainer",inheritAttrs:!1,__name:"Container",props:{size:{default:"large"},maxWidth:{},minHeight:{},padding:{default:"medium"},centered:{type:Boolean,default:!0},gap:{},direction:{default:"row"},align:{default:"stretch"},justify:{default:"start"},wrap:{type:Boolean,default:!0},bordered:{type:Boolean,default:!1},tag:{default:"div"},fluid:{type:Boolean,default:!1}},setup(a){const n=a,t=Re("container"),e={small:"640px",medium:"960px",large:"1200px",full:"100%"},s={start:"flex-start",center:"center",end:"flex-end",stretch:"stretch"},l={start:"flex-start",center:"center",end:"flex-end","space-between":"space-between","space-around":"space-around","space-evenly":"space-evenly"},r={none:"0",small:"var(--kk-space-3)",medium:"var(--kk-space-5)",large:"var(--kk-space-6)"},d=k(()=>n.maxWidth!=null?Xe(n.maxWidth):n.fluid?"100%":e[n.size]),p=k(()=>n.centered&&!n.fluid);function f(){const C=n.padding;return typeof C=="string"&&r[C]?r[C]:Xe(C)??r.medium}const h=k(()=>[t.b(),t.is("bordered",n.bordered),t.is("centered",p.value)]),x=k(()=>{const C={maxWidth:d.value,padding:f(),display:"flex",flexDirection:n.direction,alignItems:s[n.align],justifyContent:l[n.justify],gap:Xe(n.gap)??void 0,flexWrap:n.wrap?"wrap":"nowrap"};return p.value&&(C.marginLeft="auto",C.marginRight="auto"),n.minHeight!=null&&(C.minHeight=Xe(n.minHeight)),n.bordered&&(C.border="1px solid var(--kk-border-color)",C.borderRadius="var(--kk-radius-lg)"),C});return(C,B)=>(i(),N(st(a.tag),Ie({class:h.value,style:x.value},C.$attrs),{default:v(()=>[C.$slots.header?(i(),c("div",{key:0,class:g(o(t).e("header"))},[y(C.$slots,"header")],2)):S("",!0),y(C.$slots,"default"),C.$slots.footer?(i(),c("div",{key:1,class:g(o(t).e("footer"))},[y(C.$slots,"footer")],2)):S("",!0)]),_:3},16,["class","style"]))}}),ta=Ae(yl,"KkContainer"),Sa=Symbol("kk-skeleton"),_l=["aria-busy","aria-label"],xl={key:0},wl=K({name:"KkSkeleton",inheritAttrs:!1,__name:"Skeleton",props:{loading:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},variant:{default:"text"},width:{},height:{},rows:{default:0},rowWidths:{default:()=>[]},round:{type:Boolean,default:!1},count:{default:1},block:{type:Boolean,default:!1},thickness:{default:"default"}},setup(a){const n=a,t=bt(),e=Re("skeleton"),{t:s}=et(),l=Qe(Sa,null),r=k(()=>!!t.default),d=k(()=>!!t.template),p=k(()=>r.value||d.value),f=k(()=>l&&!p.value?l.loading.value:n.loading),h=k(()=>!!l&&!r.value);ht(Sa,{loading:f});const x=k(()=>[e.b(),e.is("animated",n.animated&&f.value),e.is("block",n.block),e.is("root",p.value)]),C={text:{width:"100%",height:14,round:!1},title:{width:"38%",height:20,round:!1},button:{width:"72px",height:32,round:!0},avatar:{height:40,round:!0},image:{width:"100%",height:160,round:!1},paragraph:{width:"100%",height:14,round:!1}},B={default:1,large:1.3};function L(){const I=C[n.variant],G=B[n.thickness]??1;return{width:n.width!=null?Xe(n.width):I.width,height:(n.height!=null?Xe(n.height):Xe(I.height*G))??"",round:n.round||I.round}}const U=k(()=>{const I=L(),G={height:I.height};return I.width&&(G.width=I.width),G}),Z=k(()=>[e.e("item"),e.em("item",n.variant),e.is("round",L().round)]),M=k(()=>n.variant==="paragraph"?n.rows>0?n.rows:3:0);function O(I){const G=n.rowWidths;return G&&G[I]?G[I]:I===M.value-1?"60%":"100%"}const E=k(()=>{const I=B[n.thickness]??1;return Xe(C.paragraph.height*I)}),j=k(()=>Math.max(1,n.count));return(I,G)=>(i(),c("div",{class:g(x.value),"aria-busy":f.value&&!h.value?"true":void 0,"aria-label":f.value&&!h.value?o(s)("skeleton.loading"):void 0},[d.value?(i(),c(D,{key:0},[f.value?(i(),c("div",{key:0,class:g(o(e).e("custom"))},[y(I.$slots,"template")],2)):y(I.$slots,"default",{},void 0,void 0,1)],64)):r.value?y(I.$slots,"default",{},void 0,void 0,1):f.value?(i(),c(D,{key:2},[M.value>0?(i(),c("div",xl,[(i(!0),c(D,null,pe(M.value,ae=>(i(),c("div",{key:ae,class:g([o(e).e("item"),o(e).em("item","text"),o(e).is("block",n.block)]),style:Fe({width:O(ae-1),height:E.value})},null,6))),128))])):(i(!0),c(D,{key:1},pe(j.value,ae=>(i(),c("div",{key:ae,class:g(Z.value),style:Fe(U.value)},null,6))),128))],64)):S("",!0)],10,_l))}}),mt=Ae(wl,"KkSkeleton"),ja=Symbol("kkTabsContext"),$l=["aria-label"],Sl=["aria-selected","aria-disabled","aria-controls","tabindex","onClick"],Kl=["aria-label","onClick"],Cl=["aria-label"],Tl=["aria-label"],zl=K({name:"KkTabs",inheritAttrs:!1,__name:"Tabs",props:{modelValue:{default:""},type:{default:"line"},size:{default:"medium"},closable:{type:Boolean,default:!1},addable:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},position:{default:"top"},stretch:{type:Boolean,default:!1},animated:{type:Boolean,default:!0},justify:{default:"start"},beforeLeave:{type:Function,default:void 0}},emits:["update:modelValue","change","tab-change","tab-click","tab-remove","tab-add"],setup(a,{expose:n,emit:t}){const e=a,s=t,l=Re("tabs"),{t:r}=et(),d=Et("kk-tabs"),p=_([]),f=k(()=>e.position==="left"||e.position==="right"),h=k(()=>p.value.map(T=>T.name)),x=k(()=>{const T=e.modelValue;return T!==""&&T!==void 0&&h.value.includes(T)?T:p.value.length>0?p.value[0].name:T}),C=k(()=>e.addable||e.editable),B=k(()=>e.closable||e.editable);let L=0;ht(ja,{currentName:x,registerPane(T){L+=1,T.uid=L,p.value=[...p.value,T]},unregisterPane(T){p.value=p.value.filter(J=>J.uid!==T)}});function Z(T){return p.value.find(J=>J.name===T)}function M(T){return B.value||T.closable}async function O(T){const J=Z(T);if(!J||J.disabled)return;const te=x.value;if(T===te||e.beforeLeave&&await e.beforeLeave(T,te)===!1)return;s("update:modelValue",T);const Se={name:T,oldName:te};s("change",Se),s("tab-change",Se),await Je(),Ve()}function E(T){T.disabled||(s("tab-click",T.name),O(T.name))}function j(T){const J=Z(T);if(!(!J||!M(J)||J.disabled)){if(T===x.value){const te=h.value.indexOf(T),Se=h.value[te+1]??h.value[te-1]??"";s("update:modelValue",Se)}s("tab-remove",T)}}function I(){C.value&&s("tab-add")}const G=_(null),ae=_(null),H=new Map,Q=_(0),ne=_(!1),le=_(!1),xe=_(0),X=_(0),ce=_(0);function $e(T,J){J?H.set(T,J):H.delete(T)}function Ee(){const T=Z(x.value);return T?H.get(T.uid):void 0}function Ve(){const T=Ee();T&&typeof T.scrollIntoView=="function"&&T.scrollIntoView({block:"nearest",inline:"nearest"})}function ke(){const T=Ee();T&&(f.value?(xe.value=T.offsetHeight,X.value=T.offsetWidth,ce.value=T.offsetTop):(xe.value=T.offsetWidth,X.value=T.offsetHeight,ce.value=T.offsetLeft))}function ve(){const T=G.value;if(!T)return;const J=Math.max(0,T.scrollWidth-T.clientWidth);Q.value>J&&(Q.value=J),ne.value=Q.value>0,le.value=Q.value<J}function Ke(){const T=G.value,J=(T==null?void 0:T.clientWidth)||200;Q.value=Math.max(0,Q.value-J),ve()}function Y(){const T=G.value;if(!T)return;const J=Math.max(0,T.scrollWidth-T.clientWidth),te=T.clientWidth||200;Q.value=Math.min(J,Q.value+te),ve()}function se(){ve(),ke()}const ze=k(()=>{switch(e.justify){case"center":return"center";case"end":return"flex-end";case"space-between":return"space-between";case"space-around":return"space-around";default:return"flex-start"}}),_e=k(()=>({"--kk-tabs-justify":ze.value})),be=k(()=>({"--kk-tabs-nav-offset":`${Q.value}px`})),Be=k(()=>{const J=e.type==="segment"?X.value:2;return f.value?{transform:`translateY(${ce.value}px)`,height:`${xe.value}px`,width:`${J}px`}:{transform:`translateX(${ce.value}px)`,width:`${xe.value}px`,height:`${J}px`}});function De(T){return[l.e("item"),l.is("active",T.name===x.value),l.is("disabled",T.disabled),l.is("closable",M(T))]}const W=k(()=>[l.b(),l.m(e.type),l.m(e.size),l.m(e.position),l.is("stretch",e.stretch),l.is("animated",e.animated),l.is("vertical",f.value)]),he=k(()=>[l.e("nav"),l.is("vertical",f.value)]);return Le(x,async()=>{await Je(),ke(),Ve()}),Le(p,async()=>{await Je(),ke(),ve()},{deep:!1}),We(async()=>{await Je(),ke(),ve(),window.addEventListener("resize",se)}),at(()=>{window.removeEventListener("resize",se)}),n({setActive:O,removeTab:j,addTab:I,currentName:x}),(T,J)=>(i(),c("div",Ie({class:W.value,style:_e.value},T.$attrs),[u("div",{class:g([o(l).e("header"),o(l).is("vertical",f.value)])},[T.$slots.prefix?(i(),c("div",{key:0,class:g(o(l).e("prefix"))},[y(T.$slots,"prefix")],2)):S("",!0),u("div",{ref_key:"navScrollRef",ref:G,class:g(o(l).e("nav-scroll"))},[ne.value?(i(),c("button",{key:0,type:"button",class:g(o(l).e("nav-prev")),"aria-label":o(r)("pagination.prev"),onClick:Ke},[y(T.$slots,"nav-prev",{},()=>[J[0]||(J[0]=u("svg",{viewBox:"0 0 24 24",width:"14",height:"14","aria-hidden":"true"},[u("path",{d:"M15 6l-6 6 6 6",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1))])],10,$l)):S("",!0),u("div",{ref_key:"navRef",ref:ae,class:g(he.value),role:"tablist",style:Fe(be.value)},[e.type!=="card"?(i(),c("div",{key:0,class:g(o(l).e("active-bar")),style:Fe(Be.value)},null,6)):S("",!0),(i(!0),c(D,null,pe(p.value,te=>(i(),c("div",{key:te.uid,ref_for:!0,ref:Se=>$e(te.uid,Se),class:g(De(te)),role:"tab","aria-selected":te.name===x.value,"aria-disabled":te.disabled||void 0,"aria-controls":`${o(d)}-${te.name}`,tabindex:te.disabled?-1:0,onClick:Se=>E(te)},[u("span",{class:g(o(l).e("item-label"))},[te.hasLabelSlot?(i(),N(st(te.renderLabel),{key:0})):(i(),c(D,{key:1},[$(z(te.label),1)],64))],2),M(te)?(i(),c("button",{key:0,type:"button",class:g(o(l).e("item-close")),"aria-label":o(r)("tabs.close",{label:String(te.label)}),onClick:nt(Se=>j(te.name),["stop"])},[...J[1]||(J[1]=[u("svg",{viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":"true"},[u("path",{d:"M5 5L19 19M19 5L5 19",fill:"none",stroke:"currentColor","stroke-width":"2.4","stroke-linecap":"round"})],-1)])],10,Kl)):S("",!0)],10,Sl))),128))],6),le.value?(i(),c("button",{key:1,type:"button",class:g(o(l).e("nav-next")),"aria-label":o(r)("pagination.next"),onClick:Y},[y(T.$slots,"nav-next",{},()=>[J[2]||(J[2]=u("svg",{viewBox:"0 0 24 24",width:"14",height:"14","aria-hidden":"true"},[u("path",{d:"M9 6l6 6-6 6",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1))])],10,Cl)):S("",!0)],2),u("div",{class:g(o(l).e("extra"))},[y(T.$slots,"extra"),y(T.$slots,"more"),C.value?(i(),c("button",{key:0,type:"button",class:g(o(l).e("add")),"aria-label":o(r)("tabs.add"),onClick:I},[y(T.$slots,"add-icon",{},()=>[J[3]||(J[3]=u("svg",{viewBox:"0 0 24 24",width:"16",height:"16","aria-hidden":"true"},[u("path",{d:"M12 5v14M5 12h14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"})],-1))])],10,Tl)):S("",!0)],2)],2),u("div",{class:g([o(l).e("content"),o(l).is("animated",e.animated)])},[y(T.$slots,"default")],2)],16))}}),Pl=["id","aria-hidden"],Ll=K({name:"KkTabPane",inheritAttrs:!1,__name:"TabPane",props:{name:{},label:{default:""},disabled:{type:Boolean,default:!1},closable:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},forceRender:{type:Boolean,default:!1}},setup(a,{expose:n}){const t=a,e=bt(),s=Re("tab-pane"),l=Et("kk-tab-pane"),r=Qe(ja,null),d=k(()=>r?r.currentName.value===t.name:!1),p=k(()=>d.value||t.forceRender||!t.lazy),f=on({uid:0,name:t.name,label:t.label,disabled:t.disabled,closable:t.closable,hasLabelSlot:!!e.label,renderLabel:()=>e.label?e.label({active:d.value,disabled:t.disabled}):null});return Le(()=>[t.name,t.label,t.disabled,t.closable,!!e.label],([h,x,C,B,L])=>{f.name=h,f.label=x,f.disabled=C,f.closable=B,f.hasLabelSlot=L}),We(()=>{r==null||r.registerPane(f)}),at(()=>{f.uid&&(r==null||r.unregisterPane(f.uid))}),n({name:t.name}),(h,x)=>p.value?pt((i(),c("div",{key:0,id:`${o(l)}-${t.name}`,class:g([o(s).b(),o(s).is("active",d.value)]),role:"tabpanel","aria-hidden":!d.value||void 0},[y(h.$slots,"default")],10,Pl)),[[Vt,d.value]]):S("",!0)}}),Ht=Ae(zl,"KkTabs"),ot=Ae(Ll,"KkTabPane"),Ka=/(auto|scroll|overlay)/;function Bl(a){const n=[];let t=(a==null?void 0:a.parentElement)??null;for(;t;){const e=typeof getComputedStyle=="function"?getComputedStyle(t):null;e&&(Ka.test(e.overflow)||Ka.test(e.overflowY))&&n.push(t),t=t.parentElement}return n}function Da(a){var B;const n=_(((B=a.placement)==null?void 0:B.call(a))??"bottom-start"),t=_({x:0,y:0,width:void 0,ready:!1});let e=0,s=!1,l=[],r=null;const d=k(()=>{const L={position:"fixed",left:`${t.value.x}px`,top:`${t.value.y}px`,zIndex:"var(--kk-floating-z-index, 2000)"};return t.value.width!==void 0&&(L.width=`${t.value.width}px`),t.value.ready||(L.visibility="hidden"),L});function p(){var X,ce,$e,Ee,Ve;const L=a.reference.value,U=a.floating.value;if(!L||!U)return;const Z=((X=a.offset)==null?void 0:X.call(a))??6,M=((ce=a.viewportPadding)==null?void 0:ce.call(a))??8,O=L.getBoundingClientRect(),E=U.getBoundingClientRect(),j=(($e=a.placement)==null?void 0:$e.call(a))??"bottom-start",[I,G="start"]=j.split("-"),ae=window.innerHeight||0,H=window.innerWidth||0;let Q=I;if(((Ee=a.flip)==null?void 0:Ee.call(a))??!0){const ke=ae-O.bottom,ve=O.top,Ke=E.height+Z+M;Q==="bottom"&&ke<Ke&&ve>ke?Q="top":Q==="top"&&ve<Ke&&ke>ve&&(Q="bottom")}let ne=O.left;G==="end"?ne=O.right-E.width:G!=="start"&&(ne=O.left+(O.width-E.width)/2);const le=H-E.width-M;ne=Math.min(Math.max(ne,M),Math.max(M,le));const xe=Q==="bottom"?O.bottom+Z:O.top-E.height-Z;n.value=G==="start"?Q:`${Q}-${G}`,t.value={x:ne,y:xe,width:(Ve=a.matchWidth)!=null&&Ve.call(a)?O.width:void 0,ready:!0}}async function f(){a.floating.value&&(t.value.ready||(t.value={...t.value,ready:!1}),await Je(),p())}function h(){e||(e=requestAnimationFrame(()=>{e=0,p()}))}function x(){s||typeof window>"u"||(s=!0,l=Bl(a.reference.value??null),window.addEventListener("scroll",h,!0),window.addEventListener("resize",h),l.forEach(L=>L.addEventListener("scroll",h,!0)),typeof ResizeObserver<"u"&&a.floating.value&&(r=new ResizeObserver(h),r.observe(a.floating.value)))}function C(){s&&(s=!1,window.removeEventListener("scroll",h,!0),window.removeEventListener("resize",h),l.forEach(L=>L.removeEventListener("scroll",h,!0)),l=[],r==null||r.disconnect(),r=null,e&&(cancelAnimationFrame(e),e=0))}return Le(()=>[a.reference.value,a.floating.value],([,L])=>{L&&f()}),at(()=>C()),{resolvedPlacement:n,floatingStyle:d,update:f,start:x,stop:C}}function na(a,n,t={}){const e=t.events??["pointerdown"],s=t.capture??!0;let l=!1;function r(f){if(t.enabled&&!t.enabled())return;const h=f.target;if(!h)return;a.some(C=>{const B=C.value;return B?B===h||B.contains(h):!1})||n(f)}function d(){l||(l=!0,e.forEach(f=>document.addEventListener(f,r,s)))}function p(){l&&(l=!1,e.forEach(f=>document.removeEventListener(f,r,s)))}return We(()=>{typeof document<"u"&&d()}),at(()=>{typeof document<"u"&&p()}),{start:d,stop:p}}const Ml=["aria-expanded","aria-disabled","aria-invalid"],Vl=["aria-label","onClick"],Il=["title"],Ol=["value","readonly","placeholder","disabled","name","autofocus","aria-expanded","aria-activedescendant"],El=["aria-label"],Al=["id"],Rl=["checked","indeterminate"],jl=["aria-multiselectable"],Dl=["id","aria-selected","aria-disabled","onClick","onMouseenter"],Fl=["id","onClick","onMouseenter"],Nl=K({name:"KkSelect",inheritAttrs:!1,__name:"Select",props:{modelValue:{type:[String,Number,Boolean,null,Array],default:void 0},options:{default:()=>[]},multiple:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1},filterMethod:{},remote:{type:Boolean,default:!1},remoteMethod:{},allowCreate:{type:Boolean,default:!1},createFilter:{},clearable:{type:Boolean,default:!1},collapseTags:{type:Boolean,default:!1},maxTagCount:{default:void 0},multipleLimit:{default:-1},selectAll:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},placeholder:{default:""},size:{default:void 0},loading:{type:Boolean,default:!1},valueKey:{default:"value"},labelKey:{default:"label"},emptyText:{default:""},placement:{default:"bottom-start"},matchWidth:{type:Boolean,default:!0},popperClass:{default:""},popperWidth:{default:void 0},block:{type:Boolean,default:!1},name:{default:""},autofocus:{type:Boolean,default:!1},openOnFocus:{type:Boolean,default:!1}},emits:["update:modelValue","change","visible-change","clear","search","remove-tag","focus","blur","select","deselect"],setup(a,{expose:n,emit:t}){const e=a,s=t,l=Re("select"),r=Et("kk-select"),d=`${r}-listbox`,{t:p}=et(),f=Qe(Ut,void 0),h=Qe(Tn,void 0),x=k(()=>e.disabled||!!(f!=null&&f.disabled)),C=k(()=>e.size??(f==null?void 0:f.size)??"medium"),B=k(()=>{var b;return!!((b=h==null?void 0:h.message)!=null&&b.value)}),L=_(null),U=_(null),Z=_(null),M=_(""),O=_(!1),E=_(!1),j=_(!1),I=_(-1),G=_([]),ae=_([]);function H(b){const V=b[e.valueKey],R=b[e.labelKey]??(V===null?"":String(V));return{value:V,label:R,disabled:!!b.disabled,isCreate:!1,raw:b}}const Q=k(()=>[...(e.options??[]).map(H),...ae.value]),ne=k(()=>e.remote),le=k(()=>e.multiple);function xe(b){return Array.isArray(b)}const X=k(()=>le.value?xe(e.modelValue)?e.modelValue.filter(b=>b!==void 0):[]:e.modelValue==null?[]:[e.modelValue]);function ce(b){return Q.value.find(V=>V.value===b)}function $e(b){return X.value.includes(b)}const Ee=k(()=>e.filterable&&!e.remote),Ve=k(()=>ne.value?[...G.value,...ae.value]:Q.value),ke=k(()=>{let b=Ve.value;if(Ee.value){const V=M.value.trim().toLowerCase();V&&(b=b.filter(R=>e.filterMethod?e.filterMethod(V,R.raw):String(R.label).toLowerCase().includes(V)))}if(ve()){const V=M.value.trim();b=[...b,{value:V,label:V,disabled:!1,isCreate:!0,raw:{value:V,label:V}}]}return b});function ve(){if(!e.allowCreate||!e.filterable||ne.value)return!1;const b=M.value.trim();return!(!b||Q.value.some(R=>String(R.label).toLowerCase()===b.toLowerCase()||String(R.value).toLowerCase()===b.toLowerCase())||e.createFilter&&!e.createFilter(b,e.options??[]))}const Ke=k(()=>ke.value.some(b=>!b.isCreate)||ve());async function Y(b){if(!(!e.remote||!e.remoteMethod)){s("search",b);try{const V=await e.remoteMethod(b);G.value=(V??[]).map(H)}catch{G.value=[]}}}const se=k(()=>e.placeholder?e.placeholder:le.value?p("select.multiplePlaceholder"):p("select.placeholder")),ze=k(()=>e.emptyText||p("select.noData")),_e=k(()=>{var V;if(le.value)return"";const b=X.value[0];return b===void 0?"":((V=ce(b))==null?void 0:V.label)??(b===null?"":String(b))}),be=k(()=>e.filterable&&(le.value||O.value)?M.value:_e.value),Be=k(()=>!e.filterable),De=k(()=>le.value?X.value.length===0&&!M.value:e.filterable?!O.value&&_e.value==="":_e.value===""),W=k(()=>X.value.map(b=>{var V;return{value:b,label:((V=ce(b))==null?void 0:V.label)??(b===null?"":String(b))}})),he=k(()=>e.collapseTags&&e.maxTagCount&&e.maxTagCount>0?W.value.slice(0,e.maxTagCount):W.value),T=k(()=>e.collapseTags&&e.maxTagCount&&e.maxTagCount>0?Math.max(0,W.value.length-e.maxTagCount):0),J=k(()=>e.multipleLimit<0||X.value.length<e.multipleLimit),te=k(()=>{const b=ke.value.filter(V=>!V.disabled&&!V.isCreate);return b.length===0?!1:b.every(V=>$e(V.value))}),Se=k(()=>{const b=ke.value.filter(R=>!R.disabled&&!R.isCreate);if(b.length===0)return!1;const V=b.filter(R=>$e(R.value)).length;return V>0&&V<b.length}),ee=Da({reference:L,floating:U,placement:()=>e.placement,offset:()=>6,flip:()=>!0,matchWidth:()=>!e.popperWidth&&e.matchWidth}),ye=k(()=>{const b=e.popperWidth?Xe(e.popperWidth):void 0;return b?{width:b}:{}}),Ce=na([L,U],()=>it());function qe(){var b,V;e.filterable?(b=Z.value)==null||b.focus():(V=L.value)==null||V.focus()}function He(){const b=ke.value.findIndex(V=>!V.disabled);I.value=b}async function je(){x.value||O.value||(j.value=!0,O.value=!0,E.value=!0,e.filterable&&ne.value&&Y(""),He(),s("visible-change",!0),await Je(),ee.update(),ee.start(),Ce.start(),qe())}function it(){O.value&&(O.value=!1,s("visible-change",!1),e.filterable&&(M.value=""),ee.stop(),Ce.stop())}function rt(){O.value?it():je()}function A(b){if(!x.value){if(b.target===Z.value){O.value||je();return}rt()}}function ue(b){if(!b.disabled){if(b.isCreate&&(ae.value.some(V=>String(V.value)===String(b.value))||(ae.value=[...ae.value,{...b,isCreate:!0}])),le.value)if($e(b.value))fe(X.value.filter(V=>V!==b.value)),s("deselect",b.raw);else{if(!J.value)return;fe([...X.value,b.value]),s("select",b.raw)}else s("update:modelValue",b.value),s("change",b.value),s("select",b.raw),it();h==null||h.validate("change")}}function fe(b){s("update:modelValue",b),s("change",b)}function Te(b){ue(b)}function oe(b){const V=ce(b);fe(X.value.filter(R=>R!==b)),s("remove-tag",b),V&&s("deselect",V.raw),h==null||h.validate("change")}function ge(b){oe(b)}function Ze(){if(!x.value){if(le.value){const b=X.value;fe([]),b.forEach(V=>{const R=ce(V);R&&s("deselect",R.raw)})}else s("update:modelValue",null),s("change",null);s("clear"),h==null||h.validate("change")}}function Oe(){const b=ke.value.filter(V=>!V.disabled&&!V.isCreate);if(te.value)b.forEach(V=>s("deselect",V.raw)),fe([]);else{const V=e.multipleLimit,R=V>0?b.slice(0,V):b;fe(R.map(ie=>ie.value)),R.forEach(ie=>s("select",ie.raw))}h==null||h.validate("change")}function Ne(b){const V=ke.value;if(V.length===0)return;let R=I.value;for(let ie=0;ie<V.length&&(R=(R+b+V.length)%V.length,!!V[R].disabled);ie++);I.value=R}function dt(){const b=ke.value[I.value];b&&!b.disabled&&ue(b)}function St(b){if(!x.value)switch(b.key){case"ArrowDown":b.preventDefault(),O.value?Ne(1):je();break;case"ArrowUp":b.preventDefault(),O.value?Ne(-1):je();break;case"Enter":b.preventDefault(),O.value?dt():je();break;case"Escape":O.value&&(b.preventDefault(),it());break;case"Tab":O.value&&it();break;case"Backspace":le.value&&!M.value&&X.value.length>0&&(b.preventDefault(),oe(X.value[X.value.length-1]));break}}function _t(b){M.value=b.target.value,ne.value?Y(M.value):s("search",M.value),O.value||je()}function At(b){E.value=!0,s("focus",b),!O.value&&(e.openOnFocus||e.filterable)&&je()}function qt(b){E.value=!1,s("blur",b),h==null||h.validate("blur"),it()}function Kt(b){return`${r}-opt-${b}`}const Rt=k(()=>O.value&&I.value>=0?Kt(I.value):void 0),Ct=k(()=>e.clearable&&!x.value&&(le.value,X.value.length>0)),jt=k(()=>[l.b(),l.m(C.value),l.is("disabled",x.value),l.is("block",e.block),l.is("open",O.value),l.is("focused",E.value),l.is("invalid",B.value),l.is("multiple",le.value)]),Dt=k(()=>[l.e("control"),l.em("control",C.value),l.is("disabled",x.value),l.is("focused",E.value),l.is("invalid",B.value)]),w=k(()=>[l.e("popper"),e.popperClass]);return Le(()=>e.modelValue,()=>{ne.value&&O.value&&Y(M.value)}),n({focus:qe,blur:()=>{var b;return(b=Z.value)==null?void 0:b.blur()},open:()=>void je(),close:it,toggle:()=>rt()}),(b,V)=>(i(),c("div",Ie({class:jt.value},b.$attrs),[u("div",{ref_key:"triggerRef",ref:L,class:g(Dt.value),role:"combobox","aria-expanded":O.value,"aria-haspopup":"listbox","aria-controls":d,"aria-disabled":x.value||void 0,"aria-invalid":B.value||void 0,tabindex:"0",onClick:A,onKeydown:St},[b.$slots.prefix?(i(),c("span",{key:0,class:g(o(l).e("prefix"))},[y(b.$slots,"prefix")],2)):S("",!0),le.value?(i(),c("span",{key:1,class:g(o(l).e("tags"))},[(i(!0),c(D,null,pe(he.value,R=>(i(),c("span",{key:String(R.value),class:g(o(l).e("tag"))},[y(b.$slots,"tag",{label:R.label,value:R.value,remove:ge},()=>[u("span",{class:g(o(l).e("tag-text"))},z(R.label),3),x.value?S("",!0):(i(),c("button",{key:0,type:"button",class:g(o(l).e("tag-close")),"aria-label":o(p)("select.removeTag",{label:R.label}),onClick:nt(ie=>ge(R.value),["stop"])},[...V[1]||(V[1]=[u("svg",{viewBox:"0 0 24 24",width:"10",height:"10","aria-hidden":"true"},[u("path",{d:"M5 5L19 19M19 5L5 19",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1)])],10,Vl))])],2))),128)),T.value>0?(i(),c("span",{key:0,class:g([o(l).e("tag"),o(l).e("tag--collapse")]),title:o(p)("select.selectedCount",{count:W.value.length})}," +"+z(T.value),11,Il)):S("",!0)],2)):S("",!0),u("input",{ref_key:"inputRef",ref:Z,class:g(o(l).e("input")),value:be.value,readonly:Be.value,placeholder:De.value?se.value:"",disabled:x.value,name:a.name||void 0,autofocus:a.autofocus,role:"combobox","aria-haspopup":"listbox","aria-expanded":O.value,"aria-controls":d,"aria-activedescendant":Rt.value,autocomplete:"off",onInput:_t,onFocus:At,onBlur:qt,onKeydown:St},null,42,Ol),Ct.value?(i(),c("button",{key:2,type:"button",class:g(o(l).e("clear")),"aria-label":o(p)("select.clear"),onClick:nt(Ze,["stop"])},[...V[2]||(V[2]=[u("svg",{viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":"true"},[u("path",{d:"M5 5L19 19M19 5L5 19",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1)])],10,El)):S("",!0),u("span",{class:g(o(l).e("suffix"))},[y(b.$slots,"suffix",{},()=>[y(b.$slots,"arrow",{},()=>[(i(),c("svg",{class:g(o(l).e("arrow")),viewBox:"0 0 24 24",width:"14",height:"14","aria-hidden":"true"},[...V[3]||(V[3]=[u("path",{d:"M6 9l6 6 6-6",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])],2))])])],2)],42,Ml),(i(),N(sn,{to:"body"},[j.value?pt((i(),c("div",{key:0,id:o(r),ref_key:"popperRef",ref:U,class:g(w.value),style:Fe([o(ee).floatingStyle.value,ye.value]),onMousedown:V[0]||(V[0]=nt(()=>{},["prevent"]))},[u("div",{class:g(o(l).e("dropdown"))},[b.$slots.header?(i(),c("div",{key:0,class:g(o(l).e("header"))},[y(b.$slots,"header")],2)):S("",!0),a.selectAll&&le.value?(i(),c("label",{key:1,class:g([o(l).e("select-all"),o(l).is("checked",te.value),o(l).is("indeterminate",Se.value)]),onClick:nt(Oe,["prevent"])},[u("input",{type:"checkbox",checked:te.value,indeterminate:Se.value},null,8,Rl),u("span",null,z(te.value?o(p)("select.deselectAll"):o(p)("select.selectAll")),1)],2)):S("",!0),Ke.value?(i(),c("ul",{key:2,id:d,class:g(o(l).e("list")),role:"listbox","aria-multiselectable":le.value||void 0},[(i(!0),c(D,null,pe(ke.value,(R,ie)=>(i(),c(D,{key:String(R.value)},[R.isCreate?(i(),c("li",{key:1,id:Kt(ie),class:g([o(l).e("option"),o(l).e("option--create"),o(l).is("active",ie===I.value)]),role:"option","aria-selected":!1,onClick:we=>Te(R),onMouseenter:we=>I.value=ie},[y(b.$slots,"create",{query:String(R.value)},()=>[u("span",{class:g(o(l).e("option-label"))},z(o(p)("select.create",{label:String(R.value)})),3)])],42,Fl)):(i(),c("li",{key:0,id:Kt(ie),class:g([o(l).e("option"),o(l).is("selected",$e(R.value)),o(l).is("active",ie===I.value),o(l).is("disabled",R.disabled)]),role:"option","aria-selected":$e(R.value),"aria-disabled":R.disabled||void 0,onClick:we=>Te(R),onMouseenter:we=>I.value=ie},[y(b.$slots,"default",{option:R.raw,index:ie,selected:$e(R.value)},()=>[u("span",{class:g(o(l).e("option-label"))},z(R.label),3)])],42,Dl))],64))),128))],10,jl)):S("",!0),e.loading?(i(),c("div",{key:3,class:g(o(l).e("loading")),role:"status"},[y(b.$slots,"loading",{},()=>[$(z(o(p)("select.loading")),1)])],2)):!Ke.value&&!ve()?(i(),c("div",{key:4,class:g(o(l).e("empty"))},[y(b.$slots,"empty",{},()=>[$(z(ze.value),1)])],2)):S("",!0),b.$slots.footer?(i(),c("div",{key:5,class:g(o(l).e("footer"))},[y(b.$slots,"footer")],2)):S("",!0)],2)],46,Al)),[[Vt,O.value]]):S("",!0)]))],16))}}),cn=Ae(Nl,"KkSelect"),Hl=["aria-expanded","aria-disabled","aria-invalid","aria-activedescendant"],Ul=["aria-label","onClick"],Wl=["value","readonly","placeholder","disabled","name","aria-expanded","aria-activedescendant"],ql=["aria-label"],Gl=["id"],Yl=["aria-multiselectable"],Xl=["id","aria-selected","aria-disabled","onClick"],Zl=["id","aria-multiselectable"],Jl=["id","aria-selected","aria-disabled","onClick","onMouseenter"],Ql=["checked"],es=20,ts=K({name:"KkCascader",inheritAttrs:!1,__name:"Cascader",props:{modelValue:{default:void 0},options:{default:()=>[]},fieldNames:{default:()=>({value:"value",label:"label",children:"children",disabled:"disabled",leaf:"leaf"})},multiple:{type:Boolean,default:!1},checkStrictly:{type:Boolean,default:!0},emitPath:{type:Boolean,default:!0},showAllLevels:{type:Boolean,default:!0},separator:{default:" / "},clearable:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},placeholder:{default:""},size:{default:void 0},loading:{type:Boolean,default:!1},expandTrigger:{default:"click"},loadData:{type:Function,default:void 0},placement:{default:"bottom-start"},matchWidth:{type:Boolean,default:!1},popperClass:{default:""},block:{type:Boolean,default:!1},name:{default:""},filterable:{type:Boolean,default:!1},filterMethod:{type:Function,default:void 0}},emits:["update:modelValue","change","visible-change","clear","expand-change","load","focus","blur"],setup(a,{expose:n,emit:t}){const e=a,s=t,l=Re("cascader"),r=Et("kk-cascader"),d=`${r}-listbox`,{t:p}=et(),f=Qe(Ut,void 0),h=Qe(Tn,void 0),x=k(()=>e.disabled||!!(f!=null&&f.disabled)),C=k(()=>e.size??(f==null?void 0:f.size)??"medium"),B=k(()=>{var P;return!!((P=h==null?void 0:h.message)!=null&&P.value)}),L=k(()=>e.multiple),U=_(null),Z=_(null),M=_(null),O=_(""),E=_(!1),j=_(!1),I=_(!1),G=_([]),ae=_(0),H=_(new Map),Q=_(new Set),ne=k(()=>{var P,q,F,de,Me;return{value:((P=e.fieldNames)==null?void 0:P.value)??"value",label:((q=e.fieldNames)==null?void 0:q.label)??"label",children:((F=e.fieldNames)==null?void 0:F.children)??"children",disabled:((de=e.fieldNames)==null?void 0:de.disabled)??"disabled",leaf:((Me=e.fieldNames)==null?void 0:Me.leaf)??"leaf"}});function le(P){return JSON.stringify(P)}function xe(P,q){const F=H.value.get(le(q));if(F)return F;const de=P[ne.value.children];return Yt(de)?de:void 0}function X(P,q,F){return P.map(de=>{const Me=de[ne.value.value],Ue=In(Me)?"":Me,vt=[...q,Ue],ft=xe(de,vt),pa=Yt(ft)?ft:[],va=de[ne.value.leaf]===!0?!0:pa.length>0?!1:!e.loadData||ft!==void 0,fa=de[ne.value.label];return{value:Ue,label:In(fa)?String(Ue):String(fa),disabled:de[ne.value.disabled]===!0,isLeaf:va,level:F,path:vt,children:va?[]:X(pa,vt,F+1),raw:de}})}const ce=k(()=>X(e.options??[],[],0)),$e=k(()=>{const P=[];let q=ce.value,F=0;for(;F<es;){P.push({level:F,nodes:q,loading:!1});const de=G.value[F],Me=q.find(Ue=>Ue.value===de);if(!Me||Me.isLeaf)break;if(Q.value.has(le(Me.path))){P.push({level:F+1,nodes:[],loading:!0});break}q=Me.children,F+=1}return P});function Ee(P){let q=ce.value,F;for(const de of P){if(F=q.find(Me=>Me.value===de),!F)return;q=F.children}return F}function Ve(P){const q=[];let F=ce.value;for(const de of P){const Me=F.find(Ue=>Ue.value===de);if(!Me){q.push(String(de));break}q.push(Me.label),F=Me.children}return q}function ke(P){const q=[...ce.value];for(;q.length>0;){const F=q.shift();if(!F)break;if(F.value===P)return F.path;q.push(...F.children)}}const ve=k(()=>{const P=e.modelValue;return In(P)?[]:L.value?Yt(P)?e.emitPath?P.filter(Yt):P.map(q=>ke(q)??[q]):[]:Yt(P)?e.emitPath?[P.slice()]:[]:e.emitPath?[]:[ke(P)??[]]});function Ke(P){const q=le(P.path);return ve.value.some(F=>le(F)===q)}function Y(P,q){return G.value[q]===P.value}function se(P){return P.length===0?"":e.showAllLevels?P.join(e.separator):P[P.length-1]}const ze=k(()=>e.placeholder||p("cascader.placeholder")),_e=k(()=>p("cascader.noData")),be=k(()=>{if(L.value)return"";const P=ve.value[0];return!P||P.length===0?"":se(Ve(P))}),Be=k(()=>e.filterable&&E.value?O.value:be.value),De=k(()=>!e.filterable),W=k(()=>L.value?ve.value.length===0&&!O.value:e.filterable?!E.value&&be.value==="":be.value===""),he=k(()=>ve.value.map(P=>{var q;return{path:P,key:le(P),text:se(Ve(P)),node:(q=Ee(P))==null?void 0:q.raw}})),T=k(()=>e.filterable&&O.value.trim().length>0);function J(P,q=[]){return P.forEach(F=>{(F.isLeaf||e.checkStrictly)&&q.push(F),F.children.length>0&&J(F.children,q)}),q}const te=k(()=>{if(!T.value)return[];const P=O.value.trim(),q=P.toLowerCase();return J(ce.value).filter(F=>e.filterMethod?e.filterMethod(P,F.raw):se(Ve(F.path)).toLowerCase().includes(q))});function Se(P,q){const F=q.trim();if(!F)return[{text:P,match:!1}];const de=P.toLowerCase(),Me=F.toLowerCase(),Ue=[];let vt=0;for(;vt<P.length;){const ft=de.indexOf(Me,vt);if(ft===-1){Ue.push({text:P.slice(vt),match:!1});break}ft>vt&&Ue.push({text:P.slice(vt,ft),match:!1}),Ue.push({text:P.slice(ft,ft+F.length),match:!0}),vt=ft+F.length}return Ue}const ee=Da({reference:U,floating:Z,placement:()=>e.placement,offset:()=>6,flip:()=>!0,matchWidth:()=>e.matchWidth}),ye=na([U,Z],()=>je());function Ce(){var P,q;e.filterable?(P=M.value)==null||P.focus():(q=U.value)==null||q.focus()}function qe(){const P=ve.value[0]??[];G.value=P.slice(),ae.value=Math.max(0,P.length-1)}async function He(){x.value||E.value||(I.value=!0,E.value=!0,j.value=!0,qe(),s("visible-change",!0),await Je(),ee.update(),ee.start(),ye.start(),Ce())}function je(){E.value&&(E.value=!1,s("visible-change",!1),O.value="",ee.stop(),ye.stop())}function it(){E.value?je():He()}function rt(P){if(!x.value){if(P.target===M.value){E.value||He();return}it()}}async function A(P){if(!e.loadData)return;const q=le(P.path),F=new Set(Q.value);F.add(q),Q.value=F;try{const de=await e.loadData(P.raw,P.path),Me=new Map(H.value);Me.set(q,de??[]),H.value=Me}catch{}finally{const de=new Set(Q.value);de.delete(q),Q.value=de,s("load",{node:P.raw,path:P.path})}}function ue(P){if(!e.loadData||P.isLeaf)return;const q=le(P.path);H.value.has(q)||Q.value.has(q)||A(P)}function fe(P,q){const F=G.value.slice(0,P);F[P]=q,G.value=F}function Te(P){const q=e.emitPath?P.path:P.value;s("update:modelValue",q),s("change",q),h==null||h.validate("change"),P.isLeaf&&je()}function oe(P){const q=e.emitPath?P:P.map(F=>F.length>0?F[F.length-1]:"");s("update:modelValue",q),s("change",q),h==null||h.validate("change")}function ge(P){const q=le(P),F=ve.value.findIndex(Me=>le(Me)===q),de=F>=0?ve.value.filter((Me,Ue)=>Ue!==F):[...ve.value,P];oe(de)}function Ze(P,q){P.disabled||(fe(q,P.value),ae.value=q,ue(P),s("expand-change",P.path),!(!e.checkStrictly&&!P.isLeaf)&&(L.value?ge(P.path):Te(P)))}function Oe(P){P.disabled||(G.value=P.path.slice(0,-1),ae.value=Math.max(0,P.path.length-1),L.value?ge(P.path):Te(P))}function Ne(P,q){e.expandTrigger!=="hover"||P.disabled||(fe(q,P.value),ae.value=q,ue(P),s("expand-change",P.path))}function dt(P){if(x.value)return;const q=le(P);oe(ve.value.filter(F=>le(F)!==q)),h==null||h.validate("change")}function St(){if(x.value)return;let P=[];!L.value&&!e.emitPath&&(P=null),s("update:modelValue",P),s("change",P),s("clear"),O.value="",h==null||h.validate("change")}function _t(){return Math.min(ae.value,Math.max(0,$e.value.length-1))}function At(P){const q=_t(),F=$e.value[q];if(!F||F.nodes.length===0)return;let de=F.nodes.findIndex(Ue=>Ue.value===G.value[q]);for(let Ue=0;Ue<F.nodes.length&&(de=(de+P+F.nodes.length)%F.nodes.length,!!F.nodes[de].disabled);Ue++);const Me=F.nodes[de];Me&&(fe(q,Me.value),ue(Me))}function qt(){const P=_t(),q=$e.value[P],F=q==null?void 0:q.nodes.find(de=>de.value===G.value[P]);!F||F.isLeaf||(ue(F),$e.value.length>P+1&&(ae.value=P+1))}function Kt(){ae.value>0&&(ae.value-=1)}function Rt(){const P=_t(),q=$e.value[P],F=q==null?void 0:q.nodes.find(de=>de.value===G.value[P]);if(!(!F||F.disabled)){if(!e.checkStrictly&&!F.isLeaf){ue(F),s("expand-change",F.path);return}L.value?ge(F.path):Te(F)}}function Ct(P){if(!x.value)switch(P.key){case"ArrowDown":P.preventDefault(),E.value?At(1):He();break;case"ArrowUp":P.preventDefault(),E.value?At(-1):He();break;case"ArrowRight":E.value&&(P.preventDefault(),qt());break;case"ArrowLeft":E.value&&(P.preventDefault(),Kt());break;case"Enter":P.preventDefault(),E.value?Rt():He();break;case"Escape":E.value&&(P.preventDefault(),je());break;case"Tab":E.value&&je();break}}function jt(P){O.value=P.target.value,E.value||He()}function Dt(P){j.value=!0,s("focus",P)}function w(P){j.value=!1,s("blur",P),h==null||h.validate("blur"),je()}function b(P,q){return`${r}-opt-${P}-${q}`}const V=k(()=>{if(!E.value)return;const P=_t(),q=$e.value[P];if(!q)return;const F=q.nodes.findIndex(de=>de.value===G.value[P]);return F>=0?b(P,F):void 0}),R=k(()=>e.clearable&&!x.value&&ve.value.length>0),ie=k(()=>!T.value&&ce.value.length===0),we=k(()=>[l.b(),l.m(C.value),l.is("disabled",x.value),l.is("block",e.block),l.is("open",E.value),l.is("focused",j.value),l.is("invalid",B.value),l.is("multiple",L.value)]),ct=k(()=>[l.e("control"),l.em("control",C.value),l.is("disabled",x.value),l.is("focused",j.value),l.is("invalid",B.value)]),xt=k(()=>[l.e("popper"),e.popperClass]);function ao(){const P=[];return ve.value.forEach(q=>{const F=Ee(q);F&&P.push(F.raw)}),P}return n({focus:Ce,blur:()=>{var P;return(P=M.value)==null?void 0:P.blur()},open:()=>void He(),close:je,clear:St,getCheckedNodes:ao}),(P,q)=>(i(),c("div",Ie({class:we.value},P.$attrs),[u("div",{ref_key:"triggerRef",ref:U,class:g(ct.value),role:"combobox","aria-expanded":E.value,"aria-haspopup":"listbox","aria-controls":d,"aria-disabled":x.value||void 0,"aria-invalid":B.value||void 0,"aria-activedescendant":V.value,tabindex:"0",onClick:rt,onKeydown:Ct},[P.$slots.prefix?(i(),c("span",{key:0,class:g(o(l).e("prefix"))},[y(P.$slots,"prefix")],2)):S("",!0),L.value?(i(),c("span",{key:1,class:g(o(l).e("tags"))},[(i(!0),c(D,null,pe(he.value,F=>(i(),c("span",{key:F.key,class:g(o(l).e("tag"))},[y(P.$slots,"tag",{node:F.node,path:F.path,text:F.text,remove:()=>dt(F.path)},()=>[u("span",{class:g(o(l).e("tag-text"))},z(F.text),3),x.value?S("",!0):(i(),c("button",{key:0,type:"button",class:g(o(l).e("tag-close")),"aria-label":o(p)("common.remove"),onClick:nt(de=>dt(F.path),["stop"])},[...q[2]||(q[2]=[u("svg",{viewBox:"0 0 24 24",width:"10",height:"10","aria-hidden":"true"},[u("path",{d:"M5 5L19 19M19 5L5 19",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1)])],10,Ul))])],2))),128))],2)):S("",!0),u("input",{ref_key:"inputRef",ref:M,class:g(o(l).e("input")),value:Be.value,readonly:De.value,placeholder:W.value?ze.value:"",disabled:x.value,name:a.name||void 0,role:"combobox","aria-haspopup":"listbox","aria-expanded":E.value,"aria-controls":d,"aria-activedescendant":V.value,autocomplete:"off",onInput:jt,onFocus:Dt,onBlur:w,onKeydown:Ct},null,42,Wl),R.value?(i(),c("button",{key:2,type:"button",class:g(o(l).e("clear")),"aria-label":o(p)("cascader.clear"),onClick:nt(St,["stop"])},[...q[3]||(q[3]=[u("svg",{viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":"true"},[u("path",{d:"M5 5L19 19M19 5L5 19",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1)])],10,ql)):S("",!0),u("span",{class:g(o(l).e("suffix"))},[y(P.$slots,"suffix",{},()=>[(i(),c("svg",{class:g(o(l).e("arrow")),viewBox:"0 0 24 24",width:"14",height:"14","aria-hidden":"true"},[...q[4]||(q[4]=[u("path",{d:"M6 9l6 6 6-6",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])],2))])],2)],42,Hl),(i(),N(sn,{to:"body"},[I.value?pt((i(),c("div",{key:0,id:o(r),ref_key:"popperRef",ref:Z,class:g(xt.value),style:Fe(o(ee).floatingStyle.value),onMousedown:q[1]||(q[1]=nt(()=>{},["prevent"]))},[u("div",{class:g(o(l).e("dropdown"))},[e.loading?(i(),c("div",{key:0,class:g(o(l).e("loading")),role:"status"},[y(P.$slots,"loading",{},()=>[$(z(o(p)("cascader.loading")),1)])],2)):T.value?(i(),c(D,{key:1},[te.value.length>0?(i(),c("ul",{key:0,id:d,class:g(o(l).e("list")),role:"listbox","aria-multiselectable":L.value||void 0},[(i(!0),c(D,null,pe(te.value,(F,de)=>(i(),c("li",{id:b(0,de),key:le(F.path),class:g([o(l).e("node"),o(l).is("selected",Ke(F)),o(l).is("disabled",F.disabled)]),role:"option","aria-selected":Ke(F),"aria-disabled":F.disabled||void 0,onClick:Me=>Oe(F)},[u("span",{class:g(o(l).e("label"))},[(i(!0),c(D,null,pe(Se(se(Ve(F.path)),O.value),(Me,Ue)=>(i(),c(D,{key:Ue},[Me.match?(i(),c("span",{key:0,class:g(o(l).e("match"))},z(Me.text),3)):(i(),c(D,{key:1},[$(z(Me.text),1)],64))],64))),128))],2)],10,Xl))),128))],10,Yl)):(i(),c("div",{key:1,class:g(o(l).e("empty"))},[y(P.$slots,"empty",{},()=>[$(z(o(p)("common.noMatch")),1)])],2))],64)):ie.value?(i(),c("div",{key:2,class:g(o(l).e("empty"))},[y(P.$slots,"empty",{},()=>[$(z(_e.value),1)])],2)):(i(),c("div",{key:3,class:g(o(l).e("panel"))},[(i(!0),c(D,null,pe($e.value,F=>(i(),c("ul",{id:F.level===0?d:void 0,key:F.level,class:g([o(l).e("menu"),o(l).is("loading",F.loading)]),role:"listbox","aria-multiselectable":L.value||void 0},[F.loading?(i(),c("li",{key:0,class:g(o(l).e("loading")),role:"status"},[y(P.$slots,"loading",{},()=>[$(z(o(p)("cascader.loading")),1)])],2)):F.nodes.length===0?(i(),c("li",{key:1,class:g(o(l).e("empty"))},[y(P.$slots,"empty",{},()=>[$(z(_e.value),1)])],2)):(i(!0),c(D,{key:2},pe(F.nodes,(de,Me)=>(i(),c("li",{id:b(F.level,Me),key:le(de.path),class:g([o(l).e("node"),o(l).is("active",Y(de,F.level)),o(l).is("selected",Ke(de)),o(l).is("disabled",de.disabled)]),role:"option","aria-selected":Ke(de),"aria-disabled":de.disabled||void 0,onClick:Ue=>Ze(de,F.level),onMouseenter:Ue=>Ne(de,F.level)},[L.value?(i(),c("span",{key:0,class:g(o(l).e("checkbox"))},[u("input",{type:"checkbox",tabindex:"-1",checked:Ke(de),onClick:q[0]||(q[0]=nt(()=>{},["prevent"]))},null,8,Ql)],2)):S("",!0),u("span",{class:g(o(l).e("label"))},[y(P.$slots,"default",{node:de.raw,level:F.level,label:de.label,selected:Ke(de),isLeaf:de.isLeaf},()=>[$(z(de.label),1)])],2),de.isLeaf?S("",!0):(i(),c("svg",{key:1,class:g(o(l).e("node-arrow")),viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":"true"},[...q[5]||(q[5]=[u("path",{d:"M9 6l6 6-6 6",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])],2))],42,Jl))),128))],10,Zl))),128))],2))],2)],46,Gl)),[[Vt,E.value]]):S("",!0)]))],16))}}),Ln=Ae(ts,"KkCascader"),ns=["aria-disabled","aria-label"],as=["disabled"],os=["src","alt"],ls=["title"],ss=["aria-label","onClick"],is=["aria-label","onClick"],rs=["aria-label","onClick"],us=["aria-disabled","aria-label"],cs=["aria-label"],ds=["aria-label"],ps=["src","alt"],vs=K({name:"KkUpload",inheritAttrs:!1,__name:"Upload",props:{modelValue:{default:()=>[]},action:{default:""},method:{default:"POST"},headers:{default:()=>({})},data:{default:()=>({})},name:{default:"file"},withCredentials:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},accept:{default:""},directory:{type:Boolean,default:!1},limit:{default:0},maxSize:{default:0},minSize:{default:0},drag:{type:Boolean,default:!1},listType:{default:"text"},showFileList:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},autoUpload:{type:Boolean,default:!0},httpRequest:{},beforeUpload:{},beforeRemove:{},onExceed:{},onError:{},paste:{type:Boolean,default:!1},tip:{default:""},size:{default:void 0},previewModal:{type:Boolean,default:!0}},emits:["update:modelValue","change","progress","success","error","remove","exceed","preview"],setup(a,{expose:n,emit:t}){const e=a,s=t,l=Re("upload"),{t:r}=et(),d=Qe(Ut,void 0),p=k(()=>e.disabled||!!(d!=null&&d.disabled)),f=k(()=>e.size??(d==null?void 0:d.size)??"medium"),h=_(null),x=_(e.modelValue?e.modelValue.map(A=>({...A})):[]),C=_(0),B=_(!1),L=new Map,U=new Set;let Z=0;function M(){return Z+=1,`kk-upload-${Z}`}let O;function E(){return x.value.map(A=>({...A}))}function j(){const A=E();O=A,s("update:modelValue",A)}function I(){j(),s("change",E())}Le(()=>e.modelValue,A=>{if(A===O)return;const ue=A?A.map(fe=>({...fe})):[];H(ue),x.value=ue});function G(){return typeof URL<"u"&&typeof URL.createObjectURL=="function"}function ae(A){if(G()&&typeof URL.revokeObjectURL=="function")try{URL.revokeObjectURL(A)}catch{}U.delete(A)}function H(A){const ue=new Set(A.map(fe=>fe.url).filter(fe=>!!fe));for(const fe of[...U])ue.has(fe)||ae(fe)}function Q(){for(const A of[...U])ae(A)}function ne(A,ue){const fe=ue.split(",").map(ge=>ge.trim()).filter(Boolean);if(fe.length===0)return!0;const Te=A.name||"",oe=A.type||"";return fe.some(ge=>ge.startsWith(".")?Te.toLowerCase().endsWith(ge.toLowerCase()):ge.endsWith("/*")?oe.startsWith(ge.slice(0,-1)):oe===ge)}function le(A,ue,fe){var ge;const Te=r(`upload.${ue}`,fe);A.status="fail",A.error=Te;const oe=((ge=e.onError)==null?void 0:ge.call(e,{file:A,error:Te}))!==!1;return oe&&s("error",{file:A,error:Te}),oe}async function xe(A){const ue=e.beforeUpload;if(!ue)return A;try{const fe=await ue(A);if(fe===!1)return null;if(fe instanceof Blob){const Te=fe;return{...A,raw:Te,name:Te.name||A.name,size:Te.size,type:Te.type||A.type}}return A}catch{return null}}function X(A){return A?Array.isArray(A)?A:Array.from(A):[]}async function ce(A){if(p.value)return;const ue=X(A);if(ue.length===0)return;const fe=[],Te=[];for(const oe of ue){const ge={uid:M(),name:oe.name,size:oe.size,type:oe.type,status:"ready",percent:0,raw:oe};if(e.accept&&!ne(oe,e.accept)){le(ge,"typeNotAllowed",{name:ge.name})&&fe.push(ge);continue}const Ze=e.minSize>0&&oe.size<e.minSize,Oe=e.maxSize>0&&oe.size>e.maxSize;if(Ze||Oe){const dt=Ze?e.minSize:e.maxSize;le(ge,"sizeExceed",{name:ge.name,size:vl(dt)})&&fe.push(ge);continue}const Ne=await xe(ge);if(Ne){if((e.listType==="picture"||e.listType==="picture-card")&&G()&&Ne.raw){const dt=URL.createObjectURL(Ne.raw);Ne.url=dt,U.add(dt)}fe.push(Ne),Te.push(Ne)}}if(fe.length!==0){if(e.limit>0){const oe=e.limit-x.value.length;if(fe.length>oe&&oe>=0){const ge=fe.slice(oe);s("exceed",ge),fe.splice(oe),Te.splice(oe)}}x.value.push(...fe),I(),e.autoUpload&&Te.forEach(oe=>$e(oe))}}function $e(A){if(!A){Ee();return}if(A.status==="success")return;A.status="uploading",A.percent=0,I();const ue=Oe=>{A.percent=Math.min(100,Math.max(0,Math.round(Oe.percent))),s("progress",{file:A,percent:A.percent}),j()},fe=Oe=>{A.status="success",A.percent=100,A.response=Oe,s("success",{file:A,response:Oe}),I()},Te=Oe=>{A.status="fail";const Ne=Oe instanceof Error?Oe.message:typeof Oe=="string"?Oe:r("upload.fail");A.error=Ne,s("error",{file:A,error:Ne}),I()},oe={file:A.raw,name:e.name??"file",data:e.data??{},headers:e.headers??{},withCredentials:!!e.withCredentials,action:e.action??"",method:(e.method??"POST").toUpperCase(),onProgress:ue,onSuccess:fe,onError:Te};if(e.httpRequest){const Oe=e.httpRequest(oe);Oe!==void 0&&Promise.resolve(Oe).then(Ne=>fe(Ne)).catch(Ne=>Te(Ne));return}if(!oe.action){Te(new Error(r("upload.empty")));return}const ge=new XMLHttpRequest;L.set(A.uid,ge),ge.withCredentials=oe.withCredentials,ge.open(oe.method,oe.action,!0);for(const[Oe,Ne]of Object.entries(oe.headers))ge.setRequestHeader(Oe,Ne);ge.upload&&ge.upload.addEventListener("progress",Oe=>{Oe.lengthComputable&&ue({percent:Oe.loaded/Oe.total*100})}),ge.addEventListener("load",()=>{if(L.delete(A.uid),ge.status<200||ge.status>=300){Te(new Error(`HTTP ${ge.status}`));return}let Oe=ge.response;try{Oe=JSON.parse(ge.responseText)}catch{}fe(Oe)}),ge.addEventListener("error",()=>{L.delete(A.uid),Te(new Error(r("upload.fail")))}),ge.addEventListener("abort",()=>{L.delete(A.uid)});const Ze=new FormData;for(const[Oe,Ne]of Object.entries(oe.data))Ze.append(Oe,String(Ne));oe.file&&Ze.append(oe.name,oe.file,A.name),ge.send(Ze)}function Ee(){x.value.filter(A=>A.status==="ready").forEach(A=>$e(A))}function Ve(A){var ue;if(A!=null){(ue=L.get(A))==null||ue.abort(),L.delete(A);return}L.forEach(fe=>fe.abort()),L.clear()}function ke(){Ve(),Q(),x.value=[],I()}async function ve(A,ue){var oe;if((oe=ue==null?void 0:ue.preventDefault)==null||oe.call(ue),p.value)return;if(e.beforeRemove)try{if(await e.beforeRemove(A)===!1)return}catch{return}const fe=x.value.findIndex(ge=>ge.uid===A.uid);if(fe===-1)return;const[Te]=x.value.splice(fe,1);Te!=null&&Te.url&&U.has(Te.url)&&ae(Te.url),s("remove",Te),I()}function Ke(A){A.status="ready",A.error=void 0,$e(A)}const Y=_(!1),se=_(null),ze=_(0);let _e=null;function be(A){se.value=A,Y.value=!0,ze.value=Qn(),_e=ea()}function Be(){Y.value=!1,se.value=null,_e==null||_e(),_e=null}function De(A){s("preview",A),e.previewModal&&A.url&&be(A)}function W(A){A.key==="Escape"&&Be()}Le(Y,A=>{typeof window>"u"||(A?window.addEventListener("keydown",W):window.removeEventListener("keydown",W))});function he(){var A;p.value||(A=h.value)==null||A.click()}function T(A){const ue=A.target;ce(ue.files),ue.value=""}function J(){he()}function te(A){(A.key==="Enter"||A.key===" ")&&(A.preventDefault(),he())}function Se(A){p.value||!e.drag||(A.preventDefault(),C.value+=1,B.value=!0)}function ee(A){p.value||!e.drag||A.preventDefault()}function ye(A){p.value||!e.drag||(A.preventDefault(),C.value-=1,C.value<=0&&(C.value=0,B.value=!1))}function Ce(A){var ue;p.value||!e.drag||(A.preventDefault(),C.value=0,B.value=!1,ce(((ue=A.dataTransfer)==null?void 0:ue.files)??null))}function qe(A){var fe;if(p.value||!e.paste)return;const ue=(fe=A.clipboardData)==null?void 0:fe.files;ue&&ue.length>0&&(A.preventDefault(),ce(ue))}at(()=>{Ve(),Q(),typeof window<"u"&&window.removeEventListener("keydown",W),_e==null||_e()});const He=k(()=>{const A={};return e.accept&&(A.accept=e.accept),e.multiple&&!e.directory&&(A.multiple=!0),e.directory&&(A.webkitdirectory=!0),A}),je=k(()=>[l.b(),l.m(f.value),l.is("disabled",p.value),l.is("drag",e.drag),l.is("picture-card",e.listType==="picture-card")]),it=k(()=>[l.e("list"),l.m(e.listType),l.is("dragover",B.value&&e.drag)]),rt=k(()=>e.listType==="picture-card");return n({submit:Ee,abort:Ve,clear:ke,upload:$e,openFileDialog:he}),(A,ue)=>{var fe,Te;return i(),c("div",Ie({class:je.value},A.$attrs,{onPaste:qe}),[u("input",Ie({ref_key:"inputRef",ref:h,class:"kk-upload__input",type:"file"},He.value,{onChange:T}),null,16),rt.value?S("",!0):(i(),c("div",{key:0,class:g([o(l).e("trigger"),o(l).is("dragover",B.value&&a.drag)]),role:"button",tabindex:"0","aria-disabled":p.value||void 0,"aria-label":o(r)("upload.clickUpload"),onClick:J,onKeydown:te,onDragenter:Se,onDragover:ee,onDragleave:ye,onDrop:Ce},[y(A.$slots,"default",{disabled:p.value,openFileDialog:he},()=>[u("button",{type:"button",class:g(o(l).e("btn")),disabled:p.value},z(o(r)("upload.clickUpload")),11,as)])],42,ns)),a.tip||A.$slots.tip?(i(),c("div",{key:1,class:g(o(l).e("tip"))},[y(A.$slots,"tip",{},()=>[$(z(a.tip),1)])],2)):S("",!0),a.showFileList?(i(),c("div",{key:2,class:g(it.value),role:"list",onDragenter:ue[0]||(ue[0]=oe=>rt.value&&a.drag?Se:void 0),onDragover:ue[1]||(ue[1]=oe=>rt.value&&a.drag?ee:void 0),onDragleave:ue[2]||(ue[2]=oe=>rt.value&&a.drag?ye:void 0),onDrop:ue[3]||(ue[3]=oe=>rt.value&&a.drag?Ce:void 0)},[x.value.length?(i(!0),c(D,{key:0},pe(x.value,(oe,ge)=>(i(),c("div",{key:oe.uid,class:g([o(l).e("item"),o(l).m(e.listType)]),role:"listitem"},[y(A.$slots,"file",{file:oe,index:ge,remove:Ze=>ve(oe,Ze),retry:()=>Ke(oe),preview:()=>De(oe)},()=>[(e.listType==="picture"||e.listType==="picture-card")&&oe.url?(i(),c("div",{key:0,class:g(o(l).e("thumb"))},[u("img",{src:oe.url,alt:oe.name},null,8,os)],2)):S("",!0),u("div",{class:g(o(l).e("item-body"))},[u("span",{class:g(o(l).e("item-name")),title:oe.name},z(oe.name),11,ls),oe.status==="uploading"?(i(),c("div",{key:0,class:g(o(l).e("progress"))},[u("div",{class:g(o(l).e("progress-bar")),style:Fe({width:oe.percent+"%"})},null,6)],2)):oe.status==="fail"&&oe.error?(i(),c("span",{key:1,class:g(o(l).e("item-error"))},z(oe.error),3)):oe.status==="success"?(i(),c("span",{key:2,class:g(o(l).e("item-done"))},z(o(r)("upload.success")),3)):S("",!0)],2),u("div",{class:g(o(l).e("actions"))},[e.listType!=="text"&&oe.url&&!p.value?(i(),c("button",{key:0,type:"button",class:g(o(l).e("action")),"aria-label":o(r)("upload.preview"),onClick:Ze=>De(oe)},[...ue[4]||(ue[4]=[u("svg",{viewBox:"0 0 24 24",width:"16",height:"16","aria-hidden":"true"},[u("path",{d:"M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z",fill:"none",stroke:"currentColor","stroke-width":"2"}),u("circle",{cx:"12",cy:"12",r:"2.5",fill:"none",stroke:"currentColor","stroke-width":"2"})],-1)])],10,ss)):S("",!0),oe.status==="fail"&&!p.value?(i(),c("button",{key:1,type:"button",class:g(o(l).e("action")),"aria-label":o(r)("upload.retry"),onClick:Ze=>Ke(oe)},[...ue[5]||(ue[5]=[u("svg",{viewBox:"0 0 24 24",width:"16",height:"16","aria-hidden":"true"},[u("path",{d:"M4 12a8 8 0 1 1 2.3 5.6",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"}),u("path",{d:"M4 20v-5h5",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],10,is)):S("",!0),p.value?S("",!0):(i(),c("button",{key:2,type:"button",class:g(o(l).e("action")),"aria-label":`${o(r)("upload.remove")} ${oe.name}`,onClick:Ze=>ve(oe,Ze)},[...ue[6]||(ue[6]=[u("svg",{viewBox:"0 0 24 24",width:"16",height:"16","aria-hidden":"true"},[u("path",{d:"M5 7h14M9 7V5h6v2M7 7l1 12h8l1-12",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],10,rs))],2)])],2))),128)):rt.value?S("",!0):(i(),c("div",{key:1,class:g(o(l).e("empty"))},[y(A.$slots,"empty",{},()=>[$(z(o(r)("upload.empty")),1)])],2)),rt.value&&!p.value?(i(),c("div",{key:2,class:g([o(l).e("trigger"),o(l).e("card"),o(l).is("dragover",B.value&&a.drag)]),role:"button",tabindex:"0","aria-disabled":p.value||void 0,"aria-label":o(r)("upload.clickUpload"),onClick:J,onKeydown:te},[y(A.$slots,"icon",{},()=>[u("span",{class:g(o(l).e("plus"))},"+",2)]),u("span",{class:g(o(l).e("card-text"))},z(o(r)("upload.clickUpload")),3)],42,us)):S("",!0)],34)):S("",!0),(i(),N(sn,{to:"body"},[Y.value?(i(),c("div",{key:0,class:g(o(l).e("preview")),style:Fe({zIndex:ze.value||void 0}),role:"dialog","aria-modal":"true","aria-label":o(r)("upload.preview"),onClick:nt(Be,["self"])},[u("button",{type:"button",class:g(o(l).e("preview-close")),"aria-label":o(r)("upload.close"),onClick:Be},[...ue[7]||(ue[7]=[u("svg",{viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true"},[u("path",{d:"M6 6l12 12M18 6L6 18",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"})],-1)])],10,ds),(fe=se.value)!=null&&fe.url?(i(),c("img",{key:0,class:g(o(l).e("preview-img")),src:se.value.url,alt:se.value.name},null,10,ps)):S("",!0),u("div",{class:g(o(l).e("preview-name"))},z((Te=se.value)==null?void 0:Te.name),3)],14,cs)):S("",!0)]))],16)}}}),dn=Ae(vs,"KkUpload"),fs=["aria-label"],ms=["disabled","aria-label"],ks={key:2,viewBox:"0 0 24 24",width:"16",height:"16","aria-hidden":"true"},gs=["disabled","aria-label"],bs={key:2,viewBox:"0 0 24 24",width:"16",height:"16","aria-hidden":"true"},hs=["disabled","aria-label"],ys={key:2,viewBox:"0 0 24 24",width:"16",height:"16","aria-hidden":"true"},_s=["aria-current","onClick"],xs=["aria-label","onClick"],ws=["disabled","aria-label"],$s={key:2,viewBox:"0 0 24 24",width:"16",height:"16","aria-hidden":"true"},Ss=["disabled","aria-label"],Ks=["disabled","aria-expanded"],Cs=["aria-selected","onClick"],Ts=["disabled"],zs=["disabled","aria-expanded"],Ps=K({name:"KkPagination",inheritAttrs:!1,__name:"Pagination",props:{modelValue:{default:void 0},currentPage:{default:void 0},pageSize:{default:10},total:{default:void 0},pageCount:{default:void 0},pageSizes:{default:()=>[10,20,50,100]},layout:{default:"prev, pager, next, jumper, sizes, total"},pagerCount:{default:7},background:{type:Boolean,default:!1},size:{default:"medium"},disabled:{type:Boolean,default:!1},hideOnSinglePage:{type:Boolean,default:!1},mode:{default:"number"},prevText:{default:""},nextText:{default:""},prevIcon:{type:Function,default:void 0},nextIcon:{type:Function,default:void 0},showQuickJumper:{type:Boolean,default:!0}},emits:["update:modelValue","update:currentPage","update:pageSize","change","current-change","size-change","prev-click","next-click"],setup(a,{expose:n,emit:t}){const e=a,s=t,l=Re("pagination"),{t:r}=et(),d=_(e.pageSize),p=k(()=>e.pageCount!=null?Math.max(1,e.pageCount):e.total!=null?Math.max(1,Math.ceil(e.total/d.value)):1),f=_(_n(e.currentPage??e.modelValue??1,1,p.value)),h=k(()=>e.disabled),x=k(()=>[l.b(),l.m(e.size),l.is("background",e.background),l.is("disabled",h.value)]),C=k(()=>!(e.hideOnSinglePage&&p.value<=1));Le(()=>[e.currentPage,e.modelValue],([Y,se])=>{const ze=Y??se;ze!=null&&(f.value=_n(ze,1,p.value))}),Le(()=>e.pageSize,Y=>{Y!=null&&(d.value=Y)}),Le(p,Y=>{f.value>Y&&(f.value=Y)});function B(Y){const se=_n(Y,1,p.value);f.value=se,s("update:modelValue",se),s("update:currentPage",se),s("current-change",se),s("change",{currentPage:se,pageSize:d.value})}function L(){h.value||f.value<=1||(s("prev-click",f.value-1),B(f.value-1))}function U(){h.value||f.value>=p.value||(s("next-click",f.value+1),B(f.value+1))}function Z(Y){h.value||!Number.isFinite(Y)||B(Math.round(Y))}function M(Y){if(h.value||Y==null)return;d.value=Y;const se=p.value;f.value>se&&(f.value=se),s("update:pageSize",Y),s("size-change",Y),s("change",{currentPage:f.value,pageSize:Y})}const O=Y=>({type:"page",page:Y}),E=Y=>({type:"more",dir:Y}),j=k(()=>{const Y=p.value,se=f.value,ze=e.pagerCount;if(Y<=ze)return hn(1,Y).map(O);const _e=Math.floor((ze-1)/2),be=_e+1,Be=Y-_e;if(se<=be)return[...hn(1,ze-2).map(O),E("next"),O(Y)];if(se>=Be){const he=Y-(ze-3);return[O(1),E("prev"),...hn(he,Y).map(O)]}const De=se-(_e-1),W=se+(_e-1);return[O(1),E("prev"),...hn(De,W).map(O),E("next"),O(Y)]});function I(Y){if(Y.type==="page"){Z(Y.page);return}const se=e.pagerCount-2;Z(Y.dir==="prev"?f.value-se:f.value+se)}const G=_("");function ae(){const Y=Number(G.value);Number.isFinite(Y)&&Y!==0&&(Z(Y),G.value="")}const H=_(!1),Q=_(null),ne=_(null);na([Q,ne],()=>{H.value=!1},{events:["pointerdown"]});function le(){h.value||(H.value=!H.value)}function xe(Y){H.value=!1,M(Y)}const X=k(()=>e.layout.split(/[\s,]+/).map(Y=>Y.trim()).filter(Boolean)),ce=k(()=>e.showQuickJumper&&!X.value.includes("jumper")),$e=k(()=>ce.value?[...X.value,"jumper"]:X.value),Ee=k(()=>{const Y=$e.value.indexOf("->");return Y===-1?$e.value:$e.value.slice(0,Y)}),Ve=k(()=>{const Y=$e.value.indexOf("->");return Y===-1?[]:$e.value.slice(Y+1)}),ke=k(()=>h.value||f.value<=1),ve=k(()=>h.value||f.value>=p.value),Ke=K({name:"KkPaginationSlotRenderer",props:{fn:{type:Function,default:void 0},scope:{type:Object,default:()=>({})}},setup(Y){return()=>typeof Y.fn=="function"?Y.fn(Y.scope):null}});return n({prev:L,next:U,jump:Z,setPageSize:M}),(Y,se)=>C.value?(i(),c("div",{key:0,class:g(x.value),role:"navigation","aria-label":o(r)("pagination.page")},[a.mode==="simple"?(i(),c(D,{key:0},[u("button",{type:"button",class:g([o(l).e("btn"),o(l).e("prev")]),disabled:ke.value,"aria-label":o(r)("pagination.prev"),onClick:L},[y(Y.$slots,"prev",{disabled:ke.value},()=>[o(gn)(a.prevIcon)?(i(),N(o(Ke),{key:0,fn:a.prevIcon,scope:{}},null,8,["fn"])):a.prevText?(i(),c(D,{key:1},[$(z(a.prevText),1)],64)):(i(),c("svg",ks,[...se[2]||(se[2]=[u("path",{d:"M15 6l-6 6 6 6",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])]))])],10,ms),u("span",{class:g(o(l).e("simple-pager"))},z(f.value)+" / "+z(p.value),3),u("button",{type:"button",class:g([o(l).e("btn"),o(l).e("next")]),disabled:ve.value,"aria-label":o(r)("pagination.next"),onClick:U},[y(Y.$slots,"next",{disabled:ve.value},()=>[o(gn)(a.nextIcon)?(i(),N(o(Ke),{key:0,fn:a.nextIcon,scope:{}},null,8,["fn"])):a.nextText?(i(),c(D,{key:1},[$(z(a.nextText),1)],64)):(i(),c("svg",bs,[...se[3]||(se[3]=[u("path",{d:"M9 6l6 6-6 6",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])]))])],10,gs),u("span",{class:g(o(l).e("total"))},z(o(r)("pagination.total",{total:a.total??0})),3)],64)):(i(),c(D,{key:1},[u("div",{class:g(o(l).e("group"))},[(i(!0),c(D,null,pe(Ee.value,(ze,_e)=>(i(),c(D,{key:`l-${ze}-${_e}`},[ze==="prev"?(i(),c("button",{key:0,type:"button",class:g([o(l).e("btn"),o(l).e("prev")]),disabled:ke.value,"aria-label":o(r)("pagination.prev"),onClick:L},[y(Y.$slots,"prev",{disabled:ke.value},()=>[o(gn)(a.prevIcon)?(i(),N(o(Ke),{key:0,fn:a.prevIcon,scope:{}},null,8,["fn"])):a.prevText?(i(),c(D,{key:1},[$(z(a.prevText),1)],64)):(i(),c("svg",ys,[...se[4]||(se[4]=[u("path",{d:"M15 6l-6 6 6 6",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])]))])],10,hs)):ze==="pager"?(i(!0),c(D,{key:1},pe(j.value,(be,Be)=>(i(),c(D,{key:`p-${Be}`},[be.type==="page"?(i(),c("button",{key:0,type:"button",class:g([o(l).e("btn"),o(l).e("pager"),o(l).is("active",be.page===f.value)]),"aria-current":be.page===f.value?"page":void 0,onClick:De=>I(be)},[y(Y.$slots,"pager",{page:be.page,active:be.page===f.value},()=>[$(z(be.page),1)])],10,_s)):(i(),c("button",{key:1,type:"button",class:g([o(l).e("btn"),o(l).e("pager"),o(l).e("more")]),"aria-label":o(r)("pagination.goto",{page:be.dir==="prev"?f.value-(a.pagerCount-2):f.value+(a.pagerCount-2)}),onClick:De=>I(be)},[u("span",{class:g(o(l).e("more-text"))},"···",2)],10,xs))],64))),128)):ze==="next"?(i(),c("button",{key:2,type:"button",class:g([o(l).e("btn"),o(l).e("next")]),disabled:ve.value,"aria-label":o(r)("pagination.next"),onClick:U},[y(Y.$slots,"next",{disabled:ve.value},()=>[o(gn)(a.nextIcon)?(i(),N(o(Ke),{key:0,fn:a.nextIcon,scope:{}},null,8,["fn"])):a.nextText?(i(),c(D,{key:1},[$(z(a.nextText),1)],64)):(i(),c("svg",$s,[...se[5]||(se[5]=[u("path",{d:"M9 6l6 6-6 6",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])]))])],10,ws)):ze==="total"?(i(),c("span",{key:3,class:g(o(l).e("total"))},z(o(r)("pagination.total",{total:a.total??0})),3)):ze==="jumper"?(i(),c("span",{key:4,class:g(o(l).e("jumper"))},[y(Y.$slots,"jumper",{},()=>[$(z(o(r)("pagination.jumper"))+" ",1),pt(u("input",{"onUpdate:modelValue":se[0]||(se[0]=be=>G.value=be),type:"text",class:g(o(l).e("jumper-input")),disabled:h.value,"aria-label":o(r)("pagination.jumper"),onKeyup:Bt(ae,["enter"])},null,42,Ss),[[jn,G.value]]),$(" "+z(o(r)("pagination.page")),1)])],2)):ze==="sizes"?(i(),c("span",{key:5,ref_for:!0,ref_key:"sizesRef",ref:Q,class:g(o(l).e("sizes"))},[y(Y.$slots,"sizes",{},()=>[u("button",{type:"button",class:g(o(l).e("sizes-trigger")),disabled:h.value,"aria-haspopup":!0,"aria-expanded":H.value,onClick:le},[$(z(o(r)("pagination.sizes",{size:d.value}))+" ",1),(i(),c("svg",{viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":"true",class:g(o(l).e("sizes-arrow"))},[...se[6]||(se[6]=[u("path",{d:"M6 9l6 6 6-6",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])],2))],10,Ks),H.value?(i(),c("span",{key:0,ref_for:!0,ref_key:"sizesPopperRef",ref:ne,class:g(o(l).e("sizes-popper")),role:"listbox"},[(i(!0),c(D,null,pe(a.pageSizes,be=>(i(),c("button",{key:be,type:"button",class:g([o(l).e("size-option"),o(l).is("active",be===d.value)]),role:"option","aria-selected":be===d.value,onClick:Be=>xe(be)},z(o(r)("pagination.sizes",{size:be})),11,Cs))),128))],2)):S("",!0)])],2)):S("",!0)],64))),128))],2),Ve.value.length?(i(),c("div",{key:0,class:g([o(l).e("group"),o(l).e("group--right")])},[(i(!0),c(D,null,pe(Ve.value,(ze,_e)=>(i(),c(D,{key:`r-${ze}-${_e}`},[ze==="total"?(i(),c("span",{key:0,class:g(o(l).e("total"))},z(o(r)("pagination.total",{total:a.total??0})),3)):ze==="jumper"?(i(),c("span",{key:1,class:g(o(l).e("jumper"))},[y(Y.$slots,"jumper",{},()=>[$(z(o(r)("pagination.jumper"))+" ",1),pt(u("input",{"onUpdate:modelValue":se[1]||(se[1]=be=>G.value=be),type:"text",class:g(o(l).e("jumper-input")),disabled:h.value,onKeyup:Bt(ae,["enter"])},null,42,Ts),[[jn,G.value]]),$(" "+z(o(r)("pagination.page")),1)])],2)):ze==="sizes"?(i(),c("span",{key:2,class:g(o(l).e("sizes"))},[y(Y.$slots,"sizes",{},()=>[u("button",{type:"button",class:g(o(l).e("sizes-trigger")),disabled:h.value,"aria-expanded":H.value,onClick:le},z(o(r)("pagination.sizes",{size:d.value})),11,zs)])],2)):S("",!0)],64))),128))],2)):S("",!0)],64))],10,fs)):S("",!0)}}),pn=Ae(Ps,"KkPagination"),Fa=Symbol("kk-table-context"),Ls={key:0},Bs=["aria-sort"],Ms={key:1},Vs={key:2},Is=["aria-label","onClick"],Os=["data-kk-table-row","onClick","onDblclick"],Es=["onClick"],As={key:1},Rs=["aria-expanded","aria-label","onClick"],js=["colspan"],Ds=["colspan"],Fs=K({name:"KkTable",inheritAttrs:!1,__name:"Table",props:{data:{default:()=>[]},columns:{default:void 0},rowKey:{default:void 0},border:{type:Boolean,default:!0},stripe:{type:Boolean,default:!1},size:{default:"medium"},height:{default:void 0},maxHeight:{default:void 0},loading:{type:Boolean,default:!1},emptyText:{default:""},rowClassName:{type:Function,default:void 0},cellClassName:{type:Function,default:void 0},rowStyle:{type:Function,default:void 0},cellStyle:{type:Function,default:void 0},showHeader:{type:Boolean,default:!0},defaultExpandAll:{type:Boolean,default:!1},expandRowKeys:{default:void 0},highlightCurrentRow:{type:Boolean,default:!1},currentRowKey:{default:void 0},selectOnIndeterminate:{type:Boolean,default:!0},pagination:{default:void 0},selection:{default:void 0},defaultSelection:{default:void 0},disabled:{type:Boolean,default:!1}},emits:["select","select-all","selection-change","update:selection","row-click","row-dblclick","cell-click","sort-change","expand-change","current-change","page-change"],setup(a,{expose:n,emit:t}){var Rt,Ct,jt,Dt;const e=a,s=t,l=Re("table"),{t:r}=et(),d=_([]);ht(Fa,{register:w=>{d.value.some(b=>b.id===w.id)||d.value.push(w)},unregister:w=>{const b=d.value.findIndex(V=>V.id===w);b>=0&&d.value.splice(b,1)}});const f=k(()=>d.value.length?d.value.map(w=>({...w.props,id:w.id,slots:w.slots,source:"child"})):(e.columns??[]).map((w,b)=>({...w,id:`col-prop-${w.prop??b}`,slots:{default:void 0,header:void 0},source:"prop"}))),h=k(()=>f.value.find(w=>w.type==="selection")),x=k(()=>e.height!=null||e.maxHeight!=null);function C(w){return e.rowKey?String(w[e.rowKey]):String(e.data.indexOf(w))}const B=_(void 0),L=_(null),U=_(!1);function Z(w,b){if(typeof b.sortBy=="function")return b.sortBy(w);const V=typeof b.sortBy=="string"?b.sortBy:b.prop;return V!=null?w[V]:void 0}const M=k(()=>{if(!L.value||B.value==null||U.value)return e.data;const w=f.value.find(V=>V.id===B.value);if(!w)return e.data;const b=[...e.data];return b.sort((V,R)=>{if(w.sortMethod)return w.sortMethod(V,R);const ie=Z(V,w),we=Z(R,w);return ie==null&&we==null?0:ie==null?1:we==null||ie<we?-1:ie>we?1:0}),L.value==="descending"&&b.reverse(),b});function O(w){var ct;if(e.disabled||!w.sortable)return;const b=(ct=w.sortOrders)!=null&&ct.length?w.sortOrders:["ascending","descending",null],R=B.value===w.id?L.value:null,ie=b.indexOf(R),we=b[(ie+1)%b.length];B.value=w.id,L.value=we,U.value=w.sortable==="custom",w.sortable==="custom"?s("sort-change",{column:w,prop:w.prop,order:we}):s("sort-change",{column:w,prop:w.prop,order:we})}function E(w){if(!(!w.sortable||B.value!==w.id))return L.value==="ascending"?"ascending":L.value==="descending"?"descending":"none"}function j(w){return w.sortable?B.value!==w.id||L.value==null?r("table.sortAsc"):L.value==="ascending"?r("table.sortDesc"):r("table.sortClear"):""}const I=_(new Set((e.defaultSelection??[]).map(String))),G=k(()=>e.data.filter(w=>I.value.has(C(w)))),ae=k(()=>W.value);function H(w){return I.value.has(C(w))}function Q(w,b){var V;return(V=h.value)!=null&&V.selectable?h.value.selectable(w,b):!0}const ne=k(()=>ae.value.filter((w,b)=>Q(w,b))),le=k(()=>ne.value.length>0&&ne.value.every(w=>H(w))),xe=k(()=>ne.value.some(w=>H(w))),X=k(()=>xe.value&&!le.value);function ce(){const w=G.value;s("selection-change",w),s("update:selection",w)}function $e(w){if(e.disabled)return;const b=C(w);I.value.has(b)?I.value.delete(b):I.value.add(b);const V=G.value;s("select",V,w),ce()}function Ee(){if(e.disabled)return;const w=ne.value.map(b=>C(b));le.value?w.forEach(b=>I.value.delete(b)):w.forEach(b=>I.value.add(b)),s("select-all",G.value),ce()}function Ve(w){e.disabled||(X.value&&!e.selectOnIndeterminate?ne.value.forEach(b=>I.value.delete(C(b))):w?ne.value.forEach(b=>I.value.add(C(b))):ne.value.forEach(b=>I.value.delete(C(b))),s("select-all",G.value),ce())}const ke=_(new Set);Le(()=>e.expandRowKeys,w=>{ke.value=new Set((w??[]).map(String))},{immediate:!0}),Le(()=>e.defaultExpandAll,w=>{w&&(ke.value=new Set(e.data.map(b=>C(b))))},{immediate:!0});function ve(w){return ke.value.has(C(w))}function Ke(w){if(e.disabled)return;const b=C(w);ke.value.has(b)?ke.value.delete(b):ke.value.add(b),s("expand-change",w,Array.from(ke.value))}const Y=_(e.currentRowKey);function se(w,b,V){if(s("row-click",w,b,V),e.highlightCurrentRow&&!e.disabled){const R=Y.value!=null?e.data.find(ie=>C(ie)===String(Y.value))??null:null;Y.value=C(w),s("current-change",w,R)}}function ze(w){return Y.value!=null&&C(w)===String(Y.value)}const _e=k(()=>e.pagination),be=_(((Rt=_e.value)==null?void 0:Rt.currentPage)??1),Be=_(((Ct=_e.value)==null?void 0:Ct.pageSize)??((Dt=(jt=_e.value)==null?void 0:jt.pageSizes)==null?void 0:Dt[0])??10);Le(()=>e.pagination,w=>{(w==null?void 0:w.currentPage)!=null&&(be.value=w.currentPage),(w==null?void 0:w.pageSize)!=null&&(Be.value=w.pageSize)},{immediate:!0});const De=k(()=>{const w=_e.value;return(w==null?void 0:w.total)!=null?w.total:(w==null?void 0:w.pageCount)!=null?w.pageCount*Be.value:M.value.length}),W=k(()=>{if(!_e.value)return M.value;const w=(be.value-1)*Be.value;return M.value.slice(w,w+Be.value)});function he(w){be.value=w.currentPage,Be.value=w.pageSize,s("page-change",w)}function T(w){if(w==null)return;if(typeof w=="number")return w;const b=parseFloat(w);return Number.isNaN(b)?void 0:b}const J=k(()=>{const w=new Map;let b=0,V=0;for(const R of f.value)if(R.fixed==="left"||R.fixed===!0){w.set(R.id,{left:b});const ie=T(R.width);ie!=null&&(b+=ie)}for(let R=f.value.length-1;R>=0;R--){const ie=f.value[R];if(ie.fixed==="right"){w.set(ie.id,{right:V});const we=T(ie.width);we!=null&&(V+=we)}}return w});function te(w,b){return b.formatter?b.formatter(w,b,b.prop!=null?w[b.prop]:void 0,0):b.prop!=null?w[b.prop]:""}function Se(w,b){const V=f.value.find(R=>R.type==="index");return V!=null&&V.indexMethod?V.indexMethod(b,w):_e.value?(be.value-1)*Be.value+b+1:b+1}function ee(w,b,V,R){var xt;const ie={},we=J.value.get(b.id);b.fixed==="left"||b.fixed===!0?(ie.position="sticky",ie.left=(we==null?void 0:we.left)!=null?`${we.left}px`:"0",ie.zIndex=2,ie.background="var(--kk-bg-container)"):b.fixed==="right"&&(ie.position="sticky",ie.right=(we==null?void 0:we.right)!=null?`${we.right}px`:"0",ie.zIndex=2,ie.background="var(--kk-bg-container)");const ct=(xt=e.cellStyle)==null?void 0:xt.call(e,{row:w,column:b,rowIndex:V,columnIndex:R});return ct&&typeof ct=="object"&&Object.assign(ie,ct),ie}function ye(w){const b={},V=J.value.get(w.id);return w.fixed==="left"||w.fixed===!0?(b.position="sticky",b.left=(V==null?void 0:V.left)!=null?`${V.left}px`:"0",b.zIndex=3,b.background="var(--kk-bg-subtle)"):w.fixed==="right"&&(b.position="sticky",b.right=(V==null?void 0:V.right)!=null?`${V.right}px`:"0",b.zIndex=3,b.background="var(--kk-bg-subtle)"),b}function Ce(w,b,V,R){var we;const ie=b.fixed==="right"?"right":b.fixed?"left":void 0;return[l.e("cell"),l.is(`align-${b.align}`,!0),ie?l.is(`fixed-${ie}`):void 0,b.className,(we=e.cellClassName)==null?void 0:we.call(e,{row:w,column:b,rowIndex:V,columnIndex:R})]}function qe(w){const b=w.fixed==="right"?"right":w.fixed?"left":void 0;return[l.e("cell"),l.is(`align-${w.align}`,!0),b?l.is(`fixed-${b}`):void 0,w.labelClassName]}function He(w,b){var V;return[l.e("row"),l.is("striped",e.stripe&&b%2===1),l.is("current",e.highlightCurrentRow&&ze(w)),(V=e.rowClassName)==null?void 0:V.call(e,{row:w,rowIndex:b})]}function je(w,b){var R;const V=(R=e.rowStyle)==null?void 0:R.call(e,{row:w,rowIndex:b});return V&&typeof V=="object"?V:void 0}function it(w){if(w!=null)return typeof w=="number"?`${w}px`:w}const rt=k(()=>{const w={overflow:"auto"};return e.height!=null&&(w.height=it(e.height)),e.maxHeight!=null&&(w.maxHeight=it(e.maxHeight)),w}),A=k(()=>W.value.length===0),ue=k(()=>e.emptyText||r("table.empty")),fe=k(()=>r("table.loading")),Te=K({name:"KkTableCheckbox",props:{modelValue:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},label:{type:String,default:""}},emits:["update:modelValue","change"],setup(w,b){const V=_(null);return rn(()=>{V.value&&(V.value.indeterminate=w.indeterminate)}),()=>Pa("input",{ref:V,type:"checkbox",class:l.e("checkbox"),checked:w.modelValue,disabled:w.disabled,"aria-checked":w.indeterminate?"mixed":w.modelValue,"aria-label":w.label,onChange:R=>{const ie=R.target.checked;b.emit("update:modelValue",ie),b.emit("change",ie)}})}}),oe=K({name:"KkTableSlotRenderer",props:{fn:{type:Function,default:void 0},scope:{type:Object,default:()=>({})}},setup(w){return()=>typeof w.fn=="function"?w.fn(w.scope):null}}),ge=_(null);function Ze(){I.value=new Set,ce()}function Oe(w,b){if(e.disabled)return;const V=C(w);b??!I.value.has(V)?I.value.add(V):I.value.delete(V),ce()}function Ne(){Ee()}function dt(w){const b=Y.value!=null?e.data.find(V=>C(V)===String(Y.value))??null:null;Y.value=C(w),s("current-change",w,b)}function St(){B.value=void 0,L.value=null}function _t(){}function At(w){const b=ge.value;if(!b)return;const V=Array.from(b.querySelectorAll("tr[data-kk-table-row]"));let R;w.key!=null?R=V.find(ie=>ie.dataset.kkTableRow===String(w.key)):w.index!=null&&(R=V[w.index]),R&&R.scrollIntoView({block:"nearest"})}function qt(){return G.value}n({clearSelection:Ze,toggleRowSelection:Oe,toggleAllSelection:Ne,setCurrentRow:dt,clearSort:St,clearFilter:_t,scrollTo:At,getSelectionRows:qt});const Kt=k(()=>[l.b(),l.m(e.size),l.is("border",e.border),l.is("scrollable",x.value),l.is("disabled",e.disabled)]);return(w,b)=>{var V;return i(),c("div",{class:g(Kt.value),role:"region"},[u("div",{class:g(o(l).e("columns")),style:{display:"none"}},[y(w.$slots,"default")],2),u("div",{ref_key:"bodyWrapRef",ref:ge,class:g(o(l).e("body-wrap")),style:Fe(rt.value)},[u("table",{class:g(o(l).e("table")),cellspacing:"0",cellpadding:"0"},[u("colgroup",null,[(i(!0),c(D,null,pe(f.value,R=>(i(),c("col",{key:R.id,style:Fe({width:T(R.width)})},null,4))),128))]),e.showHeader?(i(),c("thead",Ls,[u("tr",{class:g(o(l).e("header-row"))},[(i(!0),c(D,null,pe(f.value,R=>(i(),c("th",{key:R.id,class:g(qe(R)),style:Fe(ye(R)),"aria-sort":E(R),scope:"col"},[R.type==="selection"?(i(),N(o(Te),{key:0,"model-value":le.value,indeterminate:X.value,disabled:e.disabled||ne.value.length===0,label:o(r)("table.selectAll"),onChange:Ve},null,8,["model-value","indeterminate","disabled","label"])):R.type==="expand"?(i(),c("span",Ms)):R.type==="index"?(i(),c("span",Vs,z(R.label||"#"),1)):(i(),c(D,{key:3},[R.slots.header?(i(),N(o(oe),{key:0,fn:R.slots.header,scope:{column:R}},null,8,["fn","scope"])):(i(),c("span",{key:1,class:g(o(l).e("header-label"))},z(R.label),3)),R.sortable?(i(),c("button",{key:2,type:"button",class:g([o(l).e("sort"),o(l).is("active",B.value===R.id)]),"aria-label":j(R),onClick:ie=>O(R)},[(i(),c("svg",{viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":"true",class:g(o(l).e("sort-icon"))},[u("path",{d:"M12 5l5 6H7z",class:g(o(l).is("asc",B.value===R.id&&L.value==="ascending")),fill:"currentColor"},null,2),u("path",{d:"M12 19l-5-6h10z",class:g(o(l).is("desc",B.value===R.id&&L.value==="descending")),fill:"currentColor"},null,2)],2))],10,Is)):S("",!0)],64))],14,Bs))),128))],2)])):S("",!0),u("tbody",null,[(i(!0),c(D,null,pe(W.value,(R,ie)=>(i(),c(D,{key:C(R)},[u("tr",{"data-kk-table-row":C(R),class:g(He(R,ie)),style:Fe(je(R,ie)),onClick:we=>se(R,ie,we),onDblclick:we=>s("row-dblclick",R,ie,we)},[(i(!0),c(D,null,pe(f.value,(we,ct)=>(i(),c("td",{key:we.id,class:g(Ce(R,we,ie,ct)),style:Fe(ee(R,we,ie,ct)),onClick:xt=>s("cell-click",R,we,ct,xt)},[we.type==="selection"?(i(),N(o(Te),{key:0,"model-value":H(R),disabled:e.disabled||!Q(R,ie),label:o(r)("table.selectRow"),onChange:xt=>$e(R)},null,8,["model-value","disabled","label","onChange"])):we.type==="index"?(i(),c("span",As,z(Se(R,ie)),1)):we.type==="expand"?(i(),c("button",{key:2,type:"button",class:g(o(l).e("expand-btn")),"aria-expanded":ve(R),"aria-label":ve(R)?o(r)("table.collapseRow"):o(r)("table.expandRow"),onClick:xt=>Ke(R)},[...b[0]||(b[0]=[u("svg",{viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":"true"},[u("path",{d:"M9 6l6 6-6 6",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],10,Rs)):(i(),c(D,{key:3},[we.slots.default?(i(),N(o(oe),{key:0,fn:we.slots.default,scope:{row:R,column:we,index:ie,$index:ie}},null,8,["fn","scope"])):(i(),c("span",{key:1,class:g(o(l).e("cell-text"))},z(te(R,we)),3))],64))],14,Es))),128))],46,Os),ve(R)?(i(),c("tr",{key:0,class:g(o(l).e("expanded-row"))},[u("td",{colspan:f.value.length,class:g(o(l).e("expanded-cell"))},[y(w.$slots,"expand",{row:R,index:ie},()=>[b[1]||(b[1]=$(z(""),-1))])],10,js)],2)):S("",!0)],64))),128)),A.value?(i(),c("tr",{key:0,class:g(o(l).e("empty-row"))},[u("td",{colspan:f.value.length,class:g(o(l).e("empty"))},[y(w.$slots,"empty",{},()=>[$(z(ue.value),1)])],10,Ds)],2)):S("",!0)])],2),e.loading?(i(),c("div",{key:0,class:g(o(l).e("loading")),role:"status"},[y(w.$slots,"loading",{},()=>[$(z(fe.value),1)])],2)):S("",!0)],6),_e.value?(i(),N(o(pn),Ie({key:0},_e.value,{"current-page":be.value,"page-size":Be.value,total:De.value,size:((V=_e.value)==null?void 0:V.size)??e.size,disabled:e.disabled,onChange:he}),null,16,["current-page","page-size","total","size","disabled"])):S("",!0),w.$slots.append?(i(),c("div",{key:1,class:g(o(l).e("append"))},[y(w.$slots,"append")],2)):S("",!0)],2)}}}),Ns={hidden:"","aria-hidden":"true"},Hs=K({name:"KkTableColumn",inheritAttrs:!1,__name:"TableColumn",props:{prop:{default:void 0},label:{default:""},width:{default:void 0},minWidth:{default:void 0},fixed:{type:[String,Boolean],default:void 0},align:{default:"left"},sortable:{type:[Boolean,String],default:void 0},sortBy:{type:[String,Function],default:void 0},sortOrders:{default:void 0},sortMethod:{},resizable:{type:Boolean,default:!1},selectable:{type:Function,default:void 0},type:{default:"default"},indexMethod:{type:Function,default:void 0},formatter:{type:Function,default:void 0},className:{default:void 0},labelClassName:{default:void 0}},setup(a){const n=a,t=bt(),e=Qe(Fa,null),s=Et("kk-table-col"),l={id:s,props:n,slots:{default:t.default,header:t.header}};return We(()=>e==null?void 0:e.register(l)),at(()=>e==null?void 0:e.unregister(s)),(r,d)=>(i(),c("span",Ns))}}),vn=Ae(Fs,"KkTable"),lt=Ae(Hs,"KkTableColumn"),Us=K({name:"KkWatermark",inheritAttrs:!1,__name:"Watermark",props:{content:{},width:{default:120},height:{default:120},rotate:{default:-22},gap:{default:()=>[100,100]},offset:{},font:{},image:{},imageWidth:{},imageHeight:{},opacity:{default:.15},zIndex:{default:9},cross:{type:Boolean,default:!0},repeat:{type:Boolean,default:!0},inheritColor:{type:Boolean,default:!1},moveable:{type:Boolean,default:!1}},setup(a,{expose:n}){const t=a,e=Re("watermark"),{t:s}=et(),l=_(null),r=_(null),d=_([]),p=_({w:0,h:0}),f=_({x:0,y:0}),h=_(!1);function x(H){if(!t.moveable||!l.value)return;const Q=l.value.getBoundingClientRect();f.value={x:H.clientX-Q.left,y:H.clientY-Q.top},h.value=!0}function C(){t.moveable&&(h.value=!1)}let B=!1,L=null,U=null;function Z(H,Q){return typeof window>"u"||typeof getComputedStyle!="function"?Q:getComputedStyle(document.documentElement).getPropertyValue(H).trim()||Q}const M=k(()=>{const H=t.font??{};let Q=H.color;return Q||(t.inheritColor&&l.value?Q=getComputedStyle(l.value).color:Q=Z("--kk-text-tertiary","#9ba3b7")),{color:Q,size:H.size??16,family:H.family??Z("--kk-font-sans","sans-serif"),weight:H.weight??"normal",style:H.style??"normal"}});function O(){if(r.value){const xe=(r.value.textContent??"").trim().split(`
`).map(X=>X.trim()).filter(Boolean);if(xe.length)return xe}const H=t.content;if(H==null)return[s("watermark.text")];const ne=(Array.isArray(H)?H:[H]).map(String).filter(le=>le.length>0);return ne.length?ne:[s("watermark.text")]}function E(H){try{return H.getContext("2d")}catch{return null}}function j(H){const Q=document.createElement("canvas"),ne=E(Q);if(!ne)return;const le=typeof window<"u"&&window.devicePixelRatio?window.devicePixelRatio:1,xe=M.value,X=O(),ce=xe.size+4,$e=X.length*ce;ne.font=`${xe.style} ${xe.weight} ${xe.size}px ${xe.family}`;const Ee=X.map(W=>ne.measureText(W).width),Ve=Math.max(1,...Ee),ke=Math.max(Ve,t.width),ve=Math.max($e,t.height),Ke=H*Math.PI/180,Y=Math.abs(Math.cos(Ke)),se=Math.abs(Math.sin(Ke)),ze=ke*Y+ve*se,_e=ke*se+ve*Y,be=Math.ceil(Math.max(ze,ke)+t.gap[0]),Be=Math.ceil(Math.max(_e,ve)+t.gap[1]);Q.width=be*le,Q.height=Be*le,ne.scale(le,le),ne.clearRect(0,0,be,Be),ne.translate(be/2,Be/2),ne.rotate(Ke),ne.font=`${xe.style} ${xe.weight} ${xe.size}px ${xe.family}`,ne.fillStyle=xe.color,ne.textAlign="center",ne.textBaseline="middle";const De=-((X.length-1)*ce)/2;return X.forEach((W,he)=>ne.fillText(W,0,De+he*ce)),p.value={w:be,h:Be},Q.toDataURL()}function I(H){const Q=document.createElement("canvas"),ne=E(Q);if(!ne)return;const le=typeof window<"u"&&window.devicePixelRatio?window.devicePixelRatio:1,xe=t.imageWidth||H.naturalWidth||t.width,X=t.imageHeight||H.naturalHeight||t.height,ce=t.rotate*Math.PI/180,$e=Math.abs(Math.cos(ce)),Ee=Math.abs(Math.sin(ce)),Ve=xe*$e+X*Ee,ke=xe*Ee+X*$e,ve=Math.ceil(Math.max(Ve,xe)+t.gap[0]),Ke=Math.ceil(Math.max(ke,X)+t.gap[1]);Q.width=ve*le,Q.height=Ke*le,ne.scale(le,le),ne.clearRect(0,0,ve,Ke),ne.translate(ve/2,Ke/2),ne.rotate(ce);try{ne.drawImage(H,-xe/2,-X/2,xe,X)}catch{return}return p.value={w:ve,h:Ke},Q.toDataURL()}function G(){if(B)return;if(d.value=[],t.image){const Q=new Image;Q.crossOrigin="anonymous",Q.onload=()=>{const ne=I(Q);ne&&(d.value=[ne])},Q.onerror=()=>{},Q.src=t.image;return}const H=j(t.rotate);if(H!=null)if(t.cross){const Q=j(-t.rotate);d.value=Q!=null?[H,Q]:[H]}else d.value=[H]}const ae=k(()=>{const H={opacity:t.opacity,zIndex:t.zIndex};if(d.value.length){const{w:Q,h:ne}=p.value;H.backgroundImage=d.value.map(le=>`url("${le}")`).join(", "),t.moveable?(H.backgroundRepeat="no-repeat",H.backgroundSize=`${Q}px ${ne}px`,H.backgroundPosition=`${f.value.x-Q/2}px ${f.value.y-ne/2}px`,H.opacity=h.value?t.opacity:0):(H.backgroundRepeat=t.repeat?"repeat":"no-repeat",H.backgroundSize=d.value.map(()=>`${Q}px ${ne}px`).join(", "),H.backgroundPosition=t.offset?`${Xe(t.offset[0])} ${Xe(t.offset[1])}`:"0 0")}return H});return Le(()=>[t.content,t.image,t.width,t.height,t.rotate,t.gap,t.offset,t.font,t.opacity,t.zIndex,t.cross,t.repeat,t.inheritColor],G,{deep:!0}),We(()=>{G();const H=l.value;H&&(typeof ResizeObserver<"u"?(L=new ResizeObserver(()=>G()),L.observe(H)):typeof window<"u"&&(U=()=>G(),window.addEventListener("resize",U)))}),at(()=>{B=!0,L==null||L.disconnect(),U&&typeof window<"u"&&window.removeEventListener("resize",U)}),n({redraw:G}),(H,Q)=>(i(),c("div",{ref_key:"containerRef",ref:l,class:g([o(e).b(),o(e).is("moveable",t.moveable)]),onPointermove:x,onPointerleave:C},[y(H.$slots,"default"),H.$slots.content?(i(),c("span",{key:0,ref_key:"contentRef",ref:r,class:g(o(e).e("content")),"aria-hidden":"true"},[y(H.$slots,"content")],2)):S("",!0),u("div",{class:g(o(e).e("overlay")),style:Fe(ae.value),"aria-hidden":"true"},null,6)],34))}}),fn=Ae(Us,"KkWatermark"),Na=Symbol("kk-layout"),Ha=Symbol("kk-row"),Ws=K({name:"KkLayout",inheritAttrs:!1,__name:"Layout",props:{direction:{},hasSider:{type:Boolean},fixed:{type:Boolean,default:!1},height:{},gap:{default:0},bordered:{type:Boolean,default:!1}},setup(a){const n=a,t=bt(),e=Re("layout"),s=_(!1),l=_(!1),r=k(()=>n.hasSider||!!t.sider||l.value),d=k(()=>n.direction??(r.value?"horizontal":"vertical"));function p(B){s.value=B??!s.value}const f=k(()=>({collapsed:s.value,toggle:p})),h=k(()=>!!(t.header||t.sider||t.content||t.footer));ht(Na,{collapsed:s,hasSider:l,toggle:p});const x=k(()=>[e.b(),e.m(d.value),e.is("fixed",n.fixed),e.is("bordered",n.bordered),e.is("has-sider",r.value)]),C=k(()=>{const B={display:"flex",flexDirection:d.value==="horizontal"?"row":"column",gap:Xe(n.gap)??void 0};return n.fixed&&(B.height="100vh"),n.height!=null&&(B.height=Xe(n.height)),B});return(B,L)=>(i(),c("div",Ie({class:x.value,style:C.value},B.$attrs),[h.value?(i(),c(D,{key:0},[B.$slots.header?(i(),c("div",{key:0,class:g([o(e).e("region"),o(e).em("region","header")])},[y(B.$slots,"header",Jt(Qt(f.value)))],2)):S("",!0),u("div",{class:g(o(e).e("main"))},[B.$slots.sider?(i(),c("div",{key:0,class:g([o(e).e("region"),o(e).em("region","sider")])},[y(B.$slots,"sider",Jt(Qt(f.value)))],2)):S("",!0),B.$slots.content?(i(),c("div",{key:1,class:g([o(e).e("region"),o(e).em("region","content")])},[y(B.$slots,"content")],2)):S("",!0),y(B.$slots,"default")],2),B.$slots.footer?(i(),c("div",{key:1,class:g([o(e).e("region"),o(e).em("region","footer")])},[y(B.$slots,"footer")],2)):S("",!0)],64)):y(B.$slots,"default",{},void 0,void 0,1)],16))}}),qs=K({name:"KkLayoutHeader",inheritAttrs:!1,__name:"LayoutHeader",props:{height:{default:60},fixed:{type:Boolean,default:!1},bordered:{type:Boolean,default:!0}},setup(a){const n=a,t=Re("layout-header"),e=k(()=>[t.b(),t.is("fixed",n.fixed),t.is("bordered",n.bordered)]),s=k(()=>({height:Xe(n.height)}));return(l,r)=>(i(),c("header",Ie({class:e.value,style:s.value},l.$attrs),[l.$slots.left?(i(),c("div",{key:0,class:g(o(t).e("left"))},[y(l.$slots,"left")],2)):S("",!0),u("div",{class:g(o(t).e("center"))},[y(l.$slots,"default")],2),l.$slots.right?(i(),c("div",{key:1,class:g(o(t).e("right"))},[y(l.$slots,"right")],2)):S("",!0)],16))}}),Gs=["aria-label"],Ys=K({name:"KkLayoutSider",inheritAttrs:!1,__name:"LayoutSider",props:{width:{default:220},collapsedWidth:{default:64},collapsed:{type:Boolean},collapsible:{type:Boolean,default:!1},trigger:{type:[Boolean,String],default:!0},position:{default:"left"},bordered:{type:Boolean,default:!0},reverseArrow:{type:Boolean,default:!1}},emits:["update:collapsed","collapse"],setup(a,{emit:n}){const t=a,e=n,s=Re("layout-sider"),{t:l}=et(),r=Qe(Na,null),d=_(t.collapsed??(r==null?void 0:r.collapsed.value)??!1),p=r?r.collapsed:d,f=io(),h=k(()=>{var E;return((E=f==null?void 0:f.vnode.props)==null?void 0:E.collapsed)!==void 0}),x=k(()=>p.value);function C(E){const j=typeof E=="boolean"?E:!x.value;h.value||(p.value=j),e("update:collapsed",j),e("collapse",j)}Le(()=>t.collapsed,E=>{E!==void 0&&(p.value=E)}),r&&(r.hasSider.value=!0);const B=k(()=>[s.b(),s.is("collapsed",x.value),s.is("bordered",t.bordered),s.m(t.position)]),L=k(()=>({width:Xe(x.value?t.collapsedWidth:t.width),order:t.position==="right"?2:0})),U=k(()=>typeof t.trigger=="string"?t.trigger:"trigger"),Z=k(()=>t.collapsible&&t.trigger!==!1),M=k(()=>({collapsed:x.value,toggle:C})),O=k(()=>x.value!==!t.reverseArrow);return(E,j)=>(i(),c("aside",Ie({class:B.value,style:L.value},E.$attrs),[E.$slots.logo?(i(),c("div",{key:0,class:g(o(s).e("logo"))},[y(E.$slots,"logo",Jt(Qt(M.value)))],2)):S("",!0),u("div",{class:g(o(s).e("body"))},[y(E.$slots,"default",Jt(Qt(M.value)))],2),Z.value?(i(),c("div",{key:1,class:g(o(s).e("trigger")),role:"button",tabindex:"0","aria-label":x.value?o(l)("common.expand"):o(l)("common.collapse"),onClick:j[0]||(j[0]=I=>C()),onKeydown:[j[1]||(j[1]=Bt(nt(I=>C(),["prevent"]),["enter"])),j[2]||(j[2]=Bt(nt(I=>C(),["prevent"]),["space"]))]},[y(E.$slots,U.value,Jt(Qt(M.value)),()=>[(i(),c("svg",{class:g(["kk-layout-sider__arrow",{"is-reversed":O.value}]),viewBox:"0 0 16 16",width:"16",height:"16","aria-hidden":"true"},[...j[3]||(j[3]=[u("path",{d:"M10 3L5 8l5 5",fill:"none",stroke:"currentColor","stroke-width":"1.6","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])],2))])],42,Gs)):S("",!0)],16))}}),Xs=K({name:"KkLayoutContent",inheritAttrs:!1,__name:"LayoutContent",props:{padding:{default:"medium"},scrollable:{type:Boolean,default:!0}},setup(a){const n=a,t=Re("layout-content"),e={none:"0",small:"var(--kk-space-3)",medium:"var(--kk-space-5)",large:"var(--kk-space-6)"},s=k(()=>[t.b(),t.is("scrollable",n.scrollable)]),l=k(()=>{const r=n.padding;return{padding:(typeof r=="string"&&e[r]?e[r]:Xe(r))??e.medium}});return(r,d)=>(i(),c("main",Ie({class:s.value,style:l.value},r.$attrs),[y(r.$slots,"default")],16))}}),Zs=K({name:"KkLayoutFooter",inheritAttrs:!1,__name:"LayoutFooter",props:{height:{default:56},bordered:{type:Boolean,default:!0}},setup(a){const n=a,t=Re("layout-footer"),e=k(()=>[t.b(),t.is("bordered",n.bordered)]),s=k(()=>({height:Xe(n.height)}));return(l,r)=>(i(),c("footer",Ie({class:e.value,style:s.value},l.$attrs),[y(l.$slots,"default")],16))}}),Js=K({name:"KkRow",inheritAttrs:!1,__name:"Row",props:{gutter:{},justify:{default:"start"},align:{default:"stretch"},wrap:{type:Boolean,default:!0},tag:{default:"div"}},setup(a){const n=a,t=Re("row"),e={start:"flex-start",center:"center",end:"flex-end","space-between":"space-between","space-around":"space-around","space-evenly":"space-evenly"},s={start:"flex-start",center:"center",end:"flex-end",stretch:"stretch"};function l(f){if(f==null)return 0;if(typeof f=="number")return f;const h=Number.parseFloat(f);return Number.isNaN(h)?0:h}const r=k(()=>Array.isArray(n.gutter)?l(n.gutter[0]):l(n.gutter)),d=k(()=>Array.isArray(n.gutter)?l(n.gutter[1]):l(n.gutter));ht(Ha,{gutterX:r});const p=k(()=>{const f={display:"flex",flexWrap:n.wrap?"wrap":"nowrap",justifyContent:e[n.justify],alignItems:s[n.align]};return r.value&&(f.marginLeft=`-${r.value/2}px`,f.marginRight=`-${r.value/2}px`),d.value&&(f.rowGap=`${d.value}px`),f});return(f,h)=>(i(),N(st(a.tag),Ie({class:o(t).b(),style:p.value},f.$attrs),{default:v(()=>[y(f.$slots,"default")]),_:3},16,["class","style"]))}}),Qs=K({name:"KkCol",inheritAttrs:!1,__name:"Col",props:{span:{},offset:{},push:{},pull:{},xs:{},sm:{},md:{},lg:{},xl:{},tag:{default:"div"}},setup(a){const n=a,t=Re("col"),e=Qe(Ha,null),s=["xs","sm","md","lg","xl"];function l(f,h){if(typeof h=="number")return[t.m(`${f}-span-${h}`)];const x=[];return h.span!=null&&x.push(t.m(`${f}-span-${h.span}`)),h.offset!=null&&x.push(t.m(`${f}-offset-${h.offset}`)),h.push!=null&&x.push(t.m(`${f}-push-${h.push}`)),h.pull!=null&&x.push(t.m(`${f}-pull-${h.pull}`)),x}const r=k(()=>s.some(f=>n[f]!=null)),d=k(()=>{const f=[t.b()];return n.span!=null&&f.push(t.m(`span-${n.span}`)),n.offset!=null&&f.push(t.m(`offset-${n.offset}`)),n.push!=null&&f.push(t.m(`push-${n.push}`)),n.pull!=null&&f.push(t.m(`pull-${n.pull}`)),n.span==null&&!r.value&&f.push(t.m("auto")),s.forEach(h=>{const x=n[h];x!=null&&f.push(...l(h,x))}),f}),p=k(()=>{const f={},h=(e==null?void 0:e.gutterX.value)??0;return h&&(f.paddingLeft=`${h/2}px`,f.paddingRight=`${h/2}px`),f});return(f,h)=>(i(),N(st(a.tag),Ie({class:d.value,style:p.value},f.$attrs),{default:v(()=>[y(f.$slots,"default")]),_:3},16,["class","style"]))}}),wt=Ae(Ws,"KkLayout"),Bn=Ae(qs,"KkLayoutHeader"),nn=Ae(Ys,"KkLayoutSider"),an=Ae(Xs,"KkLayoutContent"),aa=Ae(Zs,"KkLayoutFooter"),Un=Ae(Js,"KkRow"),Tt=Ae(Qs,"KkCol"),ei="data-kk-theme",Ua="kk-theme",Wa=["light","dark","soft","cyber"],oa=_("light"),En=oa,ti=()=>typeof document<"u";function qa(){return oa.value}function gt(a){oa.value=a,ti()&&document.documentElement.setAttribute(ei,a);try{localStorage.setItem(Ua,a)}catch{}}function ni(){var e;let a=null;try{a=localStorage.getItem(Ua)}catch{}if(a)return gt(a),a;const t=typeof window<"u"&&((e=window.matchMedia)==null?void 0:e.call(window,"(prefers-color-scheme: dark)").matches)?"dark":"light";return gt(t),t}function ai(a){return Wa.includes(a)}function la(a=qa()){return a==="dark"||a==="cyber"}const oi=Wa;function Mn(){const a=k(()=>En.value),n=k(()=>la(En.value));function t(e,s){const l=En.value===(e??"light")?s??"dark":e??"light";gt(l)}return{theme:a,themes:oi,isDark:n,setTheme:gt,toggleTheme:t,isBuiltInTheme:ai}}const li=[me,Ge,ut,Lt,zt,tt,Ye,zn,Ft,Wt,un,ta,mt,Ht,ot,cn,Ln,dn,pn,vn,lt,fn,wt,Bn,nn,an,aa,Un,Tt],si={install(a){li.forEach(n=>a.use(n))}},ii={class:"kk-visual","aria-hidden":"true"},ri={class:"kk-visual__stage"},ui={class:"kk-visual__svg",viewBox:"0 0 520 420",role:"img"},ci={class:"kk-visual__particles"},di=["cx","cy","r"],pi={class:"kk-visual__computer"},vi={"clip-path":"url(#kk-visual-screen-clip)"},fi={class:"kk-visual__code"},mi=["y","width"],ki={class:"kk-visual__keyboard"},gi=["x","y","width"],bi=3,Zt=8,hi=K({__name:"HeroVisual",setup(a){const n=[{id:"line-1",y:204,width:92,tone:"primary"},{id:"line-2",y:217,width:58,tone:"muted"},{id:"line-3",y:230,width:116,tone:"soft"},{id:"line-4",y:243,width:74,tone:"primary"},{id:"line-5",y:256,width:104,tone:"muted"},{id:"line-6",y:269,width:52,tone:"accent"},{id:"line-7",y:282,width:88,tone:"soft"}],t=Array.from({length:bi*Zt},(s,l)=>{const r=Math.floor(l/Zt),d=l%Zt,p=272-r*9,f=176+r*18,h=5,x=(f-h*(Zt-1))/Zt;return{id:`key-${r}-${d}`,x:Number((p+d*(x+h)).toFixed(2)),y:305+r*10,width:Number(x.toFixed(2))}}),e=[{id:"p1",cx:118,cy:92,r:4,delay:0},{id:"p2",cx:448,cy:128,r:5,delay:1.4},{id:"p3",cx:84,cy:268,r:3,delay:2.6},{id:"p4",cx:466,cy:288,r:4,delay:3.8},{id:"p5",cx:396,cy:84,r:3,delay:5}];return(s,l)=>(i(),c("div",ii,[u("div",ri,[(i(),c("svg",ui,[l[10]||(l[10]=ma('<defs><clipPath id="kk-visual-screen-clip"><rect x="292" y="178" width="148" height="112" rx="6"></rect></clipPath><clipPath id="kk-visual-visor-clip"><rect x="176" y="142" width="50" height="28" rx="12"></rect></clipPath><linearGradient id="kk-visual-visor-gradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0" class="kk-visual__visor-from"></stop><stop offset="1" class="kk-visual__visor-to"></stop></linearGradient><radialGradient id="kk-visual-glow-gradient" cx="0.5" cy="0.5" r="0.5"><stop offset="0" class="kk-visual__glow-from"></stop><stop offset="1" class="kk-visual__glow-to"></stop></radialGradient></defs><g class="kk-visual__backdrop"><ellipse class="kk-visual__glow" cx="330" cy="248" rx="210" ry="150" fill="url(#kk-visual-glow-gradient)"></ellipse><circle class="kk-visual__ring kk-visual__ring--outer" cx="330" cy="246" r="176"></circle><circle class="kk-visual__ring kk-visual__ring--inner" cx="330" cy="246" r="134"></circle></g>',2)),u("g",ci,[(i(),c(D,null,pe(e,r=>u("circle",{key:r.id,class:"kk-visual__particle",cx:r.cx,cy:r.cy,r:r.r,style:Fe({animationDelay:`${r.delay}s`})},null,12,di)),64))]),l[11]||(l[11]=u("g",{class:"kk-visual__desk"},[u("ellipse",{class:"kk-visual__desk-glow",cx:"300",cy:"352",rx:"196",ry:"18"}),u("rect",{class:"kk-visual__desk-top",x:"52",y:"336",width:"416",height:"13",rx:"6.5"})],-1)),u("g",pi,[l[7]||(l[7]=u("ellipse",{class:"kk-visual__screen-aura",cx:"366",cy:"238",rx:"118",ry:"96"},null,-1)),l[8]||(l[8]=u("rect",{class:"kk-visual__lid",x:"282",y:"168",width:"168",height:"136",rx:"10"},null,-1)),l[9]||(l[9]=u("rect",{class:"kk-visual__screen",x:"292",y:"178",width:"148",height:"112",rx:"6"},null,-1)),u("g",vi,[u("g",fi,[l[0]||(l[0]=u("rect",{class:"kk-visual__code-bar",x:"292",y:"186",width:"148",height:"9"},null,-1)),l[1]||(l[1]=u("circle",{class:"kk-visual__code-dot",cx:"300",cy:"190.5",r:"2.2"},null,-1)),l[2]||(l[2]=u("circle",{class:"kk-visual__code-dot",cx:"308",cy:"190.5",r:"2.2"},null,-1)),l[3]||(l[3]=u("circle",{class:"kk-visual__code-dot",cx:"316",cy:"190.5",r:"2.2"},null,-1)),(i(),c(D,null,pe(n,r=>u("rect",{key:r.id,class:g(["kk-visual__code-line",`kk-visual__code-line--${r.tone}`]),x:"302",y:r.y,width:r.width,height:"5",rx:"2.5"},null,10,mi)),64)),l[4]||(l[4]=u("rect",{class:"kk-visual__caret",x:"302",y:"294",width:"10",height:"6",rx:"2"},null,-1))]),l[5]||(l[5]=u("rect",{class:"kk-visual__scanline",x:"292",y:"178",width:"148",height:"16"},null,-1))]),u("g",ki,[l[6]||(l[6]=u("path",{class:"kk-visual__keyboard-base",d:"M268 300H452L472 336H248Z"},null,-1)),(i(!0),c(D,null,pe(o(t),r=>(i(),c("rect",{key:r.id,class:"kk-visual__key",x:r.x,y:r.y,width:r.width,height:"6.8",rx:"2"},null,8,gi))),128))])]),l[12]||(l[12]=ma('<g class="kk-visual__robot"><g class="kk-visual__float"><ellipse class="kk-visual__robot-shadow" cx="196" cy="344" rx="70" ry="10"></ellipse><path class="kk-visual__arm kk-visual__arm--back" d="M226 236C246 250 260 274 272 296"></path><rect class="kk-visual__neck" x="186" y="190" width="18" height="20" rx="7"></rect><rect class="kk-visual__torso" x="152" y="206" width="78" height="106" rx="26"></rect><circle class="kk-visual__core-ring" cx="190" cy="248" r="19"></circle><circle class="kk-visual__core" cx="190" cy="248" r="12"></circle><circle class="kk-visual__core-dot" cx="190" cy="248" r="5"></circle><g class="kk-visual__head"><path class="kk-visual__antenna" d="M168 128C166 112 172 102 184 98"></path><circle class="kk-visual__antenna-tip" cx="185" cy="97" r="5"></circle><circle class="kk-visual__antenna-wave" cx="185" cy="97" r="11"></circle><rect class="kk-visual__head-box" x="150" y="126" width="86" height="66" rx="20"></rect><rect class="kk-visual__visor" x="176" y="142" width="50" height="28" rx="12" fill="url(#kk-visual-visor-gradient)"></rect><g clip-path="url(#kk-visual-visor-clip)"><rect class="kk-visual__visor-scan" x="176" y="142" width="50" height="7"></rect></g><path class="kk-visual__vent" d="M160 150h10M160 160h10M160 170h10"></path><circle class="kk-visual__ear" cx="152" cy="162" r="8"></circle></g><circle class="kk-visual__shoulder" cx="232" cy="224" r="14"></circle><path class="kk-visual__arm" d="M236 230C264 240 280 264 296 288"></path><g class="kk-visual__hand"><rect class="kk-visual__hand-box" x="290" y="282" width="20" height="14" rx="6"></rect><path class="kk-visual__finger" d="M296 296v6M304 296v6"></path></g></g></g>',1))]))])]))}}),yi=K({__name:"PointerField",props:{maxCount:{default:110},linkDistance:{default:116},pointerRadius:{default:190}},setup(a){const n=a,t={r:91,g:79,b:233},e={r:199,g:204,b:218},s=[.05,.1,.16,.24],l=[.1,.2,.32,.5],r=[.22,.42,.68],d=_(null);let p=null,f=0,h=0,x=0,C,B=null,L=0,U=0,Z=!1,M=!1;const O=[],E={x:-9999,y:-9999,active:!1},j={...t},I={...e},G=[[],[],[]],ae=[[],[],[],[]],H=[[],[],[],[]];function Q(W){return`rgb(${W.r}, ${W.g}, ${W.b})`}function ne(W,he){const T=W.trim();if(T==="")return he;const J=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(T);if(J){const Se=J[1].length===3?J[1].split("").map(ee=>ee+ee).join(""):J[1];return{r:Number.parseInt(Se.slice(0,2),16),g:Number.parseInt(Se.slice(2,4),16),b:Number.parseInt(Se.slice(4,6),16)}}const te=/rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i.exec(T);return te?{r:Math.round(Number(te[1])),g:Math.round(Number(te[2])),b:Math.round(Number(te[3]))}:he}function le(){const W=getComputedStyle(document.documentElement);Object.assign(j,ne(W.getPropertyValue("--kk-color-primary"),t)),Object.assign(I,ne(W.getPropertyValue("--kk-border-color-hover"),e))}function xe(){O.length=0;const W=Math.max(20,Math.min(n.maxCount,Math.round(L*U/26e3)));for(let he=0;he<W;he+=1)O.push({x:Math.random()*L,y:Math.random()*U,driftX:(Math.random()-.5)*.34,driftY:(Math.random()-.5)*.34,impulseX:0,impulseY:0,tier:he%3})}function X(){const W=d.value;if(!W)return;const he=Math.min(window.devicePixelRatio||1,2);L=window.innerWidth,U=window.innerHeight,W.width=Math.round(L*he),W.height=Math.round(U*he),W.style.width=`${L}px`,W.style.height=`${U}px`,p=W.getContext("2d"),p==null||p.setTransform(he,0,0,he,0,0),xe()}function ce(W){if(!Z){if(E.active){const he=E.x-W.x,T=E.y-W.y,J=Math.hypot(he,T);if(J<n.pointerRadius&&J>.001){const te=(1-J/n.pointerRadius)*.42;W.impulseX+=he/J*te,W.impulseY+=T/J*te}}W.impulseX*=.94,W.impulseY*=.94,W.x+=W.driftX+Math.max(-1.4,Math.min(1.4,W.impulseX)),W.y+=W.driftY+Math.max(-1.4,Math.min(1.4,W.impulseY))}W.x<-40&&(W.x=L+40),W.x>L+40&&(W.x=-40),W.y<-40&&(W.y=U+40),W.y>U+40&&(W.y=-40)}function $e(){for(let W=0;W<ae.length;W+=1)ae[W].length=0,H[W].length=0;for(let W=0;W<G.length;W+=1)G[W].length=0}function Ee(W,he,T,J){W.strokeStyle=T,W.lineWidth=1;for(let te=0;te<he.length;te+=1){const Se=he[te];if(Se.length!==0){W.globalAlpha=J[te],W.beginPath();for(let ee=0;ee<Se.length;ee+=4)W.moveTo(Se[ee],Se[ee+1]),W.lineTo(Se[ee+2],Se[ee+3]);W.stroke()}}}function Ve(W){W.fillStyle=Q(j);for(let he=0;he<G.length;he+=1){const T=G[he];if(T.length===0)continue;W.globalAlpha=r[he];const J=.9+he*.55;W.beginPath();for(let te=0;te<T.length;te+=2)W.moveTo(T[te]+J,T[te+1]),W.arc(T[te],T[te+1],J,0,Math.PI*2);W.fill()}}function ke(){const W=p;if(!W)return;W.clearRect(0,0,L,U),$e();const he=n.linkDistance,T=he*he;for(let J=0;J<O.length;J+=1){const te=O[J];ce(te);for(let Se=J+1;Se<O.length;Se+=1){const ee=O[Se],ye=te.x-ee.x,Ce=te.y-ee.y,qe=ye*ye+Ce*Ce;if(qe>T)continue;const He=(1-Math.sqrt(qe)/he)*.24,je=Math.min(ae.length-1,Math.floor(He/.06));ae[je].push(te.x,te.y,ee.x,ee.y)}if(E.active){const Se=te.x-E.x,ee=te.y-E.y,ye=Se*Se+ee*ee,Ce=n.pointerRadius;if(ye<Ce*Ce){const qe=(1-Math.sqrt(ye)/Ce)*.5,He=Math.min(H.length-1,Math.floor(qe/.125));H[He].push(te.x,te.y,E.x,E.y)}}G[te.tier].push(te.x,te.y)}Ee(W,ae,Q(I),s),Ee(W,H,Q(j),l),Ve(W),W.globalAlpha=1}function ve(){h||(h=requestAnimationFrame(()=>{h=0,ke()}))}function Ke(){ke(),f=requestAnimationFrame(Ke)}function Y(){M||Z||(M=!0,f=requestAnimationFrame(Ke))}function se(){f&&cancelAnimationFrame(f),f=0,M=!1}function ze(){C&&clearTimeout(C),C=setTimeout(()=>{E.active=!1,Z&&ve()},2400)}function _e(W){E.x=W.clientX,E.y=W.clientY,E.active=!0,ze(),Z&&ve()}function be(){E.active=!1,Z&&ve()}function Be(){document.hidden?se():Y()}function De(){x&&cancelAnimationFrame(x),x=requestAnimationFrame(()=>{x=0,X(),Z&&ke()})}return We(()=>{Z=window.matchMedia("(prefers-reduced-motion: reduce)").matches,X(),le(),ke(),window.addEventListener("pointermove",_e,{passive:!0}),window.addEventListener("pointerleave",be,{passive:!0}),window.addEventListener("resize",De,{passive:!0}),document.addEventListener("visibilitychange",Be),B=new MutationObserver(()=>{le(),Z&&ve()}),B.observe(document.documentElement,{attributes:!0,attributeFilter:["data-kk-theme","class","style"]}),Y()}),at(()=>{se(),h&&cancelAnimationFrame(h),h=0,x&&cancelAnimationFrame(x),x=0,C&&clearTimeout(C),window.removeEventListener("pointermove",_e),window.removeEventListener("pointerleave",be),window.removeEventListener("resize",De),document.removeEventListener("visibilitychange",Be),B==null||B.disconnect(),B=null}),(W,he)=>(i(),c("canvas",{ref_key:"canvasRef",ref:d,class:"kk-pointer-field","aria-hidden":"true"},null,512))}}),_i={class:"kk-hero"},xi={class:"kk-hero__content"},wi={class:"kk-hero__badge"},$i={class:"kk-hero__title"},Si={class:"kk-hero__desc"},Ki={class:"kk-hero__actions"},Ci=["href"],Ti=["href"],zi={class:"kk-install"},Pi={class:"kk-hero__visual"},Li={class:"kk-section"},Bi={class:"kk-section__eyebrow"},Mi={class:"kk-section__title"},Vi={class:"kk-section__desc"},Ii={class:"kk-grid kk-grid--3"},Oi={class:"kk-feature__icon"},Ei={class:"kk-feature__title"},Ai={class:"kk-feature__desc"},Ri={class:"kk-section"},ji={class:"kk-section__eyebrow"},Di={class:"kk-section__title"},Fi={class:"kk-section__desc"},Ni={class:"kk-grid kk-grid--auto"},Hi=["href"],Ui={class:"kk-comp-card__name"},Wi={class:"kk-comp-card__desc"},qi={class:"kk-comp-card__count"},An="pnpm add kk-ui",Gi=K({__name:"Home",setup(a){const{t:n}=et(),t=[{icon:"lucide:palette",key:"theme"},{icon:"lucide:code-2",key:"ts"},{icon:"lucide:zap",key:"tree"},{icon:"lucide:sparkles",key:"design"},{icon:"lucide:shield-check",key:"a11y"},{icon:"lucide:book-open",key:"doc"}],e=[{key:"general",desc:"Button / Icon",count:2,link:"/components/button"},{key:"layout",desc:"Layout / Container / Space / Divider / Card",count:5,link:"/components/layout"},{key:"nav",desc:"Tabs",count:1,link:"/components/tabs"},{key:"data",desc:"Tag / Table / Pagination / Watermark",count:4,link:"/components/table"},{key:"input",desc:"Input / Select / Cascader / Upload / Form",count:6,link:"/components/input"},{key:"feedback",desc:"Modal / Drawer / Skeleton",count:3,link:"/components/modal"}].map(L=>L),s=k(()=>n("docs.home.badge")),l=k(()=>n("docs.home.heroTitlePrefix")),r=k(()=>n("docs.home.heroTitleAccent")),d=k(()=>n("docs.home.heroTitleSuffix"));function p(L){window.dispatchEvent(new CustomEvent("kk-toast",{detail:L}))}const f=_(null);let h=0;function x(L){if(h)return;const{clientX:U,clientY:Z}=L;h=requestAnimationFrame(()=>{h=0;const M=f.value;if(!M)return;const O=M.getBoundingClientRect();M.style.setProperty("--kk-pointer-x",`${(U-O.left).toFixed(1)}px`),M.style.setProperty("--kk-pointer-y",`${(Z-O.top).toFixed(1)}px`),M.style.setProperty("--kk-pointer-rx",(U/window.innerWidth-.5).toFixed(3)),M.style.setProperty("--kk-pointer-ry",(Z/window.innerHeight-.5).toFixed(3))})}function C(){h=0;const L=f.value;L&&(L.style.setProperty("--kk-pointer-rx","0"),L.style.setProperty("--kk-pointer-ry","0"))}We(()=>{var L,U;(L=f.value)==null||L.addEventListener("pointermove",x,{passive:!0}),(U=f.value)==null||U.addEventListener("pointerleave",C)}),at(()=>{var L,U;h&&cancelAnimationFrame(h),(L=f.value)==null||L.removeEventListener("pointermove",x),(U=f.value)==null||U.removeEventListener("pointerleave",C)});async function B(){try{if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(An);else{const L=document.createElement("textarea");L.value=An,L.style.position="fixed",L.style.opacity="0",document.body.appendChild(L),L.select(),document.execCommand("copy"),document.body.removeChild(L)}p(n("docs.home.copied"))}catch{p(n("docs.home.copyFail"))}}return(L,U)=>(i(),c("div",{ref_key:"homeRef",ref:f,class:"kk-home"},[m(yi),u("section",_i,[u("div",xi,[u("div",wi,[U[0]||(U[0]=u("span",null,"✨",-1)),$(" "+z(s.value),1)]),u("h1",$i,[$(z(l.value),1),u("span",null,z(r.value),1),$(z(d.value),1)]),u("p",Si,z(o(n)("docs.home.heroDesc")),1),u("div",Ki,[u("a",{href:o(Pt)("/guide/getting-started")},[m(o(me),{type:"primary",size:"large"},{icon:v(()=>[m(o(Ge),{name:"lucide:rocket",size:"16"})]),default:v(()=>[$(" "+z(o(n)("docs.home.start")),1)]),_:1})],8,Ci),u("a",{href:o(Pt)("/components/")},[m(o(me),{size:"large"},{default:v(()=>[$(z(o(n)("docs.home.browse")),1)]),_:1})],8,Ti)]),u("div",zi,[u("span",null,[U[1]||(U[1]=u("b",null,"$",-1)),$(" "+z(An))]),u("button",{class:"kk-install__copy",type:"button",onClick:B},z(o(n)("docs.home.copy")),1)])]),u("div",Pi,[m(hi)])]),u("section",Li,[u("div",Bi,z(o(n)("docs.home.featuresEyebrow")),1),u("h2",Mi,z(o(n)("docs.home.featuresTitle")),1),u("p",Vi,z(o(n)("docs.home.featuresDesc")),1),u("div",Ii,[(i(),c(D,null,pe(t,Z=>u("div",{key:Z.key,class:"kk-feature"},[u("div",Oi,[m(o(Ge),{name:Z.icon,size:"20"},null,8,["name"])]),u("div",Ei,z(o(n)(`docs.home.features.${Z.key}.title`)),1),u("div",Ai,z(o(n)(`docs.home.features.${Z.key}.desc`)),1)])),64))])]),u("section",Ri,[u("div",ji,z(o(n)("docs.home.overviewEyebrow")),1),u("h2",Di,z(o(n)("docs.home.overviewTitle")),1),u("p",Fi,z(o(n)("docs.home.overviewDesc")),1),u("div",Ni,[(i(!0),c(D,null,pe(o(e),Z=>(i(),c("a",{key:Z.key,class:"kk-comp-card",href:o(Pt)(Z.link)},[u("div",Ui,z(o(n)(`docs.home.groups.${Z.key}`)),1),u("div",Wi,z(Z.desc),1),u("div",qi,z(o(n)("docs.home.count",{count:Z.count})),1)],8,Hi))),128))])])],512))}}),Yi=K({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(a){return(n,t)=>(i(),c("span",{class:g(["VPBadge",a.type])},[y(n.$slots,"default",{},()=>[$(z(a.text),1)])],2))}}),Xi={key:0,class:"VPBackdrop"},Zi=K({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(a){return(n,t)=>(i(),N(ln,{name:"fade"},{default:v(()=>[a.show?(i(),c("div",Xi)):S("",!0)]),_:1}))}}),Ji=re(Zi,[["__scopeId","data-v-111f5ca9"]]),Pe=Xn;function Qi(a,n){let t,e=!1;return()=>{t&&clearTimeout(t),e?t=setTimeout(a,n):(a(),(e=!0)&&setTimeout(()=>e=!1,n))}}function Wn(a){return a.startsWith("/")?a:`/${a}`}function sa(a){const{pathname:n,search:t,hash:e,protocol:s}=new URL(a,"http://a.com");if(ro(a)||a.startsWith("#")||!s.startsWith("http")||!uo(n))return a;const{site:l}=Pe(),r=n.endsWith("/")||n.endsWith(".html")?a:a.replace(/(?:(^\.+)\/)?.*$/,`$1${n.replace(/(\.md)?$/,l.value.cleanUrls?"":".html")}${t}${e}`);return Pt(r)}function mn({correspondingLink:a=!1}={}){const{site:n,localeIndex:t,page:e,theme:s,hash:l}=Pe(),r=k(()=>{var p,f;return{label:(p=n.value.locales[t.value])==null?void 0:p.label,link:((f=n.value.locales[t.value])==null?void 0:f.link)||(t.value==="root"?"/":`/${t.value}/`)}});return{localeLinks:k(()=>Object.entries(n.value.locales).flatMap(([p,f])=>r.value.label===f.label?[]:{text:f.label,link:er(f.link||(p==="root"?"/":`/${p}/`),s.value.i18nRouting!==!1&&a,e.value.relativePath.slice(r.value.link.length-1),!n.value.cleanUrls)+l.value})),currentLang:r}}function er(a,n,t,e){return n?a.replace(/\/$/,"")+Wn(t.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,e?".html":"")):a}const tr={class:"NotFound"},nr={class:"code"},ar={class:"title"},or={class:"quote"},lr={class:"action"},sr=["href","aria-label"],ir=K({__name:"NotFound",setup(a){const{theme:n}=Pe(),{currentLang:t}=mn();return(e,s)=>{var l,r,d,p,f;return i(),c("div",tr,[u("p",nr,z(((l=o(n).notFound)==null?void 0:l.code)??"404"),1),u("h1",ar,z(((r=o(n).notFound)==null?void 0:r.title)??"PAGE NOT FOUND"),1),s[0]||(s[0]=u("div",{class:"divider"},null,-1)),u("blockquote",or,z(((d=o(n).notFound)==null?void 0:d.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),u("div",lr,[u("a",{class:"link",href:o(Pt)(o(t).link),"aria-label":((p=o(n).notFound)==null?void 0:p.linkLabel)??"go to home"},z(((f=o(n).notFound)==null?void 0:f.linkText)??"Take me home"),9,sr)])])}}}),rr=re(ir,[["__scopeId","data-v-750bc60b"]]);function Ga(a,n){if(Array.isArray(a))return xn(a);if(a==null)return[];n=Wn(n);const t=Object.keys(a).sort((s,l)=>l.split("/").length-s.split("/").length).find(s=>n.startsWith(Wn(s))),e=t?a[t]:[];return Array.isArray(e)?xn(e):xn(e.items,e.base)}function ur(a){const n=[];let t=0;for(const e in a){const s=a[e];if(s.items){t=n.push(s);continue}n[t]||n.push({items:[]}),n[t].items.push(s)}return n}function cr(a){const n=[];function t(e){for(const s of e)s.text&&s.link&&n.push({text:s.text,link:s.link,docFooterText:s.docFooterText}),s.items&&t(s.items)}return t(a),n}function qn(a,n){return Array.isArray(n)?n.some(t=>qn(a,t)):Mt(a,n.link)?!0:n.items?qn(a,n.items):!1}function xn(a,n){return[...a].map(t=>{const e={...t},s=e.base||n;return s&&e.link&&(e.link=s+e.link),e.items&&(e.items=xn(e.items,s)),e})}function yt(){const{frontmatter:a,page:n,theme:t}=Pe(),e=Dn("(min-width: 960px)"),s=_(!1),l=k(()=>{const U=t.value.sidebar,Z=n.value.relativePath;return U?Ga(U,Z):[]}),r=_(l.value);Le(l,(U,Z)=>{JSON.stringify(U)!==JSON.stringify(Z)&&(r.value=l.value)});const d=k(()=>a.value.sidebar!==!1&&r.value.length>0&&a.value.layout!=="home"),p=k(()=>f?a.value.aside==null?t.value.aside==="left":a.value.aside==="left":!1),f=k(()=>a.value.layout==="home"?!1:a.value.aside!=null?!!a.value.aside:t.value.aside!==!1),h=k(()=>d.value&&e.value),x=k(()=>d.value?ur(r.value):[]);function C(){s.value=!0}function B(){s.value=!1}function L(){s.value?B():C()}return{isOpen:s,sidebar:r,sidebarGroups:x,hasSidebar:d,hasAside:f,leftAside:p,isSidebarEnabled:h,open:C,close:B,toggle:L}}function dr(a,n){let t;rn(()=>{t=a.value?document.activeElement:void 0}),We(()=>{window.addEventListener("keyup",e)}),Zn(()=>{window.removeEventListener("keyup",e)});function e(s){s.key==="Escape"&&a.value&&(n(),t==null||t.focus())}}function pr(a){const{page:n,hash:t}=Pe(),e=_(!1),s=k(()=>a.value.collapsed!=null),l=k(()=>!!a.value.link),r=_(!1),d=()=>{r.value=Mt(n.value.relativePath,a.value.link)};Le([n,a,t],d),We(d);const p=k(()=>r.value?!0:a.value.items?qn(n.value.relativePath,a.value.items):!1),f=k(()=>!!(a.value.items&&a.value.items.length));rn(()=>{e.value=!!(s.value&&a.value.collapsed)}),Jn(()=>{(r.value||p.value)&&(e.value=!1)});function h(){s.value&&(e.value=!e.value)}return{collapsed:e,collapsible:s,isLink:l,isActiveLink:r,hasActiveLink:p,hasChildren:f,toggle:h}}function vr(){const{hasSidebar:a}=yt(),n=Dn("(min-width: 960px)"),t=Dn("(min-width: 1280px)");return{isAsideEnabled:k(()=>!t.value&&!n.value?!1:a.value?t.value:n.value)}}const fr=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,Gn=[];function Ya(a){return typeof a.outline=="object"&&!Array.isArray(a.outline)&&a.outline.label||a.outlineTitle||"On this page"}function ia(a){const n=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(t=>t.id&&t.hasChildNodes()).map(t=>{const e=Number(t.tagName[1]);return{element:t,title:mr(t),link:"#"+t.id,level:e}});return kr(n,a)}function mr(a){let n="";for(const t of a.childNodes)if(t.nodeType===1){if(fr.test(t.className))continue;n+=t.textContent}else t.nodeType===3&&(n+=t.textContent);return n.trim()}function kr(a,n){if(n===!1)return[];const t=(typeof n=="object"&&!Array.isArray(n)?n.level:n)||2,[e,s]=typeof t=="number"?[t,t]:t==="deep"?[2,6]:t;return hr(a,e,s)}function gr(a,n){const{isAsideEnabled:t}=vr(),e=Qi(l,100);let s=null;We(()=>{requestAnimationFrame(l),window.addEventListener("scroll",e)}),co(()=>{r(location.hash)}),Zn(()=>{window.removeEventListener("scroll",e)});function l(){if(!t.value)return;const d=window.scrollY,p=window.innerHeight,f=document.body.offsetHeight,h=Math.abs(d+p-f)<1,x=Gn.map(({element:B,link:L})=>({link:L,top:br(B)})).filter(({top:B})=>!Number.isNaN(B)).sort((B,L)=>B.top-L.top);if(!x.length){r(null);return}if(d<1){r(null);return}if(h){r(x[x.length-1].link);return}let C=null;for(const{link:B,top:L}of x){if(L>d+po()+4)break;C=B}r(C)}function r(d){s&&s.classList.remove("active"),d==null?s=null:s=a.value.querySelector(`a[href="${decodeURIComponent(d)}"]`);const p=s;p?(p.classList.add("active"),n.value.style.top=p.offsetTop+39+"px",n.value.style.opacity="1"):(n.value.style.top="33px",n.value.style.opacity="0")}}function br(a){let n=0;for(;a!==document.body;){if(a===null)return NaN;n+=a.offsetTop,a=a.offsetParent}return n}function hr(a,n,t){Gn.length=0;const e=[],s=[];return a.forEach(l=>{const r={...l,children:[]};let d=s[s.length-1];for(;d&&d.level>=r.level;)s.pop(),d=s[s.length-1];if(r.element.classList.contains("ignore-header")||d&&"shouldIgnore"in d){s.push({level:r.level,shouldIgnore:!0});return}r.level>t||r.level<n||(Gn.push({element:r.element,link:r.link}),d?d.children.push(r):e.push(r),s.push(r))}),e}const yr=["href","title"],_r=K({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(a){function n({target:t}){const e=t.href.split("#")[1],s=document.getElementById(decodeURIComponent(e));s==null||s.focus({preventScroll:!0})}return(t,e)=>{const s=It("VPDocOutlineItem",!0);return i(),c("ul",{class:g(["VPDocOutlineItem",a.root?"root":"nested"])},[(i(!0),c(D,null,pe(a.headers,({children:l,link:r,title:d})=>(i(),c("li",null,[u("a",{class:"outline-link",href:r,onClick:n,title:d},z(d),9,yr),l!=null&&l.length?(i(),N(s,{key:0,headers:l},null,8,["headers"])):S("",!0)]))),256))],2)}}}),Xa=re(_r,[["__scopeId","data-v-37752517"]]),xr={class:"content"},wr={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},$r=K({__name:"VPDocAsideOutline",setup(a){const{frontmatter:n,theme:t}=Pe(),e=Yn([]);Kn(()=>{e.value=ia(n.value.outline??t.value.outline)});const s=_(),l=_();return gr(s,l),(r,d)=>(i(),c("nav",{"aria-labelledby":"doc-outline-aria-label",class:g(["VPDocAsideOutline",{"has-outline":e.value.length>0}]),ref_key:"container",ref:s},[u("div",xr,[u("div",{class:"outline-marker",ref_key:"marker",ref:l},null,512),u("div",wr,z(o(Ya)(o(t))),1),m(Xa,{headers:e.value,root:!0},null,8,["headers"])])],2))}}),Sr=re($r,[["__scopeId","data-v-fd1219a0"]]),Kr={class:"VPDocAsideCarbonAds"},Cr=K({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(a){const n=()=>null;return(t,e)=>(i(),c("div",Kr,[m(o(n),{"carbon-ads":a.carbonAds},null,8,["carbon-ads"])]))}}),Tr={class:"VPDocAside"},zr=K({__name:"VPDocAside",setup(a){const{theme:n}=Pe();return(t,e)=>(i(),c("div",Tr,[y(t.$slots,"aside-top",{},void 0,!0),y(t.$slots,"aside-outline-before",{},void 0,!0),m(Sr),y(t.$slots,"aside-outline-after",{},void 0,!0),e[0]||(e[0]=u("div",{class:"spacer"},null,-1)),y(t.$slots,"aside-ads-before",{},void 0,!0),o(n).carbonAds?(i(),N(Cr,{key:0,"carbon-ads":o(n).carbonAds},null,8,["carbon-ads"])):S("",!0),y(t.$slots,"aside-ads-after",{},void 0,!0),y(t.$slots,"aside-bottom",{},void 0,!0)]))}}),Pr=re(zr,[["__scopeId","data-v-1797d636"]]);function Lr(){const{theme:a,page:n}=Pe();return k(()=>{const{text:t="Edit this page",pattern:e=""}=a.value.editLink||{};let s;return typeof e=="function"?s=e(n.value):s=e.replace(/:path/g,n.value.filePath),{url:s,text:t}})}function Br(){const{page:a,theme:n,frontmatter:t}=Pe();return k(()=>{var f,h,x,C,B,L,U,Z;const e=Ga(n.value.sidebar,a.value.relativePath),s=cr(e),l=Mr(s,M=>M.link.replace(/[?#].*$/,"")),r=l.findIndex(M=>Mt(a.value.relativePath,M.link)),d=((f=n.value.docFooter)==null?void 0:f.prev)===!1&&!t.value.prev||t.value.prev===!1,p=((h=n.value.docFooter)==null?void 0:h.next)===!1&&!t.value.next||t.value.next===!1;return{prev:d?void 0:{text:(typeof t.value.prev=="string"?t.value.prev:typeof t.value.prev=="object"?t.value.prev.text:void 0)??((x=l[r-1])==null?void 0:x.docFooterText)??((C=l[r-1])==null?void 0:C.text),link:(typeof t.value.prev=="object"?t.value.prev.link:void 0)??((B=l[r-1])==null?void 0:B.link)},next:p?void 0:{text:(typeof t.value.next=="string"?t.value.next:typeof t.value.next=="object"?t.value.next.text:void 0)??((L=l[r+1])==null?void 0:L.docFooterText)??((U=l[r+1])==null?void 0:U.text),link:(typeof t.value.next=="object"?t.value.next.link:void 0)??((Z=l[r+1])==null?void 0:Z.link)}}})}function Mr(a,n){const t=new Set;return a.filter(e=>{const s=n(e);return t.has(s)?!1:t.add(s)})}const kt=K({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(a){const n=a,t=k(()=>n.tag??(n.href?"a":"span")),e=k(()=>n.href&&La.test(n.href)||n.target==="_blank");return(s,l)=>(i(),N(st(t.value),{class:g(["VPLink",{link:a.href,"vp-external-link-icon":e.value,"no-icon":a.noIcon}]),href:a.href?o(sa)(a.href):void 0,target:a.target??(e.value?"_blank":void 0),rel:a.rel??(e.value?"noreferrer":void 0)},{default:v(()=>[y(s.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Vr={class:"VPLastUpdated"},Ir=["datetime"],Or=K({__name:"VPDocFooterLastUpdated",setup(a){const{theme:n,page:t,lang:e}=Pe(),s=k(()=>new Date(t.value.lastUpdated)),l=k(()=>s.value.toISOString()),r=_("");return We(()=>{rn(()=>{var d,p,f;r.value=new Intl.DateTimeFormat((p=(d=n.value.lastUpdated)==null?void 0:d.formatOptions)!=null&&p.forceLocale?e.value:void 0,((f=n.value.lastUpdated)==null?void 0:f.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(s.value)})}),(d,p)=>{var f;return i(),c("p",Vr,[$(z(((f=o(n).lastUpdated)==null?void 0:f.text)||o(n).lastUpdatedText||"Last updated")+": ",1),u("time",{datetime:l.value},z(r.value),9,Ir)])}}}),Er=re(Or,[["__scopeId","data-v-9e359b51"]]),Ar={key:0,class:"VPDocFooter"},Rr={key:0,class:"edit-info"},jr={key:0,class:"edit-link"},Dr={key:1,class:"last-updated"},Fr={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},Nr={class:"pager"},Hr=["innerHTML"],Ur=["innerHTML"],Wr={class:"pager"},qr=["innerHTML"],Gr=["innerHTML"],Yr=K({__name:"VPDocFooter",setup(a){const{theme:n,page:t,frontmatter:e}=Pe(),s=Lr(),l=Br(),r=k(()=>n.value.editLink&&e.value.editLink!==!1),d=k(()=>t.value.lastUpdated),p=k(()=>r.value||d.value||l.value.prev||l.value.next);return(f,h)=>{var x,C,B,L;return p.value?(i(),c("footer",Ar,[y(f.$slots,"doc-footer-before",{},void 0,!0),r.value||d.value?(i(),c("div",Rr,[r.value?(i(),c("div",jr,[m(kt,{class:"edit-link-button",href:o(s).url,"no-icon":!0},{default:v(()=>[h[0]||(h[0]=u("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),$(" "+z(o(s).text),1)]),_:1},8,["href"])])):S("",!0),d.value?(i(),c("div",Dr,[m(Er)])):S("",!0)])):S("",!0),(x=o(l).prev)!=null&&x.link||(C=o(l).next)!=null&&C.link?(i(),c("nav",Fr,[h[1]||(h[1]=u("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),u("div",Nr,[(B=o(l).prev)!=null&&B.link?(i(),N(kt,{key:0,class:"pager-link prev",href:o(l).prev.link},{default:v(()=>{var U;return[u("span",{class:"desc",innerHTML:((U=o(n).docFooter)==null?void 0:U.prev)||"Previous page"},null,8,Hr),u("span",{class:"title",innerHTML:o(l).prev.text},null,8,Ur)]}),_:1},8,["href"])):S("",!0)]),u("div",Wr,[(L=o(l).next)!=null&&L.link?(i(),N(kt,{key:0,class:"pager-link next",href:o(l).next.link},{default:v(()=>{var U;return[u("span",{class:"desc",innerHTML:((U=o(n).docFooter)==null?void 0:U.next)||"Next page"},null,8,qr),u("span",{class:"title",innerHTML:o(l).next.text},null,8,Gr)]}),_:1},8,["href"])):S("",!0)])])):S("",!0)])):S("",!0)}}}),Xr=re(Yr,[["__scopeId","data-v-8156e15f"]]),Zr={class:"container"},Jr={class:"aside-container"},Qr={class:"aside-content"},eu={class:"content"},tu={class:"content-container"},nu={class:"main"},au=K({__name:"VPDoc",setup(a){const{theme:n}=Pe(),t=Ot(),{hasSidebar:e,hasAside:s,leftAside:l}=yt(),r=k(()=>t.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(d,p)=>{const f=It("Content");return i(),c("div",{class:g(["VPDoc",{"has-sidebar":o(e),"has-aside":o(s)}])},[y(d.$slots,"doc-top",{},void 0,!0),u("div",Zr,[o(s)?(i(),c("div",{key:0,class:g(["aside",{"left-aside":o(l)}])},[p[0]||(p[0]=u("div",{class:"aside-curtain"},null,-1)),u("div",Jr,[u("div",Qr,[m(Pr,null,{"aside-top":v(()=>[y(d.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":v(()=>[y(d.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":v(()=>[y(d.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":v(()=>[y(d.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":v(()=>[y(d.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":v(()=>[y(d.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):S("",!0),u("div",eu,[u("div",tu,[y(d.$slots,"doc-before",{},void 0,!0),u("main",nu,[m(f,{class:g(["vp-doc",[r.value,o(n).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),m(Xr,null,{"doc-footer-before":v(()=>[y(d.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),y(d.$slots,"doc-after",{},void 0,!0)])])]),y(d.$slots,"doc-bottom",{},void 0,!0)],2)}}}),ou=re(au,[["__scopeId","data-v-5815b2ee"]]),lu=K({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(a){const n=a,t=k(()=>n.href&&La.test(n.href)),e=k(()=>n.tag||(n.href?"a":"button"));return(s,l)=>(i(),N(st(e.value),{class:g(["VPButton",[a.size,a.theme]]),href:a.href?o(sa)(a.href):void 0,target:n.target??(t.value?"_blank":void 0),rel:n.rel??(t.value?"noreferrer":void 0)},{default:v(()=>[$(z(a.text),1)]),_:1},8,["class","href","target","rel"]))}}),su=re(lu,[["__scopeId","data-v-083125f9"]]),iu=["src","alt"],ru=K({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(a){return(n,t)=>{const e=It("VPImage",!0);return a.image?(i(),c(D,{key:0},[typeof a.image=="string"||"src"in a.image?(i(),c("img",Ie({key:0,class:"VPImage"},typeof a.image=="string"?n.$attrs:{...a.image,...n.$attrs},{src:o(Pt)(typeof a.image=="string"?a.image:a.image.src),alt:a.alt??(typeof a.image=="string"?"":a.image.alt||"")}),null,16,iu)):(i(),c(D,{key:1},[m(e,Ie({class:"dark",image:a.image.dark,alt:a.image.alt},n.$attrs),null,16,["image","alt"]),m(e,Ie({class:"light",image:a.image.light,alt:a.image.alt},n.$attrs),null,16,["image","alt"])],64))],64)):S("",!0)}}}),Sn=re(ru,[["__scopeId","data-v-9bf5b19f"]]),uu={class:"container"},cu={class:"main"},du={class:"heading"},pu=["innerHTML"],vu=["innerHTML"],fu=["innerHTML"],mu={key:0,class:"actions"},ku={key:0,class:"image"},gu={class:"image-container"},bu=K({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(a){const n=Qe("hero-image-slot-exists");return(t,e)=>(i(),c("div",{class:g(["VPHero",{"has-image":a.image||o(n)}])},[u("div",uu,[u("div",cu,[y(t.$slots,"home-hero-info-before",{},void 0,!0),y(t.$slots,"home-hero-info",{},()=>[u("h1",du,[a.name?(i(),c("span",{key:0,innerHTML:a.name,class:"name clip"},null,8,pu)):S("",!0),a.text?(i(),c("span",{key:1,innerHTML:a.text,class:"text"},null,8,vu)):S("",!0)]),a.tagline?(i(),c("p",{key:0,innerHTML:a.tagline,class:"tagline"},null,8,fu)):S("",!0)],!0),y(t.$slots,"home-hero-info-after",{},void 0,!0),a.actions?(i(),c("div",mu,[(i(!0),c(D,null,pe(a.actions,s=>(i(),c("div",{key:s.link,class:"action"},[m(su,{tag:"a",size:"medium",theme:s.theme,text:s.text,href:s.link,target:s.target,rel:s.rel},null,8,["theme","text","href","target","rel"])]))),128))])):S("",!0),y(t.$slots,"home-hero-actions-after",{},void 0,!0)]),a.image||o(n)?(i(),c("div",ku,[u("div",gu,[e[0]||(e[0]=u("div",{class:"image-bg"},null,-1)),y(t.$slots,"home-hero-image",{},()=>[a.image?(i(),N(Sn,{key:0,class:"image-src",image:a.image},null,8,["image"])):S("",!0)],!0)])])):S("",!0)])],2))}}),hu=re(bu,[["__scopeId","data-v-e51af47b"]]),yu=K({__name:"VPHomeHero",setup(a){const{frontmatter:n}=Pe();return(t,e)=>o(n).hero?(i(),N(hu,{key:0,class:"VPHomeHero",name:o(n).hero.name,text:o(n).hero.text,tagline:o(n).hero.tagline,image:o(n).hero.image,actions:o(n).hero.actions},{"home-hero-info-before":v(()=>[y(t.$slots,"home-hero-info-before")]),"home-hero-info":v(()=>[y(t.$slots,"home-hero-info")]),"home-hero-info-after":v(()=>[y(t.$slots,"home-hero-info-after")]),"home-hero-actions-after":v(()=>[y(t.$slots,"home-hero-actions-after")]),"home-hero-image":v(()=>[y(t.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):S("",!0)}}),_u={class:"box"},xu={key:0,class:"icon"},wu=["innerHTML"],$u=["innerHTML"],Su=["innerHTML"],Ku={key:4,class:"link-text"},Cu={class:"link-text-value"},Tu=K({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(a){return(n,t)=>(i(),N(kt,{class:"VPFeature",href:a.link,rel:a.rel,target:a.target,"no-icon":!0,tag:a.link?"a":"div"},{default:v(()=>[u("article",_u,[typeof a.icon=="object"&&a.icon.wrap?(i(),c("div",xu,[m(Sn,{image:a.icon,alt:a.icon.alt,height:a.icon.height||48,width:a.icon.width||48},null,8,["image","alt","height","width"])])):typeof a.icon=="object"?(i(),N(Sn,{key:1,image:a.icon,alt:a.icon.alt,height:a.icon.height||48,width:a.icon.width||48},null,8,["image","alt","height","width"])):a.icon?(i(),c("div",{key:2,class:"icon",innerHTML:a.icon},null,8,wu)):S("",!0),u("h2",{class:"title",innerHTML:a.title},null,8,$u),a.details?(i(),c("p",{key:3,class:"details",innerHTML:a.details},null,8,Su)):S("",!0),a.linkText?(i(),c("div",Ku,[u("p",Cu,[$(z(a.linkText)+" ",1),t[0]||(t[0]=u("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):S("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),zu=re(Tu,[["__scopeId","data-v-57041261"]]),Pu={key:0,class:"VPFeatures"},Lu={class:"container"},Bu={class:"items"},Mu=K({__name:"VPFeatures",props:{features:{}},setup(a){const n=a,t=k(()=>{const e=n.features.length;if(e){if(e===2)return"grid-2";if(e===3)return"grid-3";if(e%3===0)return"grid-6";if(e>3)return"grid-4"}else return});return(e,s)=>a.features?(i(),c("div",Pu,[u("div",Lu,[u("div",Bu,[(i(!0),c(D,null,pe(a.features,l=>(i(),c("div",{key:l.title,class:g(["item",[t.value]])},[m(zu,{icon:l.icon,title:l.title,details:l.details,link:l.link,"link-text":l.linkText,rel:l.rel,target:l.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):S("",!0)}}),Vu=re(Mu,[["__scopeId","data-v-6bcfff71"]]),Iu=K({__name:"VPHomeFeatures",setup(a){const{frontmatter:n}=Pe();return(t,e)=>o(n).features?(i(),N(Vu,{key:0,class:"VPHomeFeatures",features:o(n).features},null,8,["features"])):S("",!0)}}),Ou=K({__name:"VPHomeContent",setup(a){const{width:n}=vo({initialWidth:0,includeScrollbar:!1});return(t,e)=>(i(),c("div",{class:"vp-doc container",style:Fe(o(n)?{"--vp-offset":`calc(50% - ${o(n)/2}px)`}:{})},[y(t.$slots,"default",{},void 0,!0)],4))}}),Eu=re(Ou,[["__scopeId","data-v-d88f8b0f"]]),Au=K({__name:"VPHome",setup(a){const{frontmatter:n,theme:t}=Pe();return(e,s)=>{const l=It("Content");return i(),c("div",{class:g(["VPHome",{"external-link-icon-enabled":o(t).externalLinkIcon}])},[y(e.$slots,"home-hero-before",{},void 0,!0),m(yu,null,{"home-hero-info-before":v(()=>[y(e.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":v(()=>[y(e.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":v(()=>[y(e.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":v(()=>[y(e.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":v(()=>[y(e.$slots,"home-hero-image",{},void 0,!0)]),_:3}),y(e.$slots,"home-hero-after",{},void 0,!0),y(e.$slots,"home-features-before",{},void 0,!0),m(Iu),y(e.$slots,"home-features-after",{},void 0,!0),o(n).markdownStyles!==!1?(i(),N(Eu,{key:0},{default:v(()=>[m(l)]),_:1})):(i(),N(l,{key:1}))],2)}}}),Ru=re(Au,[["__scopeId","data-v-a8086b4d"]]),ju={},Du={class:"VPPage"};function Fu(a,n){const t=It("Content");return i(),c("div",Du,[y(a.$slots,"page-top"),m(t),y(a.$slots,"page-bottom")])}const Nu=re(ju,[["render",Fu]]),Hu=K({__name:"VPContent",setup(a){const{page:n,frontmatter:t}=Pe(),{hasSidebar:e}=yt();return(s,l)=>(i(),c("div",{class:g(["VPContent",{"has-sidebar":o(e),"is-home":o(t).layout==="home"}]),id:"VPContent"},[o(n).isNotFound?y(s.$slots,"not-found",{},()=>[m(rr)],!0,0):o(t).layout==="page"?(i(),N(Nu,{key:1},{"page-top":v(()=>[y(s.$slots,"page-top",{},void 0,!0)]),"page-bottom":v(()=>[y(s.$slots,"page-bottom",{},void 0,!0)]),_:3})):o(t).layout==="home"?(i(),N(Ru,{key:2},{"home-hero-before":v(()=>[y(s.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":v(()=>[y(s.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":v(()=>[y(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":v(()=>[y(s.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":v(()=>[y(s.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":v(()=>[y(s.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":v(()=>[y(s.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":v(()=>[y(s.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":v(()=>[y(s.$slots,"home-features-after",{},void 0,!0)]),_:3})):o(t).layout&&o(t).layout!=="doc"?(i(),N(st(o(t).layout),{key:3})):(i(),N(ou,{key:4},{"doc-top":v(()=>[y(s.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":v(()=>[y(s.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":v(()=>[y(s.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":v(()=>[y(s.$slots,"doc-before",{},void 0,!0)]),"doc-after":v(()=>[y(s.$slots,"doc-after",{},void 0,!0)]),"aside-top":v(()=>[y(s.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":v(()=>[y(s.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":v(()=>[y(s.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":v(()=>[y(s.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":v(()=>[y(s.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":v(()=>[y(s.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),Uu=re(Hu,[["__scopeId","data-v-a97fbbac"]]),Wu={class:"container"},qu=["innerHTML"],Gu=["innerHTML"],Yu=K({__name:"VPFooter",setup(a){const{theme:n,frontmatter:t}=Pe(),{hasSidebar:e}=yt();return(s,l)=>o(n).footer&&o(t).footer!==!1?(i(),c("footer",{key:0,class:g(["VPFooter",{"has-sidebar":o(e)}])},[u("div",Wu,[o(n).footer.message?(i(),c("p",{key:0,class:"message",innerHTML:o(n).footer.message},null,8,qu)):S("",!0),o(n).footer.copyright?(i(),c("p",{key:1,class:"copyright",innerHTML:o(n).footer.copyright},null,8,Gu)):S("",!0)])],2)):S("",!0)}}),Xu=re(Yu,[["__scopeId","data-v-a3cd0c53"]]);function Zu(){const{theme:a,frontmatter:n}=Pe(),t=Yn([]),e=k(()=>t.value.length>0);return Kn(()=>{t.value=ia(n.value.outline??a.value.outline)}),{headers:t,hasLocalNav:e}}const Ju={class:"menu-text"},Qu={class:"header"},ec={class:"outline"},tc=K({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(a){const n=a,{theme:t}=Pe(),e=_(!1),s=_(0),l=_(),r=_();function d(x){var C;(C=l.value)!=null&&C.contains(x.target)||(e.value=!1)}Le(e,x=>{if(x){document.addEventListener("click",d);return}document.removeEventListener("click",d)}),fo("Escape",()=>{e.value=!1}),Kn(()=>{e.value=!1});function p(){e.value=!e.value,s.value=window.innerHeight+Math.min(window.scrollY-n.navHeight,0)}function f(x){x.target.classList.contains("outline-link")&&(r.value&&(r.value.style.transition="none"),Je(()=>{e.value=!1}))}function h(){e.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(x,C)=>(i(),c("div",{class:"VPLocalNavOutlineDropdown",style:Fe({"--vp-vh":s.value+"px"}),ref_key:"main",ref:l},[a.headers.length>0?(i(),c("button",{key:0,onClick:p,class:g({open:e.value})},[u("span",Ju,z(o(Ya)(o(t))),1),C[0]||(C[0]=u("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(i(),c("button",{key:1,onClick:h},z(o(t).returnToTopLabel||"Return to top"),1)),m(ln,{name:"flyout"},{default:v(()=>[e.value?(i(),c("div",{key:0,ref_key:"items",ref:r,class:"items",onClick:f},[u("div",Qu,[u("a",{class:"top-link",href:"#",onClick:h},z(o(t).returnToTopLabel||"Return to top"),1)]),u("div",ec,[m(Xa,{headers:a.headers},null,8,["headers"])])],512)):S("",!0)]),_:1})],4))}}),nc=re(tc,[["__scopeId","data-v-ebfb8c58"]]),ac={class:"container"},oc=["aria-expanded"],lc={class:"menu-text"},sc=K({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(a){const{theme:n,frontmatter:t}=Pe(),{hasSidebar:e}=yt(),{headers:s}=Zu(),{y:l}=Ba(),r=_(0);We(()=>{r.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),Kn(()=>{s.value=ia(t.value.outline??n.value.outline)});const d=k(()=>s.value.length===0),p=k(()=>d.value&&!e.value),f=k(()=>({VPLocalNav:!0,"has-sidebar":e.value,empty:d.value,fixed:p.value}));return(h,x)=>o(t).layout!=="home"&&(!p.value||o(l)>=r.value)?(i(),c("div",{key:0,class:g(f.value)},[u("div",ac,[o(e)?(i(),c("button",{key:0,class:"menu","aria-expanded":a.open,"aria-controls":"VPSidebarNav",onClick:x[0]||(x[0]=C=>h.$emit("open-menu"))},[x[1]||(x[1]=u("span",{class:"vpi-align-left menu-icon"},null,-1)),u("span",lc,z(o(n).sidebarMenuLabel||"Menu"),1)],8,oc)):S("",!0),m(nc,{headers:o(s),navHeight:r.value},null,8,["headers","navHeight"])])],2)):S("",!0)}}),ic=re(sc,[["__scopeId","data-v-ae0c9d38"]]);function rc(){const a=_(!1);function n(){a.value=!0,window.addEventListener("resize",s)}function t(){a.value=!1,window.removeEventListener("resize",s)}function e(){a.value?t():n()}function s(){window.outerWidth>=768&&t()}const l=Ot();return Le(()=>l.path,t),{isScreenOpen:a,openScreen:n,closeScreen:t,toggleScreen:e}}const uc={},cc={class:"VPSwitch",type:"button",role:"switch"},dc={class:"check"},pc={key:0,class:"icon"};function vc(a,n){return i(),c("button",cc,[u("span",dc,[a.$slots.default?(i(),c("span",pc,[y(a.$slots,"default",{},void 0,!0)])):S("",!0)])])}const fc=re(uc,[["render",vc],["__scopeId","data-v-7f3956d8"]]),mc=K({__name:"VPSwitchAppearance",setup(a){const{isDark:n,theme:t}=Pe(),e=Qe("toggle-appearance",()=>{n.value=!n.value}),s=_("");return Jn(()=>{s.value=n.value?t.value.lightModeSwitchTitle||"Switch to light theme":t.value.darkModeSwitchTitle||"Switch to dark theme"}),(l,r)=>(i(),N(fc,{title:s.value,class:"VPSwitchAppearance","aria-checked":o(n),onClick:o(e)},{default:v(()=>[...r[0]||(r[0]=[u("span",{class:"vpi-sun sun"},null,-1),u("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),ra=re(mc,[["__scopeId","data-v-17dd2ffd"]]),kc={key:0,class:"VPNavBarAppearance"},gc=K({__name:"VPNavBarAppearance",setup(a){const{site:n}=Pe();return(t,e)=>o(n).appearance&&o(n).appearance!=="force-dark"&&o(n).appearance!=="force-auto"?(i(),c("div",kc,[m(ra)])):S("",!0)}}),bc=re(gc,[["__scopeId","data-v-12d05aae"]]),ua=_();let Za=!1,Rn=0;function hc(a){const n=_(!1);if(Cn){!Za&&yc(),Rn++;const t=Le(ua,e=>{var s,l,r;e===a.el.value||(s=a.el.value)!=null&&s.contains(e)?(n.value=!0,(l=a.onFocus)==null||l.call(a)):(n.value=!1,(r=a.onBlur)==null||r.call(a))});Zn(()=>{t(),Rn--,Rn||_c()})}return mo(n)}function yc(){document.addEventListener("focusin",Ja),Za=!0,ua.value=document.activeElement}function _c(){document.removeEventListener("focusin",Ja)}function Ja(){ua.value=document.activeElement}const xc={class:"VPMenuLink"},wc=["innerHTML"],$c=K({__name:"VPMenuLink",props:{item:{}},setup(a){const{page:n}=Pe();return(t,e)=>(i(),c("div",xc,[m(kt,{class:g({active:o(Mt)(o(n).relativePath,a.item.activeMatch||a.item.link,!!a.item.activeMatch)}),href:a.item.link,target:a.item.target,rel:a.item.rel,"no-icon":a.item.noIcon},{default:v(()=>[u("span",{innerHTML:a.item.text},null,8,wc)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),Vn=re($c,[["__scopeId","data-v-f2eed1d3"]]),Sc={class:"VPMenuGroup"},Kc={key:0,class:"title"},Cc=K({__name:"VPMenuGroup",props:{text:{},items:{}},setup(a){return(n,t)=>(i(),c("div",Sc,[a.text?(i(),c("p",Kc,z(a.text),1)):S("",!0),(i(!0),c(D,null,pe(a.items,e=>(i(),c(D,null,["link"in e?(i(),N(Vn,{key:0,item:e},null,8,["item"])):S("",!0)],64))),256))]))}}),Tc=re(Cc,[["__scopeId","data-v-de6820df"]]),zc={class:"VPMenu"},Pc={key:0,class:"items"},Lc=K({__name:"VPMenu",props:{items:{}},setup(a){return(n,t)=>(i(),c("div",zc,[a.items?(i(),c("div",Pc,[(i(!0),c(D,null,pe(a.items,e=>(i(),c(D,{key:JSON.stringify(e)},["link"in e?(i(),N(Vn,{key:0,item:e},null,8,["item"])):"component"in e?(i(),N(st(e.component),Ie({key:1,ref_for:!0},e.props),null,16)):(i(),N(Tc,{key:2,text:e.text,items:e.items},null,8,["text","items"]))],64))),128))])):S("",!0),y(n.$slots,"default",{},void 0,!0)]))}}),Bc=re(Lc,[["__scopeId","data-v-e22e2280"]]),Mc=["aria-expanded","aria-label"],Vc={key:0,class:"text"},Ic=["innerHTML"],Oc={key:1,class:"vpi-more-horizontal icon"},Ec={class:"menu"},Ac=K({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(a){const n=_(!1),t=_();hc({el:t,onBlur:e});function e(){n.value=!1}return(s,l)=>(i(),c("div",{class:"VPFlyout",ref_key:"el",ref:t,onMouseenter:l[1]||(l[1]=r=>n.value=!0),onMouseleave:l[2]||(l[2]=r=>n.value=!1)},[u("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":n.value,"aria-label":a.label,onClick:l[0]||(l[0]=r=>n.value=!n.value)},[a.button||a.icon?(i(),c("span",Vc,[a.icon?(i(),c("span",{key:0,class:g([a.icon,"option-icon"])},null,2)):S("",!0),a.button?(i(),c("span",{key:1,innerHTML:a.button},null,8,Ic)):S("",!0),l[3]||(l[3]=u("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(i(),c("span",Oc))],8,Mc),u("div",Ec,[m(Bc,{items:a.items},{default:v(()=>[y(s.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),ca=re(Ac,[["__scopeId","data-v-b2dccbb3"]]),Rc=["href","aria-label","innerHTML"],jc=K({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(a){const n=a,t=_();We(async()=>{var l;await Je();const s=(l=t.value)==null?void 0:l.children[0];s instanceof HTMLElement&&s.className.startsWith("vpi-social-")&&(getComputedStyle(s).maskImage||getComputedStyle(s).webkitMaskImage)==="none"&&s.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${n.icon}.svg')`)});const e=k(()=>typeof n.icon=="object"?n.icon.svg:`<span class="vpi-social-${n.icon}"></span>`);return(s,l)=>(i(),c("a",{ref_key:"el",ref:t,class:"VPSocialLink no-icon",href:a.link,"aria-label":a.ariaLabel??(typeof a.icon=="string"?a.icon:""),target:"_blank",rel:"noopener",innerHTML:e.value},null,8,Rc))}}),Dc=re(jc,[["__scopeId","data-v-cc19a372"]]),Fc={class:"VPSocialLinks"},Nc=K({__name:"VPSocialLinks",props:{links:{}},setup(a){return(n,t)=>(i(),c("div",Fc,[(i(!0),c(D,null,pe(a.links,({link:e,icon:s,ariaLabel:l})=>(i(),N(Dc,{key:e,icon:s,link:e,ariaLabel:l},null,8,["icon","link","ariaLabel"]))),128))]))}}),da=re(Nc,[["__scopeId","data-v-29066ede"]]),Hc={key:0,class:"group translations"},Uc={class:"trans-title"},Wc={key:1,class:"group"},qc={class:"item appearance"},Gc={class:"label"},Yc={class:"appearance-action"},Xc={key:2,class:"group"},Zc={class:"item social-links"},Jc=K({__name:"VPNavBarExtra",setup(a){const{site:n,theme:t}=Pe(),{localeLinks:e,currentLang:s}=mn({correspondingLink:!0}),l=k(()=>e.value.length&&s.value.label||n.value.appearance||t.value.socialLinks);return(r,d)=>l.value?(i(),N(ca,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:v(()=>[o(e).length&&o(s).label?(i(),c("div",Hc,[u("p",Uc,z(o(s).label),1),(i(!0),c(D,null,pe(o(e),p=>(i(),N(Vn,{key:p.link,item:p},null,8,["item"]))),128))])):S("",!0),o(n).appearance&&o(n).appearance!=="force-dark"&&o(n).appearance!=="force-auto"?(i(),c("div",Wc,[u("div",qc,[u("p",Gc,z(o(t).darkModeSwitchLabel||"Appearance"),1),u("div",Yc,[m(ra)])])])):S("",!0),o(t).socialLinks?(i(),c("div",Xc,[u("div",Zc,[m(da,{class:"social-links-list",links:o(t).socialLinks},null,8,["links"])])])):S("",!0)]),_:1})):S("",!0)}}),Qc=re(Jc,[["__scopeId","data-v-35f90f0c"]]),ed=["aria-expanded"],td=K({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(a){return(n,t)=>(i(),c("button",{type:"button",class:g(["VPNavBarHamburger",{active:a.active}]),"aria-label":"mobile navigation","aria-expanded":a.active,"aria-controls":"VPNavScreen",onClick:t[0]||(t[0]=e=>n.$emit("click"))},[...t[1]||(t[1]=[u("span",{class:"container"},[u("span",{class:"top"}),u("span",{class:"middle"}),u("span",{class:"bottom"})],-1)])],10,ed))}}),nd=re(td,[["__scopeId","data-v-ca4be9c3"]]),ad=["innerHTML"],od=K({__name:"VPNavBarMenuLink",props:{item:{}},setup(a){const{page:n}=Pe();return(t,e)=>(i(),N(kt,{class:g({VPNavBarMenuLink:!0,active:o(Mt)(o(n).relativePath,a.item.activeMatch||a.item.link,!!a.item.activeMatch)}),href:a.item.link,target:a.item.target,rel:a.item.rel,"no-icon":a.item.noIcon,tabindex:"0"},{default:v(()=>[u("span",{innerHTML:a.item.text},null,8,ad)]),_:1},8,["class","href","target","rel","no-icon"]))}}),ld=re(od,[["__scopeId","data-v-658079ee"]]),sd=K({__name:"VPNavBarMenuGroup",props:{item:{}},setup(a){const n=a,{page:t}=Pe(),e=l=>"component"in l?!1:"link"in l?Mt(t.value.relativePath,l.link,!!n.item.activeMatch):l.items.some(e),s=k(()=>e(n.item));return(l,r)=>(i(),N(ca,{class:g({VPNavBarMenuGroup:!0,active:o(Mt)(o(t).relativePath,a.item.activeMatch,!!a.item.activeMatch)||s.value}),button:a.item.text,items:a.item.items},null,8,["class","button","items"]))}}),id={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},rd=K({__name:"VPNavBarMenu",setup(a){const{theme:n}=Pe();return(t,e)=>o(n).nav?(i(),c("nav",id,[e[0]||(e[0]=u("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(i(!0),c(D,null,pe(o(n).nav,s=>(i(),c(D,{key:JSON.stringify(s)},["link"in s?(i(),N(ld,{key:0,item:s},null,8,["item"])):"component"in s?(i(),N(st(s.component),Ie({key:1,ref_for:!0},s.props),null,16)):(i(),N(sd,{key:2,item:s},null,8,["item"]))],64))),128))])):S("",!0)}}),ud=re(rd,[["__scopeId","data-v-3ac9d41e"]]);function cd(a){const{localeIndex:n,theme:t}=Pe();function e(s){var L,U,Z;const l=s.split("."),r=(L=t.value.search)==null?void 0:L.options,d=r&&typeof r=="object",p=d&&((Z=(U=r.locales)==null?void 0:U[n.value])==null?void 0:Z.translations)||null,f=d&&r.translations||null;let h=p,x=f,C=a;const B=l.pop();for(const M of l){let O=null;const E=C==null?void 0:C[M];E&&(O=C=E);const j=x==null?void 0:x[M];j&&(O=x=j);const I=h==null?void 0:h[M];I&&(O=h=I),E||(C=O),j||(x=O),I||(h=O)}return(h==null?void 0:h[B])??(x==null?void 0:x[B])??(C==null?void 0:C[B])??""}return e}const dd=["aria-label"],pd={class:"DocSearch-Button-Container"},vd={class:"DocSearch-Button-Placeholder"},Ca=K({__name:"VPNavBarSearchButton",setup(a){const t=cd({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(e,s)=>(i(),c("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":o(t)("button.buttonAriaLabel")},[u("span",pd,[s[0]||(s[0]=u("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),u("span",vd,z(o(t)("button.buttonText")),1)]),s[1]||(s[1]=u("span",{class:"DocSearch-Button-Keys"},[u("kbd",{class:"DocSearch-Button-Key"}),u("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,dd))}}),fd={class:"VPNavBarSearch"},md={id:"local-search"},kd={key:1,id:"docsearch"},gd=K({__name:"VPNavBarSearch",setup(a){const n=()=>null,t=()=>null,{theme:e}=Pe(),s=_(!1),l=_(!1);We(()=>{});function r(){s.value||(s.value=!0,setTimeout(d,16))}function d(){const h=new Event("keydown");h.key="k",h.metaKey=!0,window.dispatchEvent(h),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||d()},16)}const p=_(!1),f="";return(h,x)=>{var C;return i(),c("div",fd,[o(f)==="local"?(i(),c(D,{key:0},[p.value?(i(),N(o(n),{key:0,onClose:x[0]||(x[0]=B=>p.value=!1)})):S("",!0),u("div",md,[m(Ca,{onClick:x[1]||(x[1]=B=>p.value=!0)})])],64)):o(f)==="algolia"?(i(),c(D,{key:1},[s.value?(i(),N(o(t),{key:0,algolia:((C=o(e).search)==null?void 0:C.options)??o(e).algolia,onVnodeBeforeMount:x[2]||(x[2]=B=>l.value=!0)},null,8,["algolia"])):S("",!0),l.value?S("",!0):(i(),c("div",kd,[m(Ca,{onClick:r})]))],64)):S("",!0)])}}}),bd=K({__name:"VPNavBarSocialLinks",setup(a){const{theme:n}=Pe();return(t,e)=>o(n).socialLinks?(i(),N(da,{key:0,class:"VPNavBarSocialLinks",links:o(n).socialLinks},null,8,["links"])):S("",!0)}}),hd=re(bd,[["__scopeId","data-v-94f00bb2"]]),yd=["href","rel","target"],_d=["innerHTML"],xd={key:2},wd=K({__name:"VPNavBarTitle",setup(a){const{site:n,theme:t}=Pe(),{hasSidebar:e}=yt(),{currentLang:s}=mn(),l=k(()=>{var p;return typeof t.value.logoLink=="string"?t.value.logoLink:(p=t.value.logoLink)==null?void 0:p.link}),r=k(()=>{var p;return typeof t.value.logoLink=="string"||(p=t.value.logoLink)==null?void 0:p.rel}),d=k(()=>{var p;return typeof t.value.logoLink=="string"||(p=t.value.logoLink)==null?void 0:p.target});return(p,f)=>(i(),c("div",{class:g(["VPNavBarTitle",{"has-sidebar":o(e)}])},[u("a",{class:"title",href:l.value??o(sa)(o(s).link),rel:r.value,target:d.value},[y(p.$slots,"nav-bar-title-before",{},void 0,!0),o(t).logo?(i(),N(Sn,{key:0,class:"logo",image:o(t).logo},null,8,["image"])):S("",!0),o(t).siteTitle?(i(),c("span",{key:1,innerHTML:o(t).siteTitle},null,8,_d)):o(t).siteTitle===void 0?(i(),c("span",xd,z(o(n).title),1)):S("",!0),y(p.$slots,"nav-bar-title-after",{},void 0,!0)],8,yd)],2))}}),$d=re(wd,[["__scopeId","data-v-ac783efc"]]),Sd={class:"items"},Kd={class:"title"},Cd=K({__name:"VPNavBarTranslations",setup(a){const{theme:n}=Pe(),{localeLinks:t,currentLang:e}=mn({correspondingLink:!0});return(s,l)=>o(t).length&&o(e).label?(i(),N(ca,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:o(n).langMenuLabel||"Change language"},{default:v(()=>[u("div",Sd,[u("p",Kd,z(o(e).label),1),(i(!0),c(D,null,pe(o(t),r=>(i(),N(Vn,{key:r.link,item:r},null,8,["item"]))),128))])]),_:1},8,["label"])):S("",!0)}}),Td=re(Cd,[["__scopeId","data-v-0655c02f"]]),zd={class:"wrapper"},Pd={class:"container"},Ld={class:"title"},Bd={class:"content"},Md={class:"content-body"},Vd=K({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(a){const n=a,{y:t}=Ba(),{hasSidebar:e}=yt(),{frontmatter:s}=Pe(),l=_({});return Jn(()=>{l.value={"has-sidebar":e.value,home:s.value.layout==="home",top:t.value===0,"screen-open":n.isScreenOpen}}),(r,d)=>(i(),c("div",{class:g(["VPNavBar",l.value])},[u("div",zd,[u("div",Pd,[u("div",Ld,[m($d,null,{"nav-bar-title-before":v(()=>[y(r.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":v(()=>[y(r.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),u("div",Bd,[u("div",Md,[y(r.$slots,"nav-bar-content-before",{},void 0,!0),m(gd,{class:"search"}),m(ud,{class:"menu"}),m(Td,{class:"translations"}),m(bc,{class:"appearance"}),m(hd,{class:"social-links"}),m(Qc,{class:"extra"}),y(r.$slots,"nav-bar-content-after",{},void 0,!0),m(nd,{class:"hamburger",active:a.isScreenOpen,onClick:d[0]||(d[0]=p=>r.$emit("toggle-screen"))},null,8,["active"])])])])]),d[1]||(d[1]=u("div",{class:"divider"},[u("div",{class:"divider-line"})],-1))],2))}}),Id=re(Vd,[["__scopeId","data-v-3db4fbf3"]]),Od={key:0,class:"VPNavScreenAppearance"},Ed={class:"text"},Ad=K({__name:"VPNavScreenAppearance",setup(a){const{site:n,theme:t}=Pe();return(e,s)=>o(n).appearance&&o(n).appearance!=="force-dark"&&o(n).appearance!=="force-auto"?(i(),c("div",Od,[u("p",Ed,z(o(t).darkModeSwitchLabel||"Appearance"),1),m(ra)])):S("",!0)}}),Rd=re(Ad,[["__scopeId","data-v-61510644"]]),jd=["innerHTML"],Dd=K({__name:"VPNavScreenMenuLink",props:{item:{}},setup(a){const n=Qe("close-screen");return(t,e)=>(i(),N(kt,{class:"VPNavScreenMenuLink",href:a.item.link,target:a.item.target,rel:a.item.rel,"no-icon":a.item.noIcon,onClick:o(n)},{default:v(()=>[u("span",{innerHTML:a.item.text},null,8,jd)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Fd=re(Dd,[["__scopeId","data-v-af5a0f87"]]),Nd=["innerHTML"],Hd=K({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(a){const n=Qe("close-screen");return(t,e)=>(i(),N(kt,{class:"VPNavScreenMenuGroupLink",href:a.item.link,target:a.item.target,rel:a.item.rel,"no-icon":a.item.noIcon,onClick:o(n)},{default:v(()=>[u("span",{innerHTML:a.item.text},null,8,Nd)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Qa=re(Hd,[["__scopeId","data-v-77c8d903"]]),Ud={class:"VPNavScreenMenuGroupSection"},Wd={key:0,class:"title"},qd=K({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(a){return(n,t)=>(i(),c("div",Ud,[a.text?(i(),c("p",Wd,z(a.text),1)):S("",!0),(i(!0),c(D,null,pe(a.items,e=>(i(),N(Qa,{key:e.text,item:e},null,8,["item"]))),128))]))}}),Gd=re(qd,[["__scopeId","data-v-d438db06"]]),Yd=["aria-controls","aria-expanded"],Xd=["innerHTML"],Zd=["id"],Jd={key:0,class:"item"},Qd={key:1,class:"item"},ep={key:2,class:"group"},tp=K({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(a){const n=a,t=_(!1),e=k(()=>`NavScreenGroup-${n.text.replace(" ","-").toLowerCase()}`);function s(){t.value=!t.value}return(l,r)=>(i(),c("div",{class:g(["VPNavScreenMenuGroup",{open:t.value}])},[u("button",{class:"button","aria-controls":e.value,"aria-expanded":t.value,onClick:s},[u("span",{class:"button-text",innerHTML:a.text},null,8,Xd),r[0]||(r[0]=u("span",{class:"vpi-plus button-icon"},null,-1))],8,Yd),u("div",{id:e.value,class:"items"},[(i(!0),c(D,null,pe(a.items,d=>(i(),c(D,{key:JSON.stringify(d)},["link"in d?(i(),c("div",Jd,[m(Qa,{item:d},null,8,["item"])])):"component"in d?(i(),c("div",Qd,[(i(),N(st(d.component),Ie({ref_for:!0},d.props,{"screen-menu":""}),null,16))])):(i(),c("div",ep,[m(Gd,{text:d.text,items:d.items},null,8,["text","items"])]))],64))),128))],8,Zd)],2))}}),np=re(tp,[["__scopeId","data-v-7b3a34e2"]]),ap={key:0,class:"VPNavScreenMenu"},op=K({__name:"VPNavScreenMenu",setup(a){const{theme:n}=Pe();return(t,e)=>o(n).nav?(i(),c("nav",ap,[(i(!0),c(D,null,pe(o(n).nav,s=>(i(),c(D,{key:JSON.stringify(s)},["link"in s?(i(),N(Fd,{key:0,item:s},null,8,["item"])):"component"in s?(i(),N(st(s.component),Ie({key:1,ref_for:!0},s.props,{"screen-menu":""}),null,16)):(i(),N(np,{key:2,text:s.text||"",items:s.items},null,8,["text","items"]))],64))),128))])):S("",!0)}}),lp=K({__name:"VPNavScreenSocialLinks",setup(a){const{theme:n}=Pe();return(t,e)=>o(n).socialLinks?(i(),N(da,{key:0,class:"VPNavScreenSocialLinks",links:o(n).socialLinks},null,8,["links"])):S("",!0)}}),sp={class:"list"},ip=K({__name:"VPNavScreenTranslations",setup(a){const{localeLinks:n,currentLang:t}=mn({correspondingLink:!0}),e=_(!1);function s(){e.value=!e.value}return(l,r)=>o(n).length&&o(t).label?(i(),c("div",{key:0,class:g(["VPNavScreenTranslations",{open:e.value}])},[u("button",{class:"title",onClick:s},[r[0]||(r[0]=u("span",{class:"vpi-languages icon lang"},null,-1)),$(" "+z(o(t).label)+" ",1),r[1]||(r[1]=u("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),u("ul",sp,[(i(!0),c(D,null,pe(o(n),d=>(i(),c("li",{key:d.link,class:"item"},[m(kt,{class:"link",href:d.link},{default:v(()=>[$(z(d.text),1)]),_:2},1032,["href"])]))),128))])],2)):S("",!0)}}),rp=re(ip,[["__scopeId","data-v-4a029a14"]]),up={class:"container"},cp=K({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(a){const n=_(null),t=Ma(Cn?document.body:null);return(e,s)=>(i(),N(ln,{name:"fade",onEnter:s[0]||(s[0]=l=>t.value=!0),onAfterLeave:s[1]||(s[1]=l=>t.value=!1)},{default:v(()=>[a.open?(i(),c("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:n,id:"VPNavScreen"},[u("div",up,[y(e.$slots,"nav-screen-content-before",{},void 0,!0),m(op,{class:"menu"}),m(rp,{class:"translations"}),m(Rd,{class:"appearance"}),m(lp,{class:"social-links"}),y(e.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):S("",!0)]),_:3}))}}),dp=re(cp,[["__scopeId","data-v-364fb0dc"]]),pp={key:0,class:"VPNav"},vp=K({__name:"VPNav",setup(a){const{isScreenOpen:n,closeScreen:t,toggleScreen:e}=rc(),{frontmatter:s}=Pe(),l=k(()=>s.value.navbar!==!1);return ht("close-screen",t),rn(()=>{Cn&&document.documentElement.classList.toggle("hide-nav",!l.value)}),(r,d)=>l.value?(i(),c("header",pp,[m(Id,{"is-screen-open":o(n),onToggleScreen:o(e)},{"nav-bar-title-before":v(()=>[y(r.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":v(()=>[y(r.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":v(()=>[y(r.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":v(()=>[y(r.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),m(dp,{open:o(n)},{"nav-screen-content-before":v(()=>[y(r.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":v(()=>[y(r.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):S("",!0)}}),fp=re(vp,[["__scopeId","data-v-cf2cb13b"]]),mp=["role","tabindex"],kp={key:1,class:"items"},gp=K({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(a){const n=a,{collapsed:t,collapsible:e,isLink:s,isActiveLink:l,hasActiveLink:r,hasChildren:d,toggle:p}=pr(k(()=>n.item)),f=k(()=>d.value?"section":"div"),h=k(()=>s.value?"a":"div"),x=k(()=>d.value?n.depth+2===7?"p":`h${n.depth+2}`:"p"),C=k(()=>s.value?void 0:"button"),B=k(()=>[[`level-${n.depth}`],{collapsible:e.value},{collapsed:t.value},{"is-link":s.value},{"is-active":l.value},{"has-active":r.value}]);function L(Z){"key"in Z&&Z.key!=="Enter"||!n.item.link&&p()}function U(){n.item.link&&p()}return(Z,M)=>{const O=It("VPSidebarItem",!0);return i(),N(st(f.value),{class:g(["VPSidebarItem",B.value])},{default:v(()=>[a.item.text?(i(),c("div",Ie({key:0,class:"item",role:C.value},ko(a.item.items?{click:L,keydown:L}:{},!0),{tabindex:a.item.items&&0}),[M[1]||(M[1]=u("div",{class:"indicator"},null,-1)),a.item.link?(i(),N(kt,{key:0,tag:h.value,class:"link",href:a.item.link,rel:a.item.rel,target:a.item.target},{default:v(()=>[(i(),N(st(x.value),{class:"text",innerHTML:a.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(i(),N(st(x.value),{key:1,class:"text",innerHTML:a.item.text},null,8,["innerHTML"])),a.item.collapsed!=null&&a.item.items&&a.item.items.length?(i(),c("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:U,onKeydown:Bt(U,["enter"]),tabindex:"0"},[...M[0]||(M[0]=[u("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):S("",!0)],16,mp)):S("",!0),a.item.items&&a.item.items.length?(i(),c("div",kp,[a.depth<5?(i(!0),c(D,{key:0},pe(a.item.items,E=>(i(),N(O,{key:E.text,item:E,depth:a.depth+1},null,8,["item","depth"]))),128)):S("",!0)])):S("",!0)]),_:1},8,["class"])}}}),bp=re(gp,[["__scopeId","data-v-22aceb9f"]]),hp=K({__name:"VPSidebarGroup",props:{items:{}},setup(a){const n=_(!0);let t=null;return We(()=>{t=setTimeout(()=>{t=null,n.value=!1},300)}),at(()=>{t!=null&&(clearTimeout(t),t=null)}),(e,s)=>(i(!0),c(D,null,pe(a.items,l=>(i(),c("div",{key:l.text,class:g(["group",{"no-transition":n.value}])},[m(bp,{item:l,depth:0},null,8,["item"])],2))),128))}}),yp=re(hp,[["__scopeId","data-v-e1bb6cc3"]]),_p={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},xp=K({__name:"VPSidebar",props:{open:{type:Boolean}},setup(a){const{sidebarGroups:n,hasSidebar:t}=yt(),e=a,s=_(null),l=Ma(Cn?document.body:null);Le([e,s],()=>{var d;e.open?(l.value=!0,(d=s.value)==null||d.focus()):l.value=!1},{immediate:!0,flush:"post"});const r=_(0);return Le(n,()=>{r.value+=1},{deep:!0}),(d,p)=>o(t)?(i(),c("aside",{key:0,class:g(["VPSidebar",{open:a.open}]),ref_key:"navEl",ref:s,onClick:p[0]||(p[0]=nt(()=>{},["stop"]))},[p[2]||(p[2]=u("div",{class:"curtain"},null,-1)),u("nav",_p,[p[1]||(p[1]=u("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),y(d.$slots,"sidebar-nav-before",{},void 0,!0),(i(),N(yp,{items:o(n),key:r.value},null,8,["items"])),y(d.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):S("",!0)}}),wp=re(xp,[["__scopeId","data-v-5b9571c6"]]),$p=K({__name:"VPSkipLink",setup(a){const{theme:n}=Pe(),t=Ot(),e=_();Le(()=>t.path,()=>e.value.focus());function s({target:l}){const r=document.getElementById(decodeURIComponent(l.hash).slice(1));if(r){const d=()=>{r.removeAttribute("tabindex"),r.removeEventListener("blur",d)};r.setAttribute("tabindex","-1"),r.addEventListener("blur",d),r.focus(),window.scrollTo(0,0)}}return(l,r)=>(i(),c(D,null,[u("span",{ref_key:"backToTop",ref:e,tabindex:"-1"},null,512),u("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:s},z(o(n).skipToContentLabel||"Skip to content"),1)],64))}}),Sp=re($p,[["__scopeId","data-v-40c9da43"]]),Kp=K({__name:"Layout",setup(a){const{isOpen:n,open:t,close:e}=yt(),s=Ot();Le(()=>s.path,e),dr(n,e);const{frontmatter:l}=Pe(),r=bt(),d=k(()=>!!r["home-hero-image"]);return ht("hero-image-slot-exists",d),(p,f)=>{const h=It("Content");return o(l).layout!==!1?(i(),c("div",{key:0,class:g(["Layout",o(l).pageClass])},[y(p.$slots,"layout-top",{},void 0,!0),m(Sp),m(Ji,{class:"backdrop",show:o(n),onClick:o(e)},null,8,["show","onClick"]),m(fp,null,{"nav-bar-title-before":v(()=>[y(p.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":v(()=>[y(p.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":v(()=>[y(p.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":v(()=>[y(p.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":v(()=>[y(p.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":v(()=>[y(p.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),m(ic,{open:o(n),onOpenMenu:o(t)},null,8,["open","onOpenMenu"]),m(wp,{open:o(n)},{"sidebar-nav-before":v(()=>[y(p.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":v(()=>[y(p.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),m(Uu,null,{"page-top":v(()=>[y(p.$slots,"page-top",{},void 0,!0)]),"page-bottom":v(()=>[y(p.$slots,"page-bottom",{},void 0,!0)]),"not-found":v(()=>[y(p.$slots,"not-found",{},void 0,!0)]),"home-hero-before":v(()=>[y(p.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":v(()=>[y(p.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":v(()=>[y(p.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":v(()=>[y(p.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":v(()=>[y(p.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":v(()=>[y(p.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":v(()=>[y(p.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":v(()=>[y(p.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":v(()=>[y(p.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":v(()=>[y(p.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":v(()=>[y(p.$slots,"doc-before",{},void 0,!0)]),"doc-after":v(()=>[y(p.$slots,"doc-after",{},void 0,!0)]),"doc-top":v(()=>[y(p.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":v(()=>[y(p.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":v(()=>[y(p.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":v(()=>[y(p.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":v(()=>[y(p.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":v(()=>[y(p.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":v(()=>[y(p.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":v(()=>[y(p.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),m(Xu),y(p.$slots,"layout-bottom",{},void 0,!0)],2)):(i(),N(h,{key:1}))}}}),Cp=re(Kp,[["__scopeId","data-v-f06bde9b"]]),eo={Layout:Cp,enhanceApp:({app:a})=>{a.component("Badge",Yi)}},Tp=480,zp="cubic-bezier(0.22, 0.61, 0.36, 1)";function Pp(){return typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Lp(){if(typeof document>"u")return;const n=document.startViewTransition;return typeof n=="function"?n.bind(document):void 0}function to(a,n){if(a&&(a.clientX||a.clientY))return{x:a.clientX,y:a.clientY};if(n){const t=n.getBoundingClientRect();return{x:t.left+t.width/2,y:t.top+t.height/2}}return{x:typeof window>"u"?0:window.innerWidth/2,y:typeof window>"u"?0:window.innerHeight/2}}function no(a,n){const t=Lp();if(!t||Pp()){a();return}t(a).ready.then(()=>{const{innerWidth:s,innerHeight:l}=window,r=Math.hypot(Math.max(n.x,s-n.x),Math.max(n.y,l-n.y));document.documentElement.animate({clipPath:[`circle(0px at ${n.x}px ${n.y}px)`,`circle(${r}px at ${n.x}px ${n.y}px)`]},{duration:Tp,easing:zp,pseudoElement:"::view-transition-new(root)"})}).catch(()=>{})}const Bp={key:0,class:"kk-theme-switch",role:"group","aria-label":"主题切换"},Mp=["data-theme","title","aria-label","aria-pressed","onClick"],Vp=K({__name:"ThemeSwitcher",setup(a){const n=[{name:"light",label:"Light 亮色"},{name:"dark",label:"Dark 暗色"},{name:"soft",label:"Soft 柔光"},{name:"cyber",label:"Cyber 赛博"}],{theme:t}=Mn(),{isDark:e}=Xn(),s=_(!1);We(()=>{s.value=!0});function l(r,d){var p;no(()=>{gt(r),e.value=la(r)},to(d)),window.dispatchEvent(new CustomEvent("kk-toast",{detail:`已切换到 ${((p=n.find(f=>f.name===r))==null?void 0:p.label)??r}`}))}return(r,d)=>s.value?(i(),c("div",Bp,[(i(),c(D,null,pe(n,p=>u("button",{key:p.name,class:g(["kk-theme-switch__dot",{"is-active":o(t)===p.name}]),"data-theme":p.name,title:p.label,"aria-label":p.label,"aria-pressed":o(t)===p.name,type:"button",onClick:f=>l(p.name,f)},null,10,Mp)),64))])):S("",!0)}}),Ip=["aria-expanded","aria-label"],Op={class:"kk-locale-switch__label"},Ep={class:"kk-locale-switch__menu",role:"listbox"},Ap=["aria-selected","onClick"],Rp={key:0,width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.4","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},jp=K({__name:"LocaleSwitcher",setup(a){const{locale:n,locales:t}=et(),e=_(!1),s=_(!1),l=_(null);We(()=>{e.value=!0,document.addEventListener("click",r,!0)});function r(h){const x=h.target;l.value&&x&&!l.value.contains(x)&&(s.value=!1)}const d=k(()=>en(n.value)),p=k(()=>t.value);function f(h){Nt(h),s.value=!1,window.dispatchEvent(new CustomEvent("kk-toast",{detail:`语言已切换为 ${en(h)}`}))}return at(()=>{document.removeEventListener("click",r,!0)}),(h,x)=>e.value?(i(),c("div",{key:0,ref_key:"rootRef",ref:l,class:"kk-locale-switch"},[u("button",{class:"kk-locale-switch__trigger",type:"button","aria-expanded":s.value,"aria-haspopup":"listbox","aria-label":`当前语言 ${d.value}`,onClick:x[0]||(x[0]=C=>s.value=!s.value)},[x[1]||(x[1]=u("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[u("circle",{cx:"12",cy:"12",r:"9"}),u("path",{d:"M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"})],-1)),u("span",Op,z(d.value),1),x[2]||(x[2]=u("svg",{class:"kk-locale-switch__arrow",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[u("path",{d:"m6 9 6 6 6-6"})],-1))],8,Ip),pt(u("ul",Ep,[(i(!0),c(D,null,pe(p.value,C=>(i(),c("li",{key:String(C)},[u("button",{class:g(["kk-locale-switch__item",{"is-active":C===o(n)}]),type:"button",role:"option","aria-selected":C===o(n),onClick:B=>f(String(C))},[u("span",null,z(o(en)(String(C))),1),C===o(n)?(i(),c("svg",Rp,[...x[3]||(x[3]=[u("path",{d:"m5 13 4 4L19 7"},null,-1)])])):S("",!0)],10,Ap)]))),128))],512),[[Vt,s.value]])],512)):S("",!0)}}),Dp=["href"],Fp=K({__name:"DocsNav",props:{mobile:{type:Boolean,default:!1}},setup(a){const{t:n}=et(),t=Ot(),e=k(()=>[{key:"guide",match:"/guide",link:"/guide/introduction"},{key:"components",match:"/components",link:"/components/"},{key:"theme",match:"/theme",link:"/theme/"}].map(l=>({...l,text:n(`docs.nav.${l.key}`)})));function s(l){const r=t.path;return r===l||r.startsWith(`${l}/`)}return(l,r)=>(i(),c("nav",{class:g(["kk-docs-nav",{"is-mobile":a.mobile}])},[(i(!0),c(D,null,pe(e.value,d=>(i(),c("a",{key:d.key,href:o(Pt)(d.link),class:g(["kk-docs-nav__link",{"is-active":s(d.match)}])},z(d.text),11,Dp))),128))],2))}}),Ta=re(Fp,[["__scopeId","data-v-fac44694"]]),Np="https://github.com/JKK-jc/kk-ui",Hp=K({__name:"GitHubLink",setup(a){return(n,t)=>(i(),c("a",{class:"kk-github-link",href:Np,target:"_blank",rel:"noopener noreferrer",title:"KK UI 源码仓库","aria-label":"KK UI GitHub 仓库"},[...t[0]||(t[0]=[u("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[u("path",{d:"M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 2.5-.34c.85 0 1.71.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"})],-1),u("span",{class:"kk-github-link__text"},"GitHub",-1)])]))}}),Up=K({__name:"KkToast",setup(a){const n=_(!1),t=_("");let e;function s(l){const r=l.detail;t.value=r||"",n.value=!0,clearTimeout(e),e=setTimeout(()=>{n.value=!1},1800)}return We(()=>{window.addEventListener("kk-toast",s)}),at(()=>{window.removeEventListener("kk-toast",s),clearTimeout(e)}),(l,r)=>(i(),c("div",{class:g(["kk-toast",{"is-show":n.value}]),role:"status","aria-live":"polite"},[r[0]||(r[0]=u("span",{class:"kk-toast__dot"},null,-1)),u("span",null,z(t.value),1)],2))}}),Wp={key:0,class:"kk-aside-meta"},qp={class:"kk-aside-meta__title"},Gp={class:"kk-aside-meta__list"},Yp=["onClick"],Xp=K({__name:"KkDocMeta",setup(a){const n=Ot(),{theme:t}=Mn(),{t:e}=et(),s=k(()=>n.path.startsWith("/components/")),l=[{name:"light",label:"Light"},{name:"dark",label:"Dark"},{name:"soft",label:"Soft"},{name:"cyber",label:"Cyber"}];function r(d){gt(d),window.dispatchEvent(new CustomEvent("kk-toast",{detail:e("docs.meta.switched",{name:d})}))}return(d,p)=>s.value?(i(),c("div",Wp,[u("div",qp,z(o(e)("docs.meta.previewTheme")),1),u("div",Gp,[(i(),c(D,null,pe(l,f=>u("button",{key:f.name,class:g(["kk-aside-meta__btn",{"is-active":o(t)===f.name}]),type:"button",onClick:h=>r(f.name)},z(f.label),11,Yp)),64))])])):S("",!0)}}),Zp={"/guide/introduction":"Introduction","/guide/getting-started":"Getting started","/guide/design-tokens":"Design tokens","/theme/":"Theme system","/theme/custom":"Custom theme","/components/button":"KkButton Button","/components/icon":"KkIcon Icon","/components/layout":"KkLayout Layout","/components/container":"KkContainer Container","/components/space":"KkSpace Space","/components/divider":"KkDivider Divider","/components/card":"KkCard Card","/components/tabs":"KkTabs Tabs","/components/tag":"KkTag Tag","/components/table":"KkTable Table","/components/pagination":"KkPagination Pagination","/components/watermark":"KkWatermark Watermark","/components/input":"KkInput Input","/components/select":"KkSelect Select","/components/cascader":"KkCascader Cascader","/components/upload":"KkUpload Upload","/components/form":"KkForm Form","/components/form-item":"KkFormItem FormItem","/components/modal":"KkModal Modal","/components/drawer":"KkDrawer Drawer","/components/skeleton":"KkSkeleton Skeleton"},wn={通用:"General",布局:"Layout",导航:"Navigation",数据展示:"Data Display",数据录入:"Data Entry",反馈:"Feedback",指南:"Guide",主题:"Theme",何时使用:"When to use",代码演示:"Examples",设计规范:"Design guidelines",组件总览:"Component overview",核心特性:"Key features",国际化:"Internationalization",安装:"Installation",按需引入:"Import on demand",全量引入:"Full import",命名规范:"Naming conventions",目录结构:"Directory structure",本地开发:"Local development",如何验证新组件:"How to verify a new component",浏览器支持:"Browser support",性能与交互约定:"Performance & interaction conventions",交互与性能约定:"Interaction & performance conventions",禁止事项:"Prohibited practices",设计理念:"Design philosophy",三层结构:"Three-layer structure",内置主题:"Built-in themes",切换主题:"Switching themes",主题切换:"Theme switching",主题内容:"Theme content",在页面内局部覆盖:"Local overrides within a page",与系统主题联动的建议:"System theme sync tips","用 SCSS 定义主题":"Defining a theme with SCSS",需要覆盖哪些变量:"Which variables to override",使用示例:"Usage example",实例方法:"Instance methods",事件:"Events",插槽:"Slots","KkLayout 插槽":"KkLayout Slots","KkLayoutSider 插槽 / 事件":"KkLayoutSider Slots / Events","KkTabPane 插槽":"KkTabPane Slots","KkTable 事件":"KkTable Events","KkTabs 事件":"KkTabs Events","KkTabs 实例方法":"KkTabs Instance methods","KkTabs 插槽":"KkTabs Slots",基础用法:"Basic usage",基础用法与可关闭:"Basic usage & closable",动态添加:"Dynamic add",标签类型:"Tag types",效果与尺寸:"Effect & size",分区结构:"Region structure",四个方向:"Four placements",图标来源:"Icon source",图片卡片:"Picture cards",多选:"Multiple","多选 + 跨页":"Multiple + cross-page",标签布局:"Label layout",拖动:"Drag",拖动调整尺寸:"Drag to resize",排序:"Sorting",校验规则结构:"Rules structure","自定义 layout 编排":"Custom layout",自定义底部:"Custom footer",默认底部操作区:"Default footer actions","长内容、加载态与程序化控制":"Long content, loading & programmatic control",内置分页器:"Built-in pagination",暴露方法:"Exposed methods",块级按钮:"Block button",竖直分割线:"Vertical divider",尺寸:"Sizes",尺寸与错误态:"Sizes & error state",带分隔符:"With divider",带图标:"With icon",懒加载:"Lazy load",手动提交:"Manual submit",按钮尺寸:"Button sizes",按钮状态:"Button states",按钮类型:"Button types","基础用法（点击上传）":"Basic usage (click to upload)",多选标签:"Multiple tags",自定义内容插槽:"Custom content slot",自由组合:"Free composition",列表占位:"List placeholder",卡片风格:"Card style",可折叠侧边栏:"Collapsible sider","可编辑（关闭 + 新增）":"Editable (close + add)",嵌套与右侧边栏:"Nested & right sider",左右方向:"Left / right",栅格系统:"Grid system",整体框架:"Admin shell",文字水印:"Text watermark",图片水印:"Image watermark",跟随鼠标:"Follow cursor",阴影与加载:"Shadow & loading",颜色与旋转:"Color & spin",前后缀与附加内容:"Affixes & addons",垂直排列:"Vertical",水平间距:"Horizontal spacing","基础用法 + 自定义列插槽":"Basic usage + custom column slot",拖拽上传:"Drag & drop",远程搜索:"Remote search",自定义插槽:"Custom slots",自定义底部操作区:"Custom footer actions",多选与标签折叠:"Multiple & collapsed tags",单选与过滤:"Single select & filter",单选与完整路径:"Single select & full path",懒加载子级:"Lazy-load children",居中容器:"Centered container","header / footer 区域":"Header / footer regions",水平分割线:"Horizontal divider",基础抽屉:"Basic drawer",底部操作区:"Footer actions",出现方向:"Placement",可调整尺寸:"Resizable",表单校验:"Form validation",标签在顶部:"Top label",表单项:"Form item",校验规则:"Validation rules",组合骨架:"Composite skeleton",列表骨架:"List skeleton",基础表格:"Basic table",多选与跨页选择:"Selection & cross-page",本地排序:"Local sorting",基础标签页:"Basic tabs",可关闭与新增:"Closable & addable",可关闭标签:"Closable tag",点击上传:"Click to upload","beforeUpload 校验 + 手动提交":"beforeUpload check + manual submit",卡片式图片上传:"Picture card upload",插槽内容:"Slot content",基础弹窗:"Basic modal",可拖动:"Draggable",长内容与加载态:"Long content & loading",基础分页器:"Basic pagination",自定义布局:"Custom layout",每页条数与跳页:"Page size & jumper",加载占位:"Loading placeholder"};function za(a){let n=null;return a.childNodes.forEach(t=>{t.nodeType===Node.TEXT_NODE&&(t.nodeValue??"").trim()&&(n=t)}),n}function Jp(){const{locale:a}=et(),n=Ot();function t(){if(typeof document>"u")return;const s=String(a.value).toLowerCase().startsWith("zh");document.querySelectorAll(".VPSidebar .VPSidebarItem .text").forEach(l=>{var f;const r=l.dataset.i18nSrc??(l.textContent??"").trim();l.dataset.i18nSrc=r;const d=((f=l.closest("a"))==null?void 0:f.getAttribute("href"))??"",p=d&&Zp[d]||wn[r];p&&(l.textContent=s?r:p)}),document.querySelectorAll(".vp-doc h2, .vp-doc h3").forEach(l=>{const r=za(l);if(!r)return;const d=l.dataset.i18nSrc??(r.nodeValue??"").trim();l.dataset.i18nSrc=d;const p=wn[d];p&&(r.nodeValue=s?d:p)}),document.querySelectorAll(".VPDocAsideOutline .outline-link, .VPLocalNavOutlineDropdown .outline-link").forEach(l=>{const r=za(l);if(!r)return;const d=l.dataset.i18nSrc??(r.nodeValue??"").trim();l.dataset.i18nSrc=d;const p=wn[d];p&&(r.nodeValue=s?d:p)})}function e(){Je(()=>{t(),typeof window<"u"&&window.requestAnimationFrame(t)})}We(e),Le([a,()=>n.path],e)}const Qp=".VPSwitchAppearance",ev=K({__name:"Layout",setup(a){const{Layout:n}=eo,{isDark:t}=Xn(),{theme:e}=Mn();Jp();function s(r){const d=e.value;gt(r?d==="cyber"?"cyber":"dark":d==="soft"?"soft":"light")}Le(t,r=>{s(r)});function l(r){const d=r.target,p=d==null?void 0:d.closest(Qp);if(!p)return;r.stopPropagation(),r.preventDefault();const f=!t.value;no(()=>{t.value=f,s(f)},to(r,p))}return We(()=>{ni(),el();const r=new URLSearchParams(window.location.search).get("lang");r&&Nt(r),t.value=la(e.value),document.addEventListener("click",l,!0)}),at(()=>{document.removeEventListener("click",l,!0)}),(r,d)=>(i(),c(D,null,[m(o(n),null,{"nav-bar-content-before":v(()=>[m(Ta)]),"nav-bar-content-after":v(()=>[m(Vp),m(jp),m(Hp)]),"nav-screen-content-before":v(()=>[m(Ta,{mobile:""})]),"aside-outline-after":v(()=>[m(Xp)]),_:1}),m(Up)],64))}}),tv=K({__name:"basic",setup(a){return(n,t)=>(i(),c(D,null,[m(o(me),{type:"primary"},{default:v(()=>[...t[0]||(t[0]=[$(" 主要按钮 ",-1)])]),_:1}),m(o(me),null,{default:v(()=>[...t[1]||(t[1]=[$("默认按钮",-1)])]),_:1}),m(o(me),{type:"text"},{default:v(()=>[...t[2]||(t[2]=[$(" 文字按钮 ",-1)])]),_:1})],64))}}),nv=Object.freeze(Object.defineProperty({__proto__:null,default:tv},Symbol.toStringTag,{value:"Module"})),av={style:{width:"100%"}},ov=K({__name:"block",setup(a){return(n,t)=>(i(),c("div",av,[m(o(me),{type:"primary",block:""},{default:v(()=>[...t[0]||(t[0]=[$(" 块级按钮 ",-1)])]),_:1})]))}}),lv=Object.freeze(Object.defineProperty({__proto__:null,default:ov},Symbol.toStringTag,{value:"Module"})),sv=K({__name:"icon",setup(a){return(n,t)=>(i(),c(D,null,[m(o(me),{type:"primary"},{icon:v(()=>[m(o(Ge),{name:"lucide:search",size:"16"})]),default:v(()=>[t[0]||(t[0]=$(" 搜索 ",-1))]),_:1}),m(o(me),{type:"default"},{icon:v(()=>[m(o(Ge),{name:"lucide:download",size:"16"})]),default:v(()=>[t[1]||(t[1]=$(" 下载 ",-1))]),_:1})],64))}}),iv=Object.freeze(Object.defineProperty({__proto__:null,default:sv},Symbol.toStringTag,{value:"Module"})),rv=K({__name:"size",setup(a){return(n,t)=>(i(),c(D,null,[m(o(me),{type:"primary",size:"small"},{default:v(()=>[...t[0]||(t[0]=[$(" Small ",-1)])]),_:1}),m(o(me),{type:"primary"},{default:v(()=>[...t[1]||(t[1]=[$(" Medium ",-1)])]),_:1}),m(o(me),{type:"primary",size:"large"},{default:v(()=>[...t[2]||(t[2]=[$(" Large ",-1)])]),_:1})],64))}}),uv=Object.freeze(Object.defineProperty({__proto__:null,default:rv},Symbol.toStringTag,{value:"Module"})),cv=K({__name:"status",setup(a){return(n,t)=>(i(),c(D,null,[m(o(me),{type:"primary",loading:""},{default:v(()=>[...t[0]||(t[0]=[$(" 加载中 ",-1)])]),_:1}),m(o(me),{type:"primary",disabled:""},{default:v(()=>[...t[1]||(t[1]=[$(" 禁用 ",-1)])]),_:1}),m(o(me),{type:"default",disabled:""},{default:v(()=>[...t[2]||(t[2]=[$(" 默认禁用 ",-1)])]),_:1})],64))}}),dv=Object.freeze(Object.defineProperty({__proto__:null,default:cv},Symbol.toStringTag,{value:"Module"})),pv=K({__name:"type",setup(a){return(n,t)=>(i(),c(D,null,[m(o(me),{type:"primary"},{default:v(()=>[...t[0]||(t[0]=[$(" Primary ",-1)])]),_:1}),m(o(me),{type:"success"},{default:v(()=>[...t[1]||(t[1]=[$(" Success ",-1)])]),_:1}),m(o(me),{type:"warning"},{default:v(()=>[...t[2]||(t[2]=[$(" Warning ",-1)])]),_:1}),m(o(me),{type:"danger"},{default:v(()=>[...t[3]||(t[3]=[$(" Danger ",-1)])]),_:1}),m(o(me),null,{default:v(()=>[...t[4]||(t[4]=[$("Default",-1)])]),_:1}),m(o(me),{type:"text"},{default:v(()=>[...t[5]||(t[5]=[$(" Text ",-1)])]),_:1})],64))}}),vv=Object.freeze(Object.defineProperty({__proto__:null,default:pv},Symbol.toStringTag,{value:"Module"})),fv={style:{display:"flex",gap:"16px","flex-wrap":"wrap",width:"100%"}},mv=K({__name:"basic",setup(a){return(n,t)=>(i(),c("div",fv,[m(o(zt),{title:"基础卡片",style:{flex:"1","min-width":"240px"}},{default:v(()=>[...t[0]||(t[0]=[$(" 卡片正文内容 ",-1)])]),_:1}),m(o(zt),{title:"带操作",subtitle:"最近 7 天",style:{flex:"1","min-width":"240px"}},{extra:v(()=>[m(o(me),{type:"text"},{default:v(()=>[...t[1]||(t[1]=[$(" 更多 ",-1)])]),_:1})]),footer:v(()=>[...t[2]||(t[2]=[$(" 更新时间：刚刚 ",-1)])]),default:v(()=>[t[3]||(t[3]=$(" 卡片正文内容 ",-1))]),_:1})]))}}),kv=Object.freeze(Object.defineProperty({__proto__:null,default:mv},Symbol.toStringTag,{value:"Module"})),gv={style:{display:"flex",gap:"16px","flex-wrap":"wrap",width:"100%"}},bv=K({__name:"variant",setup(a){return(n,t)=>(i(),c("div",gv,[m(o(zt),{title:"always",shadow:"always",style:{flex:"1","min-width":"200px"}},{default:v(()=>[...t[0]||(t[0]=[$(" 始终显示阴影 ",-1)])]),_:1}),m(o(zt),{title:"hover",shadow:"hover",hoverable:"",style:{flex:"1","min-width":"200px"}},{default:v(()=>[...t[1]||(t[1]=[$(" 悬停显示阴影 ",-1)])]),_:1}),m(o(zt),{title:"never",shadow:"never",style:{flex:"1","min-width":"200px"}},{default:v(()=>[...t[2]||(t[2]=[$(" 不显示阴影 ",-1)])]),_:1}),m(o(zt),{title:"loading",loading:"",style:{flex:"1","min-width":"200px"}},{default:v(()=>[...t[3]||(t[3]=[$(" 加载中 ",-1)])]),_:1})]))}}),hv=Object.freeze(Object.defineProperty({__proto__:null,default:bv},Symbol.toStringTag,{value:"Module"})),yv={class:"cascader-result"},_v=K({__name:"basic",setup(a){const n=[{value:"zhejiang",label:"浙江省",children:[{value:"hangzhou",label:"杭州市",children:[{value:"xihu",label:"西湖区"},{value:"binjiang",label:"滨江区"}]},{value:"ningbo",label:"宁波市"}]},{value:"jiangsu",label:"江苏省",children:[{value:"nanjing",label:"南京市",children:[{value:"jiangning",label:"江宁区"}]}]},{value:"guangdong",label:"广东省",disabled:!0}],t=_([]);return(e,s)=>(i(),N(o(ut),{direction:"vertical",size:"medium",fill:"",style:{width:"100%"}},{default:v(()=>[m(o(Ln),{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=l=>t.value=l),options:n,"check-strictly":!1,clearable:"",placeholder:"请选择省 / 市 / 区",style:{width:"320px"}},null,8,["modelValue"]),u("div",yv,[s[1]||(s[1]=$(" emitPath 默认开启，拿到的是完整路径：",-1)),u("code",null,z(JSON.stringify(t.value)),1)])]),_:1}))}}),xv=Object.freeze(Object.defineProperty({__proto__:null,default:_v},Symbol.toStringTag,{value:"Module"})),wv={key:0,class:"cascader-result"},$v=K({__name:"lazy",setup(a){const n={zhejiang:[{value:"hangzhou",label:"杭州市"},{value:"ningbo",label:"宁波市"}],hangzhou:[{value:"xihu",label:"西湖区"},{value:"binjiang",label:"滨江区"}],jiangsu:[{value:"nanjing",label:"南京市"}]},t=[{value:"zhejiang",label:"浙江省"},{value:"jiangsu",label:"江苏省"}],e=_([]),s=_([]);function l(r,d){return s.value=[...s.value,`加载 ${d.join(" / ")} 的子级`],new Promise(p=>{setTimeout(()=>p(n[String(r.value)]??[]),600)})}return(r,d)=>(i(),N(o(ut),{direction:"vertical",size:"medium",fill:"",style:{width:"100%"}},{default:v(()=>[m(o(Ln),{modelValue:e.value,"onUpdate:modelValue":d[0]||(d[0]=p=>e.value=p),options:t,"load-data":l,"check-strictly":!1,clearable:"",placeholder:"点开才会请求子级",style:{width:"320px"},onLoad:d[1]||(d[1]=({path:p})=>s.value=[...s.value,`${p.join(" / ")} 加载完成`])},null,8,["modelValue"]),s.value.length?(i(),c("div",wv,[(i(!0),c(D,null,pe(s.value,(p,f)=>(i(),c("div",{key:f},z(p),1))),128))])):S("",!0)]),_:1}))}}),Sv=Object.freeze(Object.defineProperty({__proto__:null,default:$v},Symbol.toStringTag,{value:"Module"})),Kv={class:"cascader-result"},Cv=K({__name:"multiple",setup(a){const n=[{value:"frontend",label:"前端",children:[{value:"vue",label:"Vue"},{value:"react",label:"React"}]},{value:"backend",label:"后端",children:[{value:"node",label:"Node.js"},{value:"go",label:"Go"}]},{value:"design",label:"设计",children:[{value:"ui",label:"界面设计"}]}],t=_([["frontend","vue"],["design","ui"]]),e=_(!0),s=k(()=>" / ");return(l,r)=>(i(),N(o(ut),{direction:"vertical",size:"medium",fill:"",style:{width:"100%"}},{default:v(()=>[m(o(Ln),{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=d=>t.value=d),options:n,"show-all-levels":e.value,separator:s.value,multiple:"",clearable:"",placeholder:"请选择技术栈（可多选）",style:{width:"420px"}},null,8,["modelValue","show-all-levels","separator"]),u("div",Kv," 已选 "+z(t.value.length)+" 项，勾选后浮层保持展开，标签可单独删除。 ",1)]),_:1}))}}),Tv=Object.freeze(Object.defineProperty({__proto__:null,default:Cv},Symbol.toStringTag,{value:"Module"})),zv={class:"bar"},Pv={class:"bar__group"},Lv=["onClick"],Bv={class:"bar"},Mv={class:"bar__group"},Vv=["onClick"],Iv={class:"bar__check"},Ov=K({__name:"basic",setup(a){const n=[{key:"small",label:"Small",hint:"640"},{key:"medium",label:"Medium",hint:"960"},{key:"large",label:"Large",hint:"1200"},{key:"full",label:"Full",hint:"100%"}],t=["none","small","medium","large"],e=_("medium"),s=_("large"),l=_(!0);return(r,d)=>(i(),c(D,null,[u("div",zv,[d[1]||(d[1]=u("span",{class:"bar__label"},"宽度档位",-1)),u("div",Pv,[(i(),c(D,null,pe(n,p=>u("button",{key:p.key,type:"button",class:g(["bar__btn",{"is-active":e.value===p.key}]),onClick:f=>e.value=p.key},[$(z(p.label)+" ",1),u("em",null,z(p.hint),1)],10,Lv)),64))])]),u("div",Bv,[d[3]||(d[3]=u("span",{class:"bar__label"},"内边距",-1)),u("div",Mv,[(i(),c(D,null,pe(t,p=>u("button",{key:p,type:"button",class:g(["bar__btn",{"is-active":s.value===p}]),onClick:f=>s.value=p},z(p),11,Vv)),64))]),u("label",Iv,[pt(u("input",{"onUpdate:modelValue":d[0]||(d[0]=p=>l.value=p),type:"checkbox"},null,512),[[go,l.value]]),d[2]||(d[2]=$(" 显示边框 ",-1))])]),m(o(ta),{size:e.value,padding:s.value,bordered:l.value,style:{"margin-top":"12px"}},{default:v(()=>[...d[4]||(d[4]=[u("h3",null,"发布流程看板",-1),u("p",null," 切换上方档位即可实时改变最大宽度与内边距。容器把主内容限制在预设宽度并居中， 长文阅读时两侧留白更舒适，也更易于在宽屏上聚焦。 ",-1)])]),_:1},8,["size","padding","bordered"])],64))}}),Ev=re(Ov,[["__scopeId","data-v-2b47453c"]]),Av=Object.freeze(Object.defineProperty({__proto__:null,default:Ev},Symbol.toStringTag,{value:"Module"})),Rv=K({__name:"sections",setup(a){return(n,t)=>(i(),N(o(ta),{direction:"column",padding:"medium",bordered:""},{header:v(()=>[...t[0]||(t[0]=[u("div",{class:"bar"},[u("strong",null,"周报 · 第 38 期"),u("span",{class:"tag"},"已归档")],-1)])]),footer:v(()=>[...t[1]||(t[1]=[u("div",{class:"bar bar--footer"},[u("span",null,"共 12 条改动"),u("span",null,"2026-09-17")],-1)])]),default:v(()=>[t[2]||(t[2]=u("div",{class:"body"},[u("p",null," 本周完成设计 token 重构，新增 4 套主题下统一的圆角与间距变量， 组件层不再出现硬编码尺寸。 ")],-1))]),_:1}))}}),jv=re(Rv,[["__scopeId","data-v-88acace9"]]),Dv=Object.freeze(Object.defineProperty({__proto__:null,default:jv},Symbol.toStringTag,{value:"Module"})),Fv={style:{width:"100%"}},Nv=K({__name:"basic",setup(a){return(n,t)=>(i(),c("div",Fv,[t[2]||(t[2]=u("p",null,"第一段内容",-1)),m(o(Lt)),t[3]||(t[3]=u("p",null,"第二段内容",-1)),m(o(Lt),null,{default:v(()=>[...t[0]||(t[0]=[$("分组标题",-1)])]),_:1}),t[4]||(t[4]=u("p",null,"第三段内容",-1)),m(o(Lt),{"content-position":"left","border-style":"dashed"},{default:v(()=>[...t[1]||(t[1]=[$(" 左侧标题 ",-1)])]),_:1}),t[5]||(t[5]=u("p",null,"第四段内容",-1))]))}}),Hv=Object.freeze(Object.defineProperty({__proto__:null,default:Nv},Symbol.toStringTag,{value:"Module"})),Uv=K({__name:"vertical",setup(a){return(n,t)=>(i(),N(o(ut),{size:"medium"},{default:v(()=>[t[0]||(t[0]=u("span",null,"编辑",-1)),m(o(Lt),{direction:"vertical"}),t[1]||(t[1]=u("span",null,"复制",-1)),m(o(Lt),{direction:"vertical",accent:""}),t[2]||(t[2]=u("span",null,"删除",-1))]),_:1}))}}),Wv=Object.freeze(Object.defineProperty({__proto__:null,default:Uv},Symbol.toStringTag,{value:"Module"})),qv=K({__name:"basic",setup(a){const n=_(!1);return(t,e)=>(i(),c(D,null,[m(o(me),{type:"primary",onClick:e[0]||(e[0]=s=>n.value=!0)},{default:v(()=>[...e[2]||(e[2]=[$(" 打开抽屉 ",-1)])]),_:1}),m(o(un),{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=s=>n.value=s),title:"发布配置",subtitle:"右侧滑出，内容较长时主体区域内部滚动",size:"420px",footer:""},{default:v(()=>[...e[3]||(e[3]=[u("p",{class:"drawer-basic-text"}," 抽屉从屏幕右侧滑出，不打断当前页面上下文，适合承载表单、详情、设置这一类 「需要来回对照主页面」的内容。 ",-1),u("p",{class:"drawer-basic-text"},[$(" 宽度默认是视口宽度的 30%，也可以像这里一样写死 "),u("code",null,"420px"),$("； 传入数字则按 px 处理。 ")],-1),u("p",{class:"drawer-basic-text"},[$(" 底部操作区由 "),u("code",null,"footer"),$(" 打开："),u("strong",null,"取消"),$("会关闭抽屉， "),u("strong",null,"确定"),$("只抛出 "),u("code",null,"confirm"),$(" 事件，方便接异步提交。 ")],-1)])]),_:1},8,["modelValue"])],64))}}),Gv=Object.freeze(Object.defineProperty({__proto__:null,default:qv},Symbol.toStringTag,{value:"Module"})),Yv={class:"drawer-footer-demo"},Xv=K({__name:"footer",setup(a){const n=_(!1),t=_(""),e=_(""),s=_(!1);async function l(){s.value=!0,await new Promise(d=>setTimeout(d,600)),s.value=!1,n.value=!1,t.value="",e.value=""}function r(){n.value=!1}return(d,p)=>(i(),c(D,null,[m(o(me),{type:"primary",onClick:p[0]||(p[0]=f=>n.value=!0)},{default:v(()=>[...p[4]||(p[4]=[$(" 填写发布信息 ",-1)])]),_:1}),m(o(un),{modelValue:n.value,"onUpdate:modelValue":p[3]||(p[3]=f=>n.value=f),title:"发布信息",size:"420px",footer:""},{footer:v(()=>[m(o(me),{disabled:s.value,onClick:r},{default:v(()=>[...p[5]||(p[5]=[$(" 取消 ",-1)])]),_:1},8,["disabled"]),m(o(me),{type:"primary",loading:s.value,onClick:l},{default:v(()=>[...p[6]||(p[6]=[$(" 提交 ",-1)])]),_:1},8,["loading"])]),default:v(()=>[u("div",Yv,[m(o(Ye),{modelValue:t.value,"onUpdate:modelValue":p[1]||(p[1]=f=>t.value=f),block:"",placeholder:"版本号，如 0.3.0"},null,8,["modelValue"]),m(o(Ye),{modelValue:e.value,"onUpdate:modelValue":p[2]||(p[2]=f=>e.value=f),block:"",placeholder:"发布说明（可留空）"},null,8,["modelValue"])])]),_:1},8,["modelValue"])],64))}}),Zv=Object.freeze(Object.defineProperty({__proto__:null,default:Xv},Symbol.toStringTag,{value:"Module"})),Jv=K({__name:"placement",setup(a){const n=_(!1),t=_("right"),e=[{value:"right",label:"右侧"},{value:"left",label:"左侧"},{value:"top",label:"顶部"},{value:"bottom",label:"底部"}];function s(l){t.value=l,n.value=!0}return(l,r)=>(i(),c(D,null,[m(o(ut),null,{default:v(()=>[(i(),c(D,null,pe(e,d=>m(o(me),{key:d.value,onClick:p=>s(d.value)},{default:v(()=>[$(z(d.label),1)]),_:2},1032,["onClick"])),64))]),_:1}),m(o(un),{modelValue:n.value,"onUpdate:modelValue":r[0]||(r[0]=d=>n.value=d),placement:t.value,title:`从${t.value==="top"||t.value==="bottom"?"上下":"左右"}滑出`,size:t.value==="top"||t.value==="bottom"?"240px":"360px"},{default:v(()=>[...r[1]||(r[1]=[u("p",{class:"drawer-placement-text"},[u("code",null,"placement"),$(" 决定出现方向：左右方向时 "),u("code",null,"size"),$(" 表示宽度，上下方向时表示高度。切换方向后尺寸会自动回到推导值， 避免上一次拖动调整出的 px 值把抽屉撑出屏幕。 ")],-1)])]),_:1},8,["modelValue","placement","title","size"])],64))}}),Qv=Object.freeze(Object.defineProperty({__proto__:null,default:Jv},Symbol.toStringTag,{value:"Module"})),ef={class:"drawer-resizable-hint"},tf=K({__name:"resizable",setup(a){const n=_(!1),t=_(0),e=_(null);function s(l){t.value=l}return(l,r)=>(i(),c(D,null,[m(o(ut),null,{default:v(()=>[m(o(me),{type:"primary",onClick:r[0]||(r[0]=d=>n.value=!0)},{default:v(()=>[...r[4]||(r[4]=[$(" 打开可调整尺寸的抽屉 ",-1)])]),_:1}),u("span",ef," 当前宽度："+z(t.value>0?`${t.value}px`:"未调整"),1)]),_:1}),m(o(un),{ref_key:"drawerRef",ref:e,modelValue:n.value,"onUpdate:modelValue":r[3]||(r[3]=d=>n.value=d),title:"拖动内侧边缘调整宽度",size:"360px",resizable:"","min-size":280,"max-size":640,footer:"",onResize:s},{footer:v(()=>[m(o(me),{onClick:r[1]||(r[1]=d=>{var p;return(p=e.value)==null?void 0:p.reset()})},{default:v(()=>[...r[5]||(r[5]=[$(" 恢复默认宽度 ",-1)])]),_:1}),m(o(me),{type:"primary",onClick:r[2]||(r[2]=d=>n.value=!1)},{default:v(()=>[...r[6]||(r[6]=[$(" 完成 ",-1)])]),_:1})]),default:v(()=>[r[7]||(r[7]=u("p",{class:"drawer-resizable-text"},[$(" 打开 "),u("code",null,"resizable"),$(" 后，抽屉内侧会出现一条 6px 宽的拖动手柄 （hover 时高亮）。拖动过程直接写内联宽度，不触发组件重渲染， 松手才抛出 "),u("code",null,"resize"),$(" 事件。 ")],-1)),r[8]||(r[8]=u("p",{class:"drawer-resizable-text"},[$(" 尺寸被限制在 "),u("code",null,"minSize"),$(" 与 "),u("code",null,"maxSize"),$(" 之间； 调用实例方法 "),u("code",null,"reset()"),$(" 可恢复成 "),u("code",null,"size"),$(" 推导值。 ")],-1))]),_:1},8,["modelValue"])],64))}}),nf=Object.freeze(Object.defineProperty({__proto__:null,default:tf},Symbol.toStringTag,{value:"Module"})),af={style:{width:"100%"}},of={key:0,style:{color:"var(--kk-text-secondary)","font-size":"13px"}},lf=K({__name:"basic",setup(a){const n=_(),t=on({name:"",email:""}),e=_(""),s={name:[{required:!0,message:"请输入名称",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}]};async function l(){var p;const d=await((p=n.value)==null?void 0:p.validate());e.value=d?"校验通过":"校验未通过"}function r(){var d;(d=n.value)==null||d.resetFields(),e.value=""}return(d,p)=>(i(),c("div",af,[m(o(zn),{ref_key:"formRef",ref:n,model:t,rules:s,"label-width":"72px"},{default:v(()=>[m(o(Ft),{prop:"name",label:"名称"},{default:v(()=>[m(o(Ye),{modelValue:t.name,"onUpdate:modelValue":p[0]||(p[0]=f=>t.name=f),placeholder:"请输入名称",clearable:""},null,8,["modelValue"])]),_:1}),m(o(Ft),{prop:"email",label:"邮箱"},{default:v(()=>[m(o(Ye),{modelValue:t.email,"onUpdate:modelValue":p[1]||(p[1]=f=>t.email=f),placeholder:"请输入邮箱"},null,8,["modelValue"])]),_:1}),m(o(Ft),null,{default:v(()=>[m(o(ut),null,{default:v(()=>[m(o(me),{type:"primary","native-type":"submit",onClick:l},{default:v(()=>[...p[2]||(p[2]=[$(" 提交 ",-1)])]),_:1}),m(o(me),{onClick:r},{default:v(()=>[...p[3]||(p[3]=[$(" 重置 ",-1)])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"]),e.value?(i(),c("p",of,z(e.value),1)):S("",!0)]))}}),sf=Object.freeze(Object.defineProperty({__proto__:null,default:lf},Symbol.toStringTag,{value:"Module"})),rf=K({__name:"label-position",setup(a){const n=on({name:""});return(t,e)=>(i(),N(o(zn),{model:n,"label-position":"top",style:{width:"100%"}},{default:v(()=>[m(o(Ft),{prop:"name",label:"名称",required:""},{default:v(()=>[m(o(Ye),{modelValue:n.name,"onUpdate:modelValue":e[0]||(e[0]=s=>n.name=s),placeholder:"标签在顶部"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]))}}),uf=Object.freeze(Object.defineProperty({__proto__:null,default:rf},Symbol.toStringTag,{value:"Module"})),cf=K({__name:"rules",setup(a){const n=on({username:""}),t={username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:12,message:"长度需为 3-12 个字符",trigger:"blur"},{pattern:/^[a-zA-Z0-9_]+$/,message:"仅支持字母、数字与下划线",trigger:"blur"}]};return(e,s)=>(i(),N(o(zn),{model:n,rules:t,"label-width":"80px",style:{width:"100%"}},{default:v(()=>[m(o(Ft),{prop:"username",label:"用户名"},{default:v(()=>[m(o(Ye),{modelValue:n.username,"onUpdate:modelValue":s[0]||(s[0]=l=>n.username=l),placeholder:"3-12 位字母数字下划线"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]))}}),df=Object.freeze(Object.defineProperty({__proto__:null,default:cf},Symbol.toStringTag,{value:"Module"})),pf=K({__name:"basic",setup(a){return(n,t)=>(i(),c(D,null,[m(o(Ge),{name:"lucide:home"}),m(o(Ge),{name:"lucide:heart"}),m(o(Ge),{name:"lucide:settings"})],64))}}),vf=Object.freeze(Object.defineProperty({__proto__:null,default:pf},Symbol.toStringTag,{value:"Module"})),ff=K({__name:"color",setup(a){return(n,t)=>(i(),c(D,null,[m(o(Ge),{name:"lucide:heart",color:"#EF4444",size:"24"}),m(o(Ge),{name:"lucide:check-circle",color:"#16A34A",size:"24"}),m(o(Ge),{name:"lucide:bell",color:"#F59E0B",size:"24"}),m(o(Ge),{name:"lucide:loader",spin:"",size:"24"})],64))}}),mf=Object.freeze(Object.defineProperty({__proto__:null,default:ff},Symbol.toStringTag,{value:"Module"})),kf=K({__name:"size",setup(a){return(n,t)=>(i(),c(D,null,[m(o(Ge),{name:"lucide:star",size:"small"}),m(o(Ge),{name:"lucide:star"}),m(o(Ge),{name:"lucide:star",size:"large"}),m(o(Ge),{name:"lucide:star",size:32}),m(o(Ge),{name:"lucide:star",size:"2em"})],64))}}),gf=Object.freeze(Object.defineProperty({__proto__:null,default:kf},Symbol.toStringTag,{value:"Module"})),bf=K({__name:"affix",setup(a){const n=_("");return(t,e)=>(i(),N(o(ut),{direction:"vertical",size:"medium",fill:"",style:{width:"100%"}},{default:v(()=>[m(o(Ye),{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=s=>n.value=s),placeholder:"搜索内容"},{prefix:v(()=>[m(o(Ge),{name:"lucide:search",size:"16"})]),_:1},8,["modelValue"]),m(o(Ye),{placeholder:"金额"},{suffix:v(()=>[...e[2]||(e[2]=[$(" 元 ",-1)])]),_:1}),m(o(Ye),{placeholder:"站点"},{prepend:v(()=>[...e[3]||(e[3]=[$(" https:// ",-1)])]),_:1}),m(o(Ye),{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=s=>n.value=s),type:"password","show-password":"",placeholder:"密码"},null,8,["modelValue"])]),_:1}))}}),hf=Object.freeze(Object.defineProperty({__proto__:null,default:bf},Symbol.toStringTag,{value:"Module"})),yf=K({__name:"basic",setup(a){const n=_("");return(t,e)=>(i(),N(o(ut),{direction:"vertical",size:"medium",fill:"",style:{width:"100%"}},{default:v(()=>[m(o(Ye),{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=s=>n.value=s),placeholder:"基础输入框",clearable:""},null,8,["modelValue"]),m(o(Ye),{placeholder:"禁用状态",disabled:""}),m(o(Ye),{"model-value":"只读内容",readonly:""})]),_:1}))}}),_f=Object.freeze(Object.defineProperty({__proto__:null,default:yf},Symbol.toStringTag,{value:"Module"})),xf=K({__name:"size",setup(a){return(n,t)=>(i(),N(o(ut),{direction:"vertical",size:"medium",fill:"",style:{width:"100%"}},{default:v(()=>[m(o(Ye),{size:"small",placeholder:"small"}),m(o(Ye),{placeholder:"medium"}),m(o(Ye),{size:"large",placeholder:"large"}),m(o(Ye),{invalid:"","error-message":"该字段必填",placeholder:"错误态"}),m(o(Ye),{block:"",placeholder:"块级宽度"})]),_:1}))}}),wf=Object.freeze(Object.defineProperty({__proto__:null,default:xf},Symbol.toStringTag,{value:"Module"})),$f={class:"nav"},Sf=["onClick"],Kf={class:"pane__value"},Cf={class:"aside-pane"},Tf={class:"pane__value"},zf=K({__name:"aside",setup(a){const n=[{key:"realtime",label:"实时概览",visitors:"12,480",online:"328"},{key:"traffic",label:"流量分析",visitors:"86,932",online:"512"},{key:"funnel",label:"转化漏斗",visitors:"4,210",online:"96"}],t=_("realtime"),e=k(()=>n.find(s=>s.key===t.value)??n[0]);return(s,l)=>(i(),N(o(wt),{style:{height:"340px",border:"1px solid var(--kk-border-color)","border-radius":"var(--kk-radius-lg)",overflow:"hidden"}},{default:v(()=>[m(o(Bn),{bordered:""},{left:v(()=>[...l[0]||(l[0]=[u("strong",null,"数据看板",-1)])]),right:v(()=>[...l[1]||(l[1]=[u("span",{class:"muted"},"2026-09-18",-1)])]),_:1}),m(o(wt),null,{default:v(()=>[m(o(nn),{width:160,bordered:""},{default:v(()=>[u("div",$f,[(i(),c(D,null,pe(n,r=>u("button",{key:r.key,type:"button",class:g(["nav-item",{"is-active":t.value===r.key}]),onClick:d=>t.value=r.key},z(r.label),11,Sf)),64))])]),_:1}),m(o(an),{class:"main"},{default:v(()=>[u("h3",null,z(e.value.label),1),m(o(wt),{style:{height:"170px",gap:"12px",background:"transparent"}},{default:v(()=>[m(o(an),{class:"pane"},{default:v(()=>[l[2]||(l[2]=u("span",{class:"pane__label"},"今日访问",-1)),u("strong",Kf,z(e.value.visitors),1)]),_:1}),m(o(nn),{position:"right",width:150,bordered:""},{default:v(()=>[u("div",Cf,[l[3]||(l[3]=u("span",{class:"pane__label"},"实时在线",-1)),u("strong",Tf,z(e.value.online),1)])]),_:1})]),_:1})]),_:1})]),_:1}),m(o(aa),{bordered:""},{default:v(()=>[...l[4]||(l[4]=[u("span",{class:"muted"},"侧边栏也可置于右侧，适配主内容 + 辅助信息栏的版式",-1)])]),_:1})]),_:1}))}}),Pf=re(zf,[["__scopeId","data-v-013e11e8"]]),Lf=Object.freeze(Object.defineProperty({__proto__:null,default:Pf},Symbol.toStringTag,{value:"Module"})),Bf={class:"nav"},Mf=["onClick"],Vf=K({__name:"basic",setup(a){const n=[{key:"overview",label:"概览",title:"概览",desc:"这里是页面的主要内容区域，超出高度时内部滚动。点击左侧导航可切换内容。"},{key:"components",label:"组件",title:"组件",desc:"Layout 由 Header / Sider / Content / Footer 四个区块组成，可自由组合与嵌套。"},{key:"theme",label:"主题",title:"主题",desc:"所有区块的颜色都来自语义 token，四套主题下无需额外覆盖即可自适应。"}],t=_("overview"),e=k(()=>n.find(s=>s.key===t.value)??n[0]);return(s,l)=>(i(),N(o(wt),{style:{height:"320px",border:"1px solid var(--kk-border-color)","border-radius":"var(--kk-radius-lg)",overflow:"hidden"}},{default:v(()=>[m(o(Bn),{bordered:""},{left:v(()=>[...l[0]||(l[0]=[u("strong",null,"KK 控制台",-1)])]),right:v(()=>[...l[1]||(l[1]=[u("span",{class:"muted"},"v0.2.0",-1)])]),_:1}),m(o(wt),null,{default:v(()=>[m(o(nn),{width:180,bordered:""},{default:v(()=>[u("div",Bf,[(i(),c(D,null,pe(n,r=>u("button",{key:r.key,type:"button",class:g(["nav-item",{"is-active":t.value===r.key}]),onClick:d=>t.value=r.key},z(r.label),11,Mf)),64))])]),_:1}),m(o(an),null,{default:v(()=>[u("h3",null,z(e.value.title),1),u("p",null,z(e.value.desc),1)]),_:1})]),_:1}),m(o(aa),{bordered:""},{default:v(()=>[...l[2]||(l[2]=[u("span",{class:"muted"},"柔光几何 · 设计系统",-1)])]),_:1})]),_:1}))}}),If=re(Vf,[["__scopeId","data-v-956432bb"]]),Of=Object.freeze(Object.defineProperty({__proto__:null,default:If},Symbol.toStringTag,{value:"Module"})),Ef=K({__name:"grid",setup(a){return(n,t)=>(i(),c(D,null,[m(o(Un),{gutter:16},{default:v(()=>[m(o(Tt),{span:12,md:{span:8}},{default:v(()=>[...t[0]||(t[0]=[u("div",{class:"cell"},"span 12 / md 8",-1)])]),_:1}),m(o(Tt),{span:12,md:{span:8}},{default:v(()=>[...t[1]||(t[1]=[u("div",{class:"cell"},"span 12 / md 8",-1)])]),_:1}),m(o(Tt),{span:24,md:{span:8}},{default:v(()=>[...t[2]||(t[2]=[u("div",{class:"cell"},"span 24 / md 8",-1)])]),_:1})]),_:1}),m(o(Un),{gutter:[16,24],style:{"margin-top":"24px"}},{default:v(()=>[m(o(Tt),{span:6},{default:v(()=>[...t[3]||(t[3]=[u("div",{class:"cell cell--alt"},"6",-1)])]),_:1}),m(o(Tt),{span:6,offset:6},{default:v(()=>[...t[4]||(t[4]=[u("div",{class:"cell cell--alt"},"offset 6",-1)])]),_:1}),m(o(Tt),{span:6},{default:v(()=>[...t[5]||(t[5]=[u("div",{class:"cell cell--alt"},"6",-1)])]),_:1})]),_:1})],64))}}),Af=re(Ef,[["__scopeId","data-v-e82ee62e"]]),Rf=Object.freeze(Object.defineProperty({__proto__:null,default:Af},Symbol.toStringTag,{value:"Module"})),jf={class:"logo"},Df={class:"nav"},Ff=["title","onClick"],Nf=K({__name:"sider",setup(a){const n=_(!1),t=["指南","组件","主题"],e=_("指南");return(s,l)=>(i(),N(o(wt),{style:{height:"300px",border:"1px solid var(--kk-border-color)","border-radius":"var(--kk-radius-lg)",overflow:"hidden"}},{default:v(()=>[m(o(Bn),{bordered:""},{left:v(()=>[...l[2]||(l[2]=[u("strong",null,"文档站",-1)])]),right:v(()=>[m(o(me),{size:"small",onClick:l[0]||(l[0]=r=>n.value=!n.value)},{default:v(()=>[$(z(n.value?"展开侧栏":"收起侧栏"),1)]),_:1})]),_:1}),m(o(wt),null,{default:v(()=>[m(o(nn),{collapsed:n.value,"onUpdate:collapsed":l[1]||(l[1]=r=>n.value=r),width:200,"collapsed-width":56,collapsible:"",bordered:""},{logo:v(()=>[u("span",jf,z(n.value?"K":"KK UI"),1)]),default:v(()=>[u("div",Df,[(i(),c(D,null,pe(t,r=>u("button",{key:r,type:"button",class:g(["nav-item",{"is-active":e.value===r}]),title:r,onClick:d=>e.value=r},[l[3]||(l[3]=u("span",{class:"nav-dot"},null,-1)),pt(u("span",{class:"nav-text"},z(r),513),[[Vt,!n.value]])],10,Ff)),64))])]),_:1},8,["collapsed"]),m(o(an),null,{default:v(()=>[u("p",null,[l[4]||(l[4]=$(" 当前选中：",-1)),u("strong",null,z(e.value),1),$(" 。侧边栏收起后宽度收窄为 "+z(n.value?56:200)+"px，点击导航可切换内容。 ",1)])]),_:1})]),_:1})]),_:1}))}}),Hf=re(Nf,[["__scopeId","data-v-50b0377b"]]),Uf=Object.freeze(Object.defineProperty({__proto__:null,default:Hf},Symbol.toStringTag,{value:"Module"})),Wf={class:"demo-actions"},qf=K({__name:"advanced",setup(a){const n=_(!1),t=_(!1),e=_(null),s=["弹窗的 max-height 取「组件 token」与「视口推导值」的较小者，长内容交给主体区域内部滚动，不会把弹窗顶出屏幕。","主体区域带 overscroll-behavior: contain，滚到底时不会把滚动继续传给背后的页面。","首次打开后 DOM 会保留，仅切换可见性，二次打开不重新挂载，省下组件初始化与节点创建的开销。","需要彻底销毁时打开 destroyOnClose，关闭动画结束后节点会被移除。","loading 期间主体区域显示遮罩并屏蔽指针事件，避免在加载中误操作。","通过 ref 可以拿到 open / close / reset，适合在事件回调里程序化控制。"];function l(){t.value=!0,n.value=!0,setTimeout(()=>t.value=!1,1400)}return(r,d)=>(i(),c(D,null,[u("div",Wf,[m(o(me),{onClick:l},{default:v(()=>[...d[3]||(d[3]=[$(" 长内容 + 加载态 ",-1)])]),_:1}),m(o(me),{onClick:d[0]||(d[0]=p=>{var f;return(f=e.value)==null?void 0:f.open()})},{default:v(()=>[...d[4]||(d[4]=[$(" 用 ref 打开 ",-1)])]),_:1})]),m(o(Wt),{ref_key:"modalRef",ref:e,modelValue:n.value,"onUpdate:modelValue":d[1]||(d[1]=p=>n.value=p),title:"组件说明",subtitle:"主体区域内部滚动",loading:t.value,"max-height":"60vh",footer:"",onConfirm:d[2]||(d[2]=p=>n.value=!1)},{default:v(()=>[(i(),c(D,null,pe(s,(p,f)=>u("p",{key:f,class:"demo-para"},z(p),1)),64))]),_:1},8,["modelValue","loading"])],64))}}),Gf=Object.freeze(Object.defineProperty({__proto__:null,default:qf},Symbol.toStringTag,{value:"Module"})),Yf=K({__name:"basic",setup(a){const n=_(!1);return(t,e)=>(i(),c(D,null,[m(o(me),{type:"primary",onClick:e[0]||(e[0]=s=>n.value=!0)},{default:v(()=>[...e[2]||(e[2]=[$(" 打开弹窗 ",-1)])]),_:1}),m(o(Wt),{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=s=>n.value=s),title:"发布新版本",subtitle:"v0.2.0 · 预计影响 1 个包"},{default:v(()=>[...e[3]||(e[3]=[u("div",{class:"demo-text"},[u("p",null,[$(" 确认后将构建产物并推送到 npm，当前分支为 "),u("code",null,"main"),$("。发布过程不可中断，完成后会同步生成 CHANGELOG。 ")])],-1)])]),_:1},8,["modelValue"])],64))}}),Xf=Object.freeze(Object.defineProperty({__proto__:null,default:Yf},Symbol.toStringTag,{value:"Module"})),Zf={class:"demo-drag"},Jf=K({__name:"draggable",setup(a){const n=_(!1),t=_({x:0,y:0});function e(s){t.value=s}return(s,l)=>(i(),c(D,null,[m(o(me),{onClick:l[0]||(l[0]=r=>n.value=!0)},{default:v(()=>[...l[2]||(l[2]=[$(" 可拖动弹窗 ",-1)])]),_:1}),m(o(Wt),{modelValue:n.value,"onUpdate:modelValue":l[1]||(l[1]=r=>n.value=r),title:"拖动我",subtitle:"按住标题栏拖动，至少保留 56px 在视口内",draggable:!0,onDrag:e},{default:v(()=>[u("div",Zf,[u("p",null,"当前位移：x "+z(t.value.x.toFixed(0))+"px / y "+z(t.value.y.toFixed(0))+"px",1),l[3]||(l[3]=u("p",null,[$("位移只写进 "),u("code",null,"transform"),$("，拖动过程中不会触发组件重渲染。")],-1))])]),_:1},8,["modelValue"])],64))}}),Qf=Object.freeze(Object.defineProperty({__proto__:null,default:Jf},Symbol.toStringTag,{value:"Module"})),em=K({__name:"footer",setup(a){const n=_(!1),t=_(!1);function e(l){window.dispatchEvent(new CustomEvent("kk-toast",{detail:l}))}function s(){t.value=!0,e("已确认，正在执行…"),setTimeout(()=>{t.value=!1,n.value=!1,e("执行完成")},1200)}return(l,r)=>(i(),c(D,null,[m(o(me),{type:"primary",onClick:r[0]||(r[0]=d=>n.value=!0)},{default:v(()=>[...r[3]||(r[3]=[$(" 二次确认 ",-1)])]),_:1}),m(o(Wt),{modelValue:n.value,"onUpdate:modelValue":r[1]||(r[1]=d=>n.value=d),title:"删除这条记录？",subtitle:"删除后不可恢复",footer:"","ok-text":"删除","ok-loading":t.value,onConfirm:s,onCancel:r[2]||(r[2]=d=>e("已取消"))},{default:v(()=>[...r[4]||(r[4]=[u("p",{class:"demo-confirm"},[$(" 默认底部按钮只抛出 "),u("code",null,"confirm"),$(" / "),u("code",null,"cancel"),$(" 事件，是否关闭弹窗由业务决定 —— 这样异步提交时可以一直保持打开状态。 ")],-1)])]),_:1},8,["modelValue","ok-loading"])],64))}}),tm=Object.freeze(Object.defineProperty({__proto__:null,default:em},Symbol.toStringTag,{value:"Module"})),nm={class:"demo-head"},am={class:"demo-foot"},om=K({__name:"slots",setup(a){const n=_(!1);return(t,e)=>(i(),c(D,null,[m(o(me),{onClick:e[0]||(e[0]=s=>n.value=!0)},{default:v(()=>[...e[4]||(e[4]=[$(" 完全自定义 ",-1)])]),_:1}),m(o(Wt),{modelValue:n.value,"onUpdate:modelValue":e[3]||(e[3]=s=>n.value=s),"show-close":!1,bordered:""},{header:v(()=>[u("div",nm,[m(o(Ge),{name:"lucide:wand-sparkles",size:"18"}),e[6]||(e[6]=u("span",null,"自定义头部",-1)),m(o(tt),{type:"primary",size:"small"},{default:v(()=>[...e[5]||(e[5]=[$(" Beta ",-1)])]),_:1})])]),footer:v(()=>[u("div",am,[m(o(me),{size:"small",onClick:e[1]||(e[1]=s=>n.value=!1)},{default:v(()=>[...e[7]||(e[7]=[$(" 稍后再说 ",-1)])]),_:1}),m(o(me),{size:"small",type:"primary",onClick:e[2]||(e[2]=s=>n.value=!1)},{default:v(()=>[...e[8]||(e[8]=[$(" 好的 ",-1)])]),_:1})])]),default:v(()=>[e[9]||(e[9]=u("p",{class:"demo-slot-body"}," 头部、底部、关闭按钮都开放了插槽，默认样式只负责留白与分割线， 布局完全可以自己接。 ",-1))]),_:1},8,["modelValue"])],64))}}),lm=Object.freeze(Object.defineProperty({__proto__:null,default:om},Symbol.toStringTag,{value:"Module"})),sm=K({__name:"basic",setup(a){const n=_(1);return(t,e)=>(i(),N(o(pn),{"current-page":n.value,"onUpdate:currentPage":e[0]||(e[0]=s=>n.value=s),total:200,"page-size":10},null,8,["current-page"]))}}),im=Object.freeze(Object.defineProperty({__proto__:null,default:sm},Symbol.toStringTag,{value:"Module"})),rm=K({__name:"layout",setup(a){const n=_(3),t=_(10);return(e,s)=>(i(),N(o(pn),{"current-page":n.value,"onUpdate:currentPage":s[0]||(s[0]=l=>n.value=l),"page-size":t.value,"onUpdate:pageSize":s[1]||(s[1]=l=>t.value=l),total:500,"page-sizes":[10,20,50],layout:"prev, pager, next, ->, sizes, jumper, total"},null,8,["current-page","page-size"]))}}),um=Object.freeze(Object.defineProperty({__proto__:null,default:rm},Symbol.toStringTag,{value:"Module"})),cm=K({__name:"sizes",setup(a){const n=_(1),t=_(10);return(e,s)=>(i(),N(o(pn),{"current-page":n.value,"onUpdate:currentPage":s[0]||(s[0]=l=>n.value=l),"page-size":t.value,"onUpdate:pageSize":s[1]||(s[1]=l=>t.value=l),total:200,"page-sizes":[10,20,50,100],background:"",layout:"prev, pager, next, jumper, sizes, total"},null,8,["current-page","page-size"]))}}),dm=Object.freeze(Object.defineProperty({__proto__:null,default:cm},Symbol.toStringTag,{value:"Module"})),pm={class:"select-basic"},vm={class:"select-basic__option"},fm={key:0,class:"select-basic__tip"},mm={class:"select-basic__result"},km=K({__name:"basic",setup(a){const n=_(null),t=[{value:"vue",label:"Vue 3"},{value:"react",label:"React 18"},{value:"svelte",label:"Svelte 5"},{value:"solid",label:"Solid",disabled:!0,tip:"暂不支持"}];function e(s){console.log("search:",s)}return(s,l)=>(i(),c("div",pm,[m(o(cn),{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=r=>n.value=r),options:t,filterable:"",clearable:"",placeholder:"请选择技术栈",onSearch:e},{default:v(({option:r})=>[u("span",vm,[u("span",null,z(r.label),1),r.tip?(i(),c("em",fm,z(String(r.tip)),1)):S("",!0)])]),_:1},8,["modelValue"]),u("p",mm,[l[1]||(l[1]=$(" 当前值：",-1)),u("code",null,z(n.value??"（空）"),1)])]))}}),gm=Object.freeze(Object.defineProperty({__proto__:null,default:km},Symbol.toStringTag,{value:"Module"})),bm={class:"select-multiple"},hm={class:"select-multiple__result"},ym=K({__name:"multiple",setup(a){const n=_(["css","ts"]),t=[{value:"css",label:"CSS"},{value:"ts",label:"TypeScript"},{value:"vue",label:"Vue"},{value:"vite",label:"Vite"},{value:"vitest",label:"Vitest"},{value:"scss",label:"SCSS"}];return(e,s)=>(i(),c("div",bm,[m(o(cn),{modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=l=>n.value=l),options:t,multiple:"",filterable:"",clearable:"","select-all":"","collapse-tags":"","max-tag-count":3,"multiple-limit":5,placeholder:"请选择技能（最多 5 项）"},null,8,["modelValue"]),u("p",hm,[$(" 已选 "+z(n.value.length)+" 项：",1),u("code",null,z(n.value.join(", ")||"（空）"),1)])]))}}),_m=Object.freeze(Object.defineProperty({__proto__:null,default:ym},Symbol.toStringTag,{value:"Module"})),xm={class:"select-remote"},wm={class:"select-remote__tip"},$m=K({__name:"remote",setup(a){const n=[{value:"vuejs/core",label:"vuejs/core"},{value:"vuejs/vitepress",label:"vuejs/vitepress"},{value:"vitejs/vite",label:"vitejs/vite"},{value:"vueuse/vueuse",label:"vueuse/vueuse"},{value:"vitest-dev/vitest",label:"vitest-dev/vitest"},{value:"pnpm/pnpm",label:"pnpm/pnpm"}],t=_(null),e=_(!1),s=_([]);async function l(r){if(!r)return s.value=[],[];e.value=!0;try{const d=await new Promise(p=>{setTimeout(()=>{p(n.filter(f=>{var h;return(h=f.label)==null?void 0:h.includes(r)}))},400)});return s.value=d,d}finally{e.value=!1}}return(r,d)=>(i(),c("div",xm,[m(o(cn),{modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=p=>t.value=p),options:s.value,loading:e.value,filterable:"",remote:"",clearable:"","remote-method":l,placeholder:"搜索仓库，如 vue"},null,8,["modelValue","options","loading"]),u("p",wm,[d[1]||(d[1]=$(" 输入 ",-1)),d[2]||(d[2]=u("code",null,"v",-1)),d[3]||(d[3]=$(" 试试；当前值：",-1)),u("code",null,z(t.value??"（空）"),1)])]))}}),Sm=Object.freeze(Object.defineProperty({__proto__:null,default:$m},Symbol.toStringTag,{value:"Module"})),Km={class:"select-slots"},Cm=["onClick"],Tm=K({__name:"slots",setup(a){const n=_(["fe"]),t=_([{value:"fe",label:"前端"},{value:"be",label:"后端"}]);function e(){const s=t.value.length+1;t.value=[...t.value,{value:`role-${s}`,label:`自定义角色 ${s}`}]}return(s,l)=>(i(),c("div",Km,[m(o(cn),{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=r=>n.value=r),options:t.value,multiple:"",clearable:"",block:"",placeholder:"自定义每一项与空态"},{tag:v(({label:r,value:d,remove:p})=>[u("span",{class:"select-slots__tag",onClick:nt(f=>p(d),["stop"])},[l[1]||(l[1]=u("i",{class:"select-slots__dot"},null,-1)),$(" "+z(r),1)],8,Cm)]),footer:v(()=>[m(o(me),{size:"small",type:"primary",onClick:e},{default:v(()=>[...l[2]||(l[2]=[$(" 新增一个角色 ",-1)])]),_:1})]),empty:v(()=>[...l[3]||(l[3]=[u("span",{class:"select-slots__empty"},"没有匹配的角色",-1)])]),_:1},8,["modelValue","options"])]))}}),zm=Object.freeze(Object.defineProperty({__proto__:null,default:Tm},Symbol.toStringTag,{value:"Module"})),Pm=K({__name:"basic",setup(a){const n=_(!0);return(t,e)=>(i(),c(D,null,[m(o(me),{onClick:e[0]||(e[0]=s=>n.value=!n.value)},{default:v(()=>[$(z(n.value?"加载完成":"重新加载"),1)]),_:1}),m(o(mt),{loading:n.value,style:{"margin-top":"16px"}},{template:v(()=>[m(o(mt),{variant:"avatar"}),m(o(mt),{variant:"title"}),m(o(mt),{rows:3})]),default:v(()=>[e[1]||(e[1]=u("article",{class:"doc"},[u("h3",null,"柔光几何设计语言"),u("p",null," 以暮光紫为主色，配合柔和圆角与低饱和中性色，营造会呼吸的界面节奏， 让信息层级在安静中自然浮现。 ")],-1))]),_:1},8,["loading"])],64))}}),Lm=re(Pm,[["__scopeId","data-v-627130bb"]]),Bm=Object.freeze(Object.defineProperty({__proto__:null,default:Lm},Symbol.toStringTag,{value:"Module"})),Mm=K({__name:"combine",setup(a){const n=_(!0);return(t,e)=>(i(),c(D,null,[m(o(me),{size:"small",onClick:e[0]||(e[0]=s=>n.value=!n.value)},{default:v(()=>[...e[1]||(e[1]=[$(" 切换状态 ",-1)])]),_:1}),m(o(mt),{loading:n.value,style:{"margin-top":"16px"}},{template:v(()=>[m(o(mt),{variant:"avatar"}),m(o(mt),{variant:"title"}),m(o(mt),{rows:2})]),default:v(()=>[e[2]||(e[2]=u("div",{class:"profile"},[u("div",{class:"avatar"},"A"),u("div",{class:"meta"},[u("strong",null,"安琪 · 产品经理"),u("span",null,"负责设计系统演进与组件规范落地")])],-1))]),_:1},8,["loading"])],64))}}),Vm=re(Mm,[["__scopeId","data-v-563c30e0"]]),Im=Object.freeze(Object.defineProperty({__proto__:null,default:Vm},Symbol.toStringTag,{value:"Module"})),Om={class:"list",style:{"margin-top":"16px"}},Em=K({__name:"list",setup(a){const n=_(!0),t=[{title:"栅格系统的 8 点基准",desc:"以 8px 为节奏单位，让间距形成可预期的层级。"},{title:"圆角的语义",desc:"不同圆角半径对应不同亲密程度，而非随意取值。"},{title:"低饱和中性色",desc:"用灰阶建立纵深，让品牌色成为唯一焦点。"}];return(e,s)=>(i(),c(D,null,[m(o(me),{size:"small",onClick:s[0]||(s[0]=l=>n.value=!n.value)},{default:v(()=>[$(z(n.value?"加载完成":"重新加载"),1)]),_:1}),u("div",Om,[n.value?(i(),N(o(mt),{key:0,rows:3})):(i(),c(D,{key:1},pe(t,l=>u("div",{key:l.title,class:"card"},[u("h4",null,z(l.title),1),u("p",null,z(l.desc),1)])),64))])],64))}}),Am=re(Em,[["__scopeId","data-v-874dd199"]]),Rm=Object.freeze(Object.defineProperty({__proto__:null,default:Am},Symbol.toStringTag,{value:"Module"})),jm=K({__name:"basic",setup(a){return(n,t)=>(i(),N(o(ut),null,{default:v(()=>[m(o(me),{type:"primary"},{default:v(()=>[...t[0]||(t[0]=[$(" 确定 ",-1)])]),_:1}),m(o(me),null,{default:v(()=>[...t[1]||(t[1]=[$("取消",-1)])]),_:1})]),_:1}))}}),Dm=Object.freeze(Object.defineProperty({__proto__:null,default:jm},Symbol.toStringTag,{value:"Module"})),Fm=K({__name:"split",setup(a){return(n,t)=>(i(),N(o(ut),{split:"",size:"medium"},{split:v(()=>[m(o(Lt),{direction:"vertical"})]),default:v(()=>[t[0]||(t[0]=u("span",null,"首页",-1)),t[1]||(t[1]=u("span",null,"组件",-1)),t[2]||(t[2]=u("span",null,"主题",-1))]),_:1}))}}),Nm=Object.freeze(Object.defineProperty({__proto__:null,default:Fm},Symbol.toStringTag,{value:"Module"})),Hm=K({__name:"vertical",setup(a){return(n,t)=>(i(),N(o(ut),{direction:"vertical",size:"medium"},{default:v(()=>[m(o(me),{type:"primary"},{default:v(()=>[...t[0]||(t[0]=[$(" 第一行 ",-1)])]),_:1}),m(o(me),null,{default:v(()=>[...t[1]||(t[1]=[$("第二行",-1)])]),_:1}),m(o(me),null,{default:v(()=>[...t[2]||(t[2]=[$("第三行",-1)])]),_:1})]),_:1}))}}),Um=Object.freeze(Object.defineProperty({__proto__:null,default:Hm},Symbol.toStringTag,{value:"Module"})),Wm=K({__name:"basic",setup(a){const n=_([{date:"2024-01-01",name:"张三",address:"北京市海淀区"},{date:"2024-01-02",name:"李四",address:"上海市浦东新区"},{date:"2024-01-03",name:"王五",address:"广州市天河区"}]);return(t,e)=>(i(),N(o(vn),{data:n.value,"row-key":"name",border:""},{default:v(()=>[m(o(lt),{prop:"date",label:"日期",width:"140"}),m(o(lt),{prop:"name",label:"姓名",width:"120"},{default:v(({row:s})=>[u("strong",null,z(s.name),1)]),_:1}),m(o(lt),{prop:"address",label:"地址"})]),_:1},8,["data"]))}}),qm=Object.freeze(Object.defineProperty({__proto__:null,default:Wm},Symbol.toStringTag,{value:"Module"})),Gm=K({__name:"pagination",setup(a){const n=_(Array.from({length:45},(t,e)=>({id:e+1,name:`员工 ${e+1}`,dept:["研发","设计","产品","运营"][e%4]})));return(t,e)=>(i(),N(o(vn),{data:n.value,"row-key":"id",border:"",pagination:{pageSize:10,pageSizes:[10,20,50],layout:"prev, pager, next, jumper, sizes, total"}},{default:v(()=>[m(o(lt),{prop:"id",label:"ID",width:"80"}),m(o(lt),{prop:"name",label:"姓名",width:"140"}),m(o(lt),{prop:"dept",label:"部门"})]),_:1},8,["data"]))}}),Ym=Object.freeze(Object.defineProperty({__proto__:null,default:Gm},Symbol.toStringTag,{value:"Module"})),Xm={class:"demo-selection"},Zm={class:"demo-tip"},Jm=K({__name:"selection",setup(a){const n=_(Array.from({length:23},(s,l)=>({id:l+1,name:`用户 ${l+1}`,score:60+l*7%40}))),t=_([]),e=k(()=>t.value.length);return(s,l)=>(i(),c("div",Xm,[u("p",Zm,"已选 "+z(e.value)+" 项（跨页保留，依赖 rowKey）",1),m(o(vn),{data:n.value,"row-key":"id",selection:t.value,border:"",pagination:{pageSize:10,pageSizes:[10,20]}},{default:v(()=>[m(o(lt),{type:"selection",width:"60"}),m(o(lt),{prop:"id",label:"ID",width:"80"}),m(o(lt),{prop:"name",label:"姓名"}),m(o(lt),{prop:"score",label:"分数",width:"100"})]),_:1},8,["data","selection"])]))}}),Qm=re(Jm,[["__scopeId","data-v-795b7322"]]),ek=Object.freeze(Object.defineProperty({__proto__:null,default:Qm},Symbol.toStringTag,{value:"Module"})),tk=K({__name:"sort",setup(a){const n=_([{name:"张三",age:30,city:"北京"},{name:"李四",age:20,city:"上海"},{name:"王五",age:25,city:"广州"},{name:"赵六",age:35,city:"深圳"}]);function t(e){return e.city}return(e,s)=>(i(),N(o(vn),{data:n.value,"row-key":"name",border:""},{default:v(()=>[m(o(lt),{prop:"name",label:"姓名",width:"120"}),m(o(lt),{prop:"age",label:"年龄",width:"100",sortable:""}),m(o(lt),{prop:"city",label:"城市",width:"120",sortable:"","sort-by":t}),m(o(lt),{prop:"city",label:"备注"})]),_:1},8,["data"]))}}),nk=Object.freeze(Object.defineProperty({__proto__:null,default:tk},Symbol.toStringTag,{value:"Module"})),ak=K({__name:"basic",setup(a){const n=_("profile");return(t,e)=>(i(),N(o(Ht),{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=s=>n.value=s)},{default:v(()=>[m(o(ot),{name:"profile"},{label:v(()=>[...e[1]||(e[1]=[u("span",{class:"demo-tab-icon"},[u("svg",{viewBox:"0 0 24 24",width:"15",height:"15","aria-hidden":"true"},[u("path",{d:"M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-4 0-7 2-7 5v1h14v-1c0-3-3-5-7-5z",fill:"currentColor"})]),$(" 用户 ")],-1)])]),_:1}),m(o(ot),{name:"security",label:"安全"},{default:v(()=>[...e[2]||(e[2]=[$(" 安全设置内容 ",-1)])]),_:1}),m(o(ot),{name:"notify",label:"通知"},{default:v(()=>[...e[3]||(e[3]=[$(" 通知偏好内容 ",-1)])]),_:1}),m(o(ot),{name:"billing",label:"账单"},{default:v(()=>[...e[4]||(e[4]=[$(" 账单与发票内容 ",-1)])]),_:1})]),_:1},8,["modelValue"]))}}),ok=Object.freeze(Object.defineProperty({__proto__:null,default:ak},Symbol.toStringTag,{value:"Module"})),lk=K({__name:"card",setup(a){const n=_("order");return(t,e)=>(i(),N(o(Ht),{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=s=>n.value=s),type:"card"},{default:v(()=>[m(o(ot),{name:"order",label:"订单"},{default:v(()=>[...e[1]||(e[1]=[$(" 订单列表 ",-1)])]),_:1}),m(o(ot),{name:"refund",label:"退款"},{default:v(()=>[...e[2]||(e[2]=[$(" 退款记录 ",-1)])]),_:1}),m(o(ot),{name:"review",label:"评价"},{default:v(()=>[...e[3]||(e[3]=[$(" 我的评价 ",-1)])]),_:1})]),_:1},8,["modelValue"]))}}),sk=Object.freeze(Object.defineProperty({__proto__:null,default:lk},Symbol.toStringTag,{value:"Module"})),ik=K({__name:"editable",setup(a){const n=_([{name:"tab1",label:"标签 1",content:"内容 1"},{name:"tab2",label:"标签 2",content:"内容 2"},{name:"tab3",label:"标签 3",content:"内容 3"}]),t=_("tab1");function e(){return n.value.reduce((r,d)=>{const p=Number(d.name.replace(/^tab/,""));return Number.isFinite(p)&&p>r?p:r},0)+1}function s(){const r=e(),d=`tab${r}`;n.value.push({name:d,label:`标签 ${r}`,content:`内容 ${r}`}),t.value=d}function l(r){const d=n.value.findIndex(p=>p.name===r);d!==-1&&n.value.splice(d,1)}return(r,d)=>(i(),N(o(Ht),{modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=p=>t.value=p),editable:"",onTabAdd:s,onTabRemove:l},{default:v(()=>[(i(!0),c(D,null,pe(n.value,p=>(i(),N(o(ot),{key:p.name,name:p.name,label:p.label},{default:v(()=>[$(z(p.content),1)]),_:2},1032,["name","label"]))),128))]),_:1},8,["modelValue"]))}}),rk=Object.freeze(Object.defineProperty({__proto__:null,default:ik},Symbol.toStringTag,{value:"Module"})),uk={class:"demo-position"},ck=K({__name:"position",setup(a){const n=_("a"),t=_("a");return(e,s)=>(i(),c("div",uk,[m(o(Ht),{modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=l=>n.value=l),position:"left",class:"demo-position__col"},{default:v(()=>[m(o(ot),{name:"a",label:"概览"},{default:v(()=>[...s[2]||(s[2]=[$("左侧纵向 · 概览",-1)])]),_:1}),m(o(ot),{name:"b",label:"成员"},{default:v(()=>[...s[3]||(s[3]=[$("左侧纵向 · 成员",-1)])]),_:1}),m(o(ot),{name:"c",label:"设置"},{default:v(()=>[...s[4]||(s[4]=[$("左侧纵向 · 设置",-1)])]),_:1})]),_:1},8,["modelValue"]),m(o(Ht),{modelValue:t.value,"onUpdate:modelValue":s[1]||(s[1]=l=>t.value=l),position:"right",type:"segment",class:"demo-position__col"},{default:v(()=>[m(o(ot),{name:"a",label:"消息"},{default:v(()=>[...s[5]||(s[5]=[$("右侧纵向 · 消息",-1)])]),_:1}),m(o(ot),{name:"b",label:"收藏"},{default:v(()=>[...s[6]||(s[6]=[$("右侧纵向 · 收藏",-1)])]),_:1}),m(o(ot),{name:"c",label:"历史"},{default:v(()=>[...s[7]||(s[7]=[$("右侧纵向 · 历史",-1)])]),_:1})]),_:1},8,["modelValue"])]))}}),dk=Object.freeze(Object.defineProperty({__proto__:null,default:ck},Symbol.toStringTag,{value:"Module"})),pk=K({__name:"basic",setup(a){const n=_(["设计","开发","测试"]);return(t,e)=>(i(!0),c(D,null,pe(n.value,s=>(i(),N(o(tt),{key:s,type:"primary",closable:"",onClose:l=>n.value=n.value.filter(r=>r!==s)},{default:v(()=>[$(z(s),1)]),_:2},1032,["onClose"]))),128))}}),vk=Object.freeze(Object.defineProperty({__proto__:null,default:pk},Symbol.toStringTag,{value:"Module"})),fk={class:"tag-dynamic"},mk=K({__name:"dynamic",setup(a){const n=_(["设计","开发","测试"]),t=_(!1),e=_(""),s=_(null);async function l(){var f;t.value=!0,await Je(),(f=s.value)==null||f.focus()}function r(){if(!t.value)return;const f=e.value.trim();f&&!n.value.includes(f)&&n.value.push(f),e.value="",t.value=!1}function d(){e.value="",t.value=!1}function p(f){n.value=n.value.filter(h=>h!==f)}return(f,h)=>(i(),c("div",fk,[(i(!0),c(D,null,pe(n.value,x=>(i(),N(o(tt),{key:x,type:"primary",closable:"",onClose:C=>p(x)},{default:v(()=>[$(z(x),1)]),_:2},1032,["onClose"]))),128)),t.value?pt((i(),c("input",{key:0,ref_key:"inputRef",ref:s,"onUpdate:modelValue":h[0]||(h[0]=x=>e.value=x),class:"tag-dynamic__input",placeholder:"回车确认",onKeyup:[Bt(r,["enter"]),Bt(d,["esc"])],onBlur:r},null,544)),[[jn,e.value]]):(i(),c("button",{key:1,type:"button",class:"tag-dynamic__add",onClick:l},[...h[1]||(h[1]=[u("span",{class:"tag-dynamic__plus"},"+",-1),$(" 新增标签 ",-1)])]))]))}}),kk=Object.freeze(Object.defineProperty({__proto__:null,default:mk},Symbol.toStringTag,{value:"Module"})),gk=K({__name:"effect",setup(a){return(n,t)=>(i(),c(D,null,[m(o(tt),{type:"primary",effect:"dark"},{default:v(()=>[...t[0]||(t[0]=[$(" dark ",-1)])]),_:1}),m(o(tt),{type:"primary",effect:"light"},{default:v(()=>[...t[1]||(t[1]=[$(" light ",-1)])]),_:1}),m(o(tt),{type:"primary",effect:"plain"},{default:v(()=>[...t[2]||(t[2]=[$(" plain ",-1)])]),_:1}),m(o(tt),{type:"success",round:"",bordered:""},{default:v(()=>[...t[3]||(t[3]=[$(" 胶囊 ",-1)])]),_:1}),m(o(tt),{type:"danger",size:"large"},{default:v(()=>[...t[4]||(t[4]=[$(" 大号 ",-1)])]),_:1}),m(o(tt),{type:"info",size:"small"},{default:v(()=>[...t[5]||(t[5]=[$(" 小号 ",-1)])]),_:1})],64))}}),bk=Object.freeze(Object.defineProperty({__proto__:null,default:gk},Symbol.toStringTag,{value:"Module"})),hk=K({__name:"type",setup(a){return(n,t)=>(i(),c(D,null,[m(o(tt),{type:"primary"},{default:v(()=>[...t[0]||(t[0]=[$(" 主要 ",-1)])]),_:1}),m(o(tt),{type:"success"},{default:v(()=>[...t[1]||(t[1]=[$(" 成功 ",-1)])]),_:1}),m(o(tt),{type:"warning"},{default:v(()=>[...t[2]||(t[2]=[$(" 警告 ",-1)])]),_:1}),m(o(tt),{type:"danger"},{default:v(()=>[...t[3]||(t[3]=[$(" 危险 ",-1)])]),_:1}),m(o(tt),{type:"info"},{default:v(()=>[...t[4]||(t[4]=[$(" 信息 ",-1)])]),_:1}),m(o(tt),null,{default:v(()=>[...t[5]||(t[5]=[$("默认",-1)])]),_:1})],64))}}),yk=Object.freeze(Object.defineProperty({__proto__:null,default:hk},Symbol.toStringTag,{value:"Module"})),_k=K({__name:"basic",setup(a){const n=_([]);function t(e){return new Promise(s=>{let l=0;const r=setInterval(()=>{var d;l+=20,e.onProgress({percent:l}),l>=100&&(clearInterval(r),s({url:`https://example.com/${((d=e.file)==null?void 0:d.name)??"file"}`}))},120)})}return(e,s)=>(i(),N(o(dn),{modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=l=>n.value=l),"http-request":t,limit:3,accept:".png,.jpg,.jpeg,.pdf",tip:"支持任意文件，最多 3 个；点击触发选择框"},null,8,["modelValue"]))}}),xk=Object.freeze(Object.defineProperty({__proto__:null,default:_k},Symbol.toStringTag,{value:"Module"})),wk=K({__name:"drag",setup(a){const n=_([]);function t(e){return new Promise(s=>{let l=0;const r=setInterval(()=>{var d;l+=25,e.onProgress({percent:l}),l>=100&&(clearInterval(r),s({url:`https://example.com/${((d=e.file)==null?void 0:d.name)??"file"}`}))},100)})}return(e,s)=>(i(),N(o(dn),{modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=l=>n.value=l),drag:"",multiple:"","http-request":t,accept:"image/*",tip:"把文件拖到虚线区域即可上传，支持多文件"},null,8,["modelValue"]))}}),$k=Object.freeze(Object.defineProperty({__proto__:null,default:wk},Symbol.toStringTag,{value:"Module"})),Sk={key:0,class:"upload-tip"},Kk=K({__name:"manual",setup(a){const n=_([]),t=_(null),e=_("");async function s(r){return!r.raw||!r.raw.type.startsWith("image/")?(e.value=`「${r.name}」不是图片，已拦截`,!1):r.size>2*1024*1024?(e.value=`「${r.name}」超过 2MB，已拦截`,!1):(e.value="",!0)}function l(){var r;(r=t.value)==null||r.submit()}return(r,d)=>(i(),c("div",null,[m(o(dn),{ref_key:"uploadRef",ref:t,modelValue:n.value,"onUpdate:modelValue":d[0]||(d[0]=p=>n.value=p),"auto-upload":!1,"before-upload":s,accept:"image/*",tip:"选好文件后点击「提交」才开始上传（仅允许图片，≤2MB）"},null,8,["modelValue"]),e.value?(i(),c("p",Sk,z(e.value),1)):S("",!0),u("button",{class:"upload-submit",type:"button",onClick:l},"提交")]))}}),Ck=Object.freeze(Object.defineProperty({__proto__:null,default:Kk},Symbol.toStringTag,{value:"Module"})),Tk=K({__name:"picture-card",setup(a){const n=_([]);function t(e){return new Promise(s=>{let l=0;const r=setInterval(()=>{var d;l+=25,e.onProgress({percent:l}),l>=100&&(clearInterval(r),s({url:`https://example.com/${((d=e.file)==null?void 0:d.name)??"file"}`}))},100)})}return(e,s)=>(i(),N(o(dn),{modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=l=>n.value=l),"list-type":"picture-card","http-request":t,accept:"image/*",limit:6,tip:"卡片式图片上传，hover 出现预览 / 删除操作"},null,8,["modelValue"]))}}),zk=Object.freeze(Object.defineProperty({__proto__:null,default:Tk},Symbol.toStringTag,{value:"Module"})),Pk=K({__name:"basic",setup(a){return(n,t)=>(i(),N(o(fn),{content:"KK UI 内部资料",rotate:-22},{default:v(()=>[...t[0]||(t[0]=[u("div",{class:"doc"},[u("h3",null,"年度设计复盘"),u("p",null," 本季度我们完成了组件库从 0 到 1 的搭建，统一了 4 套主题下的视觉语言。 下一步将聚焦无障碍与性能预算。 "),u("p",null," 水印以 0.15 不透明度覆盖在内容上，且 `pointer-events: none`， 不影响正文的选择与复制。 ")],-1)])]),_:1}))}}),Lk=re(Pk,[["__scopeId","data-v-ea1798d3"]]),Bk=Object.freeze(Object.defineProperty({__proto__:null,default:Lk},Symbol.toStringTag,{value:"Module"})),Mk=K({__name:"image",setup(a){return(n,t)=>(i(),N(o(fn),{image:"https://placehold.co/48x48/5b4fe9/ffffff?text=KK","image-width":48,"image-height":48,gap:[120,120],opacity:.25},{default:v(()=>[...t[0]||(t[0]=[u("div",{class:"doc"},[u("h3",null,"对外发布稿"),u("p",null," 使用图片水印时，`image` 优先级高于 `content`； 若图片加载失败则静默跳过，不会阻塞页面渲染。 ")],-1)])]),_:1}))}}),Vk=re(Mk,[["__scopeId","data-v-a2cc6cf5"]]),Ik=Object.freeze(Object.defineProperty({__proto__:null,default:Vk},Symbol.toStringTag,{value:"Module"})),Ok=K({__name:"moveable",setup(a){return(n,t)=>(i(),N(o(fn),{content:"KK UI 内部资料",moveable:"",rotate:-22,opacity:.35},{default:v(()=>[...t[0]||(t[0]=[u("div",{class:"doc"},[u("h3",null,"跟随鼠标的水印"),u("p",null,[$(" 开启 "),u("code",null,"moveable"),$(" 后，容器范围内只展示单个水印并跟随光标移动， 未悬停时自动隐藏，适合重点区域（如详情、合同预览）的低干扰标识。 ")]),u("p",null,"在该区域内移动鼠标即可看到水印跟随效果。")],-1)])]),_:1}))}}),Ek=re(Ok,[["__scopeId","data-v-353dc4bc"]]),Ak=Object.freeze(Object.defineProperty({__proto__:null,default:Ek},Symbol.toStringTag,{value:"Module"})),Rk=K({__name:"slot",setup(a){return(n,t)=>(i(),N(o(fn),{rotate:-15,opacity:.2},{content:v(()=>[...t[0]||(t[0]=[$(" 机密 · 仅限内部传阅 ",-1)])]),default:v(()=>[t[1]||(t[1]=u("div",{class:"doc"},[u("h3",null,"保密文档"),u("p",null,"下方 #content 插槽的文本会取代 content 属性绘制到水印上。")],-1))]),_:1}))}}),jk=re(Rk,[["__scopeId","data-v-1ba6cc27"]]),Dk=Object.freeze(Object.defineProperty({__proto__:null,default:jk},Symbol.toStringTag,{value:"Module"})),Fk=`<script setup lang="ts">
import { KkButton } from 'kk-ui'
<\/script>

<template>
  <KkButton type="primary"> 主要按钮 </KkButton>
  <KkButton>默认按钮</KkButton>
  <KkButton type="text"> 文字按钮 </KkButton>
</template>
`,Nk=`<script setup lang="ts">
import { KkButton } from 'kk-ui'
<\/script>

<template>
  <div style="width: 100%">
    <KkButton type="primary" block> 块级按钮 </KkButton>
  </div>
</template>
`,Hk=`<script setup lang="ts">
import { KkButton, KkIcon } from 'kk-ui'
<\/script>

<template>
  <KkButton type="primary">
    <template #icon>
      <KkIcon name="lucide:search" size="16" />
    </template>
    搜索
  </KkButton>
  <KkButton type="default">
    <template #icon>
      <KkIcon name="lucide:download" size="16" />
    </template>
    下载
  </KkButton>
</template>
`,Uk=`<script setup lang="ts">
import { KkButton } from 'kk-ui'
<\/script>

<template>
  <KkButton type="primary" size="small"> Small </KkButton>
  <KkButton type="primary"> Medium </KkButton>
  <KkButton type="primary" size="large"> Large </KkButton>
</template>
`,Wk=`<script setup lang="ts">
import { KkButton } from 'kk-ui'
<\/script>

<template>
  <KkButton type="primary" loading> 加载中 </KkButton>
  <KkButton type="primary" disabled> 禁用 </KkButton>
  <KkButton type="default" disabled> 默认禁用 </KkButton>
</template>
`,qk=`<script setup lang="ts">
import { KkButton } from 'kk-ui'
<\/script>

<template>
  <KkButton type="primary"> Primary </KkButton>
  <KkButton type="success"> Success </KkButton>
  <KkButton type="warning"> Warning </KkButton>
  <KkButton type="danger"> Danger </KkButton>
  <KkButton>Default</KkButton>
  <KkButton type="text"> Text </KkButton>
</template>
`,Gk=`<script setup lang="ts">
import { KkButton, KkCard } from 'kk-ui'
<\/script>

<template>
  <div style="display: flex; gap: 16px; flex-wrap: wrap; width: 100%">
    <KkCard title="基础卡片" style="flex: 1; min-width: 240px"> 卡片正文内容 </KkCard>
    <KkCard title="带操作" subtitle="最近 7 天" style="flex: 1; min-width: 240px">
      <template #extra>
        <KkButton type="text"> 更多 </KkButton>
      </template>
      卡片正文内容
      <template #footer> 更新时间：刚刚 </template>
    </KkCard>
  </div>
</template>
`,Yk=`<script setup lang="ts">
import { KkCard } from 'kk-ui'
<\/script>

<template>
  <div style="display: flex; gap: 16px; flex-wrap: wrap; width: 100%">
    <KkCard title="always" shadow="always" style="flex: 1; min-width: 200px">
      始终显示阴影
    </KkCard>
    <KkCard title="hover" shadow="hover" hoverable style="flex: 1; min-width: 200px">
      悬停显示阴影
    </KkCard>
    <KkCard title="never" shadow="never" style="flex: 1; min-width: 200px">
      不显示阴影
    </KkCard>
    <KkCard title="loading" loading style="flex: 1; min-width: 200px"> 加载中 </KkCard>
  </div>
</template>
`,Xk=`<script setup lang="ts">
import { ref } from 'vue'
import { KkSpace } from 'kk-ui'
import { KkCascader, type CascaderOption } from 'kk-ui'

const options: CascaderOption[] = [
  {
    value: 'zhejiang',
    label: '浙江省',
    children: [
      {
        value: 'hangzhou',
        label: '杭州市',
        children: [
          { value: 'xihu', label: '西湖区' },
          { value: 'binjiang', label: '滨江区' },
        ],
      },
      { value: 'ningbo', label: '宁波市' },
    ],
  },
  {
    value: 'jiangsu',
    label: '江苏省',
    children: [
      {
        value: 'nanjing',
        label: '南京市',
        children: [{ value: 'jiangning', label: '江宁区' }],
      },
    ],
  },
  { value: 'guangdong', label: '广东省', disabled: true },
]

const value = ref<(string | number)[]>([])
<\/script>

<template>
  <KkSpace direction="vertical" size="medium" fill style="width: 100%">
    <KkCascader
      v-model="value"
      :options="options"
      :check-strictly="false"
      clearable
      placeholder="请选择省 / 市 / 区"
      style="width: 320px"
    />
    <div class="cascader-result">
      emitPath 默认开启，拿到的是完整路径：<code>{{ JSON.stringify(value) }}</code>
    </div>
  </KkSpace>
</template>

<style>
.cascader-result {
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-sm);
}

.cascader-result code {
  padding: 1px 6px;
  border-radius: 5px;
  background: var(--kk-color-primary-soft);
  color: var(--kk-color-primary);
  font-family: var(--kk-font-mono);
  font-size: 12px;
}
</style>
`,Zk=`<script setup lang="ts">
import { ref } from 'vue'
import { KkSpace } from 'kk-ui'
import { KkCascader, type CascaderOption, type CascaderPath } from 'kk-ui'

/** 模拟后端按层级返回子级，实际项目中换成接口请求即可 */
const regions: Record<string, CascaderOption[]> = {
  zhejiang: [
    { value: 'hangzhou', label: '杭州市' },
    { value: 'ningbo', label: '宁波市' },
  ],
  hangzhou: [
    { value: 'xihu', label: '西湖区' },
    { value: 'binjiang', label: '滨江区' },
  ],
  jiangsu: [{ value: 'nanjing', label: '南京市' }],
}

const options: CascaderOption[] = [
  { value: 'zhejiang', label: '浙江省' },
  { value: 'jiangsu', label: '江苏省' },
]

const value = ref<(string | number)[]>([])
const logs = ref<string[]>([])

function loadData(node: CascaderOption, path: CascaderPath): Promise<CascaderOption[]> {
  logs.value = [...logs.value, \`加载 \${path.join(' / ')} 的子级\`]
  return new Promise((resolve) => {
    setTimeout(() => resolve(regions[String(node.value)] ?? []), 600)
  })
}
<\/script>

<template>
  <KkSpace direction="vertical" size="medium" fill style="width: 100%">
    <KkCascader
      v-model="value"
      :options="options"
      :load-data="loadData"
      :check-strictly="false"
      clearable
      placeholder="点开才会请求子级"
      style="width: 320px"
      @load="({ path }) => (logs = [...logs, \`\${path.join(' / ')} 加载完成\`])"
    />
    <div v-if="logs.length" class="cascader-result">
      <div v-for="(log, index) in logs" :key="index">
        {{ log }}
      </div>
    </div>
  </KkSpace>
</template>

<style>
.cascader-result {
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-sm);
  line-height: 1.8;
}
</style>
`,Jk=`<script setup lang="ts">
import { computed, ref } from 'vue'
import { KkSpace } from 'kk-ui'
import { KkCascader, type CascaderOption } from 'kk-ui'

const options: CascaderOption[] = [
  {
    value: 'frontend',
    label: '前端',
    children: [
      { value: 'vue', label: 'Vue' },
      { value: 'react', label: 'React' },
    ],
  },
  {
    value: 'backend',
    label: '后端',
    children: [
      { value: 'node', label: 'Node.js' },
      { value: 'go', label: 'Go' },
    ],
  },
  {
    value: 'design',
    label: '设计',
    children: [{ value: 'ui', label: '界面设计' }],
  },
]

const value = ref<(string | number)[][]>([
  ['frontend', 'vue'],
  ['design', 'ui'],
])
const showAllLevels = ref(true)
const separator = computed(() => ' / ')
<\/script>

<template>
  <KkSpace direction="vertical" size="medium" fill style="width: 100%">
    <KkCascader
      v-model="value"
      :options="options"
      :show-all-levels="showAllLevels"
      :separator="separator"
      multiple
      clearable
      placeholder="请选择技术栈（可多选）"
      style="width: 420px"
    />
    <div class="cascader-result">
      已选 {{ value.length }} 项，勾选后浮层保持展开，标签可单独删除。
    </div>
  </KkSpace>
</template>

<style>
.cascader-result {
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-sm);
}
</style>
`,Qk=`<script setup lang="ts">
import { ref } from 'vue'
import { KkContainer } from 'kk-ui'

type Size = 'small' | 'medium' | 'large' | 'full'
type Padding = 'none' | 'small' | 'medium' | 'large'

const sizes: { key: Size; label: string; hint: string }[] = [
  { key: 'small', label: 'Small', hint: '640' },
  { key: 'medium', label: 'Medium', hint: '960' },
  { key: 'large', label: 'Large', hint: '1200' },
  { key: 'full', label: 'Full', hint: '100%' },
]

const paddings: Padding[] = ['none', 'small', 'medium', 'large']

const size = ref<Size>('medium')
const padding = ref<Padding>('large')
const bordered = ref(true)
<\/script>

<template>
  <div class="bar">
    <span class="bar__label">宽度档位</span>
    <div class="bar__group">
      <button
        v-for="s in sizes"
        :key="s.key"
        type="button"
        class="bar__btn"
        :class="{ 'is-active': size === s.key }"
        @click="size = s.key"
      >
        {{ s.label }}
        <em>{{ s.hint }}</em>
      </button>
    </div>
  </div>

  <div class="bar">
    <span class="bar__label">内边距</span>
    <div class="bar__group">
      <button
        v-for="p in paddings"
        :key="p"
        type="button"
        class="bar__btn"
        :class="{ 'is-active': padding === p }"
        @click="padding = p"
      >
        {{ p }}
      </button>
    </div>
    <label class="bar__check">
      <input v-model="bordered" type="checkbox" />
      显示边框
    </label>
  </div>

  <KkContainer
    :size="size"
    :padding="padding"
    :bordered="bordered"
    style="margin-top: 12px"
  >
    <h3>发布流程看板</h3>
    <p>
      切换上方档位即可实时改变最大宽度与内边距。容器把主内容限制在预设宽度并居中，
      长文阅读时两侧留白更舒适，也更易于在宽屏上聚焦。
    </p>
  </KkContainer>
</template>

<style scoped>
.bar {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
  color: var(--kk-text-secondary);
}
.bar__label {
  font-size: var(--kk-font-size-sm);
  color: var(--kk-text-tertiary);
}
.bar__group {
  display: inline-flex;
  padding: 2px;
  border-radius: var(--kk-radius-full);
  background: var(--kk-bg-subtle);
  gap: 2px;
}
.bar__btn {
  display: inline-flex;
  align-items: baseline;
  gap: 4px;
  padding: 3px 12px;
  border: none;
  border-radius: var(--kk-radius-full);
  background: transparent;
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-sm);
  cursor: pointer;
  transition:
    background var(--kk-duration-fast) var(--kk-ease-out),
    color var(--kk-duration-fast) var(--kk-ease-out);
}
.bar__btn em {
  font-style: normal;
  font-size: 11px;
  color: var(--kk-text-tertiary);
}
.bar__btn:hover {
  color: var(--kk-color-primary);
}
.bar__btn.is-active {
  background: var(--kk-bg-container);
  color: var(--kk-color-primary);
  box-shadow: var(--kk-shadow-sm);
}
.bar__check {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;
  font-size: var(--kk-font-size-sm);
  cursor: pointer;
}
h3 {
  margin: 0 0 8px;
  color: var(--kk-text-primary);
}
p {
  margin: 0;
  color: var(--kk-text-secondary);
  line-height: 1.7;
}
</style>
`,eg=`<script setup lang="ts">
import { KkContainer } from 'kk-ui'
<\/script>

<template>
  <KkContainer direction="column" padding="medium" bordered>
    <template #header>
      <div class="bar">
        <strong>周报 · 第 38 期</strong>
        <span class="tag">已归档</span>
      </div>
    </template>

    <div class="body">
      <p>
        本周完成设计 token 重构，新增 4 套主题下统一的圆角与间距变量，
        组件层不再出现硬编码尺寸。
      </p>
    </div>

    <template #footer>
      <div class="bar bar--footer">
        <span>共 12 条改动</span>
        <span>2026-09-17</span>
      </div>
    </template>
  </KkContainer>
</template>

<style scoped>
.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--kk-text-primary);
}
.bar--footer {
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-sm);
}
.tag {
  padding: 2px 8px;
  border-radius: var(--kk-radius-full);
  background: var(--kk-bg-hover);
  color: var(--kk-text-secondary);
  font-size: 12px;
}
.body p {
  margin: 12px 0;
  color: var(--kk-text-secondary);
  line-height: 1.7;
}
</style>
`,tg=`<script setup lang="ts">
import { KkDivider } from 'kk-ui'
<\/script>

<template>
  <div style="width: 100%">
    <p>第一段内容</p>
    <KkDivider />
    <p>第二段内容</p>
    <KkDivider>分组标题</KkDivider>
    <p>第三段内容</p>
    <KkDivider content-position="left" border-style="dashed"> 左侧标题 </KkDivider>
    <p>第四段内容</p>
  </div>
</template>
`,ng=`<script setup lang="ts">
import { KkDivider, KkSpace } from 'kk-ui'
<\/script>

<template>
  <KkSpace size="medium">
    <span>编辑</span>
    <KkDivider direction="vertical" />
    <span>复制</span>
    <KkDivider direction="vertical" accent />
    <span>删除</span>
  </KkSpace>
</template>
`,ag=`<script setup lang="ts">
import { ref } from 'vue'
import { KkButton, KkDrawer } from 'kk-ui'

const visible = ref(false)
<\/script>

<template>
  <KkButton type="primary" @click="visible = true"> 打开抽屉 </KkButton>

  <KkDrawer
    v-model="visible"
    title="发布配置"
    subtitle="右侧滑出，内容较长时主体区域内部滚动"
    size="420px"
    footer
  >
    <p class="drawer-basic-text">
      抽屉从屏幕右侧滑出，不打断当前页面上下文，适合承载表单、详情、设置这一类
      「需要来回对照主页面」的内容。
    </p>
    <p class="drawer-basic-text">
      宽度默认是视口宽度的 30%，也可以像这里一样写死 <code>420px</code>； 传入数字则按
      px 处理。
    </p>
    <p class="drawer-basic-text">
      底部操作区由 <code>footer</code> 打开：<strong>取消</strong>会关闭抽屉，
      <strong>确定</strong>只抛出 <code>confirm</code> 事件，方便接异步提交。
    </p>
  </KkDrawer>
</template>

<style>
.drawer-basic-text {
  margin: 0 0 14px;
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-md);
  line-height: 1.8;
}

.drawer-basic-text:last-child {
  margin-bottom: 0;
}

.drawer-basic-text code {
  padding: 1px 6px;
  border-radius: 5px;
  background: var(--kk-color-primary-soft);
  color: var(--kk-color-primary);
  font-family: var(--kk-font-mono);
  font-size: 12px;
}
</style>
`,og=`<script setup lang="ts">
import { ref } from 'vue'
import { KkButton, KkDrawer, KkInput } from 'kk-ui'

const visible = ref(false)
const name = ref('')
const remark = ref('')
const submitting = ref(false)

async function submit(): Promise<void> {
  submitting.value = true
  // 真实项目里这里换成接口请求；抽屉在提交期间保持打开并显示 loading
  await new Promise((resolve) => setTimeout(resolve, 600))
  submitting.value = false
  visible.value = false
  name.value = ''
  remark.value = ''
}

function cancel(): void {
  // 默认 footer 会自己关闭；这里用 #footer 接管，需要手动关闭
  visible.value = false
}
<\/script>

<template>
  <KkButton type="primary" @click="visible = true"> 填写发布信息 </KkButton>

  <KkDrawer v-model="visible" title="发布信息" size="420px" footer>
    <div class="drawer-footer-demo">
      <KkInput v-model="name" block placeholder="版本号，如 0.3.0" />
      <KkInput v-model="remark" block placeholder="发布说明（可留空）" />
    </div>

    <!-- 自定义底部：可控 loading、可做二次确认 -->
    <template #footer>
      <KkButton :disabled="submitting" @click="cancel"> 取消 </KkButton>
      <KkButton type="primary" :loading="submitting" @click="submit"> 提交 </KkButton>
    </template>
  </KkDrawer>
</template>

<style>
.drawer-footer-demo {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
`,lg=`<script setup lang="ts">
import { ref } from 'vue'
import { KkButton, KkDrawer, KkSpace } from 'kk-ui'
import type { DrawerPlacement } from 'kk-ui'

const visible = ref(false)
const placement = ref<DrawerPlacement>('right')

const PLACEMENTS: { value: DrawerPlacement; label: string }[] = [
  { value: 'right', label: '右侧' },
  { value: 'left', label: '左侧' },
  { value: 'top', label: '顶部' },
  { value: 'bottom', label: '底部' },
]

function openAt(value: DrawerPlacement): void {
  placement.value = value
  visible.value = true
}
<\/script>

<template>
  <KkSpace>
    <KkButton v-for="item in PLACEMENTS" :key="item.value" @click="openAt(item.value)">
      {{ item.label }}
    </KkButton>
  </KkSpace>

  <KkDrawer
    v-model="visible"
    :placement="placement"
    :title="\`从\${placement === 'top' || placement === 'bottom' ? '上下' : '左右'}滑出\`"
    :size="placement === 'top' || placement === 'bottom' ? '240px' : '360px'"
  >
    <p class="drawer-placement-text">
      <code>placement</code> 决定出现方向：左右方向时 <code>size</code>
      表示宽度，上下方向时表示高度。切换方向后尺寸会自动回到推导值，
      避免上一次拖动调整出的 px 值把抽屉撑出屏幕。
    </p>
  </KkDrawer>
</template>

<style>
.drawer-placement-text {
  margin: 0;
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-md);
  line-height: 1.8;
}

.drawer-placement-text code {
  padding: 1px 6px;
  border-radius: 5px;
  background: var(--kk-color-primary-soft);
  color: var(--kk-color-primary);
  font-family: var(--kk-font-mono);
  font-size: 12px;
}
</style>
`,sg=`<script setup lang="ts">
import { ref } from 'vue'
import { KkButton, KkDrawer, KkSpace } from 'kk-ui'

const visible = ref(false)
const width = ref(0)
const drawerRef = ref<InstanceType<typeof KkDrawer> | null>(null)

function onResize(size: number): void {
  width.value = size
}
<\/script>

<template>
  <KkSpace>
    <KkButton type="primary" @click="visible = true"> 打开可调整尺寸的抽屉 </KkButton>
    <span class="drawer-resizable-hint">
      当前宽度：{{ width > 0 ? \`\${width}px\` : '未调整' }}
    </span>
  </KkSpace>

  <KkDrawer
    ref="drawerRef"
    v-model="visible"
    title="拖动内侧边缘调整宽度"
    size="360px"
    resizable
    :min-size="280"
    :max-size="640"
    footer
    @resize="onResize"
  >
    <p class="drawer-resizable-text">
      打开 <code>resizable</code> 后，抽屉内侧会出现一条 6px 宽的拖动手柄 （hover
      时高亮）。拖动过程直接写内联宽度，不触发组件重渲染， 松手才抛出
      <code>resize</code> 事件。
    </p>
    <p class="drawer-resizable-text">
      尺寸被限制在 <code>minSize</code> 与 <code>maxSize</code> 之间； 调用实例方法
      <code>reset()</code> 可恢复成 <code>size</code> 推导值。
    </p>
    <template #footer>
      <KkButton @click="drawerRef?.reset()"> 恢复默认宽度 </KkButton>
      <KkButton type="primary" @click="visible = false"> 完成 </KkButton>
    </template>
  </KkDrawer>
</template>

<style>
.drawer-resizable-text {
  margin: 0 0 14px;
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-md);
  line-height: 1.8;
}

.drawer-resizable-text:last-child {
  margin-bottom: 0;
}

.drawer-resizable-text code {
  padding: 1px 6px;
  border-radius: 5px;
  background: var(--kk-color-primary-soft);
  color: var(--kk-color-primary);
  font-family: var(--kk-font-mono);
  font-size: 12px;
}

.drawer-resizable-hint {
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-sm);
}
</style>
`,ig=`<script setup lang="ts">
import { reactive, ref } from 'vue'
import { KkButton, KkForm, KkFormItem, KkInput, KkSpace } from 'kk-ui'
import type { FormExpose, FormRules } from 'kk-ui'

const formRef = ref<FormExpose>()
const model = reactive({ name: '', email: '' })
const result = ref('')

const rules: FormRules = {
  name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '邮箱格式不正确', trigger: 'blur' },
  ],
}

async function submit() {
  const valid = await formRef.value?.validate()
  result.value = valid ? '校验通过' : '校验未通过'
}

function reset() {
  formRef.value?.resetFields()
  result.value = ''
}
<\/script>

<template>
  <div style="width: 100%">
    <KkForm ref="formRef" :model="model" :rules="rules" label-width="72px">
      <KkFormItem prop="name" label="名称">
        <KkInput v-model="model.name" placeholder="请输入名称" clearable />
      </KkFormItem>
      <KkFormItem prop="email" label="邮箱">
        <KkInput v-model="model.email" placeholder="请输入邮箱" />
      </KkFormItem>
      <KkFormItem>
        <KkSpace>
          <KkButton type="primary" native-type="submit" @click="submit">
            提交
          </KkButton>
          <KkButton @click="reset"> 重置 </KkButton>
        </KkSpace>
      </KkFormItem>
    </KkForm>
    <p v-if="result" style="color: var(--kk-text-secondary); font-size: 13px">
      {{ result }}
    </p>
  </div>
</template>
`,rg=`<script setup lang="ts">
import { reactive } from 'vue'
import { KkForm, KkFormItem, KkInput } from 'kk-ui'

const model = reactive({ name: '' })
<\/script>

<template>
  <KkForm :model="model" label-position="top" style="width: 100%">
    <KkFormItem prop="name" label="名称" required>
      <KkInput v-model="model.name" placeholder="标签在顶部" />
    </KkFormItem>
  </KkForm>
</template>
`,ug=`<script setup lang="ts">
import { reactive } from 'vue'
import { KkForm, KkFormItem, KkInput } from 'kk-ui'
import type { FormRules } from 'kk-ui'

const model = reactive({ username: '' })

const rules: FormRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 12, message: '长度需为 3-12 个字符', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9_]+$/,
      message: '仅支持字母、数字与下划线',
      trigger: 'blur',
    },
  ],
}
<\/script>

<template>
  <KkForm :model="model" :rules="rules" label-width="80px" style="width: 100%">
    <KkFormItem prop="username" label="用户名">
      <KkInput v-model="model.username" placeholder="3-12 位字母数字下划线" />
    </KkFormItem>
  </KkForm>
</template>
`,cg=`<script setup lang="ts">
import { KkIcon } from 'kk-ui'
<\/script>

<template>
  <KkIcon name="lucide:home" />
  <KkIcon name="lucide:heart" />
  <KkIcon name="lucide:settings" />
</template>
`,dg=`<script setup lang="ts">
import { KkIcon } from 'kk-ui'
<\/script>

<template>
  <KkIcon name="lucide:heart" color="#EF4444" size="24" />
  <KkIcon name="lucide:check-circle" color="#16A34A" size="24" />
  <KkIcon name="lucide:bell" color="#F59E0B" size="24" />
  <KkIcon name="lucide:loader" spin size="24" />
</template>
`,pg=`<script setup lang="ts">
import { KkIcon } from 'kk-ui'
<\/script>

<template>
  <KkIcon name="lucide:star" size="small" />
  <KkIcon name="lucide:star" />
  <KkIcon name="lucide:star" size="large" />
  <KkIcon name="lucide:star" :size="32" />
  <KkIcon name="lucide:star" size="2em" />
</template>
`,vg=`<script setup lang="ts">
import { ref } from 'vue'
import { KkIcon, KkInput, KkSpace } from 'kk-ui'

const value = ref('')
<\/script>

<template>
  <KkSpace direction="vertical" size="medium" fill style="width: 100%">
    <KkInput v-model="value" placeholder="搜索内容">
      <template #prefix>
        <KkIcon name="lucide:search" size="16" />
      </template>
    </KkInput>
    <KkInput placeholder="金额">
      <template #suffix> 元 </template>
    </KkInput>
    <KkInput placeholder="站点">
      <template #prepend> https:// </template>
    </KkInput>
    <KkInput v-model="value" type="password" show-password placeholder="密码" />
  </KkSpace>
</template>
`,fg=`<script setup lang="ts">
import { ref } from 'vue'
import { KkInput, KkSpace } from 'kk-ui'

const value = ref('')
<\/script>

<template>
  <KkSpace direction="vertical" size="medium" fill style="width: 100%">
    <KkInput v-model="value" placeholder="基础输入框" clearable />
    <KkInput placeholder="禁用状态" disabled />
    <KkInput model-value="只读内容" readonly />
  </KkSpace>
</template>
`,mg=`<script setup lang="ts">
import { KkInput, KkSpace } from 'kk-ui'
<\/script>

<template>
  <KkSpace direction="vertical" size="medium" fill style="width: 100%">
    <KkInput size="small" placeholder="small" />
    <KkInput placeholder="medium" />
    <KkInput size="large" placeholder="large" />
    <KkInput invalid error-message="该字段必填" placeholder="错误态" />
    <KkInput block placeholder="块级宽度" />
  </KkSpace>
</template>
`,kg=`<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  KkLayout,
  KkLayoutHeader,
  KkLayoutSider,
  KkLayoutContent,
  KkLayoutFooter,
} from 'kk-ui'

interface PanelItem {
  key: string
  label: string
  visitors: string
  online: string
}

const items: PanelItem[] = [
  { key: 'realtime', label: '实时概览', visitors: '12,480', online: '328' },
  { key: 'traffic', label: '流量分析', visitors: '86,932', online: '512' },
  { key: 'funnel', label: '转化漏斗', visitors: '4,210', online: '96' },
]

const active = ref('realtime')
const current = computed(
  () => items.find((item) => item.key === active.value) ?? items[0]
)
<\/script>

<template>
  <KkLayout
    style="
      height: 340px;
      border: 1px solid var(--kk-border-color);
      border-radius: var(--kk-radius-lg);
      overflow: hidden;
    "
  >
    <KkLayoutHeader bordered>
      <template #left>
        <strong>数据看板</strong>
      </template>
      <template #right>
        <span class="muted">2026-09-18</span>
      </template>
    </KkLayoutHeader>

    <KkLayout>
      <KkLayoutSider :width="160" bordered>
        <div class="nav">
          <button
            v-for="item in items"
            :key="item.key"
            type="button"
            class="nav-item"
            :class="{ 'is-active': active === item.key }"
            @click="active = item.key"
          >
            {{ item.label }}
          </button>
        </div>
      </KkLayoutSider>

      <KkLayoutContent class="main">
        <h3>{{ current.label }}</h3>
        <!-- 内容区内部再嵌套一个横向布局：主区 + 右侧辅助栏 -->
        <KkLayout style="height: 170px; gap: 12px; background: transparent">
          <KkLayoutContent class="pane">
            <span class="pane__label">今日访问</span>
            <strong class="pane__value">{{ current.visitors }}</strong>
          </KkLayoutContent>

          <KkLayoutSider position="right" :width="150" bordered>
            <div class="aside-pane">
              <span class="pane__label">实时在线</span>
              <strong class="pane__value">{{ current.online }}</strong>
            </div>
          </KkLayoutSider>
        </KkLayout>
      </KkLayoutContent>
    </KkLayout>

    <KkLayoutFooter bordered>
      <span class="muted">侧边栏也可置于右侧，适配主内容 + 辅助信息栏的版式</span>
    </KkLayoutFooter>
  </KkLayout>
</template>

<style scoped>
.muted {
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-sm);
}
.nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.nav-item {
  display: block;
  width: 100%;
  padding: 8px 12px;
  border: none;
  border-radius: var(--kk-radius-sm);
  background: transparent;
  color: var(--kk-text-secondary);
  font-family: inherit;
  font-size: var(--kk-font-size-md);
  text-align: left;
  white-space: nowrap;
  cursor: pointer;
  transition:
    background var(--kk-duration-fast) var(--kk-ease-out),
    color var(--kk-duration-fast) var(--kk-ease-out);
}
.nav-item:hover {
  background: var(--kk-bg-hover);
  color: var(--kk-color-primary);
}
.nav-item.is-active {
  background: var(--kk-color-primary-soft);
  color: var(--kk-color-primary);
}
.main {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
h3 {
  margin: 0;
  color: var(--kk-text-primary);
}
.pane,
.aside-pane {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  box-sizing: border-box;
  height: 100%;
  background: var(--kk-bg-subtle);
}
.pane {
  padding: 16px;
  border-radius: var(--kk-radius-md);
}
.aside-pane {
  align-items: center;
}
.pane__label {
  color: var(--kk-text-tertiary);
  font-size: var(--kk-font-size-sm);
}
.pane__value {
  color: var(--kk-text-primary);
  font-size: 24px;
}
</style>
`,gg=`<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  KkLayout,
  KkLayoutHeader,
  KkLayoutSider,
  KkLayoutContent,
  KkLayoutFooter,
} from 'kk-ui'

interface NavItem {
  key: string
  label: string
  title: string
  desc: string
}

const navItems: NavItem[] = [
  {
    key: 'overview',
    label: '概览',
    title: '概览',
    desc: '这里是页面的主要内容区域，超出高度时内部滚动。点击左侧导航可切换内容。',
  },
  {
    key: 'components',
    label: '组件',
    title: '组件',
    desc: 'Layout 由 Header / Sider / Content / Footer 四个区块组成，可自由组合与嵌套。',
  },
  {
    key: 'theme',
    label: '主题',
    title: '主题',
    desc: '所有区块的颜色都来自语义 token，四套主题下无需额外覆盖即可自适应。',
  },
]

const active = ref('overview')
const current = computed(
  () => navItems.find((item) => item.key === active.value) ?? navItems[0]
)
<\/script>

<template>
  <KkLayout
    style="
      height: 320px;
      border: 1px solid var(--kk-border-color);
      border-radius: var(--kk-radius-lg);
      overflow: hidden;
    "
  >
    <KkLayoutHeader bordered>
      <template #left>
        <strong>KK 控制台</strong>
      </template>
      <template #right>
        <span class="muted">v0.2.0</span>
      </template>
    </KkLayoutHeader>

    <KkLayout>
      <KkLayoutSider :width="180" bordered>
        <div class="nav">
          <button
            v-for="item in navItems"
            :key="item.key"
            type="button"
            class="nav-item"
            :class="{ 'is-active': active === item.key }"
            @click="active = item.key"
          >
            {{ item.label }}
          </button>
        </div>
      </KkLayoutSider>

      <KkLayoutContent>
        <h3>{{ current.title }}</h3>
        <p>{{ current.desc }}</p>
      </KkLayoutContent>
    </KkLayout>

    <KkLayoutFooter bordered>
      <span class="muted">柔光几何 · 设计系统</span>
    </KkLayoutFooter>
  </KkLayout>
</template>

<style scoped>
.muted {
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-sm);
}
.nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.nav-item {
  display: block;
  width: 100%;
  padding: 8px 12px;
  border: none;
  border-radius: var(--kk-radius-sm);
  background: transparent;
  color: var(--kk-text-secondary);
  font-family: inherit;
  font-size: var(--kk-font-size-md);
  text-align: left;
  cursor: pointer;
  transition:
    background var(--kk-duration-fast) var(--kk-ease-out),
    color var(--kk-duration-fast) var(--kk-ease-out);
}
.nav-item:hover {
  background: var(--kk-bg-hover);
  color: var(--kk-color-primary);
}
.nav-item.is-active {
  background: var(--kk-color-primary-soft);
  color: var(--kk-color-primary);
}
h3 {
  margin: 0 0 8px;
  color: var(--kk-text-primary);
}
p {
  margin: 0;
  color: var(--kk-text-secondary);
  line-height: 1.7;
}
</style>
`,bg=`<script setup lang="ts">
import { KkRow, KkCol } from 'kk-ui'
<\/script>

<template>
  <KkRow :gutter="16">
    <KkCol :span="12" :md="{ span: 8 }">
      <div class="cell">span 12 / md 8</div>
    </KkCol>
    <KkCol :span="12" :md="{ span: 8 }">
      <div class="cell">span 12 / md 8</div>
    </KkCol>
    <KkCol :span="24" :md="{ span: 8 }">
      <div class="cell">span 24 / md 8</div>
    </KkCol>
  </KkRow>

  <KkRow :gutter="[16, 24]" style="margin-top: 24px">
    <KkCol :span="6">
      <div class="cell cell--alt">6</div>
    </KkCol>
    <KkCol :span="6" :offset="6">
      <div class="cell cell--alt">offset 6</div>
    </KkCol>
    <KkCol :span="6">
      <div class="cell cell--alt">6</div>
    </KkCol>
  </KkRow>
</template>

<style scoped>
.cell {
  padding: 16px;
  border-radius: var(--kk-radius-md);
  background: var(--kk-color-primary-soft);
  color: var(--kk-color-primary);
  text-align: center;
  font-size: var(--kk-font-size-sm);
}
.cell--alt {
  background: var(--kk-bg-hover);
  color: var(--kk-text-secondary);
}
</style>
`,hg=`<script setup lang="ts">
import { ref } from 'vue'
import { KkLayout, KkLayoutHeader, KkLayoutSider, KkLayoutContent } from 'kk-ui'
import { KkButton } from 'kk-ui'

const collapsed = ref(false)
const navItems = ['指南', '组件', '主题']
const active = ref('指南')
<\/script>

<template>
  <KkLayout
    style="
      height: 300px;
      border: 1px solid var(--kk-border-color);
      border-radius: var(--kk-radius-lg);
      overflow: hidden;
    "
  >
    <KkLayoutHeader bordered>
      <template #left>
        <strong>文档站</strong>
      </template>
      <template #right>
        <KkButton size="small" @click="collapsed = !collapsed">
          {{ collapsed ? '展开侧栏' : '收起侧栏' }}
        </KkButton>
      </template>
    </KkLayoutHeader>

    <KkLayout>
      <KkLayoutSider
        v-model:collapsed="collapsed"
        :width="200"
        :collapsed-width="56"
        collapsible
        bordered
      >
        <template #logo>
          <span class="logo">{{ collapsed ? 'K' : 'KK UI' }}</span>
        </template>
        <div class="nav">
          <button
            v-for="item in navItems"
            :key="item"
            type="button"
            class="nav-item"
            :class="{ 'is-active': active === item }"
            :title="item"
            @click="active = item"
          >
            <span class="nav-dot" />
            <span v-show="!collapsed" class="nav-text">{{ item }}</span>
          </button>
        </div>
      </KkLayoutSider>

      <KkLayoutContent>
        <p>
          当前选中：<strong>{{ active }}</strong> 。侧边栏收起后宽度收窄为
          {{ collapsed ? 56 : 200 }}px，点击导航可切换内容。
        </p>
      </KkLayoutContent>
    </KkLayout>
  </KkLayout>
</template>

<style scoped>
.logo {
  font-weight: 700;
  color: var(--kk-color-primary);
}
.nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.nav-item {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px 12px;
  border: none;
  border-radius: var(--kk-radius-sm);
  background: transparent;
  color: var(--kk-text-secondary);
  font-family: inherit;
  font-size: var(--kk-font-size-md);
  text-align: left;
  cursor: pointer;
  transition:
    background var(--kk-duration-fast) var(--kk-ease-out),
    color var(--kk-duration-fast) var(--kk-ease-out);
}
.nav-item:hover {
  background: var(--kk-bg-hover);
  color: var(--kk-color-primary);
}
.nav-item.is-active {
  background: var(--kk-color-primary-soft);
  color: var(--kk-color-primary);
}
.nav-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  flex-shrink: 0;
}
.nav-text {
  overflow: hidden;
  white-space: nowrap;
}
p {
  margin: 0;
  color: var(--kk-text-secondary);
  line-height: 1.7;
}
</style>
`,yg=`<script setup lang="ts">
import { ref } from 'vue'
import { KkButton, KkModal } from 'kk-ui'
import type { ModalInstance } from 'kk-ui'

const visible = ref(false)
const loading = ref(false)
const modalRef = ref<ModalInstance | null>(null)

const paragraphs = [
  '弹窗的 max-height 取「组件 token」与「视口推导值」的较小者，长内容交给主体区域内部滚动，不会把弹窗顶出屏幕。',
  '主体区域带 overscroll-behavior: contain，滚到底时不会把滚动继续传给背后的页面。',
  '首次打开后 DOM 会保留，仅切换可见性，二次打开不重新挂载，省下组件初始化与节点创建的开销。',
  '需要彻底销毁时打开 destroyOnClose，关闭动画结束后节点会被移除。',
  'loading 期间主体区域显示遮罩并屏蔽指针事件，避免在加载中误操作。',
  '通过 ref 可以拿到 open / close / reset，适合在事件回调里程序化控制。',
]

function openWithLoading() {
  loading.value = true
  visible.value = true
  setTimeout(() => (loading.value = false), 1400)
}
<\/script>

<template>
  <div class="demo-actions">
    <KkButton @click="openWithLoading"> 长内容 + 加载态 </KkButton>
    <KkButton @click="modalRef?.open()"> 用 ref 打开 </KkButton>
  </div>

  <KkModal
    ref="modalRef"
    v-model="visible"
    title="组件说明"
    subtitle="主体区域内部滚动"
    :loading="loading"
    max-height="60vh"
    footer
    @confirm="visible = false"
  >
    <p v-for="(text, index) in paragraphs" :key="index" class="demo-para">
      {{ text }}
    </p>
  </KkModal>
</template>

<style>
.demo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.demo-para {
  margin: 0 0 12px;
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-sm);
  line-height: 1.8;
}

.demo-para:last-child {
  margin-bottom: 0;
}
</style>
`,_g=`<script setup lang="ts">
import { ref } from 'vue'
import { KkButton, KkModal } from 'kk-ui'

const visible = ref(false)
<\/script>

<template>
  <KkButton type="primary" @click="visible = true"> 打开弹窗 </KkButton>
  <KkModal v-model="visible" title="发布新版本" subtitle="v0.2.0 · 预计影响 1 个包">
    <div class="demo-text">
      <p>
        确认后将构建产物并推送到 npm，当前分支为
        <code>main</code>。发布过程不可中断，完成后会同步生成 CHANGELOG。
      </p>
    </div>
  </KkModal>
</template>

<style>
.demo-text p {
  margin: 0;
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-md);
  line-height: 1.7;
}

.demo-text code {
  padding: 1px 6px;
  border-radius: 5px;
  background: var(--kk-color-primary-soft);
  color: var(--kk-color-primary);
  font-family: var(--kk-font-mono);
  font-size: 12px;
}
</style>
`,xg=`<script setup lang="ts">
import { ref } from 'vue'
import { KkButton, KkModal } from 'kk-ui'

const visible = ref(false)
const position = ref({ x: 0, y: 0 })

function onDrag(value: { x: number; y: number }) {
  position.value = value
}
<\/script>

<template>
  <KkButton @click="visible = true"> 可拖动弹窗 </KkButton>
  <KkModal
    v-model="visible"
    title="拖动我"
    subtitle="按住标题栏拖动，至少保留 56px 在视口内"
    :draggable="true"
    @drag="onDrag"
  >
    <div class="demo-drag">
      <p>当前位移：x {{ position.x.toFixed(0) }}px / y {{ position.y.toFixed(0) }}px</p>
      <p>位移只写进 <code>transform</code>，拖动过程中不会触发组件重渲染。</p>
    </div>
  </KkModal>
</template>

<style>
.demo-drag p {
  margin: 0 0 8px;
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-sm);
  line-height: 1.7;
}

.demo-drag code {
  padding: 1px 6px;
  border-radius: 5px;
  background: var(--kk-color-primary-soft);
  color: var(--kk-color-primary);
  font-family: var(--kk-font-mono);
  font-size: 12px;
}
</style>
`,wg=`<script setup lang="ts">
import { ref } from 'vue'
import { KkButton, KkModal } from 'kk-ui'

const visible = ref(false)
const okLoading = ref(false)

function notify(message: string) {
  window.dispatchEvent(new CustomEvent('kk-toast', { detail: message }))
}

function onConfirm() {
  okLoading.value = true
  notify('已确认，正在执行…')
  setTimeout(() => {
    okLoading.value = false
    visible.value = false
    notify('执行完成')
  }, 1200)
}
<\/script>

<template>
  <KkButton type="primary" @click="visible = true"> 二次确认 </KkButton>
  <KkModal
    v-model="visible"
    title="删除这条记录？"
    subtitle="删除后不可恢复"
    footer
    ok-text="删除"
    :ok-loading="okLoading"
    @confirm="onConfirm"
    @cancel="notify('已取消')"
  >
    <p class="demo-confirm">
      默认底部按钮只抛出 <code>confirm</code> / <code>cancel</code>
      事件，是否关闭弹窗由业务决定 —— 这样异步提交时可以一直保持打开状态。
    </p>
  </KkModal>
</template>

<style>
.demo-confirm {
  margin: 0;
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-sm);
  line-height: 1.7;
}

.demo-confirm code {
  padding: 1px 6px;
  border-radius: 5px;
  background: var(--kk-color-primary-soft);
  color: var(--kk-color-primary);
  font-family: var(--kk-font-mono);
  font-size: 12px;
}
</style>
`,$g=`<script setup lang="ts">
import { ref } from 'vue'
import { KkButton, KkIcon, KkModal, KkTag } from 'kk-ui'

const visible = ref(false)
<\/script>

<template>
  <KkButton @click="visible = true"> 完全自定义 </KkButton>
  <KkModal v-model="visible" :show-close="false" bordered>
    <template #header>
      <div class="demo-head">
        <KkIcon name="lucide:wand-sparkles" size="18" />
        <span>自定义头部</span>
        <KkTag type="primary" size="small"> Beta </KkTag>
      </div>
    </template>

    <p class="demo-slot-body">
      头部、底部、关闭按钮都开放了插槽，默认样式只负责留白与分割线，
      布局完全可以自己接。
    </p>

    <template #footer>
      <div class="demo-foot">
        <KkButton size="small" @click="visible = false"> 稍后再说 </KkButton>
        <KkButton size="small" type="primary" @click="visible = false"> 好的 </KkButton>
      </div>
    </template>
  </KkModal>
</template>

<style>
.demo-head {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--kk-text-primary);
  font-weight: 600;
}

.demo-slot-body {
  margin: 0;
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-sm);
  line-height: 1.7;
}

.demo-foot {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  width: 100%;
}
</style>
`,Sg=`<script setup lang="ts">
import { ref } from 'vue'
import { KkPagination } from 'kk-ui'

const current = ref(1)
<\/script>

<template>
  <KkPagination v-model:current-page="current" :total="200" :page-size="10" />
</template>
`,Kg=`<script setup lang="ts">
import { ref } from 'vue'
import { KkPagination } from 'kk-ui'

const current = ref(3)
const size = ref(10)
<\/script>

<template>
  <KkPagination
    v-model:current-page="current"
    v-model:page-size="size"
    :total="500"
    :page-sizes="[10, 20, 50]"
    layout="prev, pager, next, ->, sizes, jumper, total"
  />
</template>
`,Cg=`<script setup lang="ts">
import { ref } from 'vue'
import { KkPagination } from 'kk-ui'

const current = ref(1)
const size = ref(10)
<\/script>

<template>
  <KkPagination
    v-model:current-page="current"
    v-model:page-size="size"
    :total="200"
    :page-sizes="[10, 20, 50, 100]"
    background
    layout="prev, pager, next, jumper, sizes, total"
  />
</template>
`,Tg=`<script setup lang="ts">
import { ref } from 'vue'
import { KkSelect } from 'kk-ui'
import type { SelectOption } from 'kk-ui'

const value = ref<string | number | null>(null)

const options: SelectOption[] = [
  { value: 'vue', label: 'Vue 3' },
  { value: 'react', label: 'React 18' },
  { value: 'svelte', label: 'Svelte 5' },
  { value: 'solid', label: 'Solid', disabled: true, tip: '暂不支持' },
]

function onSearch(query: string): void {
  // 真实项目里在这里发请求；此处仅演示 search 事件可用
  console.log('search:', query)
}
<\/script>

<template>
  <div class="select-basic">
    <KkSelect
      v-model="value"
      :options="options"
      filterable
      clearable
      placeholder="请选择技术栈"
      @search="onSearch"
    >
      <!-- 自定义选项渲染：可以拿到原始业务字段 -->
      <template #default="{ option }">
        <span class="select-basic__option">
          <span>{{ option.label }}</span>
          <em v-if="option.tip" class="select-basic__tip">{{ String(option.tip) }}</em>
        </span>
      </template>
    </KkSelect>

    <p class="select-basic__result">
      当前值：<code>{{ value ?? '（空）' }}</code>
    </p>
  </div>
</template>

<style>
.select-basic {
  width: 280px;
}

.select-basic__option {
  display: flex;
  align-items: center;
  gap: 8px;
}

.select-basic__tip {
  color: var(--kk-text-tertiary);
  font-size: var(--kk-font-size-xs);
  font-style: normal;
}

.select-basic__result {
  margin: 14px 0 0;
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-sm);
}

.select-basic__result code {
  padding: 1px 6px;
  border-radius: 5px;
  background: var(--kk-color-primary-soft);
  color: var(--kk-color-primary);
  font-family: var(--kk-font-mono);
}
</style>
`,zg=`<script setup lang="ts">
import { ref } from 'vue'
import { KkSelect } from 'kk-ui'
import type { SelectOption } from 'kk-ui'

const value = ref<(string | number)[]>(['css', 'ts'])

const options: SelectOption[] = [
  { value: 'css', label: 'CSS' },
  { value: 'ts', label: 'TypeScript' },
  { value: 'vue', label: 'Vue' },
  { value: 'vite', label: 'Vite' },
  { value: 'vitest', label: 'Vitest' },
  { value: 'scss', label: 'SCSS' },
]
<\/script>

<template>
  <div class="select-multiple">
    <KkSelect
      v-model="value"
      :options="options"
      multiple
      filterable
      clearable
      select-all
      collapse-tags
      :max-tag-count="3"
      :multiple-limit="5"
      placeholder="请选择技能（最多 5 项）"
    />

    <p class="select-multiple__result">
      已选 {{ value.length }} 项：<code>{{ value.join(', ') || '（空）' }}</code>
    </p>
  </div>
</template>

<style>
.select-multiple {
  width: 340px;
}

.select-multiple__result {
  margin: 14px 0 0;
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-sm);
  line-height: 1.7;
}

.select-multiple__result code {
  padding: 1px 6px;
  border-radius: 5px;
  background: var(--kk-color-primary-soft);
  color: var(--kk-color-primary);
  font-family: var(--kk-font-mono);
}
</style>
`,Pg=`<script setup lang="ts">
import { ref } from 'vue'
import { KkSelect } from 'kk-ui'
import type { SelectOption } from 'kk-ui'

/**
 * 远程搜索：\`remote\` + \`remoteMethod\` 组合。
 * 未输入关键字时不展示选项，避免一次拉全量数据。
 */
const REPOS: SelectOption[] = [
  { value: 'vuejs/core', label: 'vuejs/core' },
  { value: 'vuejs/vitepress', label: 'vuejs/vitepress' },
  { value: 'vitejs/vite', label: 'vitejs/vite' },
  { value: 'vueuse/vueuse', label: 'vueuse/vueuse' },
  { value: 'vitest-dev/vitest', label: 'vitest-dev/vitest' },
  { value: 'pnpm/pnpm', label: 'pnpm/pnpm' },
]

const value = ref<string | null>(null)
const loading = ref(false)
const options = ref<SelectOption[]>([])

async function remoteMethod(query: string): Promise<SelectOption[]> {
  if (!query) {
    options.value = []
    return []
  }

  loading.value = true
  try {
    // 用定时器模拟接口延迟，真实项目里换成 fetch
    const hit = await new Promise<SelectOption[]>((resolve) => {
      setTimeout(() => {
        resolve(REPOS.filter((item) => item.label?.includes(query)))
      }, 400)
    })
    options.value = hit
    return hit
  } finally {
    loading.value = false
  }
}
<\/script>

<template>
  <div class="select-remote">
    <KkSelect
      v-model="value"
      :options="options"
      :loading="loading"
      filterable
      remote
      clearable
      :remote-method="remoteMethod"
      placeholder="搜索仓库，如 vue"
    />

    <p class="select-remote__tip">
      输入 <code>v</code> 试试；当前值：<code>{{ value ?? '（空）' }}</code>
    </p>
  </div>
</template>

<style>
.select-remote {
  width: 300px;
}

.select-remote__tip {
  margin: 14px 0 0;
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-sm);
  line-height: 1.7;
}

.select-remote__tip code {
  padding: 1px 6px;
  border-radius: 5px;
  background: var(--kk-color-primary-soft);
  color: var(--kk-color-primary);
  font-family: var(--kk-font-mono);
}
</style>
`,Lg=`<script setup lang="ts">
import { ref } from 'vue'
import { KkButton, KkSelect } from 'kk-ui'
import type { SelectOption } from 'kk-ui'

const value = ref<(string | number)[]>(['fe'])
const options = ref<SelectOption[]>([
  { value: 'fe', label: '前端' },
  { value: 'be', label: '后端' },
])

function addOption(): void {
  const index = options.value.length + 1
  options.value = [
    ...options.value,
    { value: \`role-\${index}\`, label: \`自定义角色 \${index}\` },
  ]
}
<\/script>

<template>
  <div class="select-slots">
    <KkSelect
      v-model="value"
      :options="options"
      multiple
      clearable
      block
      placeholder="自定义每一项与空态"
    >
      <!-- 自定义标签：前面加一个小圆点（value 改名为 tagValue，避免遮蔽外层 ref） -->
      <template #tag="{ label, value: tagValue, remove }">
        <span class="select-slots__tag" @click.stop="remove(tagValue)">
          <i class="select-slots__dot" />
          {{ label }}
        </span>
      </template>

      <!-- 面板底部：放一个「新增」入口，把自由度留给业务 -->
      <template #footer>
        <KkButton size="small" type="primary" @click="addOption">
          新增一个角色
        </KkButton>
      </template>

      <template #empty>
        <span class="select-slots__empty">没有匹配的角色</span>
      </template>
    </KkSelect>
  </div>
</template>

<style>
.select-slots {
  width: 100%;
  max-width: 420px;
}

.select-slots__tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.select-slots__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
}

.select-slots__empty {
  display: block;
  padding: 10px 0;
  color: var(--kk-text-tertiary);
  font-size: var(--kk-font-size-sm);
  text-align: center;
}
</style>
`,Bg=`<script setup lang="ts">
import { ref } from 'vue'
import { KkButton } from 'kk-ui'
import { KkSkeleton } from 'kk-ui'

const loading = ref(true)
<\/script>

<template>
  <KkButton @click="loading = !loading">
    {{ loading ? '加载完成' : '重新加载' }}
  </KkButton>

  <KkSkeleton :loading="loading" style="margin-top: 16px">
    <article class="doc">
      <h3>柔光几何设计语言</h3>
      <p>
        以暮光紫为主色，配合柔和圆角与低饱和中性色，营造会呼吸的界面节奏，
        让信息层级在安静中自然浮现。
      </p>
    </article>

    <template #template>
      <KkSkeleton variant="avatar" />
      <KkSkeleton variant="title" />
      <KkSkeleton :rows="3" />
    </template>
  </KkSkeleton>
</template>

<style scoped>
.doc h3 {
  margin: 0 0 8px;
  color: var(--kk-text-primary);
  font-size: var(--kk-font-size-lg);
}
.doc p {
  margin: 0;
  color: var(--kk-text-secondary);
  line-height: 1.7;
}
</style>
`,Mg=`<script setup lang="ts">
import { ref } from 'vue'
import { KkButton } from 'kk-ui'
import { KkSkeleton } from 'kk-ui'

const loading = ref(true)
<\/script>

<template>
  <KkButton size="small" @click="loading = !loading"> 切换状态 </KkButton>

  <KkSkeleton :loading="loading" style="margin-top: 16px">
    <div class="profile">
      <div class="avatar">A</div>
      <div class="meta">
        <strong>安琪 · 产品经理</strong>
        <span>负责设计系统演进与组件规范落地</span>
      </div>
    </div>

    <template #template>
      <!-- 内层骨架不带 loading，自动继承外层状态 -->
      <KkSkeleton variant="avatar" />
      <KkSkeleton variant="title" />
      <KkSkeleton :rows="2" />
    </template>
  </KkSkeleton>
</template>

<style scoped>
.profile {
  display: flex;
  align-items: center;
  gap: 12px;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: var(--kk-radius-full);
  background: var(--kk-color-primary-soft);
  color: var(--kk-color-primary);
  display: grid;
  place-items: center;
  font-weight: 600;
}
.meta {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.meta span {
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-sm);
}
</style>
`,Vg=`<script setup lang="ts">
import { ref } from 'vue'
import { KkButton } from 'kk-ui'
import { KkSkeleton } from 'kk-ui'

const loading = ref(true)

const articles = [
  { title: '栅格系统的 8 点基准', desc: '以 8px 为节奏单位，让间距形成可预期的层级。' },
  { title: '圆角的语义', desc: '不同圆角半径对应不同亲密程度，而非随意取值。' },
  { title: '低饱和中性色', desc: '用灰阶建立纵深，让品牌色成为唯一焦点。' },
]
<\/script>

<template>
  <KkButton size="small" @click="loading = !loading">
    {{ loading ? '加载完成' : '重新加载' }}
  </KkButton>

  <div class="list" style="margin-top: 16px">
    <KkSkeleton v-if="loading" :rows="3" />

    <template v-else>
      <div v-for="item in articles" :key="item.title" class="card">
        <h4>{{ item.title }}</h4>
        <p>{{ item.desc }}</p>
      </div>
    </template>
  </div>
</template>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.card {
  padding: 16px;
  border-radius: var(--kk-radius-md);
  background: var(--kk-bg-container);
  border: 1px solid var(--kk-border-color);
}
.card h4 {
  margin: 0 0 6px;
  color: var(--kk-text-primary);
}
.card p {
  margin: 0;
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-sm);
}
</style>
`,Ig=`<script setup lang="ts">
import { KkButton, KkSpace } from 'kk-ui'
<\/script>

<template>
  <KkSpace>
    <KkButton type="primary"> 确定 </KkButton>
    <KkButton>取消</KkButton>
  </KkSpace>
</template>
`,Og=`<script setup lang="ts">
import { KkDivider, KkSpace } from 'kk-ui'
<\/script>

<template>
  <KkSpace split size="medium">
    <span>首页</span>
    <span>组件</span>
    <span>主题</span>
    <template #split>
      <KkDivider direction="vertical" />
    </template>
  </KkSpace>
</template>
`,Eg=`<script setup lang="ts">
import { KkButton, KkSpace } from 'kk-ui'
<\/script>

<template>
  <KkSpace direction="vertical" size="medium">
    <KkButton type="primary"> 第一行 </KkButton>
    <KkButton>第二行</KkButton>
    <KkButton>第三行</KkButton>
  </KkSpace>
</template>
`,Ag=`<script setup lang="ts">
import { ref } from 'vue'
import { KkTable, KkTableColumn } from 'kk-ui'

interface Row {
  date: string
  name: string
  address: string
}

const data = ref<Row[]>([
  { date: '2024-01-01', name: '张三', address: '北京市海淀区' },
  { date: '2024-01-02', name: '李四', address: '上海市浦东新区' },
  { date: '2024-01-03', name: '王五', address: '广州市天河区' },
])
<\/script>

<template>
  <KkTable :data="data" row-key="name" border>
    <KkTableColumn prop="date" label="日期" width="140" />
    <KkTableColumn prop="name" label="姓名" width="120">
      <template #default="{ row }">
        <strong>{{ row.name }}</strong>
      </template>
    </KkTableColumn>
    <KkTableColumn prop="address" label="地址" />
  </KkTable>
</template>
`,Rg=`<script setup lang="ts">
import { ref } from 'vue'
import { KkTable, KkTableColumn } from 'kk-ui'

interface Row {
  id: number
  name: string
  dept: string
}

const data = ref<Row[]>(
  Array.from({ length: 45 }, (_, i) => ({
    id: i + 1,
    name: \`员工 \${i + 1}\`,
    dept: ['研发', '设计', '产品', '运营'][i % 4],
  }))
)
<\/script>

<template>
  <KkTable
    :data="data"
    row-key="id"
    border
    :pagination="{
      pageSize: 10,
      pageSizes: [10, 20, 50],
      layout: 'prev, pager, next, jumper, sizes, total',
    }"
  >
    <KkTableColumn prop="id" label="ID" width="80" />
    <KkTableColumn prop="name" label="姓名" width="140" />
    <KkTableColumn prop="dept" label="部门" />
  </KkTable>
</template>
`,jg=`<script setup lang="ts">
import { computed, ref } from 'vue'
import { KkTable, KkTableColumn } from 'kk-ui'

interface Row {
  id: number
  name: string
  score: number
}

const data = ref<Row[]>(
  Array.from({ length: 23 }, (_, i) => ({
    id: i + 1,
    name: \`用户 \${i + 1}\`,
    score: 60 + ((i * 7) % 40),
  }))
)

const selected = ref<Row[]>([])
const selectedCount = computed(() => selected.value.length)
<\/script>

<template>
  <div class="demo-selection">
    <p class="demo-tip">已选 {{ selectedCount }} 项（跨页保留，依赖 rowKey）</p>
    <KkTable
      :data="data"
      row-key="id"
      :selection="selected"
      border
      :pagination="{ pageSize: 10, pageSizes: [10, 20] }"
    >
      <KkTableColumn type="selection" width="60" />
      <KkTableColumn prop="id" label="ID" width="80" />
      <KkTableColumn prop="name" label="姓名" />
      <KkTableColumn prop="score" label="分数" width="100" />
    </KkTable>
  </div>
</template>

<style scoped>
.demo-tip {
  margin: 0 0 12px;
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-sm);
}
</style>
`,Dg=`<script setup lang="ts">
import { ref } from 'vue'
import { KkTable, KkTableColumn } from 'kk-ui'

interface Row {
  name: string
  age: number
  city: string
}

const data = ref<Row[]>([
  { name: '张三', age: 30, city: '北京' },
  { name: '李四', age: 20, city: '上海' },
  { name: '王五', age: 25, city: '广州' },
  { name: '赵六', age: 35, city: '深圳' },
])

function sortByCity(row: Row): string {
  return row.city
}
<\/script>

<template>
  <KkTable :data="data" row-key="name" border>
    <KkTableColumn prop="name" label="姓名" width="120" />
    <KkTableColumn prop="age" label="年龄" width="100" sortable />
    <KkTableColumn
      prop="city"
      label="城市"
      width="120"
      sortable
      :sort-by="sortByCity"
    />
    <KkTableColumn prop="city" label="备注" />
  </KkTable>
</template>
`,Fg=`<script setup lang="ts">
import { ref } from 'vue'
import { KkTabs, KkTabPane } from 'kk-ui'

const active = ref('profile')
<\/script>

<template>
  <KkTabs v-model="active">
    <KkTabPane name="profile">
      <template #label>
        <span class="demo-tab-icon">
          <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
            <path
              d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-4 0-7 2-7 5v1h14v-1c0-3-3-5-7-5z"
              fill="currentColor"
            />
          </svg>
          用户
        </span>
      </template>
    </KkTabPane>
    <KkTabPane name="security" label="安全"> 安全设置内容 </KkTabPane>
    <KkTabPane name="notify" label="通知"> 通知偏好内容 </KkTabPane>
    <KkTabPane name="billing" label="账单"> 账单与发票内容 </KkTabPane>
  </KkTabs>
</template>

<style>
.demo-tab-icon {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
</style>
`,Ng=`<script setup lang="ts">
import { ref } from 'vue'
import { KkTabs, KkTabPane } from 'kk-ui'

const active = ref('order')
<\/script>

<template>
  <KkTabs v-model="active" type="card">
    <KkTabPane name="order" label="订单"> 订单列表 </KkTabPane>
    <KkTabPane name="refund" label="退款"> 退款记录 </KkTabPane>
    <KkTabPane name="review" label="评价"> 我的评价 </KkTabPane>
  </KkTabs>
</template>
`,Hg=`<script setup lang="ts">
import { ref } from 'vue'
import { KkTabs, KkTabPane, type TabName } from 'kk-ui'

interface TabItem {
  name: string
  label: string
  content: string
}

const tabs = ref<TabItem[]>([
  { name: 'tab1', label: '标签 1', content: '内容 1' },
  { name: 'tab2', label: '标签 2', content: '内容 2' },
  { name: 'tab3', label: '标签 3', content: '内容 3' },
])
const active = ref('tab1')

/** 新标签序号取「现有最大序号 + 1」，因此删空后再新增会重新从 1 开始 */
function nextIndex(): number {
  return (
    tabs.value.reduce((max, tab) => {
      const n = Number(tab.name.replace(/^tab/, ''))
      return Number.isFinite(n) && n > max ? n : max
    }, 0) + 1
  )
}

function onAdd(): void {
  const n = nextIndex()
  const name = \`tab\${n}\`
  tabs.value.push({ name, label: \`标签 \${n}\`, content: \`内容 \${n}\` })
  active.value = name
}

/**
 * 关闭只需把面板从列表里移除。
 * 若关的是当前激活项，\`KkTabs\` 会在内部把激活态切到相邻标签并同步 \`v-model\`，
 * 使用方不必再自己算「下一个是谁」。
 */
function onRemove(name: TabName): void {
  const idx = tabs.value.findIndex((tab) => tab.name === name)
  if (idx !== -1) tabs.value.splice(idx, 1)
}
<\/script>

<template>
  <KkTabs v-model="active" editable @tab-add="onAdd" @tab-remove="onRemove">
    <KkTabPane v-for="tab in tabs" :key="tab.name" :name="tab.name" :label="tab.label">
      {{ tab.content }}
    </KkTabPane>
  </KkTabs>
</template>
`,Ug=`<script setup lang="ts">
import { ref } from 'vue'
import { KkTabs, KkTabPane } from 'kk-ui'

const left = ref('a')
const right = ref('a')
<\/script>

<template>
  <div class="demo-position">
    <KkTabs v-model="left" position="left" class="demo-position__col">
      <KkTabPane name="a" label="概览">左侧纵向 · 概览</KkTabPane>
      <KkTabPane name="b" label="成员">左侧纵向 · 成员</KkTabPane>
      <KkTabPane name="c" label="设置">左侧纵向 · 设置</KkTabPane>
    </KkTabs>

    <KkTabs v-model="right" position="right" type="segment" class="demo-position__col">
      <KkTabPane name="a" label="消息">右侧纵向 · 消息</KkTabPane>
      <KkTabPane name="b" label="收藏">右侧纵向 · 收藏</KkTabPane>
      <KkTabPane name="c" label="历史">右侧纵向 · 历史</KkTabPane>
    </KkTabs>
  </div>
</template>

<style>
.demo-position {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  width: 100%;
}

.demo-position__col {
  flex: 1;
  min-width: 260px;
  min-height: 180px;
  padding: 12px;
  border: 1px solid var(--kk-border-color);
  border-radius: var(--kk-radius-lg);
  background: var(--kk-bg-container);
}
</style>
`,Wg=`<script setup lang="ts">
import { ref } from 'vue'
import { KkTag } from 'kk-ui'

const tags = ref(['设计', '开发', '测试'])
<\/script>

<template>
  <KkTag
    v-for="tag in tags"
    :key="tag"
    type="primary"
    closable
    @close="tags = tags.filter((t) => t !== tag)"
  >
    {{ tag }}
  </KkTag>
</template>
`,qg=`<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { KkTag } from 'kk-ui'

const tags = ref(['设计', '开发', '测试'])
const editing = ref(false)
const draft = ref('')
const inputRef = ref<HTMLInputElement | null>(null)

async function startAdd(): Promise<void> {
  editing.value = true
  await nextTick()
  inputRef.value?.focus()
}

function confirmAdd(): void {
  if (!editing.value) return
  const value = draft.value.trim()
  if (value && !tags.value.includes(value)) tags.value.push(value)
  draft.value = ''
  editing.value = false
}

function cancelAdd(): void {
  draft.value = ''
  editing.value = false
}

function remove(tag: string): void {
  tags.value = tags.value.filter((item) => item !== tag)
}
<\/script>

<template>
  <div class="tag-dynamic">
    <KkTag v-for="tag in tags" :key="tag" type="primary" closable @close="remove(tag)">
      {{ tag }}
    </KkTag>

    <input
      v-if="editing"
      ref="inputRef"
      v-model="draft"
      class="tag-dynamic__input"
      placeholder="回车确认"
      @keyup.enter="confirmAdd"
      @keyup.esc="cancelAdd"
      @blur="confirmAdd"
    />
    <button v-else type="button" class="tag-dynamic__add" @click="startAdd">
      <span class="tag-dynamic__plus">+</span> 新增标签
    </button>
  </div>
</template>

<style>
.tag-dynamic {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}

.tag-dynamic__input {
  box-sizing: border-box;
  width: 112px;
  height: 24px;
  padding: 0 8px;
  border: 1px solid var(--kk-color-primary);
  border-radius: var(--kk-radius-sm);
  background: var(--kk-bg-container);
  color: var(--kk-text-primary);
  font-family: inherit;
  font-size: var(--kk-font-size-xs);
  outline: none;
  box-shadow: var(--kk-focus-ring);
}

.tag-dynamic__add {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  box-sizing: border-box;
  height: 24px;
  padding: 0 10px;
  border: 1px dashed var(--kk-border-color-hover);
  border-radius: var(--kk-radius-sm);
  background: transparent;
  color: var(--kk-text-secondary);
  font-family: inherit;
  font-size: var(--kk-font-size-xs);
  cursor: pointer;
  transition:
    border-color var(--kk-duration-fast) var(--kk-ease-out),
    color var(--kk-duration-fast) var(--kk-ease-out);
}

.tag-dynamic__add:hover {
  border-color: var(--kk-color-primary);
  color: var(--kk-color-primary);
}

.tag-dynamic__plus {
  font-size: 14px;
  line-height: 1;
}
</style>
`,Gg=`<script setup lang="ts">
import { KkTag } from 'kk-ui'
<\/script>

<template>
  <KkTag type="primary" effect="dark"> dark </KkTag>
  <KkTag type="primary" effect="light"> light </KkTag>
  <KkTag type="primary" effect="plain"> plain </KkTag>
  <KkTag type="success" round bordered> 胶囊 </KkTag>
  <KkTag type="danger" size="large"> 大号 </KkTag>
  <KkTag type="info" size="small"> 小号 </KkTag>
</template>
`,Yg=`<script setup lang="ts">
import { KkTag } from 'kk-ui'
<\/script>

<template>
  <KkTag type="primary"> 主要 </KkTag>
  <KkTag type="success"> 成功 </KkTag>
  <KkTag type="warning"> 警告 </KkTag>
  <KkTag type="danger"> 危险 </KkTag>
  <KkTag type="info"> 信息 </KkTag>
  <KkTag>默认</KkTag>
</template>
`,Xg=`<script setup lang="ts">
import { ref } from 'vue'
import { KkUpload, type KkUploadFile, type KkUploadRequestOptions } from 'kk-ui'

const fileList = ref<KkUploadFile[]>([])

// 文档站离线演示：用假 Promise 模拟上传，不发起真实网络请求
function fakeRequest(options: KkUploadRequestOptions): Promise<{ url: string }> {
  return new Promise((resolve) => {
    let percent = 0
    const timer = setInterval(() => {
      percent += 20
      options.onProgress({ percent })
      if (percent >= 100) {
        clearInterval(timer)
        resolve({ url: \`https://example.com/\${options.file?.name ?? 'file'}\` })
      }
    }, 120)
  })
}
<\/script>

<template>
  <KkUpload
    v-model="fileList"
    :http-request="fakeRequest"
    :limit="3"
    accept=".png,.jpg,.jpeg,.pdf"
    tip="支持任意文件，最多 3 个；点击触发选择框"
  />
</template>
`,Zg=`<script setup lang="ts">
import { ref } from 'vue'
import { KkUpload, type KkUploadFile, type KkUploadRequestOptions } from 'kk-ui'

const fileList = ref<KkUploadFile[]>([])

function fakeRequest(options: KkUploadRequestOptions): Promise<{ url: string }> {
  return new Promise((resolve) => {
    let percent = 0
    const timer = setInterval(() => {
      percent += 25
      options.onProgress({ percent })
      if (percent >= 100) {
        clearInterval(timer)
        resolve({ url: \`https://example.com/\${options.file?.name ?? 'file'}\` })
      }
    }, 100)
  })
}
<\/script>

<template>
  <KkUpload
    v-model="fileList"
    drag
    multiple
    :http-request="fakeRequest"
    accept="image/*"
    tip="把文件拖到虚线区域即可上传，支持多文件"
  />
</template>
`,Jg=`<script setup lang="ts">
import { ref } from 'vue'
import { KkUpload, type KkUploadFile } from 'kk-ui'

const fileList = ref<KkUploadFile[]>([])
const uploadRef = ref<InstanceType<typeof KkUpload> | null>(null)
const message = ref('')

// 不自动上传：选中后先停留在 ready，待点击「提交」再统一上传
async function beforeUpload(file: KkUploadFile): Promise<boolean> {
  if (!file.raw || !file.raw.type.startsWith('image/')) {
    message.value = \`「\${file.name}」不是图片，已拦截\`
    return false
  }
  if (file.size > 2 * 1024 * 1024) {
    message.value = \`「\${file.name}」超过 2MB，已拦截\`
    return false
  }
  message.value = ''
  return true
}

function onSubmit() {
  uploadRef.value?.submit()
}
<\/script>

<template>
  <div>
    <KkUpload
      ref="uploadRef"
      v-model="fileList"
      :auto-upload="false"
      :before-upload="beforeUpload"
      accept="image/*"
      tip="选好文件后点击「提交」才开始上传（仅允许图片，≤2MB）"
    />
    <p v-if="message" class="upload-tip">
      {{ message }}
    </p>
    <button class="upload-submit" type="button" @click="onSubmit">提交</button>
  </div>
</template>

<style>
.upload-tip {
  margin: 8px 0 0;
  color: var(--kk-color-danger);
  font-size: var(--kk-font-size-sm);
}

.upload-submit {
  margin-top: 12px;
  height: var(--kk-button-height-md);
  padding: 0 var(--kk-space-5);
  border: 1px solid var(--kk-color-primary);
  border-radius: var(--kk-radius-md);
  background: var(--kk-color-primary);
  color: var(--kk-color-primary-contrast);
  font-size: var(--kk-font-size-md);
  cursor: pointer;
}
</style>
`,Qg=`<script setup lang="ts">
import { ref } from 'vue'
import { KkUpload, type KkUploadFile, type KkUploadRequestOptions } from 'kk-ui'

const fileList = ref<KkUploadFile[]>([])

function fakeRequest(options: KkUploadRequestOptions): Promise<{ url: string }> {
  return new Promise((resolve) => {
    let percent = 0
    const timer = setInterval(() => {
      percent += 25
      options.onProgress({ percent })
      if (percent >= 100) {
        clearInterval(timer)
        // 演示用假响应；真实场景此处返回后端给出的访问地址
        resolve({ url: \`https://example.com/\${options.file?.name ?? 'file'}\` })
      }
    }, 100)
  })
}
<\/script>

<template>
  <KkUpload
    v-model="fileList"
    list-type="picture-card"
    :http-request="fakeRequest"
    accept="image/*"
    :limit="6"
    tip="卡片式图片上传，hover 出现预览 / 删除操作"
  />
</template>
`,eb=`<script setup lang="ts">
import { KkWatermark } from 'kk-ui'
<\/script>

<template>
  <KkWatermark content="KK UI 内部资料" :rotate="-22">
    <div class="doc">
      <h3>年度设计复盘</h3>
      <p>
        本季度我们完成了组件库从 0 到 1 的搭建，统一了 4 套主题下的视觉语言。
        下一步将聚焦无障碍与性能预算。
      </p>
      <p>
        水印以 0.15 不透明度覆盖在内容上，且 \`pointer-events: none\`，
        不影响正文的选择与复制。
      </p>
    </div>
  </KkWatermark>
</template>

<style scoped>
.doc {
  padding: 20px;
  border-radius: var(--kk-radius-md);
  background: var(--kk-bg-container);
  border: 1px solid var(--kk-border-color);
}
h3 {
  margin: 0 0 8px;
  color: var(--kk-text-primary);
}
p {
  margin: 0 0 10px;
  color: var(--kk-text-secondary);
  line-height: 1.7;
}
</style>
`,tb=`<script setup lang="ts">
import { KkWatermark } from 'kk-ui'
<\/script>

<template>
  <KkWatermark
    image="https://placehold.co/48x48/5b4fe9/ffffff?text=KK"
    :image-width="48"
    :image-height="48"
    :gap="[120, 120]"
    :opacity="0.25"
  >
    <div class="doc">
      <h3>对外发布稿</h3>
      <p>
        使用图片水印时，\`image\` 优先级高于 \`content\`；
        若图片加载失败则静默跳过，不会阻塞页面渲染。
      </p>
    </div>
  </KkWatermark>
</template>

<style scoped>
.doc {
  padding: 20px;
  border-radius: var(--kk-radius-md);
  background: var(--kk-bg-container);
  border: 1px solid var(--kk-border-color);
}
h3 {
  margin: 0 0 8px;
  color: var(--kk-text-primary);
}
p {
  margin: 0;
  color: var(--kk-text-secondary);
  line-height: 1.7;
}
</style>
`,nb=`<script setup lang="ts">
import { KkWatermark } from 'kk-ui'
<\/script>

<template>
  <KkWatermark content="KK UI 内部资料" moveable :rotate="-22" :opacity="0.35">
    <div class="doc">
      <h3>跟随鼠标的水印</h3>
      <p>
        开启 <code>moveable</code> 后，容器范围内只展示单个水印并跟随光标移动，
        未悬停时自动隐藏，适合重点区域（如详情、合同预览）的低干扰标识。
      </p>
      <p>在该区域内移动鼠标即可看到水印跟随效果。</p>
    </div>
  </KkWatermark>
</template>

<style scoped>
.doc {
  padding: 20px;
  border-radius: var(--kk-radius-md);
  background: var(--kk-bg-container);
  border: 1px solid var(--kk-border-color);
}
h3 {
  margin: 0 0 8px;
  color: var(--kk-text-primary);
}
p {
  margin: 0 0 10px;
  color: var(--kk-text-secondary);
  line-height: 1.7;
}
</style>
`,ab=`<script setup lang="ts">
import { KkWatermark } from 'kk-ui'
<\/script>

<template>
  <KkWatermark :rotate="-15" :opacity="0.2">
    <div class="doc">
      <h3>保密文档</h3>
      <p>下方 #content 插槽的文本会取代 content 属性绘制到水印上。</p>
    </div>

    <template #content> 机密 · 仅限内部传阅 </template>
  </KkWatermark>
</template>

<style scoped>
.doc {
  padding: 20px;
  border-radius: var(--kk-radius-md);
  background: var(--kk-bg-container);
  border: 1px solid var(--kk-border-color);
}
h3 {
  margin: 0 0 8px;
  color: var(--kk-text-primary);
}
p {
  margin: 0;
  color: var(--kk-text-secondary);
  line-height: 1.7;
}
</style>
`,ob={class:"kk-demo"},lb={key:0,class:"kk-demo__head"},sb={key:0,class:"kk-demo__title"},ib={key:1,class:"kk-demo__desc"},rb={key:1,class:"kk-demo__error"},ub={key:1,class:"kk-demo__bar"},cb=["innerHTML"],db=K({__name:"Demo",props:{src:{default:""},title:{default:""},desc:{default:""},column:{type:Boolean,default:!1},defaultOpen:{type:Boolean,default:!1}},setup(a){const n=a,t=Object.assign({"../../../components/demos/button/basic.vue":nv,"../../../components/demos/button/block.vue":lv,"../../../components/demos/button/icon.vue":iv,"../../../components/demos/button/size.vue":uv,"../../../components/demos/button/status.vue":dv,"../../../components/demos/button/type.vue":vv,"../../../components/demos/card/basic.vue":kv,"../../../components/demos/card/variant.vue":hv,"../../../components/demos/cascader/basic.vue":xv,"../../../components/demos/cascader/lazy.vue":Sv,"../../../components/demos/cascader/multiple.vue":Tv,"../../../components/demos/container/basic.vue":Av,"../../../components/demos/container/sections.vue":Dv,"../../../components/demos/divider/basic.vue":Hv,"../../../components/demos/divider/vertical.vue":Wv,"../../../components/demos/drawer/basic.vue":Gv,"../../../components/demos/drawer/footer.vue":Zv,"../../../components/demos/drawer/placement.vue":Qv,"../../../components/demos/drawer/resizable.vue":nf,"../../../components/demos/form/basic.vue":sf,"../../../components/demos/form/label-position.vue":uf,"../../../components/demos/form/rules.vue":df,"../../../components/demos/icon/basic.vue":vf,"../../../components/demos/icon/color.vue":mf,"../../../components/demos/icon/size.vue":gf,"../../../components/demos/input/affix.vue":hf,"../../../components/demos/input/basic.vue":_f,"../../../components/demos/input/size.vue":wf,"../../../components/demos/layout/aside.vue":Lf,"../../../components/demos/layout/basic.vue":Of,"../../../components/demos/layout/grid.vue":Rf,"../../../components/demos/layout/sider.vue":Uf,"../../../components/demos/modal/advanced.vue":Gf,"../../../components/demos/modal/basic.vue":Xf,"../../../components/demos/modal/draggable.vue":Qf,"../../../components/demos/modal/footer.vue":tm,"../../../components/demos/modal/slots.vue":lm,"../../../components/demos/pagination/basic.vue":im,"../../../components/demos/pagination/layout.vue":um,"../../../components/demos/pagination/sizes.vue":dm,"../../../components/demos/select/basic.vue":gm,"../../../components/demos/select/multiple.vue":_m,"../../../components/demos/select/remote.vue":Sm,"../../../components/demos/select/slots.vue":zm,"../../../components/demos/skeleton/basic.vue":Bm,"../../../components/demos/skeleton/combine.vue":Im,"../../../components/demos/skeleton/list.vue":Rm,"../../../components/demos/space/basic.vue":Dm,"../../../components/demos/space/split.vue":Nm,"../../../components/demos/space/vertical.vue":Um,"../../../components/demos/table/basic.vue":qm,"../../../components/demos/table/pagination.vue":Ym,"../../../components/demos/table/selection.vue":ek,"../../../components/demos/table/sort.vue":nk,"../../../components/demos/tabs/basic.vue":ok,"../../../components/demos/tabs/card.vue":sk,"../../../components/demos/tabs/editable.vue":rk,"../../../components/demos/tabs/position.vue":dk,"../../../components/demos/tag/basic.vue":vk,"../../../components/demos/tag/dynamic.vue":kk,"../../../components/demos/tag/effect.vue":bk,"../../../components/demos/tag/type.vue":yk,"../../../components/demos/upload/basic.vue":xk,"../../../components/demos/upload/drag.vue":$k,"../../../components/demos/upload/manual.vue":Ck,"../../../components/demos/upload/picture-card.vue":zk,"../../../components/demos/watermark/basic.vue":Bk,"../../../components/demos/watermark/image.vue":Ik,"../../../components/demos/watermark/moveable.vue":Ak,"../../../components/demos/watermark/slot.vue":Dk}),e=Object.assign({"../../../components/demos/button/basic.vue":Fk,"../../../components/demos/button/block.vue":Nk,"../../../components/demos/button/icon.vue":Hk,"../../../components/demos/button/size.vue":Uk,"../../../components/demos/button/status.vue":Wk,"../../../components/demos/button/type.vue":qk,"../../../components/demos/card/basic.vue":Gk,"../../../components/demos/card/variant.vue":Yk,"../../../components/demos/cascader/basic.vue":Xk,"../../../components/demos/cascader/lazy.vue":Zk,"../../../components/demos/cascader/multiple.vue":Jk,"../../../components/demos/container/basic.vue":Qk,"../../../components/demos/container/sections.vue":eg,"../../../components/demos/divider/basic.vue":tg,"../../../components/demos/divider/vertical.vue":ng,"../../../components/demos/drawer/basic.vue":ag,"../../../components/demos/drawer/footer.vue":og,"../../../components/demos/drawer/placement.vue":lg,"../../../components/demos/drawer/resizable.vue":sg,"../../../components/demos/form/basic.vue":ig,"../../../components/demos/form/label-position.vue":rg,"../../../components/demos/form/rules.vue":ug,"../../../components/demos/icon/basic.vue":cg,"../../../components/demos/icon/color.vue":dg,"../../../components/demos/icon/size.vue":pg,"../../../components/demos/input/affix.vue":vg,"../../../components/demos/input/basic.vue":fg,"../../../components/demos/input/size.vue":mg,"../../../components/demos/layout/aside.vue":kg,"../../../components/demos/layout/basic.vue":gg,"../../../components/demos/layout/grid.vue":bg,"../../../components/demos/layout/sider.vue":hg,"../../../components/demos/modal/advanced.vue":yg,"../../../components/demos/modal/basic.vue":_g,"../../../components/demos/modal/draggable.vue":xg,"../../../components/demos/modal/footer.vue":wg,"../../../components/demos/modal/slots.vue":$g,"../../../components/demos/pagination/basic.vue":Sg,"../../../components/demos/pagination/layout.vue":Kg,"../../../components/demos/pagination/sizes.vue":Cg,"../../../components/demos/select/basic.vue":Tg,"../../../components/demos/select/multiple.vue":zg,"../../../components/demos/select/remote.vue":Pg,"../../../components/demos/select/slots.vue":Lg,"../../../components/demos/skeleton/basic.vue":Bg,"../../../components/demos/skeleton/combine.vue":Mg,"../../../components/demos/skeleton/list.vue":Vg,"../../../components/demos/space/basic.vue":Ig,"../../../components/demos/space/split.vue":Og,"../../../components/demos/space/vertical.vue":Eg,"../../../components/demos/table/basic.vue":Ag,"../../../components/demos/table/pagination.vue":Rg,"../../../components/demos/table/selection.vue":jg,"../../../components/demos/table/sort.vue":Dg,"../../../components/demos/tabs/basic.vue":Fg,"../../../components/demos/tabs/card.vue":Ng,"../../../components/demos/tabs/editable.vue":Hg,"../../../components/demos/tabs/position.vue":Ug,"../../../components/demos/tag/basic.vue":Wg,"../../../components/demos/tag/dynamic.vue":qg,"../../../components/demos/tag/effect.vue":Gg,"../../../components/demos/tag/type.vue":Yg,"../../../components/demos/upload/basic.vue":Xg,"../../../components/demos/upload/drag.vue":Zg,"../../../components/demos/upload/manual.vue":Jg,"../../../components/demos/upload/picture-card.vue":Qg,"../../../components/demos/watermark/basic.vue":eb,"../../../components/demos/watermark/image.vue":tb,"../../../components/demos/watermark/moveable.vue":nb,"../../../components/demos/watermark/slot.vue":ab}),{locale:s,t:l}=et(),r=_(""),d=_(n.defaultOpen),p=_(!1);let f;const h=k(()=>n.title?String(s.value).toLowerCase().startsWith("zh")?n.title:wn[n.title]??n.title:"");bo(j=>(r.value=j instanceof Error?j.message:String(j),!1));function x(j){if(!n.src)return;const I=n.src.replace(/^\.\//,"");return Object.keys(j).find(G=>G.endsWith(I))}const C=k(()=>{const j=x(t);return j?t[j].default:void 0}),B=k(()=>{const j=x(e);return j?e[j]:""}),L=/&/g,U=j=>j.replace(L,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function Z(j){const I=/(<!--[\s\S]*?-->)|(<\/?[A-Za-z][\w-]*)|("[^"]*"|'[^']*')|([A-Za-z_@:#][\w-:@.]*(?=\s*=))/g;let G="",ae=0,H;for(;(H=I.exec(j))!==null;){G+=U(j.slice(ae,H.index));const Q=H[1]?"cmt":H[2]?"tag":H[3]?"str":"attr";G+=`<span class="kk-code__${Q}">${U(H[0])}</span>`,ae=H.index+H[0].length}return G+U(j.slice(ae))}const M=k(()=>Z(B.value));function O(j){window.dispatchEvent(new CustomEvent("kk-toast",{detail:j}))}async function E(){if(B.value)try{if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(B.value);else{const j=document.createElement("textarea");j.value=B.value,j.style.position="fixed",j.style.opacity="0",document.body.appendChild(j),j.select(),document.execCommand("copy"),document.body.removeChild(j)}p.value=!0,O(l("docs.demo.copySuccess")),clearTimeout(f),f=setTimeout(()=>p.value=!1,1600)}catch{O(l("docs.demo.copyFail"))}}return(j,I)=>(i(),c("div",ob,[a.title||a.desc?(i(),c("div",lb,[a.title?(i(),c("div",sb,z(h.value),1)):S("",!0),a.desc?(i(),c("div",ib,z(a.desc),1)):S("",!0)])):S("",!0),u("div",{class:g(["kk-demo__body",{"kk-demo__body--col":a.column}])},[C.value&&!r.value?(i(),N(st(C.value),{key:0})):r.value?(i(),c("pre",rb,z(o(l)("docs.demo.loadFail"))+"："+z(r.value),1)):y(j.$slots,"default",{},void 0,void 0,2)],2),B.value?(i(),c("div",ub,[u("button",{type:"button",onClick:I[0]||(I[0]=G=>d.value=!d.value)},[I[1]||(I[1]=u("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[u("path",{d:"m8 6-6 6 6 6M16 6l6 6-6 6"})],-1)),$(" "+z(d.value?o(l)("docs.demo.hideCode"):o(l)("docs.demo.viewCode")),1)]),I[2]||(I[2]=u("div",{class:"kk-demo__spacer"},null,-1)),u("button",{type:"button",onClick:E},z(p.value?o(l)("docs.demo.copied"):o(l)("docs.demo.copy")),1)])):S("",!0),B.value?(i(),c("div",{key:2,class:g(["kk-demo__code",{"is-open":d.value}])},[u("pre",null,[u("code",{innerHTML:M.value},null,8,cb)])],2)):S("",!0)]))}}),pb={class:"kk-grid kk-grid--4"},vb=["onClick"],fb={class:"kk-theme-card__row"},mb={class:"kk-theme-card__meta"},kb={class:"kk-theme-card__name"},gb={class:"kk-theme-card__tag"},bb=K({__name:"ThemeGallery",setup(a){const n=[{name:"light",label:"Light",tag:"默认",page:"#F7F8FC",primary:"#5B4FE9",border:"#E0E3EC",container:"#FFFFFF"},{name:"dark",label:"Dark",tag:"暗色",page:"#0B0D12",primary:"#8B80FF",border:"#2A3040",container:"#1F242F"},{name:"soft",label:"Soft",tag:"柔光",page:"#FFF9FB",primary:"#E879A6",border:"#F5DDE7",container:"#FFFFFF"},{name:"cyber",label:"Cyber",tag:"赛博",page:"#05080F",primary:"#00E5FF",border:"#1E3A52",container:"#0C1220"}],{theme:t}=Mn(),e=_(!1);We(()=>{e.value=!0,qa()||gt("light")});function s(l){gt(l)}return(l,r)=>(i(),c("div",pb,[(i(),c(D,null,pe(n,d=>u("button",{key:d.name,class:g(["kk-theme-card",{"is-active":e.value&&o(t)===d.name}]),type:"button",onClick:p=>s(d.name)},[u("div",{class:"kk-theme-card__preview",style:Fe({background:d.page})},[u("div",{class:"kk-theme-card__bar",style:Fe({background:d.primary,width:"60%"})},null,4),u("div",{class:"kk-theme-card__bar",style:Fe({background:d.border,width:"90%"})},null,4),u("div",fb,[u("div",{class:"kk-theme-card__chip",style:Fe({background:d.container,border:`1px solid ${d.border}`})},null,4),u("div",{class:"kk-theme-card__chip",style:Fe({background:d.primary})},null,4)])],4),u("div",mb,[u("span",kb,z(d.label),1),u("span",gb,z(d.tag),1)])],10,vb)),64))]))}});Ea("zh-CN",{name:"zh-CN",label:"简体中文",docs:{nav:{guide:"指南",components:"组件",theme:"主题"},meta:{previewTheme:"预览主题",switched:"已切换到 {name} 主题"},demo:{viewCode:"查看代码",hideCode:"收起代码",copy:"复制",copied:"已复制",copySuccess:"已复制到剪贴板",copyFail:"复制失败，请手动选择代码",loadFail:"示例加载失败"},home:{badge:"全新多主题系统 · 4 套内置主题",heroTitlePrefix:"一套会",heroTitleAccent:"呼吸",heroTitleSuffix:"的 Vue 3 组件库",heroDesc:"KK UI 以「柔光几何」为设计语言，提供轻量、圆润、有呼吸感的组件体验。完整 TypeScript 支持，主题一键切换。",start:"快速开始",browse:"查看组件",copy:"复制",copied:"已复制到剪贴板",copyFail:"复制失败，请手动复制",featuresEyebrow:"Features",featuresTitle:"为什么选择 KK UI",featuresDesc:"在严谨、实用与轻盈之间，KK 用三层 Token 与柔光几何找到了自己的位置。",overviewEyebrow:"Roadmap",overviewTitle:"组件总览",overviewDesc:"已完成基础组件层，覆盖通用、布局、数据展示、数据录入与反馈五类。",count:"{count} 个组件 · 已完成",groups:{general:"通用",layout:"布局",nav:"导航",data:"数据展示",input:"数据录入",feedback:"反馈"},features:{theme:{title:"多主题系统",desc:"4 套内置主题，三层 CSS 变量架构，运行时动态切换，并支持注册自定义主题。"},ts:{title:"完整 TypeScript",desc:"全部使用 script setup 与 defineProps 泛型，Props、Events、Slots 类型完整导出。"},tree:{title:"按需引入",desc:"每个组件独立目录、独立样式入口，构建产物同时提供 ES 与 CJS 格式。"},design:{title:"柔光几何设计",desc:"双层阴影、柔和焦点环、圆润圆角，让界面更有层次与呼吸感。"},a11y:{title:"无障碍支持",desc:"语义化标签、ARIA 属性、键盘可达与可见焦点环，交互状态可辨识。"},doc:{title:"配套文档与测试",desc:"每个组件都包含组件、类型、样式、测试、README，交付即完整。"}}}}});Ea("en-US",{name:"en-US",label:"English",docs:{nav:{guide:"Guide",components:"Components",theme:"Theme"},meta:{previewTheme:"Preview theme",switched:"Switched to {name} theme"},demo:{viewCode:"View code",hideCode:"Hide code",copy:"Copy",copied:"Copied",copySuccess:"Copied to clipboard",copyFail:"Copy failed, please select the code manually",loadFail:"Failed to load demo"},home:{badge:"All-new multi-theme system · 4 built-in themes",heroTitlePrefix:"A component library that ",heroTitleAccent:"breathes",heroTitleSuffix:"",heroDesc:"KK UI takes “Soft Geometry” as its design language, delivering a light, rounded and breathable component experience. Full TypeScript support, one-click theme switching.",start:"Get started",browse:"Browse components",copy:"Copy",copied:"Copied to clipboard",copyFail:"Copy failed, please copy manually",featuresEyebrow:"Features",featuresTitle:"Why KK UI",featuresDesc:"Between rigor, practicality and lightness, KK found its place with three-layer tokens and Soft Geometry.",overviewEyebrow:"Roadmap",overviewTitle:"Component overview",overviewDesc:"The base component layer is complete, covering general, layout, data display, data entry and feedback.",count:"{count} components · done",groups:{general:"General",layout:"Layout",nav:"Navigation",data:"Data Display",input:"Data Entry",feedback:"Feedback"},features:{theme:{title:"Multi-theme system",desc:"4 built-in themes, a three-layer CSS variable architecture, runtime switching, plus custom theme registration."},ts:{title:"Full TypeScript",desc:"All written with script setup and generic defineProps; Props, Events and Slots types are fully exported."},tree:{title:"Tree-shakeable",desc:"Each component has its own directory and style entry; builds ship both ES and CJS formats."},design:{title:"Soft Geometry design",desc:"Double-layer shadows, soft focus rings and rounded corners give the UI more depth and breathing room."},a11y:{title:"Accessibility",desc:"Semantic tags, ARIA attributes, keyboard reachability and visible focus rings make states discernible."},doc:{title:"Docs & tests included",desc:"Every component ships with component, types, styles, tests and README — complete on delivery."}}}}});const yb={extends:eo,Layout:ev,enhanceApp({app:a}){a.use(si),a.component("Demo",db),a.component("ThemeGallery",bb),a.component("Home",Gi)}};export{yb as R,Gi as _};
