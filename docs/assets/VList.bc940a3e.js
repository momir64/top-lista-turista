import{h as D,W as Q,X as ee,Z as I,m,O as se,a as v,H,i as w,P as U,ao as F,G as te,_ as re,l as me,D as Ue,L as We,ag as Ke,a3 as _,q as ge,v as qe,au as ue,k as Xe,af as Ye,F as oe,x as ce,$ as Ze,aB as L,aw as pe,Y as ze}from"./index.00a3e580.js";import{B as he,e as R,q as W,O as Je,w as z,M as Qe,P as et,Q as Se,R as tt,S as be,I as ke,T as Ce,U as we,W as Ae,X as nt,Y as Ie,Z as at,$ as Pe,a0 as lt,J as Ve,a1 as Le,a2 as xe,a3 as Be,a4 as it,a5 as de,o as ve,A as st}from"./VMain.95753a85.js";const rt=D()({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...Q()},setup(e,l){let{attrs:t}=l;const{themeClasses:n}=ee(e),{textColorClasses:i,textColorStyles:a}=he(I(e,"color")),s=m(()=>{const u={};return e.length&&(u[e.vertical?"maxHeight":"maxWidth"]=se(e.length)),e.thickness&&(u[e.vertical?"borderRightWidth":"borderTopWidth"]=se(e.thickness)),u});return R(()=>v("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},n.value,i.value],style:[s.value,a.value],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}}),J=Symbol.for("vuetify:list");function Oe(){const e=H(J,{hasPrepend:w(!1),updateHasPrepend:()=>null}),l={hasPrepend:w(!1),updateHasPrepend:t=>{t&&(l.hasPrepend.value=t)}};return U(J,l),e}function Me(){return H(J,null)}const ut={open:e=>{let{id:l,value:t,opened:n,parents:i}=e;if(t){const a=new Set;a.add(l);let s=i.get(l);for(;s!=null;)a.add(s),s=i.get(s);return a}else return n.delete(l),n},select:()=>null},Te={open:e=>{let{id:l,value:t,opened:n,parents:i}=e;if(t){let a=i.get(l);for(n.add(l);a!=null&&a!==l;)n.add(a),a=i.get(a);return n}else n.delete(l);return n},select:()=>null},ot={open:Te.open,select:e=>{let{id:l,value:t,opened:n,parents:i}=e;if(!t)return n;const a=[];let s=i.get(l);for(;s!=null;)a.push(s),s=i.get(s);return new Set(a)}},ne=e=>{const l={select:t=>{let{id:n,value:i,selected:a}=t;if(n=F(n),e&&!i){const s=Array.from(a.entries()).reduce((u,f)=>{let[b,g]=f;return g==="on"?[...u,b]:u},[]);if(s.length===1&&s[0]===n)return a}return a.set(n,i?"on":"off"),a},in:(t,n,i)=>{let a=new Map;for(const s of t||[])a=l.select({id:s,value:!0,selected:new Map(a),children:n,parents:i});return a},out:t=>{const n=[];for(const[i,a]of t.entries())a==="on"&&n.push(i);return n}};return l},_e=e=>{const l=ne(e);return{select:n=>{let{selected:i,id:a,...s}=n;a=F(a);const u=i.has(a)?new Map([[a,i.get(a)]]):new Map;return l.select({...s,id:a,selected:u})},in:(n,i,a)=>{let s=new Map;return n!=null&&n.length&&(s=l.in(n.slice(0,1),i,a)),s},out:(n,i,a)=>l.out(n,i,a)}},ct=e=>{const l=ne(e);return{select:n=>{let{id:i,selected:a,children:s,...u}=n;return i=F(i),s.has(i)?a:l.select({id:i,selected:a,children:s,...u})},in:l.in,out:l.out}},dt=e=>{const l=_e(e);return{select:n=>{let{id:i,selected:a,children:s,...u}=n;return i=F(i),s.has(i)?a:l.select({id:i,selected:a,children:s,...u})},in:l.in,out:l.out}},vt=e=>{const l={select:t=>{let{id:n,value:i,selected:a,children:s,parents:u}=t;n=F(n);const f=new Map(a),b=[n];for(;b.length;){const r=b.shift();a.set(r,i?"on":"off"),s.has(r)&&b.push(...s.get(r))}let g=u.get(n);for(;g;){const r=s.get(g),o=r.every(d=>a.get(d)==="on"),c=r.every(d=>!a.has(d)||a.get(d)==="off");a.set(g,o?"on":c?"off":"indeterminate"),g=u.get(g)}return e&&!i&&Array.from(a.entries()).reduce((o,c)=>{let[d,k]=c;return k==="on"?[...o,d]:o},[]).length===0?f:a},in:(t,n,i)=>{let a=new Map;for(const s of t||[])a=l.select({id:s,value:!0,selected:new Map(a),children:n,parents:i});return a},out:(t,n)=>{const i=[];for(const[a,s]of t.entries())s==="on"&&!n.has(a)&&i.push(a);return i}};return l},N=Symbol.for("vuetify:nested"),De={id:w(),root:{register:()=>null,unregister:()=>null,parents:w(new Map),children:w(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:w(new Set),selected:w(new Map),selectedValues:w([])}},ft=te({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),yt=e=>{let l=!1;const t=w(new Map),n=w(new Map),i=re(e,"opened",e.opened,r=>new Set(r),r=>[...r.values()]),a=m(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return dt(e.mandatory);case"leaf":return ct(e.mandatory);case"independent":return ne(e.mandatory);case"single-independent":return _e(e.mandatory);case"classic":default:return vt(e.mandatory)}}),s=m(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return ot;case"single":return ut;case"multiple":default:return Te}}),u=re(e,"selected",e.selected,r=>a.value.in(r,t.value,n.value),r=>a.value.out(r,t.value,n.value));me(()=>{l=!0});function f(r){const o=[];let c=r;for(;c!=null;)o.unshift(c),c=n.value.get(c);return o}const b=Ue("nested"),g={id:w(),root:{opened:i,selected:u,selectedValues:m(()=>{const r=[];for(const[o,c]of u.value.entries())c==="on"&&r.push(o);return r}),register:(r,o,c)=>{o&&r!==o&&n.value.set(r,o),c&&t.value.set(r,[]),o!=null&&t.value.set(o,[...t.value.get(o)||[],r])},unregister:r=>{var c;if(l)return;t.value.delete(r);const o=n.value.get(r);if(o){const d=(c=t.value.get(o))!=null?c:[];t.value.set(o,d.filter(k=>k!==r))}n.value.delete(r),i.value.delete(r)},open:(r,o,c)=>{b.emit("click:open",{id:r,value:o,path:f(r),event:c});const d=s.value.open({id:r,value:o,opened:new Set(i.value),children:t.value,parents:n.value,event:c});d&&(i.value=d)},openOnSelect:(r,o,c)=>{const d=s.value.select({id:r,value:o,selected:new Map(u.value),opened:new Set(i.value),children:t.value,parents:n.value,event:c});d&&(i.value=d)},select:(r,o,c)=>{b.emit("click:select",{id:r,value:o,path:f(r),event:c});const d=a.value.select({id:r,value:o,selected:new Map(u.value),children:t.value,parents:n.value,event:c});d&&(u.value=d),g.root.openOnSelect(r,o,c)},children:t,parents:n}};return U(N,g),g.root},Fe=(e,l)=>{const t=H(N,De),n=Symbol(We()),i=m(()=>{var s;return(s=e.value)!=null?s:n}),a={...t,id:i,open:(s,u)=>t.root.open(i.value,s,u),openOnSelect:(s,u)=>t.root.openOnSelect(i.value,s,u),isOpen:m(()=>t.root.opened.value.has(i.value)),parent:m(()=>t.root.parents.value.get(i.value)),select:(s,u)=>t.root.select(i.value,s,u),isSelected:m(()=>t.root.selected.value.get(F(i.value))==="on"),isIndeterminate:m(()=>t.root.selected.value.get(i.value)==="indeterminate"),isLeaf:m(()=>!t.root.children.value.get(i.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(i.value,t.id.value,l),me(()=>{!t.isGroupActivator&&t.root.unregister(i.value)}),l&&U(N,a),a},mt=()=>{const e=H(N,De);U(N,{...e,isGroupActivator:!0})},gt=Ke({name:"VListGroupActivator",setup(e,l){let{slots:t}=l;return mt(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),pt=te({activeColor:String,color:String,collapseIcon:{type:_,default:"$collapse"},expandIcon:{type:_,default:"$expand"},prependIcon:_,appendIcon:_,fluid:Boolean,subgroup:Boolean,value:null,...W()},"v-list-group"),fe=D()({name:"VListGroup",props:{title:String,...pt()},setup(e,l){let{slots:t}=l;const{isOpen:n,open:i,id:a}=Fe(I(e,"value"),!0),s=m(()=>`v-list-group--id-${String(a.value)}`),u=Me(),{isBooted:f}=Je();function b(c){i(!n.value,c)}const g=m(()=>({onClick:b,class:"v-list-group__header",id:s.value})),r=m(()=>n.value?e.collapseIcon:e.expandIcon),o=m(()=>({VListItem:{active:n.value,activeColor:e.activeColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&r.value,appendIcon:e.appendIcon||!e.subgroup&&r.value,title:e.title,value:e.value}}));return R(()=>v(e.tag,{class:["v-list-group",{"v-list-group--prepend":u==null?void 0:u.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value}]},{default:()=>[t.activator&&v(z,{defaults:o.value},{default:()=>[v(gt,null,{default:()=>[t.activator({props:g.value,isOpen:n.value})]})]}),v(Qe,{transition:{component:et},disabled:!f.value},{default:()=>{var c;return[ge(v("div",{class:"v-list-group__items",role:"group","aria-labelledby":s.value},[(c=t.default)==null?void 0:c.call(t)]),[[qe,n.value]])]}})]})),{}}});const ht=Se("v-list-item-subtitle"),St=Se("v-list-item-title"),ye=D()({name:"VListItem",directives:{Ripple:tt},props:{active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:_,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:_,ripple:{type:Boolean,default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:ue(),onClickOnce:ue(),...be(),...ke(),...Ce(),...we(),...Ae(),...nt(),...W(),...Q(),...Ie({variant:"text"})},emits:{click:e=>!0},setup(e,l){let{attrs:t,slots:n,emit:i}=l;const a=at(e,t),s=m(()=>{var y;return(y=e.value)!=null?y:a.href.value}),{select:u,isSelected:f,isIndeterminate:b,isGroupActivator:g,root:r,parent:o,openOnSelect:c}=Fe(s,!1),d=Me(),k=m(()=>{var y;return e.active!==!1&&(e.active||((y=a.isActive)==null?void 0:y.value)||f.value)}),x=m(()=>e.link!==!1&&a.isLink.value),C=m(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||e.value!=null&&!!d)),h=m(()=>e.rounded||e.nav),p=m(()=>{var y;return{color:k.value&&(y=e.activeColor)!=null?y:e.color,variant:e.variant}});Xe(()=>{var y;return(y=a.isActive)==null?void 0:y.value},y=>{y&&o.value!=null&&r.open(o.value,!0),y&&c(y)},{immediate:!0});const{themeClasses:K}=ee(e),{borderClasses:q}=Pe(e),{colorClasses:X,colorStyles:V,variantClasses:S}=lt(p),{densityClasses:O}=Ve(e),{dimensionStyles:B}=Le(e),{elevationClasses:Y}=xe(e),{roundedClasses:E}=Be(h),j=m(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),M=m(()=>({isActive:k.value,select:u,isSelected:f.value,isIndeterminate:b.value}));function A(y){var $;i("click",y),!(g||!C.value)&&(($=a.navigate)==null||$.call(a,y),e.value!=null&&u(!f.value,y))}function T(y){(y.key==="Enter"||y.key===" ")&&(y.preventDefault(),A(y))}return R(()=>{const y=x.value?"a":e.tag,$=!d||f.value||k.value,Ee=n.title||e.title,je=n.subtitle||e.subtitle,ae=!!(e.appendAvatar||e.appendIcon),He=!!(ae||n.append),le=!!(e.prependAvatar||e.prependIcon),Z=!!(le||n.prepend);return d==null||d.updateHasPrepend(Z),ge(v(y,{class:["v-list-item",{"v-list-item--active":k.value,"v-list-item--disabled":e.disabled,"v-list-item--link":C.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!Z&&(d==null?void 0:d.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&k.value},K.value,q.value,$?X.value:void 0,O.value,Y.value,j.value,E.value,S.value],style:[$?V.value:void 0,B.value],href:a.href.value,tabindex:C.value?0:void 0,onClick:A,onKeydown:C.value&&!x.value&&T},{default:()=>{var ie;return[it(C.value||k.value,"v-list-item"),Z&&v("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?v(z,{key:"prepend-defaults",disabled:!le,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var P;return[(P=n.prepend)==null?void 0:P.call(n,M.value)]}}):v(oe,null,[e.prependAvatar&&v(de,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&v(ve,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),v("div",{class:"v-list-item__content","data-no-activator":""},[Ee&&v(St,{key:"title"},{default:()=>{var P,G;return[(G=(P=n.title)==null?void 0:P.call(n,{title:e.title}))!=null?G:e.title]}}),je&&v(ht,{key:"subtitle"},{default:()=>{var P,G;return[(G=(P=n.subtitle)==null?void 0:P.call(n,{subtitle:e.subtitle}))!=null?G:e.subtitle]}}),(ie=n.default)==null?void 0:ie.call(n,M.value)]),He&&v("div",{key:"append",class:"v-list-item__append"},[n.append?v(z,{key:"append-defaults",disabled:!ae,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var P;return[(P=n.append)==null?void 0:P.call(n,M.value)]}}):v(oe,null,[e.appendIcon&&v(ve,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&v(de,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])]}}),[[Ye("ripple"),C.value&&e.ripple]])}),{}}}),bt=D()({name:"VListSubheader",props:{color:String,inset:Boolean,sticky:Boolean,title:String,...W()},setup(e,l){let{slots:t}=l;const{textColorClasses:n,textColorStyles:i}=he(I(e,"color"));return R(()=>{const a=!!(t.default||e.title);return v(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value],style:{textColorStyles:i}},{default:()=>{var s,u;return[a&&v("div",{class:"v-list-subheader__text"},[(u=(s=t.default)==null?void 0:s.call(t))!=null?u:e.title])]}})}),{}}}),$e=D()({name:"VListChildren",props:{items:Array},setup(e,l){let{slots:t}=l;return Oe(),()=>{var n,i,a;return(a=(n=t.default)==null?void 0:n.call(t))!=null?a:(i=e.items)==null?void 0:i.map(s=>{var d,k,x,C;let{children:u,props:f,type:b,raw:g}=s;if(b==="divider")return(k=(d=t.divider)==null?void 0:d.call(t,{props:f}))!=null?k:v(rt,f,null);if(b==="subheader")return(C=(x=t.subheader)==null?void 0:x.call(t,{props:f}))!=null?C:v(bt,f,{default:t.subheader});const r={subtitle:t.subtitle?h=>{var p;return(p=t.subtitle)==null?void 0:p.call(t,{...h,item:g})}:void 0,prepend:t.prepend?h=>{var p;return(p=t.prepend)==null?void 0:p.call(t,{...h,item:g})}:void 0,append:t.append?h=>{var p;return(p=t.append)==null?void 0:p.call(t,{...h,item:g})}:void 0,default:t.default?h=>{var p;return(p=t.default)==null?void 0:p.call(t,{...h,item:g})}:void 0,title:t.title?h=>{var p;return(p=t.title)==null?void 0:p.call(t,{...h,item:g})}:void 0},[o,c]=fe.filterProps(f);return u?v(fe,ce({value:f==null?void 0:f.value},o),{activator:h=>{let{props:p}=h;return t.header?t.header({props:{...f,...p}}):v(ye,ce(f,p),r)},default:()=>v($e,{items:u},t)}):t.item?t.item(f):v(ye,f,r)})}}}),kt=te({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"item");function Ge(e,l){var u;const t=L(l,e.itemTitle,l),n=e.returnObject?l:L(l,e.itemValue,t),i=L(l,e.itemChildren),a=e.itemProps===!0?typeof l=="object"&&l!=null&&!Array.isArray(l)?"children"in l?pe(l,["children"])[1]:l:void 0:L(l,e.itemProps),s={title:t,value:n,...a};return{title:String((u=s.title)!=null?u:""),value:s.value,props:s,children:Array.isArray(i)?Ne(e,i):void 0,raw:l}}function Ne(e,l){const t=[];for(const n of l)t.push(Ge(e,n));return t}function Vt(e){const l=m(()=>Ne(e,e.items));function t(i){return i.map(a=>{const s=l.value.find(u=>Ze(a,u.value));return s!=null?s:Ge(e,a)})}function n(i){return i.map(a=>{let{props:s}=a;return s.value})}return{items:l,transformIn:t,transformOut:n}}function Ct(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function wt(e,l){const t=L(l,e.itemType,"item"),n=Ct(l)?l:L(l,e.itemTitle),i=L(l,e.itemValue,void 0),a=L(l,e.itemChildren),s=e.itemProps===!0?pe(l,["children"])[1]:L(l,e.itemProps),u={title:n,value:i,...s};return{type:t,title:u.title,value:u.value,props:u,children:t==="item"&&a?Re(e,a):void 0,raw:l}}function Re(e,l){const t=[];for(const n of l)t.push(wt(e,n));return t}function At(e){return{items:m(()=>Re(e,e.items))}}const Lt=D()({name:"VList",props:{activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...ft({selectStrategy:"single-leaf",openStrategy:"list"}),...be(),...ke(),...Ce(),...we(),itemType:{type:String,default:"type"},...kt(),...Ae(),...W(),...Q(),...Ie({variant:"text"})},emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,l){let{slots:t}=l;const{items:n}=At(e),{themeClasses:i}=ee(e),{backgroundColorClasses:a,backgroundColorStyles:s}=st(I(e,"bgColor")),{borderClasses:u}=Pe(e),{densityClasses:f}=Ve(e),{dimensionStyles:b}=Le(e),{elevationClasses:g}=xe(e),{roundedClasses:r}=Be(e),{open:o,select:c}=yt(e),d=m(()=>e.lines?`v-list--${e.lines}-line`:void 0),k=I(e,"activeColor"),x=I(e,"color");Oe(),ze({VListGroup:{activeColor:k,color:x},VListItem:{activeClass:I(e,"activeClass"),activeColor:k,color:x,density:I(e,"density"),disabled:I(e,"disabled"),lines:I(e,"lines"),nav:I(e,"nav"),variant:I(e,"variant")}});const C=w(!1),h=w();function p(S){C.value=!0}function K(S){C.value=!1}function q(S){var O;!C.value&&!(S.relatedTarget&&((O=h.value)==null?void 0:O.contains(S.relatedTarget)))&&V()}function X(S){if(!!h.value){if(S.key==="ArrowDown")V("next");else if(S.key==="ArrowUp")V("prev");else if(S.key==="Home")V("first");else if(S.key==="End")V("last");else return;S.preventDefault()}}function V(S){var E,j,M;if(!h.value)return;const O=["button","[href]","input","select","textarea","[tabindex]"].map(A=>`${A}:not([tabindex="-1"])`).join(", "),B=[...h.value.querySelectorAll(O)].filter(A=>!A.hasAttribute("disabled")),Y=B.indexOf(document.activeElement);if(!S)h.value.contains(document.activeElement)||(E=B[0])==null||E.focus();else if(S==="first")(j=B[0])==null||j.focus();else if(S==="last")(M=B.at(-1))==null||M.focus();else{let A,T=Y;const y=S==="next"?1:-1;do T+=y,A=B[T];while((!A||A.offsetParent==null)&&T<B.length&&T>=0);A?A.focus():V(S==="next"?"first":"last")}}return R(()=>v(e.tag,{ref:h,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},i.value,a.value,u.value,f.value,g.value,d.value,r.value],style:[s.value,b.value],role:"listbox","aria-activedescendant":void 0,onFocusin:p,onFocusout:K,onFocus:q,onKeydown:X},{default:()=>[v($e,{items:n.value},t)]})),{open:o,select:c,focus:V}}});export{Lt as V,ye as a,rt as b,kt as m,Vt as u};