import{d as C,o as i,c,n as h,u as l,r as y,a as $,m as Le,b as g,_ as Za,w as Pe,e as De,f as x,g as ct,F as U,h as ge,i as N,j as xa,k as Ja,l as u,p as K,t as O,q as qe,s as Ze,v as tn,x as Dn,y as vt,z as Ge,A as je,B as Qa,C as k,D as v,E as bt,G as Je,H as At,T as nn,I as yn,J as et,K as ra,L as Zt,M as an,N as Gt,O as Yt,P as el,Q as ua,R as Vt,S as se,U as Nn,V as tl,W as nl,X as St,Y as On,Z as Hn,$ as Un,a0 as al,a1 as ll,a2 as Kt,a3 as _n,a4 as wa,a5 as ln,a6 as ol,a7 as sl,a8 as $a,a9 as xn,aa as il,ab as Sa,ac as rl,ad as ul}from"./framework.C28VfJ6E.js";function Ie(n,a){const t=n;return t.install=e=>{const o=a||n.name;o&&e.component(o,t)},t}const ca="kk";function Ee(n){const a=`${ca}-${n}`,t=()=>a,e=f=>`${a}__${f}`,o=f=>`${a}--${f}`,s=(f,_)=>`${a}__${f}--${_}`,r=(f,_=!0)=>_?`is-${f}`:"",p=f=>`--${ca}-${f}`;return{b:t,e,m:o,em:s,is:r,cssVar:f=>`var(${p(f)})`,cssVarBlock:f=>`var(--${a}-${f})`,cssVarName:p}}const cl=["type","disabled","aria-disabled","aria-busy"],dl=C({name:"KkButton",inheritAttrs:!1,__name:"Button",props:{type:{default:"default"},size:{default:"medium"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},block:{type:Boolean,default:!1},nativeType:{default:"button"}},emits:["click"],setup(n,{emit:a}){const t=n,e=a,o=Ee("button"),s=g(()=>[o.b(),o.m(t.type),o.m(t.size),o.is("disabled",t.disabled),o.is("loading",t.loading),o.is("block",t.block)]);function r(p){if(t.disabled||t.loading){p.preventDefault(),p.stopPropagation();return}e("click",p)}return(p,d)=>(i(),c("button",Le({class:s.value,type:n.nativeType,disabled:n.disabled||n.loading,"aria-disabled":n.disabled||n.loading,"aria-busy":n.loading},p.$attrs,{onClick:r}),[n.loading?(i(),c("span",{key:0,class:h(l(o).e("spinner")),"aria-hidden":"true"},null,2)):p.$slots.icon?(i(),c("span",{key:1,class:h(l(o).e("icon"))},[y(p.$slots,"icon")],2)):$("",!0),p.$slots.default?(i(),c("span",{key:2,class:h(l(o).e("text"))},[y(p.$slots,"default")],2)):$("",!0)],16,cl))}}),ve=Ie(dl,"KkButton"),Jt=new Map,In=[];function da(n){const a={width:n.width??24,height:n.height??24};let t=0;for(const[e,o]of Object.entries(n.icons))Jt.set(`${n.prefix}:${e}`,{...a,...o}),t+=1;if(n.aliases)for(const[e,o]of Object.entries(n.aliases)){const s=n.icons[o.parent];s&&(Jt.set(`${n.prefix}:${e}`,{...a,...s,rotate:o.rotate??s.rotate,hFlip:o.hFlip??s.hFlip,vFlip:o.vFlip??s.vFlip}),t+=1)}return In.includes(n.prefix)||In.push(n.prefix),t}function pa(n){if(!n)return;const a=Jt.get(n);if(a)return a;if(!n.includes(":"))for(const t of In){const e=Jt.get(`${t}:${n}`);if(e)return e}}function pl(){return Array.from(Jt.keys())}function vl(n){const a=n.left??0,t=n.top??0,e=n.width??24,o=n.height??24;return`${a} ${t} ${e} ${o}`}function fl(n){const a=[],t=n.width??24,e=n.height??24;return n.hFlip&&a.push(`translate(${t} 0) scale(-1 1)`),n.vFlip&&a.push(`translate(0 ${e}) scale(1 -1)`),n.rotate&&a.push(`rotate(${n.rotate} ${t/2} ${e/2})`),a.join(" ")}let pn=null,Ht=null;function ml(){return pl().some(n=>n.startsWith("lucide:"))}async function kl(){if(!(pn&&ml()))return Ht||(Ht=(async()=>{try{if(pn){da(pn);return}const n=await Za(()=>import("./index.C9150cnU.js"),[]),a=n.icons??n.default;a&&(pn=a,da(a))}catch{}finally{Ht=null}})(),Ht)}const gl=["viewBox","aria-label"],bl=["transform","innerHTML"],hl=["innerHTML"],yl=C({name:"KkIcon",inheritAttrs:!1,__name:"Icon",props:{name:{},size:{default:"var(--kk-font-size-lg)"},color:{default:""},spin:{type:Boolean,default:!1}},setup(n){const a=n,t=Ee("icon"),e=x(0),o=g(()=>(e.value,pa(a.name))),s={small:"var(--kk-font-size-sm)",medium:"var(--kk-font-size-lg)",large:"var(--kk-font-size-xl)"},r=g(()=>{const S=a.size,R=typeof S=="number"?`${S}px`:s[S]??S;return{width:R,height:R,color:a.color||void 0}}),p=g(()=>[t.b(),t.is("spin",a.spin)]),d=g(()=>o.value?vl(o.value):"0 0 24 24"),m=g(()=>o.value?fl(o.value):""),f=g(()=>{var S;return((S=o.value)==null?void 0:S.body)??""});async function _(S){!S||pa(S)||(await kl(),e.value+=1)}return Pe(()=>a.name,_,{immediate:!0}),De(()=>{_(a.name)}),(S,R)=>(i(),c("svg",Le({class:p.value,style:r.value,viewBox:d.value,xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",role:"img","aria-label":n.name},S.$attrs),[m.value?(i(),c("g",{key:0,transform:m.value,innerHTML:f.value},null,8,bl)):(i(),c("g",{key:1,innerHTML:f.value},null,8,hl))],16,gl))}}),Ne=Ie(yl,"KkIcon"),_l=C({name:"KkSpace",inheritAttrs:!1,__name:"Space",props:{size:{default:"small"},direction:{default:"horizontal"},align:{default:"center"},wrap:{type:Boolean,default:!1},fill:{type:Boolean,default:!1},split:{type:Boolean,default:!1}},setup(n){const a=n,t=ct(),e=Ee("space"),o={small:"var(--kk-space-2)",medium:"var(--kk-space-3)",large:"var(--kk-space-4)"};function s(f){return f===void 0?o.small:typeof f=="number"?`${f}px`:o[f]??o.small}const r=g(()=>[e.b(),e.m(a.direction),e.m(`align-${a.align}`),e.is("wrap",a.wrap),e.is("fill",a.fill)]),p=g(()=>{const f=a.size,[_,S]=Array.isArray(f)?f:[f,f];return{"--kk-space-row-gap":s(_),"--kk-space-column-gap":s(S)}}),d=g(()=>{var R;const f=[],_=E=>{if(Array.isArray(E)){E.forEach(_);return}if(Ja(E)){if(E.type===U&&Array.isArray(E.children)){_(E.children);return}f.push(E)}};if(_(((R=t.default)==null?void 0:R.call(t))??[]),!a.split||f.length<=1)return f;const S=[];return f.forEach((E,Z)=>{var J;Z>0&&S.push(xa("span",{class:e.e("split"),key:`split-${Z}`},(J=t.split)==null?void 0:J.call(t))),S.push(E)}),S}),m=f=>f.node;return(f,_)=>(i(),c("div",Le({class:r.value,style:p.value},f.$attrs),[(i(!0),c(U,null,ge(d.value,(S,R)=>(i(),N(m,{key:R,node:S},null,8,["node"]))),128))],16))}}),tt=Ie(_l,"KkSpace"),xl=["role"],wl=C({name:"KkDivider",inheritAttrs:!1,__name:"Divider",props:{direction:{default:"horizontal"},contentPosition:{default:"center"},borderStyle:{default:"solid"},accent:{type:Boolean,default:!1}},setup(n){const a=n,t=ct(),e=Ee("divider"),o=g(()=>a.direction==="horizontal"&&!!t.default),s=g(()=>[e.b(),e.m(a.direction),e.m(`content-${a.contentPosition}`),e.m(`style-${a.borderStyle}`),e.is("accent",a.accent),e.is("with-text",o.value)]);return(r,p)=>(i(),c("div",Le({class:s.value,role:n.direction==="horizontal"?"separator":void 0},r.$attrs),[o.value?(i(),c("span",{key:0,class:h(l(e).e("text"))},[y(r.$slots,"default")],2)):$("",!0)],16,xl))}}),$t=Ie(wl,"KkDivider"),$l=C({name:"KkCard",inheritAttrs:!1,__name:"Card",props:{title:{default:""},subtitle:{default:""},shadow:{default:"always"},padding:{default:"medium"},hoverable:{type:Boolean,default:!1},bordered:{type:Boolean,default:!0},loading:{type:Boolean,default:!1}},setup(n){const a=n,t=ct(),e=Ee("card"),o=g(()=>!!t.header||!!a.title||!!a.subtitle||!!t.extra),s=g(()=>!!t.footer),r=g(()=>!!t.cover),p=g(()=>[e.b(),e.m(`shadow-${a.shadow}`),e.m(`padding-${a.padding}`),e.is("hoverable",a.hoverable),e.is("bordered",a.bordered),e.is("loading",a.loading)]);return(d,m)=>(i(),c("div",Le({class:p.value},d.$attrs),[r.value?(i(),c("div",{key:0,class:h(l(e).e("cover"))},[y(d.$slots,"cover")],2)):$("",!0),o.value?(i(),c("div",{key:1,class:h(l(e).e("header"))},[y(d.$slots,"header",{},()=>[u("div",{class:h(l(e).e("title-group"))},[n.title||d.$slots.title?(i(),c("div",{key:0,class:h(l(e).e("title"))},[y(d.$slots,"title",{},()=>[K(O(n.title),1)])],2)):$("",!0),n.subtitle||d.$slots.subtitle?(i(),c("div",{key:1,class:h(l(e).e("subtitle"))},[y(d.$slots,"subtitle",{},()=>[K(O(n.subtitle),1)])],2)):$("",!0)],2)]),d.$slots.extra?(i(),c("div",{key:0,class:h(l(e).e("extra"))},[y(d.$slots,"extra")],2)):$("",!0)],2)):$("",!0),u("div",{class:h(l(e).e("body"))},[y(d.$slots,"default"),n.loading?(i(),c("div",{key:0,class:h(l(e).e("loading")),"aria-hidden":"true"},[u("span",{class:h(l(e).e("spinner"))},null,2)],2)):$("",!0)],2),s.value?(i(),c("div",{key:2,class:h(l(e).e("footer"))},[y(d.$slots,"footer")],2)):$("",!0)],16))}}),wt=Ie($l,"KkCard"),Sl=C({name:"KkTag",inheritAttrs:!1,__name:"Tag",props:{type:{default:"default"},size:{default:"medium"},effect:{default:"light"},closable:{type:Boolean,default:!1},round:{type:Boolean,default:!1},bordered:{type:Boolean,default:!0}},emits:["close","click"],setup(n,{emit:a}){const t=n,e=a,o=Ee("tag"),s=g(()=>[o.b(),o.m(t.type),o.m(t.size),o.m(`effect-${t.effect}`),o.is("round",t.round),o.is("bordered",t.bordered)]);function r(d){d.stopPropagation(),e("close",d)}function p(d){e("click",d)}return(d,m)=>(i(),c("span",Le({class:s.value},d.$attrs,{onClick:p}),[d.$slots.icon?(i(),c("span",{key:0,class:h(l(o).e("icon"))},[y(d.$slots,"icon")],2)):$("",!0),u("span",{class:h(l(o).e("text"))},[y(d.$slots,"default")],2),n.closable?(i(),c("button",{key:1,class:h(l(o).e("close")),type:"button","aria-label":"关闭",onClick:r},[...m[0]||(m[0]=[u("svg",{viewBox:"0 0 24 24",width:"10",height:"10","aria-hidden":"true"},[u("path",{d:"M5 5L19 19M19 5L5 19",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1)])],2)):$("",!0)],16))}}),Ye=Ie(Sl,"KkTag"),Et=Symbol("kk-form-context"),wn=Symbol("kk-form-item-context"),Kl=["type","value","placeholder","disabled","readonly","maxlength","minlength","name","autocomplete","autofocus","aria-invalid"],Cl=["aria-label"],Tl={viewBox:"0 0 24 24",width:"14",height:"14","aria-hidden":"true"},zl={key:0,d:"M4 20L20 4",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"},Pl=C({name:"KkInput",inheritAttrs:!1,__name:"Input",props:{modelValue:{default:""},type:{default:"text"},size:{},placeholder:{default:""},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},maxlength:{},minlength:{},invalid:{type:Boolean,default:!1},errorMessage:{default:""},block:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},name:{default:""},autocomplete:{default:"off"}},emits:["update:modelValue","input","change","clear","focus","blur","keydown","enter"],setup(n,{expose:a,emit:t}){const e=n,o=t,s=Ee("input"),r=qe(Et,void 0),p=qe(wn,void 0),d=x(),m=x(!1),f=x(!1),_=g(()=>e.disabled||!!(r!=null&&r.disabled)),S=g(()=>e.size??(r==null?void 0:r.size)??"medium"),R=g(()=>{var X;return e.invalid||!!((X=p==null?void 0:p.message)!=null&&X.value)}),E=g(()=>e.showPassword?f.value?"text":"password":e.type),Z=g(()=>e.modelValue===void 0||e.modelValue===null?"":String(e.modelValue)),J=g(()=>e.clearable&&!_.value&&!e.readonly&&Z.value.length>0),L=g(()=>[s.b(),s.is("block",e.block)]),I=g(()=>[s.e("control"),s.em("control",S.value),s.is("disabled",_.value),s.is("focused",m.value),s.is("readonly",e.readonly),s.is("invalid",R.value)]);function M(X){const de=X.target.value;o("update:modelValue",de),o("input",de),p==null||p.validate("change")}function V(X){o("change",X.target.value),p==null||p.validate("change")}function B(X){m.value=!0,o("focus",X)}function H(X){m.value=!1,o("blur",X),p==null||p.validate("blur")}function ee(X){X.key==="Enter"&&o("enter",X),o("keydown",X)}function ne(){o("update:modelValue",""),o("input",""),o("change",""),o("clear"),Ze(()=>{var X;return(X=d.value)==null?void 0:X.focus()})}function re(){f.value=!f.value,Ze(()=>{const X=d.value;if(!X)return;const de=X.value.length;X.setSelectionRange(de,de)})}function me(){var X;(X=d.value)==null||X.focus()}function ue(){var X;(X=d.value)==null||X.blur()}function Oe(){var X;(X=d.value)==null||X.select()}return a({focus:me,blur:ue,select:Oe,inputRef:d}),(X,de)=>(i(),c("div",{class:h(L.value)},[u("div",Le({class:l(s).e("row")},X.$attrs),[X.$slots.prepend?(i(),c("span",{key:0,class:h(l(s).e("prepend"))},[y(X.$slots,"prepend")],2)):$("",!0),u("div",{class:h(I.value)},[X.$slots.prefix?(i(),c("span",{key:0,class:h(l(s).e("prefix"))},[y(X.$slots,"prefix")],2)):$("",!0),u("input",{ref_key:"inputRef",ref:d,class:h(l(s).e("inner")),type:E.value,value:Z.value,placeholder:n.placeholder,disabled:_.value,readonly:n.readonly,maxlength:n.maxlength,minlength:n.minlength,name:n.name,autocomplete:n.autocomplete,autofocus:n.autofocus,"aria-invalid":R.value,onInput:M,onChange:V,onFocus:B,onBlur:H,onKeydown:ee},null,42,Kl),J.value?(i(),c("button",{key:1,class:h(l(s).e("clear")),type:"button","aria-label":"清空",onClick:ne},[...de[0]||(de[0]=[u("svg",{viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":"true"},[u("path",{d:"M5 5L19 19M19 5L5 19",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1)])],2)):$("",!0),n.showPassword?(i(),c("button",{key:2,class:h(l(s).e("password")),type:"button","aria-label":f.value?"隐藏密码":"显示密码",onClick:re},[(i(),c("svg",Tl,[de[1]||(de[1]=u("path",{d:"M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z",fill:"none",stroke:"currentColor","stroke-width":"2"},null,-1)),de[2]||(de[2]=u("circle",{cx:"12",cy:"12",r:"2.5",fill:"none",stroke:"currentColor","stroke-width":"2"},null,-1)),f.value?$("",!0):(i(),c("path",zl))]))],10,Cl)):$("",!0),X.$slots.suffix?(i(),c("span",{key:3,class:h(l(s).e("suffix"))},[y(X.$slots,"suffix")],2)):$("",!0)],2),X.$slots.append?(i(),c("span",{key:1,class:h(l(s).e("append"))},[y(X.$slots,"append")],2)):$("",!0)],16),n.errorMessage?(i(),c("div",{key:0,class:h(l(s).e("error")),role:"alert"},[de[3]||(de[3]=u("svg",{viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":"true"},[u("circle",{cx:"12",cy:"12",r:"9",fill:"none",stroke:"currentColor","stroke-width":"2"}),u("path",{d:"M12 7v6M12 16.5v.5",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"})],-1)),u("span",null,O(n.errorMessage),1)],2)):$("",!0)],2))}}),He=Ie(Pl,"KkInput"),Ll=C({name:"KkForm",inheritAttrs:!1,__name:"Form",props:{model:{default:()=>({})},rules:{default:()=>({})},labelWidth:{default:""},labelPosition:{default:"right"},size:{default:"medium"},disabled:{type:Boolean,default:!1},showMessage:{type:Boolean,default:!0},inline:{type:Boolean,default:!1},validateOnRuleChange:{type:Boolean,default:!0}},emits:["submit","reset","validate"],setup(n,{expose:a,emit:t}){const e=n,o=t,s=Ee("form"),r=Dn([]),p=g(()=>e.disabled),d=tn({model:e.model,rules:e.rules,size:e.size,disabled:e.disabled,labelWidth:e.labelWidth,labelPosition:e.labelPosition,showMessage:e.showMessage,inline:e.inline,addField(L){r.value.includes(L)||r.value.push(L)},removeField(L){const I=r.value.indexOf(L);I>-1&&r.value.splice(I,1)},notifyValidate(L,I,M){o("validate",L,I,M)}});vt(Et,d),Pe(()=>e.model,L=>{d.model=L},{deep:!1}),Pe(()=>e.rules,L=>{d.rules=L}),Pe(()=>e.disabled,L=>{d.disabled=L}),Pe(()=>e.size,L=>{d.size=L}),Pe(()=>e.labelPosition,L=>{d.labelPosition=L}),Pe(()=>e.labelWidth,L=>{d.labelWidth=L});const m=g(()=>[s.b(),s.m(`label-${e.labelPosition}`),s.is("inline",e.inline),s.is("disabled",e.disabled)]);async function f(L){let I=!0;return(await Promise.all(r.value.map(async V=>{const B=await V.validate();return{prop:V.prop,valid:!B,message:B}}))).forEach(V=>{V.valid||(I=!1)}),L==null||L(I),I}async function _(L){const I=Array.isArray(L)?L:[L];await Promise.all(r.value.filter(M=>I.includes(M.prop)).map(M=>M.validate()))}function S(L){(L?r.value.filter(M=>L.includes(M.prop)):r.value).forEach(M=>M.resetField()),o("reset")}function R(L){(L?r.value.filter(M=>L.includes(M.prop)):r.value).forEach(M=>M.clearValidate())}function E(L){const I=document.querySelector(`[data-kk-form-prop="${L}"]`);I==null||I.scrollIntoView({block:"center",behavior:"smooth"})}function Z(L){L.preventDefault(),o("submit",L)}function J(L){L.preventDefault(),S()}return a({validate:f,validateField:_,resetFields:S,clearValidate:R,scrollToField:E,fields:r,disabled:p}),(L,I)=>(i(),c("form",Le({class:m.value},L.$attrs,{onSubmit:Z,onReset:J}),[y(L.$slots,"default")],16))}});function va(n,a){if(!a)return n;if(typeof n!="object"||n===null)return;const t=a.split(".");let e=n;for(const o of t){if(typeof e!="object"||e===null)return;e=e[o]}return e}function Ka(n){return n?Array.isArray(n)?n:[n]:[]}function Bl(...n){return n.flatMap(a=>Ka(a))}function Ml(n,a){return n.trigger?(Array.isArray(n.trigger)?n.trigger:[n.trigger]).includes(a):a==="change"}const fa=n=>n==null?!0:typeof n=="string"?n.trim()==="":Array.isArray(n)?n.length===0:!1,Vl=/^[\w.!#$%&'*+/=?^`{|}~-]+@[\w-]+(\.[\w-]+)+$/,Ol=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;async function Il(n,a){if(typeof a.validator=="function"){const e=await a.validator(n,a);return e===!0||e===void 0||e===null?"":e===!1?a.message||"校验未通过":typeof e=="string"?e:a.message||"校验未通过"}if(a.required&&fa(n))return a.message||"该字段为必填项";if(fa(n))return"";if(a.type==="number"&&(typeof n!="number"||Number.isNaN(n)))return a.message||"请输入数字";if(a.type==="array"&&!Array.isArray(n))return a.message||"请选择至少一项";if(a.type==="email"&&(typeof n!="string"||!Vl.test(n)))return a.message||"请输入正确的邮箱地址";if(a.type==="url"&&(typeof n!="string"||!Ol.test(n)))return a.message||"请输入正确的链接地址";if(a.pattern&&typeof n=="string"&&!a.pattern.test(n))return a.message||"格式不正确";const t=Array.isArray(n)||typeof n=="string"?n.length:void 0;if(t!==void 0){if(a.min!==void 0&&t<a.min)return a.message||`长度不能少于 ${a.min}`;if(a.max!==void 0&&t>a.max)return a.message||`长度不能超过 ${a.max}`;if(a.len!==void 0&&t!==a.len)return a.message||`长度必须为 ${a.len}`}return""}async function Al(n,a,t){const e=Array.isArray(a)?a:Ka(a),o=t?e.filter(s=>Ml(s,t)):e;for(const s of o){const r=await Il(n,s);if(r)return r}return""}const $n=Ie(Ll,"KkForm"),El=["data-kk-form-prop"],jl=C({name:"KkFormItem",inheritAttrs:!1,__name:"FormItem",props:{prop:{default:""},label:{default:""},labelWidth:{default:""},required:{type:Boolean,default:!1},rules:{default:()=>[]},showMessage:{type:Boolean,default:!0},error:{default:""}},setup(n,{expose:a}){const t=n,e=Ee("form-item"),o=qe(Et,void 0),s=x(""),r=x(!1),p=g(()=>(o==null?void 0:o.labelPosition)??"right"),d=g(()=>{const V=t.labelWidth||(o==null?void 0:o.labelWidth)||"";return typeof V=="number"?`${V}px`:V}),m=g(()=>t.showMessage&&((o==null?void 0:o.showMessage)??!0)),f=g(()=>{var V;return Bl((V=o==null?void 0:o.rules)==null?void 0:V[t.prop],t.rules)}),_=g(()=>t.required||f.value.some(V=>V.required)),S=g(()=>t.prop&&o?va(o.model,t.prop):void 0),R=g(()=>t.error||s.value),E=g(()=>[e.b(),e.m(`label-${p.value}`),e.is("required",_.value),e.is("error",!!R.value),e.is("validating",r.value)]),Z=g(()=>d.value?{width:d.value}:void 0);async function J(V){if(!t.prop||f.value.length===0)return s.value="","";r.value=!0;try{const B=await Al(S.value,f.value,V);return s.value=B,o==null||o.notifyValidate(t.prop,!B,B),B}finally{r.value=!1}}function L(){s.value=""}function I(){if(s.value="",!t.prop||!o)return;const V=va(o.model,t.prop);Array.isArray(V)&&V.splice(0,V.length)}const M={get prop(){return t.prop},message:s,validate:J,resetField:I,clearValidate:L};return vt(wn,M),De(()=>{t.prop&&(o==null||o.addField(M))}),Ge(()=>{o==null||o.removeField(M)}),Pe(S,()=>{s.value&&J("change")}),a({validate:J,clearValidate:L,resetField:I,message:s}),(V,B)=>(i(),c("div",Le({class:E.value,"data-kk-form-prop":n.prop||void 0},V.$attrs),[n.label||V.$slots.label?(i(),c("label",{key:0,class:h(l(e).e("label")),style:je(Z.value)},[y(V.$slots,"label",{},()=>[K(O(n.label),1)])],6)):$("",!0),u("div",{class:h(l(e).e("content"))},[u("div",{class:h(l(e).e("control"))},[y(V.$slots,"default")],2),m.value&&R.value?(i(),c("div",{key:0,class:h(l(e).e("error")),role:"alert"},[y(V.$slots,"error",{},()=>[K(O(R.value),1)])],2)):$("",!0)],2)],16,El))}}),Ot=Ie(jl,"KkFormItem");let ma=0;function Ct(n="kk-id"){return ma+=1,`${n}-${ma}`}const Rl=Object.prototype.toString;function Pn(n){return n==null}function vn(n){return typeof n=="function"}function Ut(n){return Array.isArray(n)}function Fl(n){return Rl.call(n)==="[object Object]"}function Dl(n){if(!Fl(n))return!1;const a=Object.getPrototypeOf(n);return a===null||a===Object.prototype}const bn={name:"zh-CN",label:"简体中文",short:"中",common:{confirm:"确定",cancel:"取消",close:"关闭",clear:"清空",reset:"重置",loading:"加载中",empty:"暂无数据",search:"搜索",noMatch:"无匹配数据",selectAll:"全选",remove:"移除",retry:"重试",expand:"展开",collapse:"收起",copy:"复制",copied:"已复制",preview:"预览",download:"下载",back:"返回",next:"下一步",finish:"完成",yes:"是",no:"否",more:"更多",total:"共 {total} 条",selected:"已选 {count} 项"},modal:{close:"关闭弹窗"},drawer:{close:"关闭抽屉",resize:"拖动调整尺寸"},select:{placeholder:"请选择",multiplePlaceholder:"请选择（可多选）",noData:"无匹配数据",loading:"加载中",create:"创建「{label}」",clear:"清空",removeTag:"移除 {label}",selectAll:"全选",deselectAll:"取消全选",selectedCount:"已选 {count} 项"},cascader:{placeholder:"请选择",noData:"无匹配数据",loading:"加载中",clear:"清空"},upload:{selectFile:"选择文件",drop:"将文件拖到此处，或",clickUpload:"点击上传",uploading:"上传中",success:"上传成功",fail:"上传失败",retry:"重试",remove:"删除",preview:"预览",exceed:"最多只能上传 {limit} 个文件",sizeExceed:"「{name}」大小超过 {size}",typeNotAllowed:"「{name}」不在允许的文件类型内",empty:"暂无文件"},table:{empty:"暂无数据",loading:"加载中",selectAll:"全选本页",selectRow:"选择该行",expandRow:"展开行",collapseRow:"收起行",sortAsc:"点击升序",sortDesc:"点击降序",sortClear:"取消排序"},pagination:{prev:"上一页",next:"下一页",total:"共 {total} 条",sizes:"{size} 条/页",jumper:"前往",page:"页",goto:"跳至 {page} 页"},tabs:{add:"新增标签",close:"关闭「{label}」"},watermark:{text:"KK UI"},skeleton:{loading:"内容加载中"}},An={name:"en-US",label:"English",short:"EN",common:{confirm:"OK",cancel:"Cancel",close:"Close",clear:"Clear",reset:"Reset",loading:"Loading",empty:"No data",search:"Search",noMatch:"No matching data",selectAll:"Select all",remove:"Remove",retry:"Retry",expand:"Expand",collapse:"Collapse",copy:"Copy",copied:"Copied",preview:"Preview",download:"Download",back:"Back",next:"Next",finish:"Finish",yes:"Yes",no:"No",more:"More",total:"{total} items in total",selected:"{count} selected"},modal:{close:"Close dialog"},drawer:{close:"Close drawer",resize:"Drag to resize"},select:{placeholder:"Please select",multiplePlaceholder:"Please select (multiple)",noData:"No matching data",loading:"Loading",create:'Create "{label}"',clear:"Clear",removeTag:"Remove {label}",selectAll:"Select all",deselectAll:"Unselect all",selectedCount:"{count} selected"},cascader:{placeholder:"Please select",noData:"No matching data",loading:"Loading",clear:"Clear"},upload:{selectFile:"Select file",drop:"Drop file here, or",clickUpload:"click to upload",uploading:"Uploading",success:"Upload succeeded",fail:"Upload failed",retry:"Retry",remove:"Remove",preview:"Preview",exceed:"You can upload at most {limit} file(s)",sizeExceed:'"{name}" exceeds the size limit of {size}',typeNotAllowed:'"{name}" is not an allowed file type',empty:"No files"},table:{empty:"No data",loading:"Loading",selectAll:"Select all rows on this page",selectRow:"Select this row",expandRow:"Expand row",collapseRow:"Collapse row",sortAsc:"Click to sort ascending",sortDesc:"Click to sort descending",sortClear:"Clear sort"},pagination:{prev:"Previous",next:"Next",total:"{total} items in total",sizes:"{size} / page",jumper:"Go to",page:"page",goto:"Go to page {page}"},tabs:{add:"Add tab",close:'Close "{label}"'},watermark:{text:"KK UI"},skeleton:{loading:"Content is loading"}},Ca="kk-locale",Ta="zh-CN",jt=new Map;jt.set(bn.name,bn);jt.set(An.name,An);const Nl=x([bn.name,An.name]),Sn=x(bn.name),Hl=()=>typeof document<"u";function Ul(){return[...Nl.value]}function Xt(n=za()){const a=jt.get(n);return typeof(a==null?void 0:a.label)=="string"?a.label:String(n)}function Wl(n=za()){const a=jt.get(n);return typeof(a==null?void 0:a.short)=="string"?a.short:Xt(n)}function za(){return Sn.value}function Qt(n){Sn.value=n,Hl()&&document.documentElement.setAttribute("lang",String(n));try{localStorage.setItem(Ca,String(n))}catch{}}function ql(){let n=null;try{n=localStorage.getItem(Ca)}catch{}if(n&&jt.has(n))return Qt(n),n;const a=typeof navigator<"u"&&navigator.language||"",t=a.toLowerCase().startsWith("zh")?"zh-CN":a?"en-US":Ta;return Qt(t),t}const Gl=/\{(\w+)\}/g;function Yl(n,a){let t=n;for(const e of a.split(".")){if(!Dl(t))return;t=t[e]}return typeof t=="string"?t:void 0}function Xl(n,a){if(!a)return n;const t=Array.isArray(a)?a:void 0;return n.replace(Gl,(e,o)=>{const s=t?t[Number(o)]:a[o];return s==null?e:String(s)})}function Zl(n,a,t){const e=new Set([t??Sn.value,Ta,"en-US"]);for(const o of e){const s=jt.get(o);if(!s)continue;const r=Yl(s,n);if(r!==void 0)return Xl(r,a)}return n}function lt(n){const a=g(()=>Ul()),t=g(()=>Qa(n)??Sn.value),e=g(()=>Xt(t.value)),o=g(()=>Wl(t.value));function s(p,d){return Zl(p,d,t.value)}function r(){const d=String(t.value).startsWith("zh")?"en-US":"zh-CN";Qt(d)}return{locale:t,locales:a,label:e,short:o,setLocale:Qt,toggleLocale:r,t:s}}const Jl=1e3;let ka=0,Wt=0,ga="",ba="";function Pa(){return ka+=1,Jl+ka}function La(){if(typeof document>"u")return()=>{};if(Wt===0){const{body:a}=document;ga=a.style.overflow,ba=a.style.paddingRight;const t=window.innerWidth-document.documentElement.clientWidth;a.style.overflow="hidden",t>0&&(a.style.paddingRight=`${t}px`)}Wt+=1;let n=!1;return()=>{n||(n=!0,Wt=Math.max(0,Wt-1),Wt===0&&(document.body.style.overflow=ga,document.body.style.paddingRight=ba))}}const fn=56,Ql="button, a, input, textarea, select, [data-kk-modal-no-drag]";function eo(n){const a=x(!1),t=x({x:0,y:0});let e=0,o=0,s=0,r=0,p=0,d=0,m=0,f=0,_=!0,S="";function R(){const B=n.target.value;if(!B)return;const{x:H,y:ee}=t.value;if(H===0&&ee===0){B.style.removeProperty("transform");return}B.style.transform=`translate3d(${H.toFixed(1)}px, ${ee.toFixed(1)}px, 0)`}function E(){_=n.bounds()!=="none";const B=n.target.value;if(!_||!B)return;const H=B.getBoundingClientRect();p=fn-H.right,d=window.innerWidth-fn-H.left,m=fn-H.bottom,f=window.innerHeight-fn-H.top}function Z(B){B.addEventListener("pointermove",I),B.addEventListener("pointerup",M),B.addEventListener("pointercancel",M)}function J(B){B.removeEventListener("pointermove",I),B.removeEventListener("pointerup",M),B.removeEventListener("pointercancel",M)}function L(B){var ne,re;if(!n.enabled()||B.button!==0)return;const H=B.target;if(H!=null&&H.closest(Ql))return;const ee=n.target.value;ee&&(B.preventDefault(),a.value=!0,e=B.clientX,o=B.clientY,s=t.value.x,r=t.value.y,E(),S=document.body.style.userSelect,document.body.style.userSelect="none",(ne=ee.setPointerCapture)==null||ne.call(ee,B.pointerId),Z(ee),(re=n.onStart)==null||re.call(n))}function I(B){var ne;if(!a.value)return;const H=s+(B.clientX-e),ee=r+(B.clientY-o);t.value={x:_?Math.min(d,Math.max(p,H)):H,y:_?Math.min(f,Math.max(m,ee)):ee},R(),(ne=n.onMove)==null||ne.call(n,t.value)}function M(B){var ee,ne;if(!a.value)return;const H=n.target.value;a.value=!1,H&&((ee=H.hasPointerCapture)!=null&&ee.call(H,B.pointerId)&&H.releasePointerCapture(B.pointerId),J(H)),document.body.style.userSelect=S,(ne=n.onEnd)==null||ne.call(n,t.value)}function V(){t.value={x:0,y:0},R()}return{dragging:a,position:t,onPointerDown:L,reset:V}}const to=["aria-label","aria-labelledby"],no=["id"],ao=["aria-label"],lo=400,oo=C({name:"KkModal",inheritAttrs:!1,__name:"Modal",props:{modelValue:{type:Boolean,default:!1},title:{default:""},subtitle:{default:""},width:{},height:{},maxHeight:{},top:{},center:{type:Boolean,default:!1},size:{default:"medium"},draggable:{type:Boolean,default:!1},dragHandle:{default:"header"},dragBounds:{default:"viewport"},resetOnClose:{type:Boolean,default:!0},mask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},destroyOnClose:{type:Boolean,default:!1},lockScroll:{type:Boolean,default:!0},appendTo:{default:"body"},zIndex:{},footer:{type:Boolean,default:!1},okText:{default:""},cancelText:{default:""},okLoading:{type:Boolean,default:!1},bordered:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},ariaLabel:{default:""}},emits:["update:modelValue","open","opened","close","closed","confirm","cancel","drag-start","drag","drag-end"],setup(n,{expose:a,emit:t}){const e=n,o=t,s={small:"420px",medium:"560px",large:"760px",full:"92vw"},r=["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(", "),p=ct(),d=Ee("modal"),m=Ct("kk-modal-title"),{t:f}=lt(),_=g(()=>e.okText||f("common.confirm")),S=g(()=>e.cancelText||f("common.cancel")),R=x(null),E=x(!1),Z=x(!1),J=x(0);let L=null,I=null,M;const V=eo({target:R,enabled:()=>e.draggable&&!e.disabled,bounds:()=>e.dragBounds,onStart:()=>o("drag-start",{...V.position.value}),onMove:D=>o("drag",{...D}),onEnd:D=>o("drag-end",{...D})}),B=g(()=>!!p.header||!!p.title||!!e.title||!!e.subtitle||e.showClose),H=g(()=>!!p.footer||e.footer),ee=g(()=>!!p.title||!!e.title),ne=g(()=>e.zIndex??J.value),re=g(()=>[d.is("center",e.center)]),me=g(()=>{const D={zIndex:ne.value},oe=X(e.top);return oe&&(D["--kk-modal-top"]=oe),D}),ue=g(()=>[d.b(),d.is("draggable",e.draggable),d.is("drag-modal",e.draggable&&e.dragHandle==="modal"),d.is("dragging",V.dragging.value),d.is("disabled",e.disabled),d.is("loading",e.loading),d.is("bordered",e.bordered)]),Oe=g(()=>{const D={};D.width=X(e.width)??s[e.size];const oe=X(e.height);oe&&(D.height=oe);const ie=X(e.maxHeight);return ie&&(D["--kk-modal-max-height"]=ie),D});function X(D){if(D!==void 0)return typeof D=="number"?`${D}px`:D}function de(){Ke(),e.resetOnClose&&V.reset(),I=document.activeElement,Z.value=!0,e.lockScroll&&(L=La()),document.addEventListener("keydown",Re,!0),o("open"),Ze(()=>{var D;return(D=R.value)==null?void 0:D.focus()})}function be(){e.zIndex===void 0&&(J.value=Pa());const D=E.value;if(E.value=!0,D){de();return}Ze(de)}function Ce(){E.value&&(Z.value=!1,document.removeEventListener("keydown",Re,!0),L==null||L(),L=null,te(),e.destroyOnClose&&he())}function Ke(){M&&clearTimeout(M),M=void 0}function he(){Ke(),M=setTimeout(()=>{M=void 0,E.value=!1},lo)}function xe(){o("update:modelValue",!0)}function Te(D="close"){o("close",D),o("update:modelValue",!1)}function q(D){e.disabled||Te(D)}function pe(){o("cancel"),q("cancel")}function Se(){o("closed"),e.destroyOnClose&&(Ke(),E.value=!1)}function we(){e.maskClosable&&q("mask")}function ye(D){e.dragHandle==="header"&&V.onPointerDown(D)}function Ve(D){e.dragHandle==="modal"&&V.onPointerDown(D)}function Re(D){if(D.key==="Escape"&&e.closeOnEsc){D.stopPropagation(),q("esc");return}D.key==="Tab"&&T(D)}function T(D){const oe=R.value;if(!oe)return;const ie=Array.from(oe.querySelectorAll(r)),Be=document.activeElement;if(ie.length===0){D.preventDefault(),oe.focus();return}const G=ie[0],P=ie[ie.length-1];D.shiftKey&&(Be===G||Be===oe)?(D.preventDefault(),P.focus()):!D.shiftKey&&Be===P&&(D.preventDefault(),G.focus())}function te(){var oe;const D=I;I=null,D&&document.contains(D)&&((oe=D.focus)==null||oe.call(D))}return Pe(()=>e.modelValue,D=>{D?be():Ce()},{immediate:!0}),Ge(()=>{document.removeEventListener("keydown",Re,!0),L==null||L(),L=null,Ke()}),a({open:xe,close:Te,reset:V.reset}),(D,oe)=>E.value?(i(),N(yn,{key:0,to:n.appendTo},[k(nn,{name:"kk-modal",onAfterEnter:oe[2]||(oe[2]=ie=>o("opened")),onAfterLeave:Se},{default:v(()=>[bt(u("div",{class:h([l(d).e("overlay"),re.value]),style:je(me.value),onClick:Je(we,["self"])},[u("div",Le({ref_key:"dialogRef",ref:R},D.$attrs,{class:ue.value,style:Oe.value,role:"dialog","aria-modal":"true","aria-label":n.ariaLabel||void 0,"aria-labelledby":ee.value?l(m):void 0,tabindex:"-1",onPointerdown:Ve}),[B.value?(i(),c("header",{key:0,class:h(l(d).e("header")),onPointerdown:ye},[u("div",{class:h(l(d).e("titles"))},[y(D.$slots,"header",{},()=>[ee.value?(i(),c("div",{key:0,id:l(m),class:h(l(d).e("title"))},[y(D.$slots,"title",{},()=>[K(O(n.title),1)])],10,no)):$("",!0),n.subtitle?(i(),c("div",{key:1,class:h(l(d).e("subtitle"))},O(n.subtitle),3)):$("",!0)])],2),n.showClose?(i(),c("button",{key:0,class:h(l(d).e("close")),type:"button","aria-label":l(f)("modal.close"),onClick:oe[0]||(oe[0]=ie=>q("close"))},[y(D.$slots,"close",{},()=>[oe[3]||(oe[3]=u("svg",{viewBox:"0 0 24 24",width:"14",height:"14","aria-hidden":"true"},[u("path",{d:"M5 5L19 19M19 5L5 19",fill:"none",stroke:"currentColor","stroke-width":"2.4","stroke-linecap":"round"})],-1))])],10,ao)):$("",!0)],34)):$("",!0),u("div",{class:h(l(d).e("body"))},[y(D.$slots,"default"),n.loading?(i(),c("div",{key:0,class:h(l(d).e("loading")),"aria-hidden":"true"},[u("span",{class:h(l(d).e("spinner"))},null,2)],2)):$("",!0)],2),H.value?(i(),c("footer",{key:1,class:h(l(d).e("footer"))},[y(D.$slots,"footer",{},()=>[k(l(ve),{disabled:n.disabled,onClick:pe},{default:v(()=>[K(O(S.value),1)]),_:1},8,["disabled"]),k(l(ve),{type:"primary",loading:n.okLoading,disabled:n.disabled,onClick:oe[1]||(oe[1]=ie=>o("confirm"))},{default:v(()=>[K(O(_.value),1)]),_:1},8,["loading","disabled"])])],2)):$("",!0)],16,to)],6),[[At,Z.value]])]),_:3})],8,["to"])):$("",!0)}}),Rt=Ie(oo,"KkModal");function We(n,a="px"){if(!(n==null||n===""))return typeof n=="number"?`${n}${a}`:String(n)}const Ln=["B","KB","MB","GB","TB","PB"];function so(n,a=1){if(!Number.isFinite(n)||n<=0)return`0 ${Ln[0]}`;const t=Math.min(Math.floor(Math.log(n)/Math.log(1024)),Ln.length-1),e=n/1024**t;return`${Number.isInteger(e)?String(e):e.toFixed(a)} ${Ln[t]}`}function mn(n,a,t=1){if(t===0)return[];const e=[];if(t>0)for(let o=n;o<=a;o+=t)e.push(o);else for(let o=n;o>=a;o+=t)e.push(o);return e}function kn(n,a,t){return Math.min(Math.max(n,a),t)}const io=["aria-label","aria-labelledby"],ro=["id"],uo=["aria-label"],co=["aria-label"],po=400,vo=C({name:"KkDrawer",inheritAttrs:!1,__name:"Drawer",props:{modelValue:{type:Boolean,default:!1},title:{default:""},subtitle:{default:""},placement:{default:"right"},size:{default:"30%"},width:{},height:{},resizable:{type:Boolean,default:!1},minSize:{default:200},maxSize:{default:0},mask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},destroyOnClose:{type:Boolean,default:!1},lockScroll:{type:Boolean,default:!0},appendTo:{default:"body"},zIndex:{},footer:{type:Boolean,default:!1},okText:{default:""},cancelText:{default:""},okLoading:{type:Boolean,default:!1},bordered:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},ariaLabel:{default:""}},emits:["update:modelValue","open","opened","close","closed","confirm","cancel","resize"],setup(n,{expose:a,emit:t}){const e=n,o=t,s=["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(", "),r=ct(),p=Ee("drawer"),d=Ct("kk-drawer-title"),{t:m}=lt(),f=g(()=>e.okText||m("common.confirm")),_=g(()=>e.cancelText||m("common.cancel")),S=x(null),R=x(!1),E=x(!1),Z=x(0),J=x(0),L=x(!1);let I=null,M=null,V,B=0,H=0;const ee=g(()=>e.placement==="top"||e.placement==="bottom"),ne=g(()=>e.placement==="left"||e.placement==="top"),re=g(()=>!!r.title||!!e.title),me=g(()=>!!r.header||re.value||!!e.subtitle||e.showClose),ue=g(()=>!!r.footer||e.footer),Oe=g(()=>e.zIndex??Z.value),X=g(()=>[p.b(),p.m(e.placement),p.is("resizable",e.resizable),p.is("resizing",L.value),p.is("disabled",e.disabled),p.is("loading",e.loading),p.is("bordered",e.bordered)]),de=g(()=>{const G={zIndex:Oe.value},P=ee.value?e.height:e.width,Y=J.value>0?`${J.value}px`:We(P)??We(e.size);return Y&&(ee.value?G.height=Y:G.width=Y),G});function be(){he(),M=document.activeElement,E.value=!0,e.lockScroll&&(I=La()),document.addEventListener("keydown",Ve,!0),o("open"),Ze(()=>{var G;return(G=S.value)==null?void 0:G.focus()})}function Ce(){e.zIndex===void 0&&(Z.value=Pa());const G=R.value;if(R.value=!0,G){be();return}Ze(be)}function Ke(){R.value&&(E.value=!1,document.removeEventListener("keydown",Ve,!0),I==null||I(),I=null,T(),e.destroyOnClose&&xe())}function he(){V&&clearTimeout(V),V=void 0}function xe(){he(),V=setTimeout(()=>{V=void 0,R.value=!1},po)}function Te(){o("update:modelValue",!0)}function q(G="close"){o("close",G),o("update:modelValue",!1)}function pe(G){e.disabled||q(G)}function Se(){o("closed"),e.destroyOnClose&&(he(),R.value=!1)}function we(){o("cancel"),pe("cancel")}function ye(){e.maskClosable&&pe("mask")}function Ve(G){if(G.key==="Escape"&&e.closeOnEsc){G.stopPropagation(),pe("esc");return}G.key==="Tab"&&Re(G)}function Re(G){const P=S.value;if(!P)return;const Y=Array.from(P.querySelectorAll(s)),Q=document.activeElement;if(Y.length===0){G.preventDefault(),P.focus();return}const ke=Y[0],ae=Y[Y.length-1];G.shiftKey&&(Q===ke||Q===P)?(G.preventDefault(),ae.focus()):!G.shiftKey&&Q===ae&&(G.preventDefault(),ke.focus())}function T(){var P;const G=M;M=null,G&&document.contains(G)&&((P=G.focus)==null||P.call(G))}const te={right:-1,left:1,bottom:-1,top:1};function D(G){var Q;if(!e.resizable||e.disabled)return;const P=S.value;if(!P)return;G.preventDefault(),L.value=!0,B=P.getBoundingClientRect()[ee.value?"height":"width"],H=ee.value?G.clientY:G.clientX;const Y=G.currentTarget;try{(Q=Y.setPointerCapture)==null||Q.call(Y,G.pointerId)}catch{}Y.addEventListener("pointermove",oe),Y.addEventListener("pointerup",ie),Y.addEventListener("pointercancel",ie)}function oe(G){if(!L.value)return;const P=(ee.value?G.clientY:G.clientX)-H,Y=B+P*te[e.placement],Q=window.innerHeight||window.innerWidth||0,ke=e.maxSize>0?e.maxSize:Q,ae=Math.min(e.minSize,ke);J.value=kn(Math.round(Y),ae,ke)}function ie(G){var Y;if(!L.value)return;L.value=!1;const P=G.currentTarget;try{(Y=P.releasePointerCapture)==null||Y.call(P,G.pointerId)}catch{}P.removeEventListener("pointermove",oe),P.removeEventListener("pointerup",ie),P.removeEventListener("pointercancel",ie),o("resize",J.value)}function Be(){J.value=0}return Pe(()=>e.modelValue,G=>{G?Ce():Ke()},{immediate:!0}),Pe(()=>e.placement,()=>{J.value=0}),Ge(()=>{document.removeEventListener("keydown",Ve,!0),I==null||I(),I=null,he()}),a({open:Te,close:q,reset:Be}),(G,P)=>R.value?(i(),N(yn,{key:0,to:n.appendTo},[k(nn,{name:"kk-drawer",onAfterEnter:P[2]||(P[2]=Y=>o("opened")),onAfterLeave:Se},{default:v(()=>[bt(u("div",{class:h(l(p).e("overlay")),style:je({zIndex:Oe.value}),onClick:Je(ye,["self"])},[u("div",Le({ref_key:"drawerRef",ref:S},G.$attrs,{class:X.value,style:de.value,role:"dialog","aria-modal":"true","aria-label":n.ariaLabel||void 0,"aria-labelledby":re.value?l(d):void 0,tabindex:"-1"}),[me.value?(i(),c("header",{key:0,class:h(l(p).e("header"))},[u("div",{class:h(l(p).e("titles"))},[y(G.$slots,"header",{},()=>[re.value?(i(),c("div",{key:0,id:l(d),class:h(l(p).e("title"))},[y(G.$slots,"title",{},()=>[K(O(n.title),1)])],10,ro)):$("",!0),n.subtitle?(i(),c("div",{key:1,class:h(l(p).e("subtitle"))},O(n.subtitle),3)):$("",!0)])],2),n.showClose?(i(),c("button",{key:0,class:h(l(p).e("close")),type:"button","aria-label":l(m)("drawer.close"),onClick:P[0]||(P[0]=Y=>pe("close"))},[y(G.$slots,"close",{},()=>[P[3]||(P[3]=u("svg",{viewBox:"0 0 24 24",width:"14",height:"14","aria-hidden":"true"},[u("path",{d:"M5 5L19 19M19 5L5 19",fill:"none",stroke:"currentColor","stroke-width":"2.4","stroke-linecap":"round"})],-1))])],10,uo)):$("",!0)],2)):$("",!0),u("div",{class:h(l(p).e("body"))},[y(G.$slots,"default"),n.loading?(i(),c("div",{key:0,class:h(l(p).e("loading")),"aria-hidden":"true"},[u("span",{class:h(l(p).e("spinner"))},null,2)],2)):$("",!0)],2),ue.value?(i(),c("footer",{key:1,class:h(l(p).e("footer"))},[y(G.$slots,"footer",{},()=>[k(l(ve),{disabled:n.disabled,onClick:we},{default:v(()=>[K(O(_.value),1)]),_:1},8,["disabled"]),k(l(ve),{type:"primary",loading:n.okLoading,disabled:n.disabled,onClick:P[1]||(P[1]=Y=>o("confirm"))},{default:v(()=>[K(O(f.value),1)]),_:1},8,["loading","disabled"])])],2)):$("",!0),n.resizable?(i(),c("span",{key:2,class:h([l(p).e("resizer"),l(p).is("vertical",ee.value),l(p).is("reverse",ne.value)]),role:"separator","aria-orientation":"vertical","aria-label":l(m)("drawer.resize"),onPointerdown:D},null,42,co)):$("",!0)],16,io)],6),[[At,E.value]])]),_:3})],8,["to"])):$("",!0)}}),on=Ie(vo,"KkDrawer"),fo=C({name:"KkContainer",inheritAttrs:!1,__name:"Container",props:{size:{default:"large"},maxWidth:{},minHeight:{},padding:{default:"medium"},centered:{type:Boolean,default:!0},gap:{},direction:{default:"row"},align:{default:"stretch"},justify:{default:"start"},wrap:{type:Boolean,default:!0},bordered:{type:Boolean,default:!1},tag:{default:"div"},fluid:{type:Boolean,default:!1}},setup(n){const a=n,t=Ee("container"),e={small:"640px",medium:"960px",large:"1200px",full:"100%"},o={start:"flex-start",center:"center",end:"flex-end",stretch:"stretch"},s={start:"flex-start",center:"center",end:"flex-end","space-between":"space-between","space-around":"space-around","space-evenly":"space-evenly"},r={none:"0",small:"var(--kk-space-3)",medium:"var(--kk-space-5)",large:"var(--kk-space-6)"},p=g(()=>a.maxWidth!=null?We(a.maxWidth):a.fluid?"100%":e[a.size]),d=g(()=>a.centered&&!a.fluid);function m(){const S=a.padding;return typeof S=="string"&&r[S]?r[S]:We(S)??r.medium}const f=g(()=>[t.b(),t.is("bordered",a.bordered),t.is("centered",d.value)]),_=g(()=>{const S={maxWidth:p.value,padding:m(),display:"flex",flexDirection:a.direction,alignItems:o[a.align],justifyContent:s[a.justify],gap:We(a.gap)??void 0,flexWrap:a.wrap?"wrap":"nowrap"};return d.value&&(S.marginLeft="auto",S.marginRight="auto"),a.minHeight!=null&&(S.minHeight=We(a.minHeight)),a.bordered&&(S.border="1px solid var(--kk-border-color)",S.borderRadius="var(--kk-radius-lg)"),S});return(S,R)=>(i(),N(et(n.tag),Le({class:f.value,style:_.value},S.$attrs),{default:v(()=>[S.$slots.header?(i(),c("div",{key:0,class:h(l(t).e("header"))},[y(S.$slots,"header")],2)):$("",!0),y(S.$slots,"default"),S.$slots.footer?(i(),c("div",{key:1,class:h(l(t).e("footer"))},[y(S.$slots,"footer")],2)):$("",!0)]),_:3},16,["class","style"]))}}),Wn=Ie(fo,"KkContainer"),ha=Symbol("kk-skeleton"),mo=["aria-busy","aria-label"],ko={key:0},go=C({name:"KkSkeleton",inheritAttrs:!1,__name:"Skeleton",props:{loading:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},variant:{default:"text"},width:{},height:{},rows:{default:0},rowWidths:{default:()=>[]},round:{type:Boolean,default:!1},count:{default:1},block:{type:Boolean,default:!1}},setup(n){const a=n,t=ct(),e=Ee("skeleton"),{t:o}=lt(),s=qe(ha,null),r=g(()=>!!t.default),p=g(()=>!!t.template),d=g(()=>r.value||p.value),m=g(()=>s&&!d.value?s.loading.value:a.loading),f=g(()=>!!s&&!r.value);vt(ha,{loading:m});const _=g(()=>[e.b(),e.is("animated",a.animated&&m.value),e.is("block",a.block),e.is("root",d.value)]),S={text:{width:"100%",height:"14px",round:!1},title:{width:"38%",height:"20px",round:!1},button:{width:"72px",height:"32px",round:!0},avatar:{height:"40px",round:!0},image:{width:"100%",height:"160px",round:!1},paragraph:{width:"100%",height:"14px",round:!1}};function R(){const M=S[a.variant];return{width:a.width!=null?We(a.width):M.width,height:a.height!=null?We(a.height):M.height,round:a.round||M.round}}const E=g(()=>{const M=R(),V={height:M.height};return M.width&&(V.width=M.width),V}),Z=g(()=>[e.e("item"),e.em("item",a.variant),e.is("round",R().round)]),J=g(()=>a.variant==="paragraph"?a.rows>0?a.rows:3:0);function L(M){const V=a.rowWidths;return V&&V[M]?V[M]:M===J.value-1?"60%":"100%"}const I=g(()=>Math.max(1,a.count));return(M,V)=>(i(),c("div",{class:h(_.value),"aria-busy":m.value&&!f.value?"true":void 0,"aria-label":m.value&&!f.value?l(o)("skeleton.loading"):void 0},[r.value?y(M.$slots,"default",{},void 0,void 0,0):p.value&&m.value?(i(),c("div",{key:1,class:h(l(e).e("custom"))},[y(M.$slots,"template")],2)):m.value?(i(),c(U,{key:2},[J.value>0?(i(),c("div",ko,[(i(!0),c(U,null,ge(J.value,B=>(i(),c("div",{key:B,class:h([l(e).e("item"),l(e).em("item","text"),l(e).is("block",a.block)]),style:je({width:L(B-1),height:"14px"})},null,6))),128))])):(i(!0),c(U,{key:1},ge(I.value,B=>(i(),c("div",{key:B,class:h(Z.value),style:je(E.value)},null,6))),128))],64)):$("",!0)],10,mo))}}),it=Ie(go,"KkSkeleton"),Ba=Symbol("kkTabsContext"),bo=["aria-label"],ho=["aria-selected","aria-disabled","aria-controls","tabindex","onClick"],yo=["aria-label","onClick"],_o=["aria-label"],xo=["aria-label"],wo=C({name:"KkTabs",inheritAttrs:!1,__name:"Tabs",props:{modelValue:{default:""},type:{default:"line"},size:{default:"medium"},closable:{type:Boolean,default:!1},addable:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},position:{default:"top"},stretch:{type:Boolean,default:!1},animated:{type:Boolean,default:!0},justify:{default:"start"},beforeLeave:{type:Function,default:void 0}},emits:["update:modelValue","change","tab-change","tab-click","tab-remove","tab-add"],setup(n,{expose:a,emit:t}){const e=n,o=t,s=Ee("tabs"),{t:r}=lt(),p=Ct("kk-tabs"),d=x([]),m=g(()=>e.position==="left"||e.position==="right"),f=g(()=>d.value.map(T=>T.name)),_=g(()=>{const T=e.modelValue;return T!==""&&T!==void 0&&f.value.includes(T)?T:d.value.length>0?d.value[0].name:T}),S=g(()=>e.addable||e.editable),R=g(()=>e.closable||e.editable);vt(Ba,{currentName:_,registerPane(T){d.value=[...d.value,T]},unregisterPane(T){d.value=d.value.filter(te=>te.uid!==T)}});function Z(T){return d.value.find(te=>te.name===T)}function J(T){return R.value||T.closable}async function L(T){const te=Z(T);if(!te||te.disabled)return;const D=_.value;if(T===D||e.beforeLeave&&await e.beforeLeave(T,D)===!1)return;o("update:modelValue",T);const oe={name:T,oldName:D};o("change",oe),o("tab-change",oe),await Ze(),be()}function I(T){T.disabled||(o("tab-click",T.name),L(T.name))}function M(T){const te=Z(T);!te||!J(te)||te.disabled||o("tab-remove",T)}function V(){S.value&&o("tab-add")}const B=x(null),H=x(null),ee=new Map,ne=x(0),re=x(!1),me=x(!1),ue=x(0),Oe=x(0),X=x(0);function de(T,te){te?ee.set(T,te):ee.delete(T)}function be(){const T=ee.get(_.value);T&&typeof T.scrollIntoView=="function"&&T.scrollIntoView({block:"nearest",inline:"nearest"})}function Ce(){const T=ee.get(_.value);T&&(m.value?(ue.value=T.offsetHeight,Oe.value=T.offsetWidth,X.value=T.offsetTop):(ue.value=T.offsetWidth,Oe.value=T.offsetHeight,X.value=T.offsetLeft))}function Ke(){const T=B.value;if(!T)return;const te=Math.max(0,T.scrollWidth-T.clientWidth);ne.value>te&&(ne.value=te),re.value=ne.value>0,me.value=ne.value<te}function he(){const T=B.value,te=(T==null?void 0:T.clientWidth)||200;ne.value=Math.max(0,ne.value-te),Ke()}function xe(){const T=B.value;if(!T)return;const te=Math.max(0,T.scrollWidth-T.clientWidth),D=T.clientWidth||200;ne.value=Math.min(te,ne.value+D),Ke()}function Te(){Ke(),Ce()}const q=g(()=>{switch(e.justify){case"center":return"center";case"end":return"flex-end";case"space-between":return"space-between";case"space-around":return"space-around";default:return"flex-start"}}),pe=g(()=>({"--kk-tabs-justify":q.value})),Se=g(()=>({"--kk-tabs-nav-offset":`${ne.value}px`})),we=g(()=>{const te=e.type==="segment"?Oe.value:2;return m.value?{transform:`translateY(${X.value}px)`,height:`${ue.value}px`,width:`${te}px`}:{transform:`translateX(${X.value}px)`,width:`${ue.value}px`,height:`${te}px`}});function ye(T){return[s.e("item"),s.is("active",T.name===_.value),s.is("disabled",T.disabled),s.is("closable",J(T))]}const Ve=g(()=>[s.b(),s.m(e.type),s.m(e.size),s.m(e.position),s.is("stretch",e.stretch),s.is("animated",e.animated),s.is("vertical",m.value)]),Re=g(()=>[s.e("nav"),s.is("vertical",m.value)]);return Pe(_,async()=>{await Ze(),Ce(),be()}),Pe(d,async()=>{await Ze(),Ce(),Ke()},{deep:!1}),De(async()=>{await Ze(),Ce(),Ke(),window.addEventListener("resize",Te)}),Ge(()=>{window.removeEventListener("resize",Te)}),a({setActive:L,removeTab:M,addTab:V,currentName:_}),(T,te)=>(i(),c("div",Le({class:Ve.value,style:pe.value},T.$attrs),[u("div",{class:h([l(s).e("header"),l(s).is("vertical",m.value)])},[T.$slots.prefix?(i(),c("div",{key:0,class:h(l(s).e("prefix"))},[y(T.$slots,"prefix")],2)):$("",!0),u("div",{ref_key:"navScrollRef",ref:B,class:h(l(s).e("nav-scroll"))},[re.value?(i(),c("button",{key:0,type:"button",class:h(l(s).e("nav-prev")),"aria-label":l(r)("pagination.prev"),onClick:he},[y(T.$slots,"nav-prev",{},()=>[te[0]||(te[0]=u("svg",{viewBox:"0 0 24 24",width:"14",height:"14","aria-hidden":"true"},[u("path",{d:"M15 6l-6 6 6 6",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1))])],10,bo)):$("",!0),u("div",{ref_key:"navRef",ref:H,class:h(Re.value),role:"tablist",style:je(Se.value)},[e.type!=="card"?(i(),c("div",{key:0,class:h(l(s).e("active-bar")),style:je(we.value)},null,6)):$("",!0),(i(!0),c(U,null,ge(d.value,D=>(i(),c("div",{key:D.uid,ref_for:!0,ref:oe=>de(D.name,oe),class:h(ye(D)),role:"tab","aria-selected":D.name===_.value,"aria-disabled":D.disabled||void 0,"aria-controls":`${l(p)}-${D.name}`,tabindex:D.disabled?-1:0,onClick:oe=>I(D)},[u("span",{class:h(l(s).e("item-label"))},[D.hasLabelSlot?(i(),N(et(D.renderLabel),{key:0})):(i(),c(U,{key:1},[K(O(D.label),1)],64))],2),J(D)?(i(),c("button",{key:0,type:"button",class:h(l(s).e("item-close")),"aria-label":l(r)("tabs.close",{label:String(D.label)}),onClick:Je(oe=>M(D.name),["stop"])},[...te[1]||(te[1]=[u("svg",{viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":"true"},[u("path",{d:"M5 5L19 19M19 5L5 19",fill:"none",stroke:"currentColor","stroke-width":"2.4","stroke-linecap":"round"})],-1)])],10,yo)):$("",!0)],10,ho))),128))],6),me.value?(i(),c("button",{key:1,type:"button",class:h(l(s).e("nav-next")),"aria-label":l(r)("pagination.next"),onClick:xe},[y(T.$slots,"nav-next",{},()=>[te[2]||(te[2]=u("svg",{viewBox:"0 0 24 24",width:"14",height:"14","aria-hidden":"true"},[u("path",{d:"M9 6l6 6-6 6",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1))])],10,_o)):$("",!0)],2),u("div",{class:h(l(s).e("extra"))},[y(T.$slots,"extra"),y(T.$slots,"more"),S.value?(i(),c("button",{key:0,type:"button",class:h(l(s).e("add")),"aria-label":l(r)("tabs.add"),onClick:V},[y(T.$slots,"add-icon",{},()=>[te[3]||(te[3]=u("svg",{viewBox:"0 0 24 24",width:"16",height:"16","aria-hidden":"true"},[u("path",{d:"M12 5v14M5 12h14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"})],-1))])],10,xo)):$("",!0)],2)],2),u("div",{class:h([l(s).e("content"),l(s).is("animated",e.animated)])},[y(T.$slots,"default")],2)],16))}}),$o=["id","aria-hidden"],So=C({name:"KkTabPane",inheritAttrs:!1,__name:"TabPane",props:{name:{},label:{default:""},disabled:{type:Boolean,default:!1},closable:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},forceRender:{type:Boolean,default:!1}},setup(n,{expose:a}){const t=n,e=ct(),o=Ee("tab-pane"),s=Ct("kk-tab-pane"),r=qe(Ba,null),p=g(()=>r?r.currentName.value===t.name:!1),d=g(()=>p.value||t.forceRender||!t.lazy);let m=0,f=0;const _=tn({uid:0,name:t.name,label:t.label,disabled:t.disabled,closable:t.closable,hasLabelSlot:!!e.label,renderLabel:()=>e.label?e.label({active:p.value,disabled:t.disabled}):null});return Pe(()=>[t.name,t.label,t.disabled,t.closable,!!e.label],([S,R,E,Z,J])=>{_.name=S,_.label=R,_.disabled=E,_.closable=Z,_.hasLabelSlot=J}),De(()=>{m=++f,_.uid=m,r==null||r.registerPane(_)}),Ge(()=>{m&&(r==null||r.unregisterPane(m))}),a({name:t.name}),(S,R)=>d.value?bt((i(),c("div",{key:0,id:`${l(s)}-${t.name}`,class:h([l(o).b(),l(o).is("active",p.value)]),role:"tabpanel","aria-hidden":!p.value||void 0},[y(S.$slots,"default")],10,$o)),[[At,p.value]]):$("",!0)}}),It=Ie(wo,"KkTabs"),Xe=Ie(So,"KkTabPane"),ya=/(auto|scroll|overlay)/;function Ko(n){const a=[];let t=(n==null?void 0:n.parentElement)??null;for(;t;){const e=typeof getComputedStyle=="function"?getComputedStyle(t):null;e&&(ya.test(e.overflow)||ya.test(e.overflowY))&&a.push(t),t=t.parentElement}return a}function Ma(n){var R;const a=x(((R=n.placement)==null?void 0:R.call(n))??"bottom-start"),t=x({x:0,y:0,width:void 0,ready:!1});let e=0,o=!1,s=[],r=null;const p=g(()=>{const E={position:"fixed",left:`${t.value.x}px`,top:`${t.value.y}px`,zIndex:"var(--kk-floating-z-index, 2000)"};return t.value.width!==void 0&&(E.width=`${t.value.width}px`),t.value.ready||(E.visibility="hidden"),E});function d(){var X,de,be,Ce,Ke;const E=n.reference.value,Z=n.floating.value;if(!E||!Z)return;const J=((X=n.offset)==null?void 0:X.call(n))??6,L=((de=n.viewportPadding)==null?void 0:de.call(n))??8,I=E.getBoundingClientRect(),M=Z.getBoundingClientRect(),V=((be=n.placement)==null?void 0:be.call(n))??"bottom-start",[B,H="start"]=V.split("-"),ee=window.innerHeight||0,ne=window.innerWidth||0;let re=B;if(((Ce=n.flip)==null?void 0:Ce.call(n))??!0){const he=ee-I.bottom,xe=I.top,Te=M.height+J+L;re==="bottom"&&he<Te&&xe>he?re="top":re==="top"&&xe<Te&&he>xe&&(re="bottom")}let me=I.left;H==="end"?me=I.right-M.width:H!=="start"&&(me=I.left+(I.width-M.width)/2);const ue=ne-M.width-L;me=Math.min(Math.max(me,L),Math.max(L,ue));const Oe=re==="bottom"?I.bottom+J:I.top-M.height-J;a.value=H==="start"?re:`${re}-${H}`,t.value={x:me,y:Oe,width:(Ke=n.matchWidth)!=null&&Ke.call(n)?I.width:void 0,ready:!0}}async function m(){n.floating.value&&(t.value.ready||(t.value={...t.value,ready:!1}),await Ze(),d())}function f(){e||(e=requestAnimationFrame(()=>{e=0,d()}))}function _(){o||typeof window>"u"||(o=!0,s=Ko(n.reference.value??null),window.addEventListener("scroll",f,!0),window.addEventListener("resize",f),s.forEach(E=>E.addEventListener("scroll",f,!0)),typeof ResizeObserver<"u"&&n.floating.value&&(r=new ResizeObserver(f),r.observe(n.floating.value)))}function S(){o&&(o=!1,window.removeEventListener("scroll",f,!0),window.removeEventListener("resize",f),s.forEach(E=>E.removeEventListener("scroll",f,!0)),s=[],r==null||r.disconnect(),r=null,e&&(cancelAnimationFrame(e),e=0))}return Pe(()=>[n.reference.value,n.floating.value],([,E])=>{E&&m()}),Ge(()=>S()),{resolvedPlacement:a,floatingStyle:p,update:m,start:_,stop:S}}function qn(n,a,t={}){const e=t.events??["pointerdown"],o=t.capture??!0;let s=!1;function r(m){if(t.enabled&&!t.enabled())return;const f=m.target;if(!f)return;n.some(S=>{const R=S.value;return R?R===f||R.contains(f):!1})||a(m)}function p(){s||(s=!0,e.forEach(m=>document.addEventListener(m,r,o)))}function d(){s&&(s=!1,e.forEach(m=>document.removeEventListener(m,r,o)))}return De(()=>{typeof document<"u"&&p()}),Ge(()=>{typeof document<"u"&&d()}),{start:p,stop:d}}const Co=["aria-expanded","aria-disabled","aria-invalid"],To=["aria-label","onClick"],zo=["title"],Po=["value","readonly","placeholder","disabled","name","autofocus","aria-expanded","aria-activedescendant"],Lo=["aria-label"],Bo=["id"],Mo=["checked","indeterminate"],Vo=["aria-multiselectable"],Oo=["id","aria-selected","aria-disabled","onClick","onMouseenter"],Io=["id","onClick","onMouseenter"],Ao=C({name:"KkSelect",inheritAttrs:!1,__name:"Select",props:{modelValue:{type:[String,Number,Boolean,null,Array],default:void 0},options:{default:()=>[]},multiple:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1},filterMethod:{},remote:{type:Boolean,default:!1},remoteMethod:{},allowCreate:{type:Boolean,default:!1},createFilter:{},clearable:{type:Boolean,default:!1},collapseTags:{type:Boolean,default:!1},maxTagCount:{default:void 0},multipleLimit:{default:-1},selectAll:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},placeholder:{default:""},size:{default:void 0},loading:{type:Boolean,default:!1},valueKey:{default:"value"},labelKey:{default:"label"},emptyText:{default:""},placement:{default:"bottom-start"},matchWidth:{type:Boolean,default:!0},popperClass:{default:""},popperWidth:{default:void 0},block:{type:Boolean,default:!1},name:{default:""},autofocus:{type:Boolean,default:!1},openOnFocus:{type:Boolean,default:!1}},emits:["update:modelValue","change","visible-change","clear","search","remove-tag","focus","blur","select","deselect"],setup(n,{expose:a,emit:t}){const e=n,o=t,s=Ee("select"),r=Ct("kk-select"),p=`${r}-listbox`,{t:d}=lt(),m=qe(Et,void 0),f=qe(wn,void 0),_=g(()=>e.disabled||!!(m!=null&&m.disabled)),S=g(()=>e.size??(m==null?void 0:m.size)??"medium"),R=g(()=>{var b;return!!((b=f==null?void 0:f.message)!=null&&b.value)}),E=x(null),Z=x(null),J=x(null),L=x(""),I=x(!1),M=x(!1),V=x(!1),B=x(-1),H=x([]),ee=x([]);function ne(b){const A=b[e.valueKey],j=b[e.labelKey]??(A===null?"":String(A));return{value:A,label:j,disabled:!!b.disabled,isCreate:!1,raw:b}}const re=g(()=>[...(e.options??[]).map(ne),...ee.value]),me=g(()=>e.remote),ue=g(()=>e.multiple);function Oe(b){return Array.isArray(b)}const X=g(()=>ue.value?Oe(e.modelValue)?e.modelValue.filter(b=>b!==void 0):[]:e.modelValue==null?[]:[e.modelValue]);function de(b){return re.value.find(A=>A.value===b)}function be(b){return X.value.includes(b)}const Ce=g(()=>e.filterable&&!e.remote),Ke=g(()=>me.value?[...H.value,...ee.value]:re.value),he=g(()=>{let b=Ke.value;if(Ce.value){const A=L.value.trim().toLowerCase();A&&(b=b.filter(j=>e.filterMethod?e.filterMethod(A,j.raw):String(j.label).toLowerCase().includes(A)))}if(xe()){const A=L.value.trim();b=[...b,{value:A,label:A,disabled:!1,isCreate:!0,raw:{value:A,label:A}}]}return b});function xe(){if(!e.allowCreate||!e.filterable||me.value)return!1;const b=L.value.trim();return!(!b||re.value.some(j=>String(j.label).toLowerCase()===b.toLowerCase()||String(j.value).toLowerCase()===b.toLowerCase())||e.createFilter&&!e.createFilter(b,e.options??[]))}const Te=g(()=>he.value.some(b=>!b.isCreate)||xe());async function q(b){if(!(!e.remote||!e.remoteMethod)){o("search",b);try{const A=await e.remoteMethod(b);H.value=(A??[]).map(ne)}catch{H.value=[]}}}const pe=g(()=>e.placeholder?e.placeholder:ue.value?d("select.multiplePlaceholder"):d("select.placeholder")),Se=g(()=>e.emptyText||d("select.noData")),we=g(()=>{var A;if(ue.value)return"";const b=X.value[0];return b===void 0?"":((A=de(b))==null?void 0:A.label)??(b===null?"":String(b))}),ye=g(()=>e.filterable&&(ue.value||I.value)?L.value:we.value),Ve=g(()=>!e.filterable),Re=g(()=>ue.value?X.value.length===0&&!L.value:e.filterable?!I.value&&we.value==="":we.value===""),T=g(()=>X.value.map(b=>{var A;return{value:b,label:((A=de(b))==null?void 0:A.label)??(b===null?"":String(b))}})),te=g(()=>e.collapseTags&&e.maxTagCount&&e.maxTagCount>0?T.value.slice(0,e.maxTagCount):T.value),D=g(()=>e.collapseTags&&e.maxTagCount&&e.maxTagCount>0?Math.max(0,T.value.length-e.maxTagCount):0),oe=g(()=>e.multipleLimit<0||X.value.length<e.multipleLimit),ie=g(()=>{const b=he.value.filter(A=>!A.disabled&&!A.isCreate);return b.length===0?!1:b.every(A=>be(A.value))}),Be=g(()=>{const b=he.value.filter(j=>!j.disabled&&!j.isCreate);if(b.length===0)return!1;const A=b.filter(j=>be(j.value)).length;return A>0&&A<b.length}),G=Ma({reference:E,floating:Z,placement:()=>e.placement,offset:()=>6,flip:()=>!0,matchWidth:()=>!e.popperWidth&&e.matchWidth}),P=g(()=>{const b=e.popperWidth?We(e.popperWidth):void 0;return b?{width:b}:{}}),Y=qn([E,Z],()=>fe());function Q(){var b,A;e.filterable?(b=J.value)==null||b.focus():(A=E.value)==null||A.focus()}function ke(){const b=he.value.findIndex(A=>!A.disabled);B.value=b}async function ae(){_.value||I.value||(V.value=!0,I.value=!0,M.value=!0,e.filterable&&me.value&&q(""),ke(),o("visible-change",!0),await Ze(),G.update(),G.start(),Y.start(),Q())}function fe(){I.value&&(I.value=!1,o("visible-change",!1),e.filterable&&(L.value=""),G.stop(),Y.stop())}function nt(){I.value?fe():ae()}function Me(b){if(!_.value){if(b.target===J.value){I.value||ae();return}nt()}}function Ae(b){if(!b.disabled){if(b.isCreate&&(ee.value.some(A=>String(A.value)===String(b.value))||(ee.value=[...ee.value,{...b,isCreate:!0}])),ue.value)if(be(b.value))Ue(X.value.filter(A=>A!==b.value)),o("deselect",b.raw);else{if(!oe.value)return;Ue([...X.value,b.value]),o("select",b.raw)}else o("update:modelValue",b.value),o("change",b.value),o("select",b.raw),fe();f==null||f.validate("change")}}function Ue(b){o("update:modelValue",b),o("change",b)}function dt(b){Ae(b)}function mt(b){const A=de(b);Ue(X.value.filter(j=>j!==b)),o("remove-tag",b),A&&o("deselect",A.raw),f==null||f.validate("change")}function pt(b){mt(b)}function Ft(){if(!_.value){if(ue.value){const b=X.value;Ue([]),b.forEach(A=>{const j=de(A);j&&o("deselect",j.raw)})}else o("update:modelValue",null),o("change",null);o("clear"),f==null||f.validate("change")}}function Dt(){const b=he.value.filter(A=>!A.disabled&&!A.isCreate);if(ie.value)b.forEach(A=>o("deselect",A.raw)),Ue([]);else{const A=e.multipleLimit,j=A>0?b.slice(0,A):b;Ue(j.map(le=>le.value)),j.forEach(le=>o("select",le.raw))}f==null||f.validate("change")}function Tt(b){const A=he.value;if(A.length===0)return;let j=B.value;for(let le=0;le<A.length&&(j=(j+b+A.length)%A.length,!!A[j].disabled);le++);B.value=j}function zt(){const b=he.value[B.value];b&&!b.disabled&&Ae(b)}function ht(b){if(!_.value)switch(b.key){case"ArrowDown":b.preventDefault(),I.value?Tt(1):ae();break;case"ArrowUp":b.preventDefault(),I.value?Tt(-1):ae();break;case"Enter":b.preventDefault(),I.value?zt():ae();break;case"Escape":I.value&&(b.preventDefault(),fe());break;case"Tab":I.value&&fe();break;case"Backspace":ue.value&&!L.value&&X.value.length>0&&(b.preventDefault(),mt(X.value[X.value.length-1]));break}}function kt(b){L.value=b.target.value,me.value?q(L.value):o("search",L.value),I.value||ae()}function Pt(b){M.value=!0,o("focus",b),!I.value&&(e.openOnFocus||e.filterable)&&ae()}function Nt(b){M.value=!1,o("blur",b),f==null||f.validate("blur"),fe()}function yt(b){return`${r}-opt-${b}`}const Lt=g(()=>I.value&&B.value>=0?yt(B.value):void 0),_t=g(()=>e.clearable&&!_.value&&(ue.value,X.value.length>0)),Bt=g(()=>[s.b(),s.m(S.value),s.is("disabled",_.value),s.is("block",e.block),s.is("open",I.value),s.is("focused",M.value),s.is("invalid",R.value),s.is("multiple",ue.value)]),Mt=g(()=>[s.e("control"),s.em("control",S.value),s.is("disabled",_.value),s.is("focused",M.value),s.is("invalid",R.value)]),w=g(()=>[s.e("popper"),e.popperClass]);return Pe(()=>e.modelValue,()=>{me.value&&I.value&&q(L.value)}),a({focus:Q,blur:()=>{var b;return(b=J.value)==null?void 0:b.blur()},open:()=>void ae(),close:fe,toggle:()=>nt()}),(b,A)=>(i(),c("div",Le({class:Bt.value},b.$attrs),[u("div",{ref_key:"triggerRef",ref:E,class:h(Mt.value),role:"combobox","aria-expanded":I.value,"aria-haspopup":"listbox","aria-controls":p,"aria-disabled":_.value||void 0,"aria-invalid":R.value||void 0,tabindex:"0",onClick:Me,onKeydown:ht},[b.$slots.prefix?(i(),c("span",{key:0,class:h(l(s).e("prefix"))},[y(b.$slots,"prefix")],2)):$("",!0),ue.value?(i(),c("span",{key:1,class:h(l(s).e("tags"))},[(i(!0),c(U,null,ge(te.value,j=>(i(),c("span",{key:String(j.value),class:h(l(s).e("tag"))},[y(b.$slots,"tag",{label:j.label,value:j.value,remove:pt},()=>[u("span",{class:h(l(s).e("tag-text"))},O(j.label),3),_.value?$("",!0):(i(),c("button",{key:0,type:"button",class:h(l(s).e("tag-close")),"aria-label":l(d)("select.removeTag",{label:j.label}),onClick:Je(le=>pt(j.value),["stop"])},[...A[1]||(A[1]=[u("svg",{viewBox:"0 0 24 24",width:"10",height:"10","aria-hidden":"true"},[u("path",{d:"M5 5L19 19M19 5L5 19",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1)])],10,To))])],2))),128)),D.value>0?(i(),c("span",{key:0,class:h([l(s).e("tag"),l(s).e("tag--collapse")]),title:l(d)("select.selectedCount",{count:T.value.length})}," +"+O(D.value),11,zo)):$("",!0)],2)):$("",!0),u("input",{ref_key:"inputRef",ref:J,class:h(l(s).e("input")),value:ye.value,readonly:Ve.value,placeholder:Re.value?pe.value:"",disabled:_.value,name:n.name||void 0,autofocus:n.autofocus,role:"combobox","aria-haspopup":"listbox","aria-expanded":I.value,"aria-controls":p,"aria-activedescendant":Lt.value,autocomplete:"off",onInput:kt,onFocus:Pt,onBlur:Nt,onKeydown:ht},null,42,Po),_t.value?(i(),c("button",{key:2,type:"button",class:h(l(s).e("clear")),"aria-label":l(d)("select.clear"),onClick:Je(Ft,["stop"])},[...A[2]||(A[2]=[u("svg",{viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":"true"},[u("path",{d:"M5 5L19 19M19 5L5 19",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1)])],10,Lo)):$("",!0),u("span",{class:h(l(s).e("suffix"))},[y(b.$slots,"suffix",{},()=>[y(b.$slots,"arrow",{},()=>[(i(),c("svg",{class:h(l(s).e("arrow")),viewBox:"0 0 24 24",width:"14",height:"14","aria-hidden":"true"},[...A[3]||(A[3]=[u("path",{d:"M6 9l6 6 6-6",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])],2))])])],2)],42,Co),(i(),N(yn,{to:"body"},[V.value?bt((i(),c("div",{key:0,id:l(r),ref_key:"popperRef",ref:Z,class:h(w.value),style:je([l(G).floatingStyle.value,P.value]),onMousedown:A[0]||(A[0]=Je(()=>{},["prevent"]))},[u("div",{class:h(l(s).e("dropdown"))},[b.$slots.header?(i(),c("div",{key:0,class:h(l(s).e("header"))},[y(b.$slots,"header")],2)):$("",!0),n.selectAll&&ue.value?(i(),c("label",{key:1,class:h([l(s).e("select-all"),l(s).is("checked",ie.value),l(s).is("indeterminate",Be.value)]),onClick:Je(Dt,["prevent"])},[u("input",{type:"checkbox",checked:ie.value,indeterminate:Be.value},null,8,Mo),u("span",null,O(ie.value?l(d)("select.deselectAll"):l(d)("select.selectAll")),1)],2)):$("",!0),Te.value?(i(),c("ul",{key:2,id:p,class:h(l(s).e("list")),role:"listbox","aria-multiselectable":ue.value||void 0},[(i(!0),c(U,null,ge(he.value,(j,le)=>(i(),c(U,{key:String(j.value)},[j.isCreate?(i(),c("li",{key:1,id:yt(le),class:h([l(s).e("option"),l(s).e("option--create"),l(s).is("active",le===B.value)]),role:"option","aria-selected":!1,onClick:_e=>dt(j),onMouseenter:_e=>B.value=le},[y(b.$slots,"create",{query:String(j.value)},()=>[u("span",{class:h(l(s).e("option-label"))},O(l(d)("select.create",{label:String(j.value)})),3)])],42,Io)):(i(),c("li",{key:0,id:yt(le),class:h([l(s).e("option"),l(s).is("selected",be(j.value)),l(s).is("active",le===B.value),l(s).is("disabled",j.disabled)]),role:"option","aria-selected":be(j.value),"aria-disabled":j.disabled||void 0,onClick:_e=>dt(j),onMouseenter:_e=>B.value=le},[y(b.$slots,"default",{option:j.raw,index:le,selected:be(j.value)},()=>[u("span",{class:h(l(s).e("option-label"))},O(j.label),3)])],42,Oo))],64))),128))],10,Vo)):$("",!0),e.loading?(i(),c("div",{key:3,class:h(l(s).e("loading")),role:"status"},[y(b.$slots,"loading",{},()=>[K(O(l(d)("select.loading")),1)])],2)):!Te.value&&!xe()?(i(),c("div",{key:4,class:h(l(s).e("empty"))},[y(b.$slots,"empty",{},()=>[K(O(Se.value),1)])],2)):$("",!0),b.$slots.footer?(i(),c("div",{key:5,class:h(l(s).e("footer"))},[y(b.$slots,"footer")],2)):$("",!0)],2)],46,Bo)),[[At,I.value]]):$("",!0)]))],16))}}),sn=Ie(Ao,"KkSelect"),Eo=["aria-expanded","aria-disabled","aria-invalid","aria-activedescendant"],jo=["aria-label","onClick"],Ro=["value","readonly","placeholder","disabled","name","aria-expanded","aria-activedescendant"],Fo=["aria-label"],Do=["id"],No=["aria-multiselectable"],Ho=["id","aria-selected","aria-disabled","onClick"],Uo=["id","aria-multiselectable"],Wo=["id","aria-selected","aria-disabled","onClick","onMouseenter"],qo=["checked"],Go=20,Yo=C({name:"KkCascader",inheritAttrs:!1,__name:"Cascader",props:{modelValue:{default:void 0},options:{default:()=>[]},fieldNames:{default:()=>({value:"value",label:"label",children:"children",disabled:"disabled",leaf:"leaf"})},multiple:{type:Boolean,default:!1},checkStrictly:{type:Boolean,default:!0},emitPath:{type:Boolean,default:!0},showAllLevels:{type:Boolean,default:!0},separator:{default:" / "},clearable:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},placeholder:{default:""},size:{default:void 0},loading:{type:Boolean,default:!1},expandTrigger:{default:"click"},loadData:{type:Function,default:void 0},placement:{default:"bottom-start"},matchWidth:{type:Boolean,default:!0},popperClass:{default:""},block:{type:Boolean,default:!1},name:{default:""},filterable:{type:Boolean,default:!1},filterMethod:{type:Function,default:void 0}},emits:["update:modelValue","change","visible-change","clear","expand-change","load","focus","blur"],setup(n,{expose:a,emit:t}){const e=n,o=t,s=Ee("cascader"),r=Ct("kk-cascader"),p=`${r}-listbox`,{t:d}=lt(),m=qe(Et,void 0),f=qe(wn,void 0),_=g(()=>e.disabled||!!(m!=null&&m.disabled)),S=g(()=>e.size??(m==null?void 0:m.size)??"medium"),R=g(()=>{var z;return!!((z=f==null?void 0:f.message)!=null&&z.value)}),E=g(()=>e.multiple),Z=x(null),J=x(null),L=x(null),I=x(""),M=x(!1),V=x(!1),B=x(!1),H=x([]),ee=x(0),ne=x(new Map),re=x(new Set),me=g(()=>{var z,W,F,ce,ze;return{value:((z=e.fieldNames)==null?void 0:z.value)??"value",label:((W=e.fieldNames)==null?void 0:W.label)??"label",children:((F=e.fieldNames)==null?void 0:F.children)??"children",disabled:((ce=e.fieldNames)==null?void 0:ce.disabled)??"disabled",leaf:((ze=e.fieldNames)==null?void 0:ze.leaf)??"leaf"}});function ue(z){return JSON.stringify(z)}function Oe(z,W){const F=ne.value.get(ue(W));if(F)return F;const ce=z[me.value.children];return Ut(ce)?ce:void 0}function X(z,W,F){return z.map(ce=>{const ze=ce[me.value.value],Fe=Pn(ze)?"":ze,ot=[...W,Fe],st=Oe(ce,ot),oa=Ut(st)?st:[],sa=ce[me.value.leaf]===!0?!0:oa.length>0?!1:!e.loadData||st!==void 0,ia=ce[me.value.label];return{value:Fe,label:Pn(ia)?String(Fe):String(ia),disabled:ce[me.value.disabled]===!0,isLeaf:sa,level:F,path:ot,children:sa?[]:X(oa,ot,F+1),raw:ce}})}const de=g(()=>X(e.options??[],[],0)),be=g(()=>{const z=[];let W=de.value,F=0;for(;F<Go;){z.push({level:F,nodes:W,loading:!1});const ce=H.value[F],ze=W.find(Fe=>Fe.value===ce);if(!ze||ze.isLeaf)break;if(re.value.has(ue(ze.path))){z.push({level:F+1,nodes:[],loading:!0});break}W=ze.children,F+=1}return z});function Ce(z){let W=de.value,F;for(const ce of z){if(F=W.find(ze=>ze.value===ce),!F)return;W=F.children}return F}function Ke(z){const W=[];let F=de.value;for(const ce of z){const ze=F.find(Fe=>Fe.value===ce);if(!ze){W.push(String(ce));break}W.push(ze.label),F=ze.children}return W}function he(z){const W=[...de.value];for(;W.length>0;){const F=W.shift();if(!F)break;if(F.value===z)return F.path;W.push(...F.children)}}const xe=g(()=>{const z=e.modelValue;return Pn(z)?[]:E.value?Ut(z)?e.emitPath?z.filter(Ut):z.map(W=>he(W)??[W]):[]:Ut(z)?e.emitPath?[z.slice()]:[]:e.emitPath?[]:[he(z)??[]]});function Te(z){const W=ue(z.path);return xe.value.some(F=>ue(F)===W)}function q(z,W){return H.value[W]===z.value}function pe(z){return z.length===0?"":e.showAllLevels?z.join(e.separator):z[z.length-1]}const Se=g(()=>e.placeholder||d("cascader.placeholder")),we=g(()=>d("cascader.noData")),ye=g(()=>{if(E.value)return"";const z=xe.value[0];return!z||z.length===0?"":pe(Ke(z))}),Ve=g(()=>e.filterable&&M.value?I.value:ye.value),Re=g(()=>!e.filterable),T=g(()=>E.value?xe.value.length===0&&!I.value:e.filterable?!M.value&&ye.value==="":ye.value===""),te=g(()=>xe.value.map(z=>{var W;return{path:z,key:ue(z),text:pe(Ke(z)),node:(W=Ce(z))==null?void 0:W.raw}})),D=g(()=>e.filterable&&I.value.trim().length>0);function oe(z,W=[]){return z.forEach(F=>{(F.isLeaf||e.checkStrictly)&&W.push(F),F.children.length>0&&oe(F.children,W)}),W}const ie=g(()=>{if(!D.value)return[];const z=I.value.trim(),W=z.toLowerCase();return oe(de.value).filter(F=>e.filterMethod?e.filterMethod(z,F.raw):pe(Ke(F.path)).toLowerCase().includes(W))});function Be(z,W){const F=W.trim();if(!F)return[{text:z,match:!1}];const ce=z.toLowerCase(),ze=F.toLowerCase(),Fe=[];let ot=0;for(;ot<z.length;){const st=ce.indexOf(ze,ot);if(st===-1){Fe.push({text:z.slice(ot),match:!1});break}st>ot&&Fe.push({text:z.slice(ot,st),match:!1}),Fe.push({text:z.slice(st,st+F.length),match:!0}),ot=st+F.length}return Fe}const G=Ma({reference:Z,floating:J,placement:()=>e.placement,offset:()=>6,flip:()=>!0,matchWidth:()=>e.matchWidth}),P=qn([Z,J],()=>ae());function Y(){var z,W;e.filterable?(z=L.value)==null||z.focus():(W=Z.value)==null||W.focus()}function Q(){const z=xe.value[0]??[];H.value=z.slice(),ee.value=Math.max(0,z.length-1)}async function ke(){_.value||M.value||(B.value=!0,M.value=!0,V.value=!0,Q(),o("visible-change",!0),await Ze(),G.update(),G.start(),P.start(),Y())}function ae(){M.value&&(M.value=!1,o("visible-change",!1),I.value="",G.stop(),P.stop())}function fe(){M.value?ae():ke()}function nt(z){if(!_.value){if(z.target===L.value){M.value||ke();return}fe()}}async function Me(z){if(!e.loadData)return;const W=ue(z.path),F=new Set(re.value);F.add(W),re.value=F;try{const ce=await e.loadData(z.raw,z.path),ze=new Map(ne.value);ze.set(W,ce??[]),ne.value=ze}catch{}finally{const ce=new Set(re.value);ce.delete(W),re.value=ce,o("load",{node:z.raw,path:z.path})}}function Ae(z){if(!e.loadData||z.isLeaf)return;const W=ue(z.path);ne.value.has(W)||re.value.has(W)||Me(z)}function Ue(z,W){const F=H.value.slice(0,z);F[z]=W,H.value=F}function dt(z){const W=e.emitPath?z.path:z.value;o("update:modelValue",W),o("change",W),f==null||f.validate("change"),z.isLeaf&&ae()}function mt(z){const W=e.emitPath?z:z.map(F=>F.length>0?F[F.length-1]:"");o("update:modelValue",W),o("change",W),f==null||f.validate("change")}function pt(z){const W=ue(z),F=xe.value.findIndex(ze=>ue(ze)===W),ce=F>=0?xe.value.filter((ze,Fe)=>Fe!==F):[...xe.value,z];mt(ce)}function Ft(z,W){z.disabled||(Ue(W,z.value),ee.value=W,Ae(z),o("expand-change",z.path),!(!e.checkStrictly&&!z.isLeaf)&&(E.value?pt(z.path):dt(z)))}function Dt(z){z.disabled||(H.value=z.path.slice(0,-1),ee.value=Math.max(0,z.path.length-1),E.value?pt(z.path):dt(z))}function Tt(z,W){e.expandTrigger!=="hover"||z.disabled||(Ue(W,z.value),ee.value=W,Ae(z),o("expand-change",z.path))}function zt(z){if(_.value)return;const W=ue(z);mt(xe.value.filter(F=>ue(F)!==W)),f==null||f.validate("change")}function ht(){if(_.value)return;let z=[];!E.value&&!e.emitPath&&(z=null),o("update:modelValue",z),o("change",z),o("clear"),I.value="",f==null||f.validate("change")}function kt(){return Math.min(ee.value,Math.max(0,be.value.length-1))}function Pt(z){const W=kt(),F=be.value[W];if(!F||F.nodes.length===0)return;let ce=F.nodes.findIndex(Fe=>Fe.value===H.value[W]);for(let Fe=0;Fe<F.nodes.length&&(ce=(ce+z+F.nodes.length)%F.nodes.length,!!F.nodes[ce].disabled);Fe++);const ze=F.nodes[ce];ze&&(Ue(W,ze.value),Ae(ze))}function Nt(){const z=kt(),W=be.value[z],F=W==null?void 0:W.nodes.find(ce=>ce.value===H.value[z]);!F||F.isLeaf||(Ae(F),be.value.length>z+1&&(ee.value=z+1))}function yt(){ee.value>0&&(ee.value-=1)}function Lt(){const z=kt(),W=be.value[z],F=W==null?void 0:W.nodes.find(ce=>ce.value===H.value[z]);if(!(!F||F.disabled)){if(!e.checkStrictly&&!F.isLeaf){Ae(F),o("expand-change",F.path);return}E.value?pt(F.path):dt(F)}}function _t(z){if(!_.value)switch(z.key){case"ArrowDown":z.preventDefault(),M.value?Pt(1):ke();break;case"ArrowUp":z.preventDefault(),M.value?Pt(-1):ke();break;case"ArrowRight":M.value&&(z.preventDefault(),Nt());break;case"ArrowLeft":M.value&&(z.preventDefault(),yt());break;case"Enter":z.preventDefault(),M.value?Lt():ke();break;case"Escape":M.value&&(z.preventDefault(),ae());break;case"Tab":M.value&&ae();break}}function Bt(z){I.value=z.target.value,M.value||ke()}function Mt(z){V.value=!0,o("focus",z)}function w(z){V.value=!1,o("blur",z),f==null||f.validate("blur"),ae()}function b(z,W){return`${r}-opt-${z}-${W}`}const A=g(()=>{if(!M.value)return;const z=kt(),W=be.value[z];if(!W)return;const F=W.nodes.findIndex(ce=>ce.value===H.value[z]);return F>=0?b(z,F):void 0}),j=g(()=>e.clearable&&!_.value&&xe.value.length>0),le=g(()=>!D.value&&de.value.length===0),_e=g(()=>[s.b(),s.m(S.value),s.is("disabled",_.value),s.is("block",e.block),s.is("open",M.value),s.is("focused",V.value),s.is("invalid",R.value),s.is("multiple",E.value)]),at=g(()=>[s.e("control"),s.em("control",S.value),s.is("disabled",_.value),s.is("focused",V.value),s.is("invalid",R.value)]),gt=g(()=>[s.e("popper"),e.popperClass]);function Xa(){const z=[];return xe.value.forEach(W=>{const F=Ce(W);F&&z.push(F.raw)}),z}return a({focus:Y,blur:()=>{var z;return(z=L.value)==null?void 0:z.blur()},open:()=>void ke(),close:ae,clear:ht,getCheckedNodes:Xa}),(z,W)=>(i(),c("div",Le({class:_e.value},z.$attrs),[u("div",{ref_key:"triggerRef",ref:Z,class:h(at.value),role:"combobox","aria-expanded":M.value,"aria-haspopup":"listbox","aria-controls":p,"aria-disabled":_.value||void 0,"aria-invalid":R.value||void 0,"aria-activedescendant":A.value,tabindex:"0",onClick:nt,onKeydown:_t},[z.$slots.prefix?(i(),c("span",{key:0,class:h(l(s).e("prefix"))},[y(z.$slots,"prefix")],2)):$("",!0),E.value?(i(),c("span",{key:1,class:h(l(s).e("tags"))},[(i(!0),c(U,null,ge(te.value,F=>(i(),c("span",{key:F.key,class:h(l(s).e("tag"))},[y(z.$slots,"tag",{node:F.node,path:F.path,text:F.text,remove:()=>zt(F.path)},()=>[u("span",{class:h(l(s).e("tag-text"))},O(F.text),3),_.value?$("",!0):(i(),c("button",{key:0,type:"button",class:h(l(s).e("tag-close")),"aria-label":l(d)("common.remove"),onClick:Je(ce=>zt(F.path),["stop"])},[...W[2]||(W[2]=[u("svg",{viewBox:"0 0 24 24",width:"10",height:"10","aria-hidden":"true"},[u("path",{d:"M5 5L19 19M19 5L5 19",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1)])],10,jo))])],2))),128))],2)):$("",!0),u("input",{ref_key:"inputRef",ref:L,class:h(l(s).e("input")),value:Ve.value,readonly:Re.value,placeholder:T.value?Se.value:"",disabled:_.value,name:n.name||void 0,role:"combobox","aria-haspopup":"listbox","aria-expanded":M.value,"aria-controls":p,"aria-activedescendant":A.value,autocomplete:"off",onInput:Bt,onFocus:Mt,onBlur:w,onKeydown:_t},null,42,Ro),j.value?(i(),c("button",{key:2,type:"button",class:h(l(s).e("clear")),"aria-label":l(d)("cascader.clear"),onClick:Je(ht,["stop"])},[...W[3]||(W[3]=[u("svg",{viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":"true"},[u("path",{d:"M5 5L19 19M19 5L5 19",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1)])],10,Fo)):$("",!0),u("span",{class:h(l(s).e("suffix"))},[y(z.$slots,"suffix",{},()=>[(i(),c("svg",{class:h(l(s).e("arrow")),viewBox:"0 0 24 24",width:"14",height:"14","aria-hidden":"true"},[...W[4]||(W[4]=[u("path",{d:"M6 9l6 6 6-6",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])],2))])],2)],42,Eo),(i(),N(yn,{to:"body"},[B.value?bt((i(),c("div",{key:0,id:l(r),ref_key:"popperRef",ref:J,class:h(gt.value),style:je(l(G).floatingStyle.value),onMousedown:W[1]||(W[1]=Je(()=>{},["prevent"]))},[u("div",{class:h(l(s).e("dropdown"))},[e.loading?(i(),c("div",{key:0,class:h(l(s).e("loading")),role:"status"},[y(z.$slots,"loading",{},()=>[K(O(l(d)("cascader.loading")),1)])],2)):D.value?(i(),c(U,{key:1},[ie.value.length>0?(i(),c("ul",{key:0,id:p,class:h(l(s).e("list")),role:"listbox","aria-multiselectable":E.value||void 0},[(i(!0),c(U,null,ge(ie.value,(F,ce)=>(i(),c("li",{id:b(0,ce),key:ue(F.path),class:h([l(s).e("node"),l(s).is("selected",Te(F)),l(s).is("disabled",F.disabled)]),role:"option","aria-selected":Te(F),"aria-disabled":F.disabled||void 0,onClick:ze=>Dt(F)},[u("span",{class:h(l(s).e("label"))},[(i(!0),c(U,null,ge(Be(pe(Ke(F.path)),I.value),(ze,Fe)=>(i(),c(U,{key:Fe},[ze.match?(i(),c("span",{key:0,class:h(l(s).e("match"))},O(ze.text),3)):(i(),c(U,{key:1},[K(O(ze.text),1)],64))],64))),128))],2)],10,Ho))),128))],10,No)):(i(),c("div",{key:1,class:h(l(s).e("empty"))},[y(z.$slots,"empty",{},()=>[K(O(l(d)("common.noMatch")),1)])],2))],64)):le.value?(i(),c("div",{key:2,class:h(l(s).e("empty"))},[y(z.$slots,"empty",{},()=>[K(O(we.value),1)])],2)):(i(),c("div",{key:3,class:h(l(s).e("panel"))},[(i(!0),c(U,null,ge(be.value,F=>(i(),c("ul",{id:F.level===0?p:void 0,key:F.level,class:h([l(s).e("menu"),l(s).is("loading",F.loading)]),role:"listbox","aria-multiselectable":E.value||void 0},[F.loading?(i(),c("li",{key:0,class:h(l(s).e("loading")),role:"status"},[y(z.$slots,"loading",{},()=>[K(O(l(d)("cascader.loading")),1)])],2)):F.nodes.length===0?(i(),c("li",{key:1,class:h(l(s).e("empty"))},[y(z.$slots,"empty",{},()=>[K(O(we.value),1)])],2)):(i(!0),c(U,{key:2},ge(F.nodes,(ce,ze)=>(i(),c("li",{id:b(F.level,ze),key:ue(ce.path),class:h([l(s).e("node"),l(s).is("active",q(ce,F.level)),l(s).is("selected",Te(ce)),l(s).is("disabled",ce.disabled)]),role:"option","aria-selected":Te(ce),"aria-disabled":ce.disabled||void 0,onClick:Fe=>Ft(ce,F.level),onMouseenter:Fe=>Tt(ce,F.level)},[E.value?(i(),c("span",{key:0,class:h(l(s).e("checkbox"))},[u("input",{type:"checkbox",tabindex:"-1",checked:Te(ce),onClick:W[0]||(W[0]=Je(()=>{},["prevent"]))},null,8,qo)],2)):$("",!0),u("span",{class:h(l(s).e("label"))},[y(z.$slots,"default",{node:ce.raw,level:F.level,label:ce.label,selected:Te(ce),isLeaf:ce.isLeaf},()=>[K(O(ce.label),1)])],2),ce.isLeaf?$("",!0):(i(),c("svg",{key:1,class:h(l(s).e("node-arrow")),viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":"true"},[...W[5]||(W[5]=[u("path",{d:"M9 6l6 6-6 6",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])],2))],42,Wo))),128))],10,Uo))),128))],2))],2)],46,Do)),[[At,M.value]]):$("",!0)]))],16))}}),Kn=Ie(Yo,"KkCascader"),Xo=["aria-disabled","aria-label"],Zo=["disabled"],Jo=["src","alt"],Qo=["title"],es=["aria-label","onClick"],ts=["aria-label","onClick"],ns=["aria-label","onClick"],as=["aria-disabled","aria-label"],ls=C({name:"KkUpload",inheritAttrs:!1,__name:"Upload",props:{modelValue:{default:()=>[]},action:{default:""},method:{default:"POST"},headers:{default:()=>({})},data:{default:()=>({})},name:{default:"file"},withCredentials:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},accept:{default:""},directory:{type:Boolean,default:!1},limit:{default:0},maxSize:{default:0},minSize:{default:0},drag:{type:Boolean,default:!1},listType:{default:"text"},showFileList:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},autoUpload:{type:Boolean,default:!0},httpRequest:{},beforeUpload:{},beforeRemove:{},onExceed:{},onError:{},paste:{type:Boolean,default:!1},tip:{default:""},size:{default:void 0}},emits:["update:modelValue","change","progress","success","error","remove","exceed","preview"],setup(n,{expose:a,emit:t}){const e=n,o=t,s=Ee("upload"),{t:r}=lt(),p=qe(Et,void 0),d=g(()=>e.disabled||!!(p!=null&&p.disabled)),m=g(()=>e.size??(p==null?void 0:p.size)??"medium"),f=x(null),_=x(e.modelValue?e.modelValue.map(P=>({...P})):[]),S=x(0),R=x(!1),E=new Map,Z=new Set;let J=0;function L(){return J+=1,`kk-upload-${J}`}let I;function M(){return _.value.map(P=>({...P}))}function V(){const P=M();I=P,o("update:modelValue",P)}function B(){V(),o("change",M())}Pe(()=>e.modelValue,P=>{if(P===I)return;const Y=P?P.map(Q=>({...Q})):[];ne(Y),_.value=Y});function H(){return typeof URL<"u"&&typeof URL.createObjectURL=="function"}function ee(P){if(H()&&typeof URL.revokeObjectURL=="function")try{URL.revokeObjectURL(P)}catch{}Z.delete(P)}function ne(P){const Y=new Set(P.map(Q=>Q.url).filter(Q=>!!Q));for(const Q of[...Z])Y.has(Q)||ee(Q)}function re(){for(const P of[...Z])ee(P)}function me(P,Y){const Q=Y.split(",").map(fe=>fe.trim()).filter(Boolean);if(Q.length===0)return!0;const ke=P.name||"",ae=P.type||"";return Q.some(fe=>fe.startsWith(".")?ke.toLowerCase().endsWith(fe.toLowerCase()):fe.endsWith("/*")?ae.startsWith(fe.slice(0,-1)):ae===fe)}function ue(P,Y,Q){var fe;const ke=r(`upload.${Y}`,Q);P.status="fail",P.error=ke;const ae=((fe=e.onError)==null?void 0:fe.call(e,{file:P,error:ke}))!==!1;return ae&&o("error",{file:P,error:ke}),ae}async function Oe(P){const Y=e.beforeUpload;if(!Y)return P;try{const Q=await Y(P);if(Q===!1)return null;if(Q instanceof Blob){const ke=Q;return{...P,raw:ke,name:ke.name||P.name,size:ke.size,type:ke.type||P.type}}return P}catch{return null}}function X(P){return P?Array.isArray(P)?P:Array.from(P):[]}async function de(P){if(d.value)return;const Y=X(P);if(Y.length===0)return;const Q=[],ke=[];for(const ae of Y){const fe={uid:L(),name:ae.name,size:ae.size,type:ae.type,status:"ready",percent:0,raw:ae};if(e.accept&&!me(ae,e.accept)){ue(fe,"typeNotAllowed",{name:fe.name})&&Q.push(fe);continue}const nt=e.minSize>0&&ae.size<e.minSize,Me=e.maxSize>0&&ae.size>e.maxSize;if(nt||Me){const Ue=nt?e.minSize:e.maxSize;ue(fe,"sizeExceed",{name:fe.name,size:so(Ue)})&&Q.push(fe);continue}const Ae=await Oe(fe);if(Ae){if((e.listType==="picture"||e.listType==="picture-card")&&H()&&Ae.raw){const Ue=URL.createObjectURL(Ae.raw);Ae.url=Ue,Z.add(Ue)}Q.push(Ae),ke.push(Ae)}}if(Q.length!==0){if(e.limit>0){const ae=e.limit-_.value.length;if(Q.length>ae&&ae>=0){const fe=Q.slice(ae);o("exceed",fe),Q.splice(ae),ke.splice(ae)}}_.value.push(...Q),B(),e.autoUpload&&ke.forEach(ae=>be(ae))}}function be(P){if(!P){Ce();return}if(P.status==="success")return;P.status="uploading",P.percent=0,B();const Y=Me=>{P.percent=Math.min(100,Math.max(0,Math.round(Me.percent))),o("progress",{file:P,percent:P.percent}),V()},Q=Me=>{P.status="success",P.percent=100,P.response=Me,o("success",{file:P,response:Me}),B()},ke=Me=>{P.status="fail";const Ae=Me instanceof Error?Me.message:typeof Me=="string"?Me:r("upload.fail");P.error=Ae,o("error",{file:P,error:Ae}),B()},ae={file:P.raw,name:e.name??"file",data:e.data??{},headers:e.headers??{},withCredentials:!!e.withCredentials,action:e.action??"",method:(e.method??"POST").toUpperCase(),onProgress:Y,onSuccess:Q,onError:ke};if(e.httpRequest){const Me=e.httpRequest(ae);Me!==void 0&&Promise.resolve(Me).then(Ae=>Q(Ae)).catch(Ae=>ke(Ae));return}if(!ae.action){ke(new Error(r("upload.empty")));return}const fe=new XMLHttpRequest;E.set(P.uid,fe),fe.withCredentials=ae.withCredentials,fe.open(ae.method,ae.action,!0);for(const[Me,Ae]of Object.entries(ae.headers))fe.setRequestHeader(Me,Ae);fe.upload&&fe.upload.addEventListener("progress",Me=>{Me.lengthComputable&&Y({percent:Me.loaded/Me.total*100})}),fe.addEventListener("load",()=>{if(E.delete(P.uid),fe.status<200||fe.status>=300){ke(new Error(`HTTP ${fe.status}`));return}let Me=fe.response;try{Me=JSON.parse(fe.responseText)}catch{}Q(Me)}),fe.addEventListener("error",()=>{E.delete(P.uid),ke(new Error(r("upload.fail")))}),fe.addEventListener("abort",()=>{E.delete(P.uid)});const nt=new FormData;for(const[Me,Ae]of Object.entries(ae.data))nt.append(Me,String(Ae));ae.file&&nt.append(ae.name,ae.file,P.name),fe.send(nt)}function Ce(){_.value.filter(P=>P.status==="ready").forEach(P=>be(P))}function Ke(P){var Y;if(P!=null){(Y=E.get(P))==null||Y.abort(),E.delete(P);return}E.forEach(Q=>Q.abort()),E.clear()}function he(){Ke(),re(),_.value=[],B()}async function xe(P,Y){var ae;if((ae=Y==null?void 0:Y.preventDefault)==null||ae.call(Y),d.value)return;if(e.beforeRemove)try{if(await e.beforeRemove(P)===!1)return}catch{return}const Q=_.value.findIndex(fe=>fe.uid===P.uid);if(Q===-1)return;const[ke]=_.value.splice(Q,1);ke!=null&&ke.url&&Z.has(ke.url)&&ee(ke.url),o("remove",ke),B()}function Te(P){P.status="ready",P.error=void 0,be(P)}function q(P){o("preview",P)}function pe(){var P;d.value||(P=f.value)==null||P.click()}function Se(P){const Y=P.target;de(Y.files),Y.value=""}function we(){pe()}function ye(P){(P.key==="Enter"||P.key===" ")&&(P.preventDefault(),pe())}function Ve(P){d.value||!e.drag||(P.preventDefault(),S.value+=1,R.value=!0)}function Re(P){d.value||!e.drag||P.preventDefault()}function T(P){d.value||!e.drag||(P.preventDefault(),S.value-=1,S.value<=0&&(S.value=0,R.value=!1))}function te(P){var Y;d.value||!e.drag||(P.preventDefault(),S.value=0,R.value=!1,de(((Y=P.dataTransfer)==null?void 0:Y.files)??null))}function D(P){var Q;if(d.value||!e.paste)return;const Y=(Q=P.clipboardData)==null?void 0:Q.files;Y&&Y.length>0&&(P.preventDefault(),de(Y))}Ge(()=>{Ke(),re()});const oe=g(()=>{const P={};return e.accept&&(P.accept=e.accept),e.multiple&&!e.directory&&(P.multiple=!0),e.directory&&(P.webkitdirectory=!0),P}),ie=g(()=>[s.b(),s.m(m.value),s.is("disabled",d.value),s.is("drag",e.drag),s.is("picture-card",e.listType==="picture-card")]),Be=g(()=>[s.e("list"),s.m(e.listType),s.is("dragover",R.value&&e.drag)]),G=g(()=>e.listType==="picture-card");return a({submit:Ce,abort:Ke,clear:he,upload:be,openFileDialog:pe}),(P,Y)=>(i(),c("div",Le({class:ie.value},P.$attrs,{onPaste:D}),[u("input",Le({ref_key:"inputRef",ref:f,class:"kk-upload__input",type:"file"},oe.value,{onChange:Se}),null,16),G.value?$("",!0):(i(),c("div",{key:0,class:h([l(s).e("trigger"),l(s).is("dragover",R.value&&n.drag)]),role:"button",tabindex:"0","aria-disabled":d.value||void 0,"aria-label":l(r)("upload.clickUpload"),onClick:we,onKeydown:ye,onDragenter:Ve,onDragover:Re,onDragleave:T,onDrop:te},[y(P.$slots,"default",{disabled:d.value,openFileDialog:pe},()=>[u("button",{type:"button",class:h(l(s).e("btn")),disabled:d.value},O(l(r)("upload.clickUpload")),11,Zo)])],42,Xo)),n.tip||P.$slots.tip?(i(),c("div",{key:1,class:h(l(s).e("tip"))},[y(P.$slots,"tip",{},()=>[K(O(n.tip),1)])],2)):$("",!0),n.showFileList?(i(),c("div",{key:2,class:h(Be.value),role:"list",onDragenter:Y[0]||(Y[0]=Q=>G.value&&n.drag?Ve:void 0),onDragover:Y[1]||(Y[1]=Q=>G.value&&n.drag?Re:void 0),onDragleave:Y[2]||(Y[2]=Q=>G.value&&n.drag?T:void 0),onDrop:Y[3]||(Y[3]=Q=>G.value&&n.drag?te:void 0)},[_.value.length?(i(!0),c(U,{key:0},ge(_.value,(Q,ke)=>(i(),c("div",{key:Q.uid,class:h([l(s).e("item"),l(s).m(e.listType)]),role:"listitem"},[y(P.$slots,"file",{file:Q,index:ke,remove:ae=>xe(Q,ae),retry:()=>Te(Q),preview:()=>q(Q)},()=>[(e.listType==="picture"||e.listType==="picture-card")&&Q.url?(i(),c("div",{key:0,class:h(l(s).e("thumb"))},[u("img",{src:Q.url,alt:Q.name},null,8,Jo)],2)):$("",!0),u("div",{class:h(l(s).e("item-body"))},[u("span",{class:h(l(s).e("item-name")),title:Q.name},O(Q.name),11,Qo),Q.status==="uploading"?(i(),c("div",{key:0,class:h(l(s).e("progress"))},[u("div",{class:h(l(s).e("progress-bar")),style:je({width:Q.percent+"%"})},null,6)],2)):Q.status==="fail"&&Q.error?(i(),c("span",{key:1,class:h(l(s).e("item-error"))},O(Q.error),3)):Q.status==="success"?(i(),c("span",{key:2,class:h(l(s).e("item-done"))},O(l(r)("upload.success")),3)):$("",!0)],2),u("div",{class:h(l(s).e("actions"))},[e.listType!=="text"&&Q.url&&!d.value?(i(),c("button",{key:0,type:"button",class:h(l(s).e("action")),"aria-label":l(r)("upload.preview"),onClick:ae=>q(Q)},[...Y[4]||(Y[4]=[u("svg",{viewBox:"0 0 24 24",width:"16",height:"16","aria-hidden":"true"},[u("path",{d:"M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z",fill:"none",stroke:"currentColor","stroke-width":"2"}),u("circle",{cx:"12",cy:"12",r:"2.5",fill:"none",stroke:"currentColor","stroke-width":"2"})],-1)])],10,es)):$("",!0),Q.status==="fail"&&!d.value?(i(),c("button",{key:1,type:"button",class:h(l(s).e("action")),"aria-label":l(r)("upload.retry"),onClick:ae=>Te(Q)},[...Y[5]||(Y[5]=[u("svg",{viewBox:"0 0 24 24",width:"16",height:"16","aria-hidden":"true"},[u("path",{d:"M4 12a8 8 0 1 1 2.3 5.6",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"}),u("path",{d:"M4 20v-5h5",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],10,ts)):$("",!0),d.value?$("",!0):(i(),c("button",{key:2,type:"button",class:h(l(s).e("action")),"aria-label":`${l(r)("upload.remove")} ${Q.name}`,onClick:ae=>xe(Q,ae)},[...Y[6]||(Y[6]=[u("svg",{viewBox:"0 0 24 24",width:"16",height:"16","aria-hidden":"true"},[u("path",{d:"M5 7h14M9 7V5h6v2M7 7l1 12h8l1-12",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],10,ns))],2)])],2))),128)):G.value?$("",!0):(i(),c("div",{key:1,class:h(l(s).e("empty"))},[y(P.$slots,"empty",{},()=>[K(O(l(r)("upload.empty")),1)])],2)),G.value&&!d.value?(i(),c("div",{key:2,class:h([l(s).e("trigger"),l(s).e("card"),l(s).is("dragover",R.value&&n.drag)]),role:"button",tabindex:"0","aria-disabled":d.value||void 0,"aria-label":l(r)("upload.clickUpload"),onClick:we,onKeydown:ye},[y(P.$slots,"icon",{},()=>[u("span",{class:h(l(s).e("plus"))},"+",2)]),u("span",{class:h(l(s).e("card-text"))},O(l(r)("upload.clickUpload")),3)],42,as)):$("",!0)],34)):$("",!0)],16))}}),rn=Ie(ls,"KkUpload"),os=["aria-label"],ss=["disabled","aria-label"],is=["disabled","aria-label"],rs=["disabled","aria-label"],us=["aria-current","onClick"],cs=["aria-label","onClick"],ds=["disabled","aria-label"],ps=["disabled","aria-label"],vs=["disabled","aria-expanded"],fs=["aria-selected","onClick"],ms=["disabled"],ks=["disabled","aria-expanded"],gs=C({name:"KkPagination",inheritAttrs:!1,__name:"Pagination",props:{modelValue:{default:void 0},currentPage:{default:void 0},pageSize:{default:10},total:{default:void 0},pageCount:{default:void 0},pageSizes:{default:()=>[10,20,50,100]},layout:{default:"prev, pager, next, jumper, sizes, total"},pagerCount:{default:7},background:{type:Boolean,default:!1},size:{default:"medium"},disabled:{type:Boolean,default:!1},hideOnSinglePage:{type:Boolean,default:!1},mode:{default:"number"},prevText:{default:""},nextText:{default:""},prevIcon:{type:Function,default:void 0},nextIcon:{type:Function,default:void 0},showQuickJumper:{type:Boolean,default:!0}},emits:["update:modelValue","update:currentPage","update:pageSize","change","current-change","size-change","prev-click","next-click"],setup(n,{expose:a,emit:t}){const e=n,o=t,s=Ee("pagination"),{t:r}=lt(),p=x(e.pageSize),d=g(()=>e.pageCount!=null?Math.max(1,e.pageCount):e.total!=null?Math.max(1,Math.ceil(e.total/p.value)):1),m=x(kn(e.currentPage??e.modelValue??1,1,d.value)),f=g(()=>e.disabled),_=g(()=>[s.b(),s.m(e.size),s.is("background",e.background),s.is("disabled",f.value)]),S=g(()=>!(e.hideOnSinglePage&&d.value<=1));Pe(()=>[e.currentPage,e.modelValue],([q,pe])=>{const Se=q??pe;Se!=null&&(m.value=kn(Se,1,d.value))}),Pe(()=>e.pageSize,q=>{q!=null&&(p.value=q)}),Pe(d,q=>{m.value>q&&(m.value=q)});function R(q){const pe=kn(q,1,d.value);m.value=pe,o("update:modelValue",pe),o("update:currentPage",pe),o("current-change",pe),o("change",{currentPage:pe,pageSize:p.value})}function E(){f.value||m.value<=1||(o("prev-click",m.value-1),R(m.value-1))}function Z(){f.value||m.value>=d.value||(o("next-click",m.value+1),R(m.value+1))}function J(q){f.value||!Number.isFinite(q)||R(Math.round(q))}function L(q){if(f.value||q==null)return;p.value=q;const pe=d.value;m.value>pe&&(m.value=pe),o("update:pageSize",q),o("size-change",q),o("change",{currentPage:m.value,pageSize:q})}const I=q=>({type:"page",page:q}),M=q=>({type:"more",dir:q}),V=g(()=>{const q=d.value,pe=m.value,Se=e.pagerCount;if(q<=Se)return mn(1,q).map(I);const we=Math.floor((Se-1)/2),ye=we+1,Ve=q-we;if(pe<=ye)return[...mn(1,Se-2).map(I),M("next"),I(q)];if(pe>=Ve){const te=q-(Se-3);return[I(1),M("prev"),...mn(te,q).map(I)]}const Re=pe-(we-1),T=pe+(we-1);return[I(1),M("prev"),...mn(Re,T).map(I),M("next"),I(q)]});function B(q){if(q.type==="page"){J(q.page);return}const pe=e.pagerCount-2;J(q.dir==="prev"?m.value-pe:m.value+pe)}const H=x("");function ee(){const q=Number(H.value);Number.isFinite(q)&&q!==0&&(J(q),H.value="")}const ne=x(!1),re=x(null),me=x(null);qn([re,me],()=>{ne.value=!1},{events:["pointerdown"]});function ue(){f.value||(ne.value=!ne.value)}function Oe(q){ne.value=!1,L(q)}const X=g(()=>e.layout.split(/[\s,]+/).map(q=>q.trim()).filter(Boolean)),de=g(()=>e.showQuickJumper&&!X.value.includes("jumper")),be=g(()=>de.value?[...X.value,"jumper"]:X.value),Ce=g(()=>{const q=be.value.indexOf("->");return q===-1?be.value:be.value.slice(0,q)}),Ke=g(()=>{const q=be.value.indexOf("->");return q===-1?[]:be.value.slice(q+1)}),he=g(()=>f.value||m.value<=1),xe=g(()=>f.value||m.value>=d.value),Te=C({name:"KkPaginationSlotRenderer",props:{fn:{type:Function,default:void 0},scope:{type:Object,default:()=>({})}},setup(q){return()=>typeof q.fn=="function"?q.fn(q.scope):null}});return a({prev:E,next:Z,jump:J,setPageSize:L}),(q,pe)=>S.value?(i(),c("div",{key:0,class:h(_.value),role:"navigation","aria-label":l(r)("pagination.page")},[n.mode==="simple"?(i(),c(U,{key:0},[u("button",{type:"button",class:h([l(s).e("btn"),l(s).e("prev")]),disabled:he.value,"aria-label":l(r)("pagination.prev"),onClick:E},[y(q.$slots,"prev",{disabled:he.value},()=>[l(vn)(n.prevIcon)?(i(),N(l(Te),{key:0,fn:n.prevIcon,scope:{}},null,8,["fn"])):$("",!0),K(" "+O(n.prevText||l(r)("pagination.prev")),1)])],10,ss),u("span",{class:h(l(s).e("simple-pager"))},O(m.value)+" / "+O(d.value),3),u("button",{type:"button",class:h([l(s).e("btn"),l(s).e("next")]),disabled:xe.value,"aria-label":l(r)("pagination.next"),onClick:Z},[y(q.$slots,"next",{disabled:xe.value},()=>[l(vn)(n.nextIcon)?(i(),N(l(Te),{key:0,fn:n.nextIcon,scope:{}},null,8,["fn"])):$("",!0),K(" "+O(n.nextText||l(r)("pagination.next")),1)])],10,is),u("span",{class:h(l(s).e("total"))},O(l(r)("pagination.total",{total:n.total??0})),3)],64)):(i(),c(U,{key:1},[u("div",{class:h(l(s).e("group"))},[(i(!0),c(U,null,ge(Ce.value,(Se,we)=>(i(),c(U,{key:`l-${Se}-${we}`},[Se==="prev"?(i(),c("button",{key:0,type:"button",class:h([l(s).e("btn"),l(s).e("prev")]),disabled:he.value,"aria-label":l(r)("pagination.prev"),onClick:E},[y(q.$slots,"prev",{disabled:he.value},()=>[l(vn)(n.prevIcon)?(i(),N(l(Te),{key:0,fn:n.prevIcon,scope:{}},null,8,["fn"])):$("",!0),K(" "+O(n.prevText||l(r)("pagination.prev")),1)])],10,rs)):Se==="pager"?(i(!0),c(U,{key:1},ge(V.value,(ye,Ve)=>(i(),c(U,{key:`p-${Ve}`},[ye.type==="page"?(i(),c("button",{key:0,type:"button",class:h([l(s).e("btn"),l(s).e("pager"),l(s).is("active",ye.page===m.value)]),"aria-current":ye.page===m.value?"page":void 0,onClick:Re=>B(ye)},[y(q.$slots,"pager",{page:ye.page,active:ye.page===m.value},()=>[K(O(ye.page),1)])],10,us)):(i(),c("button",{key:1,type:"button",class:h([l(s).e("btn"),l(s).e("pager"),l(s).e("more")]),"aria-label":l(r)("pagination.goto",{page:ye.dir==="prev"?m.value-(n.pagerCount-2):m.value+(n.pagerCount-2)}),onClick:Re=>B(ye)},[u("span",{class:h(l(s).e("more-text"))},"···",2)],10,cs))],64))),128)):Se==="next"?(i(),c("button",{key:2,type:"button",class:h([l(s).e("btn"),l(s).e("next")]),disabled:xe.value,"aria-label":l(r)("pagination.next"),onClick:Z},[y(q.$slots,"next",{disabled:xe.value},()=>[l(vn)(n.nextIcon)?(i(),N(l(Te),{key:0,fn:n.nextIcon,scope:{}},null,8,["fn"])):$("",!0),K(" "+O(n.nextText||l(r)("pagination.next")),1)])],10,ds)):Se==="total"?(i(),c("span",{key:3,class:h(l(s).e("total"))},O(l(r)("pagination.total",{total:n.total??0})),3)):Se==="jumper"?(i(),c("span",{key:4,class:h(l(s).e("jumper"))},[y(q.$slots,"jumper",{},()=>[K(O(l(r)("pagination.jumper"))+" ",1),bt(u("input",{"onUpdate:modelValue":pe[0]||(pe[0]=ye=>H.value=ye),type:"text",class:h(l(s).e("jumper-input")),disabled:f.value,"aria-label":l(r)("pagination.jumper"),onKeyup:Zt(ee,["enter"])},null,42,ps),[[ra,H.value]]),K(" "+O(l(r)("pagination.page")),1)])],2)):Se==="sizes"?(i(),c("span",{key:5,ref_for:!0,ref_key:"sizesRef",ref:re,class:h(l(s).e("sizes"))},[y(q.$slots,"sizes",{},()=>[u("button",{type:"button",class:h(l(s).e("sizes-trigger")),disabled:f.value,"aria-haspopup":!0,"aria-expanded":ne.value,onClick:ue},[K(O(l(r)("pagination.sizes",{size:p.value}))+" ",1),(i(),c("svg",{viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":"true",class:h(l(s).e("sizes-arrow"))},[...pe[2]||(pe[2]=[u("path",{d:"M6 9l6 6 6-6",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])],2))],10,vs),ne.value?(i(),c("span",{key:0,ref_for:!0,ref_key:"sizesPopperRef",ref:me,class:h(l(s).e("sizes-popper")),role:"listbox"},[(i(!0),c(U,null,ge(n.pageSizes,ye=>(i(),c("button",{key:ye,type:"button",class:h([l(s).e("size-option"),l(s).is("active",ye===p.value)]),role:"option","aria-selected":ye===p.value,onClick:Ve=>Oe(ye)},O(l(r)("pagination.sizes",{size:ye})),11,fs))),128))],2)):$("",!0)])],2)):$("",!0)],64))),128))],2),Ke.value.length?(i(),c("div",{key:0,class:h([l(s).e("group"),l(s).e("group--right")])},[(i(!0),c(U,null,ge(Ke.value,(Se,we)=>(i(),c(U,{key:`r-${Se}-${we}`},[Se==="total"?(i(),c("span",{key:0,class:h(l(s).e("total"))},O(l(r)("pagination.total",{total:n.total??0})),3)):Se==="jumper"?(i(),c("span",{key:1,class:h(l(s).e("jumper"))},[y(q.$slots,"jumper",{},()=>[K(O(l(r)("pagination.jumper"))+" ",1),bt(u("input",{"onUpdate:modelValue":pe[1]||(pe[1]=ye=>H.value=ye),type:"text",class:h(l(s).e("jumper-input")),disabled:f.value,onKeyup:Zt(ee,["enter"])},null,42,ms),[[ra,H.value]]),K(" "+O(l(r)("pagination.page")),1)])],2)):Se==="sizes"?(i(),c("span",{key:2,class:h(l(s).e("sizes"))},[y(q.$slots,"sizes",{},()=>[u("button",{type:"button",class:h(l(s).e("sizes-trigger")),disabled:f.value,"aria-expanded":ne.value,onClick:ue},O(l(r)("pagination.sizes",{size:p.value})),11,ks)])],2)):$("",!0)],64))),128))],2)):$("",!0)],64))],10,os)):$("",!0)}}),un=Ie(gs,"KkPagination"),Va=Symbol("kk-table-context"),bs={key:0},hs=["aria-sort"],ys={key:1},_s={key:2},xs=["aria-label","onClick"],ws=["data-kk-table-row","onClick","onDblclick"],$s=["onClick"],Ss={key:1},Ks=["aria-expanded","aria-label","onClick"],Cs=["colspan"],Ts=["colspan"],zs=C({name:"KkTable",inheritAttrs:!1,__name:"Table",props:{data:{default:()=>[]},columns:{default:void 0},rowKey:{default:void 0},border:{type:Boolean,default:!0},stripe:{type:Boolean,default:!1},size:{default:"medium"},height:{default:void 0},maxHeight:{default:void 0},loading:{type:Boolean,default:!1},emptyText:{default:""},rowClassName:{type:Function,default:void 0},cellClassName:{type:Function,default:void 0},rowStyle:{type:Function,default:void 0},cellStyle:{type:Function,default:void 0},showHeader:{type:Boolean,default:!0},defaultExpandAll:{type:Boolean,default:!1},expandRowKeys:{default:void 0},highlightCurrentRow:{type:Boolean,default:!1},currentRowKey:{default:void 0},selectOnIndeterminate:{type:Boolean,default:!0},pagination:{default:void 0},selection:{default:void 0},defaultSelection:{default:void 0},disabled:{type:Boolean,default:!1}},emits:["select","select-all","selection-change","update:selection","row-click","row-dblclick","cell-click","sort-change","expand-change","current-change","page-change"],setup(n,{expose:a,emit:t}){var Lt,_t,Bt,Mt;const e=n,o=t,s=Ee("table"),{t:r}=lt(),p=x([]);vt(Va,{register:w=>{p.value.some(b=>b.id===w.id)||p.value.push(w)},unregister:w=>{const b=p.value.findIndex(A=>A.id===w);b>=0&&p.value.splice(b,1)}});const m=g(()=>p.value.length?p.value.map(w=>({...w.props,id:w.id,slots:w.slots,source:"child"})):(e.columns??[]).map((w,b)=>({...w,id:`col-prop-${w.prop??b}`,slots:{default:void 0,header:void 0},source:"prop"}))),f=g(()=>m.value.find(w=>w.type==="selection")),_=g(()=>e.height!=null||e.maxHeight!=null);function S(w){return e.rowKey?String(w[e.rowKey]):String(e.data.indexOf(w))}const R=x(void 0),E=x(null),Z=x(!1);function J(w,b){if(typeof b.sortBy=="function")return b.sortBy(w);const A=typeof b.sortBy=="string"?b.sortBy:b.prop;return A!=null?w[A]:void 0}const L=g(()=>{if(!E.value||R.value==null||Z.value)return e.data;const w=m.value.find(A=>A.id===R.value);if(!w)return e.data;const b=[...e.data];return b.sort((A,j)=>{if(w.sortMethod)return w.sortMethod(A,j);const le=J(A,w),_e=J(j,w);return le==null&&_e==null?0:le==null?1:_e==null||le<_e?-1:le>_e?1:0}),E.value==="descending"&&b.reverse(),b});function I(w){var at;if(e.disabled||!w.sortable)return;const b=(at=w.sortOrders)!=null&&at.length?w.sortOrders:["ascending","descending",null],j=R.value===w.id?E.value:null,le=b.indexOf(j),_e=b[(le+1)%b.length];R.value=w.id,E.value=_e,Z.value=w.sortable==="custom",w.sortable==="custom"?o("sort-change",{column:w,prop:w.prop,order:_e}):o("sort-change",{column:w,prop:w.prop,order:_e})}function M(w){if(!(!w.sortable||R.value!==w.id))return E.value==="ascending"?"ascending":E.value==="descending"?"descending":"none"}function V(w){return w.sortable?R.value!==w.id||E.value==null?r("table.sortAsc"):E.value==="ascending"?r("table.sortDesc"):r("table.sortClear"):""}const B=x(new Set((e.defaultSelection??[]).map(String))),H=g(()=>e.data.filter(w=>B.value.has(S(w)))),ee=g(()=>T.value);function ne(w){return B.value.has(S(w))}function re(w,b){var A;return(A=f.value)!=null&&A.selectable?f.value.selectable(w,b):!0}const me=g(()=>ee.value.filter((w,b)=>re(w,b))),ue=g(()=>me.value.length>0&&me.value.every(w=>ne(w))),Oe=g(()=>me.value.some(w=>ne(w))),X=g(()=>Oe.value&&!ue.value);function de(){const w=H.value;o("selection-change",w),o("update:selection",w)}function be(w){if(e.disabled)return;const b=S(w);B.value.has(b)?B.value.delete(b):B.value.add(b);const A=H.value;o("select",A,w),de()}function Ce(){if(e.disabled)return;const w=me.value.map(b=>S(b));ue.value?w.forEach(b=>B.value.delete(b)):w.forEach(b=>B.value.add(b)),o("select-all",H.value),de()}function Ke(w){e.disabled||(X.value&&!e.selectOnIndeterminate?me.value.forEach(b=>B.value.delete(S(b))):w?me.value.forEach(b=>B.value.add(S(b))):me.value.forEach(b=>B.value.delete(S(b))),o("select-all",H.value),de())}const he=x(new Set);Pe(()=>e.expandRowKeys,w=>{he.value=new Set((w??[]).map(String))},{immediate:!0}),Pe(()=>e.defaultExpandAll,w=>{w&&(he.value=new Set(e.data.map(b=>S(b))))},{immediate:!0});function xe(w){return he.value.has(S(w))}function Te(w){if(e.disabled)return;const b=S(w);he.value.has(b)?he.value.delete(b):he.value.add(b),o("expand-change",w,Array.from(he.value))}const q=x(e.currentRowKey);function pe(w,b,A){if(o("row-click",w,b,A),e.highlightCurrentRow&&!e.disabled){const j=q.value!=null?e.data.find(le=>S(le)===String(q.value))??null:null;q.value=S(w),o("current-change",w,j)}}function Se(w){return q.value!=null&&S(w)===String(q.value)}const we=g(()=>e.pagination),ye=x(((Lt=we.value)==null?void 0:Lt.currentPage)??1),Ve=x(((_t=we.value)==null?void 0:_t.pageSize)??((Mt=(Bt=we.value)==null?void 0:Bt.pageSizes)==null?void 0:Mt[0])??10);Pe(()=>e.pagination,w=>{(w==null?void 0:w.currentPage)!=null&&(ye.value=w.currentPage),(w==null?void 0:w.pageSize)!=null&&(Ve.value=w.pageSize)},{immediate:!0});const Re=g(()=>{const w=we.value;return(w==null?void 0:w.total)!=null?w.total:(w==null?void 0:w.pageCount)!=null?w.pageCount*Ve.value:L.value.length}),T=g(()=>{if(!we.value)return L.value;const w=(ye.value-1)*Ve.value;return L.value.slice(w,w+Ve.value)});function te(w){ye.value=w.currentPage,Ve.value=w.pageSize,o("page-change",w)}function D(w){if(w==null)return;if(typeof w=="number")return w;const b=parseFloat(w);return Number.isNaN(b)?void 0:b}const oe=g(()=>{const w=new Map;let b=0,A=0;for(const j of m.value)if(j.fixed==="left"||j.fixed===!0){w.set(j.id,{left:b});const le=D(j.width);le!=null&&(b+=le)}for(let j=m.value.length-1;j>=0;j--){const le=m.value[j];if(le.fixed==="right"){w.set(le.id,{right:A});const _e=D(le.width);_e!=null&&(A+=_e)}}return w});function ie(w,b){return b.formatter?b.formatter(w,b,b.prop!=null?w[b.prop]:void 0,0):b.prop!=null?w[b.prop]:""}function Be(w,b){const A=m.value.find(j=>j.type==="index");return A!=null&&A.indexMethod?A.indexMethod(b,w):we.value?(ye.value-1)*Ve.value+b+1:b+1}function G(w,b,A,j){var gt;const le={},_e=oe.value.get(b.id);b.fixed==="left"||b.fixed===!0?(le.position="sticky",le.left=(_e==null?void 0:_e.left)!=null?`${_e.left}px`:"0",le.zIndex=2,le.background="var(--kk-bg-container)"):b.fixed==="right"&&(le.position="sticky",le.right=(_e==null?void 0:_e.right)!=null?`${_e.right}px`:"0",le.zIndex=2,le.background="var(--kk-bg-container)");const at=(gt=e.cellStyle)==null?void 0:gt.call(e,{row:w,column:b,rowIndex:A,columnIndex:j});return at&&typeof at=="object"&&Object.assign(le,at),le}function P(w){const b={},A=oe.value.get(w.id);return w.fixed==="left"||w.fixed===!0?(b.position="sticky",b.left=(A==null?void 0:A.left)!=null?`${A.left}px`:"0",b.zIndex=3,b.background="var(--kk-bg-subtle)"):w.fixed==="right"&&(b.position="sticky",b.right=(A==null?void 0:A.right)!=null?`${A.right}px`:"0",b.zIndex=3,b.background="var(--kk-bg-subtle)"),b}function Y(w,b,A,j){var _e;const le=b.fixed==="right"?"right":b.fixed?"left":void 0;return[s.e("cell"),s.is(`align-${b.align}`,!0),le?s.is(`fixed-${le}`):void 0,b.className,(_e=e.cellClassName)==null?void 0:_e.call(e,{row:w,column:b,rowIndex:A,columnIndex:j})]}function Q(w){const b=w.fixed==="right"?"right":w.fixed?"left":void 0;return[s.e("cell"),s.is(`align-${w.align}`,!0),b?s.is(`fixed-${b}`):void 0,w.labelClassName]}function ke(w,b){var A;return[s.e("row"),s.is("striped",e.stripe&&b%2===1),s.is("current",e.highlightCurrentRow&&Se(w)),(A=e.rowClassName)==null?void 0:A.call(e,{row:w,rowIndex:b})]}function ae(w,b){var j;const A=(j=e.rowStyle)==null?void 0:j.call(e,{row:w,rowIndex:b});return A&&typeof A=="object"?A:void 0}function fe(w){if(w!=null)return typeof w=="number"?`${w}px`:w}const nt=g(()=>{const w={overflow:"auto"};return e.height!=null&&(w.height=fe(e.height)),e.maxHeight!=null&&(w.maxHeight=fe(e.maxHeight)),w}),Me=g(()=>T.value.length===0),Ae=g(()=>e.emptyText||r("table.empty")),Ue=g(()=>r("table.loading")),dt=C({name:"KkTableCheckbox",props:{modelValue:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},label:{type:String,default:""}},emits:["update:modelValue","change"],setup(w,b){const A=x(null);return an(()=>{A.value&&(A.value.indeterminate=w.indeterminate)}),()=>xa("input",{ref:A,type:"checkbox",class:s.e("checkbox"),checked:w.modelValue,disabled:w.disabled,"aria-checked":w.indeterminate?"mixed":w.modelValue,"aria-label":w.label,onChange:j=>{const le=j.target.checked;b.emit("update:modelValue",le),b.emit("change",le)}})}}),mt=C({name:"KkTableSlotRenderer",props:{fn:{type:Function,default:void 0},scope:{type:Object,default:()=>({})}},setup(w){return()=>typeof w.fn=="function"?w.fn(w.scope):null}}),pt=x(null);function Ft(){B.value=new Set,de()}function Dt(w,b){if(e.disabled)return;const A=S(w);b??!B.value.has(A)?B.value.add(A):B.value.delete(A),de()}function Tt(){Ce()}function zt(w){const b=q.value!=null?e.data.find(A=>S(A)===String(q.value))??null:null;q.value=S(w),o("current-change",w,b)}function ht(){R.value=void 0,E.value=null}function kt(){}function Pt(w){const b=pt.value;if(!b)return;const A=Array.from(b.querySelectorAll("tr[data-kk-table-row]"));let j;w.key!=null?j=A.find(le=>le.dataset.kkTableRow===String(w.key)):w.index!=null&&(j=A[w.index]),j&&j.scrollIntoView({block:"nearest"})}function Nt(){return H.value}a({clearSelection:Ft,toggleRowSelection:Dt,toggleAllSelection:Tt,setCurrentRow:zt,clearSort:ht,clearFilter:kt,scrollTo:Pt,getSelectionRows:Nt});const yt=g(()=>[s.b(),s.m(e.size),s.is("border",e.border),s.is("scrollable",_.value),s.is("disabled",e.disabled)]);return(w,b)=>{var A;return i(),c("div",{class:h(yt.value),role:"region"},[u("div",{class:h(l(s).e("columns")),style:{display:"none"}},[y(w.$slots,"default")],2),u("div",{ref_key:"bodyWrapRef",ref:pt,class:h(l(s).e("body-wrap")),style:je(nt.value)},[u("table",{class:h(l(s).e("table")),cellspacing:"0",cellpadding:"0"},[u("colgroup",null,[(i(!0),c(U,null,ge(m.value,j=>(i(),c("col",{key:j.id,style:je({width:D(j.width)})},null,4))),128))]),e.showHeader?(i(),c("thead",bs,[u("tr",{class:h(l(s).e("header-row"))},[(i(!0),c(U,null,ge(m.value,j=>(i(),c("th",{key:j.id,class:h(Q(j)),style:je(P(j)),"aria-sort":M(j),scope:"col"},[j.type==="selection"?(i(),N(l(dt),{key:0,"model-value":ue.value,indeterminate:X.value,disabled:e.disabled||me.value.length===0,label:l(r)("table.selectAll"),onChange:Ke},null,8,["model-value","indeterminate","disabled","label"])):j.type==="expand"?(i(),c("span",ys)):j.type==="index"?(i(),c("span",_s,O(j.label||"#"),1)):(i(),c(U,{key:3},[j.slots.header?(i(),N(l(mt),{key:0,fn:j.slots.header,scope:{column:j}},null,8,["fn","scope"])):(i(),c("span",{key:1,class:h(l(s).e("header-label"))},O(j.label),3)),j.sortable?(i(),c("button",{key:2,type:"button",class:h([l(s).e("sort"),l(s).is("active",R.value===j.id)]),"aria-label":V(j),onClick:le=>I(j)},[(i(),c("svg",{viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":"true",class:h(l(s).e("sort-icon"))},[u("path",{d:"M12 5l5 6H7z",class:h(l(s).is("asc",R.value===j.id&&E.value==="ascending")),fill:"currentColor"},null,2),u("path",{d:"M12 19l-5-6h10z",class:h(l(s).is("desc",R.value===j.id&&E.value==="descending")),fill:"currentColor"},null,2)],2))],10,xs)):$("",!0)],64))],14,hs))),128))],2)])):$("",!0),u("tbody",null,[(i(!0),c(U,null,ge(T.value,(j,le)=>(i(),c(U,{key:S(j)},[u("tr",{"data-kk-table-row":S(j),class:h(ke(j,le)),style:je(ae(j,le)),onClick:_e=>pe(j,le,_e),onDblclick:_e=>o("row-dblclick",j,le,_e)},[(i(!0),c(U,null,ge(m.value,(_e,at)=>(i(),c("td",{key:_e.id,class:h(Y(j,_e,le,at)),style:je(G(j,_e,le,at)),onClick:gt=>o("cell-click",j,_e,at,gt)},[_e.type==="selection"?(i(),N(l(dt),{key:0,"model-value":ne(j),disabled:e.disabled||!re(j,le),label:l(r)("table.selectRow"),onChange:gt=>be(j)},null,8,["model-value","disabled","label","onChange"])):_e.type==="index"?(i(),c("span",Ss,O(Be(j,le)),1)):_e.type==="expand"?(i(),c("button",{key:2,type:"button",class:h(l(s).e("expand-btn")),"aria-expanded":xe(j),"aria-label":xe(j)?l(r)("table.collapseRow"):l(r)("table.expandRow"),onClick:gt=>Te(j)},[...b[0]||(b[0]=[u("svg",{viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":"true"},[u("path",{d:"M9 6l6 6-6 6",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],10,Ks)):(i(),c(U,{key:3},[_e.slots.default?(i(),N(l(mt),{key:0,fn:_e.slots.default,scope:{row:j,column:_e,index:le,$index:le}},null,8,["fn","scope"])):(i(),c("span",{key:1,class:h(l(s).e("cell-text"))},O(ie(j,_e)),3))],64))],14,$s))),128))],46,ws),xe(j)?(i(),c("tr",{key:0,class:h(l(s).e("expanded-row"))},[u("td",{colspan:m.value.length,class:h(l(s).e("expanded-cell"))},[y(w.$slots,"expand",{row:j,index:le},()=>[b[1]||(b[1]=K(O(""),-1))])],10,Cs)],2)):$("",!0)],64))),128)),Me.value?(i(),c("tr",{key:0,class:h(l(s).e("empty-row"))},[u("td",{colspan:m.value.length,class:h(l(s).e("empty"))},[y(w.$slots,"empty",{},()=>[K(O(Ae.value),1)])],10,Ts)],2)):$("",!0)])],2),e.loading?(i(),c("div",{key:0,class:h(l(s).e("loading")),role:"status"},[y(w.$slots,"loading",{},()=>[K(O(Ue.value),1)])],2)):$("",!0)],6),we.value?(i(),N(l(un),Le({key:0},we.value,{"current-page":ye.value,"page-size":Ve.value,total:Re.value,size:((A=we.value)==null?void 0:A.size)??e.size,disabled:e.disabled,onChange:te}),null,16,["current-page","page-size","total","size","disabled"])):$("",!0),w.$slots.append?(i(),c("div",{key:1,class:h(l(s).e("append"))},[y(w.$slots,"append")],2)):$("",!0)],2)}}}),Ps={hidden:"","aria-hidden":"true"},Ls=C({name:"KkTableColumn",inheritAttrs:!1,__name:"TableColumn",props:{prop:{default:void 0},label:{default:""},width:{default:void 0},minWidth:{default:void 0},fixed:{type:[String,Boolean],default:void 0},align:{default:"left"},sortable:{type:[Boolean,String],default:void 0},sortBy:{type:[String,Function],default:void 0},sortOrders:{default:void 0},sortMethod:{},resizable:{type:Boolean,default:!1},selectable:{type:Function,default:void 0},type:{default:"default"},indexMethod:{type:Function,default:void 0},formatter:{type:Function,default:void 0},className:{default:void 0},labelClassName:{default:void 0}},setup(n){const a=n,t=ct(),e=qe(Va,null),o=Ct("kk-table-col"),s={id:o,props:a,slots:{default:t.default,header:t.header}};return De(()=>e==null?void 0:e.register(s)),Ge(()=>e==null?void 0:e.unregister(o)),(r,p)=>(i(),c("span",Ps))}}),cn=Ie(zs,"KkTable"),Qe=Ie(Ls,"KkTableColumn"),Bs=C({name:"KkWatermark",inheritAttrs:!1,__name:"Watermark",props:{content:{},width:{default:120},height:{default:120},rotate:{default:-22},gap:{default:()=>[100,100]},offset:{},font:{},image:{},imageWidth:{},imageHeight:{},opacity:{default:.15},zIndex:{default:9},cross:{type:Boolean,default:!0},repeat:{type:Boolean,default:!0},inheritColor:{type:Boolean,default:!1}},setup(n,{expose:a}){const t=n,e=Ee("watermark"),{t:o}=lt(),s=x(null),r=x(null),p=x([]),d=x({w:0,h:0});let m=!1,f=null,_=null;function S(V,B){return typeof window>"u"||typeof getComputedStyle!="function"?B:getComputedStyle(document.documentElement).getPropertyValue(V).trim()||B}const R=g(()=>{const V=t.font??{};let B=V.color;return B||(t.inheritColor&&s.value?B=getComputedStyle(s.value).color:B=S("--kk-text-tertiary","#9ba3b7")),{color:B,size:V.size??16,family:V.family??S("--kk-font-sans","sans-serif"),weight:V.weight??"normal",style:V.style??"normal"}});function E(){if(r.value){const ne=(r.value.textContent??"").trim().split(`
`).map(re=>re.trim()).filter(Boolean);if(ne.length)return ne}const V=t.content;if(V==null)return[o("watermark.text")];const H=(Array.isArray(V)?V:[V]).map(String).filter(ee=>ee.length>0);return H.length?H:[o("watermark.text")]}function Z(V){try{return V.getContext("2d")}catch{return null}}function J(V){const B=document.createElement("canvas"),H=Z(B);if(!H)return;const ee=typeof window<"u"&&window.devicePixelRatio?window.devicePixelRatio:1,ne=R.value,re=E(),me=ne.size+4,ue=re.length*me;H.font=`${ne.style} ${ne.weight} ${ne.size}px ${ne.family}`;const Oe=re.map(we=>H.measureText(we).width),X=Math.max(1,...Oe),de=Math.max(X,t.width),be=Math.max(ue,t.height),Ce=V*Math.PI/180,Ke=Math.abs(Math.cos(Ce)),he=Math.abs(Math.sin(Ce)),xe=de*Ke+be*he,Te=de*he+be*Ke,q=Math.ceil(Math.max(xe,de)+t.gap[0]),pe=Math.ceil(Math.max(Te,be)+t.gap[1]);B.width=q*ee,B.height=pe*ee,H.scale(ee,ee),H.clearRect(0,0,q,pe),H.translate(q/2,pe/2),H.rotate(Ce),H.font=`${ne.style} ${ne.weight} ${ne.size}px ${ne.family}`,H.fillStyle=ne.color,H.textAlign="center",H.textBaseline="middle";const Se=-((re.length-1)*me)/2;return re.forEach((we,ye)=>H.fillText(we,0,Se+ye*me)),d.value={w:q,h:pe},B.toDataURL()}function L(V){const B=document.createElement("canvas"),H=Z(B);if(!H)return;const ee=typeof window<"u"&&window.devicePixelRatio?window.devicePixelRatio:1,ne=t.imageWidth||V.naturalWidth||t.width,re=t.imageHeight||V.naturalHeight||t.height,me=t.rotate*Math.PI/180,ue=Math.abs(Math.cos(me)),Oe=Math.abs(Math.sin(me)),X=ne*ue+re*Oe,de=ne*Oe+re*ue,be=Math.ceil(Math.max(X,ne)+t.gap[0]),Ce=Math.ceil(Math.max(de,re)+t.gap[1]);B.width=be*ee,B.height=Ce*ee,H.scale(ee,ee),H.clearRect(0,0,be,Ce),H.translate(be/2,Ce/2),H.rotate(me);try{H.drawImage(V,-ne/2,-re/2,ne,re)}catch{return}return d.value={w:be,h:Ce},B.toDataURL()}function I(){if(m)return;if(p.value=[],t.image){const B=new Image;B.crossOrigin="anonymous",B.onload=()=>{const H=L(B);H&&(p.value=[H])},B.onerror=()=>{},B.src=t.image;return}const V=J(t.rotate);if(V!=null)if(t.cross){const B=J(-t.rotate);p.value=B!=null?[V,B]:[V]}else p.value=[V]}const M=g(()=>{const V={opacity:t.opacity,zIndex:t.zIndex};if(p.value.length){const{w:B,h:H}=d.value;V.backgroundImage=p.value.map(ee=>`url("${ee}")`).join(", "),V.backgroundRepeat=t.repeat?"repeat":"no-repeat",V.backgroundSize=p.value.map(()=>`${B}px ${H}px`).join(", "),V.backgroundPosition=t.offset?`${We(t.offset[0])} ${We(t.offset[1])}`:"0 0"}return V});return Pe(()=>[t.content,t.image,t.width,t.height,t.rotate,t.gap,t.offset,t.font,t.opacity,t.zIndex,t.cross,t.repeat,t.inheritColor],I,{deep:!0}),De(()=>{I();const V=s.value;V&&(typeof ResizeObserver<"u"?(f=new ResizeObserver(()=>I()),f.observe(V)):typeof window<"u"&&(_=()=>I(),window.addEventListener("resize",_)))}),Ge(()=>{m=!0,f==null||f.disconnect(),_&&typeof window<"u"&&window.removeEventListener("resize",_)}),a({redraw:I}),(V,B)=>(i(),c("div",{ref_key:"containerRef",ref:s,class:h(l(e).b())},[y(V.$slots,"default"),V.$slots.content?(i(),c("span",{key:0,ref_key:"contentRef",ref:r,class:h(l(e).e("content")),"aria-hidden":"true"},[y(V.$slots,"content")],2)):$("",!0),u("div",{class:h(l(e).e("overlay")),style:je(M.value),"aria-hidden":"true"},null,6)],2))}}),Cn=Ie(Bs,"KkWatermark"),Oa=Symbol("kk-layout"),Ia=Symbol("kk-row"),Ms=C({name:"KkLayout",inheritAttrs:!1,__name:"Layout",props:{direction:{},hasSider:{type:Boolean},fixed:{type:Boolean,default:!1},height:{},gap:{default:0},bordered:{type:Boolean,default:!1}},setup(n){const a=n,t=ct(),e=Ee("layout"),o=x(!1),s=g(()=>a.hasSider||!!t.sider),r=g(()=>a.direction??(s.value?"horizontal":"vertical"));function p(_){o.value=_??!o.value}const d=g(()=>({collapsed:o.value,toggle:p}));vt(Oa,{collapsed:o,hasSider:s,toggle:p});const m=g(()=>[e.b(),e.m(r.value),e.is("fixed",a.fixed),e.is("bordered",a.bordered),e.is("has-sider",s.value)]),f=g(()=>{const _={display:"flex",flexDirection:r.value==="horizontal"?"row":"column",gap:We(a.gap)??void 0};return a.fixed&&(_.height="100vh"),a.height!=null&&(_.height=We(a.height)),_});return(_,S)=>(i(),c("div",Le({class:m.value,style:f.value},_.$attrs),[_.$slots.header?(i(),c("div",{key:0,class:h([l(e).e("region"),l(e).em("region","header")])},[y(_.$slots,"header",Gt(Yt(d.value)))],2)):$("",!0),u("div",{class:h(l(e).e("main"))},[_.$slots.sider?(i(),c("div",{key:0,class:h([l(e).e("region"),l(e).em("region","sider")])},[y(_.$slots,"sider",Gt(Yt(d.value)))],2)):$("",!0),_.$slots.content?(i(),c("div",{key:1,class:h([l(e).e("region"),l(e).em("region","content")])},[y(_.$slots,"content")],2)):$("",!0),y(_.$slots,"default")],2),_.$slots.footer?(i(),c("div",{key:1,class:h([l(e).e("region"),l(e).em("region","footer")])},[y(_.$slots,"footer")],2)):$("",!0)],16))}}),Vs=C({name:"KkLayoutHeader",inheritAttrs:!1,__name:"LayoutHeader",props:{height:{default:60},fixed:{type:Boolean,default:!1},bordered:{type:Boolean,default:!0}},setup(n){const a=n,t=Ee("layout-header"),e=g(()=>[t.b(),t.is("fixed",a.fixed),t.is("bordered",a.bordered)]),o=g(()=>({height:We(a.height)}));return(s,r)=>(i(),c("header",Le({class:e.value,style:o.value},s.$attrs),[s.$slots.left?(i(),c("div",{key:0,class:h(l(t).e("left"))},[y(s.$slots,"left")],2)):$("",!0),u("div",{class:h(l(t).e("center"))},[y(s.$slots,"default")],2),s.$slots.right?(i(),c("div",{key:1,class:h(l(t).e("right"))},[y(s.$slots,"right")],2)):$("",!0)],16))}}),Os=["aria-label"],Is=C({name:"KkLayoutSider",inheritAttrs:!1,__name:"LayoutSider",props:{width:{default:220},collapsedWidth:{default:64},collapsed:{type:Boolean},collapsible:{type:Boolean,default:!1},trigger:{type:[Boolean,String],default:!0},position:{default:"left"},bordered:{type:Boolean,default:!0},reverseArrow:{type:Boolean,default:!1}},emits:["update:collapsed","collapse"],setup(n,{emit:a}){const t=n,e=a,o=Ee("layout-sider"),{t:s}=lt(),r=qe(Oa,null),p=x(t.collapsed??(r==null?void 0:r.collapsed.value)??!1),d=r?r.collapsed:p,m=el(),f=g(()=>{var M;return((M=m==null?void 0:m.vnode.props)==null?void 0:M.collapsed)!==void 0}),_=g(()=>d.value);function S(M){const V=typeof M=="boolean"?M:!_.value;f.value||(d.value=V),e("update:collapsed",V),e("collapse",V)}Pe(()=>t.collapsed,M=>{M!==void 0&&(d.value=M)}),r&&(r.hasSider.value=!0);const R=g(()=>[o.b(),o.is("collapsed",_.value),o.is("bordered",t.bordered),o.m(t.position)]),E=g(()=>({width:We(_.value?t.collapsedWidth:t.width),order:t.position==="right"?2:0})),Z=g(()=>typeof t.trigger=="string"?t.trigger:"trigger"),J=g(()=>t.collapsible&&t.trigger!==!1),L=g(()=>({collapsed:_.value,toggle:S})),I=g(()=>_.value!==!t.reverseArrow);return(M,V)=>(i(),c("aside",Le({class:R.value,style:E.value},M.$attrs),[M.$slots.logo?(i(),c("div",{key:0,class:h(l(o).e("logo"))},[y(M.$slots,"logo",Gt(Yt(L.value)))],2)):$("",!0),u("div",{class:h(l(o).e("body"))},[y(M.$slots,"default",Gt(Yt(L.value)))],2),J.value?(i(),c("div",{key:1,class:h(l(o).e("trigger")),role:"button",tabindex:"0","aria-label":_.value?l(s)("common.expand"):l(s)("common.collapse"),onClick:V[0]||(V[0]=B=>S()),onKeydown:[V[1]||(V[1]=Zt(Je(B=>S(),["prevent"]),["enter"])),V[2]||(V[2]=Zt(Je(B=>S(),["prevent"]),["space"]))]},[y(M.$slots,Z.value,Gt(Yt(L.value)),()=>[(i(),c("svg",{class:h(["kk-layout-sider__arrow",{"is-reversed":I.value}]),viewBox:"0 0 16 16",width:"16",height:"16","aria-hidden":"true"},[...V[3]||(V[3]=[u("path",{d:"M10 3L5 8l5 5",fill:"none",stroke:"currentColor","stroke-width":"1.6","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])],2))])],42,Os)):$("",!0)],16))}}),As=C({name:"KkLayoutContent",inheritAttrs:!1,__name:"LayoutContent",props:{padding:{default:"medium"},scrollable:{type:Boolean,default:!0}},setup(n){const a=n,t=Ee("layout-content"),e={none:"0",small:"var(--kk-space-3)",medium:"var(--kk-space-5)",large:"var(--kk-space-6)"},o=g(()=>[t.b(),t.is("scrollable",a.scrollable)]),s=g(()=>{const r=a.padding;return{padding:(typeof r=="string"&&e[r]?e[r]:We(r))??e.medium}});return(r,p)=>(i(),c("main",Le({class:o.value,style:s.value},r.$attrs),[y(r.$slots,"default")],16))}}),Es=C({name:"KkLayoutFooter",inheritAttrs:!1,__name:"LayoutFooter",props:{height:{default:56},bordered:{type:Boolean,default:!0}},setup(n){const a=n,t=Ee("layout-footer"),e=g(()=>[t.b(),t.is("bordered",a.bordered)]),o=g(()=>({height:We(a.height)}));return(s,r)=>(i(),c("footer",Le({class:e.value,style:o.value},s.$attrs),[y(s.$slots,"default")],16))}}),js=C({name:"KkRow",inheritAttrs:!1,__name:"Row",props:{gutter:{},justify:{default:"start"},align:{default:"stretch"},wrap:{type:Boolean,default:!0},tag:{default:"div"}},setup(n){const a=n,t=Ee("row"),e={start:"flex-start",center:"center",end:"flex-end","space-between":"space-between","space-around":"space-around","space-evenly":"space-evenly"},o={start:"flex-start",center:"center",end:"flex-end",stretch:"stretch"};function s(m){if(m==null)return 0;if(typeof m=="number")return m;const f=Number.parseFloat(m);return Number.isNaN(f)?0:f}const r=g(()=>Array.isArray(a.gutter)?s(a.gutter[0]):s(a.gutter)),p=g(()=>Array.isArray(a.gutter)?s(a.gutter[1]):s(a.gutter));vt(Ia,{gutterX:r});const d=g(()=>{const m={display:"flex",flexWrap:a.wrap?"wrap":"nowrap",justifyContent:e[a.justify],alignItems:o[a.align]};return r.value&&(m.marginLeft=`-${r.value/2}px`,m.marginRight=`-${r.value/2}px`),p.value&&(m.rowGap=`${p.value}px`),m});return(m,f)=>(i(),N(et(n.tag),Le({class:l(t).b(),style:d.value},m.$attrs),{default:v(()=>[y(m.$slots,"default")]),_:3},16,["class","style"]))}}),Rs=C({name:"KkCol",inheritAttrs:!1,__name:"Col",props:{span:{},offset:{},push:{},pull:{},xs:{},sm:{},md:{},lg:{},xl:{},tag:{default:"div"}},setup(n){const a=n,t=Ee("col"),e=qe(Ia,null),o=["xs","sm","md","lg","xl"];function s(m,f){if(typeof f=="number")return[t.m(`${m}-span-${f}`)];const _=[];return f.span!=null&&_.push(t.m(`${m}-span-${f.span}`)),f.offset!=null&&_.push(t.m(`${m}-offset-${f.offset}`)),f.push!=null&&_.push(t.m(`${m}-push-${f.push}`)),f.pull!=null&&_.push(t.m(`${m}-pull-${f.pull}`)),_}const r=g(()=>o.some(m=>a[m]!=null)),p=g(()=>{const m=[t.b()];return a.span!=null&&m.push(t.m(`span-${a.span}`)),a.offset!=null&&m.push(t.m(`offset-${a.offset}`)),a.push!=null&&m.push(t.m(`push-${a.push}`)),a.pull!=null&&m.push(t.m(`pull-${a.pull}`)),a.span==null&&!r.value&&m.push(t.m("auto")),o.forEach(f=>{const _=a[f];_!=null&&m.push(...s(f,_))}),m}),d=g(()=>{const m={},f=(e==null?void 0:e.gutterX.value)??0;return f&&(m.paddingLeft=`${f/2}px`,m.paddingRight=`${f/2}px`),m});return(m,f)=>(i(),N(et(n.tag),Le({class:p.value,style:d.value},m.$attrs),{default:v(()=>[y(m.$slots,"default")]),_:3},16,["class","style"]))}}),en=Ie(Ms,"KkLayout"),Gn=Ie(Vs,"KkLayoutHeader"),Yn=Ie(Is,"KkLayoutSider"),Xn=Ie(As,"KkLayoutContent"),Aa=Ie(Es,"KkLayoutFooter"),En=Ie(js,"KkRow"),xt=Ie(Rs,"KkCol"),Fs="data-kk-theme",Ea="kk-theme",ja=["light","dark","soft","cyber"],Zn=x("light"),Bn=Zn,Ds=()=>typeof document<"u";function Ra(){return Zn.value}function ut(n){Zn.value=n,Ds()&&document.documentElement.setAttribute(Fs,n);try{localStorage.setItem(Ea,n)}catch{}}function Ns(){var e;let n=null;try{n=localStorage.getItem(Ea)}catch{}if(n)return ut(n),n;const t=typeof window<"u"&&((e=window.matchMedia)==null?void 0:e.call(window,"(prefers-color-scheme: dark)").matches)?"dark":"light";return ut(t),t}function Hs(n){return ja.includes(n)}function Jn(n=Ra()){return n==="dark"||n==="cyber"}const Us=ja;function Tn(){const n=g(()=>Bn.value),a=g(()=>Jn(Bn.value));function t(e,o){const s=Bn.value===(e??"light")?o??"dark":e??"light";ut(s)}return{theme:n,themes:Us,isDark:a,setTheme:ut,toggleTheme:t,isBuiltInTheme:Hs}}const Ws=[ve,Ne,tt,$t,wt,Ye,He,$n,Ot,Rt,on,Wn,it,It,Xe,sn,Kn,rn,un,cn,Qe,Cn,en,Gn,Yn,Xn,Aa,En,xt],qs={install(n){Ws.forEach(a=>n.use(a))}},Gs={class:"kk-visual","aria-hidden":"true"},Ys={class:"kk-visual__stage"},Xs={class:"kk-visual__svg",viewBox:"0 0 520 420",role:"img"},Zs={class:"kk-visual__particles"},Js=["cx","cy","r"],Qs={class:"kk-visual__computer"},ei={"clip-path":"url(#kk-visual-screen-clip)"},ti={class:"kk-visual__code"},ni=["y","width"],ai={class:"kk-visual__keyboard"},li=["x","y","width"],oi=3,qt=8,si=C({__name:"HeroVisual",setup(n){const a=[{id:"line-1",y:204,width:92,tone:"primary"},{id:"line-2",y:217,width:58,tone:"muted"},{id:"line-3",y:230,width:116,tone:"soft"},{id:"line-4",y:243,width:74,tone:"primary"},{id:"line-5",y:256,width:104,tone:"muted"},{id:"line-6",y:269,width:52,tone:"accent"},{id:"line-7",y:282,width:88,tone:"soft"}],t=Array.from({length:oi*qt},(o,s)=>{const r=Math.floor(s/qt),p=s%qt,d=272-r*9,m=176+r*18,f=5,_=(m-f*(qt-1))/qt;return{id:`key-${r}-${p}`,x:Number((d+p*(_+f)).toFixed(2)),y:305+r*10,width:Number(_.toFixed(2))}}),e=[{id:"p1",cx:118,cy:92,r:4,delay:0},{id:"p2",cx:448,cy:128,r:5,delay:1.4},{id:"p3",cx:84,cy:268,r:3,delay:2.6},{id:"p4",cx:466,cy:288,r:4,delay:3.8},{id:"p5",cx:396,cy:84,r:3,delay:5}];return(o,s)=>(i(),c("div",Gs,[u("div",Ys,[(i(),c("svg",Xs,[s[10]||(s[10]=ua('<defs><clipPath id="kk-visual-screen-clip"><rect x="292" y="178" width="148" height="112" rx="6"></rect></clipPath><clipPath id="kk-visual-visor-clip"><rect x="176" y="142" width="50" height="28" rx="12"></rect></clipPath><linearGradient id="kk-visual-visor-gradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0" class="kk-visual__visor-from"></stop><stop offset="1" class="kk-visual__visor-to"></stop></linearGradient><radialGradient id="kk-visual-glow-gradient" cx="0.5" cy="0.5" r="0.5"><stop offset="0" class="kk-visual__glow-from"></stop><stop offset="1" class="kk-visual__glow-to"></stop></radialGradient></defs><g class="kk-visual__backdrop"><ellipse class="kk-visual__glow" cx="330" cy="248" rx="210" ry="150" fill="url(#kk-visual-glow-gradient)"></ellipse><circle class="kk-visual__ring kk-visual__ring--outer" cx="330" cy="246" r="176"></circle><circle class="kk-visual__ring kk-visual__ring--inner" cx="330" cy="246" r="134"></circle></g>',2)),u("g",Zs,[(i(),c(U,null,ge(e,r=>u("circle",{key:r.id,class:"kk-visual__particle",cx:r.cx,cy:r.cy,r:r.r,style:je({animationDelay:`${r.delay}s`})},null,12,Js)),64))]),s[11]||(s[11]=u("g",{class:"kk-visual__desk"},[u("ellipse",{class:"kk-visual__desk-glow",cx:"300",cy:"352",rx:"196",ry:"18"}),u("rect",{class:"kk-visual__desk-top",x:"52",y:"336",width:"416",height:"13",rx:"6.5"})],-1)),u("g",Qs,[s[7]||(s[7]=u("ellipse",{class:"kk-visual__screen-aura",cx:"366",cy:"238",rx:"118",ry:"96"},null,-1)),s[8]||(s[8]=u("rect",{class:"kk-visual__lid",x:"282",y:"168",width:"168",height:"136",rx:"10"},null,-1)),s[9]||(s[9]=u("rect",{class:"kk-visual__screen",x:"292",y:"178",width:"148",height:"112",rx:"6"},null,-1)),u("g",ei,[u("g",ti,[s[0]||(s[0]=u("rect",{class:"kk-visual__code-bar",x:"292",y:"186",width:"148",height:"9"},null,-1)),s[1]||(s[1]=u("circle",{class:"kk-visual__code-dot",cx:"300",cy:"190.5",r:"2.2"},null,-1)),s[2]||(s[2]=u("circle",{class:"kk-visual__code-dot",cx:"308",cy:"190.5",r:"2.2"},null,-1)),s[3]||(s[3]=u("circle",{class:"kk-visual__code-dot",cx:"316",cy:"190.5",r:"2.2"},null,-1)),(i(),c(U,null,ge(a,r=>u("rect",{key:r.id,class:h(["kk-visual__code-line",`kk-visual__code-line--${r.tone}`]),x:"302",y:r.y,width:r.width,height:"5",rx:"2.5"},null,10,ni)),64)),s[4]||(s[4]=u("rect",{class:"kk-visual__caret",x:"302",y:"294",width:"10",height:"6",rx:"2"},null,-1))]),s[5]||(s[5]=u("rect",{class:"kk-visual__scanline",x:"292",y:"178",width:"148",height:"16"},null,-1))]),u("g",ai,[s[6]||(s[6]=u("path",{class:"kk-visual__keyboard-base",d:"M268 300H452L472 336H248Z"},null,-1)),(i(!0),c(U,null,ge(l(t),r=>(i(),c("rect",{key:r.id,class:"kk-visual__key",x:r.x,y:r.y,width:r.width,height:"6.8",rx:"2"},null,8,li))),128))])]),s[12]||(s[12]=ua('<g class="kk-visual__robot"><g class="kk-visual__float"><ellipse class="kk-visual__robot-shadow" cx="196" cy="344" rx="70" ry="10"></ellipse><path class="kk-visual__arm kk-visual__arm--back" d="M226 236C246 250 260 274 272 296"></path><rect class="kk-visual__neck" x="186" y="190" width="18" height="20" rx="7"></rect><rect class="kk-visual__torso" x="152" y="206" width="78" height="106" rx="26"></rect><circle class="kk-visual__core-ring" cx="190" cy="248" r="19"></circle><circle class="kk-visual__core" cx="190" cy="248" r="12"></circle><circle class="kk-visual__core-dot" cx="190" cy="248" r="5"></circle><g class="kk-visual__head"><path class="kk-visual__antenna" d="M168 128C166 112 172 102 184 98"></path><circle class="kk-visual__antenna-tip" cx="185" cy="97" r="5"></circle><circle class="kk-visual__antenna-wave" cx="185" cy="97" r="11"></circle><rect class="kk-visual__head-box" x="150" y="126" width="86" height="66" rx="20"></rect><rect class="kk-visual__visor" x="176" y="142" width="50" height="28" rx="12" fill="url(#kk-visual-visor-gradient)"></rect><g clip-path="url(#kk-visual-visor-clip)"><rect class="kk-visual__visor-scan" x="176" y="142" width="50" height="7"></rect></g><path class="kk-visual__vent" d="M160 150h10M160 160h10M160 170h10"></path><circle class="kk-visual__ear" cx="152" cy="162" r="8"></circle></g><circle class="kk-visual__shoulder" cx="232" cy="224" r="14"></circle><path class="kk-visual__arm" d="M236 230C264 240 280 264 296 288"></path><g class="kk-visual__hand"><rect class="kk-visual__hand-box" x="290" y="282" width="20" height="14" rx="6"></rect><path class="kk-visual__finger" d="M296 296v6M304 296v6"></path></g></g></g>',1))]))])]))}}),ii=C({__name:"PointerField",props:{maxCount:{default:110},linkDistance:{default:116},pointerRadius:{default:190}},setup(n){const a=n,t={r:91,g:79,b:233},e={r:199,g:204,b:218},o=[.05,.1,.16,.24],s=[.1,.2,.32,.5],r=[.22,.42,.68],p=x(null);let d=null,m=0,f=0,_=0,S,R=null,E=0,Z=0,J=!1,L=!1;const I=[],M={x:-9999,y:-9999,active:!1},V={...t},B={...e},H=[[],[],[]],ee=[[],[],[],[]],ne=[[],[],[],[]];function re(T){return`rgb(${T.r}, ${T.g}, ${T.b})`}function me(T,te){const D=T.trim();if(D==="")return te;const oe=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(D);if(oe){const Be=oe[1].length===3?oe[1].split("").map(G=>G+G).join(""):oe[1];return{r:Number.parseInt(Be.slice(0,2),16),g:Number.parseInt(Be.slice(2,4),16),b:Number.parseInt(Be.slice(4,6),16)}}const ie=/rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i.exec(D);return ie?{r:Math.round(Number(ie[1])),g:Math.round(Number(ie[2])),b:Math.round(Number(ie[3]))}:te}function ue(){const T=getComputedStyle(document.documentElement);Object.assign(V,me(T.getPropertyValue("--kk-color-primary"),t)),Object.assign(B,me(T.getPropertyValue("--kk-border-color-hover"),e))}function Oe(){I.length=0;const T=Math.max(20,Math.min(a.maxCount,Math.round(E*Z/26e3)));for(let te=0;te<T;te+=1)I.push({x:Math.random()*E,y:Math.random()*Z,driftX:(Math.random()-.5)*.34,driftY:(Math.random()-.5)*.34,impulseX:0,impulseY:0,tier:te%3})}function X(){const T=p.value;if(!T)return;const te=Math.min(window.devicePixelRatio||1,2);E=window.innerWidth,Z=window.innerHeight,T.width=Math.round(E*te),T.height=Math.round(Z*te),T.style.width=`${E}px`,T.style.height=`${Z}px`,d=T.getContext("2d"),d==null||d.setTransform(te,0,0,te,0,0),Oe()}function de(T){if(!J){if(M.active){const te=M.x-T.x,D=M.y-T.y,oe=Math.hypot(te,D);if(oe<a.pointerRadius&&oe>.001){const ie=(1-oe/a.pointerRadius)*.42;T.impulseX+=te/oe*ie,T.impulseY+=D/oe*ie}}T.impulseX*=.94,T.impulseY*=.94,T.x+=T.driftX+Math.max(-1.4,Math.min(1.4,T.impulseX)),T.y+=T.driftY+Math.max(-1.4,Math.min(1.4,T.impulseY))}T.x<-40&&(T.x=E+40),T.x>E+40&&(T.x=-40),T.y<-40&&(T.y=Z+40),T.y>Z+40&&(T.y=-40)}function be(){for(let T=0;T<ee.length;T+=1)ee[T].length=0,ne[T].length=0;for(let T=0;T<H.length;T+=1)H[T].length=0}function Ce(T,te,D,oe){T.strokeStyle=D,T.lineWidth=1;for(let ie=0;ie<te.length;ie+=1){const Be=te[ie];if(Be.length!==0){T.globalAlpha=oe[ie],T.beginPath();for(let G=0;G<Be.length;G+=4)T.moveTo(Be[G],Be[G+1]),T.lineTo(Be[G+2],Be[G+3]);T.stroke()}}}function Ke(T){T.fillStyle=re(V);for(let te=0;te<H.length;te+=1){const D=H[te];if(D.length===0)continue;T.globalAlpha=r[te];const oe=.9+te*.55;T.beginPath();for(let ie=0;ie<D.length;ie+=2)T.moveTo(D[ie]+oe,D[ie+1]),T.arc(D[ie],D[ie+1],oe,0,Math.PI*2);T.fill()}}function he(){const T=d;if(!T)return;T.clearRect(0,0,E,Z),be();const te=a.linkDistance,D=te*te;for(let oe=0;oe<I.length;oe+=1){const ie=I[oe];de(ie);for(let Be=oe+1;Be<I.length;Be+=1){const G=I[Be],P=ie.x-G.x,Y=ie.y-G.y,Q=P*P+Y*Y;if(Q>D)continue;const ke=(1-Math.sqrt(Q)/te)*.24,ae=Math.min(ee.length-1,Math.floor(ke/.06));ee[ae].push(ie.x,ie.y,G.x,G.y)}if(M.active){const Be=ie.x-M.x,G=ie.y-M.y,P=Be*Be+G*G,Y=a.pointerRadius;if(P<Y*Y){const Q=(1-Math.sqrt(P)/Y)*.5,ke=Math.min(ne.length-1,Math.floor(Q/.125));ne[ke].push(ie.x,ie.y,M.x,M.y)}}H[ie.tier].push(ie.x,ie.y)}Ce(T,ee,re(B),o),Ce(T,ne,re(V),s),Ke(T),T.globalAlpha=1}function xe(){f||(f=requestAnimationFrame(()=>{f=0,he()}))}function Te(){he(),m=requestAnimationFrame(Te)}function q(){L||J||(L=!0,m=requestAnimationFrame(Te))}function pe(){m&&cancelAnimationFrame(m),m=0,L=!1}function Se(){S&&clearTimeout(S),S=setTimeout(()=>{M.active=!1,J&&xe()},2400)}function we(T){M.x=T.clientX,M.y=T.clientY,M.active=!0,Se(),J&&xe()}function ye(){M.active=!1,J&&xe()}function Ve(){document.hidden?pe():q()}function Re(){_&&cancelAnimationFrame(_),_=requestAnimationFrame(()=>{_=0,X(),J&&he()})}return De(()=>{J=window.matchMedia("(prefers-reduced-motion: reduce)").matches,X(),ue(),he(),window.addEventListener("pointermove",we,{passive:!0}),window.addEventListener("pointerleave",ye,{passive:!0}),window.addEventListener("resize",Re,{passive:!0}),document.addEventListener("visibilitychange",Ve),R=new MutationObserver(()=>{ue(),J&&xe()}),R.observe(document.documentElement,{attributes:!0,attributeFilter:["data-kk-theme","class","style"]}),q()}),Ge(()=>{pe(),f&&cancelAnimationFrame(f),f=0,_&&cancelAnimationFrame(_),_=0,S&&clearTimeout(S),window.removeEventListener("pointermove",we),window.removeEventListener("pointerleave",ye),window.removeEventListener("resize",Re),document.removeEventListener("visibilitychange",Ve),R==null||R.disconnect(),R=null}),(T,te)=>(i(),c("canvas",{ref_key:"canvasRef",ref:p,class:"kk-pointer-field","aria-hidden":"true"},null,512))}}),ri={class:"kk-hero"},ui={class:"kk-hero__content"},ci={class:"kk-hero__actions"},di=["href"],pi=["href"],vi={class:"kk-hero__visual"},fi={class:"kk-section"},mi={class:"kk-grid kk-grid--3"},ki={class:"kk-feature__icon"},gi={class:"kk-feature__title"},bi={class:"kk-feature__desc"},hi={class:"kk-section"},yi={class:"kk-grid kk-grid--auto"},_i=["href"],xi={class:"kk-comp-card__name"},wi={class:"kk-comp-card__desc"},$i={class:"kk-comp-card__count"},Mn="pnpm add kk-ui",Si=C({__name:"Home",setup(n){const a=[{icon:"lucide:palette",title:"多主题系统",desc:"4 套内置主题，三层 CSS 变量架构，运行时动态切换，并支持注册自定义主题。"},{icon:"lucide:code-2",title:"完整 TypeScript",desc:"全部使用 script setup 与 defineProps 泛型，Props、Events、Slots 类型完整导出。"},{icon:"lucide:zap",title:"按需引入",desc:"每个组件独立目录、独立样式入口，构建产物同时提供 ES 与 CJS 格式。"},{icon:"lucide:sparkles",title:"柔光几何设计",desc:"双层阴影、柔和焦点环、圆润圆角，让界面更有层次与呼吸感。"},{icon:"lucide:shield-check",title:"无障碍支持",desc:"语义化标签、ARIA 属性、键盘可达与可见焦点环，交互状态可辨识。"},{icon:"lucide:book-open",title:"配套文档与测试",desc:"每个组件都包含组件、类型、样式、测试、README，交付即完整。"}],t=[{name:"通用",desc:"Button / Icon",count:"2 个组件 · 已完成",link:"/components/button"},{name:"布局",desc:"Space / Divider / Card",count:"3 个组件 · 已完成",link:"/components/space"},{name:"数据展示",desc:"Tag",count:"1 个组件 · 已完成",link:"/components/tag"},{name:"数据录入",desc:"Input / Form / FormItem",count:"3 个组件 · 已完成",link:"/components/input"},{name:"反馈",desc:"Modal",count:"1 个组件 · 已完成",link:"/components/modal"}];function e(m){window.dispatchEvent(new CustomEvent("kk-toast",{detail:m}))}const o=x(null);let s=0;function r(m){if(s)return;const{clientX:f,clientY:_}=m;s=requestAnimationFrame(()=>{s=0;const S=o.value;if(!S)return;const R=S.getBoundingClientRect();S.style.setProperty("--kk-pointer-x",`${(f-R.left).toFixed(1)}px`),S.style.setProperty("--kk-pointer-y",`${(_-R.top).toFixed(1)}px`),S.style.setProperty("--kk-pointer-rx",(f/window.innerWidth-.5).toFixed(3)),S.style.setProperty("--kk-pointer-ry",(_/window.innerHeight-.5).toFixed(3))})}function p(){s=0;const m=o.value;m&&(m.style.setProperty("--kk-pointer-rx","0"),m.style.setProperty("--kk-pointer-ry","0"))}De(()=>{var m,f;(m=o.value)==null||m.addEventListener("pointermove",r,{passive:!0}),(f=o.value)==null||f.addEventListener("pointerleave",p)}),Ge(()=>{var m,f;s&&cancelAnimationFrame(s),(m=o.value)==null||m.removeEventListener("pointermove",r),(f=o.value)==null||f.removeEventListener("pointerleave",p)});async function d(){try{if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(Mn);else{const m=document.createElement("textarea");m.value=Mn,m.style.position="fixed",m.style.opacity="0",document.body.appendChild(m),m.select(),document.execCommand("copy"),document.body.removeChild(m)}e("已复制到剪贴板")}catch{e("复制失败，请手动复制")}}return(m,f)=>(i(),c("div",{ref_key:"homeRef",ref:o,class:"kk-home"},[k(ii),u("section",ri,[u("div",ui,[f[3]||(f[3]=u("div",{class:"kk-hero__badge"},[u("span",null,"✨"),K(" 全新 "),u("b",null,"多主题"),K(" 系统 · 4 套内置主题 ")],-1)),f[4]||(f[4]=u("h1",{class:"kk-hero__title"},[K("一套会"),u("span",null,"呼吸"),K("的"),u("br"),K("Vue 3 组件库")],-1)),f[5]||(f[5]=u("p",{class:"kk-hero__desc"}," KK UI 以「柔光几何」为设计语言，提供轻量、圆润、有呼吸感的组件体验。 完整 TypeScript 支持，主题一键切换。 ",-1)),u("div",ci,[u("a",{href:l(Vt)("/guide/getting-started")},[k(l(ve),{type:"primary",size:"large"},{icon:v(()=>[k(l(Ne),{name:"lucide:rocket",size:"16"})]),default:v(()=>[f[0]||(f[0]=K(" 快速开始 ",-1))]),_:1})],8,di),u("a",{href:l(Vt)("/components/")},[k(l(ve),{size:"large"},{default:v(()=>[...f[1]||(f[1]=[K("查看组件",-1)])]),_:1})],8,pi)]),u("div",{class:"kk-install"},[u("span",null,[f[2]||(f[2]=u("b",null,"$",-1)),K(" "+O(Mn))]),u("button",{class:"kk-install__copy",type:"button",onClick:d}," 复制 ")])]),u("div",vi,[k(si)])]),u("section",fi,[f[6]||(f[6]=u("div",{class:"kk-section__eyebrow"},"Features",-1)),f[7]||(f[7]=u("h2",{class:"kk-section__title"},"为什么选择 KK UI",-1)),f[8]||(f[8]=u("p",{class:"kk-section__desc"}," 在严谨、实用与轻盈之间，KK 用三层 Token 与柔光几何找到了自己的位置。 ",-1)),u("div",mi,[(i(),c(U,null,ge(a,_=>u("div",{key:_.title,class:"kk-feature"},[u("div",ki,[k(l(Ne),{name:_.icon,size:"20"},null,8,["name"])]),u("div",gi,O(_.title),1),u("div",bi,O(_.desc),1)])),64))])]),u("section",hi,[f[9]||(f[9]=u("div",{class:"kk-section__eyebrow"},"Roadmap",-1)),f[10]||(f[10]=u("h2",{class:"kk-section__title"},"组件总览",-1)),f[11]||(f[11]=u("p",{class:"kk-section__desc"}," 当前 v0.1.0 已完成基础组件层，覆盖通用、布局、数据展示、数据录入与反馈五类。 ",-1)),u("div",yi,[(i(),c(U,null,ge(t,_=>u("a",{key:_.name,class:"kk-comp-card",href:l(Vt)(_.link)},[u("div",xi,O(_.name),1),u("div",wi,O(_.desc),1),u("div",$i,O(_.count),1)],8,_i)),64))])])],512))}}),Ki=C({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(n){return(a,t)=>(i(),c("span",{class:h(["VPBadge",n.type])},[y(a.$slots,"default",{},()=>[K(O(n.text),1)])],2))}}),Ci={key:0,class:"VPBackdrop"},Ti=C({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(n){return(a,t)=>(i(),N(nn,{name:"fade"},{default:v(()=>[n.show?(i(),c("div",Ci)):$("",!0)]),_:1}))}}),zi=se(Ti,[["__scopeId","data-v-111f5ca9"]]),$e=Nn;function Pi(n,a){let t,e=!1;return()=>{t&&clearTimeout(t),e?t=setTimeout(n,a):(n(),(e=!0)&&setTimeout(()=>e=!1,a))}}function jn(n){return n.startsWith("/")?n:`/${n}`}function Qn(n){const{pathname:a,search:t,hash:e,protocol:o}=new URL(n,"http://a.com");if(tl(n)||n.startsWith("#")||!o.startsWith("http")||!nl(a))return n;const{site:s}=$e(),r=a.endsWith("/")||a.endsWith(".html")?n:n.replace(/(?:(^\.+)\/)?.*$/,`$1${a.replace(/(\.md)?$/,s.value.cleanUrls?"":".html")}${t}${e}`);return Vt(r)}function dn({correspondingLink:n=!1}={}){const{site:a,localeIndex:t,page:e,theme:o,hash:s}=$e(),r=g(()=>{var d,m;return{label:(d=a.value.locales[t.value])==null?void 0:d.label,link:((m=a.value.locales[t.value])==null?void 0:m.link)||(t.value==="root"?"/":`/${t.value}/`)}});return{localeLinks:g(()=>Object.entries(a.value.locales).flatMap(([d,m])=>r.value.label===m.label?[]:{text:m.label,link:Li(m.link||(d==="root"?"/":`/${d}/`),o.value.i18nRouting!==!1&&n,e.value.relativePath.slice(r.value.link.length-1),!a.value.cleanUrls)+s.value})),currentLang:r}}function Li(n,a,t,e){return a?n.replace(/\/$/,"")+jn(t.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,e?".html":"")):n}const Bi={class:"NotFound"},Mi={class:"code"},Vi={class:"title"},Oi={class:"quote"},Ii={class:"action"},Ai=["href","aria-label"],Ei=C({__name:"NotFound",setup(n){const{theme:a}=$e(),{currentLang:t}=dn();return(e,o)=>{var s,r,p,d,m;return i(),c("div",Bi,[u("p",Mi,O(((s=l(a).notFound)==null?void 0:s.code)??"404"),1),u("h1",Vi,O(((r=l(a).notFound)==null?void 0:r.title)??"PAGE NOT FOUND"),1),o[0]||(o[0]=u("div",{class:"divider"},null,-1)),u("blockquote",Oi,O(((p=l(a).notFound)==null?void 0:p.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),u("div",Ii,[u("a",{class:"link",href:l(Vt)(l(t).link),"aria-label":((d=l(a).notFound)==null?void 0:d.linkLabel)??"go to home"},O(((m=l(a).notFound)==null?void 0:m.linkText)??"Take me home"),9,Ai)])])}}}),ji=se(Ei,[["__scopeId","data-v-750bc60b"]]);function Fa(n,a){if(Array.isArray(n))return gn(n);if(n==null)return[];a=jn(a);const t=Object.keys(n).sort((o,s)=>s.split("/").length-o.split("/").length).find(o=>a.startsWith(jn(o))),e=t?n[t]:[];return Array.isArray(e)?gn(e):gn(e.items,e.base)}function Ri(n){const a=[];let t=0;for(const e in n){const o=n[e];if(o.items){t=a.push(o);continue}a[t]||a.push({items:[]}),a[t].items.push(o)}return a}function Fi(n){const a=[];function t(e){for(const o of e)o.text&&o.link&&a.push({text:o.text,link:o.link,docFooterText:o.docFooterText}),o.items&&t(o.items)}return t(n),a}function Rn(n,a){return Array.isArray(a)?a.some(t=>Rn(n,t)):St(n,a.link)?!0:a.items?Rn(n,a.items):!1}function gn(n,a){return[...n].map(t=>{const e={...t},o=e.base||a;return o&&e.link&&(e.link=o+e.link),e.items&&(e.items=gn(e.items,o)),e})}function ft(){const{frontmatter:n,page:a,theme:t}=$e(),e=On("(min-width: 960px)"),o=x(!1),s=g(()=>{const Z=t.value.sidebar,J=a.value.relativePath;return Z?Fa(Z,J):[]}),r=x(s.value);Pe(s,(Z,J)=>{JSON.stringify(Z)!==JSON.stringify(J)&&(r.value=s.value)});const p=g(()=>n.value.sidebar!==!1&&r.value.length>0&&n.value.layout!=="home"),d=g(()=>m?n.value.aside==null?t.value.aside==="left":n.value.aside==="left":!1),m=g(()=>n.value.layout==="home"?!1:n.value.aside!=null?!!n.value.aside:t.value.aside!==!1),f=g(()=>p.value&&e.value),_=g(()=>p.value?Ri(r.value):[]);function S(){o.value=!0}function R(){o.value=!1}function E(){o.value?R():S()}return{isOpen:o,sidebar:r,sidebarGroups:_,hasSidebar:p,hasAside:m,leftAside:d,isSidebarEnabled:f,open:S,close:R,toggle:E}}function Di(n,a){let t;an(()=>{t=n.value?document.activeElement:void 0}),De(()=>{window.addEventListener("keyup",e)}),Hn(()=>{window.removeEventListener("keyup",e)});function e(o){o.key==="Escape"&&n.value&&(a(),t==null||t.focus())}}function Ni(n){const{page:a,hash:t}=$e(),e=x(!1),o=g(()=>n.value.collapsed!=null),s=g(()=>!!n.value.link),r=x(!1),p=()=>{r.value=St(a.value.relativePath,n.value.link)};Pe([a,n,t],p),De(p);const d=g(()=>r.value?!0:n.value.items?Rn(a.value.relativePath,n.value.items):!1),m=g(()=>!!(n.value.items&&n.value.items.length));an(()=>{e.value=!!(o.value&&n.value.collapsed)}),Un(()=>{(r.value||d.value)&&(e.value=!1)});function f(){o.value&&(e.value=!e.value)}return{collapsed:e,collapsible:o,isLink:s,isActiveLink:r,hasActiveLink:d,hasChildren:m,toggle:f}}function Hi(){const{hasSidebar:n}=ft(),a=On("(min-width: 960px)"),t=On("(min-width: 1280px)");return{isAsideEnabled:g(()=>!t.value&&!a.value?!1:n.value?t.value:a.value)}}const Ui=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,Fn=[];function Da(n){return typeof n.outline=="object"&&!Array.isArray(n.outline)&&n.outline.label||n.outlineTitle||"On this page"}function ea(n){const a=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(t=>t.id&&t.hasChildNodes()).map(t=>{const e=Number(t.tagName[1]);return{element:t,title:Wi(t),link:"#"+t.id,level:e}});return qi(a,n)}function Wi(n){let a="";for(const t of n.childNodes)if(t.nodeType===1){if(Ui.test(t.className))continue;a+=t.textContent}else t.nodeType===3&&(a+=t.textContent);return a.trim()}function qi(n,a){if(a===!1)return[];const t=(typeof a=="object"&&!Array.isArray(a)?a.level:a)||2,[e,o]=typeof t=="number"?[t,t]:t==="deep"?[2,6]:t;return Xi(n,e,o)}function Gi(n,a){const{isAsideEnabled:t}=Hi(),e=Pi(s,100);let o=null;De(()=>{requestAnimationFrame(s),window.addEventListener("scroll",e)}),al(()=>{r(location.hash)}),Hn(()=>{window.removeEventListener("scroll",e)});function s(){if(!t.value)return;const p=window.scrollY,d=window.innerHeight,m=document.body.offsetHeight,f=Math.abs(p+d-m)<1,_=Fn.map(({element:R,link:E})=>({link:E,top:Yi(R)})).filter(({top:R})=>!Number.isNaN(R)).sort((R,E)=>R.top-E.top);if(!_.length){r(null);return}if(p<1){r(null);return}if(f){r(_[_.length-1].link);return}let S=null;for(const{link:R,top:E}of _){if(E>p+ll()+4)break;S=R}r(S)}function r(p){o&&o.classList.remove("active"),p==null?o=null:o=n.value.querySelector(`a[href="${decodeURIComponent(p)}"]`);const d=o;d?(d.classList.add("active"),a.value.style.top=d.offsetTop+39+"px",a.value.style.opacity="1"):(a.value.style.top="33px",a.value.style.opacity="0")}}function Yi(n){let a=0;for(;n!==document.body;){if(n===null)return NaN;a+=n.offsetTop,n=n.offsetParent}return a}function Xi(n,a,t){Fn.length=0;const e=[],o=[];return n.forEach(s=>{const r={...s,children:[]};let p=o[o.length-1];for(;p&&p.level>=r.level;)o.pop(),p=o[o.length-1];if(r.element.classList.contains("ignore-header")||p&&"shouldIgnore"in p){o.push({level:r.level,shouldIgnore:!0});return}r.level>t||r.level<a||(Fn.push({element:r.element,link:r.link}),p?p.children.push(r):e.push(r),o.push(r))}),e}const Zi=["href","title"],Ji=C({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(n){function a({target:t}){const e=t.href.split("#")[1],o=document.getElementById(decodeURIComponent(e));o==null||o.focus({preventScroll:!0})}return(t,e)=>{const o=Kt("VPDocOutlineItem",!0);return i(),c("ul",{class:h(["VPDocOutlineItem",n.root?"root":"nested"])},[(i(!0),c(U,null,ge(n.headers,({children:s,link:r,title:p})=>(i(),c("li",null,[u("a",{class:"outline-link",href:r,onClick:a,title:p},O(p),9,Zi),s!=null&&s.length?(i(),N(o,{key:0,headers:s},null,8,["headers"])):$("",!0)]))),256))],2)}}}),Na=se(Ji,[["__scopeId","data-v-37752517"]]),Qi={class:"content"},er={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},tr=C({__name:"VPDocAsideOutline",setup(n){const{frontmatter:a,theme:t}=$e(),e=Dn([]);_n(()=>{e.value=ea(a.value.outline??t.value.outline)});const o=x(),s=x();return Gi(o,s),(r,p)=>(i(),c("nav",{"aria-labelledby":"doc-outline-aria-label",class:h(["VPDocAsideOutline",{"has-outline":e.value.length>0}]),ref_key:"container",ref:o},[u("div",Qi,[u("div",{class:"outline-marker",ref_key:"marker",ref:s},null,512),u("div",er,O(l(Da)(l(t))),1),k(Na,{headers:e.value,root:!0},null,8,["headers"])])],2))}}),nr=se(tr,[["__scopeId","data-v-fd1219a0"]]),ar={class:"VPDocAsideCarbonAds"},lr=C({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(n){const a=()=>null;return(t,e)=>(i(),c("div",ar,[k(l(a),{"carbon-ads":n.carbonAds},null,8,["carbon-ads"])]))}}),or={class:"VPDocAside"},sr=C({__name:"VPDocAside",setup(n){const{theme:a}=$e();return(t,e)=>(i(),c("div",or,[y(t.$slots,"aside-top",{},void 0,!0),y(t.$slots,"aside-outline-before",{},void 0,!0),k(nr),y(t.$slots,"aside-outline-after",{},void 0,!0),e[0]||(e[0]=u("div",{class:"spacer"},null,-1)),y(t.$slots,"aside-ads-before",{},void 0,!0),l(a).carbonAds?(i(),N(lr,{key:0,"carbon-ads":l(a).carbonAds},null,8,["carbon-ads"])):$("",!0),y(t.$slots,"aside-ads-after",{},void 0,!0),y(t.$slots,"aside-bottom",{},void 0,!0)]))}}),ir=se(sr,[["__scopeId","data-v-1797d636"]]);function rr(){const{theme:n,page:a}=$e();return g(()=>{const{text:t="Edit this page",pattern:e=""}=n.value.editLink||{};let o;return typeof e=="function"?o=e(a.value):o=e.replace(/:path/g,a.value.filePath),{url:o,text:t}})}function ur(){const{page:n,theme:a,frontmatter:t}=$e();return g(()=>{var m,f,_,S,R,E,Z,J;const e=Fa(a.value.sidebar,n.value.relativePath),o=Fi(e),s=cr(o,L=>L.link.replace(/[?#].*$/,"")),r=s.findIndex(L=>St(n.value.relativePath,L.link)),p=((m=a.value.docFooter)==null?void 0:m.prev)===!1&&!t.value.prev||t.value.prev===!1,d=((f=a.value.docFooter)==null?void 0:f.next)===!1&&!t.value.next||t.value.next===!1;return{prev:p?void 0:{text:(typeof t.value.prev=="string"?t.value.prev:typeof t.value.prev=="object"?t.value.prev.text:void 0)??((_=s[r-1])==null?void 0:_.docFooterText)??((S=s[r-1])==null?void 0:S.text),link:(typeof t.value.prev=="object"?t.value.prev.link:void 0)??((R=s[r-1])==null?void 0:R.link)},next:d?void 0:{text:(typeof t.value.next=="string"?t.value.next:typeof t.value.next=="object"?t.value.next.text:void 0)??((E=s[r+1])==null?void 0:E.docFooterText)??((Z=s[r+1])==null?void 0:Z.text),link:(typeof t.value.next=="object"?t.value.next.link:void 0)??((J=s[r+1])==null?void 0:J.link)}}})}function cr(n,a){const t=new Set;return n.filter(e=>{const o=a(e);return t.has(o)?!1:t.add(o)})}const rt=C({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(n){const a=n,t=g(()=>a.tag??(a.href?"a":"span")),e=g(()=>a.href&&wa.test(a.href)||a.target==="_blank");return(o,s)=>(i(),N(et(t.value),{class:h(["VPLink",{link:n.href,"vp-external-link-icon":e.value,"no-icon":n.noIcon}]),href:n.href?l(Qn)(n.href):void 0,target:n.target??(e.value?"_blank":void 0),rel:n.rel??(e.value?"noreferrer":void 0)},{default:v(()=>[y(o.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),dr={class:"VPLastUpdated"},pr=["datetime"],vr=C({__name:"VPDocFooterLastUpdated",setup(n){const{theme:a,page:t,lang:e}=$e(),o=g(()=>new Date(t.value.lastUpdated)),s=g(()=>o.value.toISOString()),r=x("");return De(()=>{an(()=>{var p,d,m;r.value=new Intl.DateTimeFormat((d=(p=a.value.lastUpdated)==null?void 0:p.formatOptions)!=null&&d.forceLocale?e.value:void 0,((m=a.value.lastUpdated)==null?void 0:m.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(o.value)})}),(p,d)=>{var m;return i(),c("p",dr,[K(O(((m=l(a).lastUpdated)==null?void 0:m.text)||l(a).lastUpdatedText||"Last updated")+": ",1),u("time",{datetime:s.value},O(r.value),9,pr)])}}}),fr=se(vr,[["__scopeId","data-v-9e359b51"]]),mr={key:0,class:"VPDocFooter"},kr={key:0,class:"edit-info"},gr={key:0,class:"edit-link"},br={key:1,class:"last-updated"},hr={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},yr={class:"pager"},_r=["innerHTML"],xr=["innerHTML"],wr={class:"pager"},$r=["innerHTML"],Sr=["innerHTML"],Kr=C({__name:"VPDocFooter",setup(n){const{theme:a,page:t,frontmatter:e}=$e(),o=rr(),s=ur(),r=g(()=>a.value.editLink&&e.value.editLink!==!1),p=g(()=>t.value.lastUpdated),d=g(()=>r.value||p.value||s.value.prev||s.value.next);return(m,f)=>{var _,S,R,E;return d.value?(i(),c("footer",mr,[y(m.$slots,"doc-footer-before",{},void 0,!0),r.value||p.value?(i(),c("div",kr,[r.value?(i(),c("div",gr,[k(rt,{class:"edit-link-button",href:l(o).url,"no-icon":!0},{default:v(()=>[f[0]||(f[0]=u("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),K(" "+O(l(o).text),1)]),_:1},8,["href"])])):$("",!0),p.value?(i(),c("div",br,[k(fr)])):$("",!0)])):$("",!0),(_=l(s).prev)!=null&&_.link||(S=l(s).next)!=null&&S.link?(i(),c("nav",hr,[f[1]||(f[1]=u("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),u("div",yr,[(R=l(s).prev)!=null&&R.link?(i(),N(rt,{key:0,class:"pager-link prev",href:l(s).prev.link},{default:v(()=>{var Z;return[u("span",{class:"desc",innerHTML:((Z=l(a).docFooter)==null?void 0:Z.prev)||"Previous page"},null,8,_r),u("span",{class:"title",innerHTML:l(s).prev.text},null,8,xr)]}),_:1},8,["href"])):$("",!0)]),u("div",wr,[(E=l(s).next)!=null&&E.link?(i(),N(rt,{key:0,class:"pager-link next",href:l(s).next.link},{default:v(()=>{var Z;return[u("span",{class:"desc",innerHTML:((Z=l(a).docFooter)==null?void 0:Z.next)||"Next page"},null,8,$r),u("span",{class:"title",innerHTML:l(s).next.text},null,8,Sr)]}),_:1},8,["href"])):$("",!0)])])):$("",!0)])):$("",!0)}}}),Cr=se(Kr,[["__scopeId","data-v-8156e15f"]]),Tr={class:"container"},zr={class:"aside-container"},Pr={class:"aside-content"},Lr={class:"content"},Br={class:"content-container"},Mr={class:"main"},Vr=C({__name:"VPDoc",setup(n){const{theme:a}=$e(),t=ln(),{hasSidebar:e,hasAside:o,leftAside:s}=ft(),r=g(()=>t.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(p,d)=>{const m=Kt("Content");return i(),c("div",{class:h(["VPDoc",{"has-sidebar":l(e),"has-aside":l(o)}])},[y(p.$slots,"doc-top",{},void 0,!0),u("div",Tr,[l(o)?(i(),c("div",{key:0,class:h(["aside",{"left-aside":l(s)}])},[d[0]||(d[0]=u("div",{class:"aside-curtain"},null,-1)),u("div",zr,[u("div",Pr,[k(ir,null,{"aside-top":v(()=>[y(p.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":v(()=>[y(p.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":v(()=>[y(p.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":v(()=>[y(p.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":v(()=>[y(p.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":v(()=>[y(p.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):$("",!0),u("div",Lr,[u("div",Br,[y(p.$slots,"doc-before",{},void 0,!0),u("main",Mr,[k(m,{class:h(["vp-doc",[r.value,l(a).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),k(Cr,null,{"doc-footer-before":v(()=>[y(p.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),y(p.$slots,"doc-after",{},void 0,!0)])])]),y(p.$slots,"doc-bottom",{},void 0,!0)],2)}}}),Or=se(Vr,[["__scopeId","data-v-5815b2ee"]]),Ir=C({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(n){const a=n,t=g(()=>a.href&&wa.test(a.href)),e=g(()=>a.tag||(a.href?"a":"button"));return(o,s)=>(i(),N(et(e.value),{class:h(["VPButton",[n.size,n.theme]]),href:n.href?l(Qn)(n.href):void 0,target:a.target??(t.value?"_blank":void 0),rel:a.rel??(t.value?"noreferrer":void 0)},{default:v(()=>[K(O(n.text),1)]),_:1},8,["class","href","target","rel"]))}}),Ar=se(Ir,[["__scopeId","data-v-083125f9"]]),Er=["src","alt"],jr=C({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(n){return(a,t)=>{const e=Kt("VPImage",!0);return n.image?(i(),c(U,{key:0},[typeof n.image=="string"||"src"in n.image?(i(),c("img",Le({key:0,class:"VPImage"},typeof n.image=="string"?a.$attrs:{...n.image,...a.$attrs},{src:l(Vt)(typeof n.image=="string"?n.image:n.image.src),alt:n.alt??(typeof n.image=="string"?"":n.image.alt||"")}),null,16,Er)):(i(),c(U,{key:1},[k(e,Le({class:"dark",image:n.image.dark,alt:n.image.alt},a.$attrs),null,16,["image","alt"]),k(e,Le({class:"light",image:n.image.light,alt:n.image.alt},a.$attrs),null,16,["image","alt"])],64))],64)):$("",!0)}}}),hn=se(jr,[["__scopeId","data-v-9bf5b19f"]]),Rr={class:"container"},Fr={class:"main"},Dr={class:"heading"},Nr=["innerHTML"],Hr=["innerHTML"],Ur=["innerHTML"],Wr={key:0,class:"actions"},qr={key:0,class:"image"},Gr={class:"image-container"},Yr=C({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(n){const a=qe("hero-image-slot-exists");return(t,e)=>(i(),c("div",{class:h(["VPHero",{"has-image":n.image||l(a)}])},[u("div",Rr,[u("div",Fr,[y(t.$slots,"home-hero-info-before",{},void 0,!0),y(t.$slots,"home-hero-info",{},()=>[u("h1",Dr,[n.name?(i(),c("span",{key:0,innerHTML:n.name,class:"name clip"},null,8,Nr)):$("",!0),n.text?(i(),c("span",{key:1,innerHTML:n.text,class:"text"},null,8,Hr)):$("",!0)]),n.tagline?(i(),c("p",{key:0,innerHTML:n.tagline,class:"tagline"},null,8,Ur)):$("",!0)],!0),y(t.$slots,"home-hero-info-after",{},void 0,!0),n.actions?(i(),c("div",Wr,[(i(!0),c(U,null,ge(n.actions,o=>(i(),c("div",{key:o.link,class:"action"},[k(Ar,{tag:"a",size:"medium",theme:o.theme,text:o.text,href:o.link,target:o.target,rel:o.rel},null,8,["theme","text","href","target","rel"])]))),128))])):$("",!0),y(t.$slots,"home-hero-actions-after",{},void 0,!0)]),n.image||l(a)?(i(),c("div",qr,[u("div",Gr,[e[0]||(e[0]=u("div",{class:"image-bg"},null,-1)),y(t.$slots,"home-hero-image",{},()=>[n.image?(i(),N(hn,{key:0,class:"image-src",image:n.image},null,8,["image"])):$("",!0)],!0)])])):$("",!0)])],2))}}),Xr=se(Yr,[["__scopeId","data-v-e51af47b"]]),Zr=C({__name:"VPHomeHero",setup(n){const{frontmatter:a}=$e();return(t,e)=>l(a).hero?(i(),N(Xr,{key:0,class:"VPHomeHero",name:l(a).hero.name,text:l(a).hero.text,tagline:l(a).hero.tagline,image:l(a).hero.image,actions:l(a).hero.actions},{"home-hero-info-before":v(()=>[y(t.$slots,"home-hero-info-before")]),"home-hero-info":v(()=>[y(t.$slots,"home-hero-info")]),"home-hero-info-after":v(()=>[y(t.$slots,"home-hero-info-after")]),"home-hero-actions-after":v(()=>[y(t.$slots,"home-hero-actions-after")]),"home-hero-image":v(()=>[y(t.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):$("",!0)}}),Jr={class:"box"},Qr={key:0,class:"icon"},eu=["innerHTML"],tu=["innerHTML"],nu=["innerHTML"],au={key:4,class:"link-text"},lu={class:"link-text-value"},ou=C({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(n){return(a,t)=>(i(),N(rt,{class:"VPFeature",href:n.link,rel:n.rel,target:n.target,"no-icon":!0,tag:n.link?"a":"div"},{default:v(()=>[u("article",Jr,[typeof n.icon=="object"&&n.icon.wrap?(i(),c("div",Qr,[k(hn,{image:n.icon,alt:n.icon.alt,height:n.icon.height||48,width:n.icon.width||48},null,8,["image","alt","height","width"])])):typeof n.icon=="object"?(i(),N(hn,{key:1,image:n.icon,alt:n.icon.alt,height:n.icon.height||48,width:n.icon.width||48},null,8,["image","alt","height","width"])):n.icon?(i(),c("div",{key:2,class:"icon",innerHTML:n.icon},null,8,eu)):$("",!0),u("h2",{class:"title",innerHTML:n.title},null,8,tu),n.details?(i(),c("p",{key:3,class:"details",innerHTML:n.details},null,8,nu)):$("",!0),n.linkText?(i(),c("div",au,[u("p",lu,[K(O(n.linkText)+" ",1),t[0]||(t[0]=u("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):$("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),su=se(ou,[["__scopeId","data-v-57041261"]]),iu={key:0,class:"VPFeatures"},ru={class:"container"},uu={class:"items"},cu=C({__name:"VPFeatures",props:{features:{}},setup(n){const a=n,t=g(()=>{const e=a.features.length;if(e){if(e===2)return"grid-2";if(e===3)return"grid-3";if(e%3===0)return"grid-6";if(e>3)return"grid-4"}else return});return(e,o)=>n.features?(i(),c("div",iu,[u("div",ru,[u("div",uu,[(i(!0),c(U,null,ge(n.features,s=>(i(),c("div",{key:s.title,class:h(["item",[t.value]])},[k(su,{icon:s.icon,title:s.title,details:s.details,link:s.link,"link-text":s.linkText,rel:s.rel,target:s.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):$("",!0)}}),du=se(cu,[["__scopeId","data-v-6bcfff71"]]),pu=C({__name:"VPHomeFeatures",setup(n){const{frontmatter:a}=$e();return(t,e)=>l(a).features?(i(),N(du,{key:0,class:"VPHomeFeatures",features:l(a).features},null,8,["features"])):$("",!0)}}),vu=C({__name:"VPHomeContent",setup(n){const{width:a}=ol({initialWidth:0,includeScrollbar:!1});return(t,e)=>(i(),c("div",{class:"vp-doc container",style:je(l(a)?{"--vp-offset":`calc(50% - ${l(a)/2}px)`}:{})},[y(t.$slots,"default",{},void 0,!0)],4))}}),fu=se(vu,[["__scopeId","data-v-d88f8b0f"]]),mu=C({__name:"VPHome",setup(n){const{frontmatter:a,theme:t}=$e();return(e,o)=>{const s=Kt("Content");return i(),c("div",{class:h(["VPHome",{"external-link-icon-enabled":l(t).externalLinkIcon}])},[y(e.$slots,"home-hero-before",{},void 0,!0),k(Zr,null,{"home-hero-info-before":v(()=>[y(e.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":v(()=>[y(e.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":v(()=>[y(e.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":v(()=>[y(e.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":v(()=>[y(e.$slots,"home-hero-image",{},void 0,!0)]),_:3}),y(e.$slots,"home-hero-after",{},void 0,!0),y(e.$slots,"home-features-before",{},void 0,!0),k(pu),y(e.$slots,"home-features-after",{},void 0,!0),l(a).markdownStyles!==!1?(i(),N(fu,{key:0},{default:v(()=>[k(s)]),_:1})):(i(),N(s,{key:1}))],2)}}}),ku=se(mu,[["__scopeId","data-v-a8086b4d"]]),gu={},bu={class:"VPPage"};function hu(n,a){const t=Kt("Content");return i(),c("div",bu,[y(n.$slots,"page-top"),k(t),y(n.$slots,"page-bottom")])}const yu=se(gu,[["render",hu]]),_u=C({__name:"VPContent",setup(n){const{page:a,frontmatter:t}=$e(),{hasSidebar:e}=ft();return(o,s)=>(i(),c("div",{class:h(["VPContent",{"has-sidebar":l(e),"is-home":l(t).layout==="home"}]),id:"VPContent"},[l(a).isNotFound?y(o.$slots,"not-found",{},()=>[k(ji)],!0,0):l(t).layout==="page"?(i(),N(yu,{key:1},{"page-top":v(()=>[y(o.$slots,"page-top",{},void 0,!0)]),"page-bottom":v(()=>[y(o.$slots,"page-bottom",{},void 0,!0)]),_:3})):l(t).layout==="home"?(i(),N(ku,{key:2},{"home-hero-before":v(()=>[y(o.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":v(()=>[y(o.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":v(()=>[y(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":v(()=>[y(o.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":v(()=>[y(o.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":v(()=>[y(o.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":v(()=>[y(o.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":v(()=>[y(o.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":v(()=>[y(o.$slots,"home-features-after",{},void 0,!0)]),_:3})):l(t).layout&&l(t).layout!=="doc"?(i(),N(et(l(t).layout),{key:3})):(i(),N(Or,{key:4},{"doc-top":v(()=>[y(o.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":v(()=>[y(o.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":v(()=>[y(o.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":v(()=>[y(o.$slots,"doc-before",{},void 0,!0)]),"doc-after":v(()=>[y(o.$slots,"doc-after",{},void 0,!0)]),"aside-top":v(()=>[y(o.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":v(()=>[y(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":v(()=>[y(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":v(()=>[y(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":v(()=>[y(o.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":v(()=>[y(o.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),xu=se(_u,[["__scopeId","data-v-a97fbbac"]]),wu={class:"container"},$u=["innerHTML"],Su=["innerHTML"],Ku=C({__name:"VPFooter",setup(n){const{theme:a,frontmatter:t}=$e(),{hasSidebar:e}=ft();return(o,s)=>l(a).footer&&l(t).footer!==!1?(i(),c("footer",{key:0,class:h(["VPFooter",{"has-sidebar":l(e)}])},[u("div",wu,[l(a).footer.message?(i(),c("p",{key:0,class:"message",innerHTML:l(a).footer.message},null,8,$u)):$("",!0),l(a).footer.copyright?(i(),c("p",{key:1,class:"copyright",innerHTML:l(a).footer.copyright},null,8,Su)):$("",!0)])],2)):$("",!0)}}),Cu=se(Ku,[["__scopeId","data-v-a3cd0c53"]]);function Tu(){const{theme:n,frontmatter:a}=$e(),t=Dn([]),e=g(()=>t.value.length>0);return _n(()=>{t.value=ea(a.value.outline??n.value.outline)}),{headers:t,hasLocalNav:e}}const zu={class:"menu-text"},Pu={class:"header"},Lu={class:"outline"},Bu=C({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(n){const a=n,{theme:t}=$e(),e=x(!1),o=x(0),s=x(),r=x();function p(_){var S;(S=s.value)!=null&&S.contains(_.target)||(e.value=!1)}Pe(e,_=>{if(_){document.addEventListener("click",p);return}document.removeEventListener("click",p)}),sl("Escape",()=>{e.value=!1}),_n(()=>{e.value=!1});function d(){e.value=!e.value,o.value=window.innerHeight+Math.min(window.scrollY-a.navHeight,0)}function m(_){_.target.classList.contains("outline-link")&&(r.value&&(r.value.style.transition="none"),Ze(()=>{e.value=!1}))}function f(){e.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(_,S)=>(i(),c("div",{class:"VPLocalNavOutlineDropdown",style:je({"--vp-vh":o.value+"px"}),ref_key:"main",ref:s},[n.headers.length>0?(i(),c("button",{key:0,onClick:d,class:h({open:e.value})},[u("span",zu,O(l(Da)(l(t))),1),S[0]||(S[0]=u("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(i(),c("button",{key:1,onClick:f},O(l(t).returnToTopLabel||"Return to top"),1)),k(nn,{name:"flyout"},{default:v(()=>[e.value?(i(),c("div",{key:0,ref_key:"items",ref:r,class:"items",onClick:m},[u("div",Pu,[u("a",{class:"top-link",href:"#",onClick:f},O(l(t).returnToTopLabel||"Return to top"),1)]),u("div",Lu,[k(Na,{headers:n.headers},null,8,["headers"])])],512)):$("",!0)]),_:1})],4))}}),Mu=se(Bu,[["__scopeId","data-v-ebfb8c58"]]),Vu={class:"container"},Ou=["aria-expanded"],Iu={class:"menu-text"},Au=C({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(n){const{theme:a,frontmatter:t}=$e(),{hasSidebar:e}=ft(),{headers:o}=Tu(),{y:s}=$a(),r=x(0);De(()=>{r.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),_n(()=>{o.value=ea(t.value.outline??a.value.outline)});const p=g(()=>o.value.length===0),d=g(()=>p.value&&!e.value),m=g(()=>({VPLocalNav:!0,"has-sidebar":e.value,empty:p.value,fixed:d.value}));return(f,_)=>l(t).layout!=="home"&&(!d.value||l(s)>=r.value)?(i(),c("div",{key:0,class:h(m.value)},[u("div",Vu,[l(e)?(i(),c("button",{key:0,class:"menu","aria-expanded":n.open,"aria-controls":"VPSidebarNav",onClick:_[0]||(_[0]=S=>f.$emit("open-menu"))},[_[1]||(_[1]=u("span",{class:"vpi-align-left menu-icon"},null,-1)),u("span",Iu,O(l(a).sidebarMenuLabel||"Menu"),1)],8,Ou)):$("",!0),k(Mu,{headers:l(o),navHeight:r.value},null,8,["headers","navHeight"])])],2)):$("",!0)}}),Eu=se(Au,[["__scopeId","data-v-ae0c9d38"]]);function ju(){const n=x(!1);function a(){n.value=!0,window.addEventListener("resize",o)}function t(){n.value=!1,window.removeEventListener("resize",o)}function e(){n.value?t():a()}function o(){window.outerWidth>=768&&t()}const s=ln();return Pe(()=>s.path,t),{isScreenOpen:n,openScreen:a,closeScreen:t,toggleScreen:e}}const Ru={},Fu={class:"VPSwitch",type:"button",role:"switch"},Du={class:"check"},Nu={key:0,class:"icon"};function Hu(n,a){return i(),c("button",Fu,[u("span",Du,[n.$slots.default?(i(),c("span",Nu,[y(n.$slots,"default",{},void 0,!0)])):$("",!0)])])}const Uu=se(Ru,[["render",Hu],["__scopeId","data-v-7f3956d8"]]),Wu=C({__name:"VPSwitchAppearance",setup(n){const{isDark:a,theme:t}=$e(),e=qe("toggle-appearance",()=>{a.value=!a.value}),o=x("");return Un(()=>{o.value=a.value?t.value.lightModeSwitchTitle||"Switch to light theme":t.value.darkModeSwitchTitle||"Switch to dark theme"}),(s,r)=>(i(),N(Uu,{title:o.value,class:"VPSwitchAppearance","aria-checked":l(a),onClick:l(e)},{default:v(()=>[...r[0]||(r[0]=[u("span",{class:"vpi-sun sun"},null,-1),u("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),ta=se(Wu,[["__scopeId","data-v-17dd2ffd"]]),qu={key:0,class:"VPNavBarAppearance"},Gu=C({__name:"VPNavBarAppearance",setup(n){const{site:a}=$e();return(t,e)=>l(a).appearance&&l(a).appearance!=="force-dark"&&l(a).appearance!=="force-auto"?(i(),c("div",qu,[k(ta)])):$("",!0)}}),Yu=se(Gu,[["__scopeId","data-v-12d05aae"]]),na=x();let Ha=!1,Vn=0;function Xu(n){const a=x(!1);if(xn){!Ha&&Zu(),Vn++;const t=Pe(na,e=>{var o,s,r;e===n.el.value||(o=n.el.value)!=null&&o.contains(e)?(a.value=!0,(s=n.onFocus)==null||s.call(n)):(a.value=!1,(r=n.onBlur)==null||r.call(n))});Hn(()=>{t(),Vn--,Vn||Ju()})}return il(a)}function Zu(){document.addEventListener("focusin",Ua),Ha=!0,na.value=document.activeElement}function Ju(){document.removeEventListener("focusin",Ua)}function Ua(){na.value=document.activeElement}const Qu={class:"VPMenuLink"},ec=["innerHTML"],tc=C({__name:"VPMenuLink",props:{item:{}},setup(n){const{page:a}=$e();return(t,e)=>(i(),c("div",Qu,[k(rt,{class:h({active:l(St)(l(a).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon},{default:v(()=>[u("span",{innerHTML:n.item.text},null,8,ec)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),zn=se(tc,[["__scopeId","data-v-f2eed1d3"]]),nc={class:"VPMenuGroup"},ac={key:0,class:"title"},lc=C({__name:"VPMenuGroup",props:{text:{},items:{}},setup(n){return(a,t)=>(i(),c("div",nc,[n.text?(i(),c("p",ac,O(n.text),1)):$("",!0),(i(!0),c(U,null,ge(n.items,e=>(i(),c(U,null,["link"in e?(i(),N(zn,{key:0,item:e},null,8,["item"])):$("",!0)],64))),256))]))}}),oc=se(lc,[["__scopeId","data-v-de6820df"]]),sc={class:"VPMenu"},ic={key:0,class:"items"},rc=C({__name:"VPMenu",props:{items:{}},setup(n){return(a,t)=>(i(),c("div",sc,[n.items?(i(),c("div",ic,[(i(!0),c(U,null,ge(n.items,e=>(i(),c(U,{key:JSON.stringify(e)},["link"in e?(i(),N(zn,{key:0,item:e},null,8,["item"])):"component"in e?(i(),N(et(e.component),Le({key:1,ref_for:!0},e.props),null,16)):(i(),N(oc,{key:2,text:e.text,items:e.items},null,8,["text","items"]))],64))),128))])):$("",!0),y(a.$slots,"default",{},void 0,!0)]))}}),uc=se(rc,[["__scopeId","data-v-e22e2280"]]),cc=["aria-expanded","aria-label"],dc={key:0,class:"text"},pc=["innerHTML"],vc={key:1,class:"vpi-more-horizontal icon"},fc={class:"menu"},mc=C({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(n){const a=x(!1),t=x();Xu({el:t,onBlur:e});function e(){a.value=!1}return(o,s)=>(i(),c("div",{class:"VPFlyout",ref_key:"el",ref:t,onMouseenter:s[1]||(s[1]=r=>a.value=!0),onMouseleave:s[2]||(s[2]=r=>a.value=!1)},[u("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":a.value,"aria-label":n.label,onClick:s[0]||(s[0]=r=>a.value=!a.value)},[n.button||n.icon?(i(),c("span",dc,[n.icon?(i(),c("span",{key:0,class:h([n.icon,"option-icon"])},null,2)):$("",!0),n.button?(i(),c("span",{key:1,innerHTML:n.button},null,8,pc)):$("",!0),s[3]||(s[3]=u("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(i(),c("span",vc))],8,cc),u("div",fc,[k(uc,{items:n.items},{default:v(()=>[y(o.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),aa=se(mc,[["__scopeId","data-v-b2dccbb3"]]),kc=["href","aria-label","innerHTML"],gc=C({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(n){const a=n,t=x();De(async()=>{var s;await Ze();const o=(s=t.value)==null?void 0:s.children[0];o instanceof HTMLElement&&o.className.startsWith("vpi-social-")&&(getComputedStyle(o).maskImage||getComputedStyle(o).webkitMaskImage)==="none"&&o.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${a.icon}.svg')`)});const e=g(()=>typeof a.icon=="object"?a.icon.svg:`<span class="vpi-social-${a.icon}"></span>`);return(o,s)=>(i(),c("a",{ref_key:"el",ref:t,class:"VPSocialLink no-icon",href:n.link,"aria-label":n.ariaLabel??(typeof n.icon=="string"?n.icon:""),target:"_blank",rel:"noopener",innerHTML:e.value},null,8,kc))}}),bc=se(gc,[["__scopeId","data-v-cc19a372"]]),hc={class:"VPSocialLinks"},yc=C({__name:"VPSocialLinks",props:{links:{}},setup(n){return(a,t)=>(i(),c("div",hc,[(i(!0),c(U,null,ge(n.links,({link:e,icon:o,ariaLabel:s})=>(i(),N(bc,{key:e,icon:o,link:e,ariaLabel:s},null,8,["icon","link","ariaLabel"]))),128))]))}}),la=se(yc,[["__scopeId","data-v-29066ede"]]),_c={key:0,class:"group translations"},xc={class:"trans-title"},wc={key:1,class:"group"},$c={class:"item appearance"},Sc={class:"label"},Kc={class:"appearance-action"},Cc={key:2,class:"group"},Tc={class:"item social-links"},zc=C({__name:"VPNavBarExtra",setup(n){const{site:a,theme:t}=$e(),{localeLinks:e,currentLang:o}=dn({correspondingLink:!0}),s=g(()=>e.value.length&&o.value.label||a.value.appearance||t.value.socialLinks);return(r,p)=>s.value?(i(),N(aa,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:v(()=>[l(e).length&&l(o).label?(i(),c("div",_c,[u("p",xc,O(l(o).label),1),(i(!0),c(U,null,ge(l(e),d=>(i(),N(zn,{key:d.link,item:d},null,8,["item"]))),128))])):$("",!0),l(a).appearance&&l(a).appearance!=="force-dark"&&l(a).appearance!=="force-auto"?(i(),c("div",wc,[u("div",$c,[u("p",Sc,O(l(t).darkModeSwitchLabel||"Appearance"),1),u("div",Kc,[k(ta)])])])):$("",!0),l(t).socialLinks?(i(),c("div",Cc,[u("div",Tc,[k(la,{class:"social-links-list",links:l(t).socialLinks},null,8,["links"])])])):$("",!0)]),_:1})):$("",!0)}}),Pc=se(zc,[["__scopeId","data-v-35f90f0c"]]),Lc=["aria-expanded"],Bc=C({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(n){return(a,t)=>(i(),c("button",{type:"button",class:h(["VPNavBarHamburger",{active:n.active}]),"aria-label":"mobile navigation","aria-expanded":n.active,"aria-controls":"VPNavScreen",onClick:t[0]||(t[0]=e=>a.$emit("click"))},[...t[1]||(t[1]=[u("span",{class:"container"},[u("span",{class:"top"}),u("span",{class:"middle"}),u("span",{class:"bottom"})],-1)])],10,Lc))}}),Mc=se(Bc,[["__scopeId","data-v-ca4be9c3"]]),Vc=["innerHTML"],Oc=C({__name:"VPNavBarMenuLink",props:{item:{}},setup(n){const{page:a}=$e();return(t,e)=>(i(),N(rt,{class:h({VPNavBarMenuLink:!0,active:l(St)(l(a).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon,tabindex:"0"},{default:v(()=>[u("span",{innerHTML:n.item.text},null,8,Vc)]),_:1},8,["class","href","target","rel","no-icon"]))}}),Ic=se(Oc,[["__scopeId","data-v-658079ee"]]),Ac=C({__name:"VPNavBarMenuGroup",props:{item:{}},setup(n){const a=n,{page:t}=$e(),e=s=>"component"in s?!1:"link"in s?St(t.value.relativePath,s.link,!!a.item.activeMatch):s.items.some(e),o=g(()=>e(a.item));return(s,r)=>(i(),N(aa,{class:h({VPNavBarMenuGroup:!0,active:l(St)(l(t).relativePath,n.item.activeMatch,!!n.item.activeMatch)||o.value}),button:n.item.text,items:n.item.items},null,8,["class","button","items"]))}}),Ec={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},jc=C({__name:"VPNavBarMenu",setup(n){const{theme:a}=$e();return(t,e)=>l(a).nav?(i(),c("nav",Ec,[e[0]||(e[0]=u("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(i(!0),c(U,null,ge(l(a).nav,o=>(i(),c(U,{key:JSON.stringify(o)},["link"in o?(i(),N(Ic,{key:0,item:o},null,8,["item"])):"component"in o?(i(),N(et(o.component),Le({key:1,ref_for:!0},o.props),null,16)):(i(),N(Ac,{key:2,item:o},null,8,["item"]))],64))),128))])):$("",!0)}}),Rc=se(jc,[["__scopeId","data-v-3ac9d41e"]]);function Fc(n){const{localeIndex:a,theme:t}=$e();function e(o){var E,Z,J;const s=o.split("."),r=(E=t.value.search)==null?void 0:E.options,p=r&&typeof r=="object",d=p&&((J=(Z=r.locales)==null?void 0:Z[a.value])==null?void 0:J.translations)||null,m=p&&r.translations||null;let f=d,_=m,S=n;const R=s.pop();for(const L of s){let I=null;const M=S==null?void 0:S[L];M&&(I=S=M);const V=_==null?void 0:_[L];V&&(I=_=V);const B=f==null?void 0:f[L];B&&(I=f=B),M||(S=I),V||(_=I),B||(f=I)}return(f==null?void 0:f[R])??(_==null?void 0:_[R])??(S==null?void 0:S[R])??""}return e}const Dc=["aria-label"],Nc={class:"DocSearch-Button-Container"},Hc={class:"DocSearch-Button-Placeholder"},_a=C({__name:"VPNavBarSearchButton",setup(n){const t=Fc({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(e,o)=>(i(),c("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":l(t)("button.buttonAriaLabel")},[u("span",Nc,[o[0]||(o[0]=u("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),u("span",Hc,O(l(t)("button.buttonText")),1)]),o[1]||(o[1]=u("span",{class:"DocSearch-Button-Keys"},[u("kbd",{class:"DocSearch-Button-Key"}),u("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,Dc))}}),Uc={class:"VPNavBarSearch"},Wc={id:"local-search"},qc={key:1,id:"docsearch"},Gc=C({__name:"VPNavBarSearch",setup(n){const a=()=>null,t=()=>null,{theme:e}=$e(),o=x(!1),s=x(!1);De(()=>{});function r(){o.value||(o.value=!0,setTimeout(p,16))}function p(){const f=new Event("keydown");f.key="k",f.metaKey=!0,window.dispatchEvent(f),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||p()},16)}const d=x(!1),m="";return(f,_)=>{var S;return i(),c("div",Uc,[l(m)==="local"?(i(),c(U,{key:0},[d.value?(i(),N(l(a),{key:0,onClose:_[0]||(_[0]=R=>d.value=!1)})):$("",!0),u("div",Wc,[k(_a,{onClick:_[1]||(_[1]=R=>d.value=!0)})])],64)):l(m)==="algolia"?(i(),c(U,{key:1},[o.value?(i(),N(l(t),{key:0,algolia:((S=l(e).search)==null?void 0:S.options)??l(e).algolia,onVnodeBeforeMount:_[2]||(_[2]=R=>s.value=!0)},null,8,["algolia"])):$("",!0),s.value?$("",!0):(i(),c("div",qc,[k(_a,{onClick:r})]))],64)):$("",!0)])}}}),Yc=C({__name:"VPNavBarSocialLinks",setup(n){const{theme:a}=$e();return(t,e)=>l(a).socialLinks?(i(),N(la,{key:0,class:"VPNavBarSocialLinks",links:l(a).socialLinks},null,8,["links"])):$("",!0)}}),Xc=se(Yc,[["__scopeId","data-v-94f00bb2"]]),Zc=["href","rel","target"],Jc=["innerHTML"],Qc={key:2},ed=C({__name:"VPNavBarTitle",setup(n){const{site:a,theme:t}=$e(),{hasSidebar:e}=ft(),{currentLang:o}=dn(),s=g(()=>{var d;return typeof t.value.logoLink=="string"?t.value.logoLink:(d=t.value.logoLink)==null?void 0:d.link}),r=g(()=>{var d;return typeof t.value.logoLink=="string"||(d=t.value.logoLink)==null?void 0:d.rel}),p=g(()=>{var d;return typeof t.value.logoLink=="string"||(d=t.value.logoLink)==null?void 0:d.target});return(d,m)=>(i(),c("div",{class:h(["VPNavBarTitle",{"has-sidebar":l(e)}])},[u("a",{class:"title",href:s.value??l(Qn)(l(o).link),rel:r.value,target:p.value},[y(d.$slots,"nav-bar-title-before",{},void 0,!0),l(t).logo?(i(),N(hn,{key:0,class:"logo",image:l(t).logo},null,8,["image"])):$("",!0),l(t).siteTitle?(i(),c("span",{key:1,innerHTML:l(t).siteTitle},null,8,Jc)):l(t).siteTitle===void 0?(i(),c("span",Qc,O(l(a).title),1)):$("",!0),y(d.$slots,"nav-bar-title-after",{},void 0,!0)],8,Zc)],2))}}),td=se(ed,[["__scopeId","data-v-ac783efc"]]),nd={class:"items"},ad={class:"title"},ld=C({__name:"VPNavBarTranslations",setup(n){const{theme:a}=$e(),{localeLinks:t,currentLang:e}=dn({correspondingLink:!0});return(o,s)=>l(t).length&&l(e).label?(i(),N(aa,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:l(a).langMenuLabel||"Change language"},{default:v(()=>[u("div",nd,[u("p",ad,O(l(e).label),1),(i(!0),c(U,null,ge(l(t),r=>(i(),N(zn,{key:r.link,item:r},null,8,["item"]))),128))])]),_:1},8,["label"])):$("",!0)}}),od=se(ld,[["__scopeId","data-v-0655c02f"]]),sd={class:"wrapper"},id={class:"container"},rd={class:"title"},ud={class:"content"},cd={class:"content-body"},dd=C({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(n){const a=n,{y:t}=$a(),{hasSidebar:e}=ft(),{frontmatter:o}=$e(),s=x({});return Un(()=>{s.value={"has-sidebar":e.value,home:o.value.layout==="home",top:t.value===0,"screen-open":a.isScreenOpen}}),(r,p)=>(i(),c("div",{class:h(["VPNavBar",s.value])},[u("div",sd,[u("div",id,[u("div",rd,[k(td,null,{"nav-bar-title-before":v(()=>[y(r.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":v(()=>[y(r.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),u("div",ud,[u("div",cd,[y(r.$slots,"nav-bar-content-before",{},void 0,!0),k(Gc,{class:"search"}),k(Rc,{class:"menu"}),k(od,{class:"translations"}),k(Yu,{class:"appearance"}),k(Xc,{class:"social-links"}),k(Pc,{class:"extra"}),y(r.$slots,"nav-bar-content-after",{},void 0,!0),k(Mc,{class:"hamburger",active:n.isScreenOpen,onClick:p[0]||(p[0]=d=>r.$emit("toggle-screen"))},null,8,["active"])])])])]),p[1]||(p[1]=u("div",{class:"divider"},[u("div",{class:"divider-line"})],-1))],2))}}),pd=se(dd,[["__scopeId","data-v-3db4fbf3"]]),vd={key:0,class:"VPNavScreenAppearance"},fd={class:"text"},md=C({__name:"VPNavScreenAppearance",setup(n){const{site:a,theme:t}=$e();return(e,o)=>l(a).appearance&&l(a).appearance!=="force-dark"&&l(a).appearance!=="force-auto"?(i(),c("div",vd,[u("p",fd,O(l(t).darkModeSwitchLabel||"Appearance"),1),k(ta)])):$("",!0)}}),kd=se(md,[["__scopeId","data-v-61510644"]]),gd=["innerHTML"],bd=C({__name:"VPNavScreenMenuLink",props:{item:{}},setup(n){const a=qe("close-screen");return(t,e)=>(i(),N(rt,{class:"VPNavScreenMenuLink",href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon,onClick:l(a)},{default:v(()=>[u("span",{innerHTML:n.item.text},null,8,gd)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),hd=se(bd,[["__scopeId","data-v-af5a0f87"]]),yd=["innerHTML"],_d=C({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(n){const a=qe("close-screen");return(t,e)=>(i(),N(rt,{class:"VPNavScreenMenuGroupLink",href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon,onClick:l(a)},{default:v(()=>[u("span",{innerHTML:n.item.text},null,8,yd)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Wa=se(_d,[["__scopeId","data-v-77c8d903"]]),xd={class:"VPNavScreenMenuGroupSection"},wd={key:0,class:"title"},$d=C({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(n){return(a,t)=>(i(),c("div",xd,[n.text?(i(),c("p",wd,O(n.text),1)):$("",!0),(i(!0),c(U,null,ge(n.items,e=>(i(),N(Wa,{key:e.text,item:e},null,8,["item"]))),128))]))}}),Sd=se($d,[["__scopeId","data-v-d438db06"]]),Kd=["aria-controls","aria-expanded"],Cd=["innerHTML"],Td=["id"],zd={key:0,class:"item"},Pd={key:1,class:"item"},Ld={key:2,class:"group"},Bd=C({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(n){const a=n,t=x(!1),e=g(()=>`NavScreenGroup-${a.text.replace(" ","-").toLowerCase()}`);function o(){t.value=!t.value}return(s,r)=>(i(),c("div",{class:h(["VPNavScreenMenuGroup",{open:t.value}])},[u("button",{class:"button","aria-controls":e.value,"aria-expanded":t.value,onClick:o},[u("span",{class:"button-text",innerHTML:n.text},null,8,Cd),r[0]||(r[0]=u("span",{class:"vpi-plus button-icon"},null,-1))],8,Kd),u("div",{id:e.value,class:"items"},[(i(!0),c(U,null,ge(n.items,p=>(i(),c(U,{key:JSON.stringify(p)},["link"in p?(i(),c("div",zd,[k(Wa,{item:p},null,8,["item"])])):"component"in p?(i(),c("div",Pd,[(i(),N(et(p.component),Le({ref_for:!0},p.props,{"screen-menu":""}),null,16))])):(i(),c("div",Ld,[k(Sd,{text:p.text,items:p.items},null,8,["text","items"])]))],64))),128))],8,Td)],2))}}),Md=se(Bd,[["__scopeId","data-v-7b3a34e2"]]),Vd={key:0,class:"VPNavScreenMenu"},Od=C({__name:"VPNavScreenMenu",setup(n){const{theme:a}=$e();return(t,e)=>l(a).nav?(i(),c("nav",Vd,[(i(!0),c(U,null,ge(l(a).nav,o=>(i(),c(U,{key:JSON.stringify(o)},["link"in o?(i(),N(hd,{key:0,item:o},null,8,["item"])):"component"in o?(i(),N(et(o.component),Le({key:1,ref_for:!0},o.props,{"screen-menu":""}),null,16)):(i(),N(Md,{key:2,text:o.text||"",items:o.items},null,8,["text","items"]))],64))),128))])):$("",!0)}}),Id=C({__name:"VPNavScreenSocialLinks",setup(n){const{theme:a}=$e();return(t,e)=>l(a).socialLinks?(i(),N(la,{key:0,class:"VPNavScreenSocialLinks",links:l(a).socialLinks},null,8,["links"])):$("",!0)}}),Ad={class:"list"},Ed=C({__name:"VPNavScreenTranslations",setup(n){const{localeLinks:a,currentLang:t}=dn({correspondingLink:!0}),e=x(!1);function o(){e.value=!e.value}return(s,r)=>l(a).length&&l(t).label?(i(),c("div",{key:0,class:h(["VPNavScreenTranslations",{open:e.value}])},[u("button",{class:"title",onClick:o},[r[0]||(r[0]=u("span",{class:"vpi-languages icon lang"},null,-1)),K(" "+O(l(t).label)+" ",1),r[1]||(r[1]=u("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),u("ul",Ad,[(i(!0),c(U,null,ge(l(a),p=>(i(),c("li",{key:p.link,class:"item"},[k(rt,{class:"link",href:p.link},{default:v(()=>[K(O(p.text),1)]),_:2},1032,["href"])]))),128))])],2)):$("",!0)}}),jd=se(Ed,[["__scopeId","data-v-4a029a14"]]),Rd={class:"container"},Fd=C({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(n){const a=x(null),t=Sa(xn?document.body:null);return(e,o)=>(i(),N(nn,{name:"fade",onEnter:o[0]||(o[0]=s=>t.value=!0),onAfterLeave:o[1]||(o[1]=s=>t.value=!1)},{default:v(()=>[n.open?(i(),c("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:a,id:"VPNavScreen"},[u("div",Rd,[y(e.$slots,"nav-screen-content-before",{},void 0,!0),k(Od,{class:"menu"}),k(jd,{class:"translations"}),k(kd,{class:"appearance"}),k(Id,{class:"social-links"}),y(e.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):$("",!0)]),_:3}))}}),Dd=se(Fd,[["__scopeId","data-v-364fb0dc"]]),Nd={key:0,class:"VPNav"},Hd=C({__name:"VPNav",setup(n){const{isScreenOpen:a,closeScreen:t,toggleScreen:e}=ju(),{frontmatter:o}=$e(),s=g(()=>o.value.navbar!==!1);return vt("close-screen",t),an(()=>{xn&&document.documentElement.classList.toggle("hide-nav",!s.value)}),(r,p)=>s.value?(i(),c("header",Nd,[k(pd,{"is-screen-open":l(a),onToggleScreen:l(e)},{"nav-bar-title-before":v(()=>[y(r.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":v(()=>[y(r.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":v(()=>[y(r.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":v(()=>[y(r.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),k(Dd,{open:l(a)},{"nav-screen-content-before":v(()=>[y(r.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":v(()=>[y(r.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):$("",!0)}}),Ud=se(Hd,[["__scopeId","data-v-cf2cb13b"]]),Wd=["role","tabindex"],qd={key:1,class:"items"},Gd=C({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(n){const a=n,{collapsed:t,collapsible:e,isLink:o,isActiveLink:s,hasActiveLink:r,hasChildren:p,toggle:d}=Ni(g(()=>a.item)),m=g(()=>p.value?"section":"div"),f=g(()=>o.value?"a":"div"),_=g(()=>p.value?a.depth+2===7?"p":`h${a.depth+2}`:"p"),S=g(()=>o.value?void 0:"button"),R=g(()=>[[`level-${a.depth}`],{collapsible:e.value},{collapsed:t.value},{"is-link":o.value},{"is-active":s.value},{"has-active":r.value}]);function E(J){"key"in J&&J.key!=="Enter"||!a.item.link&&d()}function Z(){a.item.link&&d()}return(J,L)=>{const I=Kt("VPSidebarItem",!0);return i(),N(et(m.value),{class:h(["VPSidebarItem",R.value])},{default:v(()=>[n.item.text?(i(),c("div",Le({key:0,class:"item",role:S.value},rl(n.item.items?{click:E,keydown:E}:{},!0),{tabindex:n.item.items&&0}),[L[1]||(L[1]=u("div",{class:"indicator"},null,-1)),n.item.link?(i(),N(rt,{key:0,tag:f.value,class:"link",href:n.item.link,rel:n.item.rel,target:n.item.target},{default:v(()=>[(i(),N(et(_.value),{class:"text",innerHTML:n.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(i(),N(et(_.value),{key:1,class:"text",innerHTML:n.item.text},null,8,["innerHTML"])),n.item.collapsed!=null&&n.item.items&&n.item.items.length?(i(),c("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:Z,onKeydown:Zt(Z,["enter"]),tabindex:"0"},[...L[0]||(L[0]=[u("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):$("",!0)],16,Wd)):$("",!0),n.item.items&&n.item.items.length?(i(),c("div",qd,[n.depth<5?(i(!0),c(U,{key:0},ge(n.item.items,M=>(i(),N(I,{key:M.text,item:M,depth:n.depth+1},null,8,["item","depth"]))),128)):$("",!0)])):$("",!0)]),_:1},8,["class"])}}}),Yd=se(Gd,[["__scopeId","data-v-22aceb9f"]]),Xd=C({__name:"VPSidebarGroup",props:{items:{}},setup(n){const a=x(!0);let t=null;return De(()=>{t=setTimeout(()=>{t=null,a.value=!1},300)}),Ge(()=>{t!=null&&(clearTimeout(t),t=null)}),(e,o)=>(i(!0),c(U,null,ge(n.items,s=>(i(),c("div",{key:s.text,class:h(["group",{"no-transition":a.value}])},[k(Yd,{item:s,depth:0},null,8,["item"])],2))),128))}}),Zd=se(Xd,[["__scopeId","data-v-e1bb6cc3"]]),Jd={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Qd=C({__name:"VPSidebar",props:{open:{type:Boolean}},setup(n){const{sidebarGroups:a,hasSidebar:t}=ft(),e=n,o=x(null),s=Sa(xn?document.body:null);Pe([e,o],()=>{var p;e.open?(s.value=!0,(p=o.value)==null||p.focus()):s.value=!1},{immediate:!0,flush:"post"});const r=x(0);return Pe(a,()=>{r.value+=1},{deep:!0}),(p,d)=>l(t)?(i(),c("aside",{key:0,class:h(["VPSidebar",{open:n.open}]),ref_key:"navEl",ref:o,onClick:d[0]||(d[0]=Je(()=>{},["stop"]))},[d[2]||(d[2]=u("div",{class:"curtain"},null,-1)),u("nav",Jd,[d[1]||(d[1]=u("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),y(p.$slots,"sidebar-nav-before",{},void 0,!0),(i(),N(Zd,{items:l(a),key:r.value},null,8,["items"])),y(p.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):$("",!0)}}),ep=se(Qd,[["__scopeId","data-v-5b9571c6"]]),tp=C({__name:"VPSkipLink",setup(n){const{theme:a}=$e(),t=ln(),e=x();Pe(()=>t.path,()=>e.value.focus());function o({target:s}){const r=document.getElementById(decodeURIComponent(s.hash).slice(1));if(r){const p=()=>{r.removeAttribute("tabindex"),r.removeEventListener("blur",p)};r.setAttribute("tabindex","-1"),r.addEventListener("blur",p),r.focus(),window.scrollTo(0,0)}}return(s,r)=>(i(),c(U,null,[u("span",{ref_key:"backToTop",ref:e,tabindex:"-1"},null,512),u("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:o},O(l(a).skipToContentLabel||"Skip to content"),1)],64))}}),np=se(tp,[["__scopeId","data-v-40c9da43"]]),ap=C({__name:"Layout",setup(n){const{isOpen:a,open:t,close:e}=ft(),o=ln();Pe(()=>o.path,e),Di(a,e);const{frontmatter:s}=$e(),r=ct(),p=g(()=>!!r["home-hero-image"]);return vt("hero-image-slot-exists",p),(d,m)=>{const f=Kt("Content");return l(s).layout!==!1?(i(),c("div",{key:0,class:h(["Layout",l(s).pageClass])},[y(d.$slots,"layout-top",{},void 0,!0),k(np),k(zi,{class:"backdrop",show:l(a),onClick:l(e)},null,8,["show","onClick"]),k(Ud,null,{"nav-bar-title-before":v(()=>[y(d.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":v(()=>[y(d.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":v(()=>[y(d.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":v(()=>[y(d.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":v(()=>[y(d.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":v(()=>[y(d.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),k(Eu,{open:l(a),onOpenMenu:l(t)},null,8,["open","onOpenMenu"]),k(ep,{open:l(a)},{"sidebar-nav-before":v(()=>[y(d.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":v(()=>[y(d.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),k(xu,null,{"page-top":v(()=>[y(d.$slots,"page-top",{},void 0,!0)]),"page-bottom":v(()=>[y(d.$slots,"page-bottom",{},void 0,!0)]),"not-found":v(()=>[y(d.$slots,"not-found",{},void 0,!0)]),"home-hero-before":v(()=>[y(d.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":v(()=>[y(d.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":v(()=>[y(d.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":v(()=>[y(d.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":v(()=>[y(d.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":v(()=>[y(d.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":v(()=>[y(d.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":v(()=>[y(d.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":v(()=>[y(d.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":v(()=>[y(d.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":v(()=>[y(d.$slots,"doc-before",{},void 0,!0)]),"doc-after":v(()=>[y(d.$slots,"doc-after",{},void 0,!0)]),"doc-top":v(()=>[y(d.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":v(()=>[y(d.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":v(()=>[y(d.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":v(()=>[y(d.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":v(()=>[y(d.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":v(()=>[y(d.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":v(()=>[y(d.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":v(()=>[y(d.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),k(Cu),y(d.$slots,"layout-bottom",{},void 0,!0)],2)):(i(),N(f,{key:1}))}}}),lp=se(ap,[["__scopeId","data-v-f06bde9b"]]),qa={Layout:lp,enhanceApp:({app:n})=>{n.component("Badge",Ki)}},op=480,sp="cubic-bezier(0.22, 0.61, 0.36, 1)";function ip(){return typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function rp(){if(typeof document>"u")return;const a=document.startViewTransition;return typeof a=="function"?a.bind(document):void 0}function Ga(n,a){if(n&&(n.clientX||n.clientY))return{x:n.clientX,y:n.clientY};if(a){const t=a.getBoundingClientRect();return{x:t.left+t.width/2,y:t.top+t.height/2}}return{x:typeof window>"u"?0:window.innerWidth/2,y:typeof window>"u"?0:window.innerHeight/2}}function Ya(n,a){const t=rp();if(!t||ip()){n();return}t(n).ready.then(()=>{const{innerWidth:o,innerHeight:s}=window,r=Math.hypot(Math.max(a.x,o-a.x),Math.max(a.y,s-a.y));document.documentElement.animate({clipPath:[`circle(0px at ${a.x}px ${a.y}px)`,`circle(${r}px at ${a.x}px ${a.y}px)`]},{duration:op,easing:sp,pseudoElement:"::view-transition-new(root)"})}).catch(()=>{})}const up={key:0,class:"kk-theme-switch",role:"group","aria-label":"主题切换"},cp=["data-theme","title","aria-label","aria-pressed","onClick"],dp=C({__name:"ThemeSwitcher",setup(n){const a=[{name:"light",label:"Light 亮色"},{name:"dark",label:"Dark 暗色"},{name:"soft",label:"Soft 柔光"},{name:"cyber",label:"Cyber 赛博"}],{theme:t}=Tn(),{isDark:e}=Nn(),o=x(!1);De(()=>{o.value=!0});function s(r,p){var d;Ya(()=>{ut(r),e.value=Jn(r)},Ga(p)),window.dispatchEvent(new CustomEvent("kk-toast",{detail:`已切换到 ${((d=a.find(m=>m.name===r))==null?void 0:d.label)??r}`}))}return(r,p)=>o.value?(i(),c("div",up,[(i(),c(U,null,ge(a,d=>u("button",{key:d.name,class:h(["kk-theme-switch__dot",{"is-active":l(t)===d.name}]),"data-theme":d.name,title:d.label,"aria-label":d.label,"aria-pressed":l(t)===d.name,type:"button",onClick:m=>s(d.name,m)},null,10,cp)),64))])):$("",!0)}}),pp=["aria-expanded","aria-label"],vp={class:"kk-locale-switch__label"},fp={class:"kk-locale-switch__menu",role:"listbox"},mp=["aria-selected","onClick"],kp={key:0,width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.4","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},gp=C({__name:"LocaleSwitcher",setup(n){const{locale:a,locales:t}=lt(),e=x(!1),o=x(!1),s=x(null);De(()=>{e.value=!0,document.addEventListener("click",r,!0)});function r(f){const _=f.target;s.value&&_&&!s.value.contains(_)&&(o.value=!1)}const p=g(()=>Xt(a.value)),d=g(()=>t.value);function m(f){Qt(f),o.value=!1,window.dispatchEvent(new CustomEvent("kk-toast",{detail:`语言已切换为 ${Xt(f)}`}))}return Ge(()=>{document.removeEventListener("click",r,!0)}),(f,_)=>e.value?(i(),c("div",{key:0,ref_key:"rootRef",ref:s,class:"kk-locale-switch"},[u("button",{class:"kk-locale-switch__trigger",type:"button","aria-expanded":o.value,"aria-haspopup":"listbox","aria-label":`当前语言 ${p.value}`,onClick:_[0]||(_[0]=S=>o.value=!o.value)},[_[1]||(_[1]=u("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[u("circle",{cx:"12",cy:"12",r:"9"}),u("path",{d:"M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"})],-1)),u("span",vp,O(p.value),1),_[2]||(_[2]=u("svg",{class:"kk-locale-switch__arrow",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[u("path",{d:"m6 9 6 6 6-6"})],-1))],8,pp),bt(u("ul",fp,[(i(!0),c(U,null,ge(d.value,S=>(i(),c("li",{key:String(S)},[u("button",{class:h(["kk-locale-switch__item",{"is-active":S===l(a)}]),type:"button",role:"option","aria-selected":S===l(a),onClick:R=>m(String(S))},[u("span",null,O(l(Xt)(String(S))),1),S===l(a)?(i(),c("svg",kp,[..._[3]||(_[3]=[u("path",{d:"m5 13 4 4L19 7"},null,-1)])])):$("",!0)],10,mp)]))),128))],512),[[At,o.value]])],512)):$("",!0)}}),bp="https://github.com/JKK-jc/kk-ui",hp=C({__name:"GitHubLink",setup(n){return(a,t)=>(i(),c("a",{class:"kk-github-link",href:bp,target:"_blank",rel:"noopener noreferrer",title:"KK UI 源码仓库","aria-label":"KK UI GitHub 仓库"},[...t[0]||(t[0]=[u("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[u("path",{d:"M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 2.5-.34c.85 0 1.71.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"})],-1),u("span",{class:"kk-github-link__text"},"GitHub",-1)])]))}}),yp=C({__name:"KkToast",setup(n){const a=x(!1),t=x("");let e;function o(s){const r=s.detail;t.value=r||"",a.value=!0,clearTimeout(e),e=setTimeout(()=>{a.value=!1},1800)}return De(()=>{window.addEventListener("kk-toast",o)}),Ge(()=>{window.removeEventListener("kk-toast",o),clearTimeout(e)}),(s,r)=>(i(),c("div",{class:h(["kk-toast",{"is-show":a.value}]),role:"status","aria-live":"polite"},[r[0]||(r[0]=u("span",{class:"kk-toast__dot"},null,-1)),u("span",null,O(t.value),1)],2))}}),_p={key:0,class:"kk-aside-meta"},xp={class:"kk-aside-meta__list"},wp=["onClick"],$p=C({__name:"KkDocMeta",setup(n){const a=ln(),{theme:t}=Tn(),e=g(()=>a.path.startsWith("/components/")),o=[{name:"light",label:"Light"},{name:"dark",label:"Dark"},{name:"soft",label:"Soft"},{name:"cyber",label:"Cyber"}];function s(r){ut(r),window.dispatchEvent(new CustomEvent("kk-toast",{detail:`已切换到 ${r} 主题`}))}return(r,p)=>e.value?(i(),c("div",_p,[p[0]||(p[0]=u("div",{class:"kk-aside-meta__title"},"预览主题",-1)),u("div",xp,[(i(),c(U,null,ge(o,d=>u("button",{key:d.name,class:h(["kk-aside-meta__btn",{"is-active":l(t)===d.name}]),type:"button",onClick:m=>s(d.name)},O(d.label),11,wp)),64))])])):$("",!0)}}),Sp=".VPSwitchAppearance",Kp=C({__name:"Layout",setup(n){const{Layout:a}=qa,{isDark:t}=Nn(),{theme:e}=Tn();function o(r){const p=e.value;ut(r?p==="cyber"?"cyber":"dark":p==="soft"?"soft":"light")}Pe(t,r=>{o(r)});function s(r){const p=r.target,d=p==null?void 0:p.closest(Sp);if(!d)return;r.stopPropagation(),r.preventDefault();const m=!t.value;Ya(()=>{t.value=m,o(m)},Ga(r,d))}return De(()=>{Ns(),ql(),t.value=Jn(e.value),document.addEventListener("click",s,!0)}),Ge(()=>{document.removeEventListener("click",s,!0)}),(r,p)=>(i(),c(U,null,[k(l(a),null,{"nav-bar-content-after":v(()=>[k(dp),k(gp),k(hp)]),"aside-outline-after":v(()=>[k($p)]),_:1}),k(yp)],64))}}),Cp=C({__name:"basic",setup(n){return(a,t)=>(i(),c(U,null,[k(l(ve),{type:"primary"},{default:v(()=>[...t[0]||(t[0]=[K(" 主要按钮 ",-1)])]),_:1}),k(l(ve),null,{default:v(()=>[...t[1]||(t[1]=[K("默认按钮",-1)])]),_:1}),k(l(ve),{type:"text"},{default:v(()=>[...t[2]||(t[2]=[K(" 文字按钮 ",-1)])]),_:1})],64))}}),Tp=Object.freeze(Object.defineProperty({__proto__:null,default:Cp},Symbol.toStringTag,{value:"Module"})),zp={style:{width:"100%"}},Pp=C({__name:"block",setup(n){return(a,t)=>(i(),c("div",zp,[k(l(ve),{type:"primary",block:""},{default:v(()=>[...t[0]||(t[0]=[K(" 块级按钮 ",-1)])]),_:1})]))}}),Lp=Object.freeze(Object.defineProperty({__proto__:null,default:Pp},Symbol.toStringTag,{value:"Module"})),Bp=C({__name:"icon",setup(n){return(a,t)=>(i(),c(U,null,[k(l(ve),{type:"primary"},{icon:v(()=>[k(l(Ne),{name:"lucide:search",size:"16"})]),default:v(()=>[t[0]||(t[0]=K(" 搜索 ",-1))]),_:1}),k(l(ve),{type:"default"},{icon:v(()=>[k(l(Ne),{name:"lucide:download",size:"16"})]),default:v(()=>[t[1]||(t[1]=K(" 下载 ",-1))]),_:1})],64))}}),Mp=Object.freeze(Object.defineProperty({__proto__:null,default:Bp},Symbol.toStringTag,{value:"Module"})),Vp=C({__name:"size",setup(n){return(a,t)=>(i(),c(U,null,[k(l(ve),{type:"primary",size:"small"},{default:v(()=>[...t[0]||(t[0]=[K(" Small ",-1)])]),_:1}),k(l(ve),{type:"primary"},{default:v(()=>[...t[1]||(t[1]=[K(" Medium ",-1)])]),_:1}),k(l(ve),{type:"primary",size:"large"},{default:v(()=>[...t[2]||(t[2]=[K(" Large ",-1)])]),_:1})],64))}}),Op=Object.freeze(Object.defineProperty({__proto__:null,default:Vp},Symbol.toStringTag,{value:"Module"})),Ip=C({__name:"status",setup(n){return(a,t)=>(i(),c(U,null,[k(l(ve),{type:"primary",loading:""},{default:v(()=>[...t[0]||(t[0]=[K(" 加载中 ",-1)])]),_:1}),k(l(ve),{type:"primary",disabled:""},{default:v(()=>[...t[1]||(t[1]=[K(" 禁用 ",-1)])]),_:1}),k(l(ve),{type:"default",disabled:""},{default:v(()=>[...t[2]||(t[2]=[K(" 默认禁用 ",-1)])]),_:1})],64))}}),Ap=Object.freeze(Object.defineProperty({__proto__:null,default:Ip},Symbol.toStringTag,{value:"Module"})),Ep=C({__name:"type",setup(n){return(a,t)=>(i(),c(U,null,[k(l(ve),{type:"primary"},{default:v(()=>[...t[0]||(t[0]=[K(" Primary ",-1)])]),_:1}),k(l(ve),{type:"success"},{default:v(()=>[...t[1]||(t[1]=[K(" Success ",-1)])]),_:1}),k(l(ve),{type:"warning"},{default:v(()=>[...t[2]||(t[2]=[K(" Warning ",-1)])]),_:1}),k(l(ve),{type:"danger"},{default:v(()=>[...t[3]||(t[3]=[K(" Danger ",-1)])]),_:1}),k(l(ve),null,{default:v(()=>[...t[4]||(t[4]=[K("Default",-1)])]),_:1}),k(l(ve),{type:"text"},{default:v(()=>[...t[5]||(t[5]=[K(" Text ",-1)])]),_:1})],64))}}),jp=Object.freeze(Object.defineProperty({__proto__:null,default:Ep},Symbol.toStringTag,{value:"Module"})),Rp={style:{display:"flex",gap:"16px","flex-wrap":"wrap",width:"100%"}},Fp=C({__name:"basic",setup(n){return(a,t)=>(i(),c("div",Rp,[k(l(wt),{title:"基础卡片",style:{flex:"1","min-width":"240px"}},{default:v(()=>[...t[0]||(t[0]=[K(" 卡片正文内容 ",-1)])]),_:1}),k(l(wt),{title:"带操作",subtitle:"最近 7 天",style:{flex:"1","min-width":"240px"}},{extra:v(()=>[k(l(ve),{type:"text"},{default:v(()=>[...t[1]||(t[1]=[K(" 更多 ",-1)])]),_:1})]),footer:v(()=>[...t[2]||(t[2]=[K(" 更新时间：刚刚 ",-1)])]),default:v(()=>[t[3]||(t[3]=K(" 卡片正文内容 ",-1))]),_:1})]))}}),Dp=Object.freeze(Object.defineProperty({__proto__:null,default:Fp},Symbol.toStringTag,{value:"Module"})),Np={style:{display:"flex",gap:"16px","flex-wrap":"wrap",width:"100%"}},Hp=C({__name:"variant",setup(n){return(a,t)=>(i(),c("div",Np,[k(l(wt),{title:"always",shadow:"always",style:{flex:"1","min-width":"200px"}},{default:v(()=>[...t[0]||(t[0]=[K(" 始终显示阴影 ",-1)])]),_:1}),k(l(wt),{title:"hover",shadow:"hover",hoverable:"",style:{flex:"1","min-width":"200px"}},{default:v(()=>[...t[1]||(t[1]=[K(" 悬停显示阴影 ",-1)])]),_:1}),k(l(wt),{title:"never",shadow:"never",style:{flex:"1","min-width":"200px"}},{default:v(()=>[...t[2]||(t[2]=[K(" 不显示阴影 ",-1)])]),_:1}),k(l(wt),{title:"loading",loading:"",style:{flex:"1","min-width":"200px"}},{default:v(()=>[...t[3]||(t[3]=[K(" 加载中 ",-1)])]),_:1})]))}}),Up=Object.freeze(Object.defineProperty({__proto__:null,default:Hp},Symbol.toStringTag,{value:"Module"})),Wp={class:"cascader-result"},qp=C({__name:"basic",setup(n){const a=[{value:"zhejiang",label:"浙江省",children:[{value:"hangzhou",label:"杭州市",children:[{value:"xihu",label:"西湖区"},{value:"binjiang",label:"滨江区"}]},{value:"ningbo",label:"宁波市"}]},{value:"jiangsu",label:"江苏省",children:[{value:"nanjing",label:"南京市",children:[{value:"jiangning",label:"江宁区"}]}]},{value:"guangdong",label:"广东省",disabled:!0}],t=x([]);return(e,o)=>(i(),N(l(tt),{direction:"vertical",size:"medium",fill:"",style:{width:"100%"}},{default:v(()=>[k(l(Kn),{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=s=>t.value=s),options:a,"check-strictly":!1,clearable:"",placeholder:"请选择省 / 市 / 区",style:{width:"320px"}},null,8,["modelValue"]),u("div",Wp,[o[1]||(o[1]=K(" emitPath 默认开启，拿到的是完整路径：",-1)),u("code",null,O(JSON.stringify(t.value)),1)])]),_:1}))}}),Gp=Object.freeze(Object.defineProperty({__proto__:null,default:qp},Symbol.toStringTag,{value:"Module"})),Yp={key:0,class:"cascader-result"},Xp=C({__name:"lazy",setup(n){const a={zhejiang:[{value:"hangzhou",label:"杭州市"},{value:"ningbo",label:"宁波市"}],hangzhou:[{value:"xihu",label:"西湖区"},{value:"binjiang",label:"滨江区"}],jiangsu:[{value:"nanjing",label:"南京市"}]},t=[{value:"zhejiang",label:"浙江省"},{value:"jiangsu",label:"江苏省"}],e=x([]),o=x([]);function s(r,p){return o.value=[...o.value,`加载 ${p.join(" / ")} 的子级`],new Promise(d=>{setTimeout(()=>d(a[String(r.value)]??[]),600)})}return(r,p)=>(i(),N(l(tt),{direction:"vertical",size:"medium",fill:"",style:{width:"100%"}},{default:v(()=>[k(l(Kn),{modelValue:e.value,"onUpdate:modelValue":p[0]||(p[0]=d=>e.value=d),options:t,"load-data":s,"check-strictly":!1,clearable:"",placeholder:"点开才会请求子级",style:{width:"320px"},onLoad:p[1]||(p[1]=({path:d})=>o.value=[...o.value,`${d.join(" / ")} 加载完成`])},null,8,["modelValue"]),o.value.length?(i(),c("div",Yp,[(i(!0),c(U,null,ge(o.value,(d,m)=>(i(),c("div",{key:m},O(d),1))),128))])):$("",!0)]),_:1}))}}),Zp=Object.freeze(Object.defineProperty({__proto__:null,default:Xp},Symbol.toStringTag,{value:"Module"})),Jp={class:"cascader-result"},Qp=C({__name:"multiple",setup(n){const a=[{value:"frontend",label:"前端",children:[{value:"vue",label:"Vue"},{value:"react",label:"React"}]},{value:"backend",label:"后端",children:[{value:"node",label:"Node.js"},{value:"go",label:"Go"}]},{value:"design",label:"设计",children:[{value:"ui",label:"界面设计"}]}],t=x([["frontend","vue"],["design","ui"]]),e=x(!0),o=g(()=>" / ");return(s,r)=>(i(),N(l(tt),{direction:"vertical",size:"medium",fill:"",style:{width:"100%"}},{default:v(()=>[k(l(Kn),{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=p=>t.value=p),options:a,"show-all-levels":e.value,separator:o.value,multiple:"",clearable:"",placeholder:"请选择技术栈（可多选）",style:{width:"420px"}},null,8,["modelValue","show-all-levels","separator"]),u("div",Jp," 已选 "+O(t.value.length)+" 项，勾选后浮层保持展开，标签可单独删除。 ",1)]),_:1}))}}),ev=Object.freeze(Object.defineProperty({__proto__:null,default:Qp},Symbol.toStringTag,{value:"Module"})),tv={class:"switch"},nv=C({__name:"basic",setup(n){const a=["small","medium","large"];return(t,e)=>(i(),c(U,null,[u("div",tv,[e[0]||(e[0]=u("span",null,"选择宽度档位：",-1)),(i(),c(U,null,ge(a,o=>u("code",{key:o},O(o),1)),64))]),k(l(Wn),{size:"medium",padding:"large",bordered:"",style:{"margin-top":"12px"}},{default:v(()=>[...e[1]||(e[1]=[u("h3",null,"发布流程看板",-1),u("p",null," 把主内容限制在 960px 并居中，长文阅读时两侧留白更舒适， 也更易于在宽屏上聚焦。 ",-1)])]),_:1})],64))}}),av=se(nv,[["__scopeId","data-v-5cc822a2"]]),lv=Object.freeze(Object.defineProperty({__proto__:null,default:av},Symbol.toStringTag,{value:"Module"})),ov=C({__name:"sections",setup(n){return(a,t)=>(i(),N(l(Wn),{direction:"column",padding:"medium",bordered:""},{header:v(()=>[...t[0]||(t[0]=[u("div",{class:"bar"},[u("strong",null,"周报 · 第 38 期"),u("span",{class:"tag"},"已归档")],-1)])]),footer:v(()=>[...t[1]||(t[1]=[u("div",{class:"bar bar--footer"},[u("span",null,"共 12 条改动"),u("span",null,"2026-09-17")],-1)])]),default:v(()=>[t[2]||(t[2]=u("div",{class:"body"},[u("p",null," 本周完成设计 token 重构，新增 4 套主题下统一的圆角与间距变量， 组件层不再出现硬编码尺寸。 ")],-1))]),_:1}))}}),sv=se(ov,[["__scopeId","data-v-88acace9"]]),iv=Object.freeze(Object.defineProperty({__proto__:null,default:sv},Symbol.toStringTag,{value:"Module"})),rv={style:{width:"100%"}},uv=C({__name:"basic",setup(n){return(a,t)=>(i(),c("div",rv,[t[2]||(t[2]=u("p",null,"第一段内容",-1)),k(l($t)),t[3]||(t[3]=u("p",null,"第二段内容",-1)),k(l($t),null,{default:v(()=>[...t[0]||(t[0]=[K("分组标题",-1)])]),_:1}),t[4]||(t[4]=u("p",null,"第三段内容",-1)),k(l($t),{"content-position":"left","border-style":"dashed"},{default:v(()=>[...t[1]||(t[1]=[K(" 左侧标题 ",-1)])]),_:1}),t[5]||(t[5]=u("p",null,"第四段内容",-1))]))}}),cv=Object.freeze(Object.defineProperty({__proto__:null,default:uv},Symbol.toStringTag,{value:"Module"})),dv=C({__name:"vertical",setup(n){return(a,t)=>(i(),N(l(tt),{size:"medium"},{default:v(()=>[t[0]||(t[0]=u("span",null,"编辑",-1)),k(l($t),{direction:"vertical"}),t[1]||(t[1]=u("span",null,"复制",-1)),k(l($t),{direction:"vertical",accent:""}),t[2]||(t[2]=u("span",null,"删除",-1))]),_:1}))}}),pv=Object.freeze(Object.defineProperty({__proto__:null,default:dv},Symbol.toStringTag,{value:"Module"})),vv=C({__name:"basic",setup(n){const a=x(!1);return(t,e)=>(i(),c(U,null,[k(l(ve),{type:"primary",onClick:e[0]||(e[0]=o=>a.value=!0)},{default:v(()=>[...e[2]||(e[2]=[K(" 打开抽屉 ",-1)])]),_:1}),k(l(on),{modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=o=>a.value=o),title:"发布配置",subtitle:"右侧滑出，内容较长时主体区域内部滚动",size:"420px",footer:""},{default:v(()=>[...e[3]||(e[3]=[u("p",{class:"drawer-basic-text"}," 抽屉从屏幕右侧滑出，不打断当前页面上下文，适合承载表单、详情、设置这一类 「需要来回对照主页面」的内容。 ",-1),u("p",{class:"drawer-basic-text"},[K(" 宽度默认是视口宽度的 30%，也可以像这里一样写死 "),u("code",null,"420px"),K("； 传入数字则按 px 处理。 ")],-1),u("p",{class:"drawer-basic-text"},[K(" 底部操作区由 "),u("code",null,"footer"),K(" 打开："),u("strong",null,"取消"),K("会关闭抽屉， "),u("strong",null,"确定"),K("只抛出 "),u("code",null,"confirm"),K(" 事件，方便接异步提交。 ")],-1)])]),_:1},8,["modelValue"])],64))}}),fv=Object.freeze(Object.defineProperty({__proto__:null,default:vv},Symbol.toStringTag,{value:"Module"})),mv={class:"drawer-footer-demo"},kv=C({__name:"footer",setup(n){const a=x(!1),t=x(""),e=x(""),o=x(!1);async function s(){o.value=!0,await new Promise(p=>setTimeout(p,600)),o.value=!1,a.value=!1,t.value="",e.value=""}function r(){a.value=!1}return(p,d)=>(i(),c(U,null,[k(l(ve),{type:"primary",onClick:d[0]||(d[0]=m=>a.value=!0)},{default:v(()=>[...d[4]||(d[4]=[K(" 填写发布信息 ",-1)])]),_:1}),k(l(on),{modelValue:a.value,"onUpdate:modelValue":d[3]||(d[3]=m=>a.value=m),title:"发布信息",size:"420px",footer:""},{footer:v(()=>[k(l(ve),{disabled:o.value,onClick:r},{default:v(()=>[...d[5]||(d[5]=[K(" 取消 ",-1)])]),_:1},8,["disabled"]),k(l(ve),{type:"primary",loading:o.value,onClick:s},{default:v(()=>[...d[6]||(d[6]=[K(" 提交 ",-1)])]),_:1},8,["loading"])]),default:v(()=>[u("div",mv,[k(l(He),{modelValue:t.value,"onUpdate:modelValue":d[1]||(d[1]=m=>t.value=m),block:"",placeholder:"版本号，如 0.3.0"},null,8,["modelValue"]),k(l(He),{modelValue:e.value,"onUpdate:modelValue":d[2]||(d[2]=m=>e.value=m),block:"",placeholder:"发布说明（可留空）"},null,8,["modelValue"])])]),_:1},8,["modelValue"])],64))}}),gv=Object.freeze(Object.defineProperty({__proto__:null,default:kv},Symbol.toStringTag,{value:"Module"})),bv=C({__name:"placement",setup(n){const a=x(!1),t=x("right"),e=[{value:"right",label:"右侧"},{value:"left",label:"左侧"},{value:"top",label:"顶部"},{value:"bottom",label:"底部"}];function o(s){t.value=s,a.value=!0}return(s,r)=>(i(),c(U,null,[k(l(tt),null,{default:v(()=>[(i(),c(U,null,ge(e,p=>k(l(ve),{key:p.value,onClick:d=>o(p.value)},{default:v(()=>[K(O(p.label),1)]),_:2},1032,["onClick"])),64))]),_:1}),k(l(on),{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=p=>a.value=p),placement:t.value,title:`从${t.value==="top"||t.value==="bottom"?"上下":"左右"}滑出`,size:t.value==="top"||t.value==="bottom"?"240px":"360px"},{default:v(()=>[...r[1]||(r[1]=[u("p",{class:"drawer-placement-text"},[u("code",null,"placement"),K(" 决定出现方向：左右方向时 "),u("code",null,"size"),K(" 表示宽度，上下方向时表示高度。切换方向后尺寸会自动回到推导值， 避免上一次拖动调整出的 px 值把抽屉撑出屏幕。 ")],-1)])]),_:1},8,["modelValue","placement","title","size"])],64))}}),hv=Object.freeze(Object.defineProperty({__proto__:null,default:bv},Symbol.toStringTag,{value:"Module"})),yv={class:"drawer-resizable-hint"},_v=C({__name:"resizable",setup(n){const a=x(!1),t=x(0),e=x(null);function o(s){t.value=s}return(s,r)=>(i(),c(U,null,[k(l(tt),null,{default:v(()=>[k(l(ve),{type:"primary",onClick:r[0]||(r[0]=p=>a.value=!0)},{default:v(()=>[...r[4]||(r[4]=[K(" 打开可调整尺寸的抽屉 ",-1)])]),_:1}),u("span",yv," 当前宽度："+O(t.value>0?`${t.value}px`:"未调整"),1)]),_:1}),k(l(on),{ref_key:"drawerRef",ref:e,modelValue:a.value,"onUpdate:modelValue":r[3]||(r[3]=p=>a.value=p),title:"拖动内侧边缘调整宽度",size:"360px",resizable:"","min-size":280,"max-size":640,footer:"",onResize:o},{footer:v(()=>[k(l(ve),{onClick:r[1]||(r[1]=p=>{var d;return(d=e.value)==null?void 0:d.reset()})},{default:v(()=>[...r[5]||(r[5]=[K(" 恢复默认宽度 ",-1)])]),_:1}),k(l(ve),{type:"primary",onClick:r[2]||(r[2]=p=>a.value=!1)},{default:v(()=>[...r[6]||(r[6]=[K(" 完成 ",-1)])]),_:1})]),default:v(()=>[r[7]||(r[7]=u("p",{class:"drawer-resizable-text"},[K(" 打开 "),u("code",null,"resizable"),K(" 后，抽屉内侧会出现一条 6px 宽的拖动手柄 （hover 时高亮）。拖动过程直接写内联宽度，不触发组件重渲染， 松手才抛出 "),u("code",null,"resize"),K(" 事件。 ")],-1)),r[8]||(r[8]=u("p",{class:"drawer-resizable-text"},[K(" 尺寸被限制在 "),u("code",null,"minSize"),K(" 与 "),u("code",null,"maxSize"),K(" 之间； 调用实例方法 "),u("code",null,"reset()"),K(" 可恢复成 "),u("code",null,"size"),K(" 推导值。 ")],-1))]),_:1},8,["modelValue"])],64))}}),xv=Object.freeze(Object.defineProperty({__proto__:null,default:_v},Symbol.toStringTag,{value:"Module"})),wv={style:{width:"100%"}},$v={key:0,style:{color:"var(--kk-text-secondary)","font-size":"13px"}},Sv=C({__name:"basic",setup(n){const a=x(),t=tn({name:"",email:""}),e=x(""),o={name:[{required:!0,message:"请输入名称",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}]};async function s(){var d;const p=await((d=a.value)==null?void 0:d.validate());e.value=p?"校验通过":"校验未通过"}function r(){var p;(p=a.value)==null||p.resetFields(),e.value=""}return(p,d)=>(i(),c("div",wv,[k(l($n),{ref_key:"formRef",ref:a,model:t,rules:o,"label-width":"72px"},{default:v(()=>[k(l(Ot),{prop:"name",label:"名称"},{default:v(()=>[k(l(He),{modelValue:t.name,"onUpdate:modelValue":d[0]||(d[0]=m=>t.name=m),placeholder:"请输入名称",clearable:""},null,8,["modelValue"])]),_:1}),k(l(Ot),{prop:"email",label:"邮箱"},{default:v(()=>[k(l(He),{modelValue:t.email,"onUpdate:modelValue":d[1]||(d[1]=m=>t.email=m),placeholder:"请输入邮箱"},null,8,["modelValue"])]),_:1}),k(l(Ot),null,{default:v(()=>[k(l(tt),null,{default:v(()=>[k(l(ve),{type:"primary","native-type":"submit",onClick:s},{default:v(()=>[...d[2]||(d[2]=[K(" 提交 ",-1)])]),_:1}),k(l(ve),{onClick:r},{default:v(()=>[...d[3]||(d[3]=[K(" 重置 ",-1)])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"]),e.value?(i(),c("p",$v,O(e.value),1)):$("",!0)]))}}),Kv=Object.freeze(Object.defineProperty({__proto__:null,default:Sv},Symbol.toStringTag,{value:"Module"})),Cv=C({__name:"label-position",setup(n){const a=tn({name:""});return(t,e)=>(i(),N(l($n),{model:a,"label-position":"top",style:{width:"100%"}},{default:v(()=>[k(l(Ot),{prop:"name",label:"名称",required:""},{default:v(()=>[k(l(He),{modelValue:a.name,"onUpdate:modelValue":e[0]||(e[0]=o=>a.name=o),placeholder:"标签在顶部"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]))}}),Tv=Object.freeze(Object.defineProperty({__proto__:null,default:Cv},Symbol.toStringTag,{value:"Module"})),zv=C({__name:"rules",setup(n){const a=tn({username:""}),t={username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:12,message:"长度需为 3-12 个字符",trigger:"blur"},{pattern:/^[a-zA-Z0-9_]+$/,message:"仅支持字母、数字与下划线",trigger:"blur"}]};return(e,o)=>(i(),N(l($n),{model:a,rules:t,"label-width":"80px",style:{width:"100%"}},{default:v(()=>[k(l(Ot),{prop:"username",label:"用户名"},{default:v(()=>[k(l(He),{modelValue:a.username,"onUpdate:modelValue":o[0]||(o[0]=s=>a.username=s),placeholder:"3-12 位字母数字下划线"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]))}}),Pv=Object.freeze(Object.defineProperty({__proto__:null,default:zv},Symbol.toStringTag,{value:"Module"})),Lv=C({__name:"basic",setup(n){return(a,t)=>(i(),c(U,null,[k(l(Ne),{name:"lucide:home"}),k(l(Ne),{name:"lucide:heart"}),k(l(Ne),{name:"lucide:settings"})],64))}}),Bv=Object.freeze(Object.defineProperty({__proto__:null,default:Lv},Symbol.toStringTag,{value:"Module"})),Mv=C({__name:"color",setup(n){return(a,t)=>(i(),c(U,null,[k(l(Ne),{name:"lucide:heart",color:"#EF4444",size:"24"}),k(l(Ne),{name:"lucide:check-circle",color:"#16A34A",size:"24"}),k(l(Ne),{name:"lucide:bell",color:"#F59E0B",size:"24"}),k(l(Ne),{name:"lucide:loader",spin:"",size:"24"})],64))}}),Vv=Object.freeze(Object.defineProperty({__proto__:null,default:Mv},Symbol.toStringTag,{value:"Module"})),Ov=C({__name:"size",setup(n){return(a,t)=>(i(),c(U,null,[k(l(Ne),{name:"lucide:star",size:"small"}),k(l(Ne),{name:"lucide:star"}),k(l(Ne),{name:"lucide:star",size:"large"}),k(l(Ne),{name:"lucide:star",size:32}),k(l(Ne),{name:"lucide:star",size:"2em"})],64))}}),Iv=Object.freeze(Object.defineProperty({__proto__:null,default:Ov},Symbol.toStringTag,{value:"Module"})),Av=C({__name:"affix",setup(n){const a=x("");return(t,e)=>(i(),N(l(tt),{direction:"vertical",size:"medium",fill:"",style:{width:"100%"}},{default:v(()=>[k(l(He),{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=o=>a.value=o),placeholder:"搜索内容"},{prefix:v(()=>[k(l(Ne),{name:"lucide:search",size:"16"})]),_:1},8,["modelValue"]),k(l(He),{placeholder:"金额"},{suffix:v(()=>[...e[2]||(e[2]=[K(" 元 ",-1)])]),_:1}),k(l(He),{placeholder:"站点"},{prepend:v(()=>[...e[3]||(e[3]=[K(" https:// ",-1)])]),_:1}),k(l(He),{modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=o=>a.value=o),type:"password","show-password":"",placeholder:"密码"},null,8,["modelValue"])]),_:1}))}}),Ev=Object.freeze(Object.defineProperty({__proto__:null,default:Av},Symbol.toStringTag,{value:"Module"})),jv=C({__name:"basic",setup(n){const a=x("");return(t,e)=>(i(),N(l(tt),{direction:"vertical",size:"medium",fill:"",style:{width:"100%"}},{default:v(()=>[k(l(He),{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=o=>a.value=o),placeholder:"基础输入框",clearable:""},null,8,["modelValue"]),k(l(He),{placeholder:"禁用状态",disabled:""}),k(l(He),{"model-value":"只读内容",readonly:""})]),_:1}))}}),Rv=Object.freeze(Object.defineProperty({__proto__:null,default:jv},Symbol.toStringTag,{value:"Module"})),Fv=C({__name:"size",setup(n){return(a,t)=>(i(),N(l(tt),{direction:"vertical",size:"medium",fill:"",style:{width:"100%"}},{default:v(()=>[k(l(He),{size:"small",placeholder:"small"}),k(l(He),{placeholder:"medium"}),k(l(He),{size:"large",placeholder:"large"}),k(l(He),{invalid:"","error-message":"该字段必填",placeholder:"错误态"}),k(l(He),{block:"",placeholder:"块级宽度"})]),_:1}))}}),Dv=Object.freeze(Object.defineProperty({__proto__:null,default:Fv},Symbol.toStringTag,{value:"Module"})),Nv=C({__name:"basic",setup(n){return(a,t)=>(i(),N(l(en),{style:{height:"320px",border:"1px solid var(--kk-border-color)","border-radius":"var(--kk-radius-lg)",overflow:"hidden"}},{default:v(()=>[k(l(Gn),{bordered:""},{left:v(()=>[...t[0]||(t[0]=[u("strong",null,"KK 控制台",-1)])]),right:v(()=>[...t[1]||(t[1]=[u("span",{class:"muted"},"v0.2.0",-1)])]),_:1}),k(l(en),null,{default:v(()=>[k(l(Yn),{width:180,bordered:""},{default:v(()=>[...t[2]||(t[2]=[u("div",{class:"nav"},[u("div",{class:"nav-item is-active"},"概览"),u("div",{class:"nav-item"},"组件"),u("div",{class:"nav-item"},"主题")],-1)])]),_:1}),k(l(Xn),null,{default:v(()=>[...t[3]||(t[3]=[u("h3",null,"概览",-1),u("p",null,"这里是页面的主要内容区域，超出高度时内部滚动。",-1)])]),_:1})]),_:1}),k(l(Aa),{bordered:""},{default:v(()=>[...t[4]||(t[4]=[u("span",{class:"muted"},"柔光几何 · 设计系统",-1)])]),_:1})]),_:1}))}}),Hv=se(Nv,[["__scopeId","data-v-0011134f"]]),Uv=Object.freeze(Object.defineProperty({__proto__:null,default:Hv},Symbol.toStringTag,{value:"Module"})),Wv=C({__name:"grid",setup(n){return(a,t)=>(i(),c(U,null,[k(l(En),{gutter:16},{default:v(()=>[k(l(xt),{span:12,md:{span:8}},{default:v(()=>[...t[0]||(t[0]=[u("div",{class:"cell"},"span 12 / md 8",-1)])]),_:1}),k(l(xt),{span:12,md:{span:8}},{default:v(()=>[...t[1]||(t[1]=[u("div",{class:"cell"},"span 12 / md 8",-1)])]),_:1}),k(l(xt),{span:24,md:{span:8}},{default:v(()=>[...t[2]||(t[2]=[u("div",{class:"cell"},"span 24 / md 8",-1)])]),_:1})]),_:1}),k(l(En),{gutter:[16,24],style:{"margin-top":"24px"}},{default:v(()=>[k(l(xt),{span:6},{default:v(()=>[...t[3]||(t[3]=[u("div",{class:"cell cell--alt"},"6",-1)])]),_:1}),k(l(xt),{span:6,offset:6},{default:v(()=>[...t[4]||(t[4]=[u("div",{class:"cell cell--alt"},"offset 6",-1)])]),_:1}),k(l(xt),{span:6},{default:v(()=>[...t[5]||(t[5]=[u("div",{class:"cell cell--alt"},"6",-1)])]),_:1})]),_:1})],64))}}),qv=se(Wv,[["__scopeId","data-v-e82ee62e"]]),Gv=Object.freeze(Object.defineProperty({__proto__:null,default:qv},Symbol.toStringTag,{value:"Module"})),Yv={class:"logo"},Xv=C({__name:"sider",setup(n){const a=x(!1);return(t,e)=>(i(),N(l(en),{style:{height:"300px",border:"1px solid var(--kk-border-color)","border-radius":"var(--kk-radius-lg)",overflow:"hidden"}},{default:v(()=>[k(l(Gn),{bordered:""},{left:v(()=>[...e[2]||(e[2]=[u("strong",null,"文档站",-1)])]),right:v(()=>[k(l(ve),{size:"small",onClick:e[0]||(e[0]=o=>a.value=!a.value)},{default:v(()=>[K(O(a.value?"展开侧栏":"收起侧栏"),1)]),_:1})]),_:1}),k(l(en),null,{default:v(()=>[k(l(Yn),{collapsed:a.value,"onUpdate:collapsed":e[1]||(e[1]=o=>a.value=o),width:200,"collapsed-width":56,collapsible:"",bordered:""},{logo:v(()=>[u("span",Yv,O(a.value?"K":"KK UI"),1)]),default:v(()=>[e[3]||(e[3]=u("div",{class:"nav"},[u("div",{class:"nav-item is-active"},"指南"),u("div",{class:"nav-item"},"组件"),u("div",{class:"nav-item"},"主题")],-1))]),_:1},8,["collapsed"]),k(l(Xn),null,{default:v(()=>[u("p",null,"侧边栏收起后宽度收窄为 "+O(a.value?56:200)+"px，触发器位于底部。",1)]),_:1})]),_:1})]),_:1}))}}),Zv=se(Xv,[["__scopeId","data-v-3813de92"]]),Jv=Object.freeze(Object.defineProperty({__proto__:null,default:Zv},Symbol.toStringTag,{value:"Module"})),Qv={class:"demo-actions"},ef=C({__name:"advanced",setup(n){const a=x(!1),t=x(!1),e=x(null),o=["弹窗的 max-height 取「组件 token」与「视口推导值」的较小者，长内容交给主体区域内部滚动，不会把弹窗顶出屏幕。","主体区域带 overscroll-behavior: contain，滚到底时不会把滚动继续传给背后的页面。","首次打开后 DOM 会保留，仅切换可见性，二次打开不重新挂载，省下组件初始化与节点创建的开销。","需要彻底销毁时打开 destroyOnClose，关闭动画结束后节点会被移除。","loading 期间主体区域显示遮罩并屏蔽指针事件，避免在加载中误操作。","通过 ref 可以拿到 open / close / reset，适合在事件回调里程序化控制。"];function s(){t.value=!0,a.value=!0,setTimeout(()=>t.value=!1,1400)}return(r,p)=>(i(),c(U,null,[u("div",Qv,[k(l(ve),{onClick:s},{default:v(()=>[...p[3]||(p[3]=[K(" 长内容 + 加载态 ",-1)])]),_:1}),k(l(ve),{onClick:p[0]||(p[0]=d=>{var m;return(m=e.value)==null?void 0:m.open()})},{default:v(()=>[...p[4]||(p[4]=[K(" 用 ref 打开 ",-1)])]),_:1})]),k(l(Rt),{ref_key:"modalRef",ref:e,modelValue:a.value,"onUpdate:modelValue":p[1]||(p[1]=d=>a.value=d),title:"组件说明",subtitle:"主体区域内部滚动",loading:t.value,"max-height":"60vh",footer:"",onConfirm:p[2]||(p[2]=d=>a.value=!1)},{default:v(()=>[(i(),c(U,null,ge(o,(d,m)=>u("p",{key:m,class:"demo-para"},O(d),1)),64))]),_:1},8,["modelValue","loading"])],64))}}),tf=Object.freeze(Object.defineProperty({__proto__:null,default:ef},Symbol.toStringTag,{value:"Module"})),nf=C({__name:"basic",setup(n){const a=x(!1);return(t,e)=>(i(),c(U,null,[k(l(ve),{type:"primary",onClick:e[0]||(e[0]=o=>a.value=!0)},{default:v(()=>[...e[2]||(e[2]=[K(" 打开弹窗 ",-1)])]),_:1}),k(l(Rt),{modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=o=>a.value=o),title:"发布新版本",subtitle:"v0.2.0 · 预计影响 1 个包"},{default:v(()=>[...e[3]||(e[3]=[u("div",{class:"demo-text"},[u("p",null,[K(" 确认后将构建产物并推送到 npm，当前分支为 "),u("code",null,"main"),K("。发布过程不可中断，完成后会同步生成 CHANGELOG。 ")])],-1)])]),_:1},8,["modelValue"])],64))}}),af=Object.freeze(Object.defineProperty({__proto__:null,default:nf},Symbol.toStringTag,{value:"Module"})),lf={class:"demo-drag"},of=C({__name:"draggable",setup(n){const a=x(!1),t=x({x:0,y:0});function e(o){t.value=o}return(o,s)=>(i(),c(U,null,[k(l(ve),{onClick:s[0]||(s[0]=r=>a.value=!0)},{default:v(()=>[...s[2]||(s[2]=[K(" 可拖动弹窗 ",-1)])]),_:1}),k(l(Rt),{modelValue:a.value,"onUpdate:modelValue":s[1]||(s[1]=r=>a.value=r),title:"拖动我",subtitle:"按住标题栏拖动，至少保留 56px 在视口内",draggable:!0,onDrag:e},{default:v(()=>[u("div",lf,[u("p",null,"当前位移：x "+O(t.value.x.toFixed(0))+"px / y "+O(t.value.y.toFixed(0))+"px",1),s[3]||(s[3]=u("p",null,[K("位移只写进 "),u("code",null,"transform"),K("，拖动过程中不会触发组件重渲染。")],-1))])]),_:1},8,["modelValue"])],64))}}),sf=Object.freeze(Object.defineProperty({__proto__:null,default:of},Symbol.toStringTag,{value:"Module"})),rf=C({__name:"footer",setup(n){const a=x(!1),t=x(!1);function e(s){window.dispatchEvent(new CustomEvent("kk-toast",{detail:s}))}function o(){t.value=!0,e("已确认，正在执行…"),setTimeout(()=>{t.value=!1,a.value=!1,e("执行完成")},1200)}return(s,r)=>(i(),c(U,null,[k(l(ve),{type:"primary",onClick:r[0]||(r[0]=p=>a.value=!0)},{default:v(()=>[...r[3]||(r[3]=[K(" 二次确认 ",-1)])]),_:1}),k(l(Rt),{modelValue:a.value,"onUpdate:modelValue":r[1]||(r[1]=p=>a.value=p),title:"删除这条记录？",subtitle:"删除后不可恢复",footer:"","ok-text":"删除","ok-loading":t.value,onConfirm:o,onCancel:r[2]||(r[2]=p=>e("已取消"))},{default:v(()=>[...r[4]||(r[4]=[u("p",{class:"demo-confirm"},[K(" 默认底部按钮只抛出 "),u("code",null,"confirm"),K(" / "),u("code",null,"cancel"),K(" 事件，是否关闭弹窗由业务决定 —— 这样异步提交时可以一直保持打开状态。 ")],-1)])]),_:1},8,["modelValue","ok-loading"])],64))}}),uf=Object.freeze(Object.defineProperty({__proto__:null,default:rf},Symbol.toStringTag,{value:"Module"})),cf={class:"demo-head"},df={class:"demo-foot"},pf=C({__name:"slots",setup(n){const a=x(!1);return(t,e)=>(i(),c(U,null,[k(l(ve),{onClick:e[0]||(e[0]=o=>a.value=!0)},{default:v(()=>[...e[4]||(e[4]=[K(" 完全自定义 ",-1)])]),_:1}),k(l(Rt),{modelValue:a.value,"onUpdate:modelValue":e[3]||(e[3]=o=>a.value=o),"show-close":!1,bordered:""},{header:v(()=>[u("div",cf,[k(l(Ne),{name:"lucide:wand-sparkles",size:"18"}),e[6]||(e[6]=u("span",null,"自定义头部",-1)),k(l(Ye),{type:"primary",size:"small"},{default:v(()=>[...e[5]||(e[5]=[K(" Beta ",-1)])]),_:1})])]),footer:v(()=>[u("div",df,[k(l(ve),{size:"small",onClick:e[1]||(e[1]=o=>a.value=!1)},{default:v(()=>[...e[7]||(e[7]=[K(" 稍后再说 ",-1)])]),_:1}),k(l(ve),{size:"small",type:"primary",onClick:e[2]||(e[2]=o=>a.value=!1)},{default:v(()=>[...e[8]||(e[8]=[K(" 好的 ",-1)])]),_:1})])]),default:v(()=>[e[9]||(e[9]=u("p",{class:"demo-slot-body"}," 头部、底部、关闭按钮都开放了插槽，默认样式只负责留白与分割线， 布局完全可以自己接。 ",-1))]),_:1},8,["modelValue"])],64))}}),vf=Object.freeze(Object.defineProperty({__proto__:null,default:pf},Symbol.toStringTag,{value:"Module"})),ff=C({__name:"basic",setup(n){const a=x(1);return(t,e)=>(i(),N(l(un),{"current-page":a.value,"onUpdate:currentPage":e[0]||(e[0]=o=>a.value=o),total:200,"page-size":10},null,8,["current-page"]))}}),mf=Object.freeze(Object.defineProperty({__proto__:null,default:ff},Symbol.toStringTag,{value:"Module"})),kf=C({__name:"layout",setup(n){const a=x(3),t=x(10);return(e,o)=>(i(),N(l(un),{"current-page":a.value,"onUpdate:currentPage":o[0]||(o[0]=s=>a.value=s),"page-size":t.value,"onUpdate:pageSize":o[1]||(o[1]=s=>t.value=s),total:500,"page-sizes":[10,20,50],layout:"prev, pager, next, ->, sizes, jumper, total"},null,8,["current-page","page-size"]))}}),gf=Object.freeze(Object.defineProperty({__proto__:null,default:kf},Symbol.toStringTag,{value:"Module"})),bf=C({__name:"sizes",setup(n){const a=x(1),t=x(10);return(e,o)=>(i(),N(l(un),{"current-page":a.value,"onUpdate:currentPage":o[0]||(o[0]=s=>a.value=s),"page-size":t.value,"onUpdate:pageSize":o[1]||(o[1]=s=>t.value=s),total:200,"page-sizes":[10,20,50,100],background:"",layout:"prev, pager, next, jumper, sizes, total"},null,8,["current-page","page-size"]))}}),hf=Object.freeze(Object.defineProperty({__proto__:null,default:bf},Symbol.toStringTag,{value:"Module"})),yf={class:"select-basic"},_f={class:"select-basic__option"},xf={key:0,class:"select-basic__tip"},wf={class:"select-basic__result"},$f=C({__name:"basic",setup(n){const a=x(null),t=[{value:"vue",label:"Vue 3"},{value:"react",label:"React 18"},{value:"svelte",label:"Svelte 5"},{value:"solid",label:"Solid",disabled:!0,tip:"暂不支持"}];function e(o){console.log("search:",o)}return(o,s)=>(i(),c("div",yf,[k(l(sn),{modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=r=>a.value=r),options:t,filterable:"",clearable:"",placeholder:"请选择技术栈",onSearch:e},{default:v(({option:r})=>[u("span",_f,[u("span",null,O(r.label),1),r.tip?(i(),c("em",xf,O(String(r.tip)),1)):$("",!0)])]),_:1},8,["modelValue"]),u("p",wf,[s[1]||(s[1]=K(" 当前值：",-1)),u("code",null,O(a.value??"（空）"),1)])]))}}),Sf=Object.freeze(Object.defineProperty({__proto__:null,default:$f},Symbol.toStringTag,{value:"Module"})),Kf={class:"select-multiple"},Cf={class:"select-multiple__result"},Tf=C({__name:"multiple",setup(n){const a=x(["css","ts"]),t=[{value:"css",label:"CSS"},{value:"ts",label:"TypeScript"},{value:"vue",label:"Vue"},{value:"vite",label:"Vite"},{value:"vitest",label:"Vitest"},{value:"scss",label:"SCSS"}];return(e,o)=>(i(),c("div",Kf,[k(l(sn),{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=s=>a.value=s),options:t,multiple:"",filterable:"",clearable:"","select-all":"","collapse-tags":"","max-tag-count":3,"multiple-limit":5,placeholder:"请选择技能（最多 5 项）"},null,8,["modelValue"]),u("p",Cf,[K(" 已选 "+O(a.value.length)+" 项：",1),u("code",null,O(a.value.join(", ")||"（空）"),1)])]))}}),zf=Object.freeze(Object.defineProperty({__proto__:null,default:Tf},Symbol.toStringTag,{value:"Module"})),Pf={class:"select-remote"},Lf={class:"select-remote__tip"},Bf=C({__name:"remote",setup(n){const a=[{value:"vuejs/core",label:"vuejs/core"},{value:"vuejs/vitepress",label:"vuejs/vitepress"},{value:"vitejs/vite",label:"vitejs/vite"},{value:"vueuse/vueuse",label:"vueuse/vueuse"},{value:"vitest-dev/vitest",label:"vitest-dev/vitest"},{value:"pnpm/pnpm",label:"pnpm/pnpm"}],t=x(null),e=x(!1),o=x([]);async function s(r){if(!r)return o.value=[],[];e.value=!0;try{const p=await new Promise(d=>{setTimeout(()=>{d(a.filter(m=>{var f;return(f=m.label)==null?void 0:f.includes(r)}))},400)});return o.value=p,p}finally{e.value=!1}}return(r,p)=>(i(),c("div",Pf,[k(l(sn),{modelValue:t.value,"onUpdate:modelValue":p[0]||(p[0]=d=>t.value=d),options:o.value,loading:e.value,filterable:"",remote:"",clearable:"","remote-method":s,placeholder:"搜索仓库，如 vue"},null,8,["modelValue","options","loading"]),u("p",Lf,[p[1]||(p[1]=K(" 输入 ",-1)),p[2]||(p[2]=u("code",null,"v",-1)),p[3]||(p[3]=K(" 试试；当前值：",-1)),u("code",null,O(t.value??"（空）"),1)])]))}}),Mf=Object.freeze(Object.defineProperty({__proto__:null,default:Bf},Symbol.toStringTag,{value:"Module"})),Vf={class:"select-slots"},Of=["onClick"],If=C({__name:"slots",setup(n){const a=x(["fe"]),t=x([{value:"fe",label:"前端"},{value:"be",label:"后端"}]);function e(){const o=t.value.length+1;t.value=[...t.value,{value:`role-${o}`,label:`自定义角色 ${o}`}]}return(o,s)=>(i(),c("div",Vf,[k(l(sn),{modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=r=>a.value=r),options:t.value,multiple:"",clearable:"",block:"",placeholder:"自定义每一项与空态"},{tag:v(({label:r,value:p,remove:d})=>[u("span",{class:"select-slots__tag",onClick:Je(m=>d(p),["stop"])},[s[1]||(s[1]=u("i",{class:"select-slots__dot"},null,-1)),K(" "+O(r),1)],8,Of)]),footer:v(()=>[k(l(ve),{size:"small",type:"primary",onClick:e},{default:v(()=>[...s[2]||(s[2]=[K(" 新增一个角色 ",-1)])]),_:1})]),empty:v(()=>[...s[3]||(s[3]=[u("span",{class:"select-slots__empty"},"没有匹配的角色",-1)])]),_:1},8,["modelValue","options"])]))}}),Af=Object.freeze(Object.defineProperty({__proto__:null,default:If},Symbol.toStringTag,{value:"Module"})),Ef=C({__name:"basic",setup(n){const a=x(!0);return(t,e)=>(i(),c(U,null,[k(l(ve),{onClick:e[0]||(e[0]=o=>a.value=!a.value)},{default:v(()=>[K(O(a.value?"加载完成":"重新加载"),1)]),_:1}),k(l(it),{loading:a.value,style:{"margin-top":"16px"}},{template:v(()=>[k(l(it),{variant:"avatar"}),k(l(it),{variant:"title"}),k(l(it),{rows:3})]),default:v(()=>[e[1]||(e[1]=u("article",{class:"doc"},[u("h3",null,"柔光几何设计语言"),u("p",null," 以暮光紫为主色，配合柔和圆角与低饱和中性色，营造会呼吸的界面节奏， 让信息层级在安静中自然浮现。 ")],-1))]),_:1},8,["loading"])],64))}}),jf=se(Ef,[["__scopeId","data-v-627130bb"]]),Rf=Object.freeze(Object.defineProperty({__proto__:null,default:jf},Symbol.toStringTag,{value:"Module"})),Ff=C({__name:"combine",setup(n){const a=x(!0);return(t,e)=>(i(),c(U,null,[k(l(ve),{size:"small",onClick:e[0]||(e[0]=o=>a.value=!a.value)},{default:v(()=>[...e[1]||(e[1]=[K(" 切换状态 ",-1)])]),_:1}),k(l(it),{loading:a.value,style:{"margin-top":"16px"}},{template:v(()=>[k(l(it),{variant:"avatar"}),k(l(it),{variant:"title"}),k(l(it),{rows:2})]),default:v(()=>[e[2]||(e[2]=u("div",{class:"profile"},[u("div",{class:"avatar"},"A"),u("div",{class:"meta"},[u("strong",null,"安琪 · 产品经理"),u("span",null,"负责设计系统演进与组件规范落地")])],-1))]),_:1},8,["loading"])],64))}}),Df=se(Ff,[["__scopeId","data-v-563c30e0"]]),Nf=Object.freeze(Object.defineProperty({__proto__:null,default:Df},Symbol.toStringTag,{value:"Module"})),Hf={class:"list",style:{"margin-top":"16px"}},Uf=C({__name:"list",setup(n){const a=x(!0),t=[{title:"栅格系统的 8 点基准",desc:"以 8px 为节奏单位，让间距形成可预期的层级。"},{title:"圆角的语义",desc:"不同圆角半径对应不同亲密程度，而非随意取值。"},{title:"低饱和中性色",desc:"用灰阶建立纵深，让品牌色成为唯一焦点。"}];return(e,o)=>(i(),c(U,null,[k(l(ve),{size:"small",onClick:o[0]||(o[0]=s=>a.value=!a.value)},{default:v(()=>[K(O(a.value?"加载完成":"重新加载"),1)]),_:1}),u("div",Hf,[a.value?(i(),N(l(it),{key:0,rows:3})):(i(),c(U,{key:1},ge(t,s=>u("div",{key:s.title,class:"card"},[u("h4",null,O(s.title),1),u("p",null,O(s.desc),1)])),64))])],64))}}),Wf=se(Uf,[["__scopeId","data-v-874dd199"]]),qf=Object.freeze(Object.defineProperty({__proto__:null,default:Wf},Symbol.toStringTag,{value:"Module"})),Gf=C({__name:"basic",setup(n){return(a,t)=>(i(),N(l(tt),null,{default:v(()=>[k(l(ve),{type:"primary"},{default:v(()=>[...t[0]||(t[0]=[K(" 确定 ",-1)])]),_:1}),k(l(ve),null,{default:v(()=>[...t[1]||(t[1]=[K("取消",-1)])]),_:1})]),_:1}))}}),Yf=Object.freeze(Object.defineProperty({__proto__:null,default:Gf},Symbol.toStringTag,{value:"Module"})),Xf=C({__name:"split",setup(n){return(a,t)=>(i(),N(l(tt),{split:"",size:"medium"},{split:v(()=>[k(l($t),{direction:"vertical"})]),default:v(()=>[t[0]||(t[0]=u("span",null,"首页",-1)),t[1]||(t[1]=u("span",null,"组件",-1)),t[2]||(t[2]=u("span",null,"主题",-1))]),_:1}))}}),Zf=Object.freeze(Object.defineProperty({__proto__:null,default:Xf},Symbol.toStringTag,{value:"Module"})),Jf=C({__name:"vertical",setup(n){return(a,t)=>(i(),N(l(tt),{direction:"vertical",size:"medium"},{default:v(()=>[k(l(ve),{type:"primary"},{default:v(()=>[...t[0]||(t[0]=[K(" 第一行 ",-1)])]),_:1}),k(l(ve),null,{default:v(()=>[...t[1]||(t[1]=[K("第二行",-1)])]),_:1}),k(l(ve),null,{default:v(()=>[...t[2]||(t[2]=[K("第三行",-1)])]),_:1})]),_:1}))}}),Qf=Object.freeze(Object.defineProperty({__proto__:null,default:Jf},Symbol.toStringTag,{value:"Module"})),em=C({__name:"basic",setup(n){const a=x([{date:"2024-01-01",name:"张三",address:"北京市海淀区"},{date:"2024-01-02",name:"李四",address:"上海市浦东新区"},{date:"2024-01-03",name:"王五",address:"广州市天河区"}]);return(t,e)=>(i(),N(l(cn),{data:a.value,"row-key":"name",border:""},{default:v(()=>[k(l(Qe),{prop:"date",label:"日期",width:"140"}),k(l(Qe),{prop:"name",label:"姓名",width:"120"},{default:v(({row:o})=>[u("strong",null,O(o.name),1)]),_:1}),k(l(Qe),{prop:"address",label:"地址"})]),_:1},8,["data"]))}}),tm=Object.freeze(Object.defineProperty({__proto__:null,default:em},Symbol.toStringTag,{value:"Module"})),nm=C({__name:"pagination",setup(n){const a=x(Array.from({length:45},(t,e)=>({id:e+1,name:`员工 ${e+1}`,dept:["研发","设计","产品","运营"][e%4]})));return(t,e)=>(i(),N(l(cn),{data:a.value,"row-key":"id",border:"",pagination:{pageSize:10,pageSizes:[10,20,50],layout:"prev, pager, next, jumper, sizes, total"}},{default:v(()=>[k(l(Qe),{prop:"id",label:"ID",width:"80"}),k(l(Qe),{prop:"name",label:"姓名",width:"140"}),k(l(Qe),{prop:"dept",label:"部门"})]),_:1},8,["data"]))}}),am=Object.freeze(Object.defineProperty({__proto__:null,default:nm},Symbol.toStringTag,{value:"Module"})),lm={class:"demo-selection"},om={class:"demo-tip"},sm=C({__name:"selection",setup(n){const a=x(Array.from({length:23},(o,s)=>({id:s+1,name:`用户 ${s+1}`,score:60+s*7%40}))),t=x([]),e=g(()=>t.value.length);return(o,s)=>(i(),c("div",lm,[u("p",om,"已选 "+O(e.value)+" 项（跨页保留，依赖 rowKey）",1),k(l(cn),{data:a.value,"row-key":"id",selection:t.value,border:"",pagination:{pageSize:10,pageSizes:[10,20]}},{default:v(()=>[k(l(Qe),{type:"selection",width:"60"}),k(l(Qe),{prop:"id",label:"ID",width:"80"}),k(l(Qe),{prop:"name",label:"姓名"}),k(l(Qe),{prop:"score",label:"分数",width:"100"})]),_:1},8,["data","selection"])]))}}),im=se(sm,[["__scopeId","data-v-795b7322"]]),rm=Object.freeze(Object.defineProperty({__proto__:null,default:im},Symbol.toStringTag,{value:"Module"})),um=C({__name:"sort",setup(n){const a=x([{name:"张三",age:30,city:"北京"},{name:"李四",age:20,city:"上海"},{name:"王五",age:25,city:"广州"},{name:"赵六",age:35,city:"深圳"}]);function t(e){return e.city}return(e,o)=>(i(),N(l(cn),{data:a.value,"row-key":"name",border:""},{default:v(()=>[k(l(Qe),{prop:"name",label:"姓名",width:"120"}),k(l(Qe),{prop:"age",label:"年龄",width:"100",sortable:""}),k(l(Qe),{prop:"city",label:"城市",width:"120",sortable:"","sort-by":t}),k(l(Qe),{prop:"city",label:"备注"})]),_:1},8,["data"]))}}),cm=Object.freeze(Object.defineProperty({__proto__:null,default:um},Symbol.toStringTag,{value:"Module"})),dm=C({__name:"basic",setup(n){const a=x("profile");return(t,e)=>(i(),N(l(It),{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=o=>a.value=o)},{default:v(()=>[k(l(Xe),{name:"profile"},{label:v(()=>[...e[1]||(e[1]=[u("span",{class:"demo-tab-icon"},[u("svg",{viewBox:"0 0 24 24",width:"15",height:"15","aria-hidden":"true"},[u("path",{d:"M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-4 0-7 2-7 5v1h14v-1c0-3-3-5-7-5z",fill:"currentColor"})]),K(" 用户 ")],-1)])]),_:1}),k(l(Xe),{name:"security",label:"安全"},{default:v(()=>[...e[2]||(e[2]=[K(" 安全设置内容 ",-1)])]),_:1}),k(l(Xe),{name:"notify",label:"通知"},{default:v(()=>[...e[3]||(e[3]=[K(" 通知偏好内容 ",-1)])]),_:1}),k(l(Xe),{name:"billing",label:"账单"},{default:v(()=>[...e[4]||(e[4]=[K(" 账单与发票内容 ",-1)])]),_:1})]),_:1},8,["modelValue"]))}}),pm=Object.freeze(Object.defineProperty({__proto__:null,default:dm},Symbol.toStringTag,{value:"Module"})),vm=C({__name:"card",setup(n){const a=x("order");return(t,e)=>(i(),N(l(It),{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=o=>a.value=o),type:"card"},{default:v(()=>[k(l(Xe),{name:"order",label:"订单"},{default:v(()=>[...e[1]||(e[1]=[K(" 订单列表 ",-1)])]),_:1}),k(l(Xe),{name:"refund",label:"退款"},{default:v(()=>[...e[2]||(e[2]=[K(" 退款记录 ",-1)])]),_:1}),k(l(Xe),{name:"review",label:"评价"},{default:v(()=>[...e[3]||(e[3]=[K(" 我的评价 ",-1)])]),_:1})]),_:1},8,["modelValue"]))}}),fm=Object.freeze(Object.defineProperty({__proto__:null,default:vm},Symbol.toStringTag,{value:"Module"})),mm=C({__name:"editable",setup(n){const a=x([{name:"tab1",label:"标签一",content:"内容一"},{name:"tab2",label:"标签二",content:"内容二"},{name:"tab3",label:"标签三",content:"内容三"}]),t=x("tab1");let e=3;function o(){e+=1;const r=`tab${e}`;a.value.push({name:r,label:`标签${e}`,content:`内容${e}`}),t.value=r}function s(r){const p=a.value.findIndex(d=>d.name===r);if(p!==-1&&(a.value.splice(p,1),t.value===r)){const d=a.value[p]??a.value[p-1];t.value=d?d.name:""}}return(r,p)=>(i(),N(l(It),{modelValue:t.value,"onUpdate:modelValue":p[0]||(p[0]=d=>t.value=d),editable:"",onTabAdd:o,onTabRemove:s},{default:v(()=>[(i(!0),c(U,null,ge(a.value,d=>(i(),N(l(Xe),{key:d.name,name:d.name,label:d.label},{default:v(()=>[K(O(d.content),1)]),_:2},1032,["name","label"]))),128))]),_:1},8,["modelValue"]))}}),km=Object.freeze(Object.defineProperty({__proto__:null,default:mm},Symbol.toStringTag,{value:"Module"})),gm={class:"demo-position"},bm=C({__name:"position",setup(n){const a=x("a"),t=x("a");return(e,o)=>(i(),c("div",gm,[k(l(It),{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=s=>a.value=s),position:"left",class:"demo-position__col"},{default:v(()=>[k(l(Xe),{name:"a",label:"概览"},{default:v(()=>[...o[2]||(o[2]=[K(" 左侧 · 概览 ",-1)])]),_:1}),k(l(Xe),{name:"b",label:"成员"},{default:v(()=>[...o[3]||(o[3]=[K(" 左侧 · 成员 ",-1)])]),_:1}),k(l(Xe),{name:"c",label:"设置"},{default:v(()=>[...o[4]||(o[4]=[K(" 左侧 · 设置 ",-1)])]),_:1})]),_:1},8,["modelValue"]),k(l(It),{modelValue:t.value,"onUpdate:modelValue":o[1]||(o[1]=s=>t.value=s),position:"right",type:"segment",class:"demo-position__col"},{default:v(()=>[k(l(Xe),{name:"a",label:"消息"},{default:v(()=>[...o[5]||(o[5]=[K(" 右侧 · 消息 ",-1)])]),_:1}),k(l(Xe),{name:"b",label:"收藏"},{default:v(()=>[...o[6]||(o[6]=[K(" 右侧 · 收藏 ",-1)])]),_:1}),k(l(Xe),{name:"c",label:"历史"},{default:v(()=>[...o[7]||(o[7]=[K(" 右侧 · 历史 ",-1)])]),_:1})]),_:1},8,["modelValue"])]))}}),hm=Object.freeze(Object.defineProperty({__proto__:null,default:bm},Symbol.toStringTag,{value:"Module"})),ym=C({__name:"basic",setup(n){const a=x(["设计","开发","测试"]);return(t,e)=>(i(!0),c(U,null,ge(a.value,o=>(i(),N(l(Ye),{key:o,type:"primary",closable:"",onClose:s=>a.value=a.value.filter(r=>r!==o)},{default:v(()=>[K(O(o),1)]),_:2},1032,["onClose"]))),128))}}),_m=Object.freeze(Object.defineProperty({__proto__:null,default:ym},Symbol.toStringTag,{value:"Module"})),xm=C({__name:"effect",setup(n){return(a,t)=>(i(),c(U,null,[k(l(Ye),{type:"primary",effect:"dark"},{default:v(()=>[...t[0]||(t[0]=[K(" dark ",-1)])]),_:1}),k(l(Ye),{type:"primary",effect:"light"},{default:v(()=>[...t[1]||(t[1]=[K(" light ",-1)])]),_:1}),k(l(Ye),{type:"primary",effect:"plain"},{default:v(()=>[...t[2]||(t[2]=[K(" plain ",-1)])]),_:1}),k(l(Ye),{type:"success",round:"",bordered:""},{default:v(()=>[...t[3]||(t[3]=[K(" 胶囊 ",-1)])]),_:1}),k(l(Ye),{type:"danger",size:"large"},{default:v(()=>[...t[4]||(t[4]=[K(" 大号 ",-1)])]),_:1}),k(l(Ye),{type:"info",size:"small"},{default:v(()=>[...t[5]||(t[5]=[K(" 小号 ",-1)])]),_:1})],64))}}),wm=Object.freeze(Object.defineProperty({__proto__:null,default:xm},Symbol.toStringTag,{value:"Module"})),$m=C({__name:"type",setup(n){return(a,t)=>(i(),c(U,null,[k(l(Ye),{type:"primary"},{default:v(()=>[...t[0]||(t[0]=[K(" 主要 ",-1)])]),_:1}),k(l(Ye),{type:"success"},{default:v(()=>[...t[1]||(t[1]=[K(" 成功 ",-1)])]),_:1}),k(l(Ye),{type:"warning"},{default:v(()=>[...t[2]||(t[2]=[K(" 警告 ",-1)])]),_:1}),k(l(Ye),{type:"danger"},{default:v(()=>[...t[3]||(t[3]=[K(" 危险 ",-1)])]),_:1}),k(l(Ye),{type:"info"},{default:v(()=>[...t[4]||(t[4]=[K(" 信息 ",-1)])]),_:1}),k(l(Ye),null,{default:v(()=>[...t[5]||(t[5]=[K("默认",-1)])]),_:1})],64))}}),Sm=Object.freeze(Object.defineProperty({__proto__:null,default:$m},Symbol.toStringTag,{value:"Module"})),Km=C({__name:"basic",setup(n){const a=x([]);function t(e){return new Promise(o=>{let s=0;const r=setInterval(()=>{var p;s+=20,e.onProgress({percent:s}),s>=100&&(clearInterval(r),o({url:`https://example.com/${((p=e.file)==null?void 0:p.name)??"file"}`}))},120)})}return(e,o)=>(i(),N(l(rn),{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=s=>a.value=s),"http-request":t,limit:3,accept:".png,.jpg,.jpeg,.pdf",tip:"支持任意文件，最多 3 个；点击触发选择框"},null,8,["modelValue"]))}}),Cm=Object.freeze(Object.defineProperty({__proto__:null,default:Km},Symbol.toStringTag,{value:"Module"})),Tm=C({__name:"drag",setup(n){const a=x([]);function t(e){return new Promise(o=>{let s=0;const r=setInterval(()=>{var p;s+=25,e.onProgress({percent:s}),s>=100&&(clearInterval(r),o({url:`https://example.com/${((p=e.file)==null?void 0:p.name)??"file"}`}))},100)})}return(e,o)=>(i(),N(l(rn),{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=s=>a.value=s),drag:"",multiple:"","http-request":t,accept:"image/*",tip:"把文件拖到虚线区域即可上传，支持多文件"},null,8,["modelValue"]))}}),zm=Object.freeze(Object.defineProperty({__proto__:null,default:Tm},Symbol.toStringTag,{value:"Module"})),Pm={key:0,class:"upload-tip"},Lm=C({__name:"manual",setup(n){const a=x([]),t=x(null),e=x("");async function o(r){return!r.raw||!r.raw.type.startsWith("image/")?(e.value=`「${r.name}」不是图片，已拦截`,!1):r.size>2*1024*1024?(e.value=`「${r.name}」超过 2MB，已拦截`,!1):(e.value="",!0)}function s(){var r;(r=t.value)==null||r.submit()}return(r,p)=>(i(),c("div",null,[k(l(rn),{ref_key:"uploadRef",ref:t,modelValue:a.value,"onUpdate:modelValue":p[0]||(p[0]=d=>a.value=d),"auto-upload":!1,"before-upload":o,accept:"image/*",tip:"选好文件后点击「提交」才开始上传（仅允许图片，≤2MB）"},null,8,["modelValue"]),e.value?(i(),c("p",Pm,O(e.value),1)):$("",!0),u("button",{class:"upload-submit",type:"button",onClick:s},"提交")]))}}),Bm=Object.freeze(Object.defineProperty({__proto__:null,default:Lm},Symbol.toStringTag,{value:"Module"})),Mm=C({__name:"picture-card",setup(n){const a=x([]);function t(e){return new Promise(o=>{let s=0;const r=setInterval(()=>{var p;s+=25,e.onProgress({percent:s}),s>=100&&(clearInterval(r),o({url:`https://example.com/${((p=e.file)==null?void 0:p.name)??"file"}`}))},100)})}return(e,o)=>(i(),N(l(rn),{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=s=>a.value=s),"list-type":"picture-card","http-request":t,accept:"image/*",limit:6,tip:"卡片式图片上传，hover 出现预览 / 删除操作"},null,8,["modelValue"]))}}),Vm=Object.freeze(Object.defineProperty({__proto__:null,default:Mm},Symbol.toStringTag,{value:"Module"})),Om=C({__name:"basic",setup(n){return(a,t)=>(i(),N(l(Cn),{content:"KK UI 内部资料",rotate:-22},{default:v(()=>[...t[0]||(t[0]=[u("div",{class:"doc"},[u("h3",null,"年度设计复盘"),u("p",null," 本季度我们完成了组件库从 0 到 1 的搭建，统一了 4 套主题下的视觉语言。 下一步将聚焦无障碍与性能预算。 "),u("p",null," 水印以 0.15 不透明度覆盖在内容上，且 `pointer-events: none`， 不影响正文的选择与复制。 ")],-1)])]),_:1}))}}),Im=se(Om,[["__scopeId","data-v-ea1798d3"]]),Am=Object.freeze(Object.defineProperty({__proto__:null,default:Im},Symbol.toStringTag,{value:"Module"})),Em=C({__name:"image",setup(n){return(a,t)=>(i(),N(l(Cn),{image:"https://placehold.co/48x48/5b4fe9/ffffff?text=KK","image-width":48,"image-height":48,gap:[120,120],opacity:.25},{default:v(()=>[...t[0]||(t[0]=[u("div",{class:"doc"},[u("h3",null,"对外发布稿"),u("p",null," 使用图片水印时，`image` 优先级高于 `content`； 若图片加载失败则静默跳过，不会阻塞页面渲染。 ")],-1)])]),_:1}))}}),jm=se(Em,[["__scopeId","data-v-a2cc6cf5"]]),Rm=Object.freeze(Object.defineProperty({__proto__:null,default:jm},Symbol.toStringTag,{value:"Module"})),Fm=C({__name:"slot",setup(n){return(a,t)=>(i(),N(l(Cn),{rotate:-15,opacity:.2},{content:v(()=>[...t[0]||(t[0]=[K(" 机密 · 仅限内部传阅 ",-1)])]),default:v(()=>[t[1]||(t[1]=u("div",{class:"doc"},[u("h3",null,"保密文档"),u("p",null,"下方 #content 插槽的文本会取代 content 属性绘制到水印上。")],-1))]),_:1}))}}),Dm=se(Fm,[["__scopeId","data-v-1ba6cc27"]]),Nm=Object.freeze(Object.defineProperty({__proto__:null,default:Dm},Symbol.toStringTag,{value:"Module"})),Hm=`<script setup lang="ts">
import { KkButton } from 'kk-ui'
<\/script>

<template>
  <KkButton type="primary"> 主要按钮 </KkButton>
  <KkButton>默认按钮</KkButton>
  <KkButton type="text"> 文字按钮 </KkButton>
</template>
`,Um=`<script setup lang="ts">
import { KkButton } from 'kk-ui'
<\/script>

<template>
  <div style="width: 100%">
    <KkButton type="primary" block> 块级按钮 </KkButton>
  </div>
</template>
`,Wm=`<script setup lang="ts">
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
`,qm=`<script setup lang="ts">
import { KkButton } from 'kk-ui'
<\/script>

<template>
  <KkButton type="primary" size="small"> Small </KkButton>
  <KkButton type="primary"> Medium </KkButton>
  <KkButton type="primary" size="large"> Large </KkButton>
</template>
`,Gm=`<script setup lang="ts">
import { KkButton } from 'kk-ui'
<\/script>

<template>
  <KkButton type="primary" loading> 加载中 </KkButton>
  <KkButton type="primary" disabled> 禁用 </KkButton>
  <KkButton type="default" disabled> 默认禁用 </KkButton>
</template>
`,Ym=`<script setup lang="ts">
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
`,Xm=`<script setup lang="ts">
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
`,Zm=`<script setup lang="ts">
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
`,Jm=`<script setup lang="ts">
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
`,Qm=`<script setup lang="ts">
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
`,ek=`<script setup lang="ts">
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
`,tk=`<script setup lang="ts">
import { KkContainer } from 'kk-ui'

const sizes = ['small', 'medium', 'large'] as const
<\/script>

<template>
  <div class="switch">
    <span>选择宽度档位：</span>
    <code v-for="s in sizes" :key="s">{{ s }}</code>
  </div>

  <KkContainer size="medium" padding="large" bordered style="margin-top: 12px">
    <h3>发布流程看板</h3>
    <p>
      把主内容限制在 960px 并居中，长文阅读时两侧留白更舒适， 也更易于在宽屏上聚焦。
    </p>
  </KkContainer>
</template>

<style scoped>
.switch {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--kk-text-secondary);
}
.switch code {
  padding: 2px 8px;
  border-radius: 6px;
  background: var(--kk-color-primary-soft);
  color: var(--kk-color-primary);
  font-family: var(--kk-font-mono);
  font-size: 12px;
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
`,nk=`<script setup lang="ts">
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
`,ak=`<script setup lang="ts">
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
`,lk=`<script setup lang="ts">
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
`,ok=`<script setup lang="ts">
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
`,sk=`<script setup lang="ts">
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
`,ik=`<script setup lang="ts">
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
`,rk=`<script setup lang="ts">
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
`,uk=`<script setup lang="ts">
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
`,ck=`<script setup lang="ts">
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
`,dk=`<script setup lang="ts">
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
`,pk=`<script setup lang="ts">
import { KkIcon } from 'kk-ui'
<\/script>

<template>
  <KkIcon name="lucide:home" />
  <KkIcon name="lucide:heart" />
  <KkIcon name="lucide:settings" />
</template>
`,vk=`<script setup lang="ts">
import { KkIcon } from 'kk-ui'
<\/script>

<template>
  <KkIcon name="lucide:heart" color="#EF4444" size="24" />
  <KkIcon name="lucide:check-circle" color="#16A34A" size="24" />
  <KkIcon name="lucide:bell" color="#F59E0B" size="24" />
  <KkIcon name="lucide:loader" spin size="24" />
</template>
`,fk=`<script setup lang="ts">
import { KkIcon } from 'kk-ui'
<\/script>

<template>
  <KkIcon name="lucide:star" size="small" />
  <KkIcon name="lucide:star" />
  <KkIcon name="lucide:star" size="large" />
  <KkIcon name="lucide:star" :size="32" />
  <KkIcon name="lucide:star" size="2em" />
</template>
`,mk=`<script setup lang="ts">
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
`,kk=`<script setup lang="ts">
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
`,gk=`<script setup lang="ts">
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
`,bk=`<script setup lang="ts">
import {
  KkLayout,
  KkLayoutHeader,
  KkLayoutSider,
  KkLayoutContent,
  KkLayoutFooter,
} from 'kk-ui'
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
          <div class="nav-item is-active">概览</div>
          <div class="nav-item">组件</div>
          <div class="nav-item">主题</div>
        </div>
      </KkLayoutSider>

      <KkLayoutContent>
        <h3>概览</h3>
        <p>这里是页面的主要内容区域，超出高度时内部滚动。</p>
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
  padding: 8px 12px;
  border-radius: var(--kk-radius-sm);
  color: var(--kk-text-secondary);
  cursor: pointer;
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
}
</style>
`,hk=`<script setup lang="ts">
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
`,yk=`<script setup lang="ts">
import { ref } from 'vue'
import { KkLayout, KkLayoutHeader, KkLayoutSider, KkLayoutContent } from 'kk-ui'
import { KkButton } from 'kk-ui'

const collapsed = ref(false)
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
          <div class="nav-item is-active">指南</div>
          <div class="nav-item">组件</div>
          <div class="nav-item">主题</div>
        </div>
      </KkLayoutSider>

      <KkLayoutContent>
        <p>侧边栏收起后宽度收窄为 {{ collapsed ? 56 : 200 }}px，触发器位于底部。</p>
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
  padding: 8px 12px;
  border-radius: var(--kk-radius-sm);
  color: var(--kk-text-secondary);
}
.nav-item.is-active {
  background: var(--kk-color-primary-soft);
  color: var(--kk-color-primary);
}
p {
  margin: 0;
  color: var(--kk-text-secondary);
}
</style>
`,_k=`<script setup lang="ts">
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
`,xk=`<script setup lang="ts">
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
`,wk=`<script setup lang="ts">
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
`,$k=`<script setup lang="ts">
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
`,Sk=`<script setup lang="ts">
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
`,Kk=`<script setup lang="ts">
import { ref } from 'vue'
import { KkPagination } from 'kk-ui'

const current = ref(1)
<\/script>

<template>
  <KkPagination v-model:current-page="current" :total="200" :page-size="10" />
</template>
`,Ck=`<script setup lang="ts">
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
`,Tk=`<script setup lang="ts">
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
`,zk=`<script setup lang="ts">
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
`,Pk=`<script setup lang="ts">
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
`,Lk=`<script setup lang="ts">
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
`,Bk=`<script setup lang="ts">
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
`,Mk=`<script setup lang="ts">
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
`,Vk=`<script setup lang="ts">
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
`,Ok=`<script setup lang="ts">
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
`,Ik=`<script setup lang="ts">
import { KkButton, KkSpace } from 'kk-ui'
<\/script>

<template>
  <KkSpace>
    <KkButton type="primary"> 确定 </KkButton>
    <KkButton>取消</KkButton>
  </KkSpace>
</template>
`,Ak=`<script setup lang="ts">
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
`,Ek=`<script setup lang="ts">
import { KkButton, KkSpace } from 'kk-ui'
<\/script>

<template>
  <KkSpace direction="vertical" size="medium">
    <KkButton type="primary"> 第一行 </KkButton>
    <KkButton>第二行</KkButton>
    <KkButton>第三行</KkButton>
  </KkSpace>
</template>
`,jk=`<script setup lang="ts">
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
`,Rk=`<script setup lang="ts">
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
`,Fk=`<script setup lang="ts">
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
`,Dk=`<script setup lang="ts">
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
`,Nk=`<script setup lang="ts">
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
`,Hk=`<script setup lang="ts">
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
`,Uk=`<script setup lang="ts">
import { ref } from 'vue'
import { KkTabs, KkTabPane, type TabName } from 'kk-ui'

interface TabItem {
  name: string
  label: string
  content: string
}

const tabs = ref<TabItem[]>([
  { name: 'tab1', label: '标签一', content: '内容一' },
  { name: 'tab2', label: '标签二', content: '内容二' },
  { name: 'tab3', label: '标签三', content: '内容三' },
])
const active = ref('tab1')
let seed = 3

function onAdd(): void {
  seed += 1
  const name = \`tab\${seed}\`
  tabs.value.push({ name, label: \`标签\${seed}\`, content: \`内容\${seed}\` })
  active.value = name
}

function onRemove(name: TabName): void {
  const idx = tabs.value.findIndex((t) => t.name === name)
  if (idx === -1) return
  tabs.value.splice(idx, 1)
  if (active.value === name) {
    const next = tabs.value[idx] ?? tabs.value[idx - 1]
    active.value = next ? next.name : ''
  }
}
<\/script>

<template>
  <KkTabs v-model="active" editable @tab-add="onAdd" @tab-remove="onRemove">
    <KkTabPane v-for="tab in tabs" :key="tab.name" :name="tab.name" :label="tab.label">
      {{ tab.content }}
    </KkTabPane>
  </KkTabs>
</template>
`,Wk=`<script setup lang="ts">
import { ref } from 'vue'
import { KkTabs, KkTabPane } from 'kk-ui'

const left = ref('a')
const right = ref('a')
<\/script>

<template>
  <div class="demo-position">
    <KkTabs v-model="left" position="left" class="demo-position__col">
      <KkTabPane name="a" label="概览"> 左侧 · 概览 </KkTabPane>
      <KkTabPane name="b" label="成员"> 左侧 · 成员 </KkTabPane>
      <KkTabPane name="c" label="设置"> 左侧 · 设置 </KkTabPane>
    </KkTabs>

    <KkTabs v-model="right" position="right" type="segment" class="demo-position__col">
      <KkTabPane name="a" label="消息"> 右侧 · 消息 </KkTabPane>
      <KkTabPane name="b" label="收藏"> 右侧 · 收藏 </KkTabPane>
      <KkTabPane name="c" label="历史"> 右侧 · 历史 </KkTabPane>
    </KkTabs>
  </div>
</template>

<style>
.demo-position {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
}

.demo-position__col {
  min-height: 160px;
  flex: 1;
  min-width: 240px;
}
</style>
`,qk=`<script setup lang="ts">
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
`,Gk=`<script setup lang="ts">
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
`,Yk=`<script setup lang="ts">
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
`,Xk=`<script setup lang="ts">
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
`,Zk=`<script setup lang="ts">
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
`,Jk=`<script setup lang="ts">
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
`,Qk=`<script setup lang="ts">
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
`,eg=`<script setup lang="ts">
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
`,tg=`<script setup lang="ts">
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
`,ng=`<script setup lang="ts">
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
`,ag={class:"kk-demo"},lg={key:0,class:"kk-demo__head"},og={key:0,class:"kk-demo__title"},sg={key:1,class:"kk-demo__desc"},ig={key:1,class:"kk-demo__error"},rg={key:1,class:"kk-demo__bar"},ug=["innerHTML"],cg=C({__name:"Demo",props:{src:{default:""},title:{default:""},desc:{default:""},column:{type:Boolean,default:!1},defaultOpen:{type:Boolean,default:!1}},setup(n){const a=n,t=Object.assign({"../../../components/demos/button/basic.vue":Tp,"../../../components/demos/button/block.vue":Lp,"../../../components/demos/button/icon.vue":Mp,"../../../components/demos/button/size.vue":Op,"../../../components/demos/button/status.vue":Ap,"../../../components/demos/button/type.vue":jp,"../../../components/demos/card/basic.vue":Dp,"../../../components/demos/card/variant.vue":Up,"../../../components/demos/cascader/basic.vue":Gp,"../../../components/demos/cascader/lazy.vue":Zp,"../../../components/demos/cascader/multiple.vue":ev,"../../../components/demos/container/basic.vue":lv,"../../../components/demos/container/sections.vue":iv,"../../../components/demos/divider/basic.vue":cv,"../../../components/demos/divider/vertical.vue":pv,"../../../components/demos/drawer/basic.vue":fv,"../../../components/demos/drawer/footer.vue":gv,"../../../components/demos/drawer/placement.vue":hv,"../../../components/demos/drawer/resizable.vue":xv,"../../../components/demos/form/basic.vue":Kv,"../../../components/demos/form/label-position.vue":Tv,"../../../components/demos/form/rules.vue":Pv,"../../../components/demos/icon/basic.vue":Bv,"../../../components/demos/icon/color.vue":Vv,"../../../components/demos/icon/size.vue":Iv,"../../../components/demos/input/affix.vue":Ev,"../../../components/demos/input/basic.vue":Rv,"../../../components/demos/input/size.vue":Dv,"../../../components/demos/layout/basic.vue":Uv,"../../../components/demos/layout/grid.vue":Gv,"../../../components/demos/layout/sider.vue":Jv,"../../../components/demos/modal/advanced.vue":tf,"../../../components/demos/modal/basic.vue":af,"../../../components/demos/modal/draggable.vue":sf,"../../../components/demos/modal/footer.vue":uf,"../../../components/demos/modal/slots.vue":vf,"../../../components/demos/pagination/basic.vue":mf,"../../../components/demos/pagination/layout.vue":gf,"../../../components/demos/pagination/sizes.vue":hf,"../../../components/demos/select/basic.vue":Sf,"../../../components/demos/select/multiple.vue":zf,"../../../components/demos/select/remote.vue":Mf,"../../../components/demos/select/slots.vue":Af,"../../../components/demos/skeleton/basic.vue":Rf,"../../../components/demos/skeleton/combine.vue":Nf,"../../../components/demos/skeleton/list.vue":qf,"../../../components/demos/space/basic.vue":Yf,"../../../components/demos/space/split.vue":Zf,"../../../components/demos/space/vertical.vue":Qf,"../../../components/demos/table/basic.vue":tm,"../../../components/demos/table/pagination.vue":am,"../../../components/demos/table/selection.vue":rm,"../../../components/demos/table/sort.vue":cm,"../../../components/demos/tabs/basic.vue":pm,"../../../components/demos/tabs/card.vue":fm,"../../../components/demos/tabs/editable.vue":km,"../../../components/demos/tabs/position.vue":hm,"../../../components/demos/tag/basic.vue":_m,"../../../components/demos/tag/effect.vue":wm,"../../../components/demos/tag/type.vue":Sm,"../../../components/demos/upload/basic.vue":Cm,"../../../components/demos/upload/drag.vue":zm,"../../../components/demos/upload/manual.vue":Bm,"../../../components/demos/upload/picture-card.vue":Vm,"../../../components/demos/watermark/basic.vue":Am,"../../../components/demos/watermark/image.vue":Rm,"../../../components/demos/watermark/slot.vue":Nm}),e=Object.assign({"../../../components/demos/button/basic.vue":Hm,"../../../components/demos/button/block.vue":Um,"../../../components/demos/button/icon.vue":Wm,"../../../components/demos/button/size.vue":qm,"../../../components/demos/button/status.vue":Gm,"../../../components/demos/button/type.vue":Ym,"../../../components/demos/card/basic.vue":Xm,"../../../components/demos/card/variant.vue":Zm,"../../../components/demos/cascader/basic.vue":Jm,"../../../components/demos/cascader/lazy.vue":Qm,"../../../components/demos/cascader/multiple.vue":ek,"../../../components/demos/container/basic.vue":tk,"../../../components/demos/container/sections.vue":nk,"../../../components/demos/divider/basic.vue":ak,"../../../components/demos/divider/vertical.vue":lk,"../../../components/demos/drawer/basic.vue":ok,"../../../components/demos/drawer/footer.vue":sk,"../../../components/demos/drawer/placement.vue":ik,"../../../components/demos/drawer/resizable.vue":rk,"../../../components/demos/form/basic.vue":uk,"../../../components/demos/form/label-position.vue":ck,"../../../components/demos/form/rules.vue":dk,"../../../components/demos/icon/basic.vue":pk,"../../../components/demos/icon/color.vue":vk,"../../../components/demos/icon/size.vue":fk,"../../../components/demos/input/affix.vue":mk,"../../../components/demos/input/basic.vue":kk,"../../../components/demos/input/size.vue":gk,"../../../components/demos/layout/basic.vue":bk,"../../../components/demos/layout/grid.vue":hk,"../../../components/demos/layout/sider.vue":yk,"../../../components/demos/modal/advanced.vue":_k,"../../../components/demos/modal/basic.vue":xk,"../../../components/demos/modal/draggable.vue":wk,"../../../components/demos/modal/footer.vue":$k,"../../../components/demos/modal/slots.vue":Sk,"../../../components/demos/pagination/basic.vue":Kk,"../../../components/demos/pagination/layout.vue":Ck,"../../../components/demos/pagination/sizes.vue":Tk,"../../../components/demos/select/basic.vue":zk,"../../../components/demos/select/multiple.vue":Pk,"../../../components/demos/select/remote.vue":Lk,"../../../components/demos/select/slots.vue":Bk,"../../../components/demos/skeleton/basic.vue":Mk,"../../../components/demos/skeleton/combine.vue":Vk,"../../../components/demos/skeleton/list.vue":Ok,"../../../components/demos/space/basic.vue":Ik,"../../../components/demos/space/split.vue":Ak,"../../../components/demos/space/vertical.vue":Ek,"../../../components/demos/table/basic.vue":jk,"../../../components/demos/table/pagination.vue":Rk,"../../../components/demos/table/selection.vue":Fk,"../../../components/demos/table/sort.vue":Dk,"../../../components/demos/tabs/basic.vue":Nk,"../../../components/demos/tabs/card.vue":Hk,"../../../components/demos/tabs/editable.vue":Uk,"../../../components/demos/tabs/position.vue":Wk,"../../../components/demos/tag/basic.vue":qk,"../../../components/demos/tag/effect.vue":Gk,"../../../components/demos/tag/type.vue":Yk,"../../../components/demos/upload/basic.vue":Xk,"../../../components/demos/upload/drag.vue":Zk,"../../../components/demos/upload/manual.vue":Jk,"../../../components/demos/upload/picture-card.vue":Qk,"../../../components/demos/watermark/basic.vue":eg,"../../../components/demos/watermark/image.vue":tg,"../../../components/demos/watermark/slot.vue":ng}),o=x(""),s=x(a.defaultOpen),r=x(!1);let p;ul(L=>(o.value=L instanceof Error?L.message:String(L),!1));function d(L){if(!a.src)return;const I=a.src.replace(/^\.\//,"");return Object.keys(L).find(M=>M.endsWith(I))}const m=g(()=>{const L=d(t);return L?t[L].default:void 0}),f=g(()=>{const L=d(e);return L?e[L]:""}),_=/&/g,S=L=>L.replace(_,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function R(L){const I=/(<!--[\s\S]*?-->)|(<\/?[A-Za-z][\w-]*)|("[^"]*"|'[^']*')|([A-Za-z_@:#][\w-:@.]*(?=\s*=))/g;let M="",V=0,B;for(;(B=I.exec(L))!==null;){M+=S(L.slice(V,B.index));const H=B[1]?"cmt":B[2]?"tag":B[3]?"str":"attr";M+=`<span class="kk-code__${H}">${S(B[0])}</span>`,V=B.index+B[0].length}return M+S(L.slice(V))}const E=g(()=>R(f.value));function Z(L){window.dispatchEvent(new CustomEvent("kk-toast",{detail:L}))}async function J(){if(f.value)try{if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(f.value);else{const L=document.createElement("textarea");L.value=f.value,L.style.position="fixed",L.style.opacity="0",document.body.appendChild(L),L.select(),document.execCommand("copy"),document.body.removeChild(L)}r.value=!0,Z("已复制到剪贴板"),clearTimeout(p),p=setTimeout(()=>r.value=!1,1600)}catch{Z("复制失败，请手动选择代码")}}return(L,I)=>(i(),c("div",ag,[n.title||n.desc?(i(),c("div",lg,[n.title?(i(),c("div",og,O(n.title),1)):$("",!0),n.desc?(i(),c("div",sg,O(n.desc),1)):$("",!0)])):$("",!0),u("div",{class:h(["kk-demo__body",{"kk-demo__body--col":n.column}])},[m.value&&!o.value?(i(),N(et(m.value),{key:0})):o.value?(i(),c("pre",ig,"示例加载失败："+O(o.value),1)):y(L.$slots,"default",{},void 0,void 0,2)],2),f.value?(i(),c("div",rg,[u("button",{type:"button",onClick:I[0]||(I[0]=M=>s.value=!s.value)},[I[1]||(I[1]=u("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[u("path",{d:"m8 6-6 6 6 6M16 6l6 6-6 6"})],-1)),K(" "+O(s.value?"收起代码":"查看代码"),1)]),I[2]||(I[2]=u("div",{class:"kk-demo__spacer"},null,-1)),u("button",{type:"button",onClick:J},O(r.value?"已复制":"复制"),1)])):$("",!0),f.value?(i(),c("div",{key:2,class:h(["kk-demo__code",{"is-open":s.value}])},[u("pre",null,[u("code",{innerHTML:E.value},null,8,ug)])],2)):$("",!0)]))}}),dg={class:"kk-grid kk-grid--4"},pg=["onClick"],vg={class:"kk-theme-card__row"},fg={class:"kk-theme-card__meta"},mg={class:"kk-theme-card__name"},kg={class:"kk-theme-card__tag"},gg=C({__name:"ThemeGallery",setup(n){const a=[{name:"light",label:"Light",tag:"默认",page:"#F7F8FC",primary:"#5B4FE9",border:"#E0E3EC",container:"#FFFFFF"},{name:"dark",label:"Dark",tag:"暗色",page:"#0B0D12",primary:"#8B80FF",border:"#2A3040",container:"#1F242F"},{name:"soft",label:"Soft",tag:"柔光",page:"#FFF9FB",primary:"#E879A6",border:"#F5DDE7",container:"#FFFFFF"},{name:"cyber",label:"Cyber",tag:"赛博",page:"#05080F",primary:"#00E5FF",border:"#1E3A52",container:"#0C1220"}],{theme:t}=Tn(),e=x(!1);De(()=>{e.value=!0,Ra()||ut("light")});function o(s){ut(s)}return(s,r)=>(i(),c("div",dg,[(i(),c(U,null,ge(a,p=>u("button",{key:p.name,class:h(["kk-theme-card",{"is-active":e.value&&l(t)===p.name}]),type:"button",onClick:d=>o(p.name)},[u("div",{class:"kk-theme-card__preview",style:je({background:p.page})},[u("div",{class:"kk-theme-card__bar",style:je({background:p.primary,width:"60%"})},null,4),u("div",{class:"kk-theme-card__bar",style:je({background:p.border,width:"90%"})},null,4),u("div",vg,[u("div",{class:"kk-theme-card__chip",style:je({background:p.container,border:`1px solid ${p.border}`})},null,4),u("div",{class:"kk-theme-card__chip",style:je({background:p.primary})},null,4)])],4),u("div",fg,[u("span",mg,O(p.label),1),u("span",kg,O(p.tag),1)])],10,pg)),64))]))}}),hg={extends:qa,Layout:Kp,enhanceApp({app:n}){n.use(qs),n.component("Demo",cg),n.component("ThemeGallery",gg),n.component("Home",Si)}};export{hg as R,Si as _};
