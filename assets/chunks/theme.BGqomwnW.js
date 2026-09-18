import{d as K,o as i,c,n as g,u as l,r as y,a as $,m as Oe,b as m,_ as nl,w as Be,e as qe,f as _,g as bt,F as N,h as ve,i as U,j as Ta,k as al,l as r,p as S,t as z,q as Je,s as at,v as ln,x as qn,y as ht,z as et,A as De,B as ll,C as f,D as v,E as kt,G as Qe,H as Mt,T as on,I as sn,J as ot,K as va,L as Qt,M as rn,N as Xt,O as Zt,P as ol,Q as fa,R as Pt,S as re,U as Gn,V as sl,W as il,X as Bt,Y as jn,Z as Yn,$ as Xn,a0 as rl,a1 as ul,a2 as Vt,a3 as Sn,a4 as za,a5 as Dt,a6 as cl,a7 as dl,a8 as Pa,a9 as Kn,aa as pl,ab as La,ac as vl,ad as fl,ae as ml}from"./framework.DT0gx6UF.js";function Ae(a,n){const t=a;return t.install=e=>{const s=n||a.name;s&&e.component(s,t)},t}const ma="kk";function je(a){const n=`${ma}-${a}`,t=()=>n,e=h=>`${n}__${h}`,s=h=>`${n}--${h}`,o=(h,x)=>`${n}__${h}--${x}`,u=(h,x=!0)=>x?`is-${h}`:"",p=h=>`--${ma}-${h}`;return{b:t,e,m:s,em:o,is:u,cssVar:h=>`var(${p(h)})`,cssVarBlock:h=>`var(--${n}-${h})`,cssVarName:p}}const kl=["type","disabled","aria-disabled","aria-busy"],gl=K({name:"KkButton",inheritAttrs:!1,__name:"Button",props:{type:{default:"default"},size:{default:"medium"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},block:{type:Boolean,default:!1},nativeType:{default:"button"}},emits:["click"],setup(a,{emit:n}){const t=a,e=n,s=je("button"),o=m(()=>[s.b(),s.m(t.type),s.m(t.size),s.is("disabled",t.disabled),s.is("loading",t.loading),s.is("block",t.block)]);function u(p){if(t.disabled||t.loading){p.preventDefault(),p.stopPropagation();return}e("click",p)}return(p,d)=>(i(),c("button",Oe({class:o.value,type:a.nativeType,disabled:a.disabled||a.loading,"aria-disabled":a.disabled||a.loading,"aria-busy":a.loading},p.$attrs,{onClick:u}),[a.loading?(i(),c("span",{key:0,class:g(l(s).e("spinner")),"aria-hidden":"true"},null,2)):p.$slots.icon?(i(),c("span",{key:1,class:g(l(s).e("icon"))},[y(p.$slots,"icon")],2)):$("",!0),p.$slots.default?(i(),c("span",{key:2,class:g(l(s).e("text"))},[y(p.$slots,"default")],2)):$("",!0)],16,kl))}}),ke=Ae(gl,"KkButton"),en=new Map,Rn=[];function ka(a){const n={width:a.width??24,height:a.height??24};let t=0;for(const[e,s]of Object.entries(a.icons))en.set(`${a.prefix}:${e}`,{...n,...s}),t+=1;if(a.aliases)for(const[e,s]of Object.entries(a.aliases)){const o=a.icons[s.parent];o&&(en.set(`${a.prefix}:${e}`,{...n,...o,rotate:s.rotate??o.rotate,hFlip:s.hFlip??o.hFlip,vFlip:s.vFlip??o.vFlip}),t+=1)}return Rn.includes(a.prefix)||Rn.push(a.prefix),t}function ga(a){if(!a)return;const n=en.get(a);if(n)return n;if(!a.includes(":"))for(const t of Rn){const e=en.get(`${t}:${a}`);if(e)return e}}function bl(){return Array.from(en.keys())}function hl(a){const n=a.left??0,t=a.top??0,e=a.width??24,s=a.height??24;return`${n} ${t} ${e} ${s}`}function yl(a){const n=[],t=a.width??24,e=a.height??24;return a.hFlip&&n.push(`translate(${t} 0) scale(-1 1)`),a.vFlip&&n.push(`translate(0 ${e}) scale(1 -1)`),a.rotate&&n.push(`rotate(${a.rotate} ${t/2} ${e/2})`),n.join(" ")}let kn=null,Wt=null;function _l(){return bl().some(a=>a.startsWith("lucide:"))}async function xl(){if(!(kn&&_l()))return Wt||(Wt=(async()=>{try{if(kn){ka(kn);return}const a=await nl(()=>import("./index.C9150cnU.js"),[]),n=a.icons??a.default;n&&(kn=n,ka(n))}catch{}finally{Wt=null}})(),Wt)}const wl=["viewBox","aria-label"],$l=["transform","innerHTML"],Sl=["innerHTML"],Kl=K({name:"KkIcon",inheritAttrs:!1,__name:"Icon",props:{name:{},size:{default:"var(--kk-font-size-lg)"},color:{default:""},spin:{type:Boolean,default:!1}},setup(a){const n=a,t=je("icon"),e=_(0),s=m(()=>(e.value,ga(n.name))),o={small:"var(--kk-font-size-sm)",medium:"var(--kk-font-size-lg)",large:"var(--kk-font-size-xl)"},u=m(()=>{const C=n.size,L=typeof C=="number"?`${C}px`:o[C]??C;return{width:L,height:L,color:n.color||void 0}}),p=m(()=>[t.b(),t.is("spin",n.spin)]),d=m(()=>s.value?hl(s.value):"0 0 24 24"),k=m(()=>s.value?yl(s.value):""),h=m(()=>{var C;return((C=s.value)==null?void 0:C.body)??""});async function x(C){!C||ga(C)||(await xl(),e.value+=1)}return Be(()=>n.name,x,{immediate:!0}),qe(()=>{x(n.name)}),(C,L)=>(i(),c("svg",Oe({class:p.value,style:u.value,viewBox:d.value,xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",role:"img","aria-label":a.name},C.$attrs),[k.value?(i(),c("g",{key:0,transform:k.value,innerHTML:h.value},null,8,$l)):(i(),c("g",{key:1,innerHTML:h.value},null,8,Sl))],16,wl))}}),Ge=Ae(Kl,"KkIcon"),Cl=K({name:"KkSpace",inheritAttrs:!1,__name:"Space",props:{size:{default:"small"},direction:{default:"horizontal"},align:{default:"center"},wrap:{type:Boolean,default:!1},fill:{type:Boolean,default:!1},split:{type:Boolean,default:!1}},setup(a){const n=a,t=bt(),e=je("space"),s={small:"var(--kk-space-2)",medium:"var(--kk-space-3)",large:"var(--kk-space-4)"};function o(h){return h===void 0?s.small:typeof h=="number"?`${h}px`:s[h]??s.small}const u=m(()=>[e.b(),e.m(n.direction),e.m(`align-${n.align}`),e.is("wrap",n.wrap),e.is("fill",n.fill)]),p=m(()=>{const h=n.size,[x,C]=Array.isArray(h)?h:[h,h];return{"--kk-space-row-gap":o(x),"--kk-space-column-gap":o(C)}}),d=m(()=>{var L;const h=[],x=P=>{if(Array.isArray(P)){P.forEach(x);return}if(al(P)){if(P.type===N&&Array.isArray(P.children)){x(P.children);return}h.push(P)}};if(x(((L=t.default)==null?void 0:L.call(t))??[]),!n.split||h.length<=1)return h;const C=[];return h.forEach((P,W)=>{var X;W>0&&C.push(Ta("span",{class:e.e("split"),key:`split-${W}`},(X=t.split)==null?void 0:X.call(t))),C.push(P)}),C}),k=h=>h.node;return(h,x)=>(i(),c("div",Oe({class:u.value,style:p.value},h.$attrs),[(i(!0),c(N,null,ve(d.value,(C,L)=>(i(),U(k,{key:L,node:C},null,8,["node"]))),128))],16))}}),ut=Ae(Cl,"KkSpace"),Tl=["role"],zl=K({name:"KkDivider",inheritAttrs:!1,__name:"Divider",props:{direction:{default:"horizontal"},contentPosition:{default:"center"},borderStyle:{default:"solid"},accent:{type:Boolean,default:!1}},setup(a){const n=a,t=bt(),e=je("divider"),s=m(()=>n.direction==="horizontal"&&!!t.default),o=m(()=>[e.b(),e.m(n.direction),e.m(`content-${n.contentPosition}`),e.m(`style-${n.borderStyle}`),e.is("accent",n.accent),e.is("with-text",s.value)]);return(u,p)=>(i(),c("div",Oe({class:o.value,role:a.direction==="horizontal"?"separator":void 0},u.$attrs),[s.value?(i(),c("span",{key:0,class:g(l(e).e("text"))},[y(u.$slots,"default")],2)):$("",!0)],16,Tl))}}),Lt=Ae(zl,"KkDivider"),Pl=K({name:"KkCard",inheritAttrs:!1,__name:"Card",props:{title:{default:""},subtitle:{default:""},shadow:{default:"always"},padding:{default:"medium"},hoverable:{type:Boolean,default:!1},bordered:{type:Boolean,default:!0},loading:{type:Boolean,default:!1}},setup(a){const n=a,t=bt(),e=je("card"),s=m(()=>!!t.header||!!n.title||!!n.subtitle||!!t.extra),o=m(()=>!!t.footer),u=m(()=>!!t.cover),p=m(()=>[e.b(),e.m(`shadow-${n.shadow}`),e.m(`padding-${n.padding}`),e.is("hoverable",n.hoverable),e.is("bordered",n.bordered),e.is("loading",n.loading)]);return(d,k)=>(i(),c("div",Oe({class:p.value},d.$attrs),[u.value?(i(),c("div",{key:0,class:g(l(e).e("cover"))},[y(d.$slots,"cover")],2)):$("",!0),s.value?(i(),c("div",{key:1,class:g(l(e).e("header"))},[y(d.$slots,"header",{},()=>[r("div",{class:g(l(e).e("title-group"))},[a.title||d.$slots.title?(i(),c("div",{key:0,class:g(l(e).e("title"))},[y(d.$slots,"title",{},()=>[S(z(a.title),1)])],2)):$("",!0),a.subtitle||d.$slots.subtitle?(i(),c("div",{key:1,class:g(l(e).e("subtitle"))},[y(d.$slots,"subtitle",{},()=>[S(z(a.subtitle),1)])],2)):$("",!0)],2)]),d.$slots.extra?(i(),c("div",{key:0,class:g(l(e).e("extra"))},[y(d.$slots,"extra")],2)):$("",!0)],2)):$("",!0),r("div",{class:g(l(e).e("body"))},[y(d.$slots,"default"),a.loading?(i(),c("div",{key:0,class:g(l(e).e("loading")),"aria-hidden":"true"},[r("span",{class:g(l(e).e("spinner"))},null,2)],2)):$("",!0)],2),o.value?(i(),c("div",{key:2,class:g(l(e).e("footer"))},[y(d.$slots,"footer")],2)):$("",!0)],16))}}),zt=Ae(Pl,"KkCard"),Ll=K({name:"KkTag",inheritAttrs:!1,__name:"Tag",props:{type:{default:"default"},size:{default:"medium"},effect:{default:"light"},closable:{type:Boolean,default:!1},round:{type:Boolean,default:!1},bordered:{type:Boolean,default:!0}},emits:["close","click"],setup(a,{emit:n}){const t=a,e=n,s=je("tag"),o=m(()=>[s.b(),s.m(t.type),s.m(t.size),s.m(`effect-${t.effect}`),s.is("round",t.round),s.is("bordered",t.bordered)]);function u(d){d.stopPropagation(),e("close",d)}function p(d){e("click",d)}return(d,k)=>(i(),c("span",Oe({class:o.value},d.$attrs,{onClick:p}),[d.$slots.icon?(i(),c("span",{key:0,class:g(l(s).e("icon"))},[y(d.$slots,"icon")],2)):$("",!0),r("span",{class:g(l(s).e("text"))},[y(d.$slots,"default")],2),a.closable?(i(),c("button",{key:1,class:g(l(s).e("close")),type:"button","aria-label":"关闭",onClick:u},[...k[0]||(k[0]=[r("svg",{viewBox:"0 0 24 24",width:"10",height:"10","aria-hidden":"true"},[r("path",{d:"M5 5L19 19M19 5L5 19",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1)])],2)):$("",!0)],16))}}),tt=Ae(Ll,"KkTag"),Nt=Symbol("kk-form-context"),Cn=Symbol("kk-form-item-context"),Bl=["type","value","placeholder","disabled","readonly","maxlength","minlength","name","autocomplete","autofocus","aria-invalid"],Ml=["aria-label"],Vl={viewBox:"0 0 24 24",width:"14",height:"14","aria-hidden":"true"},Ol={key:0,d:"M4 20L20 4",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"},Il=K({name:"KkInput",inheritAttrs:!1,__name:"Input",props:{modelValue:{default:""},type:{default:"text"},size:{},placeholder:{default:""},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},maxlength:{},minlength:{},invalid:{type:Boolean,default:!1},errorMessage:{default:""},block:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},name:{default:""},autocomplete:{default:"off"}},emits:["update:modelValue","input","change","clear","focus","blur","keydown","enter"],setup(a,{expose:n,emit:t}){const e=a,s=t,o=je("input"),u=Je(Nt,void 0),p=Je(Cn,void 0),d=_(),k=_(!1),h=_(!1),x=m(()=>e.disabled||!!(u!=null&&u.disabled)),C=m(()=>e.size??(u==null?void 0:u.size)??"medium"),L=m(()=>{var Z;return e.invalid||!!((Z=p==null?void 0:p.message)!=null&&Z.value)}),P=m(()=>e.showPassword?h.value?"text":"password":e.type),W=m(()=>e.modelValue===void 0||e.modelValue===null?"":String(e.modelValue)),X=m(()=>e.clearable&&!x.value&&!e.readonly&&W.value.length>0),B=m(()=>[o.b(),o.is("block",e.block)]),E=m(()=>[o.e("control"),o.em("control",C.value),o.is("disabled",x.value),o.is("focused",k.value),o.is("readonly",e.readonly),o.is("invalid",L.value)]);function O(Z){const de=Z.target.value;s("update:modelValue",de),s("input",de),p==null||p.validate("change")}function F(Z){s("change",Z.target.value),p==null||p.validate("change")}function V(Z){k.value=!0,s("focus",Z)}function J(Z){k.value=!1,s("blur",Z),p==null||p.validate("blur")}function ne(Z){Z.key==="Enter"&&s("enter",Z),s("keydown",Z)}function H(){s("update:modelValue",""),s("input",""),s("change",""),s("clear"),at(()=>{var Z;return(Z=d.value)==null?void 0:Z.focus()})}function ee(){h.value=!h.value,at(()=>{const Z=d.value;if(!Z)return;const de=Z.value.length;Z.setSelectionRange(de,de)})}function ae(){var Z;(Z=d.value)==null||Z.focus()}function se(){var Z;(Z=d.value)==null||Z.blur()}function $e(){var Z;(Z=d.value)==null||Z.select()}return n({focus:ae,blur:se,select:$e,inputRef:d}),(Z,de)=>(i(),c("div",{class:g(B.value)},[r("div",Oe({class:l(o).e("row")},Z.$attrs),[Z.$slots.prepend?(i(),c("span",{key:0,class:g(l(o).e("prepend"))},[y(Z.$slots,"prepend")],2)):$("",!0),r("div",{class:g(E.value)},[Z.$slots.prefix?(i(),c("span",{key:0,class:g(l(o).e("prefix"))},[y(Z.$slots,"prefix")],2)):$("",!0),r("input",{ref_key:"inputRef",ref:d,class:g(l(o).e("inner")),type:P.value,value:W.value,placeholder:a.placeholder,disabled:x.value,readonly:a.readonly,maxlength:a.maxlength,minlength:a.minlength,name:a.name,autocomplete:a.autocomplete,autofocus:a.autofocus,"aria-invalid":L.value,onInput:O,onChange:F,onFocus:V,onBlur:J,onKeydown:ne},null,42,Bl),X.value?(i(),c("button",{key:1,class:g(l(o).e("clear")),type:"button","aria-label":"清空",onClick:H},[...de[0]||(de[0]=[r("svg",{viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":"true"},[r("path",{d:"M5 5L19 19M19 5L5 19",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1)])],2)):$("",!0),a.showPassword?(i(),c("button",{key:2,class:g(l(o).e("password")),type:"button","aria-label":h.value?"隐藏密码":"显示密码",onClick:ee},[(i(),c("svg",Vl,[de[1]||(de[1]=r("path",{d:"M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z",fill:"none",stroke:"currentColor","stroke-width":"2"},null,-1)),de[2]||(de[2]=r("circle",{cx:"12",cy:"12",r:"2.5",fill:"none",stroke:"currentColor","stroke-width":"2"},null,-1)),h.value?$("",!0):(i(),c("path",Ol))]))],10,Ml)):$("",!0),Z.$slots.suffix?(i(),c("span",{key:3,class:g(l(o).e("suffix"))},[y(Z.$slots,"suffix")],2)):$("",!0)],2),Z.$slots.append?(i(),c("span",{key:1,class:g(l(o).e("append"))},[y(Z.$slots,"append")],2)):$("",!0)],16),a.errorMessage?(i(),c("div",{key:0,class:g(l(o).e("error")),role:"alert"},[de[3]||(de[3]=r("svg",{viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":"true"},[r("circle",{cx:"12",cy:"12",r:"9",fill:"none",stroke:"currentColor","stroke-width":"2"}),r("path",{d:"M12 7v6M12 16.5v.5",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"})],-1)),r("span",null,z(a.errorMessage),1)],2)):$("",!0)],2))}}),Ye=Ae(Il,"KkInput"),El=K({name:"KkForm",inheritAttrs:!1,__name:"Form",props:{model:{default:()=>({})},rules:{default:()=>({})},labelWidth:{default:""},labelPosition:{default:"right"},size:{default:"medium"},disabled:{type:Boolean,default:!1},showMessage:{type:Boolean,default:!0},inline:{type:Boolean,default:!1},validateOnRuleChange:{type:Boolean,default:!0}},emits:["submit","reset","validate"],setup(a,{expose:n,emit:t}){const e=a,s=t,o=je("form"),u=qn([]),p=m(()=>e.disabled),d=ln({model:e.model,rules:e.rules,size:e.size,disabled:e.disabled,labelWidth:e.labelWidth,labelPosition:e.labelPosition,showMessage:e.showMessage,inline:e.inline,addField(B){u.value.includes(B)||u.value.push(B)},removeField(B){const E=u.value.indexOf(B);E>-1&&u.value.splice(E,1)},notifyValidate(B,E,O){s("validate",B,E,O)}});ht(Nt,d),Be(()=>e.model,B=>{d.model=B},{deep:!1}),Be(()=>e.rules,B=>{d.rules=B}),Be(()=>e.disabled,B=>{d.disabled=B}),Be(()=>e.size,B=>{d.size=B}),Be(()=>e.labelPosition,B=>{d.labelPosition=B}),Be(()=>e.labelWidth,B=>{d.labelWidth=B});const k=m(()=>[o.b(),o.m(`label-${e.labelPosition}`),o.is("inline",e.inline),o.is("disabled",e.disabled)]);async function h(B){let E=!0;return(await Promise.all(u.value.map(async F=>{const V=await F.validate();return{prop:F.prop,valid:!V,message:V}}))).forEach(F=>{F.valid||(E=!1)}),B==null||B(E),E}async function x(B){const E=Array.isArray(B)?B:[B];await Promise.all(u.value.filter(O=>E.includes(O.prop)).map(O=>O.validate()))}function C(B){(B?u.value.filter(O=>B.includes(O.prop)):u.value).forEach(O=>O.resetField()),s("reset")}function L(B){(B?u.value.filter(O=>B.includes(O.prop)):u.value).forEach(O=>O.clearValidate())}function P(B){const E=document.querySelector(`[data-kk-form-prop="${B}"]`);E==null||E.scrollIntoView({block:"center",behavior:"smooth"})}function W(B){B.preventDefault(),s("submit",B)}function X(B){B.preventDefault(),C()}return n({validate:h,validateField:x,resetFields:C,clearValidate:L,scrollToField:P,fields:u,disabled:p}),(B,E)=>(i(),c("form",Oe({class:k.value},B.$attrs,{onSubmit:W,onReset:X}),[y(B.$slots,"default")],16))}});function ba(a,n){if(!n)return a;if(typeof a!="object"||a===null)return;const t=n.split(".");let e=a;for(const s of t){if(typeof e!="object"||e===null)return;e=e[s]}return e}function Ba(a){return a?Array.isArray(a)?a:[a]:[]}function Al(...a){return a.flatMap(n=>Ba(n))}function jl(a,n){return a.trigger?(Array.isArray(a.trigger)?a.trigger:[a.trigger]).includes(n):n==="change"}const ha=a=>a==null?!0:typeof a=="string"?a.trim()==="":Array.isArray(a)?a.length===0:!1,Rl=/^[\w.!#$%&'*+/=?^`{|}~-]+@[\w-]+(\.[\w-]+)+$/,Fl=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;async function Dl(a,n){if(typeof n.validator=="function"){const e=await n.validator(a,n);return e===!0||e===void 0||e===null?"":e===!1?n.message||"校验未通过":typeof e=="string"?e:n.message||"校验未通过"}if(n.required&&ha(a))return n.message||"该字段为必填项";if(ha(a))return"";if(n.type==="number"&&(typeof a!="number"||Number.isNaN(a)))return n.message||"请输入数字";if(n.type==="array"&&!Array.isArray(a))return n.message||"请选择至少一项";if(n.type==="email"&&(typeof a!="string"||!Rl.test(a)))return n.message||"请输入正确的邮箱地址";if(n.type==="url"&&(typeof a!="string"||!Fl.test(a)))return n.message||"请输入正确的链接地址";if(n.pattern&&typeof a=="string"&&!n.pattern.test(a))return n.message||"格式不正确";const t=Array.isArray(a)||typeof a=="string"?a.length:void 0;if(t!==void 0){if(n.min!==void 0&&t<n.min)return n.message||`长度不能少于 ${n.min}`;if(n.max!==void 0&&t>n.max)return n.message||`长度不能超过 ${n.max}`;if(n.len!==void 0&&t!==n.len)return n.message||`长度必须为 ${n.len}`}return""}async function Nl(a,n,t){const e=Array.isArray(n)?n:Ba(n),s=t?e.filter(o=>jl(o,t)):e;for(const o of s){const u=await Dl(a,o);if(u)return u}return""}const Tn=Ae(El,"KkForm"),Hl=["data-kk-form-prop"],Ul=K({name:"KkFormItem",inheritAttrs:!1,__name:"FormItem",props:{prop:{default:""},label:{default:""},labelWidth:{default:""},required:{type:Boolean,default:!1},rules:{default:()=>[]},showMessage:{type:Boolean,default:!0},error:{default:""}},setup(a,{expose:n}){const t=a,e=je("form-item"),s=Je(Nt,void 0),o=_(""),u=_(!1),p=m(()=>(s==null?void 0:s.labelPosition)??"right"),d=m(()=>{const F=t.labelWidth||(s==null?void 0:s.labelWidth)||"";return typeof F=="number"?`${F}px`:F}),k=m(()=>t.showMessage&&((s==null?void 0:s.showMessage)??!0)),h=m(()=>{var F;return Al((F=s==null?void 0:s.rules)==null?void 0:F[t.prop],t.rules)}),x=m(()=>t.required||h.value.some(F=>F.required)),C=m(()=>t.prop&&s?ba(s.model,t.prop):void 0),L=m(()=>t.error||o.value),P=m(()=>[e.b(),e.m(`label-${p.value}`),e.is("required",x.value),e.is("error",!!L.value),e.is("validating",u.value)]),W=m(()=>d.value?{width:d.value}:void 0);async function X(F){if(!t.prop||h.value.length===0)return o.value="","";u.value=!0;try{const V=await Nl(C.value,h.value,F);return o.value=V,s==null||s.notifyValidate(t.prop,!V,V),V}finally{u.value=!1}}function B(){o.value=""}function E(){if(o.value="",!t.prop||!s)return;const F=ba(s.model,t.prop);Array.isArray(F)&&F.splice(0,F.length)}const O={get prop(){return t.prop},message:o,validate:X,resetField:E,clearValidate:B};return ht(Cn,O),qe(()=>{t.prop&&(s==null||s.addField(O))}),et(()=>{s==null||s.removeField(O)}),Be(C,()=>{o.value&&X("change")}),n({validate:X,clearValidate:B,resetField:E,message:o}),(F,V)=>(i(),c("div",Oe({class:P.value,"data-kk-form-prop":a.prop||void 0},F.$attrs),[a.label||F.$slots.label?(i(),c("label",{key:0,class:g(l(e).e("label")),style:De(W.value)},[y(F.$slots,"label",{},()=>[S(z(a.label),1)])],6)):$("",!0),r("div",{class:g(l(e).e("content"))},[r("div",{class:g(l(e).e("control"))},[y(F.$slots,"default")],2),k.value&&L.value?(i(),c("div",{key:0,class:g(l(e).e("error")),role:"alert"},[y(F.$slots,"error",{},()=>[S(z(L.value),1)])],2)):$("",!0)],2)],16,Hl))}}),Rt=Ae(Ul,"KkFormItem");let ya=0;function Ot(a="kk-id"){return ya+=1,`${a}-${ya}`}const Wl=Object.prototype.toString;function Vn(a){return a==null}function gn(a){return typeof a=="function"}function qt(a){return Array.isArray(a)}function ql(a){return Wl.call(a)==="[object Object]"}function Fn(a){if(!ql(a))return!1;const n=Object.getPrototypeOf(a);return n===null||n===Object.prototype}const wn={name:"zh-CN",label:"简体中文",short:"中",common:{confirm:"确定",cancel:"取消",close:"关闭",clear:"清空",reset:"重置",loading:"加载中",empty:"暂无数据",search:"搜索",noMatch:"无匹配数据",selectAll:"全选",remove:"移除",retry:"重试",expand:"展开",collapse:"收起",copy:"复制",copied:"已复制",preview:"预览",download:"下载",back:"返回",next:"下一步",finish:"完成",yes:"是",no:"否",more:"更多",total:"共 {total} 条",selected:"已选 {count} 项"},modal:{close:"关闭弹窗"},drawer:{close:"关闭抽屉",resize:"拖动调整尺寸"},select:{placeholder:"请选择",multiplePlaceholder:"请选择（可多选）",noData:"无匹配数据",loading:"加载中",create:"创建「{label}」",clear:"清空",removeTag:"移除 {label}",selectAll:"全选",deselectAll:"取消全选",selectedCount:"已选 {count} 项"},cascader:{placeholder:"请选择",noData:"无匹配数据",loading:"加载中",clear:"清空"},upload:{selectFile:"选择文件",drop:"将文件拖到此处，或",clickUpload:"点击上传",uploading:"上传中",success:"上传成功",fail:"上传失败",retry:"重试",remove:"删除",preview:"预览",close:"关闭",exceed:"最多只能上传 {limit} 个文件",sizeExceed:"「{name}」大小超过 {size}",typeNotAllowed:"「{name}」不在允许的文件类型内",empty:"暂无文件"},table:{empty:"暂无数据",loading:"加载中",selectAll:"全选本页",selectRow:"选择该行",expandRow:"展开行",collapseRow:"收起行",sortAsc:"点击升序",sortDesc:"点击降序",sortClear:"取消排序"},pagination:{prev:"上一页",next:"下一页",total:"共 {total} 条",sizes:"{size} 条/页",jumper:"前往",page:"页",goto:"跳至 {page} 页"},tabs:{add:"新增标签",close:"关闭「{label}」"},watermark:{text:"KK UI"},skeleton:{loading:"内容加载中"}},Dn={name:"en-US",label:"English",short:"EN",common:{confirm:"OK",cancel:"Cancel",close:"Close",clear:"Clear",reset:"Reset",loading:"Loading",empty:"No data",search:"Search",noMatch:"No matching data",selectAll:"Select all",remove:"Remove",retry:"Retry",expand:"Expand",collapse:"Collapse",copy:"Copy",copied:"Copied",preview:"Preview",download:"Download",back:"Back",next:"Next",finish:"Finish",yes:"Yes",no:"No",more:"More",total:"{total} items in total",selected:"{count} selected"},modal:{close:"Close dialog"},drawer:{close:"Close drawer",resize:"Drag to resize"},select:{placeholder:"Please select",multiplePlaceholder:"Please select (multiple)",noData:"No matching data",loading:"Loading",create:'Create "{label}"',clear:"Clear",removeTag:"Remove {label}",selectAll:"Select all",deselectAll:"Unselect all",selectedCount:"{count} selected"},cascader:{placeholder:"Please select",noData:"No matching data",loading:"Loading",clear:"Clear"},upload:{selectFile:"Select file",drop:"Drop file here, or",clickUpload:"click to upload",uploading:"Uploading",success:"Upload succeeded",fail:"Upload failed",retry:"Retry",remove:"Remove",preview:"Preview",close:"Close",exceed:"You can upload at most {limit} file(s)",sizeExceed:'"{name}" exceeds the size limit of {size}',typeNotAllowed:'"{name}" is not an allowed file type',empty:"No files"},table:{empty:"No data",loading:"Loading",selectAll:"Select all rows on this page",selectRow:"Select this row",expandRow:"Expand row",collapseRow:"Collapse row",sortAsc:"Click to sort ascending",sortDesc:"Click to sort descending",sortClear:"Clear sort"},pagination:{prev:"Previous",next:"Next",total:"{total} items in total",sizes:"{size} / page",jumper:"Go to",page:"page",goto:"Go to page {page}"},tabs:{add:"Add tab",close:'Close "{label}"'},watermark:{text:"KK UI"},skeleton:{loading:"Content is loading"}},Ma="kk-locale",Va="zh-CN",$t=new Map;$t.set(wn.name,wn);$t.set(Dn.name,Dn);const yn=_([wn.name,Dn.name]),zn=_(wn.name),Gl=()=>typeof document<"u";function Oa(a,n,t={}){const e=$t.get(a),s=e&&!t.replace?Ea(e,{...n,name:a,label:n.label??e.label}):{...n,name:a};return $t.set(a,s),yn.value.includes(a)||(yn.value=[...yn.value,a]),s}function Yl(){return[...yn.value]}function Jt(a=Ia()){const n=$t.get(a);return typeof(n==null?void 0:n.label)=="string"?n.label:String(a)}function Xl(a=Ia()){const n=$t.get(a);return typeof(n==null?void 0:n.short)=="string"?n.short:Jt(a)}function Ia(){return zn.value}function tn(a){zn.value=a,Gl()&&document.documentElement.setAttribute("lang",String(a));try{localStorage.setItem(Ma,String(a))}catch{}}function Zl(){let a=null;try{a=localStorage.getItem(Ma)}catch{}if(a&&$t.has(a))return tn(a),a;const n=typeof navigator<"u"&&navigator.language||"",t=n.toLowerCase().startsWith("zh")?"zh-CN":n?"en-US":Va;return tn(t),t}const Jl=/\{(\w+)\}/g;function Ea(a,n){const t={...a};for(const[e,s]of Object.entries(n)){const o=t[e];t[e]=Fn(s)&&Fn(o)?Ea(o,s):s}return t}function Ql(a,n){let t=a;for(const e of n.split(".")){if(!Fn(t))return;t=t[e]}return typeof t=="string"?t:void 0}function eo(a,n){if(!n)return a;const t=Array.isArray(n)?n:void 0;return a.replace(Jl,(e,s)=>{const o=t?t[Number(s)]:n[s];return o==null?e:String(o)})}function to(a,n,t){const e=new Set([t??zn.value,Va,"en-US"]);for(const s of e){const o=$t.get(s);if(!o)continue;const u=Ql(o,a);if(u!==void 0)return eo(u,n)}return a}function st(a){const n=m(()=>Yl()),t=m(()=>ll(a)??zn.value),e=m(()=>Jt(t.value)),s=m(()=>Xl(t.value));function o(p,d){return to(p,d,t.value)}function u(){const d=String(t.value).startsWith("zh")?"en-US":"zh-CN";tn(d)}return{locale:t,locales:n,label:e,short:s,setLocale:tn,toggleLocale:u,t:o}}const no=1e3;let _a=0,Gt=0,xa="",wa="";function Zn(){return _a+=1,no+_a}function Jn(){if(typeof document>"u")return()=>{};if(Gt===0){const{body:n}=document;xa=n.style.overflow,wa=n.style.paddingRight;const t=window.innerWidth-document.documentElement.clientWidth;n.style.overflow="hidden",t>0&&(n.style.paddingRight=`${t}px`)}Gt+=1;let a=!1;return()=>{a||(a=!0,Gt=Math.max(0,Gt-1),Gt===0&&(document.body.style.overflow=xa,document.body.style.paddingRight=wa))}}const bn=56,ao="button, a, input, textarea, select, [data-kk-modal-no-drag]";function lo(a){const n=_(!1),t=_({x:0,y:0});let e=0,s=0,o=0,u=0,p=0,d=0,k=0,h=0,x=!0,C="";function L(){const V=a.target.value;if(!V)return;const{x:J,y:ne}=t.value;if(J===0&&ne===0){V.style.removeProperty("transform");return}V.style.transform=`translate3d(${J.toFixed(1)}px, ${ne.toFixed(1)}px, 0)`}function P(){x=a.bounds()!=="none";const V=a.target.value;if(!x||!V)return;const J=V.getBoundingClientRect();p=bn-J.right,d=window.innerWidth-bn-J.left,k=bn-J.bottom,h=window.innerHeight-bn-J.top}function W(V){V.addEventListener("pointermove",E),V.addEventListener("pointerup",O),V.addEventListener("pointercancel",O)}function X(V){V.removeEventListener("pointermove",E),V.removeEventListener("pointerup",O),V.removeEventListener("pointercancel",O)}function B(V){var H,ee;if(!a.enabled()||V.button!==0)return;const J=V.target;if(J!=null&&J.closest(ao))return;const ne=a.target.value;ne&&(V.preventDefault(),n.value=!0,e=V.clientX,s=V.clientY,o=t.value.x,u=t.value.y,P(),C=document.body.style.userSelect,document.body.style.userSelect="none",(H=ne.setPointerCapture)==null||H.call(ne,V.pointerId),W(ne),(ee=a.onStart)==null||ee.call(a))}function E(V){var H;if(!n.value)return;const J=o+(V.clientX-e),ne=u+(V.clientY-s);t.value={x:x?Math.min(d,Math.max(p,J)):J,y:x?Math.min(h,Math.max(k,ne)):ne},L(),(H=a.onMove)==null||H.call(a,t.value)}function O(V){var ne,H;if(!n.value)return;const J=a.target.value;n.value=!1,J&&((ne=J.hasPointerCapture)!=null&&ne.call(J,V.pointerId)&&J.releasePointerCapture(V.pointerId),X(J)),document.body.style.userSelect=C,(H=a.onEnd)==null||H.call(a,t.value)}function F(){t.value={x:0,y:0},L()}return{dragging:n,position:t,onPointerDown:B,reset:F}}const oo=["aria-label","aria-labelledby"],so=["id"],io=["aria-label"],ro=400,uo=K({name:"KkModal",inheritAttrs:!1,__name:"Modal",props:{modelValue:{type:Boolean,default:!1},title:{default:""},subtitle:{default:""},width:{},height:{},maxHeight:{},top:{},center:{type:Boolean,default:!1},size:{default:"medium"},draggable:{type:Boolean,default:!1},dragHandle:{default:"header"},dragBounds:{default:"viewport"},resetOnClose:{type:Boolean,default:!0},mask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},destroyOnClose:{type:Boolean,default:!1},lockScroll:{type:Boolean,default:!0},appendTo:{default:"body"},zIndex:{},footer:{type:Boolean,default:!1},okText:{default:""},cancelText:{default:""},okLoading:{type:Boolean,default:!1},bordered:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},ariaLabel:{default:""}},emits:["update:modelValue","open","opened","close","closed","confirm","cancel","drag-start","drag","drag-end"],setup(a,{expose:n,emit:t}){const e=a,s=t,o={small:"420px",medium:"560px",large:"760px",full:"92vw"},u=["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(", "),p=bt(),d=je("modal"),k=Ot("kk-modal-title"),{t:h}=st(),x=m(()=>e.okText||h("common.confirm")),C=m(()=>e.cancelText||h("common.cancel")),L=_(null),P=_(!1),W=_(!1),X=_(0);let B=null,E=null,O;const F=lo({target:L,enabled:()=>e.draggable&&!e.disabled,bounds:()=>e.dragBounds,onStart:()=>s("drag-start",{...F.position.value}),onMove:R=>s("drag",{...R}),onEnd:R=>s("drag-end",{...R})}),V=m(()=>!!p.header||!!p.title||!!e.title||!!e.subtitle||e.showClose),J=m(()=>!!p.footer||e.footer),ne=m(()=>!!p.title||!!e.title),H=m(()=>e.zIndex??X.value),ee=m(()=>[d.is("center",e.center)]),ae=m(()=>{const R={zIndex:H.value},te=Z(e.top);return te&&(R["--kk-modal-top"]=te),R}),se=m(()=>[d.b(),d.is("draggable",e.draggable),d.is("drag-modal",e.draggable&&e.dragHandle==="modal"),d.is("dragging",F.dragging.value),d.is("disabled",e.disabled),d.is("loading",e.loading),d.is("bordered",e.bordered)]),$e=m(()=>{const R={};R.width=Z(e.width)??o[e.size];const te=Z(e.height);te&&(R.height=te);const oe=Z(e.maxHeight);return oe&&(R["--kk-modal-max-height"]=oe),R});function Z(R){if(R!==void 0)return typeof R=="number"?`${R}px`:R}function de(){Pe(),e.resetOnClose&&F.reset(),E=document.activeElement,W.value=!0,e.lockScroll&&(B=Jn()),document.addEventListener("keydown",Fe,!0),s("open"),at(()=>{var R;return(R=L.value)==null?void 0:R.focus()})}function xe(){e.zIndex===void 0&&(X.value=Zn());const R=P.value;if(P.value=!0,R){de();return}at(de)}function Ee(){P.value&&(W.value=!1,document.removeEventListener("keydown",Fe,!0),B==null||B(),B=null,A(),e.destroyOnClose&&fe())}function Pe(){O&&clearTimeout(O),O=void 0}function fe(){Pe(),O=setTimeout(()=>{O=void 0,P.value=!1},ro)}function ge(){s("update:modelValue",!0)}function Se(R="close"){s("close",R),s("update:modelValue",!1)}function G(R){e.disabled||Se(R)}function ue(){s("cancel"),G("cancel")}function Te(){s("closed"),e.destroyOnClose&&(Pe(),P.value=!1)}function _e(){e.maskClosable&&G("mask")}function he(R){e.dragHandle==="header"&&F.onPointerDown(R)}function Le(R){e.dragHandle==="modal"&&F.onPointerDown(R)}function Fe(R){if(R.key==="Escape"&&e.closeOnEsc){R.stopPropagation(),G("esc");return}R.key==="Tab"&&q(R)}function q(R){const te=L.value;if(!te)return;const oe=Array.from(te.querySelectorAll(u)),Ve=document.activeElement;if(oe.length===0){R.preventDefault(),te.focus();return}const Q=oe[0],ye=oe[oe.length-1];R.shiftKey&&(Ve===Q||Ve===te)?(R.preventDefault(),ye.focus()):!R.shiftKey&&Ve===ye&&(R.preventDefault(),Q.focus())}function A(){var te;const R=E;E=null,R&&document.contains(R)&&((te=R.focus)==null||te.call(R))}return Be(()=>e.modelValue,R=>{R?xe():Ee()},{immediate:!0}),et(()=>{document.removeEventListener("keydown",Fe,!0),B==null||B(),B=null,Pe()}),n({open:ge,close:Se,reset:F.reset}),(R,te)=>P.value?(i(),U(sn,{key:0,to:a.appendTo},[f(on,{name:"kk-modal",onAfterEnter:te[2]||(te[2]=oe=>s("opened")),onAfterLeave:Te},{default:v(()=>[kt(r("div",{class:g([l(d).e("overlay"),ee.value]),style:De(ae.value),onClick:Qe(_e,["self"])},[r("div",Oe({ref_key:"dialogRef",ref:L},R.$attrs,{class:se.value,style:$e.value,role:"dialog","aria-modal":"true","aria-label":a.ariaLabel||void 0,"aria-labelledby":ne.value?l(k):void 0,tabindex:"-1",onPointerdown:Le}),[V.value?(i(),c("header",{key:0,class:g(l(d).e("header")),onPointerdown:he},[r("div",{class:g(l(d).e("titles"))},[y(R.$slots,"header",{},()=>[ne.value?(i(),c("div",{key:0,id:l(k),class:g(l(d).e("title"))},[y(R.$slots,"title",{},()=>[S(z(a.title),1)])],10,so)):$("",!0),a.subtitle?(i(),c("div",{key:1,class:g(l(d).e("subtitle"))},z(a.subtitle),3)):$("",!0)])],2),a.showClose?(i(),c("button",{key:0,class:g(l(d).e("close")),type:"button","aria-label":l(h)("modal.close"),onClick:te[0]||(te[0]=oe=>G("close"))},[y(R.$slots,"close",{},()=>[te[3]||(te[3]=r("svg",{viewBox:"0 0 24 24",width:"14",height:"14","aria-hidden":"true"},[r("path",{d:"M5 5L19 19M19 5L5 19",fill:"none",stroke:"currentColor","stroke-width":"2.4","stroke-linecap":"round"})],-1))])],10,io)):$("",!0)],34)):$("",!0),r("div",{class:g(l(d).e("body"))},[y(R.$slots,"default"),a.loading?(i(),c("div",{key:0,class:g(l(d).e("loading")),"aria-hidden":"true"},[r("span",{class:g(l(d).e("spinner"))},null,2)],2)):$("",!0)],2),J.value?(i(),c("footer",{key:1,class:g(l(d).e("footer"))},[y(R.$slots,"footer",{},()=>[f(l(ke),{disabled:a.disabled,onClick:ue},{default:v(()=>[S(z(C.value),1)]),_:1},8,["disabled"]),f(l(ke),{type:"primary",loading:a.okLoading,disabled:a.disabled,onClick:te[1]||(te[1]=oe=>s("confirm"))},{default:v(()=>[S(z(x.value),1)]),_:1},8,["loading","disabled"])])],2)):$("",!0)],16,oo)],6),[[Mt,W.value]])]),_:3})],8,["to"])):$("",!0)}}),Ht=Ae(uo,"KkModal");function Xe(a,n="px"){if(!(a==null||a===""))return typeof a=="number"?`${a}${n}`:String(a)}const On=["B","KB","MB","GB","TB","PB"];function co(a,n=1){if(!Number.isFinite(a)||a<=0)return`0 ${On[0]}`;const t=Math.min(Math.floor(Math.log(a)/Math.log(1024)),On.length-1),e=a/1024**t;return`${Number.isInteger(e)?String(e):e.toFixed(n)} ${On[t]}`}function hn(a,n,t=1){if(t===0)return[];const e=[];if(t>0)for(let s=a;s<=n;s+=t)e.push(s);else for(let s=a;s>=n;s+=t)e.push(s);return e}function _n(a,n,t){return Math.min(Math.max(a,n),t)}const po=["aria-label","aria-labelledby"],vo=["id"],fo=["aria-label"],mo=["aria-label"],ko=400,go=K({name:"KkDrawer",inheritAttrs:!1,__name:"Drawer",props:{modelValue:{type:Boolean,default:!1},title:{default:""},subtitle:{default:""},placement:{default:"right"},size:{default:"30%"},width:{},height:{},resizable:{type:Boolean,default:!1},minSize:{default:200},maxSize:{default:0},mask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},destroyOnClose:{type:Boolean,default:!1},lockScroll:{type:Boolean,default:!0},appendTo:{default:"body"},zIndex:{},footer:{type:Boolean,default:!1},okText:{default:""},cancelText:{default:""},okLoading:{type:Boolean,default:!1},bordered:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},ariaLabel:{default:""}},emits:["update:modelValue","open","opened","close","closed","confirm","cancel","resize"],setup(a,{expose:n,emit:t}){const e=a,s=t,o=["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(", "),u=bt(),p=je("drawer"),d=Ot("kk-drawer-title"),{t:k}=st(),h=m(()=>e.okText||k("common.confirm")),x=m(()=>e.cancelText||k("common.cancel")),C=_(null),L=_(!1),P=_(!1),W=_(0),X=_(0),B=_(!1);let E=null,O=null,F,V=0,J=0;const ne=m(()=>e.placement==="top"||e.placement==="bottom"),H=m(()=>e.placement==="left"||e.placement==="top"),ee=m(()=>!!u.title||!!e.title),ae=m(()=>!!u.header||ee.value||!!e.subtitle||e.showClose),se=m(()=>!!u.footer||e.footer),$e=m(()=>e.zIndex??W.value),Z=m(()=>[p.b(),p.m(e.placement),p.is("resizable",e.resizable),p.is("resizing",B.value),p.is("disabled",e.disabled),p.is("loading",e.loading),p.is("bordered",e.bordered)]),de=m(()=>{const Q={zIndex:$e.value},ye=ne.value?e.height:e.width,Ke=X.value>0?`${X.value}px`:Xe(ye)??Xe(e.size);return Ke&&(ne.value?Q.height=Ke:Q.width=Ke),Q});function xe(){fe(),O=document.activeElement,P.value=!0,e.lockScroll&&(E=Jn()),document.addEventListener("keydown",Le,!0),s("open"),at(()=>{var Q;return(Q=C.value)==null?void 0:Q.focus()})}function Ee(){e.zIndex===void 0&&(W.value=Zn());const Q=L.value;if(L.value=!0,Q){xe();return}at(xe)}function Pe(){L.value&&(P.value=!1,document.removeEventListener("keydown",Le,!0),E==null||E(),E=null,q(),e.destroyOnClose&&ge())}function fe(){F&&clearTimeout(F),F=void 0}function ge(){fe(),F=setTimeout(()=>{F=void 0,L.value=!1},ko)}function Se(){s("update:modelValue",!0)}function G(Q="close"){s("close",Q),s("update:modelValue",!1)}function ue(Q){e.disabled||G(Q)}function Te(){s("closed"),e.destroyOnClose&&(fe(),L.value=!1)}function _e(){s("cancel"),ue("cancel")}function he(){e.maskClosable&&ue("mask")}function Le(Q){if(Q.key==="Escape"&&e.closeOnEsc){Q.stopPropagation(),ue("esc");return}Q.key==="Tab"&&Fe(Q)}function Fe(Q){const ye=C.value;if(!ye)return;const Ke=Array.from(ye.querySelectorAll(o)),We=document.activeElement;if(Ke.length===0){Q.preventDefault(),ye.focus();return}const He=Ke[0],Re=Ke[Ke.length-1];Q.shiftKey&&(We===He||We===ye)?(Q.preventDefault(),Re.focus()):!Q.shiftKey&&We===Re&&(Q.preventDefault(),He.focus())}function q(){var ye;const Q=O;O=null,Q&&document.contains(Q)&&((ye=Q.focus)==null||ye.call(Q))}const A={right:-1,left:1,bottom:-1,top:1};function R(Q){var We;if(!e.resizable||e.disabled)return;const ye=C.value;if(!ye)return;Q.preventDefault(),B.value=!0,V=ye.getBoundingClientRect()[ne.value?"height":"width"],J=ne.value?Q.clientY:Q.clientX;const Ke=Q.currentTarget;try{(We=Ke.setPointerCapture)==null||We.call(Ke,Q.pointerId)}catch{}Ke.addEventListener("pointermove",te),Ke.addEventListener("pointerup",oe),Ke.addEventListener("pointercancel",oe)}function te(Q){if(!B.value)return;const ye=(ne.value?Q.clientY:Q.clientX)-J,Ke=V+ye*A[e.placement],We=window.innerHeight||window.innerWidth||0,He=e.maxSize>0?e.maxSize:We,Re=Math.min(e.minSize,He);X.value=_n(Math.round(Ke),Re,He)}function oe(Q){var Ke;if(!B.value)return;B.value=!1;const ye=Q.currentTarget;try{(Ke=ye.releasePointerCapture)==null||Ke.call(ye,Q.pointerId)}catch{}ye.removeEventListener("pointermove",te),ye.removeEventListener("pointerup",oe),ye.removeEventListener("pointercancel",oe),s("resize",X.value)}function Ve(){X.value=0}return Be(()=>e.modelValue,Q=>{Q?Ee():Pe()},{immediate:!0}),Be(()=>e.placement,()=>{X.value=0}),et(()=>{document.removeEventListener("keydown",Le,!0),E==null||E(),E=null,fe()}),n({open:Se,close:G,reset:Ve}),(Q,ye)=>L.value?(i(),U(sn,{key:0,to:a.appendTo},[f(on,{name:"kk-drawer",onAfterEnter:ye[2]||(ye[2]=Ke=>s("opened")),onAfterLeave:Te},{default:v(()=>[kt(r("div",{class:g(l(p).e("overlay")),style:De({zIndex:$e.value}),onClick:Qe(he,["self"])},[r("div",Oe({ref_key:"drawerRef",ref:C},Q.$attrs,{class:Z.value,style:de.value,role:"dialog","aria-modal":"true","aria-label":a.ariaLabel||void 0,"aria-labelledby":ee.value?l(d):void 0,tabindex:"-1"}),[ae.value?(i(),c("header",{key:0,class:g(l(p).e("header"))},[r("div",{class:g(l(p).e("titles"))},[y(Q.$slots,"header",{},()=>[ee.value?(i(),c("div",{key:0,id:l(d),class:g(l(p).e("title"))},[y(Q.$slots,"title",{},()=>[S(z(a.title),1)])],10,vo)):$("",!0),a.subtitle?(i(),c("div",{key:1,class:g(l(p).e("subtitle"))},z(a.subtitle),3)):$("",!0)])],2),a.showClose?(i(),c("button",{key:0,class:g(l(p).e("close")),type:"button","aria-label":l(k)("drawer.close"),onClick:ye[0]||(ye[0]=Ke=>ue("close"))},[y(Q.$slots,"close",{},()=>[ye[3]||(ye[3]=r("svg",{viewBox:"0 0 24 24",width:"14",height:"14","aria-hidden":"true"},[r("path",{d:"M5 5L19 19M19 5L5 19",fill:"none",stroke:"currentColor","stroke-width":"2.4","stroke-linecap":"round"})],-1))])],10,fo)):$("",!0)],2)):$("",!0),r("div",{class:g(l(p).e("body"))},[y(Q.$slots,"default"),a.loading?(i(),c("div",{key:0,class:g(l(p).e("loading")),"aria-hidden":"true"},[r("span",{class:g(l(p).e("spinner"))},null,2)],2)):$("",!0)],2),se.value?(i(),c("footer",{key:1,class:g(l(p).e("footer"))},[y(Q.$slots,"footer",{},()=>[f(l(ke),{disabled:a.disabled,onClick:_e},{default:v(()=>[S(z(x.value),1)]),_:1},8,["disabled"]),f(l(ke),{type:"primary",loading:a.okLoading,disabled:a.disabled,onClick:ye[1]||(ye[1]=Ke=>s("confirm"))},{default:v(()=>[S(z(h.value),1)]),_:1},8,["loading","disabled"])])],2)):$("",!0),a.resizable?(i(),c("span",{key:2,class:g([l(p).e("resizer"),l(p).is("vertical",ne.value),l(p).is("reverse",H.value)]),role:"separator","aria-orientation":"vertical","aria-label":l(k)("drawer.resize"),onPointerdown:R},null,42,mo)):$("",!0)],16,po)],6),[[Mt,P.value]])]),_:3})],8,["to"])):$("",!0)}}),un=Ae(go,"KkDrawer"),bo=K({name:"KkContainer",inheritAttrs:!1,__name:"Container",props:{size:{default:"large"},maxWidth:{},minHeight:{},padding:{default:"medium"},centered:{type:Boolean,default:!0},gap:{},direction:{default:"row"},align:{default:"stretch"},justify:{default:"start"},wrap:{type:Boolean,default:!0},bordered:{type:Boolean,default:!1},tag:{default:"div"},fluid:{type:Boolean,default:!1}},setup(a){const n=a,t=je("container"),e={small:"640px",medium:"960px",large:"1200px",full:"100%"},s={start:"flex-start",center:"center",end:"flex-end",stretch:"stretch"},o={start:"flex-start",center:"center",end:"flex-end","space-between":"space-between","space-around":"space-around","space-evenly":"space-evenly"},u={none:"0",small:"var(--kk-space-3)",medium:"var(--kk-space-5)",large:"var(--kk-space-6)"},p=m(()=>n.maxWidth!=null?Xe(n.maxWidth):n.fluid?"100%":e[n.size]),d=m(()=>n.centered&&!n.fluid);function k(){const C=n.padding;return typeof C=="string"&&u[C]?u[C]:Xe(C)??u.medium}const h=m(()=>[t.b(),t.is("bordered",n.bordered),t.is("centered",d.value)]),x=m(()=>{const C={maxWidth:p.value,padding:k(),display:"flex",flexDirection:n.direction,alignItems:s[n.align],justifyContent:o[n.justify],gap:Xe(n.gap)??void 0,flexWrap:n.wrap?"wrap":"nowrap"};return d.value&&(C.marginLeft="auto",C.marginRight="auto"),n.minHeight!=null&&(C.minHeight=Xe(n.minHeight)),n.bordered&&(C.border="1px solid var(--kk-border-color)",C.borderRadius="var(--kk-radius-lg)"),C});return(C,L)=>(i(),U(ot(a.tag),Oe({class:h.value,style:x.value},C.$attrs),{default:v(()=>[C.$slots.header?(i(),c("div",{key:0,class:g(l(t).e("header"))},[y(C.$slots,"header")],2)):$("",!0),y(C.$slots,"default"),C.$slots.footer?(i(),c("div",{key:1,class:g(l(t).e("footer"))},[y(C.$slots,"footer")],2)):$("",!0)]),_:3},16,["class","style"]))}}),Qn=Ae(bo,"KkContainer"),$a=Symbol("kk-skeleton"),ho=["aria-busy","aria-label"],yo={key:0},_o=K({name:"KkSkeleton",inheritAttrs:!1,__name:"Skeleton",props:{loading:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},variant:{default:"text"},width:{},height:{},rows:{default:0},rowWidths:{default:()=>[]},round:{type:Boolean,default:!1},count:{default:1},block:{type:Boolean,default:!1},thickness:{default:"default"}},setup(a){const n=a,t=bt(),e=je("skeleton"),{t:s}=st(),o=Je($a,null),u=m(()=>!!t.default),p=m(()=>!!t.template),d=m(()=>u.value||p.value),k=m(()=>o&&!d.value?o.loading.value:n.loading),h=m(()=>!!o&&!u.value);ht($a,{loading:k});const x=m(()=>[e.b(),e.is("animated",n.animated&&k.value),e.is("block",n.block),e.is("root",d.value)]),C={text:{width:"100%",height:14,round:!1},title:{width:"38%",height:20,round:!1},button:{width:"72px",height:32,round:!0},avatar:{height:40,round:!0},image:{width:"100%",height:160,round:!1},paragraph:{width:"100%",height:14,round:!1}},L={default:1,large:1.3};function P(){const V=C[n.variant],J=L[n.thickness]??1;return{width:n.width!=null?Xe(n.width):V.width,height:(n.height!=null?Xe(n.height):Xe(V.height*J))??"",round:n.round||V.round}}const W=m(()=>{const V=P(),J={height:V.height};return V.width&&(J.width=V.width),J}),X=m(()=>[e.e("item"),e.em("item",n.variant),e.is("round",P().round)]),B=m(()=>n.variant==="paragraph"?n.rows>0?n.rows:3:0);function E(V){const J=n.rowWidths;return J&&J[V]?J[V]:V===B.value-1?"60%":"100%"}const O=m(()=>{const V=L[n.thickness]??1;return Xe(C.paragraph.height*V)}),F=m(()=>Math.max(1,n.count));return(V,J)=>(i(),c("div",{class:g(x.value),"aria-busy":k.value&&!h.value?"true":void 0,"aria-label":k.value&&!h.value?l(s)("skeleton.loading"):void 0},[u.value?y(V.$slots,"default",{},void 0,void 0,0):p.value&&k.value?(i(),c("div",{key:1,class:g(l(e).e("custom"))},[y(V.$slots,"template")],2)):k.value?(i(),c(N,{key:2},[B.value>0?(i(),c("div",yo,[(i(!0),c(N,null,ve(B.value,ne=>(i(),c("div",{key:ne,class:g([l(e).e("item"),l(e).em("item","text"),l(e).is("block",n.block)]),style:De({width:E(ne-1),height:O.value})},null,6))),128))])):(i(!0),c(N,{key:1},ve(F.value,ne=>(i(),c("div",{key:ne,class:g(X.value),style:De(W.value)},null,6))),128))],64)):$("",!0)],10,ho))}}),ft=Ae(_o,"KkSkeleton"),Aa=Symbol("kkTabsContext"),xo=["aria-label"],wo=["aria-selected","aria-disabled","aria-controls","tabindex","onClick"],$o=["aria-label","onClick"],So=["aria-label"],Ko=["aria-label"],Co=K({name:"KkTabs",inheritAttrs:!1,__name:"Tabs",props:{modelValue:{default:""},type:{default:"line"},size:{default:"medium"},closable:{type:Boolean,default:!1},addable:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},position:{default:"top"},stretch:{type:Boolean,default:!1},animated:{type:Boolean,default:!0},justify:{default:"start"},beforeLeave:{type:Function,default:void 0}},emits:["update:modelValue","change","tab-change","tab-click","tab-remove","tab-add"],setup(a,{expose:n,emit:t}){const e=a,s=t,o=je("tabs"),{t:u}=st(),p=Ot("kk-tabs"),d=_([]),k=m(()=>e.position==="left"||e.position==="right"),h=m(()=>d.value.map(A=>A.name)),x=m(()=>{const A=e.modelValue;return A!==""&&A!==void 0&&h.value.includes(A)?A:d.value.length>0?d.value[0].name:A}),C=m(()=>e.addable||e.editable),L=m(()=>e.closable||e.editable);ht(Aa,{currentName:x,registerPane(A){d.value=[...d.value,A]},unregisterPane(A){d.value=d.value.filter(R=>R.uid!==A)}});function W(A){return d.value.find(R=>R.name===A)}function X(A){return L.value||A.closable}async function B(A){const R=W(A);if(!R||R.disabled)return;const te=x.value;if(A===te||e.beforeLeave&&await e.beforeLeave(A,te)===!1)return;s("update:modelValue",A);const oe={name:A,oldName:te};s("change",oe),s("tab-change",oe),await at(),Ee()}function E(A){A.disabled||(s("tab-click",A.name),B(A.name))}function O(A){const R=W(A);if(!(!R||!X(R)||R.disabled)){if(A===x.value){const te=h.value.indexOf(A),oe=h.value[te+1]??h.value[te-1]??"";s("update:modelValue",oe)}s("tab-remove",A)}}function F(){C.value&&s("tab-add")}const V=_(null),J=_(null),ne=new Map,H=_(0),ee=_(!1),ae=_(!1),se=_(0),$e=_(0),Z=_(0);function de(A,R){R?ne.set(A,R):ne.delete(A)}function xe(){const A=W(x.value);return A?ne.get(A.uid):void 0}function Ee(){const A=xe();A&&typeof A.scrollIntoView=="function"&&A.scrollIntoView({block:"nearest",inline:"nearest"})}function Pe(){const A=xe();A&&(k.value?(se.value=A.offsetHeight,$e.value=A.offsetWidth,Z.value=A.offsetTop):(se.value=A.offsetWidth,$e.value=A.offsetHeight,Z.value=A.offsetLeft))}function fe(){const A=V.value;if(!A)return;const R=Math.max(0,A.scrollWidth-A.clientWidth);H.value>R&&(H.value=R),ee.value=H.value>0,ae.value=H.value<R}function ge(){const A=V.value,R=(A==null?void 0:A.clientWidth)||200;H.value=Math.max(0,H.value-R),fe()}function Se(){const A=V.value;if(!A)return;const R=Math.max(0,A.scrollWidth-A.clientWidth),te=A.clientWidth||200;H.value=Math.min(R,H.value+te),fe()}function G(){fe(),Pe()}const ue=m(()=>{switch(e.justify){case"center":return"center";case"end":return"flex-end";case"space-between":return"space-between";case"space-around":return"space-around";default:return"flex-start"}}),Te=m(()=>({"--kk-tabs-justify":ue.value})),_e=m(()=>({"--kk-tabs-nav-offset":`${H.value}px`})),he=m(()=>{const R=e.type==="segment"?$e.value:2;return k.value?{transform:`translateY(${Z.value}px)`,height:`${se.value}px`,width:`${R}px`}:{transform:`translateX(${Z.value}px)`,width:`${se.value}px`,height:`${R}px`}});function Le(A){return[o.e("item"),o.is("active",A.name===x.value),o.is("disabled",A.disabled),o.is("closable",X(A))]}const Fe=m(()=>[o.b(),o.m(e.type),o.m(e.size),o.m(e.position),o.is("stretch",e.stretch),o.is("animated",e.animated),o.is("vertical",k.value)]),q=m(()=>[o.e("nav"),o.is("vertical",k.value)]);return Be(x,async()=>{await at(),Pe(),Ee()}),Be(d,async()=>{await at(),Pe(),fe()},{deep:!1}),qe(async()=>{await at(),Pe(),fe(),window.addEventListener("resize",G)}),et(()=>{window.removeEventListener("resize",G)}),n({setActive:B,removeTab:O,addTab:F,currentName:x}),(A,R)=>(i(),c("div",Oe({class:Fe.value,style:Te.value},A.$attrs),[r("div",{class:g([l(o).e("header"),l(o).is("vertical",k.value)])},[A.$slots.prefix?(i(),c("div",{key:0,class:g(l(o).e("prefix"))},[y(A.$slots,"prefix")],2)):$("",!0),r("div",{ref_key:"navScrollRef",ref:V,class:g(l(o).e("nav-scroll"))},[ee.value?(i(),c("button",{key:0,type:"button",class:g(l(o).e("nav-prev")),"aria-label":l(u)("pagination.prev"),onClick:ge},[y(A.$slots,"nav-prev",{},()=>[R[0]||(R[0]=r("svg",{viewBox:"0 0 24 24",width:"14",height:"14","aria-hidden":"true"},[r("path",{d:"M15 6l-6 6 6 6",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1))])],10,xo)):$("",!0),r("div",{ref_key:"navRef",ref:J,class:g(q.value),role:"tablist",style:De(_e.value)},[e.type!=="card"?(i(),c("div",{key:0,class:g(l(o).e("active-bar")),style:De(he.value)},null,6)):$("",!0),(i(!0),c(N,null,ve(d.value,te=>(i(),c("div",{key:te.uid,ref_for:!0,ref:oe=>de(te.uid,oe),class:g(Le(te)),role:"tab","aria-selected":te.name===x.value,"aria-disabled":te.disabled||void 0,"aria-controls":`${l(p)}-${te.name}`,tabindex:te.disabled?-1:0,onClick:oe=>E(te)},[r("span",{class:g(l(o).e("item-label"))},[te.hasLabelSlot?(i(),U(ot(te.renderLabel),{key:0})):(i(),c(N,{key:1},[S(z(te.label),1)],64))],2),X(te)?(i(),c("button",{key:0,type:"button",class:g(l(o).e("item-close")),"aria-label":l(u)("tabs.close",{label:String(te.label)}),onClick:Qe(oe=>O(te.name),["stop"])},[...R[1]||(R[1]=[r("svg",{viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":"true"},[r("path",{d:"M5 5L19 19M19 5L5 19",fill:"none",stroke:"currentColor","stroke-width":"2.4","stroke-linecap":"round"})],-1)])],10,$o)):$("",!0)],10,wo))),128))],6),ae.value?(i(),c("button",{key:1,type:"button",class:g(l(o).e("nav-next")),"aria-label":l(u)("pagination.next"),onClick:Se},[y(A.$slots,"nav-next",{},()=>[R[2]||(R[2]=r("svg",{viewBox:"0 0 24 24",width:"14",height:"14","aria-hidden":"true"},[r("path",{d:"M9 6l6 6-6 6",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1))])],10,So)):$("",!0)],2),r("div",{class:g(l(o).e("extra"))},[y(A.$slots,"extra"),y(A.$slots,"more"),C.value?(i(),c("button",{key:0,type:"button",class:g(l(o).e("add")),"aria-label":l(u)("tabs.add"),onClick:F},[y(A.$slots,"add-icon",{},()=>[R[3]||(R[3]=r("svg",{viewBox:"0 0 24 24",width:"16",height:"16","aria-hidden":"true"},[r("path",{d:"M12 5v14M5 12h14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"})],-1))])],10,Ko)):$("",!0)],2)],2),r("div",{class:g([l(o).e("content"),l(o).is("animated",e.animated)])},[y(A.$slots,"default")],2)],16))}}),To=["id","aria-hidden"],zo=K({name:"KkTabPane",inheritAttrs:!1,__name:"TabPane",props:{name:{},label:{default:""},disabled:{type:Boolean,default:!1},closable:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},forceRender:{type:Boolean,default:!1}},setup(a,{expose:n}){const t=a,e=bt(),s=je("tab-pane"),o=Ot("kk-tab-pane"),u=Je(Aa,null),p=m(()=>u?u.currentName.value===t.name:!1),d=m(()=>p.value||t.forceRender||!t.lazy);let k=0,h=0;const x=ln({uid:0,name:t.name,label:t.label,disabled:t.disabled,closable:t.closable,hasLabelSlot:!!e.label,renderLabel:()=>e.label?e.label({active:p.value,disabled:t.disabled}):null});return Be(()=>[t.name,t.label,t.disabled,t.closable,!!e.label],([C,L,P,W,X])=>{x.name=C,x.label=L,x.disabled=P,x.closable=W,x.hasLabelSlot=X}),qe(()=>{k=++h,x.uid=k,u==null||u.registerPane(x)}),et(()=>{k&&(u==null||u.unregisterPane(k))}),n({name:t.name}),(C,L)=>d.value?kt((i(),c("div",{key:0,id:`${l(o)}-${t.name}`,class:g([l(s).b(),l(s).is("active",p.value)]),role:"tabpanel","aria-hidden":!p.value||void 0},[y(C.$slots,"default")],10,To)),[[Mt,p.value]]):$("",!0)}}),Ft=Ae(Co,"KkTabs"),nt=Ae(zo,"KkTabPane"),Sa=/(auto|scroll|overlay)/;function Po(a){const n=[];let t=(a==null?void 0:a.parentElement)??null;for(;t;){const e=typeof getComputedStyle=="function"?getComputedStyle(t):null;e&&(Sa.test(e.overflow)||Sa.test(e.overflowY))&&n.push(t),t=t.parentElement}return n}function ja(a){var L;const n=_(((L=a.placement)==null?void 0:L.call(a))??"bottom-start"),t=_({x:0,y:0,width:void 0,ready:!1});let e=0,s=!1,o=[],u=null;const p=m(()=>{const P={position:"fixed",left:`${t.value.x}px`,top:`${t.value.y}px`,zIndex:"var(--kk-floating-z-index, 2000)"};return t.value.width!==void 0&&(P.width=`${t.value.width}px`),t.value.ready||(P.visibility="hidden"),P});function d(){var Z,de,xe,Ee,Pe;const P=a.reference.value,W=a.floating.value;if(!P||!W)return;const X=((Z=a.offset)==null?void 0:Z.call(a))??6,B=((de=a.viewportPadding)==null?void 0:de.call(a))??8,E=P.getBoundingClientRect(),O=W.getBoundingClientRect(),F=((xe=a.placement)==null?void 0:xe.call(a))??"bottom-start",[V,J="start"]=F.split("-"),ne=window.innerHeight||0,H=window.innerWidth||0;let ee=V;if(((Ee=a.flip)==null?void 0:Ee.call(a))??!0){const fe=ne-E.bottom,ge=E.top,Se=O.height+X+B;ee==="bottom"&&fe<Se&&ge>fe?ee="top":ee==="top"&&ge<Se&&fe>ge&&(ee="bottom")}let ae=E.left;J==="end"?ae=E.right-O.width:J!=="start"&&(ae=E.left+(E.width-O.width)/2);const se=H-O.width-B;ae=Math.min(Math.max(ae,B),Math.max(B,se));const $e=ee==="bottom"?E.bottom+X:E.top-O.height-X;n.value=J==="start"?ee:`${ee}-${J}`,t.value={x:ae,y:$e,width:(Pe=a.matchWidth)!=null&&Pe.call(a)?E.width:void 0,ready:!0}}async function k(){a.floating.value&&(t.value.ready||(t.value={...t.value,ready:!1}),await at(),d())}function h(){e||(e=requestAnimationFrame(()=>{e=0,d()}))}function x(){s||typeof window>"u"||(s=!0,o=Po(a.reference.value??null),window.addEventListener("scroll",h,!0),window.addEventListener("resize",h),o.forEach(P=>P.addEventListener("scroll",h,!0)),typeof ResizeObserver<"u"&&a.floating.value&&(u=new ResizeObserver(h),u.observe(a.floating.value)))}function C(){s&&(s=!1,window.removeEventListener("scroll",h,!0),window.removeEventListener("resize",h),o.forEach(P=>P.removeEventListener("scroll",h,!0)),o=[],u==null||u.disconnect(),u=null,e&&(cancelAnimationFrame(e),e=0))}return Be(()=>[a.reference.value,a.floating.value],([,P])=>{P&&k()}),et(()=>C()),{resolvedPlacement:n,floatingStyle:p,update:k,start:x,stop:C}}function ea(a,n,t={}){const e=t.events??["pointerdown"],s=t.capture??!0;let o=!1;function u(k){if(t.enabled&&!t.enabled())return;const h=k.target;if(!h)return;a.some(C=>{const L=C.value;return L?L===h||L.contains(h):!1})||n(k)}function p(){o||(o=!0,e.forEach(k=>document.addEventListener(k,u,s)))}function d(){o&&(o=!1,e.forEach(k=>document.removeEventListener(k,u,s)))}return qe(()=>{typeof document<"u"&&p()}),et(()=>{typeof document<"u"&&d()}),{start:p,stop:d}}const Lo=["aria-expanded","aria-disabled","aria-invalid"],Bo=["aria-label","onClick"],Mo=["title"],Vo=["value","readonly","placeholder","disabled","name","autofocus","aria-expanded","aria-activedescendant"],Oo=["aria-label"],Io=["id"],Eo=["checked","indeterminate"],Ao=["aria-multiselectable"],jo=["id","aria-selected","aria-disabled","onClick","onMouseenter"],Ro=["id","onClick","onMouseenter"],Fo=K({name:"KkSelect",inheritAttrs:!1,__name:"Select",props:{modelValue:{type:[String,Number,Boolean,null,Array],default:void 0},options:{default:()=>[]},multiple:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1},filterMethod:{},remote:{type:Boolean,default:!1},remoteMethod:{},allowCreate:{type:Boolean,default:!1},createFilter:{},clearable:{type:Boolean,default:!1},collapseTags:{type:Boolean,default:!1},maxTagCount:{default:void 0},multipleLimit:{default:-1},selectAll:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},placeholder:{default:""},size:{default:void 0},loading:{type:Boolean,default:!1},valueKey:{default:"value"},labelKey:{default:"label"},emptyText:{default:""},placement:{default:"bottom-start"},matchWidth:{type:Boolean,default:!0},popperClass:{default:""},popperWidth:{default:void 0},block:{type:Boolean,default:!1},name:{default:""},autofocus:{type:Boolean,default:!1},openOnFocus:{type:Boolean,default:!1}},emits:["update:modelValue","change","visible-change","clear","search","remove-tag","focus","blur","select","deselect"],setup(a,{expose:n,emit:t}){const e=a,s=t,o=je("select"),u=Ot("kk-select"),p=`${u}-listbox`,{t:d}=st(),k=Je(Nt,void 0),h=Je(Cn,void 0),x=m(()=>e.disabled||!!(k!=null&&k.disabled)),C=m(()=>e.size??(k==null?void 0:k.size)??"medium"),L=m(()=>{var b;return!!((b=h==null?void 0:h.message)!=null&&b.value)}),P=_(null),W=_(null),X=_(null),B=_(""),E=_(!1),O=_(!1),F=_(!1),V=_(-1),J=_([]),ne=_([]);function H(b){const M=b[e.valueKey],j=b[e.labelKey]??(M===null?"":String(M));return{value:M,label:j,disabled:!!b.disabled,isCreate:!1,raw:b}}const ee=m(()=>[...(e.options??[]).map(H),...ne.value]),ae=m(()=>e.remote),se=m(()=>e.multiple);function $e(b){return Array.isArray(b)}const Z=m(()=>se.value?$e(e.modelValue)?e.modelValue.filter(b=>b!==void 0):[]:e.modelValue==null?[]:[e.modelValue]);function de(b){return ee.value.find(M=>M.value===b)}function xe(b){return Z.value.includes(b)}const Ee=m(()=>e.filterable&&!e.remote),Pe=m(()=>ae.value?[...J.value,...ne.value]:ee.value),fe=m(()=>{let b=Pe.value;if(Ee.value){const M=B.value.trim().toLowerCase();M&&(b=b.filter(j=>e.filterMethod?e.filterMethod(M,j.raw):String(j.label).toLowerCase().includes(M)))}if(ge()){const M=B.value.trim();b=[...b,{value:M,label:M,disabled:!1,isCreate:!0,raw:{value:M,label:M}}]}return b});function ge(){if(!e.allowCreate||!e.filterable||ae.value)return!1;const b=B.value.trim();return!(!b||ee.value.some(j=>String(j.label).toLowerCase()===b.toLowerCase()||String(j.value).toLowerCase()===b.toLowerCase())||e.createFilter&&!e.createFilter(b,e.options??[]))}const Se=m(()=>fe.value.some(b=>!b.isCreate)||ge());async function G(b){if(!(!e.remote||!e.remoteMethod)){s("search",b);try{const M=await e.remoteMethod(b);J.value=(M??[]).map(H)}catch{J.value=[]}}}const ue=m(()=>e.placeholder?e.placeholder:se.value?d("select.multiplePlaceholder"):d("select.placeholder")),Te=m(()=>e.emptyText||d("select.noData")),_e=m(()=>{var M;if(se.value)return"";const b=Z.value[0];return b===void 0?"":((M=de(b))==null?void 0:M.label)??(b===null?"":String(b))}),he=m(()=>e.filterable&&(se.value||E.value)?B.value:_e.value),Le=m(()=>!e.filterable),Fe=m(()=>se.value?Z.value.length===0&&!B.value:e.filterable?!E.value&&_e.value==="":_e.value===""),q=m(()=>Z.value.map(b=>{var M;return{value:b,label:((M=de(b))==null?void 0:M.label)??(b===null?"":String(b))}})),A=m(()=>e.collapseTags&&e.maxTagCount&&e.maxTagCount>0?q.value.slice(0,e.maxTagCount):q.value),R=m(()=>e.collapseTags&&e.maxTagCount&&e.maxTagCount>0?Math.max(0,q.value.length-e.maxTagCount):0),te=m(()=>e.multipleLimit<0||Z.value.length<e.multipleLimit),oe=m(()=>{const b=fe.value.filter(M=>!M.disabled&&!M.isCreate);return b.length===0?!1:b.every(M=>xe(M.value))}),Ve=m(()=>{const b=fe.value.filter(j=>!j.disabled&&!j.isCreate);if(b.length===0)return!1;const M=b.filter(j=>xe(j.value)).length;return M>0&&M<b.length}),Q=ja({reference:P,floating:W,placement:()=>e.placement,offset:()=>6,flip:()=>!0,matchWidth:()=>!e.popperWidth&&e.matchWidth}),ye=m(()=>{const b=e.popperWidth?Xe(e.popperWidth):void 0;return b?{width:b}:{}}),Ke=ea([P,W],()=>it());function We(){var b,M;e.filterable?(b=X.value)==null||b.focus():(M=P.value)==null||M.focus()}function He(){const b=fe.value.findIndex(M=>!M.disabled);V.value=b}async function Re(){x.value||E.value||(F.value=!0,E.value=!0,O.value=!0,e.filterable&&ae.value&&G(""),He(),s("visible-change",!0),await at(),Q.update(),Q.start(),Ke.start(),We())}function it(){E.value&&(E.value=!1,s("visible-change",!1),e.filterable&&(B.value=""),Q.stop(),Ke.stop())}function rt(){E.value?it():Re()}function I(b){if(!x.value){if(b.target===X.value){E.value||Re();return}rt()}}function ce(b){if(!b.disabled){if(b.isCreate&&(ne.value.some(M=>String(M.value)===String(b.value))||(ne.value=[...ne.value,{...b,isCreate:!0}])),se.value)if(xe(b.value))me(Z.value.filter(M=>M!==b.value)),s("deselect",b.raw);else{if(!te.value)return;me([...Z.value,b.value]),s("select",b.raw)}else s("update:modelValue",b.value),s("change",b.value),s("select",b.raw),it();h==null||h.validate("change")}}function me(b){s("update:modelValue",b),s("change",b)}function Ce(b){ce(b)}function le(b){const M=de(b);me(Z.value.filter(j=>j!==b)),s("remove-tag",b),M&&s("deselect",M.raw),h==null||h.validate("change")}function be(b){le(b)}function Ze(){if(!x.value){if(se.value){const b=Z.value;me([]),b.forEach(M=>{const j=de(M);j&&s("deselect",j.raw)})}else s("update:modelValue",null),s("change",null);s("clear"),h==null||h.validate("change")}}function Ie(){const b=fe.value.filter(M=>!M.disabled&&!M.isCreate);if(oe.value)b.forEach(M=>s("deselect",M.raw)),me([]);else{const M=e.multipleLimit,j=M>0?b.slice(0,M):b;me(j.map(ie=>ie.value)),j.forEach(ie=>s("select",ie.raw))}h==null||h.validate("change")}function Ne(b){const M=fe.value;if(M.length===0)return;let j=V.value;for(let ie=0;ie<M.length&&(j=(j+b+M.length)%M.length,!!M[j].disabled);ie++);V.value=j}function dt(){const b=fe.value[V.value];b&&!b.disabled&&ce(b)}function St(b){if(!x.value)switch(b.key){case"ArrowDown":b.preventDefault(),E.value?Ne(1):Re();break;case"ArrowUp":b.preventDefault(),E.value?Ne(-1):Re();break;case"Enter":b.preventDefault(),E.value?dt():Re();break;case"Escape":E.value&&(b.preventDefault(),it());break;case"Tab":E.value&&it();break;case"Backspace":se.value&&!B.value&&Z.value.length>0&&(b.preventDefault(),le(Z.value[Z.value.length-1]));break}}function _t(b){B.value=b.target.value,ae.value?G(B.value):s("search",B.value),E.value||Re()}function It(b){O.value=!0,s("focus",b),!E.value&&(e.openOnFocus||e.filterable)&&Re()}function Ut(b){O.value=!1,s("blur",b),h==null||h.validate("blur"),it()}function Kt(b){return`${u}-opt-${b}`}const Et=m(()=>E.value&&V.value>=0?Kt(V.value):void 0),Ct=m(()=>e.clearable&&!x.value&&(se.value,Z.value.length>0)),At=m(()=>[o.b(),o.m(C.value),o.is("disabled",x.value),o.is("block",e.block),o.is("open",E.value),o.is("focused",O.value),o.is("invalid",L.value),o.is("multiple",se.value)]),jt=m(()=>[o.e("control"),o.em("control",C.value),o.is("disabled",x.value),o.is("focused",O.value),o.is("invalid",L.value)]),w=m(()=>[o.e("popper"),e.popperClass]);return Be(()=>e.modelValue,()=>{ae.value&&E.value&&G(B.value)}),n({focus:We,blur:()=>{var b;return(b=X.value)==null?void 0:b.blur()},open:()=>void Re(),close:it,toggle:()=>rt()}),(b,M)=>(i(),c("div",Oe({class:At.value},b.$attrs),[r("div",{ref_key:"triggerRef",ref:P,class:g(jt.value),role:"combobox","aria-expanded":E.value,"aria-haspopup":"listbox","aria-controls":p,"aria-disabled":x.value||void 0,"aria-invalid":L.value||void 0,tabindex:"0",onClick:I,onKeydown:St},[b.$slots.prefix?(i(),c("span",{key:0,class:g(l(o).e("prefix"))},[y(b.$slots,"prefix")],2)):$("",!0),se.value?(i(),c("span",{key:1,class:g(l(o).e("tags"))},[(i(!0),c(N,null,ve(A.value,j=>(i(),c("span",{key:String(j.value),class:g(l(o).e("tag"))},[y(b.$slots,"tag",{label:j.label,value:j.value,remove:be},()=>[r("span",{class:g(l(o).e("tag-text"))},z(j.label),3),x.value?$("",!0):(i(),c("button",{key:0,type:"button",class:g(l(o).e("tag-close")),"aria-label":l(d)("select.removeTag",{label:j.label}),onClick:Qe(ie=>be(j.value),["stop"])},[...M[1]||(M[1]=[r("svg",{viewBox:"0 0 24 24",width:"10",height:"10","aria-hidden":"true"},[r("path",{d:"M5 5L19 19M19 5L5 19",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1)])],10,Bo))])],2))),128)),R.value>0?(i(),c("span",{key:0,class:g([l(o).e("tag"),l(o).e("tag--collapse")]),title:l(d)("select.selectedCount",{count:q.value.length})}," +"+z(R.value),11,Mo)):$("",!0)],2)):$("",!0),r("input",{ref_key:"inputRef",ref:X,class:g(l(o).e("input")),value:he.value,readonly:Le.value,placeholder:Fe.value?ue.value:"",disabled:x.value,name:a.name||void 0,autofocus:a.autofocus,role:"combobox","aria-haspopup":"listbox","aria-expanded":E.value,"aria-controls":p,"aria-activedescendant":Et.value,autocomplete:"off",onInput:_t,onFocus:It,onBlur:Ut,onKeydown:St},null,42,Vo),Ct.value?(i(),c("button",{key:2,type:"button",class:g(l(o).e("clear")),"aria-label":l(d)("select.clear"),onClick:Qe(Ze,["stop"])},[...M[2]||(M[2]=[r("svg",{viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":"true"},[r("path",{d:"M5 5L19 19M19 5L5 19",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1)])],10,Oo)):$("",!0),r("span",{class:g(l(o).e("suffix"))},[y(b.$slots,"suffix",{},()=>[y(b.$slots,"arrow",{},()=>[(i(),c("svg",{class:g(l(o).e("arrow")),viewBox:"0 0 24 24",width:"14",height:"14","aria-hidden":"true"},[...M[3]||(M[3]=[r("path",{d:"M6 9l6 6 6-6",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])],2))])])],2)],42,Lo),(i(),U(sn,{to:"body"},[F.value?kt((i(),c("div",{key:0,id:l(u),ref_key:"popperRef",ref:W,class:g(w.value),style:De([l(Q).floatingStyle.value,ye.value]),onMousedown:M[0]||(M[0]=Qe(()=>{},["prevent"]))},[r("div",{class:g(l(o).e("dropdown"))},[b.$slots.header?(i(),c("div",{key:0,class:g(l(o).e("header"))},[y(b.$slots,"header")],2)):$("",!0),a.selectAll&&se.value?(i(),c("label",{key:1,class:g([l(o).e("select-all"),l(o).is("checked",oe.value),l(o).is("indeterminate",Ve.value)]),onClick:Qe(Ie,["prevent"])},[r("input",{type:"checkbox",checked:oe.value,indeterminate:Ve.value},null,8,Eo),r("span",null,z(oe.value?l(d)("select.deselectAll"):l(d)("select.selectAll")),1)],2)):$("",!0),Se.value?(i(),c("ul",{key:2,id:p,class:g(l(o).e("list")),role:"listbox","aria-multiselectable":se.value||void 0},[(i(!0),c(N,null,ve(fe.value,(j,ie)=>(i(),c(N,{key:String(j.value)},[j.isCreate?(i(),c("li",{key:1,id:Kt(ie),class:g([l(o).e("option"),l(o).e("option--create"),l(o).is("active",ie===V.value)]),role:"option","aria-selected":!1,onClick:we=>Ce(j),onMouseenter:we=>V.value=ie},[y(b.$slots,"create",{query:String(j.value)},()=>[r("span",{class:g(l(o).e("option-label"))},z(l(d)("select.create",{label:String(j.value)})),3)])],42,Ro)):(i(),c("li",{key:0,id:Kt(ie),class:g([l(o).e("option"),l(o).is("selected",xe(j.value)),l(o).is("active",ie===V.value),l(o).is("disabled",j.disabled)]),role:"option","aria-selected":xe(j.value),"aria-disabled":j.disabled||void 0,onClick:we=>Ce(j),onMouseenter:we=>V.value=ie},[y(b.$slots,"default",{option:j.raw,index:ie,selected:xe(j.value)},()=>[r("span",{class:g(l(o).e("option-label"))},z(j.label),3)])],42,jo))],64))),128))],10,Ao)):$("",!0),e.loading?(i(),c("div",{key:3,class:g(l(o).e("loading")),role:"status"},[y(b.$slots,"loading",{},()=>[S(z(l(d)("select.loading")),1)])],2)):!Se.value&&!ge()?(i(),c("div",{key:4,class:g(l(o).e("empty"))},[y(b.$slots,"empty",{},()=>[S(z(Te.value),1)])],2)):$("",!0),b.$slots.footer?(i(),c("div",{key:5,class:g(l(o).e("footer"))},[y(b.$slots,"footer")],2)):$("",!0)],2)],46,Io)),[[Mt,E.value]]):$("",!0)]))],16))}}),cn=Ae(Fo,"KkSelect"),Do=["aria-expanded","aria-disabled","aria-invalid","aria-activedescendant"],No=["aria-label","onClick"],Ho=["value","readonly","placeholder","disabled","name","aria-expanded","aria-activedescendant"],Uo=["aria-label"],Wo=["id"],qo=["aria-multiselectable"],Go=["id","aria-selected","aria-disabled","onClick"],Yo=["id","aria-multiselectable"],Xo=["id","aria-selected","aria-disabled","onClick","onMouseenter"],Zo=["checked"],Jo=20,Qo=K({name:"KkCascader",inheritAttrs:!1,__name:"Cascader",props:{modelValue:{default:void 0},options:{default:()=>[]},fieldNames:{default:()=>({value:"value",label:"label",children:"children",disabled:"disabled",leaf:"leaf"})},multiple:{type:Boolean,default:!1},checkStrictly:{type:Boolean,default:!0},emitPath:{type:Boolean,default:!0},showAllLevels:{type:Boolean,default:!0},separator:{default:" / "},clearable:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},placeholder:{default:""},size:{default:void 0},loading:{type:Boolean,default:!1},expandTrigger:{default:"click"},loadData:{type:Function,default:void 0},placement:{default:"bottom-start"},matchWidth:{type:Boolean,default:!1},popperClass:{default:""},block:{type:Boolean,default:!1},name:{default:""},filterable:{type:Boolean,default:!1},filterMethod:{type:Function,default:void 0}},emits:["update:modelValue","change","visible-change","clear","expand-change","load","focus","blur"],setup(a,{expose:n,emit:t}){const e=a,s=t,o=je("cascader"),u=Ot("kk-cascader"),p=`${u}-listbox`,{t:d}=st(),k=Je(Nt,void 0),h=Je(Cn,void 0),x=m(()=>e.disabled||!!(k!=null&&k.disabled)),C=m(()=>e.size??(k==null?void 0:k.size)??"medium"),L=m(()=>{var T;return!!((T=h==null?void 0:h.message)!=null&&T.value)}),P=m(()=>e.multiple),W=_(null),X=_(null),B=_(null),E=_(""),O=_(!1),F=_(!1),V=_(!1),J=_([]),ne=_(0),H=_(new Map),ee=_(new Set),ae=m(()=>{var T,Y,D,pe,Me;return{value:((T=e.fieldNames)==null?void 0:T.value)??"value",label:((Y=e.fieldNames)==null?void 0:Y.label)??"label",children:((D=e.fieldNames)==null?void 0:D.children)??"children",disabled:((pe=e.fieldNames)==null?void 0:pe.disabled)??"disabled",leaf:((Me=e.fieldNames)==null?void 0:Me.leaf)??"leaf"}});function se(T){return JSON.stringify(T)}function $e(T,Y){const D=H.value.get(se(Y));if(D)return D;const pe=T[ae.value.children];return qt(pe)?pe:void 0}function Z(T,Y,D){return T.map(pe=>{const Me=pe[ae.value.value],Ue=Vn(Me)?"":Me,pt=[...Y,Ue],vt=$e(pe,pt),ca=qt(vt)?vt:[],da=pe[ae.value.leaf]===!0?!0:ca.length>0?!1:!e.loadData||vt!==void 0,pa=pe[ae.value.label];return{value:Ue,label:Vn(pa)?String(Ue):String(pa),disabled:pe[ae.value.disabled]===!0,isLeaf:da,level:D,path:pt,children:da?[]:Z(ca,pt,D+1),raw:pe}})}const de=m(()=>Z(e.options??[],[],0)),xe=m(()=>{const T=[];let Y=de.value,D=0;for(;D<Jo;){T.push({level:D,nodes:Y,loading:!1});const pe=J.value[D],Me=Y.find(Ue=>Ue.value===pe);if(!Me||Me.isLeaf)break;if(ee.value.has(se(Me.path))){T.push({level:D+1,nodes:[],loading:!0});break}Y=Me.children,D+=1}return T});function Ee(T){let Y=de.value,D;for(const pe of T){if(D=Y.find(Me=>Me.value===pe),!D)return;Y=D.children}return D}function Pe(T){const Y=[];let D=de.value;for(const pe of T){const Me=D.find(Ue=>Ue.value===pe);if(!Me){Y.push(String(pe));break}Y.push(Me.label),D=Me.children}return Y}function fe(T){const Y=[...de.value];for(;Y.length>0;){const D=Y.shift();if(!D)break;if(D.value===T)return D.path;Y.push(...D.children)}}const ge=m(()=>{const T=e.modelValue;return Vn(T)?[]:P.value?qt(T)?e.emitPath?T.filter(qt):T.map(Y=>fe(Y)??[Y]):[]:qt(T)?e.emitPath?[T.slice()]:[]:e.emitPath?[]:[fe(T)??[]]});function Se(T){const Y=se(T.path);return ge.value.some(D=>se(D)===Y)}function G(T,Y){return J.value[Y]===T.value}function ue(T){return T.length===0?"":e.showAllLevels?T.join(e.separator):T[T.length-1]}const Te=m(()=>e.placeholder||d("cascader.placeholder")),_e=m(()=>d("cascader.noData")),he=m(()=>{if(P.value)return"";const T=ge.value[0];return!T||T.length===0?"":ue(Pe(T))}),Le=m(()=>e.filterable&&O.value?E.value:he.value),Fe=m(()=>!e.filterable),q=m(()=>P.value?ge.value.length===0&&!E.value:e.filterable?!O.value&&he.value==="":he.value===""),A=m(()=>ge.value.map(T=>{var Y;return{path:T,key:se(T),text:ue(Pe(T)),node:(Y=Ee(T))==null?void 0:Y.raw}})),R=m(()=>e.filterable&&E.value.trim().length>0);function te(T,Y=[]){return T.forEach(D=>{(D.isLeaf||e.checkStrictly)&&Y.push(D),D.children.length>0&&te(D.children,Y)}),Y}const oe=m(()=>{if(!R.value)return[];const T=E.value.trim(),Y=T.toLowerCase();return te(de.value).filter(D=>e.filterMethod?e.filterMethod(T,D.raw):ue(Pe(D.path)).toLowerCase().includes(Y))});function Ve(T,Y){const D=Y.trim();if(!D)return[{text:T,match:!1}];const pe=T.toLowerCase(),Me=D.toLowerCase(),Ue=[];let pt=0;for(;pt<T.length;){const vt=pe.indexOf(Me,pt);if(vt===-1){Ue.push({text:T.slice(pt),match:!1});break}vt>pt&&Ue.push({text:T.slice(pt,vt),match:!1}),Ue.push({text:T.slice(vt,vt+D.length),match:!0}),pt=vt+D.length}return Ue}const Q=ja({reference:W,floating:X,placement:()=>e.placement,offset:()=>6,flip:()=>!0,matchWidth:()=>e.matchWidth}),ye=ea([W,X],()=>Re());function Ke(){var T,Y;e.filterable?(T=B.value)==null||T.focus():(Y=W.value)==null||Y.focus()}function We(){const T=ge.value[0]??[];J.value=T.slice(),ne.value=Math.max(0,T.length-1)}async function He(){x.value||O.value||(V.value=!0,O.value=!0,F.value=!0,We(),s("visible-change",!0),await at(),Q.update(),Q.start(),ye.start(),Ke())}function Re(){O.value&&(O.value=!1,s("visible-change",!1),E.value="",Q.stop(),ye.stop())}function it(){O.value?Re():He()}function rt(T){if(!x.value){if(T.target===B.value){O.value||He();return}it()}}async function I(T){if(!e.loadData)return;const Y=se(T.path),D=new Set(ee.value);D.add(Y),ee.value=D;try{const pe=await e.loadData(T.raw,T.path),Me=new Map(H.value);Me.set(Y,pe??[]),H.value=Me}catch{}finally{const pe=new Set(ee.value);pe.delete(Y),ee.value=pe,s("load",{node:T.raw,path:T.path})}}function ce(T){if(!e.loadData||T.isLeaf)return;const Y=se(T.path);H.value.has(Y)||ee.value.has(Y)||I(T)}function me(T,Y){const D=J.value.slice(0,T);D[T]=Y,J.value=D}function Ce(T){const Y=e.emitPath?T.path:T.value;s("update:modelValue",Y),s("change",Y),h==null||h.validate("change"),T.isLeaf&&Re()}function le(T){const Y=e.emitPath?T:T.map(D=>D.length>0?D[D.length-1]:"");s("update:modelValue",Y),s("change",Y),h==null||h.validate("change")}function be(T){const Y=se(T),D=ge.value.findIndex(Me=>se(Me)===Y),pe=D>=0?ge.value.filter((Me,Ue)=>Ue!==D):[...ge.value,T];le(pe)}function Ze(T,Y){T.disabled||(me(Y,T.value),ne.value=Y,ce(T),s("expand-change",T.path),!(!e.checkStrictly&&!T.isLeaf)&&(P.value?be(T.path):Ce(T)))}function Ie(T){T.disabled||(J.value=T.path.slice(0,-1),ne.value=Math.max(0,T.path.length-1),P.value?be(T.path):Ce(T))}function Ne(T,Y){e.expandTrigger!=="hover"||T.disabled||(me(Y,T.value),ne.value=Y,ce(T),s("expand-change",T.path))}function dt(T){if(x.value)return;const Y=se(T);le(ge.value.filter(D=>se(D)!==Y)),h==null||h.validate("change")}function St(){if(x.value)return;let T=[];!P.value&&!e.emitPath&&(T=null),s("update:modelValue",T),s("change",T),s("clear"),E.value="",h==null||h.validate("change")}function _t(){return Math.min(ne.value,Math.max(0,xe.value.length-1))}function It(T){const Y=_t(),D=xe.value[Y];if(!D||D.nodes.length===0)return;let pe=D.nodes.findIndex(Ue=>Ue.value===J.value[Y]);for(let Ue=0;Ue<D.nodes.length&&(pe=(pe+T+D.nodes.length)%D.nodes.length,!!D.nodes[pe].disabled);Ue++);const Me=D.nodes[pe];Me&&(me(Y,Me.value),ce(Me))}function Ut(){const T=_t(),Y=xe.value[T],D=Y==null?void 0:Y.nodes.find(pe=>pe.value===J.value[T]);!D||D.isLeaf||(ce(D),xe.value.length>T+1&&(ne.value=T+1))}function Kt(){ne.value>0&&(ne.value-=1)}function Et(){const T=_t(),Y=xe.value[T],D=Y==null?void 0:Y.nodes.find(pe=>pe.value===J.value[T]);if(!(!D||D.disabled)){if(!e.checkStrictly&&!D.isLeaf){ce(D),s("expand-change",D.path);return}P.value?be(D.path):Ce(D)}}function Ct(T){if(!x.value)switch(T.key){case"ArrowDown":T.preventDefault(),O.value?It(1):He();break;case"ArrowUp":T.preventDefault(),O.value?It(-1):He();break;case"ArrowRight":O.value&&(T.preventDefault(),Ut());break;case"ArrowLeft":O.value&&(T.preventDefault(),Kt());break;case"Enter":T.preventDefault(),O.value?Et():He();break;case"Escape":O.value&&(T.preventDefault(),Re());break;case"Tab":O.value&&Re();break}}function At(T){E.value=T.target.value,O.value||He()}function jt(T){F.value=!0,s("focus",T)}function w(T){F.value=!1,s("blur",T),h==null||h.validate("blur"),Re()}function b(T,Y){return`${u}-opt-${T}-${Y}`}const M=m(()=>{if(!O.value)return;const T=_t(),Y=xe.value[T];if(!Y)return;const D=Y.nodes.findIndex(pe=>pe.value===J.value[T]);return D>=0?b(T,D):void 0}),j=m(()=>e.clearable&&!x.value&&ge.value.length>0),ie=m(()=>!R.value&&de.value.length===0),we=m(()=>[o.b(),o.m(C.value),o.is("disabled",x.value),o.is("block",e.block),o.is("open",O.value),o.is("focused",F.value),o.is("invalid",L.value),o.is("multiple",P.value)]),ct=m(()=>[o.e("control"),o.em("control",C.value),o.is("disabled",x.value),o.is("focused",F.value),o.is("invalid",L.value)]),xt=m(()=>[o.e("popper"),e.popperClass]);function tl(){const T=[];return ge.value.forEach(Y=>{const D=Ee(Y);D&&T.push(D.raw)}),T}return n({focus:Ke,blur:()=>{var T;return(T=B.value)==null?void 0:T.blur()},open:()=>void He(),close:Re,clear:St,getCheckedNodes:tl}),(T,Y)=>(i(),c("div",Oe({class:we.value},T.$attrs),[r("div",{ref_key:"triggerRef",ref:W,class:g(ct.value),role:"combobox","aria-expanded":O.value,"aria-haspopup":"listbox","aria-controls":p,"aria-disabled":x.value||void 0,"aria-invalid":L.value||void 0,"aria-activedescendant":M.value,tabindex:"0",onClick:rt,onKeydown:Ct},[T.$slots.prefix?(i(),c("span",{key:0,class:g(l(o).e("prefix"))},[y(T.$slots,"prefix")],2)):$("",!0),P.value?(i(),c("span",{key:1,class:g(l(o).e("tags"))},[(i(!0),c(N,null,ve(A.value,D=>(i(),c("span",{key:D.key,class:g(l(o).e("tag"))},[y(T.$slots,"tag",{node:D.node,path:D.path,text:D.text,remove:()=>dt(D.path)},()=>[r("span",{class:g(l(o).e("tag-text"))},z(D.text),3),x.value?$("",!0):(i(),c("button",{key:0,type:"button",class:g(l(o).e("tag-close")),"aria-label":l(d)("common.remove"),onClick:Qe(pe=>dt(D.path),["stop"])},[...Y[2]||(Y[2]=[r("svg",{viewBox:"0 0 24 24",width:"10",height:"10","aria-hidden":"true"},[r("path",{d:"M5 5L19 19M19 5L5 19",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1)])],10,No))])],2))),128))],2)):$("",!0),r("input",{ref_key:"inputRef",ref:B,class:g(l(o).e("input")),value:Le.value,readonly:Fe.value,placeholder:q.value?Te.value:"",disabled:x.value,name:a.name||void 0,role:"combobox","aria-haspopup":"listbox","aria-expanded":O.value,"aria-controls":p,"aria-activedescendant":M.value,autocomplete:"off",onInput:At,onFocus:jt,onBlur:w,onKeydown:Ct},null,42,Ho),j.value?(i(),c("button",{key:2,type:"button",class:g(l(o).e("clear")),"aria-label":l(d)("cascader.clear"),onClick:Qe(St,["stop"])},[...Y[3]||(Y[3]=[r("svg",{viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":"true"},[r("path",{d:"M5 5L19 19M19 5L5 19",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1)])],10,Uo)):$("",!0),r("span",{class:g(l(o).e("suffix"))},[y(T.$slots,"suffix",{},()=>[(i(),c("svg",{class:g(l(o).e("arrow")),viewBox:"0 0 24 24",width:"14",height:"14","aria-hidden":"true"},[...Y[4]||(Y[4]=[r("path",{d:"M6 9l6 6 6-6",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])],2))])],2)],42,Do),(i(),U(sn,{to:"body"},[V.value?kt((i(),c("div",{key:0,id:l(u),ref_key:"popperRef",ref:X,class:g(xt.value),style:De(l(Q).floatingStyle.value),onMousedown:Y[1]||(Y[1]=Qe(()=>{},["prevent"]))},[r("div",{class:g(l(o).e("dropdown"))},[e.loading?(i(),c("div",{key:0,class:g(l(o).e("loading")),role:"status"},[y(T.$slots,"loading",{},()=>[S(z(l(d)("cascader.loading")),1)])],2)):R.value?(i(),c(N,{key:1},[oe.value.length>0?(i(),c("ul",{key:0,id:p,class:g(l(o).e("list")),role:"listbox","aria-multiselectable":P.value||void 0},[(i(!0),c(N,null,ve(oe.value,(D,pe)=>(i(),c("li",{id:b(0,pe),key:se(D.path),class:g([l(o).e("node"),l(o).is("selected",Se(D)),l(o).is("disabled",D.disabled)]),role:"option","aria-selected":Se(D),"aria-disabled":D.disabled||void 0,onClick:Me=>Ie(D)},[r("span",{class:g(l(o).e("label"))},[(i(!0),c(N,null,ve(Ve(ue(Pe(D.path)),E.value),(Me,Ue)=>(i(),c(N,{key:Ue},[Me.match?(i(),c("span",{key:0,class:g(l(o).e("match"))},z(Me.text),3)):(i(),c(N,{key:1},[S(z(Me.text),1)],64))],64))),128))],2)],10,Go))),128))],10,qo)):(i(),c("div",{key:1,class:g(l(o).e("empty"))},[y(T.$slots,"empty",{},()=>[S(z(l(d)("common.noMatch")),1)])],2))],64)):ie.value?(i(),c("div",{key:2,class:g(l(o).e("empty"))},[y(T.$slots,"empty",{},()=>[S(z(_e.value),1)])],2)):(i(),c("div",{key:3,class:g(l(o).e("panel"))},[(i(!0),c(N,null,ve(xe.value,D=>(i(),c("ul",{id:D.level===0?p:void 0,key:D.level,class:g([l(o).e("menu"),l(o).is("loading",D.loading)]),role:"listbox","aria-multiselectable":P.value||void 0},[D.loading?(i(),c("li",{key:0,class:g(l(o).e("loading")),role:"status"},[y(T.$slots,"loading",{},()=>[S(z(l(d)("cascader.loading")),1)])],2)):D.nodes.length===0?(i(),c("li",{key:1,class:g(l(o).e("empty"))},[y(T.$slots,"empty",{},()=>[S(z(_e.value),1)])],2)):(i(!0),c(N,{key:2},ve(D.nodes,(pe,Me)=>(i(),c("li",{id:b(D.level,Me),key:se(pe.path),class:g([l(o).e("node"),l(o).is("active",G(pe,D.level)),l(o).is("selected",Se(pe)),l(o).is("disabled",pe.disabled)]),role:"option","aria-selected":Se(pe),"aria-disabled":pe.disabled||void 0,onClick:Ue=>Ze(pe,D.level),onMouseenter:Ue=>Ne(pe,D.level)},[P.value?(i(),c("span",{key:0,class:g(l(o).e("checkbox"))},[r("input",{type:"checkbox",tabindex:"-1",checked:Se(pe),onClick:Y[0]||(Y[0]=Qe(()=>{},["prevent"]))},null,8,Zo)],2)):$("",!0),r("span",{class:g(l(o).e("label"))},[y(T.$slots,"default",{node:pe.raw,level:D.level,label:pe.label,selected:Se(pe),isLeaf:pe.isLeaf},()=>[S(z(pe.label),1)])],2),pe.isLeaf?$("",!0):(i(),c("svg",{key:1,class:g(l(o).e("node-arrow")),viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":"true"},[...Y[5]||(Y[5]=[r("path",{d:"M9 6l6 6-6 6",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])],2))],42,Xo))),128))],10,Yo))),128))],2))],2)],46,Wo)),[[Mt,O.value]]):$("",!0)]))],16))}}),Pn=Ae(Qo,"KkCascader"),es=["aria-disabled","aria-label"],ts=["disabled"],ns=["src","alt"],as=["title"],ls=["aria-label","onClick"],os=["aria-label","onClick"],ss=["aria-label","onClick"],is=["aria-disabled","aria-label"],rs=["aria-label"],us=["aria-label"],cs=["src","alt"],ds=K({name:"KkUpload",inheritAttrs:!1,__name:"Upload",props:{modelValue:{default:()=>[]},action:{default:""},method:{default:"POST"},headers:{default:()=>({})},data:{default:()=>({})},name:{default:"file"},withCredentials:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},accept:{default:""},directory:{type:Boolean,default:!1},limit:{default:0},maxSize:{default:0},minSize:{default:0},drag:{type:Boolean,default:!1},listType:{default:"text"},showFileList:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},autoUpload:{type:Boolean,default:!0},httpRequest:{},beforeUpload:{},beforeRemove:{},onExceed:{},onError:{},paste:{type:Boolean,default:!1},tip:{default:""},size:{default:void 0},previewModal:{type:Boolean,default:!0}},emits:["update:modelValue","change","progress","success","error","remove","exceed","preview"],setup(a,{expose:n,emit:t}){const e=a,s=t,o=je("upload"),{t:u}=st(),p=Je(Nt,void 0),d=m(()=>e.disabled||!!(p!=null&&p.disabled)),k=m(()=>e.size??(p==null?void 0:p.size)??"medium"),h=_(null),x=_(e.modelValue?e.modelValue.map(I=>({...I})):[]),C=_(0),L=_(!1),P=new Map,W=new Set;let X=0;function B(){return X+=1,`kk-upload-${X}`}let E;function O(){return x.value.map(I=>({...I}))}function F(){const I=O();E=I,s("update:modelValue",I)}function V(){F(),s("change",O())}Be(()=>e.modelValue,I=>{if(I===E)return;const ce=I?I.map(me=>({...me})):[];H(ce),x.value=ce});function J(){return typeof URL<"u"&&typeof URL.createObjectURL=="function"}function ne(I){if(J()&&typeof URL.revokeObjectURL=="function")try{URL.revokeObjectURL(I)}catch{}W.delete(I)}function H(I){const ce=new Set(I.map(me=>me.url).filter(me=>!!me));for(const me of[...W])ce.has(me)||ne(me)}function ee(){for(const I of[...W])ne(I)}function ae(I,ce){const me=ce.split(",").map(be=>be.trim()).filter(Boolean);if(me.length===0)return!0;const Ce=I.name||"",le=I.type||"";return me.some(be=>be.startsWith(".")?Ce.toLowerCase().endsWith(be.toLowerCase()):be.endsWith("/*")?le.startsWith(be.slice(0,-1)):le===be)}function se(I,ce,me){var be;const Ce=u(`upload.${ce}`,me);I.status="fail",I.error=Ce;const le=((be=e.onError)==null?void 0:be.call(e,{file:I,error:Ce}))!==!1;return le&&s("error",{file:I,error:Ce}),le}async function $e(I){const ce=e.beforeUpload;if(!ce)return I;try{const me=await ce(I);if(me===!1)return null;if(me instanceof Blob){const Ce=me;return{...I,raw:Ce,name:Ce.name||I.name,size:Ce.size,type:Ce.type||I.type}}return I}catch{return null}}function Z(I){return I?Array.isArray(I)?I:Array.from(I):[]}async function de(I){if(d.value)return;const ce=Z(I);if(ce.length===0)return;const me=[],Ce=[];for(const le of ce){const be={uid:B(),name:le.name,size:le.size,type:le.type,status:"ready",percent:0,raw:le};if(e.accept&&!ae(le,e.accept)){se(be,"typeNotAllowed",{name:be.name})&&me.push(be);continue}const Ze=e.minSize>0&&le.size<e.minSize,Ie=e.maxSize>0&&le.size>e.maxSize;if(Ze||Ie){const dt=Ze?e.minSize:e.maxSize;se(be,"sizeExceed",{name:be.name,size:co(dt)})&&me.push(be);continue}const Ne=await $e(be);if(Ne){if((e.listType==="picture"||e.listType==="picture-card")&&J()&&Ne.raw){const dt=URL.createObjectURL(Ne.raw);Ne.url=dt,W.add(dt)}me.push(Ne),Ce.push(Ne)}}if(me.length!==0){if(e.limit>0){const le=e.limit-x.value.length;if(me.length>le&&le>=0){const be=me.slice(le);s("exceed",be),me.splice(le),Ce.splice(le)}}x.value.push(...me),V(),e.autoUpload&&Ce.forEach(le=>xe(le))}}function xe(I){if(!I){Ee();return}if(I.status==="success")return;I.status="uploading",I.percent=0,V();const ce=Ie=>{I.percent=Math.min(100,Math.max(0,Math.round(Ie.percent))),s("progress",{file:I,percent:I.percent}),F()},me=Ie=>{I.status="success",I.percent=100,I.response=Ie,s("success",{file:I,response:Ie}),V()},Ce=Ie=>{I.status="fail";const Ne=Ie instanceof Error?Ie.message:typeof Ie=="string"?Ie:u("upload.fail");I.error=Ne,s("error",{file:I,error:Ne}),V()},le={file:I.raw,name:e.name??"file",data:e.data??{},headers:e.headers??{},withCredentials:!!e.withCredentials,action:e.action??"",method:(e.method??"POST").toUpperCase(),onProgress:ce,onSuccess:me,onError:Ce};if(e.httpRequest){const Ie=e.httpRequest(le);Ie!==void 0&&Promise.resolve(Ie).then(Ne=>me(Ne)).catch(Ne=>Ce(Ne));return}if(!le.action){Ce(new Error(u("upload.empty")));return}const be=new XMLHttpRequest;P.set(I.uid,be),be.withCredentials=le.withCredentials,be.open(le.method,le.action,!0);for(const[Ie,Ne]of Object.entries(le.headers))be.setRequestHeader(Ie,Ne);be.upload&&be.upload.addEventListener("progress",Ie=>{Ie.lengthComputable&&ce({percent:Ie.loaded/Ie.total*100})}),be.addEventListener("load",()=>{if(P.delete(I.uid),be.status<200||be.status>=300){Ce(new Error(`HTTP ${be.status}`));return}let Ie=be.response;try{Ie=JSON.parse(be.responseText)}catch{}me(Ie)}),be.addEventListener("error",()=>{P.delete(I.uid),Ce(new Error(u("upload.fail")))}),be.addEventListener("abort",()=>{P.delete(I.uid)});const Ze=new FormData;for(const[Ie,Ne]of Object.entries(le.data))Ze.append(Ie,String(Ne));le.file&&Ze.append(le.name,le.file,I.name),be.send(Ze)}function Ee(){x.value.filter(I=>I.status==="ready").forEach(I=>xe(I))}function Pe(I){var ce;if(I!=null){(ce=P.get(I))==null||ce.abort(),P.delete(I);return}P.forEach(me=>me.abort()),P.clear()}function fe(){Pe(),ee(),x.value=[],V()}async function ge(I,ce){var le;if((le=ce==null?void 0:ce.preventDefault)==null||le.call(ce),d.value)return;if(e.beforeRemove)try{if(await e.beforeRemove(I)===!1)return}catch{return}const me=x.value.findIndex(be=>be.uid===I.uid);if(me===-1)return;const[Ce]=x.value.splice(me,1);Ce!=null&&Ce.url&&W.has(Ce.url)&&ne(Ce.url),s("remove",Ce),V()}function Se(I){I.status="ready",I.error=void 0,xe(I)}const G=_(!1),ue=_(null),Te=_(0);let _e=null;function he(I){ue.value=I,G.value=!0,Te.value=Zn(),_e=Jn()}function Le(){G.value=!1,ue.value=null,_e==null||_e(),_e=null}function Fe(I){s("preview",I),e.previewModal&&I.url&&he(I)}function q(I){I.key==="Escape"&&Le()}Be(G,I=>{typeof window>"u"||(I?window.addEventListener("keydown",q):window.removeEventListener("keydown",q))});function A(){var I;d.value||(I=h.value)==null||I.click()}function R(I){const ce=I.target;de(ce.files),ce.value=""}function te(){A()}function oe(I){(I.key==="Enter"||I.key===" ")&&(I.preventDefault(),A())}function Ve(I){d.value||!e.drag||(I.preventDefault(),C.value+=1,L.value=!0)}function Q(I){d.value||!e.drag||I.preventDefault()}function ye(I){d.value||!e.drag||(I.preventDefault(),C.value-=1,C.value<=0&&(C.value=0,L.value=!1))}function Ke(I){var ce;d.value||!e.drag||(I.preventDefault(),C.value=0,L.value=!1,de(((ce=I.dataTransfer)==null?void 0:ce.files)??null))}function We(I){var me;if(d.value||!e.paste)return;const ce=(me=I.clipboardData)==null?void 0:me.files;ce&&ce.length>0&&(I.preventDefault(),de(ce))}et(()=>{Pe(),ee(),typeof window<"u"&&window.removeEventListener("keydown",q),_e==null||_e()});const He=m(()=>{const I={};return e.accept&&(I.accept=e.accept),e.multiple&&!e.directory&&(I.multiple=!0),e.directory&&(I.webkitdirectory=!0),I}),Re=m(()=>[o.b(),o.m(k.value),o.is("disabled",d.value),o.is("drag",e.drag),o.is("picture-card",e.listType==="picture-card")]),it=m(()=>[o.e("list"),o.m(e.listType),o.is("dragover",L.value&&e.drag)]),rt=m(()=>e.listType==="picture-card");return n({submit:Ee,abort:Pe,clear:fe,upload:xe,openFileDialog:A}),(I,ce)=>{var me,Ce;return i(),c("div",Oe({class:Re.value},I.$attrs,{onPaste:We}),[r("input",Oe({ref_key:"inputRef",ref:h,class:"kk-upload__input",type:"file"},He.value,{onChange:R}),null,16),rt.value?$("",!0):(i(),c("div",{key:0,class:g([l(o).e("trigger"),l(o).is("dragover",L.value&&a.drag)]),role:"button",tabindex:"0","aria-disabled":d.value||void 0,"aria-label":l(u)("upload.clickUpload"),onClick:te,onKeydown:oe,onDragenter:Ve,onDragover:Q,onDragleave:ye,onDrop:Ke},[y(I.$slots,"default",{disabled:d.value,openFileDialog:A},()=>[r("button",{type:"button",class:g(l(o).e("btn")),disabled:d.value},z(l(u)("upload.clickUpload")),11,ts)])],42,es)),a.tip||I.$slots.tip?(i(),c("div",{key:1,class:g(l(o).e("tip"))},[y(I.$slots,"tip",{},()=>[S(z(a.tip),1)])],2)):$("",!0),a.showFileList?(i(),c("div",{key:2,class:g(it.value),role:"list",onDragenter:ce[0]||(ce[0]=le=>rt.value&&a.drag?Ve:void 0),onDragover:ce[1]||(ce[1]=le=>rt.value&&a.drag?Q:void 0),onDragleave:ce[2]||(ce[2]=le=>rt.value&&a.drag?ye:void 0),onDrop:ce[3]||(ce[3]=le=>rt.value&&a.drag?Ke:void 0)},[x.value.length?(i(!0),c(N,{key:0},ve(x.value,(le,be)=>(i(),c("div",{key:le.uid,class:g([l(o).e("item"),l(o).m(e.listType)]),role:"listitem"},[y(I.$slots,"file",{file:le,index:be,remove:Ze=>ge(le,Ze),retry:()=>Se(le),preview:()=>Fe(le)},()=>[(e.listType==="picture"||e.listType==="picture-card")&&le.url?(i(),c("div",{key:0,class:g(l(o).e("thumb"))},[r("img",{src:le.url,alt:le.name},null,8,ns)],2)):$("",!0),r("div",{class:g(l(o).e("item-body"))},[r("span",{class:g(l(o).e("item-name")),title:le.name},z(le.name),11,as),le.status==="uploading"?(i(),c("div",{key:0,class:g(l(o).e("progress"))},[r("div",{class:g(l(o).e("progress-bar")),style:De({width:le.percent+"%"})},null,6)],2)):le.status==="fail"&&le.error?(i(),c("span",{key:1,class:g(l(o).e("item-error"))},z(le.error),3)):le.status==="success"?(i(),c("span",{key:2,class:g(l(o).e("item-done"))},z(l(u)("upload.success")),3)):$("",!0)],2),r("div",{class:g(l(o).e("actions"))},[e.listType!=="text"&&le.url&&!d.value?(i(),c("button",{key:0,type:"button",class:g(l(o).e("action")),"aria-label":l(u)("upload.preview"),onClick:Ze=>Fe(le)},[...ce[4]||(ce[4]=[r("svg",{viewBox:"0 0 24 24",width:"16",height:"16","aria-hidden":"true"},[r("path",{d:"M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z",fill:"none",stroke:"currentColor","stroke-width":"2"}),r("circle",{cx:"12",cy:"12",r:"2.5",fill:"none",stroke:"currentColor","stroke-width":"2"})],-1)])],10,ls)):$("",!0),le.status==="fail"&&!d.value?(i(),c("button",{key:1,type:"button",class:g(l(o).e("action")),"aria-label":l(u)("upload.retry"),onClick:Ze=>Se(le)},[...ce[5]||(ce[5]=[r("svg",{viewBox:"0 0 24 24",width:"16",height:"16","aria-hidden":"true"},[r("path",{d:"M4 12a8 8 0 1 1 2.3 5.6",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"}),r("path",{d:"M4 20v-5h5",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],10,os)):$("",!0),d.value?$("",!0):(i(),c("button",{key:2,type:"button",class:g(l(o).e("action")),"aria-label":`${l(u)("upload.remove")} ${le.name}`,onClick:Ze=>ge(le,Ze)},[...ce[6]||(ce[6]=[r("svg",{viewBox:"0 0 24 24",width:"16",height:"16","aria-hidden":"true"},[r("path",{d:"M5 7h14M9 7V5h6v2M7 7l1 12h8l1-12",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],10,ss))],2)])],2))),128)):rt.value?$("",!0):(i(),c("div",{key:1,class:g(l(o).e("empty"))},[y(I.$slots,"empty",{},()=>[S(z(l(u)("upload.empty")),1)])],2)),rt.value&&!d.value?(i(),c("div",{key:2,class:g([l(o).e("trigger"),l(o).e("card"),l(o).is("dragover",L.value&&a.drag)]),role:"button",tabindex:"0","aria-disabled":d.value||void 0,"aria-label":l(u)("upload.clickUpload"),onClick:te,onKeydown:oe},[y(I.$slots,"icon",{},()=>[r("span",{class:g(l(o).e("plus"))},"+",2)]),r("span",{class:g(l(o).e("card-text"))},z(l(u)("upload.clickUpload")),3)],42,is)):$("",!0)],34)):$("",!0),(i(),U(sn,{to:"body"},[G.value?(i(),c("div",{key:0,class:g(l(o).e("preview")),style:De({zIndex:Te.value||void 0}),role:"dialog","aria-modal":"true","aria-label":l(u)("upload.preview"),onClick:Qe(Le,["self"])},[r("button",{type:"button",class:g(l(o).e("preview-close")),"aria-label":l(u)("upload.close"),onClick:Le},[...ce[7]||(ce[7]=[r("svg",{viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true"},[r("path",{d:"M6 6l12 12M18 6L6 18",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"})],-1)])],10,us),(me=ue.value)!=null&&me.url?(i(),c("img",{key:0,class:g(l(o).e("preview-img")),src:ue.value.url,alt:ue.value.name},null,10,cs)):$("",!0),r("div",{class:g(l(o).e("preview-name"))},z((Ce=ue.value)==null?void 0:Ce.name),3)],14,rs)):$("",!0)]))],16)}}}),dn=Ae(ds,"KkUpload"),ps=["aria-label"],vs=["disabled","aria-label"],fs={key:2,viewBox:"0 0 24 24",width:"16",height:"16","aria-hidden":"true"},ms=["disabled","aria-label"],ks={key:2,viewBox:"0 0 24 24",width:"16",height:"16","aria-hidden":"true"},gs=["disabled","aria-label"],bs={key:2,viewBox:"0 0 24 24",width:"16",height:"16","aria-hidden":"true"},hs=["aria-current","onClick"],ys=["aria-label","onClick"],_s=["disabled","aria-label"],xs={key:2,viewBox:"0 0 24 24",width:"16",height:"16","aria-hidden":"true"},ws=["disabled","aria-label"],$s=["disabled","aria-expanded"],Ss=["aria-selected","onClick"],Ks=["disabled"],Cs=["disabled","aria-expanded"],Ts=K({name:"KkPagination",inheritAttrs:!1,__name:"Pagination",props:{modelValue:{default:void 0},currentPage:{default:void 0},pageSize:{default:10},total:{default:void 0},pageCount:{default:void 0},pageSizes:{default:()=>[10,20,50,100]},layout:{default:"prev, pager, next, jumper, sizes, total"},pagerCount:{default:7},background:{type:Boolean,default:!1},size:{default:"medium"},disabled:{type:Boolean,default:!1},hideOnSinglePage:{type:Boolean,default:!1},mode:{default:"number"},prevText:{default:""},nextText:{default:""},prevIcon:{type:Function,default:void 0},nextIcon:{type:Function,default:void 0},showQuickJumper:{type:Boolean,default:!0}},emits:["update:modelValue","update:currentPage","update:pageSize","change","current-change","size-change","prev-click","next-click"],setup(a,{expose:n,emit:t}){const e=a,s=t,o=je("pagination"),{t:u}=st(),p=_(e.pageSize),d=m(()=>e.pageCount!=null?Math.max(1,e.pageCount):e.total!=null?Math.max(1,Math.ceil(e.total/p.value)):1),k=_(_n(e.currentPage??e.modelValue??1,1,d.value)),h=m(()=>e.disabled),x=m(()=>[o.b(),o.m(e.size),o.is("background",e.background),o.is("disabled",h.value)]),C=m(()=>!(e.hideOnSinglePage&&d.value<=1));Be(()=>[e.currentPage,e.modelValue],([G,ue])=>{const Te=G??ue;Te!=null&&(k.value=_n(Te,1,d.value))}),Be(()=>e.pageSize,G=>{G!=null&&(p.value=G)}),Be(d,G=>{k.value>G&&(k.value=G)});function L(G){const ue=_n(G,1,d.value);k.value=ue,s("update:modelValue",ue),s("update:currentPage",ue),s("current-change",ue),s("change",{currentPage:ue,pageSize:p.value})}function P(){h.value||k.value<=1||(s("prev-click",k.value-1),L(k.value-1))}function W(){h.value||k.value>=d.value||(s("next-click",k.value+1),L(k.value+1))}function X(G){h.value||!Number.isFinite(G)||L(Math.round(G))}function B(G){if(h.value||G==null)return;p.value=G;const ue=d.value;k.value>ue&&(k.value=ue),s("update:pageSize",G),s("size-change",G),s("change",{currentPage:k.value,pageSize:G})}const E=G=>({type:"page",page:G}),O=G=>({type:"more",dir:G}),F=m(()=>{const G=d.value,ue=k.value,Te=e.pagerCount;if(G<=Te)return hn(1,G).map(E);const _e=Math.floor((Te-1)/2),he=_e+1,Le=G-_e;if(ue<=he)return[...hn(1,Te-2).map(E),O("next"),E(G)];if(ue>=Le){const A=G-(Te-3);return[E(1),O("prev"),...hn(A,G).map(E)]}const Fe=ue-(_e-1),q=ue+(_e-1);return[E(1),O("prev"),...hn(Fe,q).map(E),O("next"),E(G)]});function V(G){if(G.type==="page"){X(G.page);return}const ue=e.pagerCount-2;X(G.dir==="prev"?k.value-ue:k.value+ue)}const J=_("");function ne(){const G=Number(J.value);Number.isFinite(G)&&G!==0&&(X(G),J.value="")}const H=_(!1),ee=_(null),ae=_(null);ea([ee,ae],()=>{H.value=!1},{events:["pointerdown"]});function se(){h.value||(H.value=!H.value)}function $e(G){H.value=!1,B(G)}const Z=m(()=>e.layout.split(/[\s,]+/).map(G=>G.trim()).filter(Boolean)),de=m(()=>e.showQuickJumper&&!Z.value.includes("jumper")),xe=m(()=>de.value?[...Z.value,"jumper"]:Z.value),Ee=m(()=>{const G=xe.value.indexOf("->");return G===-1?xe.value:xe.value.slice(0,G)}),Pe=m(()=>{const G=xe.value.indexOf("->");return G===-1?[]:xe.value.slice(G+1)}),fe=m(()=>h.value||k.value<=1),ge=m(()=>h.value||k.value>=d.value),Se=K({name:"KkPaginationSlotRenderer",props:{fn:{type:Function,default:void 0},scope:{type:Object,default:()=>({})}},setup(G){return()=>typeof G.fn=="function"?G.fn(G.scope):null}});return n({prev:P,next:W,jump:X,setPageSize:B}),(G,ue)=>C.value?(i(),c("div",{key:0,class:g(x.value),role:"navigation","aria-label":l(u)("pagination.page")},[a.mode==="simple"?(i(),c(N,{key:0},[r("button",{type:"button",class:g([l(o).e("btn"),l(o).e("prev")]),disabled:fe.value,"aria-label":l(u)("pagination.prev"),onClick:P},[y(G.$slots,"prev",{disabled:fe.value},()=>[l(gn)(a.prevIcon)?(i(),U(l(Se),{key:0,fn:a.prevIcon,scope:{}},null,8,["fn"])):a.prevText?(i(),c(N,{key:1},[S(z(a.prevText),1)],64)):(i(),c("svg",fs,[...ue[2]||(ue[2]=[r("path",{d:"M15 6l-6 6 6 6",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])]))])],10,vs),r("span",{class:g(l(o).e("simple-pager"))},z(k.value)+" / "+z(d.value),3),r("button",{type:"button",class:g([l(o).e("btn"),l(o).e("next")]),disabled:ge.value,"aria-label":l(u)("pagination.next"),onClick:W},[y(G.$slots,"next",{disabled:ge.value},()=>[l(gn)(a.nextIcon)?(i(),U(l(Se),{key:0,fn:a.nextIcon,scope:{}},null,8,["fn"])):a.nextText?(i(),c(N,{key:1},[S(z(a.nextText),1)],64)):(i(),c("svg",ks,[...ue[3]||(ue[3]=[r("path",{d:"M9 6l6 6-6 6",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])]))])],10,ms),r("span",{class:g(l(o).e("total"))},z(l(u)("pagination.total",{total:a.total??0})),3)],64)):(i(),c(N,{key:1},[r("div",{class:g(l(o).e("group"))},[(i(!0),c(N,null,ve(Ee.value,(Te,_e)=>(i(),c(N,{key:`l-${Te}-${_e}`},[Te==="prev"?(i(),c("button",{key:0,type:"button",class:g([l(o).e("btn"),l(o).e("prev")]),disabled:fe.value,"aria-label":l(u)("pagination.prev"),onClick:P},[y(G.$slots,"prev",{disabled:fe.value},()=>[l(gn)(a.prevIcon)?(i(),U(l(Se),{key:0,fn:a.prevIcon,scope:{}},null,8,["fn"])):a.prevText?(i(),c(N,{key:1},[S(z(a.prevText),1)],64)):(i(),c("svg",bs,[...ue[4]||(ue[4]=[r("path",{d:"M15 6l-6 6 6 6",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])]))])],10,gs)):Te==="pager"?(i(!0),c(N,{key:1},ve(F.value,(he,Le)=>(i(),c(N,{key:`p-${Le}`},[he.type==="page"?(i(),c("button",{key:0,type:"button",class:g([l(o).e("btn"),l(o).e("pager"),l(o).is("active",he.page===k.value)]),"aria-current":he.page===k.value?"page":void 0,onClick:Fe=>V(he)},[y(G.$slots,"pager",{page:he.page,active:he.page===k.value},()=>[S(z(he.page),1)])],10,hs)):(i(),c("button",{key:1,type:"button",class:g([l(o).e("btn"),l(o).e("pager"),l(o).e("more")]),"aria-label":l(u)("pagination.goto",{page:he.dir==="prev"?k.value-(a.pagerCount-2):k.value+(a.pagerCount-2)}),onClick:Fe=>V(he)},[r("span",{class:g(l(o).e("more-text"))},"···",2)],10,ys))],64))),128)):Te==="next"?(i(),c("button",{key:2,type:"button",class:g([l(o).e("btn"),l(o).e("next")]),disabled:ge.value,"aria-label":l(u)("pagination.next"),onClick:W},[y(G.$slots,"next",{disabled:ge.value},()=>[l(gn)(a.nextIcon)?(i(),U(l(Se),{key:0,fn:a.nextIcon,scope:{}},null,8,["fn"])):a.nextText?(i(),c(N,{key:1},[S(z(a.nextText),1)],64)):(i(),c("svg",xs,[...ue[5]||(ue[5]=[r("path",{d:"M9 6l6 6-6 6",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])]))])],10,_s)):Te==="total"?(i(),c("span",{key:3,class:g(l(o).e("total"))},z(l(u)("pagination.total",{total:a.total??0})),3)):Te==="jumper"?(i(),c("span",{key:4,class:g(l(o).e("jumper"))},[y(G.$slots,"jumper",{},()=>[S(z(l(u)("pagination.jumper"))+" ",1),kt(r("input",{"onUpdate:modelValue":ue[0]||(ue[0]=he=>J.value=he),type:"text",class:g(l(o).e("jumper-input")),disabled:h.value,"aria-label":l(u)("pagination.jumper"),onKeyup:Qt(ne,["enter"])},null,42,ws),[[va,J.value]]),S(" "+z(l(u)("pagination.page")),1)])],2)):Te==="sizes"?(i(),c("span",{key:5,ref_for:!0,ref_key:"sizesRef",ref:ee,class:g(l(o).e("sizes"))},[y(G.$slots,"sizes",{},()=>[r("button",{type:"button",class:g(l(o).e("sizes-trigger")),disabled:h.value,"aria-haspopup":!0,"aria-expanded":H.value,onClick:se},[S(z(l(u)("pagination.sizes",{size:p.value}))+" ",1),(i(),c("svg",{viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":"true",class:g(l(o).e("sizes-arrow"))},[...ue[6]||(ue[6]=[r("path",{d:"M6 9l6 6 6-6",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])],2))],10,$s),H.value?(i(),c("span",{key:0,ref_for:!0,ref_key:"sizesPopperRef",ref:ae,class:g(l(o).e("sizes-popper")),role:"listbox"},[(i(!0),c(N,null,ve(a.pageSizes,he=>(i(),c("button",{key:he,type:"button",class:g([l(o).e("size-option"),l(o).is("active",he===p.value)]),role:"option","aria-selected":he===p.value,onClick:Le=>$e(he)},z(l(u)("pagination.sizes",{size:he})),11,Ss))),128))],2)):$("",!0)])],2)):$("",!0)],64))),128))],2),Pe.value.length?(i(),c("div",{key:0,class:g([l(o).e("group"),l(o).e("group--right")])},[(i(!0),c(N,null,ve(Pe.value,(Te,_e)=>(i(),c(N,{key:`r-${Te}-${_e}`},[Te==="total"?(i(),c("span",{key:0,class:g(l(o).e("total"))},z(l(u)("pagination.total",{total:a.total??0})),3)):Te==="jumper"?(i(),c("span",{key:1,class:g(l(o).e("jumper"))},[y(G.$slots,"jumper",{},()=>[S(z(l(u)("pagination.jumper"))+" ",1),kt(r("input",{"onUpdate:modelValue":ue[1]||(ue[1]=he=>J.value=he),type:"text",class:g(l(o).e("jumper-input")),disabled:h.value,onKeyup:Qt(ne,["enter"])},null,42,Ks),[[va,J.value]]),S(" "+z(l(u)("pagination.page")),1)])],2)):Te==="sizes"?(i(),c("span",{key:2,class:g(l(o).e("sizes"))},[y(G.$slots,"sizes",{},()=>[r("button",{type:"button",class:g(l(o).e("sizes-trigger")),disabled:h.value,"aria-expanded":H.value,onClick:se},z(l(u)("pagination.sizes",{size:p.value})),11,Cs)])],2)):$("",!0)],64))),128))],2)):$("",!0)],64))],10,ps)):$("",!0)}}),pn=Ae(Ts,"KkPagination"),Ra=Symbol("kk-table-context"),zs={key:0},Ps=["aria-sort"],Ls={key:1},Bs={key:2},Ms=["aria-label","onClick"],Vs=["data-kk-table-row","onClick","onDblclick"],Os=["onClick"],Is={key:1},Es=["aria-expanded","aria-label","onClick"],As=["colspan"],js=["colspan"],Rs=K({name:"KkTable",inheritAttrs:!1,__name:"Table",props:{data:{default:()=>[]},columns:{default:void 0},rowKey:{default:void 0},border:{type:Boolean,default:!0},stripe:{type:Boolean,default:!1},size:{default:"medium"},height:{default:void 0},maxHeight:{default:void 0},loading:{type:Boolean,default:!1},emptyText:{default:""},rowClassName:{type:Function,default:void 0},cellClassName:{type:Function,default:void 0},rowStyle:{type:Function,default:void 0},cellStyle:{type:Function,default:void 0},showHeader:{type:Boolean,default:!0},defaultExpandAll:{type:Boolean,default:!1},expandRowKeys:{default:void 0},highlightCurrentRow:{type:Boolean,default:!1},currentRowKey:{default:void 0},selectOnIndeterminate:{type:Boolean,default:!0},pagination:{default:void 0},selection:{default:void 0},defaultSelection:{default:void 0},disabled:{type:Boolean,default:!1}},emits:["select","select-all","selection-change","update:selection","row-click","row-dblclick","cell-click","sort-change","expand-change","current-change","page-change"],setup(a,{expose:n,emit:t}){var Et,Ct,At,jt;const e=a,s=t,o=je("table"),{t:u}=st(),p=_([]);ht(Ra,{register:w=>{p.value.some(b=>b.id===w.id)||p.value.push(w)},unregister:w=>{const b=p.value.findIndex(M=>M.id===w);b>=0&&p.value.splice(b,1)}});const k=m(()=>p.value.length?p.value.map(w=>({...w.props,id:w.id,slots:w.slots,source:"child"})):(e.columns??[]).map((w,b)=>({...w,id:`col-prop-${w.prop??b}`,slots:{default:void 0,header:void 0},source:"prop"}))),h=m(()=>k.value.find(w=>w.type==="selection")),x=m(()=>e.height!=null||e.maxHeight!=null);function C(w){return e.rowKey?String(w[e.rowKey]):String(e.data.indexOf(w))}const L=_(void 0),P=_(null),W=_(!1);function X(w,b){if(typeof b.sortBy=="function")return b.sortBy(w);const M=typeof b.sortBy=="string"?b.sortBy:b.prop;return M!=null?w[M]:void 0}const B=m(()=>{if(!P.value||L.value==null||W.value)return e.data;const w=k.value.find(M=>M.id===L.value);if(!w)return e.data;const b=[...e.data];return b.sort((M,j)=>{if(w.sortMethod)return w.sortMethod(M,j);const ie=X(M,w),we=X(j,w);return ie==null&&we==null?0:ie==null?1:we==null||ie<we?-1:ie>we?1:0}),P.value==="descending"&&b.reverse(),b});function E(w){var ct;if(e.disabled||!w.sortable)return;const b=(ct=w.sortOrders)!=null&&ct.length?w.sortOrders:["ascending","descending",null],j=L.value===w.id?P.value:null,ie=b.indexOf(j),we=b[(ie+1)%b.length];L.value=w.id,P.value=we,W.value=w.sortable==="custom",w.sortable==="custom"?s("sort-change",{column:w,prop:w.prop,order:we}):s("sort-change",{column:w,prop:w.prop,order:we})}function O(w){if(!(!w.sortable||L.value!==w.id))return P.value==="ascending"?"ascending":P.value==="descending"?"descending":"none"}function F(w){return w.sortable?L.value!==w.id||P.value==null?u("table.sortAsc"):P.value==="ascending"?u("table.sortDesc"):u("table.sortClear"):""}const V=_(new Set((e.defaultSelection??[]).map(String))),J=m(()=>e.data.filter(w=>V.value.has(C(w)))),ne=m(()=>q.value);function H(w){return V.value.has(C(w))}function ee(w,b){var M;return(M=h.value)!=null&&M.selectable?h.value.selectable(w,b):!0}const ae=m(()=>ne.value.filter((w,b)=>ee(w,b))),se=m(()=>ae.value.length>0&&ae.value.every(w=>H(w))),$e=m(()=>ae.value.some(w=>H(w))),Z=m(()=>$e.value&&!se.value);function de(){const w=J.value;s("selection-change",w),s("update:selection",w)}function xe(w){if(e.disabled)return;const b=C(w);V.value.has(b)?V.value.delete(b):V.value.add(b);const M=J.value;s("select",M,w),de()}function Ee(){if(e.disabled)return;const w=ae.value.map(b=>C(b));se.value?w.forEach(b=>V.value.delete(b)):w.forEach(b=>V.value.add(b)),s("select-all",J.value),de()}function Pe(w){e.disabled||(Z.value&&!e.selectOnIndeterminate?ae.value.forEach(b=>V.value.delete(C(b))):w?ae.value.forEach(b=>V.value.add(C(b))):ae.value.forEach(b=>V.value.delete(C(b))),s("select-all",J.value),de())}const fe=_(new Set);Be(()=>e.expandRowKeys,w=>{fe.value=new Set((w??[]).map(String))},{immediate:!0}),Be(()=>e.defaultExpandAll,w=>{w&&(fe.value=new Set(e.data.map(b=>C(b))))},{immediate:!0});function ge(w){return fe.value.has(C(w))}function Se(w){if(e.disabled)return;const b=C(w);fe.value.has(b)?fe.value.delete(b):fe.value.add(b),s("expand-change",w,Array.from(fe.value))}const G=_(e.currentRowKey);function ue(w,b,M){if(s("row-click",w,b,M),e.highlightCurrentRow&&!e.disabled){const j=G.value!=null?e.data.find(ie=>C(ie)===String(G.value))??null:null;G.value=C(w),s("current-change",w,j)}}function Te(w){return G.value!=null&&C(w)===String(G.value)}const _e=m(()=>e.pagination),he=_(((Et=_e.value)==null?void 0:Et.currentPage)??1),Le=_(((Ct=_e.value)==null?void 0:Ct.pageSize)??((jt=(At=_e.value)==null?void 0:At.pageSizes)==null?void 0:jt[0])??10);Be(()=>e.pagination,w=>{(w==null?void 0:w.currentPage)!=null&&(he.value=w.currentPage),(w==null?void 0:w.pageSize)!=null&&(Le.value=w.pageSize)},{immediate:!0});const Fe=m(()=>{const w=_e.value;return(w==null?void 0:w.total)!=null?w.total:(w==null?void 0:w.pageCount)!=null?w.pageCount*Le.value:B.value.length}),q=m(()=>{if(!_e.value)return B.value;const w=(he.value-1)*Le.value;return B.value.slice(w,w+Le.value)});function A(w){he.value=w.currentPage,Le.value=w.pageSize,s("page-change",w)}function R(w){if(w==null)return;if(typeof w=="number")return w;const b=parseFloat(w);return Number.isNaN(b)?void 0:b}const te=m(()=>{const w=new Map;let b=0,M=0;for(const j of k.value)if(j.fixed==="left"||j.fixed===!0){w.set(j.id,{left:b});const ie=R(j.width);ie!=null&&(b+=ie)}for(let j=k.value.length-1;j>=0;j--){const ie=k.value[j];if(ie.fixed==="right"){w.set(ie.id,{right:M});const we=R(ie.width);we!=null&&(M+=we)}}return w});function oe(w,b){return b.formatter?b.formatter(w,b,b.prop!=null?w[b.prop]:void 0,0):b.prop!=null?w[b.prop]:""}function Ve(w,b){const M=k.value.find(j=>j.type==="index");return M!=null&&M.indexMethod?M.indexMethod(b,w):_e.value?(he.value-1)*Le.value+b+1:b+1}function Q(w,b,M,j){var xt;const ie={},we=te.value.get(b.id);b.fixed==="left"||b.fixed===!0?(ie.position="sticky",ie.left=(we==null?void 0:we.left)!=null?`${we.left}px`:"0",ie.zIndex=2,ie.background="var(--kk-bg-container)"):b.fixed==="right"&&(ie.position="sticky",ie.right=(we==null?void 0:we.right)!=null?`${we.right}px`:"0",ie.zIndex=2,ie.background="var(--kk-bg-container)");const ct=(xt=e.cellStyle)==null?void 0:xt.call(e,{row:w,column:b,rowIndex:M,columnIndex:j});return ct&&typeof ct=="object"&&Object.assign(ie,ct),ie}function ye(w){const b={},M=te.value.get(w.id);return w.fixed==="left"||w.fixed===!0?(b.position="sticky",b.left=(M==null?void 0:M.left)!=null?`${M.left}px`:"0",b.zIndex=3,b.background="var(--kk-bg-subtle)"):w.fixed==="right"&&(b.position="sticky",b.right=(M==null?void 0:M.right)!=null?`${M.right}px`:"0",b.zIndex=3,b.background="var(--kk-bg-subtle)"),b}function Ke(w,b,M,j){var we;const ie=b.fixed==="right"?"right":b.fixed?"left":void 0;return[o.e("cell"),o.is(`align-${b.align}`,!0),ie?o.is(`fixed-${ie}`):void 0,b.className,(we=e.cellClassName)==null?void 0:we.call(e,{row:w,column:b,rowIndex:M,columnIndex:j})]}function We(w){const b=w.fixed==="right"?"right":w.fixed?"left":void 0;return[o.e("cell"),o.is(`align-${w.align}`,!0),b?o.is(`fixed-${b}`):void 0,w.labelClassName]}function He(w,b){var M;return[o.e("row"),o.is("striped",e.stripe&&b%2===1),o.is("current",e.highlightCurrentRow&&Te(w)),(M=e.rowClassName)==null?void 0:M.call(e,{row:w,rowIndex:b})]}function Re(w,b){var j;const M=(j=e.rowStyle)==null?void 0:j.call(e,{row:w,rowIndex:b});return M&&typeof M=="object"?M:void 0}function it(w){if(w!=null)return typeof w=="number"?`${w}px`:w}const rt=m(()=>{const w={overflow:"auto"};return e.height!=null&&(w.height=it(e.height)),e.maxHeight!=null&&(w.maxHeight=it(e.maxHeight)),w}),I=m(()=>q.value.length===0),ce=m(()=>e.emptyText||u("table.empty")),me=m(()=>u("table.loading")),Ce=K({name:"KkTableCheckbox",props:{modelValue:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},label:{type:String,default:""}},emits:["update:modelValue","change"],setup(w,b){const M=_(null);return rn(()=>{M.value&&(M.value.indeterminate=w.indeterminate)}),()=>Ta("input",{ref:M,type:"checkbox",class:o.e("checkbox"),checked:w.modelValue,disabled:w.disabled,"aria-checked":w.indeterminate?"mixed":w.modelValue,"aria-label":w.label,onChange:j=>{const ie=j.target.checked;b.emit("update:modelValue",ie),b.emit("change",ie)}})}}),le=K({name:"KkTableSlotRenderer",props:{fn:{type:Function,default:void 0},scope:{type:Object,default:()=>({})}},setup(w){return()=>typeof w.fn=="function"?w.fn(w.scope):null}}),be=_(null);function Ze(){V.value=new Set,de()}function Ie(w,b){if(e.disabled)return;const M=C(w);b??!V.value.has(M)?V.value.add(M):V.value.delete(M),de()}function Ne(){Ee()}function dt(w){const b=G.value!=null?e.data.find(M=>C(M)===String(G.value))??null:null;G.value=C(w),s("current-change",w,b)}function St(){L.value=void 0,P.value=null}function _t(){}function It(w){const b=be.value;if(!b)return;const M=Array.from(b.querySelectorAll("tr[data-kk-table-row]"));let j;w.key!=null?j=M.find(ie=>ie.dataset.kkTableRow===String(w.key)):w.index!=null&&(j=M[w.index]),j&&j.scrollIntoView({block:"nearest"})}function Ut(){return J.value}n({clearSelection:Ze,toggleRowSelection:Ie,toggleAllSelection:Ne,setCurrentRow:dt,clearSort:St,clearFilter:_t,scrollTo:It,getSelectionRows:Ut});const Kt=m(()=>[o.b(),o.m(e.size),o.is("border",e.border),o.is("scrollable",x.value),o.is("disabled",e.disabled)]);return(w,b)=>{var M;return i(),c("div",{class:g(Kt.value),role:"region"},[r("div",{class:g(l(o).e("columns")),style:{display:"none"}},[y(w.$slots,"default")],2),r("div",{ref_key:"bodyWrapRef",ref:be,class:g(l(o).e("body-wrap")),style:De(rt.value)},[r("table",{class:g(l(o).e("table")),cellspacing:"0",cellpadding:"0"},[r("colgroup",null,[(i(!0),c(N,null,ve(k.value,j=>(i(),c("col",{key:j.id,style:De({width:R(j.width)})},null,4))),128))]),e.showHeader?(i(),c("thead",zs,[r("tr",{class:g(l(o).e("header-row"))},[(i(!0),c(N,null,ve(k.value,j=>(i(),c("th",{key:j.id,class:g(We(j)),style:De(ye(j)),"aria-sort":O(j),scope:"col"},[j.type==="selection"?(i(),U(l(Ce),{key:0,"model-value":se.value,indeterminate:Z.value,disabled:e.disabled||ae.value.length===0,label:l(u)("table.selectAll"),onChange:Pe},null,8,["model-value","indeterminate","disabled","label"])):j.type==="expand"?(i(),c("span",Ls)):j.type==="index"?(i(),c("span",Bs,z(j.label||"#"),1)):(i(),c(N,{key:3},[j.slots.header?(i(),U(l(le),{key:0,fn:j.slots.header,scope:{column:j}},null,8,["fn","scope"])):(i(),c("span",{key:1,class:g(l(o).e("header-label"))},z(j.label),3)),j.sortable?(i(),c("button",{key:2,type:"button",class:g([l(o).e("sort"),l(o).is("active",L.value===j.id)]),"aria-label":F(j),onClick:ie=>E(j)},[(i(),c("svg",{viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":"true",class:g(l(o).e("sort-icon"))},[r("path",{d:"M12 5l5 6H7z",class:g(l(o).is("asc",L.value===j.id&&P.value==="ascending")),fill:"currentColor"},null,2),r("path",{d:"M12 19l-5-6h10z",class:g(l(o).is("desc",L.value===j.id&&P.value==="descending")),fill:"currentColor"},null,2)],2))],10,Ms)):$("",!0)],64))],14,Ps))),128))],2)])):$("",!0),r("tbody",null,[(i(!0),c(N,null,ve(q.value,(j,ie)=>(i(),c(N,{key:C(j)},[r("tr",{"data-kk-table-row":C(j),class:g(He(j,ie)),style:De(Re(j,ie)),onClick:we=>ue(j,ie,we),onDblclick:we=>s("row-dblclick",j,ie,we)},[(i(!0),c(N,null,ve(k.value,(we,ct)=>(i(),c("td",{key:we.id,class:g(Ke(j,we,ie,ct)),style:De(Q(j,we,ie,ct)),onClick:xt=>s("cell-click",j,we,ct,xt)},[we.type==="selection"?(i(),U(l(Ce),{key:0,"model-value":H(j),disabled:e.disabled||!ee(j,ie),label:l(u)("table.selectRow"),onChange:xt=>xe(j)},null,8,["model-value","disabled","label","onChange"])):we.type==="index"?(i(),c("span",Is,z(Ve(j,ie)),1)):we.type==="expand"?(i(),c("button",{key:2,type:"button",class:g(l(o).e("expand-btn")),"aria-expanded":ge(j),"aria-label":ge(j)?l(u)("table.collapseRow"):l(u)("table.expandRow"),onClick:xt=>Se(j)},[...b[0]||(b[0]=[r("svg",{viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":"true"},[r("path",{d:"M9 6l6 6-6 6",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],10,Es)):(i(),c(N,{key:3},[we.slots.default?(i(),U(l(le),{key:0,fn:we.slots.default,scope:{row:j,column:we,index:ie,$index:ie}},null,8,["fn","scope"])):(i(),c("span",{key:1,class:g(l(o).e("cell-text"))},z(oe(j,we)),3))],64))],14,Os))),128))],46,Vs),ge(j)?(i(),c("tr",{key:0,class:g(l(o).e("expanded-row"))},[r("td",{colspan:k.value.length,class:g(l(o).e("expanded-cell"))},[y(w.$slots,"expand",{row:j,index:ie},()=>[b[1]||(b[1]=S(z(""),-1))])],10,As)],2)):$("",!0)],64))),128)),I.value?(i(),c("tr",{key:0,class:g(l(o).e("empty-row"))},[r("td",{colspan:k.value.length,class:g(l(o).e("empty"))},[y(w.$slots,"empty",{},()=>[S(z(ce.value),1)])],10,js)],2)):$("",!0)])],2),e.loading?(i(),c("div",{key:0,class:g(l(o).e("loading")),role:"status"},[y(w.$slots,"loading",{},()=>[S(z(me.value),1)])],2)):$("",!0)],6),_e.value?(i(),U(l(pn),Oe({key:0},_e.value,{"current-page":he.value,"page-size":Le.value,total:Fe.value,size:((M=_e.value)==null?void 0:M.size)??e.size,disabled:e.disabled,onChange:A}),null,16,["current-page","page-size","total","size","disabled"])):$("",!0),w.$slots.append?(i(),c("div",{key:1,class:g(l(o).e("append"))},[y(w.$slots,"append")],2)):$("",!0)],2)}}}),Fs={hidden:"","aria-hidden":"true"},Ds=K({name:"KkTableColumn",inheritAttrs:!1,__name:"TableColumn",props:{prop:{default:void 0},label:{default:""},width:{default:void 0},minWidth:{default:void 0},fixed:{type:[String,Boolean],default:void 0},align:{default:"left"},sortable:{type:[Boolean,String],default:void 0},sortBy:{type:[String,Function],default:void 0},sortOrders:{default:void 0},sortMethod:{},resizable:{type:Boolean,default:!1},selectable:{type:Function,default:void 0},type:{default:"default"},indexMethod:{type:Function,default:void 0},formatter:{type:Function,default:void 0},className:{default:void 0},labelClassName:{default:void 0}},setup(a){const n=a,t=bt(),e=Je(Ra,null),s=Ot("kk-table-col"),o={id:s,props:n,slots:{default:t.default,header:t.header}};return qe(()=>e==null?void 0:e.register(o)),et(()=>e==null?void 0:e.unregister(s)),(u,p)=>(i(),c("span",Fs))}}),vn=Ae(Rs,"KkTable"),lt=Ae(Ds,"KkTableColumn"),Ns=K({name:"KkWatermark",inheritAttrs:!1,__name:"Watermark",props:{content:{},width:{default:120},height:{default:120},rotate:{default:-22},gap:{default:()=>[100,100]},offset:{},font:{},image:{},imageWidth:{},imageHeight:{},opacity:{default:.15},zIndex:{default:9},cross:{type:Boolean,default:!0},repeat:{type:Boolean,default:!0},inheritColor:{type:Boolean,default:!1},moveable:{type:Boolean,default:!1}},setup(a,{expose:n}){const t=a,e=je("watermark"),{t:s}=st(),o=_(null),u=_(null),p=_([]),d=_({w:0,h:0}),k=_({x:0,y:0}),h=_(!1);function x(H){if(!t.moveable||!o.value)return;const ee=o.value.getBoundingClientRect();k.value={x:H.clientX-ee.left,y:H.clientY-ee.top},h.value=!0}function C(){t.moveable&&(h.value=!1)}let L=!1,P=null,W=null;function X(H,ee){return typeof window>"u"||typeof getComputedStyle!="function"?ee:getComputedStyle(document.documentElement).getPropertyValue(H).trim()||ee}const B=m(()=>{const H=t.font??{};let ee=H.color;return ee||(t.inheritColor&&o.value?ee=getComputedStyle(o.value).color:ee=X("--kk-text-tertiary","#9ba3b7")),{color:ee,size:H.size??16,family:H.family??X("--kk-font-sans","sans-serif"),weight:H.weight??"normal",style:H.style??"normal"}});function E(){if(u.value){const $e=(u.value.textContent??"").trim().split(`
`).map(Z=>Z.trim()).filter(Boolean);if($e.length)return $e}const H=t.content;if(H==null)return[s("watermark.text")];const ae=(Array.isArray(H)?H:[H]).map(String).filter(se=>se.length>0);return ae.length?ae:[s("watermark.text")]}function O(H){try{return H.getContext("2d")}catch{return null}}function F(H){const ee=document.createElement("canvas"),ae=O(ee);if(!ae)return;const se=typeof window<"u"&&window.devicePixelRatio?window.devicePixelRatio:1,$e=B.value,Z=E(),de=$e.size+4,xe=Z.length*de;ae.font=`${$e.style} ${$e.weight} ${$e.size}px ${$e.family}`;const Ee=Z.map(q=>ae.measureText(q).width),Pe=Math.max(1,...Ee),fe=Math.max(Pe,t.width),ge=Math.max(xe,t.height),Se=H*Math.PI/180,G=Math.abs(Math.cos(Se)),ue=Math.abs(Math.sin(Se)),Te=fe*G+ge*ue,_e=fe*ue+ge*G,he=Math.ceil(Math.max(Te,fe)+t.gap[0]),Le=Math.ceil(Math.max(_e,ge)+t.gap[1]);ee.width=he*se,ee.height=Le*se,ae.scale(se,se),ae.clearRect(0,0,he,Le),ae.translate(he/2,Le/2),ae.rotate(Se),ae.font=`${$e.style} ${$e.weight} ${$e.size}px ${$e.family}`,ae.fillStyle=$e.color,ae.textAlign="center",ae.textBaseline="middle";const Fe=-((Z.length-1)*de)/2;return Z.forEach((q,A)=>ae.fillText(q,0,Fe+A*de)),d.value={w:he,h:Le},ee.toDataURL()}function V(H){const ee=document.createElement("canvas"),ae=O(ee);if(!ae)return;const se=typeof window<"u"&&window.devicePixelRatio?window.devicePixelRatio:1,$e=t.imageWidth||H.naturalWidth||t.width,Z=t.imageHeight||H.naturalHeight||t.height,de=t.rotate*Math.PI/180,xe=Math.abs(Math.cos(de)),Ee=Math.abs(Math.sin(de)),Pe=$e*xe+Z*Ee,fe=$e*Ee+Z*xe,ge=Math.ceil(Math.max(Pe,$e)+t.gap[0]),Se=Math.ceil(Math.max(fe,Z)+t.gap[1]);ee.width=ge*se,ee.height=Se*se,ae.scale(se,se),ae.clearRect(0,0,ge,Se),ae.translate(ge/2,Se/2),ae.rotate(de);try{ae.drawImage(H,-$e/2,-Z/2,$e,Z)}catch{return}return d.value={w:ge,h:Se},ee.toDataURL()}function J(){if(L)return;if(p.value=[],t.image){const ee=new Image;ee.crossOrigin="anonymous",ee.onload=()=>{const ae=V(ee);ae&&(p.value=[ae])},ee.onerror=()=>{},ee.src=t.image;return}const H=F(t.rotate);if(H!=null)if(t.cross){const ee=F(-t.rotate);p.value=ee!=null?[H,ee]:[H]}else p.value=[H]}const ne=m(()=>{const H={opacity:t.opacity,zIndex:t.zIndex};if(p.value.length){const{w:ee,h:ae}=d.value;H.backgroundImage=p.value.map(se=>`url("${se}")`).join(", "),t.moveable?(H.backgroundRepeat="no-repeat",H.backgroundSize=`${ee}px ${ae}px`,H.backgroundPosition=`${k.value.x-ee/2}px ${k.value.y-ae/2}px`,H.opacity=h.value?t.opacity:0):(H.backgroundRepeat=t.repeat?"repeat":"no-repeat",H.backgroundSize=p.value.map(()=>`${ee}px ${ae}px`).join(", "),H.backgroundPosition=t.offset?`${Xe(t.offset[0])} ${Xe(t.offset[1])}`:"0 0")}return H});return Be(()=>[t.content,t.image,t.width,t.height,t.rotate,t.gap,t.offset,t.font,t.opacity,t.zIndex,t.cross,t.repeat,t.inheritColor],J,{deep:!0}),qe(()=>{J();const H=o.value;H&&(typeof ResizeObserver<"u"?(P=new ResizeObserver(()=>J()),P.observe(H)):typeof window<"u"&&(W=()=>J(),window.addEventListener("resize",W)))}),et(()=>{L=!0,P==null||P.disconnect(),W&&typeof window<"u"&&window.removeEventListener("resize",W)}),n({redraw:J}),(H,ee)=>(i(),c("div",{ref_key:"containerRef",ref:o,class:g([l(e).b(),l(e).is("moveable",t.moveable)]),onPointermove:x,onPointerleave:C},[y(H.$slots,"default"),H.$slots.content?(i(),c("span",{key:0,ref_key:"contentRef",ref:u,class:g(l(e).e("content")),"aria-hidden":"true"},[y(H.$slots,"content")],2)):$("",!0),r("div",{class:g(l(e).e("overlay")),style:De(ne.value),"aria-hidden":"true"},null,6)],34))}}),fn=Ae(Ns,"KkWatermark"),Fa=Symbol("kk-layout"),Da=Symbol("kk-row"),Hs=K({name:"KkLayout",inheritAttrs:!1,__name:"Layout",props:{direction:{},hasSider:{type:Boolean},fixed:{type:Boolean,default:!1},height:{},gap:{default:0},bordered:{type:Boolean,default:!1}},setup(a){const n=a,t=bt(),e=je("layout"),s=_(!1),o=_(!1),u=m(()=>n.hasSider||!!t.sider||o.value),p=m(()=>n.direction??(u.value?"horizontal":"vertical"));function d(L){s.value=L??!s.value}const k=m(()=>({collapsed:s.value,toggle:d})),h=m(()=>!!(t.header||t.sider||t.content||t.footer));ht(Fa,{collapsed:s,hasSider:o,toggle:d});const x=m(()=>[e.b(),e.m(p.value),e.is("fixed",n.fixed),e.is("bordered",n.bordered),e.is("has-sider",u.value)]),C=m(()=>{const L={display:"flex",flexDirection:p.value==="horizontal"?"row":"column",gap:Xe(n.gap)??void 0};return n.fixed&&(L.height="100vh"),n.height!=null&&(L.height=Xe(n.height)),L});return(L,P)=>(i(),c("div",Oe({class:x.value,style:C.value},L.$attrs),[h.value?(i(),c(N,{key:0},[L.$slots.header?(i(),c("div",{key:0,class:g([l(e).e("region"),l(e).em("region","header")])},[y(L.$slots,"header",Xt(Zt(k.value)))],2)):$("",!0),r("div",{class:g(l(e).e("main"))},[L.$slots.sider?(i(),c("div",{key:0,class:g([l(e).e("region"),l(e).em("region","sider")])},[y(L.$slots,"sider",Xt(Zt(k.value)))],2)):$("",!0),L.$slots.content?(i(),c("div",{key:1,class:g([l(e).e("region"),l(e).em("region","content")])},[y(L.$slots,"content")],2)):$("",!0),y(L.$slots,"default")],2),L.$slots.footer?(i(),c("div",{key:1,class:g([l(e).e("region"),l(e).em("region","footer")])},[y(L.$slots,"footer")],2)):$("",!0)],64)):y(L.$slots,"default",{},void 0,void 0,1)],16))}}),Us=K({name:"KkLayoutHeader",inheritAttrs:!1,__name:"LayoutHeader",props:{height:{default:60},fixed:{type:Boolean,default:!1},bordered:{type:Boolean,default:!0}},setup(a){const n=a,t=je("layout-header"),e=m(()=>[t.b(),t.is("fixed",n.fixed),t.is("bordered",n.bordered)]),s=m(()=>({height:Xe(n.height)}));return(o,u)=>(i(),c("header",Oe({class:e.value,style:s.value},o.$attrs),[o.$slots.left?(i(),c("div",{key:0,class:g(l(t).e("left"))},[y(o.$slots,"left")],2)):$("",!0),r("div",{class:g(l(t).e("center"))},[y(o.$slots,"default")],2),o.$slots.right?(i(),c("div",{key:1,class:g(l(t).e("right"))},[y(o.$slots,"right")],2)):$("",!0)],16))}}),Ws=["aria-label"],qs=K({name:"KkLayoutSider",inheritAttrs:!1,__name:"LayoutSider",props:{width:{default:220},collapsedWidth:{default:64},collapsed:{type:Boolean},collapsible:{type:Boolean,default:!1},trigger:{type:[Boolean,String],default:!0},position:{default:"left"},bordered:{type:Boolean,default:!0},reverseArrow:{type:Boolean,default:!1}},emits:["update:collapsed","collapse"],setup(a,{emit:n}){const t=a,e=n,s=je("layout-sider"),{t:o}=st(),u=Je(Fa,null),p=_(t.collapsed??(u==null?void 0:u.collapsed.value)??!1),d=u?u.collapsed:p,k=ol(),h=m(()=>{var O;return((O=k==null?void 0:k.vnode.props)==null?void 0:O.collapsed)!==void 0}),x=m(()=>d.value);function C(O){const F=typeof O=="boolean"?O:!x.value;h.value||(d.value=F),e("update:collapsed",F),e("collapse",F)}Be(()=>t.collapsed,O=>{O!==void 0&&(d.value=O)}),u&&(u.hasSider.value=!0);const L=m(()=>[s.b(),s.is("collapsed",x.value),s.is("bordered",t.bordered),s.m(t.position)]),P=m(()=>({width:Xe(x.value?t.collapsedWidth:t.width),order:t.position==="right"?2:0})),W=m(()=>typeof t.trigger=="string"?t.trigger:"trigger"),X=m(()=>t.collapsible&&t.trigger!==!1),B=m(()=>({collapsed:x.value,toggle:C})),E=m(()=>x.value!==!t.reverseArrow);return(O,F)=>(i(),c("aside",Oe({class:L.value,style:P.value},O.$attrs),[O.$slots.logo?(i(),c("div",{key:0,class:g(l(s).e("logo"))},[y(O.$slots,"logo",Xt(Zt(B.value)))],2)):$("",!0),r("div",{class:g(l(s).e("body"))},[y(O.$slots,"default",Xt(Zt(B.value)))],2),X.value?(i(),c("div",{key:1,class:g(l(s).e("trigger")),role:"button",tabindex:"0","aria-label":x.value?l(o)("common.expand"):l(o)("common.collapse"),onClick:F[0]||(F[0]=V=>C()),onKeydown:[F[1]||(F[1]=Qt(Qe(V=>C(),["prevent"]),["enter"])),F[2]||(F[2]=Qt(Qe(V=>C(),["prevent"]),["space"]))]},[y(O.$slots,W.value,Xt(Zt(B.value)),()=>[(i(),c("svg",{class:g(["kk-layout-sider__arrow",{"is-reversed":E.value}]),viewBox:"0 0 16 16",width:"16",height:"16","aria-hidden":"true"},[...F[3]||(F[3]=[r("path",{d:"M10 3L5 8l5 5",fill:"none",stroke:"currentColor","stroke-width":"1.6","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])],2))])],42,Ws)):$("",!0)],16))}}),Gs=K({name:"KkLayoutContent",inheritAttrs:!1,__name:"LayoutContent",props:{padding:{default:"medium"},scrollable:{type:Boolean,default:!0}},setup(a){const n=a,t=je("layout-content"),e={none:"0",small:"var(--kk-space-3)",medium:"var(--kk-space-5)",large:"var(--kk-space-6)"},s=m(()=>[t.b(),t.is("scrollable",n.scrollable)]),o=m(()=>{const u=n.padding;return{padding:(typeof u=="string"&&e[u]?e[u]:Xe(u))??e.medium}});return(u,p)=>(i(),c("main",Oe({class:s.value,style:o.value},u.$attrs),[y(u.$slots,"default")],16))}}),Ys=K({name:"KkLayoutFooter",inheritAttrs:!1,__name:"LayoutFooter",props:{height:{default:56},bordered:{type:Boolean,default:!0}},setup(a){const n=a,t=je("layout-footer"),e=m(()=>[t.b(),t.is("bordered",n.bordered)]),s=m(()=>({height:Xe(n.height)}));return(o,u)=>(i(),c("footer",Oe({class:e.value,style:s.value},o.$attrs),[y(o.$slots,"default")],16))}}),Xs=K({name:"KkRow",inheritAttrs:!1,__name:"Row",props:{gutter:{},justify:{default:"start"},align:{default:"stretch"},wrap:{type:Boolean,default:!0},tag:{default:"div"}},setup(a){const n=a,t=je("row"),e={start:"flex-start",center:"center",end:"flex-end","space-between":"space-between","space-around":"space-around","space-evenly":"space-evenly"},s={start:"flex-start",center:"center",end:"flex-end",stretch:"stretch"};function o(k){if(k==null)return 0;if(typeof k=="number")return k;const h=Number.parseFloat(k);return Number.isNaN(h)?0:h}const u=m(()=>Array.isArray(n.gutter)?o(n.gutter[0]):o(n.gutter)),p=m(()=>Array.isArray(n.gutter)?o(n.gutter[1]):o(n.gutter));ht(Da,{gutterX:u});const d=m(()=>{const k={display:"flex",flexWrap:n.wrap?"wrap":"nowrap",justifyContent:e[n.justify],alignItems:s[n.align]};return u.value&&(k.marginLeft=`-${u.value/2}px`,k.marginRight=`-${u.value/2}px`),p.value&&(k.rowGap=`${p.value}px`),k});return(k,h)=>(i(),U(ot(a.tag),Oe({class:l(t).b(),style:d.value},k.$attrs),{default:v(()=>[y(k.$slots,"default")]),_:3},16,["class","style"]))}}),Zs=K({name:"KkCol",inheritAttrs:!1,__name:"Col",props:{span:{},offset:{},push:{},pull:{},xs:{},sm:{},md:{},lg:{},xl:{},tag:{default:"div"}},setup(a){const n=a,t=je("col"),e=Je(Da,null),s=["xs","sm","md","lg","xl"];function o(k,h){if(typeof h=="number")return[t.m(`${k}-span-${h}`)];const x=[];return h.span!=null&&x.push(t.m(`${k}-span-${h.span}`)),h.offset!=null&&x.push(t.m(`${k}-offset-${h.offset}`)),h.push!=null&&x.push(t.m(`${k}-push-${h.push}`)),h.pull!=null&&x.push(t.m(`${k}-pull-${h.pull}`)),x}const u=m(()=>s.some(k=>n[k]!=null)),p=m(()=>{const k=[t.b()];return n.span!=null&&k.push(t.m(`span-${n.span}`)),n.offset!=null&&k.push(t.m(`offset-${n.offset}`)),n.push!=null&&k.push(t.m(`push-${n.push}`)),n.pull!=null&&k.push(t.m(`pull-${n.pull}`)),n.span==null&&!u.value&&k.push(t.m("auto")),s.forEach(h=>{const x=n[h];x!=null&&k.push(...o(h,x))}),k}),d=m(()=>{const k={},h=(e==null?void 0:e.gutterX.value)??0;return h&&(k.paddingLeft=`${h/2}px`,k.paddingRight=`${h/2}px`),k});return(k,h)=>(i(),U(ot(a.tag),Oe({class:p.value,style:d.value},k.$attrs),{default:v(()=>[y(k.$slots,"default")]),_:3},16,["class","style"]))}}),wt=Ae(Hs,"KkLayout"),Ln=Ae(Us,"KkLayoutHeader"),nn=Ae(qs,"KkLayoutSider"),an=Ae(Gs,"KkLayoutContent"),ta=Ae(Ys,"KkLayoutFooter"),Nn=Ae(Xs,"KkRow"),Tt=Ae(Zs,"KkCol"),Js="data-kk-theme",Na="kk-theme",Ha=["light","dark","soft","cyber"],na=_("light"),In=na,Qs=()=>typeof document<"u";function Ua(){return na.value}function gt(a){na.value=a,Qs()&&document.documentElement.setAttribute(Js,a);try{localStorage.setItem(Na,a)}catch{}}function ei(){var e;let a=null;try{a=localStorage.getItem(Na)}catch{}if(a)return gt(a),a;const t=typeof window<"u"&&((e=window.matchMedia)==null?void 0:e.call(window,"(prefers-color-scheme: dark)").matches)?"dark":"light";return gt(t),t}function ti(a){return Ha.includes(a)}function aa(a=Ua()){return a==="dark"||a==="cyber"}const ni=Ha;function Bn(){const a=m(()=>In.value),n=m(()=>aa(In.value));function t(e,s){const o=In.value===(e??"light")?s??"dark":e??"light";gt(o)}return{theme:a,themes:ni,isDark:n,setTheme:gt,toggleTheme:t,isBuiltInTheme:ti}}const ai=[ke,Ge,ut,Lt,zt,tt,Ye,Tn,Rt,Ht,un,Qn,ft,Ft,nt,cn,Pn,dn,pn,vn,lt,fn,wt,Ln,nn,an,ta,Nn,Tt],li={install(a){ai.forEach(n=>a.use(n))}},oi={class:"kk-visual","aria-hidden":"true"},si={class:"kk-visual__stage"},ii={class:"kk-visual__svg",viewBox:"0 0 520 420",role:"img"},ri={class:"kk-visual__particles"},ui=["cx","cy","r"],ci={class:"kk-visual__computer"},di={"clip-path":"url(#kk-visual-screen-clip)"},pi={class:"kk-visual__code"},vi=["y","width"],fi={class:"kk-visual__keyboard"},mi=["x","y","width"],ki=3,Yt=8,gi=K({__name:"HeroVisual",setup(a){const n=[{id:"line-1",y:204,width:92,tone:"primary"},{id:"line-2",y:217,width:58,tone:"muted"},{id:"line-3",y:230,width:116,tone:"soft"},{id:"line-4",y:243,width:74,tone:"primary"},{id:"line-5",y:256,width:104,tone:"muted"},{id:"line-6",y:269,width:52,tone:"accent"},{id:"line-7",y:282,width:88,tone:"soft"}],t=Array.from({length:ki*Yt},(s,o)=>{const u=Math.floor(o/Yt),p=o%Yt,d=272-u*9,k=176+u*18,h=5,x=(k-h*(Yt-1))/Yt;return{id:`key-${u}-${p}`,x:Number((d+p*(x+h)).toFixed(2)),y:305+u*10,width:Number(x.toFixed(2))}}),e=[{id:"p1",cx:118,cy:92,r:4,delay:0},{id:"p2",cx:448,cy:128,r:5,delay:1.4},{id:"p3",cx:84,cy:268,r:3,delay:2.6},{id:"p4",cx:466,cy:288,r:4,delay:3.8},{id:"p5",cx:396,cy:84,r:3,delay:5}];return(s,o)=>(i(),c("div",oi,[r("div",si,[(i(),c("svg",ii,[o[10]||(o[10]=fa('<defs><clipPath id="kk-visual-screen-clip"><rect x="292" y="178" width="148" height="112" rx="6"></rect></clipPath><clipPath id="kk-visual-visor-clip"><rect x="176" y="142" width="50" height="28" rx="12"></rect></clipPath><linearGradient id="kk-visual-visor-gradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0" class="kk-visual__visor-from"></stop><stop offset="1" class="kk-visual__visor-to"></stop></linearGradient><radialGradient id="kk-visual-glow-gradient" cx="0.5" cy="0.5" r="0.5"><stop offset="0" class="kk-visual__glow-from"></stop><stop offset="1" class="kk-visual__glow-to"></stop></radialGradient></defs><g class="kk-visual__backdrop"><ellipse class="kk-visual__glow" cx="330" cy="248" rx="210" ry="150" fill="url(#kk-visual-glow-gradient)"></ellipse><circle class="kk-visual__ring kk-visual__ring--outer" cx="330" cy="246" r="176"></circle><circle class="kk-visual__ring kk-visual__ring--inner" cx="330" cy="246" r="134"></circle></g>',2)),r("g",ri,[(i(),c(N,null,ve(e,u=>r("circle",{key:u.id,class:"kk-visual__particle",cx:u.cx,cy:u.cy,r:u.r,style:De({animationDelay:`${u.delay}s`})},null,12,ui)),64))]),o[11]||(o[11]=r("g",{class:"kk-visual__desk"},[r("ellipse",{class:"kk-visual__desk-glow",cx:"300",cy:"352",rx:"196",ry:"18"}),r("rect",{class:"kk-visual__desk-top",x:"52",y:"336",width:"416",height:"13",rx:"6.5"})],-1)),r("g",ci,[o[7]||(o[7]=r("ellipse",{class:"kk-visual__screen-aura",cx:"366",cy:"238",rx:"118",ry:"96"},null,-1)),o[8]||(o[8]=r("rect",{class:"kk-visual__lid",x:"282",y:"168",width:"168",height:"136",rx:"10"},null,-1)),o[9]||(o[9]=r("rect",{class:"kk-visual__screen",x:"292",y:"178",width:"148",height:"112",rx:"6"},null,-1)),r("g",di,[r("g",pi,[o[0]||(o[0]=r("rect",{class:"kk-visual__code-bar",x:"292",y:"186",width:"148",height:"9"},null,-1)),o[1]||(o[1]=r("circle",{class:"kk-visual__code-dot",cx:"300",cy:"190.5",r:"2.2"},null,-1)),o[2]||(o[2]=r("circle",{class:"kk-visual__code-dot",cx:"308",cy:"190.5",r:"2.2"},null,-1)),o[3]||(o[3]=r("circle",{class:"kk-visual__code-dot",cx:"316",cy:"190.5",r:"2.2"},null,-1)),(i(),c(N,null,ve(n,u=>r("rect",{key:u.id,class:g(["kk-visual__code-line",`kk-visual__code-line--${u.tone}`]),x:"302",y:u.y,width:u.width,height:"5",rx:"2.5"},null,10,vi)),64)),o[4]||(o[4]=r("rect",{class:"kk-visual__caret",x:"302",y:"294",width:"10",height:"6",rx:"2"},null,-1))]),o[5]||(o[5]=r("rect",{class:"kk-visual__scanline",x:"292",y:"178",width:"148",height:"16"},null,-1))]),r("g",fi,[o[6]||(o[6]=r("path",{class:"kk-visual__keyboard-base",d:"M268 300H452L472 336H248Z"},null,-1)),(i(!0),c(N,null,ve(l(t),u=>(i(),c("rect",{key:u.id,class:"kk-visual__key",x:u.x,y:u.y,width:u.width,height:"6.8",rx:"2"},null,8,mi))),128))])]),o[12]||(o[12]=fa('<g class="kk-visual__robot"><g class="kk-visual__float"><ellipse class="kk-visual__robot-shadow" cx="196" cy="344" rx="70" ry="10"></ellipse><path class="kk-visual__arm kk-visual__arm--back" d="M226 236C246 250 260 274 272 296"></path><rect class="kk-visual__neck" x="186" y="190" width="18" height="20" rx="7"></rect><rect class="kk-visual__torso" x="152" y="206" width="78" height="106" rx="26"></rect><circle class="kk-visual__core-ring" cx="190" cy="248" r="19"></circle><circle class="kk-visual__core" cx="190" cy="248" r="12"></circle><circle class="kk-visual__core-dot" cx="190" cy="248" r="5"></circle><g class="kk-visual__head"><path class="kk-visual__antenna" d="M168 128C166 112 172 102 184 98"></path><circle class="kk-visual__antenna-tip" cx="185" cy="97" r="5"></circle><circle class="kk-visual__antenna-wave" cx="185" cy="97" r="11"></circle><rect class="kk-visual__head-box" x="150" y="126" width="86" height="66" rx="20"></rect><rect class="kk-visual__visor" x="176" y="142" width="50" height="28" rx="12" fill="url(#kk-visual-visor-gradient)"></rect><g clip-path="url(#kk-visual-visor-clip)"><rect class="kk-visual__visor-scan" x="176" y="142" width="50" height="7"></rect></g><path class="kk-visual__vent" d="M160 150h10M160 160h10M160 170h10"></path><circle class="kk-visual__ear" cx="152" cy="162" r="8"></circle></g><circle class="kk-visual__shoulder" cx="232" cy="224" r="14"></circle><path class="kk-visual__arm" d="M236 230C264 240 280 264 296 288"></path><g class="kk-visual__hand"><rect class="kk-visual__hand-box" x="290" y="282" width="20" height="14" rx="6"></rect><path class="kk-visual__finger" d="M296 296v6M304 296v6"></path></g></g></g>',1))]))])]))}}),bi=K({__name:"PointerField",props:{maxCount:{default:110},linkDistance:{default:116},pointerRadius:{default:190}},setup(a){const n=a,t={r:91,g:79,b:233},e={r:199,g:204,b:218},s=[.05,.1,.16,.24],o=[.1,.2,.32,.5],u=[.22,.42,.68],p=_(null);let d=null,k=0,h=0,x=0,C,L=null,P=0,W=0,X=!1,B=!1;const E=[],O={x:-9999,y:-9999,active:!1},F={...t},V={...e},J=[[],[],[]],ne=[[],[],[],[]],H=[[],[],[],[]];function ee(q){return`rgb(${q.r}, ${q.g}, ${q.b})`}function ae(q,A){const R=q.trim();if(R==="")return A;const te=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(R);if(te){const Ve=te[1].length===3?te[1].split("").map(Q=>Q+Q).join(""):te[1];return{r:Number.parseInt(Ve.slice(0,2),16),g:Number.parseInt(Ve.slice(2,4),16),b:Number.parseInt(Ve.slice(4,6),16)}}const oe=/rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i.exec(R);return oe?{r:Math.round(Number(oe[1])),g:Math.round(Number(oe[2])),b:Math.round(Number(oe[3]))}:A}function se(){const q=getComputedStyle(document.documentElement);Object.assign(F,ae(q.getPropertyValue("--kk-color-primary"),t)),Object.assign(V,ae(q.getPropertyValue("--kk-border-color-hover"),e))}function $e(){E.length=0;const q=Math.max(20,Math.min(n.maxCount,Math.round(P*W/26e3)));for(let A=0;A<q;A+=1)E.push({x:Math.random()*P,y:Math.random()*W,driftX:(Math.random()-.5)*.34,driftY:(Math.random()-.5)*.34,impulseX:0,impulseY:0,tier:A%3})}function Z(){const q=p.value;if(!q)return;const A=Math.min(window.devicePixelRatio||1,2);P=window.innerWidth,W=window.innerHeight,q.width=Math.round(P*A),q.height=Math.round(W*A),q.style.width=`${P}px`,q.style.height=`${W}px`,d=q.getContext("2d"),d==null||d.setTransform(A,0,0,A,0,0),$e()}function de(q){if(!X){if(O.active){const A=O.x-q.x,R=O.y-q.y,te=Math.hypot(A,R);if(te<n.pointerRadius&&te>.001){const oe=(1-te/n.pointerRadius)*.42;q.impulseX+=A/te*oe,q.impulseY+=R/te*oe}}q.impulseX*=.94,q.impulseY*=.94,q.x+=q.driftX+Math.max(-1.4,Math.min(1.4,q.impulseX)),q.y+=q.driftY+Math.max(-1.4,Math.min(1.4,q.impulseY))}q.x<-40&&(q.x=P+40),q.x>P+40&&(q.x=-40),q.y<-40&&(q.y=W+40),q.y>W+40&&(q.y=-40)}function xe(){for(let q=0;q<ne.length;q+=1)ne[q].length=0,H[q].length=0;for(let q=0;q<J.length;q+=1)J[q].length=0}function Ee(q,A,R,te){q.strokeStyle=R,q.lineWidth=1;for(let oe=0;oe<A.length;oe+=1){const Ve=A[oe];if(Ve.length!==0){q.globalAlpha=te[oe],q.beginPath();for(let Q=0;Q<Ve.length;Q+=4)q.moveTo(Ve[Q],Ve[Q+1]),q.lineTo(Ve[Q+2],Ve[Q+3]);q.stroke()}}}function Pe(q){q.fillStyle=ee(F);for(let A=0;A<J.length;A+=1){const R=J[A];if(R.length===0)continue;q.globalAlpha=u[A];const te=.9+A*.55;q.beginPath();for(let oe=0;oe<R.length;oe+=2)q.moveTo(R[oe]+te,R[oe+1]),q.arc(R[oe],R[oe+1],te,0,Math.PI*2);q.fill()}}function fe(){const q=d;if(!q)return;q.clearRect(0,0,P,W),xe();const A=n.linkDistance,R=A*A;for(let te=0;te<E.length;te+=1){const oe=E[te];de(oe);for(let Ve=te+1;Ve<E.length;Ve+=1){const Q=E[Ve],ye=oe.x-Q.x,Ke=oe.y-Q.y,We=ye*ye+Ke*Ke;if(We>R)continue;const He=(1-Math.sqrt(We)/A)*.24,Re=Math.min(ne.length-1,Math.floor(He/.06));ne[Re].push(oe.x,oe.y,Q.x,Q.y)}if(O.active){const Ve=oe.x-O.x,Q=oe.y-O.y,ye=Ve*Ve+Q*Q,Ke=n.pointerRadius;if(ye<Ke*Ke){const We=(1-Math.sqrt(ye)/Ke)*.5,He=Math.min(H.length-1,Math.floor(We/.125));H[He].push(oe.x,oe.y,O.x,O.y)}}J[oe.tier].push(oe.x,oe.y)}Ee(q,ne,ee(V),s),Ee(q,H,ee(F),o),Pe(q),q.globalAlpha=1}function ge(){h||(h=requestAnimationFrame(()=>{h=0,fe()}))}function Se(){fe(),k=requestAnimationFrame(Se)}function G(){B||X||(B=!0,k=requestAnimationFrame(Se))}function ue(){k&&cancelAnimationFrame(k),k=0,B=!1}function Te(){C&&clearTimeout(C),C=setTimeout(()=>{O.active=!1,X&&ge()},2400)}function _e(q){O.x=q.clientX,O.y=q.clientY,O.active=!0,Te(),X&&ge()}function he(){O.active=!1,X&&ge()}function Le(){document.hidden?ue():G()}function Fe(){x&&cancelAnimationFrame(x),x=requestAnimationFrame(()=>{x=0,Z(),X&&fe()})}return qe(()=>{X=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Z(),se(),fe(),window.addEventListener("pointermove",_e,{passive:!0}),window.addEventListener("pointerleave",he,{passive:!0}),window.addEventListener("resize",Fe,{passive:!0}),document.addEventListener("visibilitychange",Le),L=new MutationObserver(()=>{se(),X&&ge()}),L.observe(document.documentElement,{attributes:!0,attributeFilter:["data-kk-theme","class","style"]}),G()}),et(()=>{ue(),h&&cancelAnimationFrame(h),h=0,x&&cancelAnimationFrame(x),x=0,C&&clearTimeout(C),window.removeEventListener("pointermove",_e),window.removeEventListener("pointerleave",he),window.removeEventListener("resize",Fe),document.removeEventListener("visibilitychange",Le),L==null||L.disconnect(),L=null}),(q,A)=>(i(),c("canvas",{ref_key:"canvasRef",ref:p,class:"kk-pointer-field","aria-hidden":"true"},null,512))}}),hi={class:"kk-hero"},yi={class:"kk-hero__content"},_i={class:"kk-hero__badge"},xi={class:"kk-hero__title"},wi={class:"kk-hero__desc"},$i={class:"kk-hero__actions"},Si=["href"],Ki=["href"],Ci={class:"kk-install"},Ti={class:"kk-hero__visual"},zi={class:"kk-section"},Pi={class:"kk-section__eyebrow"},Li={class:"kk-section__title"},Bi={class:"kk-section__desc"},Mi={class:"kk-grid kk-grid--3"},Vi={class:"kk-feature__icon"},Oi={class:"kk-feature__title"},Ii={class:"kk-feature__desc"},Ei={class:"kk-section"},Ai={class:"kk-section__eyebrow"},ji={class:"kk-section__title"},Ri={class:"kk-section__desc"},Fi={class:"kk-grid kk-grid--auto"},Di=["href"],Ni={class:"kk-comp-card__name"},Hi={class:"kk-comp-card__desc"},Ui={class:"kk-comp-card__count"},En="pnpm add kk-ui",Wi=K({__name:"Home",setup(a){const{t:n}=st(),t=[{icon:"lucide:palette",key:"theme"},{icon:"lucide:code-2",key:"ts"},{icon:"lucide:zap",key:"tree"},{icon:"lucide:sparkles",key:"design"},{icon:"lucide:shield-check",key:"a11y"},{icon:"lucide:book-open",key:"doc"}],e=[{key:"general",desc:"Button / Icon",count:2,link:"/components/button"},{key:"layout",desc:"Layout / Container / Space / Divider / Card",count:5,link:"/components/layout"},{key:"nav",desc:"Tabs",count:1,link:"/components/tabs"},{key:"data",desc:"Tag / Table / Pagination / Watermark",count:4,link:"/components/table"},{key:"input",desc:"Input / Select / Cascader / Upload / Form",count:6,link:"/components/input"},{key:"feedback",desc:"Modal / Drawer / Skeleton",count:3,link:"/components/modal"}].map(P=>P),s=m(()=>n("docs.home.badge")),o=m(()=>n("docs.home.heroTitlePrefix")),u=m(()=>n("docs.home.heroTitleAccent")),p=m(()=>n("docs.home.heroTitleSuffix"));function d(P){window.dispatchEvent(new CustomEvent("kk-toast",{detail:P}))}const k=_(null);let h=0;function x(P){if(h)return;const{clientX:W,clientY:X}=P;h=requestAnimationFrame(()=>{h=0;const B=k.value;if(!B)return;const E=B.getBoundingClientRect();B.style.setProperty("--kk-pointer-x",`${(W-E.left).toFixed(1)}px`),B.style.setProperty("--kk-pointer-y",`${(X-E.top).toFixed(1)}px`),B.style.setProperty("--kk-pointer-rx",(W/window.innerWidth-.5).toFixed(3)),B.style.setProperty("--kk-pointer-ry",(X/window.innerHeight-.5).toFixed(3))})}function C(){h=0;const P=k.value;P&&(P.style.setProperty("--kk-pointer-rx","0"),P.style.setProperty("--kk-pointer-ry","0"))}qe(()=>{var P,W;(P=k.value)==null||P.addEventListener("pointermove",x,{passive:!0}),(W=k.value)==null||W.addEventListener("pointerleave",C)}),et(()=>{var P,W;h&&cancelAnimationFrame(h),(P=k.value)==null||P.removeEventListener("pointermove",x),(W=k.value)==null||W.removeEventListener("pointerleave",C)});async function L(){try{if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(En);else{const P=document.createElement("textarea");P.value=En,P.style.position="fixed",P.style.opacity="0",document.body.appendChild(P),P.select(),document.execCommand("copy"),document.body.removeChild(P)}d(n("docs.home.copied"))}catch{d(n("docs.home.copyFail"))}}return(P,W)=>(i(),c("div",{ref_key:"homeRef",ref:k,class:"kk-home"},[f(bi),r("section",hi,[r("div",yi,[r("div",_i,[W[0]||(W[0]=r("span",null,"✨",-1)),S(" "+z(s.value),1)]),r("h1",xi,[S(z(o.value),1),r("span",null,z(u.value),1),S(z(p.value),1)]),r("p",wi,z(l(n)("docs.home.heroDesc")),1),r("div",$i,[r("a",{href:l(Pt)("/guide/getting-started")},[f(l(ke),{type:"primary",size:"large"},{icon:v(()=>[f(l(Ge),{name:"lucide:rocket",size:"16"})]),default:v(()=>[S(" "+z(l(n)("docs.home.start")),1)]),_:1})],8,Si),r("a",{href:l(Pt)("/components/")},[f(l(ke),{size:"large"},{default:v(()=>[S(z(l(n)("docs.home.browse")),1)]),_:1})],8,Ki)]),r("div",Ci,[r("span",null,[W[1]||(W[1]=r("b",null,"$",-1)),S(" "+z(En))]),r("button",{class:"kk-install__copy",type:"button",onClick:L},z(l(n)("docs.home.copy")),1)])]),r("div",Ti,[f(gi)])]),r("section",zi,[r("div",Pi,z(l(n)("docs.home.featuresEyebrow")),1),r("h2",Li,z(l(n)("docs.home.featuresTitle")),1),r("p",Bi,z(l(n)("docs.home.featuresDesc")),1),r("div",Mi,[(i(),c(N,null,ve(t,X=>r("div",{key:X.key,class:"kk-feature"},[r("div",Vi,[f(l(Ge),{name:X.icon,size:"20"},null,8,["name"])]),r("div",Oi,z(l(n)(`docs.home.features.${X.key}.title`)),1),r("div",Ii,z(l(n)(`docs.home.features.${X.key}.desc`)),1)])),64))])]),r("section",Ei,[r("div",Ai,z(l(n)("docs.home.overviewEyebrow")),1),r("h2",ji,z(l(n)("docs.home.overviewTitle")),1),r("p",Ri,z(l(n)("docs.home.overviewDesc")),1),r("div",Fi,[(i(!0),c(N,null,ve(l(e),X=>(i(),c("a",{key:X.key,class:"kk-comp-card",href:l(Pt)(X.link)},[r("div",Ni,z(l(n)(`docs.home.groups.${X.key}`)),1),r("div",Hi,z(X.desc),1),r("div",Ui,z(l(n)("docs.home.count",{count:X.count})),1)],8,Di))),128))])])],512))}}),qi=K({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(a){return(n,t)=>(i(),c("span",{class:g(["VPBadge",a.type])},[y(n.$slots,"default",{},()=>[S(z(a.text),1)])],2))}}),Gi={key:0,class:"VPBackdrop"},Yi=K({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(a){return(n,t)=>(i(),U(on,{name:"fade"},{default:v(()=>[a.show?(i(),c("div",Gi)):$("",!0)]),_:1}))}}),Xi=re(Yi,[["__scopeId","data-v-111f5ca9"]]),ze=Gn;function Zi(a,n){let t,e=!1;return()=>{t&&clearTimeout(t),e?t=setTimeout(a,n):(a(),(e=!0)&&setTimeout(()=>e=!1,n))}}function Hn(a){return a.startsWith("/")?a:`/${a}`}function la(a){const{pathname:n,search:t,hash:e,protocol:s}=new URL(a,"http://a.com");if(sl(a)||a.startsWith("#")||!s.startsWith("http")||!il(n))return a;const{site:o}=ze(),u=n.endsWith("/")||n.endsWith(".html")?a:a.replace(/(?:(^\.+)\/)?.*$/,`$1${n.replace(/(\.md)?$/,o.value.cleanUrls?"":".html")}${t}${e}`);return Pt(u)}function mn({correspondingLink:a=!1}={}){const{site:n,localeIndex:t,page:e,theme:s,hash:o}=ze(),u=m(()=>{var d,k;return{label:(d=n.value.locales[t.value])==null?void 0:d.label,link:((k=n.value.locales[t.value])==null?void 0:k.link)||(t.value==="root"?"/":`/${t.value}/`)}});return{localeLinks:m(()=>Object.entries(n.value.locales).flatMap(([d,k])=>u.value.label===k.label?[]:{text:k.label,link:Ji(k.link||(d==="root"?"/":`/${d}/`),s.value.i18nRouting!==!1&&a,e.value.relativePath.slice(u.value.link.length-1),!n.value.cleanUrls)+o.value})),currentLang:u}}function Ji(a,n,t,e){return n?a.replace(/\/$/,"")+Hn(t.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,e?".html":"")):a}const Qi={class:"NotFound"},er={class:"code"},tr={class:"title"},nr={class:"quote"},ar={class:"action"},lr=["href","aria-label"],or=K({__name:"NotFound",setup(a){const{theme:n}=ze(),{currentLang:t}=mn();return(e,s)=>{var o,u,p,d,k;return i(),c("div",Qi,[r("p",er,z(((o=l(n).notFound)==null?void 0:o.code)??"404"),1),r("h1",tr,z(((u=l(n).notFound)==null?void 0:u.title)??"PAGE NOT FOUND"),1),s[0]||(s[0]=r("div",{class:"divider"},null,-1)),r("blockquote",nr,z(((p=l(n).notFound)==null?void 0:p.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),r("div",ar,[r("a",{class:"link",href:l(Pt)(l(t).link),"aria-label":((d=l(n).notFound)==null?void 0:d.linkLabel)??"go to home"},z(((k=l(n).notFound)==null?void 0:k.linkText)??"Take me home"),9,lr)])])}}}),sr=re(or,[["__scopeId","data-v-750bc60b"]]);function Wa(a,n){if(Array.isArray(a))return xn(a);if(a==null)return[];n=Hn(n);const t=Object.keys(a).sort((s,o)=>o.split("/").length-s.split("/").length).find(s=>n.startsWith(Hn(s))),e=t?a[t]:[];return Array.isArray(e)?xn(e):xn(e.items,e.base)}function ir(a){const n=[];let t=0;for(const e in a){const s=a[e];if(s.items){t=n.push(s);continue}n[t]||n.push({items:[]}),n[t].items.push(s)}return n}function rr(a){const n=[];function t(e){for(const s of e)s.text&&s.link&&n.push({text:s.text,link:s.link,docFooterText:s.docFooterText}),s.items&&t(s.items)}return t(a),n}function Un(a,n){return Array.isArray(n)?n.some(t=>Un(a,t)):Bt(a,n.link)?!0:n.items?Un(a,n.items):!1}function xn(a,n){return[...a].map(t=>{const e={...t},s=e.base||n;return s&&e.link&&(e.link=s+e.link),e.items&&(e.items=xn(e.items,s)),e})}function yt(){const{frontmatter:a,page:n,theme:t}=ze(),e=jn("(min-width: 960px)"),s=_(!1),o=m(()=>{const W=t.value.sidebar,X=n.value.relativePath;return W?Wa(W,X):[]}),u=_(o.value);Be(o,(W,X)=>{JSON.stringify(W)!==JSON.stringify(X)&&(u.value=o.value)});const p=m(()=>a.value.sidebar!==!1&&u.value.length>0&&a.value.layout!=="home"),d=m(()=>k?a.value.aside==null?t.value.aside==="left":a.value.aside==="left":!1),k=m(()=>a.value.layout==="home"?!1:a.value.aside!=null?!!a.value.aside:t.value.aside!==!1),h=m(()=>p.value&&e.value),x=m(()=>p.value?ir(u.value):[]);function C(){s.value=!0}function L(){s.value=!1}function P(){s.value?L():C()}return{isOpen:s,sidebar:u,sidebarGroups:x,hasSidebar:p,hasAside:k,leftAside:d,isSidebarEnabled:h,open:C,close:L,toggle:P}}function ur(a,n){let t;rn(()=>{t=a.value?document.activeElement:void 0}),qe(()=>{window.addEventListener("keyup",e)}),Yn(()=>{window.removeEventListener("keyup",e)});function e(s){s.key==="Escape"&&a.value&&(n(),t==null||t.focus())}}function cr(a){const{page:n,hash:t}=ze(),e=_(!1),s=m(()=>a.value.collapsed!=null),o=m(()=>!!a.value.link),u=_(!1),p=()=>{u.value=Bt(n.value.relativePath,a.value.link)};Be([n,a,t],p),qe(p);const d=m(()=>u.value?!0:a.value.items?Un(n.value.relativePath,a.value.items):!1),k=m(()=>!!(a.value.items&&a.value.items.length));rn(()=>{e.value=!!(s.value&&a.value.collapsed)}),Xn(()=>{(u.value||d.value)&&(e.value=!1)});function h(){s.value&&(e.value=!e.value)}return{collapsed:e,collapsible:s,isLink:o,isActiveLink:u,hasActiveLink:d,hasChildren:k,toggle:h}}function dr(){const{hasSidebar:a}=yt(),n=jn("(min-width: 960px)"),t=jn("(min-width: 1280px)");return{isAsideEnabled:m(()=>!t.value&&!n.value?!1:a.value?t.value:n.value)}}const pr=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,Wn=[];function qa(a){return typeof a.outline=="object"&&!Array.isArray(a.outline)&&a.outline.label||a.outlineTitle||"On this page"}function oa(a){const n=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(t=>t.id&&t.hasChildNodes()).map(t=>{const e=Number(t.tagName[1]);return{element:t,title:vr(t),link:"#"+t.id,level:e}});return fr(n,a)}function vr(a){let n="";for(const t of a.childNodes)if(t.nodeType===1){if(pr.test(t.className))continue;n+=t.textContent}else t.nodeType===3&&(n+=t.textContent);return n.trim()}function fr(a,n){if(n===!1)return[];const t=(typeof n=="object"&&!Array.isArray(n)?n.level:n)||2,[e,s]=typeof t=="number"?[t,t]:t==="deep"?[2,6]:t;return gr(a,e,s)}function mr(a,n){const{isAsideEnabled:t}=dr(),e=Zi(o,100);let s=null;qe(()=>{requestAnimationFrame(o),window.addEventListener("scroll",e)}),rl(()=>{u(location.hash)}),Yn(()=>{window.removeEventListener("scroll",e)});function o(){if(!t.value)return;const p=window.scrollY,d=window.innerHeight,k=document.body.offsetHeight,h=Math.abs(p+d-k)<1,x=Wn.map(({element:L,link:P})=>({link:P,top:kr(L)})).filter(({top:L})=>!Number.isNaN(L)).sort((L,P)=>L.top-P.top);if(!x.length){u(null);return}if(p<1){u(null);return}if(h){u(x[x.length-1].link);return}let C=null;for(const{link:L,top:P}of x){if(P>p+ul()+4)break;C=L}u(C)}function u(p){s&&s.classList.remove("active"),p==null?s=null:s=a.value.querySelector(`a[href="${decodeURIComponent(p)}"]`);const d=s;d?(d.classList.add("active"),n.value.style.top=d.offsetTop+39+"px",n.value.style.opacity="1"):(n.value.style.top="33px",n.value.style.opacity="0")}}function kr(a){let n=0;for(;a!==document.body;){if(a===null)return NaN;n+=a.offsetTop,a=a.offsetParent}return n}function gr(a,n,t){Wn.length=0;const e=[],s=[];return a.forEach(o=>{const u={...o,children:[]};let p=s[s.length-1];for(;p&&p.level>=u.level;)s.pop(),p=s[s.length-1];if(u.element.classList.contains("ignore-header")||p&&"shouldIgnore"in p){s.push({level:u.level,shouldIgnore:!0});return}u.level>t||u.level<n||(Wn.push({element:u.element,link:u.link}),p?p.children.push(u):e.push(u),s.push(u))}),e}const br=["href","title"],hr=K({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(a){function n({target:t}){const e=t.href.split("#")[1],s=document.getElementById(decodeURIComponent(e));s==null||s.focus({preventScroll:!0})}return(t,e)=>{const s=Vt("VPDocOutlineItem",!0);return i(),c("ul",{class:g(["VPDocOutlineItem",a.root?"root":"nested"])},[(i(!0),c(N,null,ve(a.headers,({children:o,link:u,title:p})=>(i(),c("li",null,[r("a",{class:"outline-link",href:u,onClick:n,title:p},z(p),9,br),o!=null&&o.length?(i(),U(s,{key:0,headers:o},null,8,["headers"])):$("",!0)]))),256))],2)}}}),Ga=re(hr,[["__scopeId","data-v-37752517"]]),yr={class:"content"},_r={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},xr=K({__name:"VPDocAsideOutline",setup(a){const{frontmatter:n,theme:t}=ze(),e=qn([]);Sn(()=>{e.value=oa(n.value.outline??t.value.outline)});const s=_(),o=_();return mr(s,o),(u,p)=>(i(),c("nav",{"aria-labelledby":"doc-outline-aria-label",class:g(["VPDocAsideOutline",{"has-outline":e.value.length>0}]),ref_key:"container",ref:s},[r("div",yr,[r("div",{class:"outline-marker",ref_key:"marker",ref:o},null,512),r("div",_r,z(l(qa)(l(t))),1),f(Ga,{headers:e.value,root:!0},null,8,["headers"])])],2))}}),wr=re(xr,[["__scopeId","data-v-fd1219a0"]]),$r={class:"VPDocAsideCarbonAds"},Sr=K({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(a){const n=()=>null;return(t,e)=>(i(),c("div",$r,[f(l(n),{"carbon-ads":a.carbonAds},null,8,["carbon-ads"])]))}}),Kr={class:"VPDocAside"},Cr=K({__name:"VPDocAside",setup(a){const{theme:n}=ze();return(t,e)=>(i(),c("div",Kr,[y(t.$slots,"aside-top",{},void 0,!0),y(t.$slots,"aside-outline-before",{},void 0,!0),f(wr),y(t.$slots,"aside-outline-after",{},void 0,!0),e[0]||(e[0]=r("div",{class:"spacer"},null,-1)),y(t.$slots,"aside-ads-before",{},void 0,!0),l(n).carbonAds?(i(),U(Sr,{key:0,"carbon-ads":l(n).carbonAds},null,8,["carbon-ads"])):$("",!0),y(t.$slots,"aside-ads-after",{},void 0,!0),y(t.$slots,"aside-bottom",{},void 0,!0)]))}}),Tr=re(Cr,[["__scopeId","data-v-1797d636"]]);function zr(){const{theme:a,page:n}=ze();return m(()=>{const{text:t="Edit this page",pattern:e=""}=a.value.editLink||{};let s;return typeof e=="function"?s=e(n.value):s=e.replace(/:path/g,n.value.filePath),{url:s,text:t}})}function Pr(){const{page:a,theme:n,frontmatter:t}=ze();return m(()=>{var k,h,x,C,L,P,W,X;const e=Wa(n.value.sidebar,a.value.relativePath),s=rr(e),o=Lr(s,B=>B.link.replace(/[?#].*$/,"")),u=o.findIndex(B=>Bt(a.value.relativePath,B.link)),p=((k=n.value.docFooter)==null?void 0:k.prev)===!1&&!t.value.prev||t.value.prev===!1,d=((h=n.value.docFooter)==null?void 0:h.next)===!1&&!t.value.next||t.value.next===!1;return{prev:p?void 0:{text:(typeof t.value.prev=="string"?t.value.prev:typeof t.value.prev=="object"?t.value.prev.text:void 0)??((x=o[u-1])==null?void 0:x.docFooterText)??((C=o[u-1])==null?void 0:C.text),link:(typeof t.value.prev=="object"?t.value.prev.link:void 0)??((L=o[u-1])==null?void 0:L.link)},next:d?void 0:{text:(typeof t.value.next=="string"?t.value.next:typeof t.value.next=="object"?t.value.next.text:void 0)??((P=o[u+1])==null?void 0:P.docFooterText)??((W=o[u+1])==null?void 0:W.text),link:(typeof t.value.next=="object"?t.value.next.link:void 0)??((X=o[u+1])==null?void 0:X.link)}}})}function Lr(a,n){const t=new Set;return a.filter(e=>{const s=n(e);return t.has(s)?!1:t.add(s)})}const mt=K({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(a){const n=a,t=m(()=>n.tag??(n.href?"a":"span")),e=m(()=>n.href&&za.test(n.href)||n.target==="_blank");return(s,o)=>(i(),U(ot(t.value),{class:g(["VPLink",{link:a.href,"vp-external-link-icon":e.value,"no-icon":a.noIcon}]),href:a.href?l(la)(a.href):void 0,target:a.target??(e.value?"_blank":void 0),rel:a.rel??(e.value?"noreferrer":void 0)},{default:v(()=>[y(s.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Br={class:"VPLastUpdated"},Mr=["datetime"],Vr=K({__name:"VPDocFooterLastUpdated",setup(a){const{theme:n,page:t,lang:e}=ze(),s=m(()=>new Date(t.value.lastUpdated)),o=m(()=>s.value.toISOString()),u=_("");return qe(()=>{rn(()=>{var p,d,k;u.value=new Intl.DateTimeFormat((d=(p=n.value.lastUpdated)==null?void 0:p.formatOptions)!=null&&d.forceLocale?e.value:void 0,((k=n.value.lastUpdated)==null?void 0:k.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(s.value)})}),(p,d)=>{var k;return i(),c("p",Br,[S(z(((k=l(n).lastUpdated)==null?void 0:k.text)||l(n).lastUpdatedText||"Last updated")+": ",1),r("time",{datetime:o.value},z(u.value),9,Mr)])}}}),Or=re(Vr,[["__scopeId","data-v-9e359b51"]]),Ir={key:0,class:"VPDocFooter"},Er={key:0,class:"edit-info"},Ar={key:0,class:"edit-link"},jr={key:1,class:"last-updated"},Rr={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},Fr={class:"pager"},Dr=["innerHTML"],Nr=["innerHTML"],Hr={class:"pager"},Ur=["innerHTML"],Wr=["innerHTML"],qr=K({__name:"VPDocFooter",setup(a){const{theme:n,page:t,frontmatter:e}=ze(),s=zr(),o=Pr(),u=m(()=>n.value.editLink&&e.value.editLink!==!1),p=m(()=>t.value.lastUpdated),d=m(()=>u.value||p.value||o.value.prev||o.value.next);return(k,h)=>{var x,C,L,P;return d.value?(i(),c("footer",Ir,[y(k.$slots,"doc-footer-before",{},void 0,!0),u.value||p.value?(i(),c("div",Er,[u.value?(i(),c("div",Ar,[f(mt,{class:"edit-link-button",href:l(s).url,"no-icon":!0},{default:v(()=>[h[0]||(h[0]=r("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),S(" "+z(l(s).text),1)]),_:1},8,["href"])])):$("",!0),p.value?(i(),c("div",jr,[f(Or)])):$("",!0)])):$("",!0),(x=l(o).prev)!=null&&x.link||(C=l(o).next)!=null&&C.link?(i(),c("nav",Rr,[h[1]||(h[1]=r("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),r("div",Fr,[(L=l(o).prev)!=null&&L.link?(i(),U(mt,{key:0,class:"pager-link prev",href:l(o).prev.link},{default:v(()=>{var W;return[r("span",{class:"desc",innerHTML:((W=l(n).docFooter)==null?void 0:W.prev)||"Previous page"},null,8,Dr),r("span",{class:"title",innerHTML:l(o).prev.text},null,8,Nr)]}),_:1},8,["href"])):$("",!0)]),r("div",Hr,[(P=l(o).next)!=null&&P.link?(i(),U(mt,{key:0,class:"pager-link next",href:l(o).next.link},{default:v(()=>{var W;return[r("span",{class:"desc",innerHTML:((W=l(n).docFooter)==null?void 0:W.next)||"Next page"},null,8,Ur),r("span",{class:"title",innerHTML:l(o).next.text},null,8,Wr)]}),_:1},8,["href"])):$("",!0)])])):$("",!0)])):$("",!0)}}}),Gr=re(qr,[["__scopeId","data-v-8156e15f"]]),Yr={class:"container"},Xr={class:"aside-container"},Zr={class:"aside-content"},Jr={class:"content"},Qr={class:"content-container"},eu={class:"main"},tu=K({__name:"VPDoc",setup(a){const{theme:n}=ze(),t=Dt(),{hasSidebar:e,hasAside:s,leftAside:o}=yt(),u=m(()=>t.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(p,d)=>{const k=Vt("Content");return i(),c("div",{class:g(["VPDoc",{"has-sidebar":l(e),"has-aside":l(s)}])},[y(p.$slots,"doc-top",{},void 0,!0),r("div",Yr,[l(s)?(i(),c("div",{key:0,class:g(["aside",{"left-aside":l(o)}])},[d[0]||(d[0]=r("div",{class:"aside-curtain"},null,-1)),r("div",Xr,[r("div",Zr,[f(Tr,null,{"aside-top":v(()=>[y(p.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":v(()=>[y(p.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":v(()=>[y(p.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":v(()=>[y(p.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":v(()=>[y(p.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":v(()=>[y(p.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):$("",!0),r("div",Jr,[r("div",Qr,[y(p.$slots,"doc-before",{},void 0,!0),r("main",eu,[f(k,{class:g(["vp-doc",[u.value,l(n).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),f(Gr,null,{"doc-footer-before":v(()=>[y(p.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),y(p.$slots,"doc-after",{},void 0,!0)])])]),y(p.$slots,"doc-bottom",{},void 0,!0)],2)}}}),nu=re(tu,[["__scopeId","data-v-5815b2ee"]]),au=K({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(a){const n=a,t=m(()=>n.href&&za.test(n.href)),e=m(()=>n.tag||(n.href?"a":"button"));return(s,o)=>(i(),U(ot(e.value),{class:g(["VPButton",[a.size,a.theme]]),href:a.href?l(la)(a.href):void 0,target:n.target??(t.value?"_blank":void 0),rel:n.rel??(t.value?"noreferrer":void 0)},{default:v(()=>[S(z(a.text),1)]),_:1},8,["class","href","target","rel"]))}}),lu=re(au,[["__scopeId","data-v-083125f9"]]),ou=["src","alt"],su=K({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(a){return(n,t)=>{const e=Vt("VPImage",!0);return a.image?(i(),c(N,{key:0},[typeof a.image=="string"||"src"in a.image?(i(),c("img",Oe({key:0,class:"VPImage"},typeof a.image=="string"?n.$attrs:{...a.image,...n.$attrs},{src:l(Pt)(typeof a.image=="string"?a.image:a.image.src),alt:a.alt??(typeof a.image=="string"?"":a.image.alt||"")}),null,16,ou)):(i(),c(N,{key:1},[f(e,Oe({class:"dark",image:a.image.dark,alt:a.image.alt},n.$attrs),null,16,["image","alt"]),f(e,Oe({class:"light",image:a.image.light,alt:a.image.alt},n.$attrs),null,16,["image","alt"])],64))],64)):$("",!0)}}}),$n=re(su,[["__scopeId","data-v-9bf5b19f"]]),iu={class:"container"},ru={class:"main"},uu={class:"heading"},cu=["innerHTML"],du=["innerHTML"],pu=["innerHTML"],vu={key:0,class:"actions"},fu={key:0,class:"image"},mu={class:"image-container"},ku=K({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(a){const n=Je("hero-image-slot-exists");return(t,e)=>(i(),c("div",{class:g(["VPHero",{"has-image":a.image||l(n)}])},[r("div",iu,[r("div",ru,[y(t.$slots,"home-hero-info-before",{},void 0,!0),y(t.$slots,"home-hero-info",{},()=>[r("h1",uu,[a.name?(i(),c("span",{key:0,innerHTML:a.name,class:"name clip"},null,8,cu)):$("",!0),a.text?(i(),c("span",{key:1,innerHTML:a.text,class:"text"},null,8,du)):$("",!0)]),a.tagline?(i(),c("p",{key:0,innerHTML:a.tagline,class:"tagline"},null,8,pu)):$("",!0)],!0),y(t.$slots,"home-hero-info-after",{},void 0,!0),a.actions?(i(),c("div",vu,[(i(!0),c(N,null,ve(a.actions,s=>(i(),c("div",{key:s.link,class:"action"},[f(lu,{tag:"a",size:"medium",theme:s.theme,text:s.text,href:s.link,target:s.target,rel:s.rel},null,8,["theme","text","href","target","rel"])]))),128))])):$("",!0),y(t.$slots,"home-hero-actions-after",{},void 0,!0)]),a.image||l(n)?(i(),c("div",fu,[r("div",mu,[e[0]||(e[0]=r("div",{class:"image-bg"},null,-1)),y(t.$slots,"home-hero-image",{},()=>[a.image?(i(),U($n,{key:0,class:"image-src",image:a.image},null,8,["image"])):$("",!0)],!0)])])):$("",!0)])],2))}}),gu=re(ku,[["__scopeId","data-v-e51af47b"]]),bu=K({__name:"VPHomeHero",setup(a){const{frontmatter:n}=ze();return(t,e)=>l(n).hero?(i(),U(gu,{key:0,class:"VPHomeHero",name:l(n).hero.name,text:l(n).hero.text,tagline:l(n).hero.tagline,image:l(n).hero.image,actions:l(n).hero.actions},{"home-hero-info-before":v(()=>[y(t.$slots,"home-hero-info-before")]),"home-hero-info":v(()=>[y(t.$slots,"home-hero-info")]),"home-hero-info-after":v(()=>[y(t.$slots,"home-hero-info-after")]),"home-hero-actions-after":v(()=>[y(t.$slots,"home-hero-actions-after")]),"home-hero-image":v(()=>[y(t.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):$("",!0)}}),hu={class:"box"},yu={key:0,class:"icon"},_u=["innerHTML"],xu=["innerHTML"],wu=["innerHTML"],$u={key:4,class:"link-text"},Su={class:"link-text-value"},Ku=K({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(a){return(n,t)=>(i(),U(mt,{class:"VPFeature",href:a.link,rel:a.rel,target:a.target,"no-icon":!0,tag:a.link?"a":"div"},{default:v(()=>[r("article",hu,[typeof a.icon=="object"&&a.icon.wrap?(i(),c("div",yu,[f($n,{image:a.icon,alt:a.icon.alt,height:a.icon.height||48,width:a.icon.width||48},null,8,["image","alt","height","width"])])):typeof a.icon=="object"?(i(),U($n,{key:1,image:a.icon,alt:a.icon.alt,height:a.icon.height||48,width:a.icon.width||48},null,8,["image","alt","height","width"])):a.icon?(i(),c("div",{key:2,class:"icon",innerHTML:a.icon},null,8,_u)):$("",!0),r("h2",{class:"title",innerHTML:a.title},null,8,xu),a.details?(i(),c("p",{key:3,class:"details",innerHTML:a.details},null,8,wu)):$("",!0),a.linkText?(i(),c("div",$u,[r("p",Su,[S(z(a.linkText)+" ",1),t[0]||(t[0]=r("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):$("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Cu=re(Ku,[["__scopeId","data-v-57041261"]]),Tu={key:0,class:"VPFeatures"},zu={class:"container"},Pu={class:"items"},Lu=K({__name:"VPFeatures",props:{features:{}},setup(a){const n=a,t=m(()=>{const e=n.features.length;if(e){if(e===2)return"grid-2";if(e===3)return"grid-3";if(e%3===0)return"grid-6";if(e>3)return"grid-4"}else return});return(e,s)=>a.features?(i(),c("div",Tu,[r("div",zu,[r("div",Pu,[(i(!0),c(N,null,ve(a.features,o=>(i(),c("div",{key:o.title,class:g(["item",[t.value]])},[f(Cu,{icon:o.icon,title:o.title,details:o.details,link:o.link,"link-text":o.linkText,rel:o.rel,target:o.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):$("",!0)}}),Bu=re(Lu,[["__scopeId","data-v-6bcfff71"]]),Mu=K({__name:"VPHomeFeatures",setup(a){const{frontmatter:n}=ze();return(t,e)=>l(n).features?(i(),U(Bu,{key:0,class:"VPHomeFeatures",features:l(n).features},null,8,["features"])):$("",!0)}}),Vu=K({__name:"VPHomeContent",setup(a){const{width:n}=cl({initialWidth:0,includeScrollbar:!1});return(t,e)=>(i(),c("div",{class:"vp-doc container",style:De(l(n)?{"--vp-offset":`calc(50% - ${l(n)/2}px)`}:{})},[y(t.$slots,"default",{},void 0,!0)],4))}}),Ou=re(Vu,[["__scopeId","data-v-d88f8b0f"]]),Iu=K({__name:"VPHome",setup(a){const{frontmatter:n,theme:t}=ze();return(e,s)=>{const o=Vt("Content");return i(),c("div",{class:g(["VPHome",{"external-link-icon-enabled":l(t).externalLinkIcon}])},[y(e.$slots,"home-hero-before",{},void 0,!0),f(bu,null,{"home-hero-info-before":v(()=>[y(e.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":v(()=>[y(e.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":v(()=>[y(e.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":v(()=>[y(e.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":v(()=>[y(e.$slots,"home-hero-image",{},void 0,!0)]),_:3}),y(e.$slots,"home-hero-after",{},void 0,!0),y(e.$slots,"home-features-before",{},void 0,!0),f(Mu),y(e.$slots,"home-features-after",{},void 0,!0),l(n).markdownStyles!==!1?(i(),U(Ou,{key:0},{default:v(()=>[f(o)]),_:1})):(i(),U(o,{key:1}))],2)}}}),Eu=re(Iu,[["__scopeId","data-v-a8086b4d"]]),Au={},ju={class:"VPPage"};function Ru(a,n){const t=Vt("Content");return i(),c("div",ju,[y(a.$slots,"page-top"),f(t),y(a.$slots,"page-bottom")])}const Fu=re(Au,[["render",Ru]]),Du=K({__name:"VPContent",setup(a){const{page:n,frontmatter:t}=ze(),{hasSidebar:e}=yt();return(s,o)=>(i(),c("div",{class:g(["VPContent",{"has-sidebar":l(e),"is-home":l(t).layout==="home"}]),id:"VPContent"},[l(n).isNotFound?y(s.$slots,"not-found",{},()=>[f(sr)],!0,0):l(t).layout==="page"?(i(),U(Fu,{key:1},{"page-top":v(()=>[y(s.$slots,"page-top",{},void 0,!0)]),"page-bottom":v(()=>[y(s.$slots,"page-bottom",{},void 0,!0)]),_:3})):l(t).layout==="home"?(i(),U(Eu,{key:2},{"home-hero-before":v(()=>[y(s.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":v(()=>[y(s.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":v(()=>[y(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":v(()=>[y(s.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":v(()=>[y(s.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":v(()=>[y(s.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":v(()=>[y(s.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":v(()=>[y(s.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":v(()=>[y(s.$slots,"home-features-after",{},void 0,!0)]),_:3})):l(t).layout&&l(t).layout!=="doc"?(i(),U(ot(l(t).layout),{key:3})):(i(),U(nu,{key:4},{"doc-top":v(()=>[y(s.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":v(()=>[y(s.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":v(()=>[y(s.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":v(()=>[y(s.$slots,"doc-before",{},void 0,!0)]),"doc-after":v(()=>[y(s.$slots,"doc-after",{},void 0,!0)]),"aside-top":v(()=>[y(s.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":v(()=>[y(s.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":v(()=>[y(s.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":v(()=>[y(s.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":v(()=>[y(s.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":v(()=>[y(s.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),Nu=re(Du,[["__scopeId","data-v-a97fbbac"]]),Hu={class:"container"},Uu=["innerHTML"],Wu=["innerHTML"],qu=K({__name:"VPFooter",setup(a){const{theme:n,frontmatter:t}=ze(),{hasSidebar:e}=yt();return(s,o)=>l(n).footer&&l(t).footer!==!1?(i(),c("footer",{key:0,class:g(["VPFooter",{"has-sidebar":l(e)}])},[r("div",Hu,[l(n).footer.message?(i(),c("p",{key:0,class:"message",innerHTML:l(n).footer.message},null,8,Uu)):$("",!0),l(n).footer.copyright?(i(),c("p",{key:1,class:"copyright",innerHTML:l(n).footer.copyright},null,8,Wu)):$("",!0)])],2)):$("",!0)}}),Gu=re(qu,[["__scopeId","data-v-a3cd0c53"]]);function Yu(){const{theme:a,frontmatter:n}=ze(),t=qn([]),e=m(()=>t.value.length>0);return Sn(()=>{t.value=oa(n.value.outline??a.value.outline)}),{headers:t,hasLocalNav:e}}const Xu={class:"menu-text"},Zu={class:"header"},Ju={class:"outline"},Qu=K({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(a){const n=a,{theme:t}=ze(),e=_(!1),s=_(0),o=_(),u=_();function p(x){var C;(C=o.value)!=null&&C.contains(x.target)||(e.value=!1)}Be(e,x=>{if(x){document.addEventListener("click",p);return}document.removeEventListener("click",p)}),dl("Escape",()=>{e.value=!1}),Sn(()=>{e.value=!1});function d(){e.value=!e.value,s.value=window.innerHeight+Math.min(window.scrollY-n.navHeight,0)}function k(x){x.target.classList.contains("outline-link")&&(u.value&&(u.value.style.transition="none"),at(()=>{e.value=!1}))}function h(){e.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(x,C)=>(i(),c("div",{class:"VPLocalNavOutlineDropdown",style:De({"--vp-vh":s.value+"px"}),ref_key:"main",ref:o},[a.headers.length>0?(i(),c("button",{key:0,onClick:d,class:g({open:e.value})},[r("span",Xu,z(l(qa)(l(t))),1),C[0]||(C[0]=r("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(i(),c("button",{key:1,onClick:h},z(l(t).returnToTopLabel||"Return to top"),1)),f(on,{name:"flyout"},{default:v(()=>[e.value?(i(),c("div",{key:0,ref_key:"items",ref:u,class:"items",onClick:k},[r("div",Zu,[r("a",{class:"top-link",href:"#",onClick:h},z(l(t).returnToTopLabel||"Return to top"),1)]),r("div",Ju,[f(Ga,{headers:a.headers},null,8,["headers"])])],512)):$("",!0)]),_:1})],4))}}),ec=re(Qu,[["__scopeId","data-v-ebfb8c58"]]),tc={class:"container"},nc=["aria-expanded"],ac={class:"menu-text"},lc=K({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(a){const{theme:n,frontmatter:t}=ze(),{hasSidebar:e}=yt(),{headers:s}=Yu(),{y:o}=Pa(),u=_(0);qe(()=>{u.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),Sn(()=>{s.value=oa(t.value.outline??n.value.outline)});const p=m(()=>s.value.length===0),d=m(()=>p.value&&!e.value),k=m(()=>({VPLocalNav:!0,"has-sidebar":e.value,empty:p.value,fixed:d.value}));return(h,x)=>l(t).layout!=="home"&&(!d.value||l(o)>=u.value)?(i(),c("div",{key:0,class:g(k.value)},[r("div",tc,[l(e)?(i(),c("button",{key:0,class:"menu","aria-expanded":a.open,"aria-controls":"VPSidebarNav",onClick:x[0]||(x[0]=C=>h.$emit("open-menu"))},[x[1]||(x[1]=r("span",{class:"vpi-align-left menu-icon"},null,-1)),r("span",ac,z(l(n).sidebarMenuLabel||"Menu"),1)],8,nc)):$("",!0),f(ec,{headers:l(s),navHeight:u.value},null,8,["headers","navHeight"])])],2)):$("",!0)}}),oc=re(lc,[["__scopeId","data-v-ae0c9d38"]]);function sc(){const a=_(!1);function n(){a.value=!0,window.addEventListener("resize",s)}function t(){a.value=!1,window.removeEventListener("resize",s)}function e(){a.value?t():n()}function s(){window.outerWidth>=768&&t()}const o=Dt();return Be(()=>o.path,t),{isScreenOpen:a,openScreen:n,closeScreen:t,toggleScreen:e}}const ic={},rc={class:"VPSwitch",type:"button",role:"switch"},uc={class:"check"},cc={key:0,class:"icon"};function dc(a,n){return i(),c("button",rc,[r("span",uc,[a.$slots.default?(i(),c("span",cc,[y(a.$slots,"default",{},void 0,!0)])):$("",!0)])])}const pc=re(ic,[["render",dc],["__scopeId","data-v-7f3956d8"]]),vc=K({__name:"VPSwitchAppearance",setup(a){const{isDark:n,theme:t}=ze(),e=Je("toggle-appearance",()=>{n.value=!n.value}),s=_("");return Xn(()=>{s.value=n.value?t.value.lightModeSwitchTitle||"Switch to light theme":t.value.darkModeSwitchTitle||"Switch to dark theme"}),(o,u)=>(i(),U(pc,{title:s.value,class:"VPSwitchAppearance","aria-checked":l(n),onClick:l(e)},{default:v(()=>[...u[0]||(u[0]=[r("span",{class:"vpi-sun sun"},null,-1),r("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),sa=re(vc,[["__scopeId","data-v-17dd2ffd"]]),fc={key:0,class:"VPNavBarAppearance"},mc=K({__name:"VPNavBarAppearance",setup(a){const{site:n}=ze();return(t,e)=>l(n).appearance&&l(n).appearance!=="force-dark"&&l(n).appearance!=="force-auto"?(i(),c("div",fc,[f(sa)])):$("",!0)}}),kc=re(mc,[["__scopeId","data-v-12d05aae"]]),ia=_();let Ya=!1,An=0;function gc(a){const n=_(!1);if(Kn){!Ya&&bc(),An++;const t=Be(ia,e=>{var s,o,u;e===a.el.value||(s=a.el.value)!=null&&s.contains(e)?(n.value=!0,(o=a.onFocus)==null||o.call(a)):(n.value=!1,(u=a.onBlur)==null||u.call(a))});Yn(()=>{t(),An--,An||hc()})}return pl(n)}function bc(){document.addEventListener("focusin",Xa),Ya=!0,ia.value=document.activeElement}function hc(){document.removeEventListener("focusin",Xa)}function Xa(){ia.value=document.activeElement}const yc={class:"VPMenuLink"},_c=["innerHTML"],xc=K({__name:"VPMenuLink",props:{item:{}},setup(a){const{page:n}=ze();return(t,e)=>(i(),c("div",yc,[f(mt,{class:g({active:l(Bt)(l(n).relativePath,a.item.activeMatch||a.item.link,!!a.item.activeMatch)}),href:a.item.link,target:a.item.target,rel:a.item.rel,"no-icon":a.item.noIcon},{default:v(()=>[r("span",{innerHTML:a.item.text},null,8,_c)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),Mn=re(xc,[["__scopeId","data-v-f2eed1d3"]]),wc={class:"VPMenuGroup"},$c={key:0,class:"title"},Sc=K({__name:"VPMenuGroup",props:{text:{},items:{}},setup(a){return(n,t)=>(i(),c("div",wc,[a.text?(i(),c("p",$c,z(a.text),1)):$("",!0),(i(!0),c(N,null,ve(a.items,e=>(i(),c(N,null,["link"in e?(i(),U(Mn,{key:0,item:e},null,8,["item"])):$("",!0)],64))),256))]))}}),Kc=re(Sc,[["__scopeId","data-v-de6820df"]]),Cc={class:"VPMenu"},Tc={key:0,class:"items"},zc=K({__name:"VPMenu",props:{items:{}},setup(a){return(n,t)=>(i(),c("div",Cc,[a.items?(i(),c("div",Tc,[(i(!0),c(N,null,ve(a.items,e=>(i(),c(N,{key:JSON.stringify(e)},["link"in e?(i(),U(Mn,{key:0,item:e},null,8,["item"])):"component"in e?(i(),U(ot(e.component),Oe({key:1,ref_for:!0},e.props),null,16)):(i(),U(Kc,{key:2,text:e.text,items:e.items},null,8,["text","items"]))],64))),128))])):$("",!0),y(n.$slots,"default",{},void 0,!0)]))}}),Pc=re(zc,[["__scopeId","data-v-e22e2280"]]),Lc=["aria-expanded","aria-label"],Bc={key:0,class:"text"},Mc=["innerHTML"],Vc={key:1,class:"vpi-more-horizontal icon"},Oc={class:"menu"},Ic=K({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(a){const n=_(!1),t=_();gc({el:t,onBlur:e});function e(){n.value=!1}return(s,o)=>(i(),c("div",{class:"VPFlyout",ref_key:"el",ref:t,onMouseenter:o[1]||(o[1]=u=>n.value=!0),onMouseleave:o[2]||(o[2]=u=>n.value=!1)},[r("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":n.value,"aria-label":a.label,onClick:o[0]||(o[0]=u=>n.value=!n.value)},[a.button||a.icon?(i(),c("span",Bc,[a.icon?(i(),c("span",{key:0,class:g([a.icon,"option-icon"])},null,2)):$("",!0),a.button?(i(),c("span",{key:1,innerHTML:a.button},null,8,Mc)):$("",!0),o[3]||(o[3]=r("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(i(),c("span",Vc))],8,Lc),r("div",Oc,[f(Pc,{items:a.items},{default:v(()=>[y(s.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),ra=re(Ic,[["__scopeId","data-v-b2dccbb3"]]),Ec=["href","aria-label","innerHTML"],Ac=K({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(a){const n=a,t=_();qe(async()=>{var o;await at();const s=(o=t.value)==null?void 0:o.children[0];s instanceof HTMLElement&&s.className.startsWith("vpi-social-")&&(getComputedStyle(s).maskImage||getComputedStyle(s).webkitMaskImage)==="none"&&s.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${n.icon}.svg')`)});const e=m(()=>typeof n.icon=="object"?n.icon.svg:`<span class="vpi-social-${n.icon}"></span>`);return(s,o)=>(i(),c("a",{ref_key:"el",ref:t,class:"VPSocialLink no-icon",href:a.link,"aria-label":a.ariaLabel??(typeof a.icon=="string"?a.icon:""),target:"_blank",rel:"noopener",innerHTML:e.value},null,8,Ec))}}),jc=re(Ac,[["__scopeId","data-v-cc19a372"]]),Rc={class:"VPSocialLinks"},Fc=K({__name:"VPSocialLinks",props:{links:{}},setup(a){return(n,t)=>(i(),c("div",Rc,[(i(!0),c(N,null,ve(a.links,({link:e,icon:s,ariaLabel:o})=>(i(),U(jc,{key:e,icon:s,link:e,ariaLabel:o},null,8,["icon","link","ariaLabel"]))),128))]))}}),ua=re(Fc,[["__scopeId","data-v-29066ede"]]),Dc={key:0,class:"group translations"},Nc={class:"trans-title"},Hc={key:1,class:"group"},Uc={class:"item appearance"},Wc={class:"label"},qc={class:"appearance-action"},Gc={key:2,class:"group"},Yc={class:"item social-links"},Xc=K({__name:"VPNavBarExtra",setup(a){const{site:n,theme:t}=ze(),{localeLinks:e,currentLang:s}=mn({correspondingLink:!0}),o=m(()=>e.value.length&&s.value.label||n.value.appearance||t.value.socialLinks);return(u,p)=>o.value?(i(),U(ra,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:v(()=>[l(e).length&&l(s).label?(i(),c("div",Dc,[r("p",Nc,z(l(s).label),1),(i(!0),c(N,null,ve(l(e),d=>(i(),U(Mn,{key:d.link,item:d},null,8,["item"]))),128))])):$("",!0),l(n).appearance&&l(n).appearance!=="force-dark"&&l(n).appearance!=="force-auto"?(i(),c("div",Hc,[r("div",Uc,[r("p",Wc,z(l(t).darkModeSwitchLabel||"Appearance"),1),r("div",qc,[f(sa)])])])):$("",!0),l(t).socialLinks?(i(),c("div",Gc,[r("div",Yc,[f(ua,{class:"social-links-list",links:l(t).socialLinks},null,8,["links"])])])):$("",!0)]),_:1})):$("",!0)}}),Zc=re(Xc,[["__scopeId","data-v-35f90f0c"]]),Jc=["aria-expanded"],Qc=K({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(a){return(n,t)=>(i(),c("button",{type:"button",class:g(["VPNavBarHamburger",{active:a.active}]),"aria-label":"mobile navigation","aria-expanded":a.active,"aria-controls":"VPNavScreen",onClick:t[0]||(t[0]=e=>n.$emit("click"))},[...t[1]||(t[1]=[r("span",{class:"container"},[r("span",{class:"top"}),r("span",{class:"middle"}),r("span",{class:"bottom"})],-1)])],10,Jc))}}),ed=re(Qc,[["__scopeId","data-v-ca4be9c3"]]),td=["innerHTML"],nd=K({__name:"VPNavBarMenuLink",props:{item:{}},setup(a){const{page:n}=ze();return(t,e)=>(i(),U(mt,{class:g({VPNavBarMenuLink:!0,active:l(Bt)(l(n).relativePath,a.item.activeMatch||a.item.link,!!a.item.activeMatch)}),href:a.item.link,target:a.item.target,rel:a.item.rel,"no-icon":a.item.noIcon,tabindex:"0"},{default:v(()=>[r("span",{innerHTML:a.item.text},null,8,td)]),_:1},8,["class","href","target","rel","no-icon"]))}}),ad=re(nd,[["__scopeId","data-v-658079ee"]]),ld=K({__name:"VPNavBarMenuGroup",props:{item:{}},setup(a){const n=a,{page:t}=ze(),e=o=>"component"in o?!1:"link"in o?Bt(t.value.relativePath,o.link,!!n.item.activeMatch):o.items.some(e),s=m(()=>e(n.item));return(o,u)=>(i(),U(ra,{class:g({VPNavBarMenuGroup:!0,active:l(Bt)(l(t).relativePath,a.item.activeMatch,!!a.item.activeMatch)||s.value}),button:a.item.text,items:a.item.items},null,8,["class","button","items"]))}}),od={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},sd=K({__name:"VPNavBarMenu",setup(a){const{theme:n}=ze();return(t,e)=>l(n).nav?(i(),c("nav",od,[e[0]||(e[0]=r("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(i(!0),c(N,null,ve(l(n).nav,s=>(i(),c(N,{key:JSON.stringify(s)},["link"in s?(i(),U(ad,{key:0,item:s},null,8,["item"])):"component"in s?(i(),U(ot(s.component),Oe({key:1,ref_for:!0},s.props),null,16)):(i(),U(ld,{key:2,item:s},null,8,["item"]))],64))),128))])):$("",!0)}}),id=re(sd,[["__scopeId","data-v-3ac9d41e"]]);function rd(a){const{localeIndex:n,theme:t}=ze();function e(s){var P,W,X;const o=s.split("."),u=(P=t.value.search)==null?void 0:P.options,p=u&&typeof u=="object",d=p&&((X=(W=u.locales)==null?void 0:W[n.value])==null?void 0:X.translations)||null,k=p&&u.translations||null;let h=d,x=k,C=a;const L=o.pop();for(const B of o){let E=null;const O=C==null?void 0:C[B];O&&(E=C=O);const F=x==null?void 0:x[B];F&&(E=x=F);const V=h==null?void 0:h[B];V&&(E=h=V),O||(C=E),F||(x=E),V||(h=E)}return(h==null?void 0:h[L])??(x==null?void 0:x[L])??(C==null?void 0:C[L])??""}return e}const ud=["aria-label"],cd={class:"DocSearch-Button-Container"},dd={class:"DocSearch-Button-Placeholder"},Ka=K({__name:"VPNavBarSearchButton",setup(a){const t=rd({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(e,s)=>(i(),c("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":l(t)("button.buttonAriaLabel")},[r("span",cd,[s[0]||(s[0]=r("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),r("span",dd,z(l(t)("button.buttonText")),1)]),s[1]||(s[1]=r("span",{class:"DocSearch-Button-Keys"},[r("kbd",{class:"DocSearch-Button-Key"}),r("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,ud))}}),pd={class:"VPNavBarSearch"},vd={id:"local-search"},fd={key:1,id:"docsearch"},md=K({__name:"VPNavBarSearch",setup(a){const n=()=>null,t=()=>null,{theme:e}=ze(),s=_(!1),o=_(!1);qe(()=>{});function u(){s.value||(s.value=!0,setTimeout(p,16))}function p(){const h=new Event("keydown");h.key="k",h.metaKey=!0,window.dispatchEvent(h),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||p()},16)}const d=_(!1),k="";return(h,x)=>{var C;return i(),c("div",pd,[l(k)==="local"?(i(),c(N,{key:0},[d.value?(i(),U(l(n),{key:0,onClose:x[0]||(x[0]=L=>d.value=!1)})):$("",!0),r("div",vd,[f(Ka,{onClick:x[1]||(x[1]=L=>d.value=!0)})])],64)):l(k)==="algolia"?(i(),c(N,{key:1},[s.value?(i(),U(l(t),{key:0,algolia:((C=l(e).search)==null?void 0:C.options)??l(e).algolia,onVnodeBeforeMount:x[2]||(x[2]=L=>o.value=!0)},null,8,["algolia"])):$("",!0),o.value?$("",!0):(i(),c("div",fd,[f(Ka,{onClick:u})]))],64)):$("",!0)])}}}),kd=K({__name:"VPNavBarSocialLinks",setup(a){const{theme:n}=ze();return(t,e)=>l(n).socialLinks?(i(),U(ua,{key:0,class:"VPNavBarSocialLinks",links:l(n).socialLinks},null,8,["links"])):$("",!0)}}),gd=re(kd,[["__scopeId","data-v-94f00bb2"]]),bd=["href","rel","target"],hd=["innerHTML"],yd={key:2},_d=K({__name:"VPNavBarTitle",setup(a){const{site:n,theme:t}=ze(),{hasSidebar:e}=yt(),{currentLang:s}=mn(),o=m(()=>{var d;return typeof t.value.logoLink=="string"?t.value.logoLink:(d=t.value.logoLink)==null?void 0:d.link}),u=m(()=>{var d;return typeof t.value.logoLink=="string"||(d=t.value.logoLink)==null?void 0:d.rel}),p=m(()=>{var d;return typeof t.value.logoLink=="string"||(d=t.value.logoLink)==null?void 0:d.target});return(d,k)=>(i(),c("div",{class:g(["VPNavBarTitle",{"has-sidebar":l(e)}])},[r("a",{class:"title",href:o.value??l(la)(l(s).link),rel:u.value,target:p.value},[y(d.$slots,"nav-bar-title-before",{},void 0,!0),l(t).logo?(i(),U($n,{key:0,class:"logo",image:l(t).logo},null,8,["image"])):$("",!0),l(t).siteTitle?(i(),c("span",{key:1,innerHTML:l(t).siteTitle},null,8,hd)):l(t).siteTitle===void 0?(i(),c("span",yd,z(l(n).title),1)):$("",!0),y(d.$slots,"nav-bar-title-after",{},void 0,!0)],8,bd)],2))}}),xd=re(_d,[["__scopeId","data-v-ac783efc"]]),wd={class:"items"},$d={class:"title"},Sd=K({__name:"VPNavBarTranslations",setup(a){const{theme:n}=ze(),{localeLinks:t,currentLang:e}=mn({correspondingLink:!0});return(s,o)=>l(t).length&&l(e).label?(i(),U(ra,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:l(n).langMenuLabel||"Change language"},{default:v(()=>[r("div",wd,[r("p",$d,z(l(e).label),1),(i(!0),c(N,null,ve(l(t),u=>(i(),U(Mn,{key:u.link,item:u},null,8,["item"]))),128))])]),_:1},8,["label"])):$("",!0)}}),Kd=re(Sd,[["__scopeId","data-v-0655c02f"]]),Cd={class:"wrapper"},Td={class:"container"},zd={class:"title"},Pd={class:"content"},Ld={class:"content-body"},Bd=K({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(a){const n=a,{y:t}=Pa(),{hasSidebar:e}=yt(),{frontmatter:s}=ze(),o=_({});return Xn(()=>{o.value={"has-sidebar":e.value,home:s.value.layout==="home",top:t.value===0,"screen-open":n.isScreenOpen}}),(u,p)=>(i(),c("div",{class:g(["VPNavBar",o.value])},[r("div",Cd,[r("div",Td,[r("div",zd,[f(xd,null,{"nav-bar-title-before":v(()=>[y(u.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":v(()=>[y(u.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),r("div",Pd,[r("div",Ld,[y(u.$slots,"nav-bar-content-before",{},void 0,!0),f(md,{class:"search"}),f(id,{class:"menu"}),f(Kd,{class:"translations"}),f(kc,{class:"appearance"}),f(gd,{class:"social-links"}),f(Zc,{class:"extra"}),y(u.$slots,"nav-bar-content-after",{},void 0,!0),f(ed,{class:"hamburger",active:a.isScreenOpen,onClick:p[0]||(p[0]=d=>u.$emit("toggle-screen"))},null,8,["active"])])])])]),p[1]||(p[1]=r("div",{class:"divider"},[r("div",{class:"divider-line"})],-1))],2))}}),Md=re(Bd,[["__scopeId","data-v-3db4fbf3"]]),Vd={key:0,class:"VPNavScreenAppearance"},Od={class:"text"},Id=K({__name:"VPNavScreenAppearance",setup(a){const{site:n,theme:t}=ze();return(e,s)=>l(n).appearance&&l(n).appearance!=="force-dark"&&l(n).appearance!=="force-auto"?(i(),c("div",Vd,[r("p",Od,z(l(t).darkModeSwitchLabel||"Appearance"),1),f(sa)])):$("",!0)}}),Ed=re(Id,[["__scopeId","data-v-61510644"]]),Ad=["innerHTML"],jd=K({__name:"VPNavScreenMenuLink",props:{item:{}},setup(a){const n=Je("close-screen");return(t,e)=>(i(),U(mt,{class:"VPNavScreenMenuLink",href:a.item.link,target:a.item.target,rel:a.item.rel,"no-icon":a.item.noIcon,onClick:l(n)},{default:v(()=>[r("span",{innerHTML:a.item.text},null,8,Ad)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Rd=re(jd,[["__scopeId","data-v-af5a0f87"]]),Fd=["innerHTML"],Dd=K({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(a){const n=Je("close-screen");return(t,e)=>(i(),U(mt,{class:"VPNavScreenMenuGroupLink",href:a.item.link,target:a.item.target,rel:a.item.rel,"no-icon":a.item.noIcon,onClick:l(n)},{default:v(()=>[r("span",{innerHTML:a.item.text},null,8,Fd)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Za=re(Dd,[["__scopeId","data-v-77c8d903"]]),Nd={class:"VPNavScreenMenuGroupSection"},Hd={key:0,class:"title"},Ud=K({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(a){return(n,t)=>(i(),c("div",Nd,[a.text?(i(),c("p",Hd,z(a.text),1)):$("",!0),(i(!0),c(N,null,ve(a.items,e=>(i(),U(Za,{key:e.text,item:e},null,8,["item"]))),128))]))}}),Wd=re(Ud,[["__scopeId","data-v-d438db06"]]),qd=["aria-controls","aria-expanded"],Gd=["innerHTML"],Yd=["id"],Xd={key:0,class:"item"},Zd={key:1,class:"item"},Jd={key:2,class:"group"},Qd=K({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(a){const n=a,t=_(!1),e=m(()=>`NavScreenGroup-${n.text.replace(" ","-").toLowerCase()}`);function s(){t.value=!t.value}return(o,u)=>(i(),c("div",{class:g(["VPNavScreenMenuGroup",{open:t.value}])},[r("button",{class:"button","aria-controls":e.value,"aria-expanded":t.value,onClick:s},[r("span",{class:"button-text",innerHTML:a.text},null,8,Gd),u[0]||(u[0]=r("span",{class:"vpi-plus button-icon"},null,-1))],8,qd),r("div",{id:e.value,class:"items"},[(i(!0),c(N,null,ve(a.items,p=>(i(),c(N,{key:JSON.stringify(p)},["link"in p?(i(),c("div",Xd,[f(Za,{item:p},null,8,["item"])])):"component"in p?(i(),c("div",Zd,[(i(),U(ot(p.component),Oe({ref_for:!0},p.props,{"screen-menu":""}),null,16))])):(i(),c("div",Jd,[f(Wd,{text:p.text,items:p.items},null,8,["text","items"])]))],64))),128))],8,Yd)],2))}}),ep=re(Qd,[["__scopeId","data-v-7b3a34e2"]]),tp={key:0,class:"VPNavScreenMenu"},np=K({__name:"VPNavScreenMenu",setup(a){const{theme:n}=ze();return(t,e)=>l(n).nav?(i(),c("nav",tp,[(i(!0),c(N,null,ve(l(n).nav,s=>(i(),c(N,{key:JSON.stringify(s)},["link"in s?(i(),U(Rd,{key:0,item:s},null,8,["item"])):"component"in s?(i(),U(ot(s.component),Oe({key:1,ref_for:!0},s.props,{"screen-menu":""}),null,16)):(i(),U(ep,{key:2,text:s.text||"",items:s.items},null,8,["text","items"]))],64))),128))])):$("",!0)}}),ap=K({__name:"VPNavScreenSocialLinks",setup(a){const{theme:n}=ze();return(t,e)=>l(n).socialLinks?(i(),U(ua,{key:0,class:"VPNavScreenSocialLinks",links:l(n).socialLinks},null,8,["links"])):$("",!0)}}),lp={class:"list"},op=K({__name:"VPNavScreenTranslations",setup(a){const{localeLinks:n,currentLang:t}=mn({correspondingLink:!0}),e=_(!1);function s(){e.value=!e.value}return(o,u)=>l(n).length&&l(t).label?(i(),c("div",{key:0,class:g(["VPNavScreenTranslations",{open:e.value}])},[r("button",{class:"title",onClick:s},[u[0]||(u[0]=r("span",{class:"vpi-languages icon lang"},null,-1)),S(" "+z(l(t).label)+" ",1),u[1]||(u[1]=r("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),r("ul",lp,[(i(!0),c(N,null,ve(l(n),p=>(i(),c("li",{key:p.link,class:"item"},[f(mt,{class:"link",href:p.link},{default:v(()=>[S(z(p.text),1)]),_:2},1032,["href"])]))),128))])],2)):$("",!0)}}),sp=re(op,[["__scopeId","data-v-4a029a14"]]),ip={class:"container"},rp=K({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(a){const n=_(null),t=La(Kn?document.body:null);return(e,s)=>(i(),U(on,{name:"fade",onEnter:s[0]||(s[0]=o=>t.value=!0),onAfterLeave:s[1]||(s[1]=o=>t.value=!1)},{default:v(()=>[a.open?(i(),c("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:n,id:"VPNavScreen"},[r("div",ip,[y(e.$slots,"nav-screen-content-before",{},void 0,!0),f(np,{class:"menu"}),f(sp,{class:"translations"}),f(Ed,{class:"appearance"}),f(ap,{class:"social-links"}),y(e.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):$("",!0)]),_:3}))}}),up=re(rp,[["__scopeId","data-v-364fb0dc"]]),cp={key:0,class:"VPNav"},dp=K({__name:"VPNav",setup(a){const{isScreenOpen:n,closeScreen:t,toggleScreen:e}=sc(),{frontmatter:s}=ze(),o=m(()=>s.value.navbar!==!1);return ht("close-screen",t),rn(()=>{Kn&&document.documentElement.classList.toggle("hide-nav",!o.value)}),(u,p)=>o.value?(i(),c("header",cp,[f(Md,{"is-screen-open":l(n),onToggleScreen:l(e)},{"nav-bar-title-before":v(()=>[y(u.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":v(()=>[y(u.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":v(()=>[y(u.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":v(()=>[y(u.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),f(up,{open:l(n)},{"nav-screen-content-before":v(()=>[y(u.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":v(()=>[y(u.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):$("",!0)}}),pp=re(dp,[["__scopeId","data-v-cf2cb13b"]]),vp=["role","tabindex"],fp={key:1,class:"items"},mp=K({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(a){const n=a,{collapsed:t,collapsible:e,isLink:s,isActiveLink:o,hasActiveLink:u,hasChildren:p,toggle:d}=cr(m(()=>n.item)),k=m(()=>p.value?"section":"div"),h=m(()=>s.value?"a":"div"),x=m(()=>p.value?n.depth+2===7?"p":`h${n.depth+2}`:"p"),C=m(()=>s.value?void 0:"button"),L=m(()=>[[`level-${n.depth}`],{collapsible:e.value},{collapsed:t.value},{"is-link":s.value},{"is-active":o.value},{"has-active":u.value}]);function P(X){"key"in X&&X.key!=="Enter"||!n.item.link&&d()}function W(){n.item.link&&d()}return(X,B)=>{const E=Vt("VPSidebarItem",!0);return i(),U(ot(k.value),{class:g(["VPSidebarItem",L.value])},{default:v(()=>[a.item.text?(i(),c("div",Oe({key:0,class:"item",role:C.value},vl(a.item.items?{click:P,keydown:P}:{},!0),{tabindex:a.item.items&&0}),[B[1]||(B[1]=r("div",{class:"indicator"},null,-1)),a.item.link?(i(),U(mt,{key:0,tag:h.value,class:"link",href:a.item.link,rel:a.item.rel,target:a.item.target},{default:v(()=>[(i(),U(ot(x.value),{class:"text",innerHTML:a.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(i(),U(ot(x.value),{key:1,class:"text",innerHTML:a.item.text},null,8,["innerHTML"])),a.item.collapsed!=null&&a.item.items&&a.item.items.length?(i(),c("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:W,onKeydown:Qt(W,["enter"]),tabindex:"0"},[...B[0]||(B[0]=[r("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):$("",!0)],16,vp)):$("",!0),a.item.items&&a.item.items.length?(i(),c("div",fp,[a.depth<5?(i(!0),c(N,{key:0},ve(a.item.items,O=>(i(),U(E,{key:O.text,item:O,depth:a.depth+1},null,8,["item","depth"]))),128)):$("",!0)])):$("",!0)]),_:1},8,["class"])}}}),kp=re(mp,[["__scopeId","data-v-22aceb9f"]]),gp=K({__name:"VPSidebarGroup",props:{items:{}},setup(a){const n=_(!0);let t=null;return qe(()=>{t=setTimeout(()=>{t=null,n.value=!1},300)}),et(()=>{t!=null&&(clearTimeout(t),t=null)}),(e,s)=>(i(!0),c(N,null,ve(a.items,o=>(i(),c("div",{key:o.text,class:g(["group",{"no-transition":n.value}])},[f(kp,{item:o,depth:0},null,8,["item"])],2))),128))}}),bp=re(gp,[["__scopeId","data-v-e1bb6cc3"]]),hp={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},yp=K({__name:"VPSidebar",props:{open:{type:Boolean}},setup(a){const{sidebarGroups:n,hasSidebar:t}=yt(),e=a,s=_(null),o=La(Kn?document.body:null);Be([e,s],()=>{var p;e.open?(o.value=!0,(p=s.value)==null||p.focus()):o.value=!1},{immediate:!0,flush:"post"});const u=_(0);return Be(n,()=>{u.value+=1},{deep:!0}),(p,d)=>l(t)?(i(),c("aside",{key:0,class:g(["VPSidebar",{open:a.open}]),ref_key:"navEl",ref:s,onClick:d[0]||(d[0]=Qe(()=>{},["stop"]))},[d[2]||(d[2]=r("div",{class:"curtain"},null,-1)),r("nav",hp,[d[1]||(d[1]=r("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),y(p.$slots,"sidebar-nav-before",{},void 0,!0),(i(),U(bp,{items:l(n),key:u.value},null,8,["items"])),y(p.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):$("",!0)}}),_p=re(yp,[["__scopeId","data-v-5b9571c6"]]),xp=K({__name:"VPSkipLink",setup(a){const{theme:n}=ze(),t=Dt(),e=_();Be(()=>t.path,()=>e.value.focus());function s({target:o}){const u=document.getElementById(decodeURIComponent(o.hash).slice(1));if(u){const p=()=>{u.removeAttribute("tabindex"),u.removeEventListener("blur",p)};u.setAttribute("tabindex","-1"),u.addEventListener("blur",p),u.focus(),window.scrollTo(0,0)}}return(o,u)=>(i(),c(N,null,[r("span",{ref_key:"backToTop",ref:e,tabindex:"-1"},null,512),r("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:s},z(l(n).skipToContentLabel||"Skip to content"),1)],64))}}),wp=re(xp,[["__scopeId","data-v-40c9da43"]]),$p=K({__name:"Layout",setup(a){const{isOpen:n,open:t,close:e}=yt(),s=Dt();Be(()=>s.path,e),ur(n,e);const{frontmatter:o}=ze(),u=bt(),p=m(()=>!!u["home-hero-image"]);return ht("hero-image-slot-exists",p),(d,k)=>{const h=Vt("Content");return l(o).layout!==!1?(i(),c("div",{key:0,class:g(["Layout",l(o).pageClass])},[y(d.$slots,"layout-top",{},void 0,!0),f(wp),f(Xi,{class:"backdrop",show:l(n),onClick:l(e)},null,8,["show","onClick"]),f(pp,null,{"nav-bar-title-before":v(()=>[y(d.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":v(()=>[y(d.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":v(()=>[y(d.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":v(()=>[y(d.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":v(()=>[y(d.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":v(()=>[y(d.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),f(oc,{open:l(n),onOpenMenu:l(t)},null,8,["open","onOpenMenu"]),f(_p,{open:l(n)},{"sidebar-nav-before":v(()=>[y(d.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":v(()=>[y(d.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),f(Nu,null,{"page-top":v(()=>[y(d.$slots,"page-top",{},void 0,!0)]),"page-bottom":v(()=>[y(d.$slots,"page-bottom",{},void 0,!0)]),"not-found":v(()=>[y(d.$slots,"not-found",{},void 0,!0)]),"home-hero-before":v(()=>[y(d.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":v(()=>[y(d.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":v(()=>[y(d.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":v(()=>[y(d.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":v(()=>[y(d.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":v(()=>[y(d.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":v(()=>[y(d.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":v(()=>[y(d.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":v(()=>[y(d.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":v(()=>[y(d.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":v(()=>[y(d.$slots,"doc-before",{},void 0,!0)]),"doc-after":v(()=>[y(d.$slots,"doc-after",{},void 0,!0)]),"doc-top":v(()=>[y(d.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":v(()=>[y(d.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":v(()=>[y(d.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":v(()=>[y(d.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":v(()=>[y(d.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":v(()=>[y(d.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":v(()=>[y(d.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":v(()=>[y(d.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),f(Gu),y(d.$slots,"layout-bottom",{},void 0,!0)],2)):(i(),U(h,{key:1}))}}}),Sp=re($p,[["__scopeId","data-v-f06bde9b"]]),Ja={Layout:Sp,enhanceApp:({app:a})=>{a.component("Badge",qi)}},Kp=480,Cp="cubic-bezier(0.22, 0.61, 0.36, 1)";function Tp(){return typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function zp(){if(typeof document>"u")return;const n=document.startViewTransition;return typeof n=="function"?n.bind(document):void 0}function Qa(a,n){if(a&&(a.clientX||a.clientY))return{x:a.clientX,y:a.clientY};if(n){const t=n.getBoundingClientRect();return{x:t.left+t.width/2,y:t.top+t.height/2}}return{x:typeof window>"u"?0:window.innerWidth/2,y:typeof window>"u"?0:window.innerHeight/2}}function el(a,n){const t=zp();if(!t||Tp()){a();return}t(a).ready.then(()=>{const{innerWidth:s,innerHeight:o}=window,u=Math.hypot(Math.max(n.x,s-n.x),Math.max(n.y,o-n.y));document.documentElement.animate({clipPath:[`circle(0px at ${n.x}px ${n.y}px)`,`circle(${u}px at ${n.x}px ${n.y}px)`]},{duration:Kp,easing:Cp,pseudoElement:"::view-transition-new(root)"})}).catch(()=>{})}const Pp={key:0,class:"kk-theme-switch",role:"group","aria-label":"主题切换"},Lp=["data-theme","title","aria-label","aria-pressed","onClick"],Bp=K({__name:"ThemeSwitcher",setup(a){const n=[{name:"light",label:"Light 亮色"},{name:"dark",label:"Dark 暗色"},{name:"soft",label:"Soft 柔光"},{name:"cyber",label:"Cyber 赛博"}],{theme:t}=Bn(),{isDark:e}=Gn(),s=_(!1);qe(()=>{s.value=!0});function o(u,p){var d;el(()=>{gt(u),e.value=aa(u)},Qa(p)),window.dispatchEvent(new CustomEvent("kk-toast",{detail:`已切换到 ${((d=n.find(k=>k.name===u))==null?void 0:d.label)??u}`}))}return(u,p)=>s.value?(i(),c("div",Pp,[(i(),c(N,null,ve(n,d=>r("button",{key:d.name,class:g(["kk-theme-switch__dot",{"is-active":l(t)===d.name}]),"data-theme":d.name,title:d.label,"aria-label":d.label,"aria-pressed":l(t)===d.name,type:"button",onClick:k=>o(d.name,k)},null,10,Lp)),64))])):$("",!0)}}),Mp=["aria-expanded","aria-label"],Vp={class:"kk-locale-switch__label"},Op={class:"kk-locale-switch__menu",role:"listbox"},Ip=["aria-selected","onClick"],Ep={key:0,width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.4","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},Ap=K({__name:"LocaleSwitcher",setup(a){const{locale:n,locales:t}=st(),e=_(!1),s=_(!1),o=_(null);qe(()=>{e.value=!0,document.addEventListener("click",u,!0)});function u(h){const x=h.target;o.value&&x&&!o.value.contains(x)&&(s.value=!1)}const p=m(()=>Jt(n.value)),d=m(()=>t.value);function k(h){tn(h),s.value=!1,window.dispatchEvent(new CustomEvent("kk-toast",{detail:`语言已切换为 ${Jt(h)}`}))}return et(()=>{document.removeEventListener("click",u,!0)}),(h,x)=>e.value?(i(),c("div",{key:0,ref_key:"rootRef",ref:o,class:"kk-locale-switch"},[r("button",{class:"kk-locale-switch__trigger",type:"button","aria-expanded":s.value,"aria-haspopup":"listbox","aria-label":`当前语言 ${p.value}`,onClick:x[0]||(x[0]=C=>s.value=!s.value)},[x[1]||(x[1]=r("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[r("circle",{cx:"12",cy:"12",r:"9"}),r("path",{d:"M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"})],-1)),r("span",Vp,z(p.value),1),x[2]||(x[2]=r("svg",{class:"kk-locale-switch__arrow",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[r("path",{d:"m6 9 6 6 6-6"})],-1))],8,Mp),kt(r("ul",Op,[(i(!0),c(N,null,ve(d.value,C=>(i(),c("li",{key:String(C)},[r("button",{class:g(["kk-locale-switch__item",{"is-active":C===l(n)}]),type:"button",role:"option","aria-selected":C===l(n),onClick:L=>k(String(C))},[r("span",null,z(l(Jt)(String(C))),1),C===l(n)?(i(),c("svg",Ep,[...x[3]||(x[3]=[r("path",{d:"m5 13 4 4L19 7"},null,-1)])])):$("",!0)],10,Ip)]))),128))],512),[[Mt,s.value]])],512)):$("",!0)}}),jp=["href"],Rp=K({__name:"DocsNav",props:{mobile:{type:Boolean,default:!1}},setup(a){const{t:n}=st(),t=Dt(),e=m(()=>[{key:"guide",match:"/guide",link:"/guide/introduction"},{key:"components",match:"/components",link:"/components/"},{key:"theme",match:"/theme",link:"/theme/"}].map(o=>({...o,text:n(`docs.nav.${o.key}`)})));function s(o){const u=t.path;return u===o||u.startsWith(`${o}/`)}return(o,u)=>(i(),c("nav",{class:g(["kk-docs-nav",{"is-mobile":a.mobile}])},[(i(!0),c(N,null,ve(e.value,p=>(i(),c("a",{key:p.key,href:l(Pt)(p.link),class:g(["kk-docs-nav__link",{"is-active":s(p.match)}])},z(p.text),11,jp))),128))],2))}}),Ca=re(Rp,[["__scopeId","data-v-fac44694"]]),Fp="https://github.com/JKK-jc/kk-ui",Dp=K({__name:"GitHubLink",setup(a){return(n,t)=>(i(),c("a",{class:"kk-github-link",href:Fp,target:"_blank",rel:"noopener noreferrer",title:"KK UI 源码仓库","aria-label":"KK UI GitHub 仓库"},[...t[0]||(t[0]=[r("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[r("path",{d:"M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 2.5-.34c.85 0 1.71.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"})],-1),r("span",{class:"kk-github-link__text"},"GitHub",-1)])]))}}),Np=K({__name:"KkToast",setup(a){const n=_(!1),t=_("");let e;function s(o){const u=o.detail;t.value=u||"",n.value=!0,clearTimeout(e),e=setTimeout(()=>{n.value=!1},1800)}return qe(()=>{window.addEventListener("kk-toast",s)}),et(()=>{window.removeEventListener("kk-toast",s),clearTimeout(e)}),(o,u)=>(i(),c("div",{class:g(["kk-toast",{"is-show":n.value}]),role:"status","aria-live":"polite"},[u[0]||(u[0]=r("span",{class:"kk-toast__dot"},null,-1)),r("span",null,z(t.value),1)],2))}}),Hp={key:0,class:"kk-aside-meta"},Up={class:"kk-aside-meta__list"},Wp=["onClick"],qp=K({__name:"KkDocMeta",setup(a){const n=Dt(),{theme:t}=Bn(),e=m(()=>n.path.startsWith("/components/")),s=[{name:"light",label:"Light"},{name:"dark",label:"Dark"},{name:"soft",label:"Soft"},{name:"cyber",label:"Cyber"}];function o(u){gt(u),window.dispatchEvent(new CustomEvent("kk-toast",{detail:`已切换到 ${u} 主题`}))}return(u,p)=>e.value?(i(),c("div",Hp,[p[0]||(p[0]=r("div",{class:"kk-aside-meta__title"},"预览主题",-1)),r("div",Up,[(i(),c(N,null,ve(s,d=>r("button",{key:d.name,class:g(["kk-aside-meta__btn",{"is-active":l(t)===d.name}]),type:"button",onClick:k=>o(d.name)},z(d.label),11,Wp)),64))])])):$("",!0)}}),Gp=".VPSwitchAppearance",Yp=K({__name:"Layout",setup(a){const{Layout:n}=Ja,{isDark:t}=Gn(),{theme:e}=Bn();function s(u){const p=e.value;gt(u?p==="cyber"?"cyber":"dark":p==="soft"?"soft":"light")}Be(t,u=>{s(u)});function o(u){const p=u.target,d=p==null?void 0:p.closest(Gp);if(!d)return;u.stopPropagation(),u.preventDefault();const k=!t.value;el(()=>{t.value=k,s(k)},Qa(u,d))}return qe(()=>{ei(),Zl(),t.value=aa(e.value),document.addEventListener("click",o,!0)}),et(()=>{document.removeEventListener("click",o,!0)}),(u,p)=>(i(),c(N,null,[f(l(n),null,{"nav-bar-content-before":v(()=>[f(Ca)]),"nav-bar-content-after":v(()=>[f(Bp),f(Ap),f(Dp)]),"nav-screen-content-before":v(()=>[f(Ca,{mobile:""})]),"aside-outline-after":v(()=>[f(qp)]),_:1}),f(Np)],64))}}),Xp=K({__name:"basic",setup(a){return(n,t)=>(i(),c(N,null,[f(l(ke),{type:"primary"},{default:v(()=>[...t[0]||(t[0]=[S(" 主要按钮 ",-1)])]),_:1}),f(l(ke),null,{default:v(()=>[...t[1]||(t[1]=[S("默认按钮",-1)])]),_:1}),f(l(ke),{type:"text"},{default:v(()=>[...t[2]||(t[2]=[S(" 文字按钮 ",-1)])]),_:1})],64))}}),Zp=Object.freeze(Object.defineProperty({__proto__:null,default:Xp},Symbol.toStringTag,{value:"Module"})),Jp={style:{width:"100%"}},Qp=K({__name:"block",setup(a){return(n,t)=>(i(),c("div",Jp,[f(l(ke),{type:"primary",block:""},{default:v(()=>[...t[0]||(t[0]=[S(" 块级按钮 ",-1)])]),_:1})]))}}),ev=Object.freeze(Object.defineProperty({__proto__:null,default:Qp},Symbol.toStringTag,{value:"Module"})),tv=K({__name:"icon",setup(a){return(n,t)=>(i(),c(N,null,[f(l(ke),{type:"primary"},{icon:v(()=>[f(l(Ge),{name:"lucide:search",size:"16"})]),default:v(()=>[t[0]||(t[0]=S(" 搜索 ",-1))]),_:1}),f(l(ke),{type:"default"},{icon:v(()=>[f(l(Ge),{name:"lucide:download",size:"16"})]),default:v(()=>[t[1]||(t[1]=S(" 下载 ",-1))]),_:1})],64))}}),nv=Object.freeze(Object.defineProperty({__proto__:null,default:tv},Symbol.toStringTag,{value:"Module"})),av=K({__name:"size",setup(a){return(n,t)=>(i(),c(N,null,[f(l(ke),{type:"primary",size:"small"},{default:v(()=>[...t[0]||(t[0]=[S(" Small ",-1)])]),_:1}),f(l(ke),{type:"primary"},{default:v(()=>[...t[1]||(t[1]=[S(" Medium ",-1)])]),_:1}),f(l(ke),{type:"primary",size:"large"},{default:v(()=>[...t[2]||(t[2]=[S(" Large ",-1)])]),_:1})],64))}}),lv=Object.freeze(Object.defineProperty({__proto__:null,default:av},Symbol.toStringTag,{value:"Module"})),ov=K({__name:"status",setup(a){return(n,t)=>(i(),c(N,null,[f(l(ke),{type:"primary",loading:""},{default:v(()=>[...t[0]||(t[0]=[S(" 加载中 ",-1)])]),_:1}),f(l(ke),{type:"primary",disabled:""},{default:v(()=>[...t[1]||(t[1]=[S(" 禁用 ",-1)])]),_:1}),f(l(ke),{type:"default",disabled:""},{default:v(()=>[...t[2]||(t[2]=[S(" 默认禁用 ",-1)])]),_:1})],64))}}),sv=Object.freeze(Object.defineProperty({__proto__:null,default:ov},Symbol.toStringTag,{value:"Module"})),iv=K({__name:"type",setup(a){return(n,t)=>(i(),c(N,null,[f(l(ke),{type:"primary"},{default:v(()=>[...t[0]||(t[0]=[S(" Primary ",-1)])]),_:1}),f(l(ke),{type:"success"},{default:v(()=>[...t[1]||(t[1]=[S(" Success ",-1)])]),_:1}),f(l(ke),{type:"warning"},{default:v(()=>[...t[2]||(t[2]=[S(" Warning ",-1)])]),_:1}),f(l(ke),{type:"danger"},{default:v(()=>[...t[3]||(t[3]=[S(" Danger ",-1)])]),_:1}),f(l(ke),null,{default:v(()=>[...t[4]||(t[4]=[S("Default",-1)])]),_:1}),f(l(ke),{type:"text"},{default:v(()=>[...t[5]||(t[5]=[S(" Text ",-1)])]),_:1})],64))}}),rv=Object.freeze(Object.defineProperty({__proto__:null,default:iv},Symbol.toStringTag,{value:"Module"})),uv={style:{display:"flex",gap:"16px","flex-wrap":"wrap",width:"100%"}},cv=K({__name:"basic",setup(a){return(n,t)=>(i(),c("div",uv,[f(l(zt),{title:"基础卡片",style:{flex:"1","min-width":"240px"}},{default:v(()=>[...t[0]||(t[0]=[S(" 卡片正文内容 ",-1)])]),_:1}),f(l(zt),{title:"带操作",subtitle:"最近 7 天",style:{flex:"1","min-width":"240px"}},{extra:v(()=>[f(l(ke),{type:"text"},{default:v(()=>[...t[1]||(t[1]=[S(" 更多 ",-1)])]),_:1})]),footer:v(()=>[...t[2]||(t[2]=[S(" 更新时间：刚刚 ",-1)])]),default:v(()=>[t[3]||(t[3]=S(" 卡片正文内容 ",-1))]),_:1})]))}}),dv=Object.freeze(Object.defineProperty({__proto__:null,default:cv},Symbol.toStringTag,{value:"Module"})),pv={style:{display:"flex",gap:"16px","flex-wrap":"wrap",width:"100%"}},vv=K({__name:"variant",setup(a){return(n,t)=>(i(),c("div",pv,[f(l(zt),{title:"always",shadow:"always",style:{flex:"1","min-width":"200px"}},{default:v(()=>[...t[0]||(t[0]=[S(" 始终显示阴影 ",-1)])]),_:1}),f(l(zt),{title:"hover",shadow:"hover",hoverable:"",style:{flex:"1","min-width":"200px"}},{default:v(()=>[...t[1]||(t[1]=[S(" 悬停显示阴影 ",-1)])]),_:1}),f(l(zt),{title:"never",shadow:"never",style:{flex:"1","min-width":"200px"}},{default:v(()=>[...t[2]||(t[2]=[S(" 不显示阴影 ",-1)])]),_:1}),f(l(zt),{title:"loading",loading:"",style:{flex:"1","min-width":"200px"}},{default:v(()=>[...t[3]||(t[3]=[S(" 加载中 ",-1)])]),_:1})]))}}),fv=Object.freeze(Object.defineProperty({__proto__:null,default:vv},Symbol.toStringTag,{value:"Module"})),mv={class:"cascader-result"},kv=K({__name:"basic",setup(a){const n=[{value:"zhejiang",label:"浙江省",children:[{value:"hangzhou",label:"杭州市",children:[{value:"xihu",label:"西湖区"},{value:"binjiang",label:"滨江区"}]},{value:"ningbo",label:"宁波市"}]},{value:"jiangsu",label:"江苏省",children:[{value:"nanjing",label:"南京市",children:[{value:"jiangning",label:"江宁区"}]}]},{value:"guangdong",label:"广东省",disabled:!0}],t=_([]);return(e,s)=>(i(),U(l(ut),{direction:"vertical",size:"medium",fill:"",style:{width:"100%"}},{default:v(()=>[f(l(Pn),{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=o=>t.value=o),options:n,"check-strictly":!1,clearable:"",placeholder:"请选择省 / 市 / 区",style:{width:"320px"}},null,8,["modelValue"]),r("div",mv,[s[1]||(s[1]=S(" emitPath 默认开启，拿到的是完整路径：",-1)),r("code",null,z(JSON.stringify(t.value)),1)])]),_:1}))}}),gv=Object.freeze(Object.defineProperty({__proto__:null,default:kv},Symbol.toStringTag,{value:"Module"})),bv={key:0,class:"cascader-result"},hv=K({__name:"lazy",setup(a){const n={zhejiang:[{value:"hangzhou",label:"杭州市"},{value:"ningbo",label:"宁波市"}],hangzhou:[{value:"xihu",label:"西湖区"},{value:"binjiang",label:"滨江区"}],jiangsu:[{value:"nanjing",label:"南京市"}]},t=[{value:"zhejiang",label:"浙江省"},{value:"jiangsu",label:"江苏省"}],e=_([]),s=_([]);function o(u,p){return s.value=[...s.value,`加载 ${p.join(" / ")} 的子级`],new Promise(d=>{setTimeout(()=>d(n[String(u.value)]??[]),600)})}return(u,p)=>(i(),U(l(ut),{direction:"vertical",size:"medium",fill:"",style:{width:"100%"}},{default:v(()=>[f(l(Pn),{modelValue:e.value,"onUpdate:modelValue":p[0]||(p[0]=d=>e.value=d),options:t,"load-data":o,"check-strictly":!1,clearable:"",placeholder:"点开才会请求子级",style:{width:"320px"},onLoad:p[1]||(p[1]=({path:d})=>s.value=[...s.value,`${d.join(" / ")} 加载完成`])},null,8,["modelValue"]),s.value.length?(i(),c("div",bv,[(i(!0),c(N,null,ve(s.value,(d,k)=>(i(),c("div",{key:k},z(d),1))),128))])):$("",!0)]),_:1}))}}),yv=Object.freeze(Object.defineProperty({__proto__:null,default:hv},Symbol.toStringTag,{value:"Module"})),_v={class:"cascader-result"},xv=K({__name:"multiple",setup(a){const n=[{value:"frontend",label:"前端",children:[{value:"vue",label:"Vue"},{value:"react",label:"React"}]},{value:"backend",label:"后端",children:[{value:"node",label:"Node.js"},{value:"go",label:"Go"}]},{value:"design",label:"设计",children:[{value:"ui",label:"界面设计"}]}],t=_([["frontend","vue"],["design","ui"]]),e=_(!0),s=m(()=>" / ");return(o,u)=>(i(),U(l(ut),{direction:"vertical",size:"medium",fill:"",style:{width:"100%"}},{default:v(()=>[f(l(Pn),{modelValue:t.value,"onUpdate:modelValue":u[0]||(u[0]=p=>t.value=p),options:n,"show-all-levels":e.value,separator:s.value,multiple:"",clearable:"",placeholder:"请选择技术栈（可多选）",style:{width:"420px"}},null,8,["modelValue","show-all-levels","separator"]),r("div",_v," 已选 "+z(t.value.length)+" 项，勾选后浮层保持展开，标签可单独删除。 ",1)]),_:1}))}}),wv=Object.freeze(Object.defineProperty({__proto__:null,default:xv},Symbol.toStringTag,{value:"Module"})),$v={class:"bar"},Sv={class:"bar__group"},Kv=["onClick"],Cv={class:"bar"},Tv={class:"bar__group"},zv=["onClick"],Pv={class:"bar__check"},Lv=K({__name:"basic",setup(a){const n=[{key:"small",label:"Small",hint:"640"},{key:"medium",label:"Medium",hint:"960"},{key:"large",label:"Large",hint:"1200"},{key:"full",label:"Full",hint:"100%"}],t=["none","small","medium","large"],e=_("medium"),s=_("large"),o=_(!0);return(u,p)=>(i(),c(N,null,[r("div",$v,[p[1]||(p[1]=r("span",{class:"bar__label"},"宽度档位",-1)),r("div",Sv,[(i(),c(N,null,ve(n,d=>r("button",{key:d.key,type:"button",class:g(["bar__btn",{"is-active":e.value===d.key}]),onClick:k=>e.value=d.key},[S(z(d.label)+" ",1),r("em",null,z(d.hint),1)],10,Kv)),64))])]),r("div",Cv,[p[3]||(p[3]=r("span",{class:"bar__label"},"内边距",-1)),r("div",Tv,[(i(),c(N,null,ve(t,d=>r("button",{key:d,type:"button",class:g(["bar__btn",{"is-active":s.value===d}]),onClick:k=>s.value=d},z(d),11,zv)),64))]),r("label",Pv,[kt(r("input",{"onUpdate:modelValue":p[0]||(p[0]=d=>o.value=d),type:"checkbox"},null,512),[[fl,o.value]]),p[2]||(p[2]=S(" 显示边框 ",-1))])]),f(l(Qn),{size:e.value,padding:s.value,bordered:o.value,style:{"margin-top":"12px"}},{default:v(()=>[...p[4]||(p[4]=[r("h3",null,"发布流程看板",-1),r("p",null," 切换上方档位即可实时改变最大宽度与内边距。容器把主内容限制在预设宽度并居中， 长文阅读时两侧留白更舒适，也更易于在宽屏上聚焦。 ",-1)])]),_:1},8,["size","padding","bordered"])],64))}}),Bv=re(Lv,[["__scopeId","data-v-2b47453c"]]),Mv=Object.freeze(Object.defineProperty({__proto__:null,default:Bv},Symbol.toStringTag,{value:"Module"})),Vv=K({__name:"sections",setup(a){return(n,t)=>(i(),U(l(Qn),{direction:"column",padding:"medium",bordered:""},{header:v(()=>[...t[0]||(t[0]=[r("div",{class:"bar"},[r("strong",null,"周报 · 第 38 期"),r("span",{class:"tag"},"已归档")],-1)])]),footer:v(()=>[...t[1]||(t[1]=[r("div",{class:"bar bar--footer"},[r("span",null,"共 12 条改动"),r("span",null,"2026-09-17")],-1)])]),default:v(()=>[t[2]||(t[2]=r("div",{class:"body"},[r("p",null," 本周完成设计 token 重构，新增 4 套主题下统一的圆角与间距变量， 组件层不再出现硬编码尺寸。 ")],-1))]),_:1}))}}),Ov=re(Vv,[["__scopeId","data-v-88acace9"]]),Iv=Object.freeze(Object.defineProperty({__proto__:null,default:Ov},Symbol.toStringTag,{value:"Module"})),Ev={style:{width:"100%"}},Av=K({__name:"basic",setup(a){return(n,t)=>(i(),c("div",Ev,[t[2]||(t[2]=r("p",null,"第一段内容",-1)),f(l(Lt)),t[3]||(t[3]=r("p",null,"第二段内容",-1)),f(l(Lt),null,{default:v(()=>[...t[0]||(t[0]=[S("分组标题",-1)])]),_:1}),t[4]||(t[4]=r("p",null,"第三段内容",-1)),f(l(Lt),{"content-position":"left","border-style":"dashed"},{default:v(()=>[...t[1]||(t[1]=[S(" 左侧标题 ",-1)])]),_:1}),t[5]||(t[5]=r("p",null,"第四段内容",-1))]))}}),jv=Object.freeze(Object.defineProperty({__proto__:null,default:Av},Symbol.toStringTag,{value:"Module"})),Rv=K({__name:"vertical",setup(a){return(n,t)=>(i(),U(l(ut),{size:"medium"},{default:v(()=>[t[0]||(t[0]=r("span",null,"编辑",-1)),f(l(Lt),{direction:"vertical"}),t[1]||(t[1]=r("span",null,"复制",-1)),f(l(Lt),{direction:"vertical",accent:""}),t[2]||(t[2]=r("span",null,"删除",-1))]),_:1}))}}),Fv=Object.freeze(Object.defineProperty({__proto__:null,default:Rv},Symbol.toStringTag,{value:"Module"})),Dv=K({__name:"basic",setup(a){const n=_(!1);return(t,e)=>(i(),c(N,null,[f(l(ke),{type:"primary",onClick:e[0]||(e[0]=s=>n.value=!0)},{default:v(()=>[...e[2]||(e[2]=[S(" 打开抽屉 ",-1)])]),_:1}),f(l(un),{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=s=>n.value=s),title:"发布配置",subtitle:"右侧滑出，内容较长时主体区域内部滚动",size:"420px",footer:""},{default:v(()=>[...e[3]||(e[3]=[r("p",{class:"drawer-basic-text"}," 抽屉从屏幕右侧滑出，不打断当前页面上下文，适合承载表单、详情、设置这一类 「需要来回对照主页面」的内容。 ",-1),r("p",{class:"drawer-basic-text"},[S(" 宽度默认是视口宽度的 30%，也可以像这里一样写死 "),r("code",null,"420px"),S("； 传入数字则按 px 处理。 ")],-1),r("p",{class:"drawer-basic-text"},[S(" 底部操作区由 "),r("code",null,"footer"),S(" 打开："),r("strong",null,"取消"),S("会关闭抽屉， "),r("strong",null,"确定"),S("只抛出 "),r("code",null,"confirm"),S(" 事件，方便接异步提交。 ")],-1)])]),_:1},8,["modelValue"])],64))}}),Nv=Object.freeze(Object.defineProperty({__proto__:null,default:Dv},Symbol.toStringTag,{value:"Module"})),Hv={class:"drawer-footer-demo"},Uv=K({__name:"footer",setup(a){const n=_(!1),t=_(""),e=_(""),s=_(!1);async function o(){s.value=!0,await new Promise(p=>setTimeout(p,600)),s.value=!1,n.value=!1,t.value="",e.value=""}function u(){n.value=!1}return(p,d)=>(i(),c(N,null,[f(l(ke),{type:"primary",onClick:d[0]||(d[0]=k=>n.value=!0)},{default:v(()=>[...d[4]||(d[4]=[S(" 填写发布信息 ",-1)])]),_:1}),f(l(un),{modelValue:n.value,"onUpdate:modelValue":d[3]||(d[3]=k=>n.value=k),title:"发布信息",size:"420px",footer:""},{footer:v(()=>[f(l(ke),{disabled:s.value,onClick:u},{default:v(()=>[...d[5]||(d[5]=[S(" 取消 ",-1)])]),_:1},8,["disabled"]),f(l(ke),{type:"primary",loading:s.value,onClick:o},{default:v(()=>[...d[6]||(d[6]=[S(" 提交 ",-1)])]),_:1},8,["loading"])]),default:v(()=>[r("div",Hv,[f(l(Ye),{modelValue:t.value,"onUpdate:modelValue":d[1]||(d[1]=k=>t.value=k),block:"",placeholder:"版本号，如 0.3.0"},null,8,["modelValue"]),f(l(Ye),{modelValue:e.value,"onUpdate:modelValue":d[2]||(d[2]=k=>e.value=k),block:"",placeholder:"发布说明（可留空）"},null,8,["modelValue"])])]),_:1},8,["modelValue"])],64))}}),Wv=Object.freeze(Object.defineProperty({__proto__:null,default:Uv},Symbol.toStringTag,{value:"Module"})),qv=K({__name:"placement",setup(a){const n=_(!1),t=_("right"),e=[{value:"right",label:"右侧"},{value:"left",label:"左侧"},{value:"top",label:"顶部"},{value:"bottom",label:"底部"}];function s(o){t.value=o,n.value=!0}return(o,u)=>(i(),c(N,null,[f(l(ut),null,{default:v(()=>[(i(),c(N,null,ve(e,p=>f(l(ke),{key:p.value,onClick:d=>s(p.value)},{default:v(()=>[S(z(p.label),1)]),_:2},1032,["onClick"])),64))]),_:1}),f(l(un),{modelValue:n.value,"onUpdate:modelValue":u[0]||(u[0]=p=>n.value=p),placement:t.value,title:`从${t.value==="top"||t.value==="bottom"?"上下":"左右"}滑出`,size:t.value==="top"||t.value==="bottom"?"240px":"360px"},{default:v(()=>[...u[1]||(u[1]=[r("p",{class:"drawer-placement-text"},[r("code",null,"placement"),S(" 决定出现方向：左右方向时 "),r("code",null,"size"),S(" 表示宽度，上下方向时表示高度。切换方向后尺寸会自动回到推导值， 避免上一次拖动调整出的 px 值把抽屉撑出屏幕。 ")],-1)])]),_:1},8,["modelValue","placement","title","size"])],64))}}),Gv=Object.freeze(Object.defineProperty({__proto__:null,default:qv},Symbol.toStringTag,{value:"Module"})),Yv={class:"drawer-resizable-hint"},Xv=K({__name:"resizable",setup(a){const n=_(!1),t=_(0),e=_(null);function s(o){t.value=o}return(o,u)=>(i(),c(N,null,[f(l(ut),null,{default:v(()=>[f(l(ke),{type:"primary",onClick:u[0]||(u[0]=p=>n.value=!0)},{default:v(()=>[...u[4]||(u[4]=[S(" 打开可调整尺寸的抽屉 ",-1)])]),_:1}),r("span",Yv," 当前宽度："+z(t.value>0?`${t.value}px`:"未调整"),1)]),_:1}),f(l(un),{ref_key:"drawerRef",ref:e,modelValue:n.value,"onUpdate:modelValue":u[3]||(u[3]=p=>n.value=p),title:"拖动内侧边缘调整宽度",size:"360px",resizable:"","min-size":280,"max-size":640,footer:"",onResize:s},{footer:v(()=>[f(l(ke),{onClick:u[1]||(u[1]=p=>{var d;return(d=e.value)==null?void 0:d.reset()})},{default:v(()=>[...u[5]||(u[5]=[S(" 恢复默认宽度 ",-1)])]),_:1}),f(l(ke),{type:"primary",onClick:u[2]||(u[2]=p=>n.value=!1)},{default:v(()=>[...u[6]||(u[6]=[S(" 完成 ",-1)])]),_:1})]),default:v(()=>[u[7]||(u[7]=r("p",{class:"drawer-resizable-text"},[S(" 打开 "),r("code",null,"resizable"),S(" 后，抽屉内侧会出现一条 6px 宽的拖动手柄 （hover 时高亮）。拖动过程直接写内联宽度，不触发组件重渲染， 松手才抛出 "),r("code",null,"resize"),S(" 事件。 ")],-1)),u[8]||(u[8]=r("p",{class:"drawer-resizable-text"},[S(" 尺寸被限制在 "),r("code",null,"minSize"),S(" 与 "),r("code",null,"maxSize"),S(" 之间； 调用实例方法 "),r("code",null,"reset()"),S(" 可恢复成 "),r("code",null,"size"),S(" 推导值。 ")],-1))]),_:1},8,["modelValue"])],64))}}),Zv=Object.freeze(Object.defineProperty({__proto__:null,default:Xv},Symbol.toStringTag,{value:"Module"})),Jv={style:{width:"100%"}},Qv={key:0,style:{color:"var(--kk-text-secondary)","font-size":"13px"}},ef=K({__name:"basic",setup(a){const n=_(),t=ln({name:"",email:""}),e=_(""),s={name:[{required:!0,message:"请输入名称",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}]};async function o(){var d;const p=await((d=n.value)==null?void 0:d.validate());e.value=p?"校验通过":"校验未通过"}function u(){var p;(p=n.value)==null||p.resetFields(),e.value=""}return(p,d)=>(i(),c("div",Jv,[f(l(Tn),{ref_key:"formRef",ref:n,model:t,rules:s,"label-width":"72px"},{default:v(()=>[f(l(Rt),{prop:"name",label:"名称"},{default:v(()=>[f(l(Ye),{modelValue:t.name,"onUpdate:modelValue":d[0]||(d[0]=k=>t.name=k),placeholder:"请输入名称",clearable:""},null,8,["modelValue"])]),_:1}),f(l(Rt),{prop:"email",label:"邮箱"},{default:v(()=>[f(l(Ye),{modelValue:t.email,"onUpdate:modelValue":d[1]||(d[1]=k=>t.email=k),placeholder:"请输入邮箱"},null,8,["modelValue"])]),_:1}),f(l(Rt),null,{default:v(()=>[f(l(ut),null,{default:v(()=>[f(l(ke),{type:"primary","native-type":"submit",onClick:o},{default:v(()=>[...d[2]||(d[2]=[S(" 提交 ",-1)])]),_:1}),f(l(ke),{onClick:u},{default:v(()=>[...d[3]||(d[3]=[S(" 重置 ",-1)])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"]),e.value?(i(),c("p",Qv,z(e.value),1)):$("",!0)]))}}),tf=Object.freeze(Object.defineProperty({__proto__:null,default:ef},Symbol.toStringTag,{value:"Module"})),nf=K({__name:"label-position",setup(a){const n=ln({name:""});return(t,e)=>(i(),U(l(Tn),{model:n,"label-position":"top",style:{width:"100%"}},{default:v(()=>[f(l(Rt),{prop:"name",label:"名称",required:""},{default:v(()=>[f(l(Ye),{modelValue:n.name,"onUpdate:modelValue":e[0]||(e[0]=s=>n.name=s),placeholder:"标签在顶部"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]))}}),af=Object.freeze(Object.defineProperty({__proto__:null,default:nf},Symbol.toStringTag,{value:"Module"})),lf=K({__name:"rules",setup(a){const n=ln({username:""}),t={username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:12,message:"长度需为 3-12 个字符",trigger:"blur"},{pattern:/^[a-zA-Z0-9_]+$/,message:"仅支持字母、数字与下划线",trigger:"blur"}]};return(e,s)=>(i(),U(l(Tn),{model:n,rules:t,"label-width":"80px",style:{width:"100%"}},{default:v(()=>[f(l(Rt),{prop:"username",label:"用户名"},{default:v(()=>[f(l(Ye),{modelValue:n.username,"onUpdate:modelValue":s[0]||(s[0]=o=>n.username=o),placeholder:"3-12 位字母数字下划线"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]))}}),of=Object.freeze(Object.defineProperty({__proto__:null,default:lf},Symbol.toStringTag,{value:"Module"})),sf=K({__name:"basic",setup(a){return(n,t)=>(i(),c(N,null,[f(l(Ge),{name:"lucide:home"}),f(l(Ge),{name:"lucide:heart"}),f(l(Ge),{name:"lucide:settings"})],64))}}),rf=Object.freeze(Object.defineProperty({__proto__:null,default:sf},Symbol.toStringTag,{value:"Module"})),uf=K({__name:"color",setup(a){return(n,t)=>(i(),c(N,null,[f(l(Ge),{name:"lucide:heart",color:"#EF4444",size:"24"}),f(l(Ge),{name:"lucide:check-circle",color:"#16A34A",size:"24"}),f(l(Ge),{name:"lucide:bell",color:"#F59E0B",size:"24"}),f(l(Ge),{name:"lucide:loader",spin:"",size:"24"})],64))}}),cf=Object.freeze(Object.defineProperty({__proto__:null,default:uf},Symbol.toStringTag,{value:"Module"})),df=K({__name:"size",setup(a){return(n,t)=>(i(),c(N,null,[f(l(Ge),{name:"lucide:star",size:"small"}),f(l(Ge),{name:"lucide:star"}),f(l(Ge),{name:"lucide:star",size:"large"}),f(l(Ge),{name:"lucide:star",size:32}),f(l(Ge),{name:"lucide:star",size:"2em"})],64))}}),pf=Object.freeze(Object.defineProperty({__proto__:null,default:df},Symbol.toStringTag,{value:"Module"})),vf=K({__name:"affix",setup(a){const n=_("");return(t,e)=>(i(),U(l(ut),{direction:"vertical",size:"medium",fill:"",style:{width:"100%"}},{default:v(()=>[f(l(Ye),{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=s=>n.value=s),placeholder:"搜索内容"},{prefix:v(()=>[f(l(Ge),{name:"lucide:search",size:"16"})]),_:1},8,["modelValue"]),f(l(Ye),{placeholder:"金额"},{suffix:v(()=>[...e[2]||(e[2]=[S(" 元 ",-1)])]),_:1}),f(l(Ye),{placeholder:"站点"},{prepend:v(()=>[...e[3]||(e[3]=[S(" https:// ",-1)])]),_:1}),f(l(Ye),{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=s=>n.value=s),type:"password","show-password":"",placeholder:"密码"},null,8,["modelValue"])]),_:1}))}}),ff=Object.freeze(Object.defineProperty({__proto__:null,default:vf},Symbol.toStringTag,{value:"Module"})),mf=K({__name:"basic",setup(a){const n=_("");return(t,e)=>(i(),U(l(ut),{direction:"vertical",size:"medium",fill:"",style:{width:"100%"}},{default:v(()=>[f(l(Ye),{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=s=>n.value=s),placeholder:"基础输入框",clearable:""},null,8,["modelValue"]),f(l(Ye),{placeholder:"禁用状态",disabled:""}),f(l(Ye),{"model-value":"只读内容",readonly:""})]),_:1}))}}),kf=Object.freeze(Object.defineProperty({__proto__:null,default:mf},Symbol.toStringTag,{value:"Module"})),gf=K({__name:"size",setup(a){return(n,t)=>(i(),U(l(ut),{direction:"vertical",size:"medium",fill:"",style:{width:"100%"}},{default:v(()=>[f(l(Ye),{size:"small",placeholder:"small"}),f(l(Ye),{placeholder:"medium"}),f(l(Ye),{size:"large",placeholder:"large"}),f(l(Ye),{invalid:"","error-message":"该字段必填",placeholder:"错误态"}),f(l(Ye),{block:"",placeholder:"块级宽度"})]),_:1}))}}),bf=Object.freeze(Object.defineProperty({__proto__:null,default:gf},Symbol.toStringTag,{value:"Module"})),hf=K({__name:"aside",setup(a){return(n,t)=>(i(),U(l(wt),{style:{height:"340px",border:"1px solid var(--kk-border-color)","border-radius":"var(--kk-radius-lg)",overflow:"hidden"}},{default:v(()=>[f(l(Ln),{bordered:""},{left:v(()=>[...t[0]||(t[0]=[r("strong",null,"数据看板",-1)])]),right:v(()=>[...t[1]||(t[1]=[r("span",{class:"muted"},"2026-09-18",-1)])]),_:1}),f(l(wt),null,{default:v(()=>[f(l(nn),{width:160,bordered:""},{default:v(()=>[...t[2]||(t[2]=[r("div",{class:"nav"},[r("div",{class:"nav-item is-active"},"实时概览"),r("div",{class:"nav-item"},"流量分析"),r("div",{class:"nav-item"},"转化漏斗")],-1)])]),_:1}),f(l(an),{class:"main"},{default:v(()=>[t[5]||(t[5]=r("h3",null,"实时概览",-1)),f(l(wt),{style:{height:"auto",gap:"12px",background:"transparent"}},{default:v(()=>[f(l(an),{class:"pane"},{default:v(()=>[...t[3]||(t[3]=[r("span",{class:"pane__label"},"今日访问",-1),r("strong",{class:"pane__value"},"12,480",-1)])]),_:1}),f(l(nn),{position:"right",width:150,bordered:""},{default:v(()=>[...t[4]||(t[4]=[r("div",{class:"aside-pane"},[r("span",{class:"pane__label"},"实时在线"),r("strong",{class:"pane__value"},"328")],-1)])]),_:1})]),_:1})]),_:1})]),_:1}),f(l(ta),{bordered:""},{default:v(()=>[...t[6]||(t[6]=[r("span",{class:"muted"},"侧边栏也可置于右侧，适配主内容 + 辅助信息栏的版式",-1)])]),_:1})]),_:1}))}}),yf=re(hf,[["__scopeId","data-v-54babe44"]]),_f=Object.freeze(Object.defineProperty({__proto__:null,default:yf},Symbol.toStringTag,{value:"Module"})),xf={class:"nav"},wf=["onClick"],$f=K({__name:"basic",setup(a){const n=[{key:"overview",label:"概览",title:"概览",desc:"这里是页面的主要内容区域，超出高度时内部滚动。点击左侧导航可切换内容。"},{key:"components",label:"组件",title:"组件",desc:"Layout 由 Header / Sider / Content / Footer 四个区块组成，可自由组合与嵌套。"},{key:"theme",label:"主题",title:"主题",desc:"所有区块的颜色都来自语义 token，四套主题下无需额外覆盖即可自适应。"}],t=_("overview"),e=m(()=>n.find(s=>s.key===t.value)??n[0]);return(s,o)=>(i(),U(l(wt),{style:{height:"320px",border:"1px solid var(--kk-border-color)","border-radius":"var(--kk-radius-lg)",overflow:"hidden"}},{default:v(()=>[f(l(Ln),{bordered:""},{left:v(()=>[...o[0]||(o[0]=[r("strong",null,"KK 控制台",-1)])]),right:v(()=>[...o[1]||(o[1]=[r("span",{class:"muted"},"v0.2.0",-1)])]),_:1}),f(l(wt),null,{default:v(()=>[f(l(nn),{width:180,bordered:""},{default:v(()=>[r("div",xf,[(i(),c(N,null,ve(n,u=>r("button",{key:u.key,type:"button",class:g(["nav-item",{"is-active":t.value===u.key}]),onClick:p=>t.value=u.key},z(u.label),11,wf)),64))])]),_:1}),f(l(an),null,{default:v(()=>[r("h3",null,z(e.value.title),1),r("p",null,z(e.value.desc),1)]),_:1})]),_:1}),f(l(ta),{bordered:""},{default:v(()=>[...o[2]||(o[2]=[r("span",{class:"muted"},"柔光几何 · 设计系统",-1)])]),_:1})]),_:1}))}}),Sf=re($f,[["__scopeId","data-v-956432bb"]]),Kf=Object.freeze(Object.defineProperty({__proto__:null,default:Sf},Symbol.toStringTag,{value:"Module"})),Cf=K({__name:"grid",setup(a){return(n,t)=>(i(),c(N,null,[f(l(Nn),{gutter:16},{default:v(()=>[f(l(Tt),{span:12,md:{span:8}},{default:v(()=>[...t[0]||(t[0]=[r("div",{class:"cell"},"span 12 / md 8",-1)])]),_:1}),f(l(Tt),{span:12,md:{span:8}},{default:v(()=>[...t[1]||(t[1]=[r("div",{class:"cell"},"span 12 / md 8",-1)])]),_:1}),f(l(Tt),{span:24,md:{span:8}},{default:v(()=>[...t[2]||(t[2]=[r("div",{class:"cell"},"span 24 / md 8",-1)])]),_:1})]),_:1}),f(l(Nn),{gutter:[16,24],style:{"margin-top":"24px"}},{default:v(()=>[f(l(Tt),{span:6},{default:v(()=>[...t[3]||(t[3]=[r("div",{class:"cell cell--alt"},"6",-1)])]),_:1}),f(l(Tt),{span:6,offset:6},{default:v(()=>[...t[4]||(t[4]=[r("div",{class:"cell cell--alt"},"offset 6",-1)])]),_:1}),f(l(Tt),{span:6},{default:v(()=>[...t[5]||(t[5]=[r("div",{class:"cell cell--alt"},"6",-1)])]),_:1})]),_:1})],64))}}),Tf=re(Cf,[["__scopeId","data-v-e82ee62e"]]),zf=Object.freeze(Object.defineProperty({__proto__:null,default:Tf},Symbol.toStringTag,{value:"Module"})),Pf={class:"logo"},Lf={class:"nav"},Bf=["title","onClick"],Mf=K({__name:"sider",setup(a){const n=_(!1),t=["指南","组件","主题"],e=_("指南");return(s,o)=>(i(),U(l(wt),{style:{height:"300px",border:"1px solid var(--kk-border-color)","border-radius":"var(--kk-radius-lg)",overflow:"hidden"}},{default:v(()=>[f(l(Ln),{bordered:""},{left:v(()=>[...o[2]||(o[2]=[r("strong",null,"文档站",-1)])]),right:v(()=>[f(l(ke),{size:"small",onClick:o[0]||(o[0]=u=>n.value=!n.value)},{default:v(()=>[S(z(n.value?"展开侧栏":"收起侧栏"),1)]),_:1})]),_:1}),f(l(wt),null,{default:v(()=>[f(l(nn),{collapsed:n.value,"onUpdate:collapsed":o[1]||(o[1]=u=>n.value=u),width:200,"collapsed-width":56,collapsible:"",bordered:""},{logo:v(()=>[r("span",Pf,z(n.value?"K":"KK UI"),1)]),default:v(()=>[r("div",Lf,[(i(),c(N,null,ve(t,u=>r("button",{key:u,type:"button",class:g(["nav-item",{"is-active":e.value===u}]),title:u,onClick:p=>e.value=u},[o[3]||(o[3]=r("span",{class:"nav-dot"},null,-1)),kt(r("span",{class:"nav-text"},z(u),513),[[Mt,!n.value]])],10,Bf)),64))])]),_:1},8,["collapsed"]),f(l(an),null,{default:v(()=>[r("p",null,[o[4]||(o[4]=S(" 当前选中：",-1)),r("strong",null,z(e.value),1),S(" 。侧边栏收起后宽度收窄为 "+z(n.value?56:200)+"px，点击导航可切换内容。 ",1)])]),_:1})]),_:1})]),_:1}))}}),Vf=re(Mf,[["__scopeId","data-v-50b0377b"]]),Of=Object.freeze(Object.defineProperty({__proto__:null,default:Vf},Symbol.toStringTag,{value:"Module"})),If={class:"demo-actions"},Ef=K({__name:"advanced",setup(a){const n=_(!1),t=_(!1),e=_(null),s=["弹窗的 max-height 取「组件 token」与「视口推导值」的较小者，长内容交给主体区域内部滚动，不会把弹窗顶出屏幕。","主体区域带 overscroll-behavior: contain，滚到底时不会把滚动继续传给背后的页面。","首次打开后 DOM 会保留，仅切换可见性，二次打开不重新挂载，省下组件初始化与节点创建的开销。","需要彻底销毁时打开 destroyOnClose，关闭动画结束后节点会被移除。","loading 期间主体区域显示遮罩并屏蔽指针事件，避免在加载中误操作。","通过 ref 可以拿到 open / close / reset，适合在事件回调里程序化控制。"];function o(){t.value=!0,n.value=!0,setTimeout(()=>t.value=!1,1400)}return(u,p)=>(i(),c(N,null,[r("div",If,[f(l(ke),{onClick:o},{default:v(()=>[...p[3]||(p[3]=[S(" 长内容 + 加载态 ",-1)])]),_:1}),f(l(ke),{onClick:p[0]||(p[0]=d=>{var k;return(k=e.value)==null?void 0:k.open()})},{default:v(()=>[...p[4]||(p[4]=[S(" 用 ref 打开 ",-1)])]),_:1})]),f(l(Ht),{ref_key:"modalRef",ref:e,modelValue:n.value,"onUpdate:modelValue":p[1]||(p[1]=d=>n.value=d),title:"组件说明",subtitle:"主体区域内部滚动",loading:t.value,"max-height":"60vh",footer:"",onConfirm:p[2]||(p[2]=d=>n.value=!1)},{default:v(()=>[(i(),c(N,null,ve(s,(d,k)=>r("p",{key:k,class:"demo-para"},z(d),1)),64))]),_:1},8,["modelValue","loading"])],64))}}),Af=Object.freeze(Object.defineProperty({__proto__:null,default:Ef},Symbol.toStringTag,{value:"Module"})),jf=K({__name:"basic",setup(a){const n=_(!1);return(t,e)=>(i(),c(N,null,[f(l(ke),{type:"primary",onClick:e[0]||(e[0]=s=>n.value=!0)},{default:v(()=>[...e[2]||(e[2]=[S(" 打开弹窗 ",-1)])]),_:1}),f(l(Ht),{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=s=>n.value=s),title:"发布新版本",subtitle:"v0.2.0 · 预计影响 1 个包"},{default:v(()=>[...e[3]||(e[3]=[r("div",{class:"demo-text"},[r("p",null,[S(" 确认后将构建产物并推送到 npm，当前分支为 "),r("code",null,"main"),S("。发布过程不可中断，完成后会同步生成 CHANGELOG。 ")])],-1)])]),_:1},8,["modelValue"])],64))}}),Rf=Object.freeze(Object.defineProperty({__proto__:null,default:jf},Symbol.toStringTag,{value:"Module"})),Ff={class:"demo-drag"},Df=K({__name:"draggable",setup(a){const n=_(!1),t=_({x:0,y:0});function e(s){t.value=s}return(s,o)=>(i(),c(N,null,[f(l(ke),{onClick:o[0]||(o[0]=u=>n.value=!0)},{default:v(()=>[...o[2]||(o[2]=[S(" 可拖动弹窗 ",-1)])]),_:1}),f(l(Ht),{modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=u=>n.value=u),title:"拖动我",subtitle:"按住标题栏拖动，至少保留 56px 在视口内",draggable:!0,onDrag:e},{default:v(()=>[r("div",Ff,[r("p",null,"当前位移：x "+z(t.value.x.toFixed(0))+"px / y "+z(t.value.y.toFixed(0))+"px",1),o[3]||(o[3]=r("p",null,[S("位移只写进 "),r("code",null,"transform"),S("，拖动过程中不会触发组件重渲染。")],-1))])]),_:1},8,["modelValue"])],64))}}),Nf=Object.freeze(Object.defineProperty({__proto__:null,default:Df},Symbol.toStringTag,{value:"Module"})),Hf=K({__name:"footer",setup(a){const n=_(!1),t=_(!1);function e(o){window.dispatchEvent(new CustomEvent("kk-toast",{detail:o}))}function s(){t.value=!0,e("已确认，正在执行…"),setTimeout(()=>{t.value=!1,n.value=!1,e("执行完成")},1200)}return(o,u)=>(i(),c(N,null,[f(l(ke),{type:"primary",onClick:u[0]||(u[0]=p=>n.value=!0)},{default:v(()=>[...u[3]||(u[3]=[S(" 二次确认 ",-1)])]),_:1}),f(l(Ht),{modelValue:n.value,"onUpdate:modelValue":u[1]||(u[1]=p=>n.value=p),title:"删除这条记录？",subtitle:"删除后不可恢复",footer:"","ok-text":"删除","ok-loading":t.value,onConfirm:s,onCancel:u[2]||(u[2]=p=>e("已取消"))},{default:v(()=>[...u[4]||(u[4]=[r("p",{class:"demo-confirm"},[S(" 默认底部按钮只抛出 "),r("code",null,"confirm"),S(" / "),r("code",null,"cancel"),S(" 事件，是否关闭弹窗由业务决定 —— 这样异步提交时可以一直保持打开状态。 ")],-1)])]),_:1},8,["modelValue","ok-loading"])],64))}}),Uf=Object.freeze(Object.defineProperty({__proto__:null,default:Hf},Symbol.toStringTag,{value:"Module"})),Wf={class:"demo-head"},qf={class:"demo-foot"},Gf=K({__name:"slots",setup(a){const n=_(!1);return(t,e)=>(i(),c(N,null,[f(l(ke),{onClick:e[0]||(e[0]=s=>n.value=!0)},{default:v(()=>[...e[4]||(e[4]=[S(" 完全自定义 ",-1)])]),_:1}),f(l(Ht),{modelValue:n.value,"onUpdate:modelValue":e[3]||(e[3]=s=>n.value=s),"show-close":!1,bordered:""},{header:v(()=>[r("div",Wf,[f(l(Ge),{name:"lucide:wand-sparkles",size:"18"}),e[6]||(e[6]=r("span",null,"自定义头部",-1)),f(l(tt),{type:"primary",size:"small"},{default:v(()=>[...e[5]||(e[5]=[S(" Beta ",-1)])]),_:1})])]),footer:v(()=>[r("div",qf,[f(l(ke),{size:"small",onClick:e[1]||(e[1]=s=>n.value=!1)},{default:v(()=>[...e[7]||(e[7]=[S(" 稍后再说 ",-1)])]),_:1}),f(l(ke),{size:"small",type:"primary",onClick:e[2]||(e[2]=s=>n.value=!1)},{default:v(()=>[...e[8]||(e[8]=[S(" 好的 ",-1)])]),_:1})])]),default:v(()=>[e[9]||(e[9]=r("p",{class:"demo-slot-body"}," 头部、底部、关闭按钮都开放了插槽，默认样式只负责留白与分割线， 布局完全可以自己接。 ",-1))]),_:1},8,["modelValue"])],64))}}),Yf=Object.freeze(Object.defineProperty({__proto__:null,default:Gf},Symbol.toStringTag,{value:"Module"})),Xf=K({__name:"basic",setup(a){const n=_(1);return(t,e)=>(i(),U(l(pn),{"current-page":n.value,"onUpdate:currentPage":e[0]||(e[0]=s=>n.value=s),total:200,"page-size":10},null,8,["current-page"]))}}),Zf=Object.freeze(Object.defineProperty({__proto__:null,default:Xf},Symbol.toStringTag,{value:"Module"})),Jf=K({__name:"layout",setup(a){const n=_(3),t=_(10);return(e,s)=>(i(),U(l(pn),{"current-page":n.value,"onUpdate:currentPage":s[0]||(s[0]=o=>n.value=o),"page-size":t.value,"onUpdate:pageSize":s[1]||(s[1]=o=>t.value=o),total:500,"page-sizes":[10,20,50],layout:"prev, pager, next, ->, sizes, jumper, total"},null,8,["current-page","page-size"]))}}),Qf=Object.freeze(Object.defineProperty({__proto__:null,default:Jf},Symbol.toStringTag,{value:"Module"})),em=K({__name:"sizes",setup(a){const n=_(1),t=_(10);return(e,s)=>(i(),U(l(pn),{"current-page":n.value,"onUpdate:currentPage":s[0]||(s[0]=o=>n.value=o),"page-size":t.value,"onUpdate:pageSize":s[1]||(s[1]=o=>t.value=o),total:200,"page-sizes":[10,20,50,100],background:"",layout:"prev, pager, next, jumper, sizes, total"},null,8,["current-page","page-size"]))}}),tm=Object.freeze(Object.defineProperty({__proto__:null,default:em},Symbol.toStringTag,{value:"Module"})),nm={class:"select-basic"},am={class:"select-basic__option"},lm={key:0,class:"select-basic__tip"},om={class:"select-basic__result"},sm=K({__name:"basic",setup(a){const n=_(null),t=[{value:"vue",label:"Vue 3"},{value:"react",label:"React 18"},{value:"svelte",label:"Svelte 5"},{value:"solid",label:"Solid",disabled:!0,tip:"暂不支持"}];function e(s){console.log("search:",s)}return(s,o)=>(i(),c("div",nm,[f(l(cn),{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=u=>n.value=u),options:t,filterable:"",clearable:"",placeholder:"请选择技术栈",onSearch:e},{default:v(({option:u})=>[r("span",am,[r("span",null,z(u.label),1),u.tip?(i(),c("em",lm,z(String(u.tip)),1)):$("",!0)])]),_:1},8,["modelValue"]),r("p",om,[o[1]||(o[1]=S(" 当前值：",-1)),r("code",null,z(n.value??"（空）"),1)])]))}}),im=Object.freeze(Object.defineProperty({__proto__:null,default:sm},Symbol.toStringTag,{value:"Module"})),rm={class:"select-multiple"},um={class:"select-multiple__result"},cm=K({__name:"multiple",setup(a){const n=_(["css","ts"]),t=[{value:"css",label:"CSS"},{value:"ts",label:"TypeScript"},{value:"vue",label:"Vue"},{value:"vite",label:"Vite"},{value:"vitest",label:"Vitest"},{value:"scss",label:"SCSS"}];return(e,s)=>(i(),c("div",rm,[f(l(cn),{modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=o=>n.value=o),options:t,multiple:"",filterable:"",clearable:"","select-all":"","collapse-tags":"","max-tag-count":3,"multiple-limit":5,placeholder:"请选择技能（最多 5 项）"},null,8,["modelValue"]),r("p",um,[S(" 已选 "+z(n.value.length)+" 项：",1),r("code",null,z(n.value.join(", ")||"（空）"),1)])]))}}),dm=Object.freeze(Object.defineProperty({__proto__:null,default:cm},Symbol.toStringTag,{value:"Module"})),pm={class:"select-remote"},vm={class:"select-remote__tip"},fm=K({__name:"remote",setup(a){const n=[{value:"vuejs/core",label:"vuejs/core"},{value:"vuejs/vitepress",label:"vuejs/vitepress"},{value:"vitejs/vite",label:"vitejs/vite"},{value:"vueuse/vueuse",label:"vueuse/vueuse"},{value:"vitest-dev/vitest",label:"vitest-dev/vitest"},{value:"pnpm/pnpm",label:"pnpm/pnpm"}],t=_(null),e=_(!1),s=_([]);async function o(u){if(!u)return s.value=[],[];e.value=!0;try{const p=await new Promise(d=>{setTimeout(()=>{d(n.filter(k=>{var h;return(h=k.label)==null?void 0:h.includes(u)}))},400)});return s.value=p,p}finally{e.value=!1}}return(u,p)=>(i(),c("div",pm,[f(l(cn),{modelValue:t.value,"onUpdate:modelValue":p[0]||(p[0]=d=>t.value=d),options:s.value,loading:e.value,filterable:"",remote:"",clearable:"","remote-method":o,placeholder:"搜索仓库，如 vue"},null,8,["modelValue","options","loading"]),r("p",vm,[p[1]||(p[1]=S(" 输入 ",-1)),p[2]||(p[2]=r("code",null,"v",-1)),p[3]||(p[3]=S(" 试试；当前值：",-1)),r("code",null,z(t.value??"（空）"),1)])]))}}),mm=Object.freeze(Object.defineProperty({__proto__:null,default:fm},Symbol.toStringTag,{value:"Module"})),km={class:"select-slots"},gm=["onClick"],bm=K({__name:"slots",setup(a){const n=_(["fe"]),t=_([{value:"fe",label:"前端"},{value:"be",label:"后端"}]);function e(){const s=t.value.length+1;t.value=[...t.value,{value:`role-${s}`,label:`自定义角色 ${s}`}]}return(s,o)=>(i(),c("div",km,[f(l(cn),{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=u=>n.value=u),options:t.value,multiple:"",clearable:"",block:"",placeholder:"自定义每一项与空态"},{tag:v(({label:u,value:p,remove:d})=>[r("span",{class:"select-slots__tag",onClick:Qe(k=>d(p),["stop"])},[o[1]||(o[1]=r("i",{class:"select-slots__dot"},null,-1)),S(" "+z(u),1)],8,gm)]),footer:v(()=>[f(l(ke),{size:"small",type:"primary",onClick:e},{default:v(()=>[...o[2]||(o[2]=[S(" 新增一个角色 ",-1)])]),_:1})]),empty:v(()=>[...o[3]||(o[3]=[r("span",{class:"select-slots__empty"},"没有匹配的角色",-1)])]),_:1},8,["modelValue","options"])]))}}),hm=Object.freeze(Object.defineProperty({__proto__:null,default:bm},Symbol.toStringTag,{value:"Module"})),ym=K({__name:"basic",setup(a){const n=_(!0);return(t,e)=>(i(),c(N,null,[f(l(ke),{onClick:e[0]||(e[0]=s=>n.value=!n.value)},{default:v(()=>[S(z(n.value?"加载完成":"重新加载"),1)]),_:1}),f(l(ft),{loading:n.value,style:{"margin-top":"16px"}},{template:v(()=>[f(l(ft),{variant:"avatar"}),f(l(ft),{variant:"title"}),f(l(ft),{rows:3})]),default:v(()=>[e[1]||(e[1]=r("article",{class:"doc"},[r("h3",null,"柔光几何设计语言"),r("p",null," 以暮光紫为主色，配合柔和圆角与低饱和中性色，营造会呼吸的界面节奏， 让信息层级在安静中自然浮现。 ")],-1))]),_:1},8,["loading"])],64))}}),_m=re(ym,[["__scopeId","data-v-627130bb"]]),xm=Object.freeze(Object.defineProperty({__proto__:null,default:_m},Symbol.toStringTag,{value:"Module"})),wm=K({__name:"combine",setup(a){const n=_(!0);return(t,e)=>(i(),c(N,null,[f(l(ke),{size:"small",onClick:e[0]||(e[0]=s=>n.value=!n.value)},{default:v(()=>[...e[1]||(e[1]=[S(" 切换状态 ",-1)])]),_:1}),f(l(ft),{loading:n.value,style:{"margin-top":"16px"}},{template:v(()=>[f(l(ft),{variant:"avatar"}),f(l(ft),{variant:"title"}),f(l(ft),{rows:2})]),default:v(()=>[e[2]||(e[2]=r("div",{class:"profile"},[r("div",{class:"avatar"},"A"),r("div",{class:"meta"},[r("strong",null,"安琪 · 产品经理"),r("span",null,"负责设计系统演进与组件规范落地")])],-1))]),_:1},8,["loading"])],64))}}),$m=re(wm,[["__scopeId","data-v-563c30e0"]]),Sm=Object.freeze(Object.defineProperty({__proto__:null,default:$m},Symbol.toStringTag,{value:"Module"})),Km={class:"list",style:{"margin-top":"16px"}},Cm=K({__name:"list",setup(a){const n=_(!0),t=[{title:"栅格系统的 8 点基准",desc:"以 8px 为节奏单位，让间距形成可预期的层级。"},{title:"圆角的语义",desc:"不同圆角半径对应不同亲密程度，而非随意取值。"},{title:"低饱和中性色",desc:"用灰阶建立纵深，让品牌色成为唯一焦点。"}];return(e,s)=>(i(),c(N,null,[f(l(ke),{size:"small",onClick:s[0]||(s[0]=o=>n.value=!n.value)},{default:v(()=>[S(z(n.value?"加载完成":"重新加载"),1)]),_:1}),r("div",Km,[n.value?(i(),U(l(ft),{key:0,rows:3})):(i(),c(N,{key:1},ve(t,o=>r("div",{key:o.title,class:"card"},[r("h4",null,z(o.title),1),r("p",null,z(o.desc),1)])),64))])],64))}}),Tm=re(Cm,[["__scopeId","data-v-874dd199"]]),zm=Object.freeze(Object.defineProperty({__proto__:null,default:Tm},Symbol.toStringTag,{value:"Module"})),Pm=K({__name:"basic",setup(a){return(n,t)=>(i(),U(l(ut),null,{default:v(()=>[f(l(ke),{type:"primary"},{default:v(()=>[...t[0]||(t[0]=[S(" 确定 ",-1)])]),_:1}),f(l(ke),null,{default:v(()=>[...t[1]||(t[1]=[S("取消",-1)])]),_:1})]),_:1}))}}),Lm=Object.freeze(Object.defineProperty({__proto__:null,default:Pm},Symbol.toStringTag,{value:"Module"})),Bm=K({__name:"split",setup(a){return(n,t)=>(i(),U(l(ut),{split:"",size:"medium"},{split:v(()=>[f(l(Lt),{direction:"vertical"})]),default:v(()=>[t[0]||(t[0]=r("span",null,"首页",-1)),t[1]||(t[1]=r("span",null,"组件",-1)),t[2]||(t[2]=r("span",null,"主题",-1))]),_:1}))}}),Mm=Object.freeze(Object.defineProperty({__proto__:null,default:Bm},Symbol.toStringTag,{value:"Module"})),Vm=K({__name:"vertical",setup(a){return(n,t)=>(i(),U(l(ut),{direction:"vertical",size:"medium"},{default:v(()=>[f(l(ke),{type:"primary"},{default:v(()=>[...t[0]||(t[0]=[S(" 第一行 ",-1)])]),_:1}),f(l(ke),null,{default:v(()=>[...t[1]||(t[1]=[S("第二行",-1)])]),_:1}),f(l(ke),null,{default:v(()=>[...t[2]||(t[2]=[S("第三行",-1)])]),_:1})]),_:1}))}}),Om=Object.freeze(Object.defineProperty({__proto__:null,default:Vm},Symbol.toStringTag,{value:"Module"})),Im=K({__name:"basic",setup(a){const n=_([{date:"2024-01-01",name:"张三",address:"北京市海淀区"},{date:"2024-01-02",name:"李四",address:"上海市浦东新区"},{date:"2024-01-03",name:"王五",address:"广州市天河区"}]);return(t,e)=>(i(),U(l(vn),{data:n.value,"row-key":"name",border:""},{default:v(()=>[f(l(lt),{prop:"date",label:"日期",width:"140"}),f(l(lt),{prop:"name",label:"姓名",width:"120"},{default:v(({row:s})=>[r("strong",null,z(s.name),1)]),_:1}),f(l(lt),{prop:"address",label:"地址"})]),_:1},8,["data"]))}}),Em=Object.freeze(Object.defineProperty({__proto__:null,default:Im},Symbol.toStringTag,{value:"Module"})),Am=K({__name:"pagination",setup(a){const n=_(Array.from({length:45},(t,e)=>({id:e+1,name:`员工 ${e+1}`,dept:["研发","设计","产品","运营"][e%4]})));return(t,e)=>(i(),U(l(vn),{data:n.value,"row-key":"id",border:"",pagination:{pageSize:10,pageSizes:[10,20,50],layout:"prev, pager, next, jumper, sizes, total"}},{default:v(()=>[f(l(lt),{prop:"id",label:"ID",width:"80"}),f(l(lt),{prop:"name",label:"姓名",width:"140"}),f(l(lt),{prop:"dept",label:"部门"})]),_:1},8,["data"]))}}),jm=Object.freeze(Object.defineProperty({__proto__:null,default:Am},Symbol.toStringTag,{value:"Module"})),Rm={class:"demo-selection"},Fm={class:"demo-tip"},Dm=K({__name:"selection",setup(a){const n=_(Array.from({length:23},(s,o)=>({id:o+1,name:`用户 ${o+1}`,score:60+o*7%40}))),t=_([]),e=m(()=>t.value.length);return(s,o)=>(i(),c("div",Rm,[r("p",Fm,"已选 "+z(e.value)+" 项（跨页保留，依赖 rowKey）",1),f(l(vn),{data:n.value,"row-key":"id",selection:t.value,border:"",pagination:{pageSize:10,pageSizes:[10,20]}},{default:v(()=>[f(l(lt),{type:"selection",width:"60"}),f(l(lt),{prop:"id",label:"ID",width:"80"}),f(l(lt),{prop:"name",label:"姓名"}),f(l(lt),{prop:"score",label:"分数",width:"100"})]),_:1},8,["data","selection"])]))}}),Nm=re(Dm,[["__scopeId","data-v-795b7322"]]),Hm=Object.freeze(Object.defineProperty({__proto__:null,default:Nm},Symbol.toStringTag,{value:"Module"})),Um=K({__name:"sort",setup(a){const n=_([{name:"张三",age:30,city:"北京"},{name:"李四",age:20,city:"上海"},{name:"王五",age:25,city:"广州"},{name:"赵六",age:35,city:"深圳"}]);function t(e){return e.city}return(e,s)=>(i(),U(l(vn),{data:n.value,"row-key":"name",border:""},{default:v(()=>[f(l(lt),{prop:"name",label:"姓名",width:"120"}),f(l(lt),{prop:"age",label:"年龄",width:"100",sortable:""}),f(l(lt),{prop:"city",label:"城市",width:"120",sortable:"","sort-by":t}),f(l(lt),{prop:"city",label:"备注"})]),_:1},8,["data"]))}}),Wm=Object.freeze(Object.defineProperty({__proto__:null,default:Um},Symbol.toStringTag,{value:"Module"})),qm=K({__name:"basic",setup(a){const n=_("profile");return(t,e)=>(i(),U(l(Ft),{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=s=>n.value=s)},{default:v(()=>[f(l(nt),{name:"profile"},{label:v(()=>[...e[1]||(e[1]=[r("span",{class:"demo-tab-icon"},[r("svg",{viewBox:"0 0 24 24",width:"15",height:"15","aria-hidden":"true"},[r("path",{d:"M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-4 0-7 2-7 5v1h14v-1c0-3-3-5-7-5z",fill:"currentColor"})]),S(" 用户 ")],-1)])]),_:1}),f(l(nt),{name:"security",label:"安全"},{default:v(()=>[...e[2]||(e[2]=[S(" 安全设置内容 ",-1)])]),_:1}),f(l(nt),{name:"notify",label:"通知"},{default:v(()=>[...e[3]||(e[3]=[S(" 通知偏好内容 ",-1)])]),_:1}),f(l(nt),{name:"billing",label:"账单"},{default:v(()=>[...e[4]||(e[4]=[S(" 账单与发票内容 ",-1)])]),_:1})]),_:1},8,["modelValue"]))}}),Gm=Object.freeze(Object.defineProperty({__proto__:null,default:qm},Symbol.toStringTag,{value:"Module"})),Ym=K({__name:"card",setup(a){const n=_("order");return(t,e)=>(i(),U(l(Ft),{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=s=>n.value=s),type:"card"},{default:v(()=>[f(l(nt),{name:"order",label:"订单"},{default:v(()=>[...e[1]||(e[1]=[S(" 订单列表 ",-1)])]),_:1}),f(l(nt),{name:"refund",label:"退款"},{default:v(()=>[...e[2]||(e[2]=[S(" 退款记录 ",-1)])]),_:1}),f(l(nt),{name:"review",label:"评价"},{default:v(()=>[...e[3]||(e[3]=[S(" 我的评价 ",-1)])]),_:1})]),_:1},8,["modelValue"]))}}),Xm=Object.freeze(Object.defineProperty({__proto__:null,default:Ym},Symbol.toStringTag,{value:"Module"})),Zm=K({__name:"editable",setup(a){const n=_([{name:"tab1",label:"标签一",content:"内容一"},{name:"tab2",label:"标签二",content:"内容二"},{name:"tab3",label:"标签三",content:"内容三"}]),t=_("tab1");let e=3;function s(){e+=1;const u=`tab${e}`;n.value.push({name:u,label:`标签${e}`,content:`内容${e}`}),t.value=u}function o(u){const p=n.value.findIndex(d=>d.name===u);if(p!==-1&&(n.value.splice(p,1),t.value===u)){const d=n.value[p]??n.value[p-1];t.value=d?d.name:""}}return(u,p)=>(i(),U(l(Ft),{modelValue:t.value,"onUpdate:modelValue":p[0]||(p[0]=d=>t.value=d),editable:"",onTabAdd:s,onTabRemove:o},{default:v(()=>[(i(!0),c(N,null,ve(n.value,d=>(i(),U(l(nt),{key:d.name,name:d.name,label:d.label},{default:v(()=>[S(z(d.content),1)]),_:2},1032,["name","label"]))),128))]),_:1},8,["modelValue"]))}}),Jm=Object.freeze(Object.defineProperty({__proto__:null,default:Zm},Symbol.toStringTag,{value:"Module"})),Qm={class:"demo-position"},ek=K({__name:"position",setup(a){const n=_("a"),t=_("a");return(e,s)=>(i(),c("div",Qm,[f(l(Ft),{modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=o=>n.value=o),position:"left",class:"demo-position__col"},{default:v(()=>[f(l(nt),{name:"a",label:"概览"},{default:v(()=>[...s[2]||(s[2]=[S(" 左侧 · 概览 ",-1)])]),_:1}),f(l(nt),{name:"b",label:"成员"},{default:v(()=>[...s[3]||(s[3]=[S(" 左侧 · 成员 ",-1)])]),_:1}),f(l(nt),{name:"c",label:"设置"},{default:v(()=>[...s[4]||(s[4]=[S(" 左侧 · 设置 ",-1)])]),_:1})]),_:1},8,["modelValue"]),f(l(Ft),{modelValue:t.value,"onUpdate:modelValue":s[1]||(s[1]=o=>t.value=o),position:"right",type:"segment",class:"demo-position__col"},{default:v(()=>[f(l(nt),{name:"a",label:"消息"},{default:v(()=>[...s[5]||(s[5]=[S(" 右侧 · 消息 ",-1)])]),_:1}),f(l(nt),{name:"b",label:"收藏"},{default:v(()=>[...s[6]||(s[6]=[S(" 右侧 · 收藏 ",-1)])]),_:1}),f(l(nt),{name:"c",label:"历史"},{default:v(()=>[...s[7]||(s[7]=[S(" 右侧 · 历史 ",-1)])]),_:1})]),_:1},8,["modelValue"])]))}}),tk=Object.freeze(Object.defineProperty({__proto__:null,default:ek},Symbol.toStringTag,{value:"Module"})),nk=K({__name:"basic",setup(a){const n=_(["设计","开发","测试"]);return(t,e)=>(i(!0),c(N,null,ve(n.value,s=>(i(),U(l(tt),{key:s,type:"primary",closable:"",onClose:o=>n.value=n.value.filter(u=>u!==s)},{default:v(()=>[S(z(s),1)]),_:2},1032,["onClose"]))),128))}}),ak=Object.freeze(Object.defineProperty({__proto__:null,default:nk},Symbol.toStringTag,{value:"Module"})),lk=K({__name:"effect",setup(a){return(n,t)=>(i(),c(N,null,[f(l(tt),{type:"primary",effect:"dark"},{default:v(()=>[...t[0]||(t[0]=[S(" dark ",-1)])]),_:1}),f(l(tt),{type:"primary",effect:"light"},{default:v(()=>[...t[1]||(t[1]=[S(" light ",-1)])]),_:1}),f(l(tt),{type:"primary",effect:"plain"},{default:v(()=>[...t[2]||(t[2]=[S(" plain ",-1)])]),_:1}),f(l(tt),{type:"success",round:"",bordered:""},{default:v(()=>[...t[3]||(t[3]=[S(" 胶囊 ",-1)])]),_:1}),f(l(tt),{type:"danger",size:"large"},{default:v(()=>[...t[4]||(t[4]=[S(" 大号 ",-1)])]),_:1}),f(l(tt),{type:"info",size:"small"},{default:v(()=>[...t[5]||(t[5]=[S(" 小号 ",-1)])]),_:1})],64))}}),ok=Object.freeze(Object.defineProperty({__proto__:null,default:lk},Symbol.toStringTag,{value:"Module"})),sk=K({__name:"type",setup(a){return(n,t)=>(i(),c(N,null,[f(l(tt),{type:"primary"},{default:v(()=>[...t[0]||(t[0]=[S(" 主要 ",-1)])]),_:1}),f(l(tt),{type:"success"},{default:v(()=>[...t[1]||(t[1]=[S(" 成功 ",-1)])]),_:1}),f(l(tt),{type:"warning"},{default:v(()=>[...t[2]||(t[2]=[S(" 警告 ",-1)])]),_:1}),f(l(tt),{type:"danger"},{default:v(()=>[...t[3]||(t[3]=[S(" 危险 ",-1)])]),_:1}),f(l(tt),{type:"info"},{default:v(()=>[...t[4]||(t[4]=[S(" 信息 ",-1)])]),_:1}),f(l(tt),null,{default:v(()=>[...t[5]||(t[5]=[S("默认",-1)])]),_:1})],64))}}),ik=Object.freeze(Object.defineProperty({__proto__:null,default:sk},Symbol.toStringTag,{value:"Module"})),rk=K({__name:"basic",setup(a){const n=_([]);function t(e){return new Promise(s=>{let o=0;const u=setInterval(()=>{var p;o+=20,e.onProgress({percent:o}),o>=100&&(clearInterval(u),s({url:`https://example.com/${((p=e.file)==null?void 0:p.name)??"file"}`}))},120)})}return(e,s)=>(i(),U(l(dn),{modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=o=>n.value=o),"http-request":t,limit:3,accept:".png,.jpg,.jpeg,.pdf",tip:"支持任意文件，最多 3 个；点击触发选择框"},null,8,["modelValue"]))}}),uk=Object.freeze(Object.defineProperty({__proto__:null,default:rk},Symbol.toStringTag,{value:"Module"})),ck=K({__name:"drag",setup(a){const n=_([]);function t(e){return new Promise(s=>{let o=0;const u=setInterval(()=>{var p;o+=25,e.onProgress({percent:o}),o>=100&&(clearInterval(u),s({url:`https://example.com/${((p=e.file)==null?void 0:p.name)??"file"}`}))},100)})}return(e,s)=>(i(),U(l(dn),{modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=o=>n.value=o),drag:"",multiple:"","http-request":t,accept:"image/*",tip:"把文件拖到虚线区域即可上传，支持多文件"},null,8,["modelValue"]))}}),dk=Object.freeze(Object.defineProperty({__proto__:null,default:ck},Symbol.toStringTag,{value:"Module"})),pk={key:0,class:"upload-tip"},vk=K({__name:"manual",setup(a){const n=_([]),t=_(null),e=_("");async function s(u){return!u.raw||!u.raw.type.startsWith("image/")?(e.value=`「${u.name}」不是图片，已拦截`,!1):u.size>2*1024*1024?(e.value=`「${u.name}」超过 2MB，已拦截`,!1):(e.value="",!0)}function o(){var u;(u=t.value)==null||u.submit()}return(u,p)=>(i(),c("div",null,[f(l(dn),{ref_key:"uploadRef",ref:t,modelValue:n.value,"onUpdate:modelValue":p[0]||(p[0]=d=>n.value=d),"auto-upload":!1,"before-upload":s,accept:"image/*",tip:"选好文件后点击「提交」才开始上传（仅允许图片，≤2MB）"},null,8,["modelValue"]),e.value?(i(),c("p",pk,z(e.value),1)):$("",!0),r("button",{class:"upload-submit",type:"button",onClick:o},"提交")]))}}),fk=Object.freeze(Object.defineProperty({__proto__:null,default:vk},Symbol.toStringTag,{value:"Module"})),mk=K({__name:"picture-card",setup(a){const n=_([]);function t(e){return new Promise(s=>{let o=0;const u=setInterval(()=>{var p;o+=25,e.onProgress({percent:o}),o>=100&&(clearInterval(u),s({url:`https://example.com/${((p=e.file)==null?void 0:p.name)??"file"}`}))},100)})}return(e,s)=>(i(),U(l(dn),{modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=o=>n.value=o),"list-type":"picture-card","http-request":t,accept:"image/*",limit:6,tip:"卡片式图片上传，hover 出现预览 / 删除操作"},null,8,["modelValue"]))}}),kk=Object.freeze(Object.defineProperty({__proto__:null,default:mk},Symbol.toStringTag,{value:"Module"})),gk=K({__name:"basic",setup(a){return(n,t)=>(i(),U(l(fn),{content:"KK UI 内部资料",rotate:-22},{default:v(()=>[...t[0]||(t[0]=[r("div",{class:"doc"},[r("h3",null,"年度设计复盘"),r("p",null," 本季度我们完成了组件库从 0 到 1 的搭建，统一了 4 套主题下的视觉语言。 下一步将聚焦无障碍与性能预算。 "),r("p",null," 水印以 0.15 不透明度覆盖在内容上，且 `pointer-events: none`， 不影响正文的选择与复制。 ")],-1)])]),_:1}))}}),bk=re(gk,[["__scopeId","data-v-ea1798d3"]]),hk=Object.freeze(Object.defineProperty({__proto__:null,default:bk},Symbol.toStringTag,{value:"Module"})),yk=K({__name:"image",setup(a){return(n,t)=>(i(),U(l(fn),{image:"https://placehold.co/48x48/5b4fe9/ffffff?text=KK","image-width":48,"image-height":48,gap:[120,120],opacity:.25},{default:v(()=>[...t[0]||(t[0]=[r("div",{class:"doc"},[r("h3",null,"对外发布稿"),r("p",null," 使用图片水印时，`image` 优先级高于 `content`； 若图片加载失败则静默跳过，不会阻塞页面渲染。 ")],-1)])]),_:1}))}}),_k=re(yk,[["__scopeId","data-v-a2cc6cf5"]]),xk=Object.freeze(Object.defineProperty({__proto__:null,default:_k},Symbol.toStringTag,{value:"Module"})),wk=K({__name:"moveable",setup(a){return(n,t)=>(i(),U(l(fn),{content:"KK UI 内部资料",moveable:"",rotate:-22,opacity:.35},{default:v(()=>[...t[0]||(t[0]=[r("div",{class:"doc"},[r("h3",null,"跟随鼠标的水印"),r("p",null,[S(" 开启 "),r("code",null,"moveable"),S(" 后，容器范围内只展示单个水印并跟随光标移动， 未悬停时自动隐藏，适合重点区域（如详情、合同预览）的低干扰标识。 ")]),r("p",null,"在该区域内移动鼠标即可看到水印跟随效果。")],-1)])]),_:1}))}}),$k=re(wk,[["__scopeId","data-v-353dc4bc"]]),Sk=Object.freeze(Object.defineProperty({__proto__:null,default:$k},Symbol.toStringTag,{value:"Module"})),Kk=K({__name:"slot",setup(a){return(n,t)=>(i(),U(l(fn),{rotate:-15,opacity:.2},{content:v(()=>[...t[0]||(t[0]=[S(" 机密 · 仅限内部传阅 ",-1)])]),default:v(()=>[t[1]||(t[1]=r("div",{class:"doc"},[r("h3",null,"保密文档"),r("p",null,"下方 #content 插槽的文本会取代 content 属性绘制到水印上。")],-1))]),_:1}))}}),Ck=re(Kk,[["__scopeId","data-v-1ba6cc27"]]),Tk=Object.freeze(Object.defineProperty({__proto__:null,default:Ck},Symbol.toStringTag,{value:"Module"})),zk=`<script setup lang="ts">
import { KkButton } from 'kk-ui'
<\/script>

<template>
  <KkButton type="primary"> 主要按钮 </KkButton>
  <KkButton>默认按钮</KkButton>
  <KkButton type="text"> 文字按钮 </KkButton>
</template>
`,Pk=`<script setup lang="ts">
import { KkButton } from 'kk-ui'
<\/script>

<template>
  <div style="width: 100%">
    <KkButton type="primary" block> 块级按钮 </KkButton>
  </div>
</template>
`,Lk=`<script setup lang="ts">
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
`,Bk=`<script setup lang="ts">
import { KkButton } from 'kk-ui'
<\/script>

<template>
  <KkButton type="primary" size="small"> Small </KkButton>
  <KkButton type="primary"> Medium </KkButton>
  <KkButton type="primary" size="large"> Large </KkButton>
</template>
`,Mk=`<script setup lang="ts">
import { KkButton } from 'kk-ui'
<\/script>

<template>
  <KkButton type="primary" loading> 加载中 </KkButton>
  <KkButton type="primary" disabled> 禁用 </KkButton>
  <KkButton type="default" disabled> 默认禁用 </KkButton>
</template>
`,Vk=`<script setup lang="ts">
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
`,Ok=`<script setup lang="ts">
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
`,Ik=`<script setup lang="ts">
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
`,Ek=`<script setup lang="ts">
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
`,Ak=`<script setup lang="ts">
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
`,jk=`<script setup lang="ts">
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
`,Rk=`<script setup lang="ts">
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
`,Fk=`<script setup lang="ts">
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
`,Dk=`<script setup lang="ts">
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
`,Nk=`<script setup lang="ts">
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
`,Hk=`<script setup lang="ts">
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
`,Uk=`<script setup lang="ts">
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
`,Wk=`<script setup lang="ts">
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
`,qk=`<script setup lang="ts">
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
`,Gk=`<script setup lang="ts">
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
`,Yk=`<script setup lang="ts">
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
`,Xk=`<script setup lang="ts">
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
`,Zk=`<script setup lang="ts">
import { KkIcon } from 'kk-ui'
<\/script>

<template>
  <KkIcon name="lucide:home" />
  <KkIcon name="lucide:heart" />
  <KkIcon name="lucide:settings" />
</template>
`,Jk=`<script setup lang="ts">
import { KkIcon } from 'kk-ui'
<\/script>

<template>
  <KkIcon name="lucide:heart" color="#EF4444" size="24" />
  <KkIcon name="lucide:check-circle" color="#16A34A" size="24" />
  <KkIcon name="lucide:bell" color="#F59E0B" size="24" />
  <KkIcon name="lucide:loader" spin size="24" />
</template>
`,Qk=`<script setup lang="ts">
import { KkIcon } from 'kk-ui'
<\/script>

<template>
  <KkIcon name="lucide:star" size="small" />
  <KkIcon name="lucide:star" />
  <KkIcon name="lucide:star" size="large" />
  <KkIcon name="lucide:star" :size="32" />
  <KkIcon name="lucide:star" size="2em" />
</template>
`,eg=`<script setup lang="ts">
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
`,tg=`<script setup lang="ts">
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
`,ng=`<script setup lang="ts">
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
`,ag=`<script setup lang="ts">
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
          <div class="nav-item is-active">实时概览</div>
          <div class="nav-item">流量分析</div>
          <div class="nav-item">转化漏斗</div>
        </div>
      </KkLayoutSider>

      <KkLayoutContent class="main">
        <h3>实时概览</h3>
        <!-- 内容区内部再嵌套一个横向布局：主区 + 右侧辅助栏 -->
        <KkLayout style="height: auto; gap: 12px; background: transparent">
          <KkLayoutContent class="pane">
            <span class="pane__label">今日访问</span>
            <strong class="pane__value">12,480</strong>
          </KkLayoutContent>

          <KkLayoutSider position="right" :width="150" bordered>
            <div class="aside-pane">
              <span class="pane__label">实时在线</span>
              <strong class="pane__value">328</strong>
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
  padding: 8px 12px;
  border-radius: var(--kk-radius-sm);
  color: var(--kk-text-secondary);
  cursor: pointer;
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
.pane {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  padding: 16px;
  border-radius: var(--kk-radius-md);
  background: var(--kk-bg-subtle);
}
.aside-pane {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 100%;
  min-height: 120px;
  background: var(--kk-bg-subtle);
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
`,lg=`<script setup lang="ts">
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
`,og=`<script setup lang="ts">
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
`,sg=`<script setup lang="ts">
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
`,ig=`<script setup lang="ts">
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
`,rg=`<script setup lang="ts">
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
`,ug=`<script setup lang="ts">
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
`,cg=`<script setup lang="ts">
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
`,dg=`<script setup lang="ts">
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
`,pg=`<script setup lang="ts">
import { ref } from 'vue'
import { KkPagination } from 'kk-ui'

const current = ref(1)
<\/script>

<template>
  <KkPagination v-model:current-page="current" :total="200" :page-size="10" />
</template>
`,vg=`<script setup lang="ts">
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
`,fg=`<script setup lang="ts">
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
`,mg=`<script setup lang="ts">
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
`,kg=`<script setup lang="ts">
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
`,gg=`<script setup lang="ts">
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
`,bg=`<script setup lang="ts">
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
`,hg=`<script setup lang="ts">
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
`,yg=`<script setup lang="ts">
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
`,_g=`<script setup lang="ts">
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
`,xg=`<script setup lang="ts">
import { KkButton, KkSpace } from 'kk-ui'
<\/script>

<template>
  <KkSpace>
    <KkButton type="primary"> 确定 </KkButton>
    <KkButton>取消</KkButton>
  </KkSpace>
</template>
`,wg=`<script setup lang="ts">
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
`,$g=`<script setup lang="ts">
import { KkButton, KkSpace } from 'kk-ui'
<\/script>

<template>
  <KkSpace direction="vertical" size="medium">
    <KkButton type="primary"> 第一行 </KkButton>
    <KkButton>第二行</KkButton>
    <KkButton>第三行</KkButton>
  </KkSpace>
</template>
`,Sg=`<script setup lang="ts">
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
`,Kg=`<script setup lang="ts">
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
`,Cg=`<script setup lang="ts">
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
`,Tg=`<script setup lang="ts">
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
`,zg=`<script setup lang="ts">
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
`,Pg=`<script setup lang="ts">
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
`,Lg=`<script setup lang="ts">
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
`,Bg=`<script setup lang="ts">
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
`,Mg=`<script setup lang="ts">
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
`,Vg=`<script setup lang="ts">
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
`,Og=`<script setup lang="ts">
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
`,Ig=`<script setup lang="ts">
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
`,Eg=`<script setup lang="ts">
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
`,Ag=`<script setup lang="ts">
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
`,jg=`<script setup lang="ts">
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
`,Rg=`<script setup lang="ts">
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
`,Fg=`<script setup lang="ts">
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
`,Dg=`<script setup lang="ts">
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
`,Ng=`<script setup lang="ts">
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
`,Hg={class:"kk-demo"},Ug={key:0,class:"kk-demo__head"},Wg={key:0,class:"kk-demo__title"},qg={key:1,class:"kk-demo__desc"},Gg={key:1,class:"kk-demo__error"},Yg={key:1,class:"kk-demo__bar"},Xg=["innerHTML"],Zg=K({__name:"Demo",props:{src:{default:""},title:{default:""},desc:{default:""},column:{type:Boolean,default:!1},defaultOpen:{type:Boolean,default:!1}},setup(a){const n=a,t=Object.assign({"../../../components/demos/button/basic.vue":Zp,"../../../components/demos/button/block.vue":ev,"../../../components/demos/button/icon.vue":nv,"../../../components/demos/button/size.vue":lv,"../../../components/demos/button/status.vue":sv,"../../../components/demos/button/type.vue":rv,"../../../components/demos/card/basic.vue":dv,"../../../components/demos/card/variant.vue":fv,"../../../components/demos/cascader/basic.vue":gv,"../../../components/demos/cascader/lazy.vue":yv,"../../../components/demos/cascader/multiple.vue":wv,"../../../components/demos/container/basic.vue":Mv,"../../../components/demos/container/sections.vue":Iv,"../../../components/demos/divider/basic.vue":jv,"../../../components/demos/divider/vertical.vue":Fv,"../../../components/demos/drawer/basic.vue":Nv,"../../../components/demos/drawer/footer.vue":Wv,"../../../components/demos/drawer/placement.vue":Gv,"../../../components/demos/drawer/resizable.vue":Zv,"../../../components/demos/form/basic.vue":tf,"../../../components/demos/form/label-position.vue":af,"../../../components/demos/form/rules.vue":of,"../../../components/demos/icon/basic.vue":rf,"../../../components/demos/icon/color.vue":cf,"../../../components/demos/icon/size.vue":pf,"../../../components/demos/input/affix.vue":ff,"../../../components/demos/input/basic.vue":kf,"../../../components/demos/input/size.vue":bf,"../../../components/demos/layout/aside.vue":_f,"../../../components/demos/layout/basic.vue":Kf,"../../../components/demos/layout/grid.vue":zf,"../../../components/demos/layout/sider.vue":Of,"../../../components/demos/modal/advanced.vue":Af,"../../../components/demos/modal/basic.vue":Rf,"../../../components/demos/modal/draggable.vue":Nf,"../../../components/demos/modal/footer.vue":Uf,"../../../components/demos/modal/slots.vue":Yf,"../../../components/demos/pagination/basic.vue":Zf,"../../../components/demos/pagination/layout.vue":Qf,"../../../components/demos/pagination/sizes.vue":tm,"../../../components/demos/select/basic.vue":im,"../../../components/demos/select/multiple.vue":dm,"../../../components/demos/select/remote.vue":mm,"../../../components/demos/select/slots.vue":hm,"../../../components/demos/skeleton/basic.vue":xm,"../../../components/demos/skeleton/combine.vue":Sm,"../../../components/demos/skeleton/list.vue":zm,"../../../components/demos/space/basic.vue":Lm,"../../../components/demos/space/split.vue":Mm,"../../../components/demos/space/vertical.vue":Om,"../../../components/demos/table/basic.vue":Em,"../../../components/demos/table/pagination.vue":jm,"../../../components/demos/table/selection.vue":Hm,"../../../components/demos/table/sort.vue":Wm,"../../../components/demos/tabs/basic.vue":Gm,"../../../components/demos/tabs/card.vue":Xm,"../../../components/demos/tabs/editable.vue":Jm,"../../../components/demos/tabs/position.vue":tk,"../../../components/demos/tag/basic.vue":ak,"../../../components/demos/tag/effect.vue":ok,"../../../components/demos/tag/type.vue":ik,"../../../components/demos/upload/basic.vue":uk,"../../../components/demos/upload/drag.vue":dk,"../../../components/demos/upload/manual.vue":fk,"../../../components/demos/upload/picture-card.vue":kk,"../../../components/demos/watermark/basic.vue":hk,"../../../components/demos/watermark/image.vue":xk,"../../../components/demos/watermark/moveable.vue":Sk,"../../../components/demos/watermark/slot.vue":Tk}),e=Object.assign({"../../../components/demos/button/basic.vue":zk,"../../../components/demos/button/block.vue":Pk,"../../../components/demos/button/icon.vue":Lk,"../../../components/demos/button/size.vue":Bk,"../../../components/demos/button/status.vue":Mk,"../../../components/demos/button/type.vue":Vk,"../../../components/demos/card/basic.vue":Ok,"../../../components/demos/card/variant.vue":Ik,"../../../components/demos/cascader/basic.vue":Ek,"../../../components/demos/cascader/lazy.vue":Ak,"../../../components/demos/cascader/multiple.vue":jk,"../../../components/demos/container/basic.vue":Rk,"../../../components/demos/container/sections.vue":Fk,"../../../components/demos/divider/basic.vue":Dk,"../../../components/demos/divider/vertical.vue":Nk,"../../../components/demos/drawer/basic.vue":Hk,"../../../components/demos/drawer/footer.vue":Uk,"../../../components/demos/drawer/placement.vue":Wk,"../../../components/demos/drawer/resizable.vue":qk,"../../../components/demos/form/basic.vue":Gk,"../../../components/demos/form/label-position.vue":Yk,"../../../components/demos/form/rules.vue":Xk,"../../../components/demos/icon/basic.vue":Zk,"../../../components/demos/icon/color.vue":Jk,"../../../components/demos/icon/size.vue":Qk,"../../../components/demos/input/affix.vue":eg,"../../../components/demos/input/basic.vue":tg,"../../../components/demos/input/size.vue":ng,"../../../components/demos/layout/aside.vue":ag,"../../../components/demos/layout/basic.vue":lg,"../../../components/demos/layout/grid.vue":og,"../../../components/demos/layout/sider.vue":sg,"../../../components/demos/modal/advanced.vue":ig,"../../../components/demos/modal/basic.vue":rg,"../../../components/demos/modal/draggable.vue":ug,"../../../components/demos/modal/footer.vue":cg,"../../../components/demos/modal/slots.vue":dg,"../../../components/demos/pagination/basic.vue":pg,"../../../components/demos/pagination/layout.vue":vg,"../../../components/demos/pagination/sizes.vue":fg,"../../../components/demos/select/basic.vue":mg,"../../../components/demos/select/multiple.vue":kg,"../../../components/demos/select/remote.vue":gg,"../../../components/demos/select/slots.vue":bg,"../../../components/demos/skeleton/basic.vue":hg,"../../../components/demos/skeleton/combine.vue":yg,"../../../components/demos/skeleton/list.vue":_g,"../../../components/demos/space/basic.vue":xg,"../../../components/demos/space/split.vue":wg,"../../../components/demos/space/vertical.vue":$g,"../../../components/demos/table/basic.vue":Sg,"../../../components/demos/table/pagination.vue":Kg,"../../../components/demos/table/selection.vue":Cg,"../../../components/demos/table/sort.vue":Tg,"../../../components/demos/tabs/basic.vue":zg,"../../../components/demos/tabs/card.vue":Pg,"../../../components/demos/tabs/editable.vue":Lg,"../../../components/demos/tabs/position.vue":Bg,"../../../components/demos/tag/basic.vue":Mg,"../../../components/demos/tag/effect.vue":Vg,"../../../components/demos/tag/type.vue":Og,"../../../components/demos/upload/basic.vue":Ig,"../../../components/demos/upload/drag.vue":Eg,"../../../components/demos/upload/manual.vue":Ag,"../../../components/demos/upload/picture-card.vue":jg,"../../../components/demos/watermark/basic.vue":Rg,"../../../components/demos/watermark/image.vue":Fg,"../../../components/demos/watermark/moveable.vue":Dg,"../../../components/demos/watermark/slot.vue":Ng}),{locale:s,t:o}=st(),u=_(""),p=_(n.defaultOpen),d=_(!1);let k;const h=m(()=>{if(!n.title)return"";if(String(s.value)==="zh-CN")return n.title;const F=`docs.demoTitles.${n.title}`,V=o(F);return V===F?n.title:V});ml(F=>(u.value=F instanceof Error?F.message:String(F),!1));function x(F){if(!n.src)return;const V=n.src.replace(/^\.\//,"");return Object.keys(F).find(J=>J.endsWith(V))}const C=m(()=>{const F=x(t);return F?t[F].default:void 0}),L=m(()=>{const F=x(e);return F?e[F]:""}),P=/&/g,W=F=>F.replace(P,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function X(F){const V=/(<!--[\s\S]*?-->)|(<\/?[A-Za-z][\w-]*)|("[^"]*"|'[^']*')|([A-Za-z_@:#][\w-:@.]*(?=\s*=))/g;let J="",ne=0,H;for(;(H=V.exec(F))!==null;){J+=W(F.slice(ne,H.index));const ee=H[1]?"cmt":H[2]?"tag":H[3]?"str":"attr";J+=`<span class="kk-code__${ee}">${W(H[0])}</span>`,ne=H.index+H[0].length}return J+W(F.slice(ne))}const B=m(()=>X(L.value));function E(F){window.dispatchEvent(new CustomEvent("kk-toast",{detail:F}))}async function O(){if(L.value)try{if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(L.value);else{const F=document.createElement("textarea");F.value=L.value,F.style.position="fixed",F.style.opacity="0",document.body.appendChild(F),F.select(),document.execCommand("copy"),document.body.removeChild(F)}d.value=!0,E(o("docs.demo.copySuccess")),clearTimeout(k),k=setTimeout(()=>d.value=!1,1600)}catch{E(o("docs.demo.copyFail"))}}return(F,V)=>(i(),c("div",Hg,[a.title||a.desc?(i(),c("div",Ug,[a.title?(i(),c("div",Wg,z(h.value),1)):$("",!0),a.desc?(i(),c("div",qg,z(a.desc),1)):$("",!0)])):$("",!0),r("div",{class:g(["kk-demo__body",{"kk-demo__body--col":a.column}])},[C.value&&!u.value?(i(),U(ot(C.value),{key:0})):u.value?(i(),c("pre",Gg,z(l(o)("docs.demo.loadFail"))+"："+z(u.value),1)):y(F.$slots,"default",{},void 0,void 0,2)],2),L.value?(i(),c("div",Yg,[r("button",{type:"button",onClick:V[0]||(V[0]=J=>p.value=!p.value)},[V[1]||(V[1]=r("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[r("path",{d:"m8 6-6 6 6 6M16 6l6 6-6 6"})],-1)),S(" "+z(p.value?l(o)("docs.demo.hideCode"):l(o)("docs.demo.viewCode")),1)]),V[2]||(V[2]=r("div",{class:"kk-demo__spacer"},null,-1)),r("button",{type:"button",onClick:O},z(d.value?l(o)("docs.demo.copied"):l(o)("docs.demo.copy")),1)])):$("",!0),L.value?(i(),c("div",{key:2,class:g(["kk-demo__code",{"is-open":p.value}])},[r("pre",null,[r("code",{innerHTML:B.value},null,8,Xg)])],2)):$("",!0)]))}}),Jg={class:"kk-grid kk-grid--4"},Qg=["onClick"],eb={class:"kk-theme-card__row"},tb={class:"kk-theme-card__meta"},nb={class:"kk-theme-card__name"},ab={class:"kk-theme-card__tag"},lb=K({__name:"ThemeGallery",setup(a){const n=[{name:"light",label:"Light",tag:"默认",page:"#F7F8FC",primary:"#5B4FE9",border:"#E0E3EC",container:"#FFFFFF"},{name:"dark",label:"Dark",tag:"暗色",page:"#0B0D12",primary:"#8B80FF",border:"#2A3040",container:"#1F242F"},{name:"soft",label:"Soft",tag:"柔光",page:"#FFF9FB",primary:"#E879A6",border:"#F5DDE7",container:"#FFFFFF"},{name:"cyber",label:"Cyber",tag:"赛博",page:"#05080F",primary:"#00E5FF",border:"#1E3A52",container:"#0C1220"}],{theme:t}=Bn(),e=_(!1);qe(()=>{e.value=!0,Ua()||gt("light")});function s(o){gt(o)}return(o,u)=>(i(),c("div",Jg,[(i(),c(N,null,ve(n,p=>r("button",{key:p.name,class:g(["kk-theme-card",{"is-active":e.value&&l(t)===p.name}]),type:"button",onClick:d=>s(p.name)},[r("div",{class:"kk-theme-card__preview",style:De({background:p.page})},[r("div",{class:"kk-theme-card__bar",style:De({background:p.primary,width:"60%"})},null,4),r("div",{class:"kk-theme-card__bar",style:De({background:p.border,width:"90%"})},null,4),r("div",eb,[r("div",{class:"kk-theme-card__chip",style:De({background:p.container,border:`1px solid ${p.border}`})},null,4),r("div",{class:"kk-theme-card__chip",style:De({background:p.primary})},null,4)])],4),r("div",tb,[r("span",nb,z(p.label),1),r("span",ab,z(p.tag),1)])],10,Qg)),64))]))}});Oa("zh-CN",{name:"zh-CN",label:"简体中文",docs:{nav:{guide:"指南",components:"组件",theme:"主题"},demo:{viewCode:"查看代码",hideCode:"收起代码",copy:"复制",copied:"已复制",copySuccess:"已复制到剪贴板",copyFail:"复制失败，请手动选择代码",loadFail:"示例加载失败"},home:{badge:"全新多主题系统 · 4 套内置主题",heroTitlePrefix:"一套会",heroTitleAccent:"呼吸",heroTitleSuffix:"的 Vue 3 组件库",heroDesc:"KK UI 以「柔光几何」为设计语言，提供轻量、圆润、有呼吸感的组件体验。完整 TypeScript 支持，主题一键切换。",start:"快速开始",browse:"查看组件",copy:"复制",copied:"已复制到剪贴板",copyFail:"复制失败，请手动复制",featuresEyebrow:"Features",featuresTitle:"为什么选择 KK UI",featuresDesc:"在严谨、实用与轻盈之间，KK 用三层 Token 与柔光几何找到了自己的位置。",overviewEyebrow:"Roadmap",overviewTitle:"组件总览",overviewDesc:"已完成基础组件层，覆盖通用、布局、数据展示、数据录入与反馈五类。",count:"{count} 个组件 · 已完成",groups:{general:"通用",layout:"布局",nav:"导航",data:"数据展示",input:"数据录入",feedback:"反馈"},features:{theme:{title:"多主题系统",desc:"4 套内置主题，三层 CSS 变量架构，运行时动态切换，并支持注册自定义主题。"},ts:{title:"完整 TypeScript",desc:"全部使用 script setup 与 defineProps 泛型，Props、Events、Slots 类型完整导出。"},tree:{title:"按需引入",desc:"每个组件独立目录、独立样式入口，构建产物同时提供 ES 与 CJS 格式。"},design:{title:"柔光几何设计",desc:"双层阴影、柔和焦点环、圆润圆角，让界面更有层次与呼吸感。"},a11y:{title:"无障碍支持",desc:"语义化标签、ARIA 属性、键盘可达与可见焦点环，交互状态可辨识。"},doc:{title:"配套文档与测试",desc:"每个组件都包含组件、类型、样式、测试、README，交付即完整。"}}}}});Oa("en-US",{name:"en-US",label:"English",docs:{nav:{guide:"Guide",components:"Components",theme:"Theme"},demo:{viewCode:"View code",hideCode:"Hide code",copy:"Copy",copied:"Copied",copySuccess:"Copied to clipboard",copyFail:"Copy failed, please select the code manually",loadFail:"Failed to load demo"},home:{badge:"All-new multi-theme system · 4 built-in themes",heroTitlePrefix:"A component library that ",heroTitleAccent:"breathes",heroTitleSuffix:"",heroDesc:"KK UI takes “Soft Geometry” as its design language, delivering a light, rounded and breathable component experience. Full TypeScript support, one-click theme switching.",start:"Get started",browse:"Browse components",copy:"Copy",copied:"Copied to clipboard",copyFail:"Copy failed, please copy manually",featuresEyebrow:"Features",featuresTitle:"Why KK UI",featuresDesc:"Between rigor, practicality and lightness, KK found its place with three-layer tokens and Soft Geometry.",overviewEyebrow:"Roadmap",overviewTitle:"Component overview",overviewDesc:"The base component layer is complete, covering general, layout, data display, data entry and feedback.",count:"{count} components · done",groups:{general:"General",layout:"Layout",nav:"Navigation",data:"Data Display",input:"Data Entry",feedback:"Feedback"},features:{theme:{title:"Multi-theme system",desc:"4 built-in themes, a three-layer CSS variable architecture, runtime switching, plus custom theme registration."},ts:{title:"Full TypeScript",desc:"All written with script setup and generic defineProps; Props, Events and Slots types are fully exported."},tree:{title:"Tree-shakeable",desc:"Each component has its own directory and style entry; builds ship both ES and CJS formats."},design:{title:"Soft Geometry design",desc:"Double-layer shadows, soft focus rings and rounded corners give the UI more depth and breathing room."},a11y:{title:"Accessibility",desc:"Semantic tags, ARIA attributes, keyboard reachability and visible focus rings make states discernible."},doc:{title:"Docs & tests included",desc:"Every component ships with component, types, styles, tests and README — complete on delivery."}}},demoTitles:{基础用法:"Basic usage",块级按钮:"Block button",带图标:"With icon",按钮尺寸:"Button sizes",按钮状态:"Button states",按钮类型:"Button types",基础卡片:"Basic card",阴影策略与加载态:"Shadow strategy & loading",单选与完整路径:"Single select & full path",懒加载子级:"Lazy-load children",多选标签:"Multiple tags",居中容器:"Centered container","header / footer 区域":"Header / footer regions",水平分割线:"Horizontal divider",竖直分割线:"Vertical divider",基础抽屉:"Basic drawer",底部操作区:"Footer actions",出现方向:"Placement",可调整尺寸:"Resizable",表单校验:"Form validation",标签在顶部:"Top label",表单项:"Form item",校验规则:"Validation rules",颜色与旋转:"Color & spin",图标尺寸:"Icon sizes",前后缀与附加内容:"Affixes & addons",尺寸与错误态:"Sizes & error state",嵌套与右侧边栏:"Nested & right sider",后台框架:"Admin shell","24 栅格":"24-column grid",折叠侧边栏:"Collapsible sider",长内容与加载态:"Long content & loading",基础弹窗:"Basic modal",可拖动:"Draggable",插槽自定义:"Custom slots",基础分页器:"Basic pagination",自定义布局:"Custom layout",每页条数与跳页:"Page size & jumper",单选与过滤:"Single select & filter",多选与标签折叠:"Multiple & collapsed tags",远程搜索:"Remote search",加载占位:"Loading placeholder",组合骨架:"Composite skeleton",列表骨架:"List skeleton",水平间距:"Horizontal spacing",带分隔符:"With divider",垂直排列:"Vertical",基础表格:"Basic table",内置分页器:"Built-in pagination",多选与跨页选择:"Selection & cross-page",本地排序:"Local sorting",基础标签页:"Basic tabs",卡片风格:"Card style",可关闭与新增:"Closable & addable",左右方向:"Left / right",可关闭标签:"Closable tag",效果与尺寸:"Effects & sizes",标签类型:"Tag types",点击上传:"Click to upload",拖拽上传:"Drag & drop","beforeUpload 校验 + 手动提交":"beforeUpload check + manual submit",卡片式图片上传:"Picture card upload",文字水印:"Text watermark",图片水印:"Image watermark",跟随鼠标:"Follow cursor",插槽内容:"Slot content"}}});const sb={extends:Ja,Layout:Yp,enhanceApp({app:a}){a.use(li),a.component("Demo",Zg),a.component("ThemeGallery",lb),a.component("Home",Wi)}};export{sb as R,Wi as _};
