import{n as Z}from"./NavigationBar.f0d09d12.js";import{r as ee,a8 as te,j as S,e as z,O as oe,ae as ne,a9 as ae,af as se,ac as ie,P as le,ag as ce,M as ue,a as re,_ as de,f as ve,h as fe,V as C,o as I,ad as he,i as me,k as ge}from"./VMain.f2fbd6c9.js";import{aD as O,H as _e,X as we,h as E,Y as ye,aa as be,au as W,i as T,m as w,k as B,a as s,s as $,ag as xe,Q as ke,a4 as je,$ as Ve,L as Te,F,y as Ce,P as Y,J as Ie,v as G,ae as Be,r as M,o as x,c as k,w as v,d as Se,e as $e,b as y,t as V,f as ze,p as Ee,g as pe}from"./index.029e4772.js";import{S as De,V as R}from"./index.21d5b67f.js";import{V as p,a as D}from"./VTextField.182eda43.js";const Ye=e=>{const{touchstartX:n,touchendX:o,touchstartY:t,touchendY:l}=e,i=.5,a=16;e.offsetX=o-n,e.offsetY=l-t,Math.abs(e.offsetY)<i*Math.abs(e.offsetX)&&(e.left&&o<n-a&&e.left(e),e.right&&o>n+a&&e.right(e)),Math.abs(e.offsetX)<i*Math.abs(e.offsetY)&&(e.up&&l<t-a&&e.up(e),e.down&&l>t+a&&e.down(e))};function Le(e,n){var t;const o=e.changedTouches[0];n.touchstartX=o.clientX,n.touchstartY=o.clientY,(t=n.start)==null||t.call(n,{originalEvent:e,...n})}function Pe(e,n){var t;const o=e.changedTouches[0];n.touchendX=o.clientX,n.touchendY=o.clientY,(t=n.end)==null||t.call(n,{originalEvent:e,...n}),Ye(n)}function Xe(e,n){var t;const o=e.changedTouches[0];n.touchmoveX=o.clientX,n.touchmoveY=o.clientY,(t=n.move)==null||t.call(n,{originalEvent:e,...n})}function Ae(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:o=>Le(o,n),touchend:o=>Pe(o,n),touchmove:o=>Xe(o,n)}}function He(e,n){var r,u,c;const o=n.value,t=o!=null&&o.parent?e.parentElement:e,l=(r=o==null?void 0:o.options)!=null?r:{passive:!0},i=(u=n.instance)==null?void 0:u.$.uid;if(!t||!i)return;const a=Ae(n.value);t._touchHandlers=(c=t._touchHandlers)!=null?c:Object.create(null),t._touchHandlers[i]=a,O(a).forEach(f=>{t.addEventListener(f,a[f],l)})}function Me(e,n){var i,a;const o=(i=n.value)!=null&&i.parent?e.parentElement:e,t=(a=n.instance)==null?void 0:a.$.uid;if(!(o!=null&&o._touchHandlers)||!t)return;const l=o._touchHandlers[t];O(l).forEach(r=>{o.removeEventListener(r,l[r])}),delete o._touchHandlers[t]}const N={mounted:He,unmounted:Me};const U=Symbol.for("vuetify:v-window"),q=Symbol.for("vuetify:v-window-group"),J=_e({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{default:"force"},...ee(),...we()},"v-window"),Re=E()({name:"VWindow",directives:{Touch:N},props:J(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:o}=n;const{themeClasses:t}=ye(e),{isRtl:l}=be(),{t:i}=W(),a=te(e,q),r=T(),u=w(()=>l.value?!e.reverse:e.reverse),c=T(!1),f=w(()=>{const d=e.direction==="vertical"?"y":"x",_=(u.value?!c.value:c.value)?"-reverse":"";return`v-window-${d}${_}-transition`}),g=T(0),j=T(void 0),b=w(()=>a.items.value.findIndex(d=>a.selected.value.includes(d.id)));B(b,(d,m)=>{const _=a.items.value.length,H=_-1;_<=2?c.value=d<m:d===H&&m===0?c.value=!0:d===0&&m===H?c.value=!1:c.value=d<m}),ke(U,{transition:f,isReversed:c,transitionCount:g,transitionHeight:j,rootRef:r});const h=w(()=>e.continuous||b.value!==0),P=w(()=>e.continuous||b.value!==a.items.value.length-1);function X(){h.value&&a.prev()}function A(){P.value&&a.next()}const Q=w(()=>{const d=[],m={icon:l.value?e.nextIcon:e.prevIcon,class:`v-window__${u.value?"right":"left"}`,onClick:a.prev,ariaLabel:i("$vuetify.carousel.prev")};d.push(h.value?o.prev?o.prev({props:m}):s(S,m,null):s("div",null,null));const _={icon:l.value?e.prevIcon:e.nextIcon,class:`v-window__${u.value?"left":"right"}`,onClick:a.next,ariaLabel:i("$vuetify.carousel.next")};return d.push(P.value?o.next?o.next({props:_}):s(S,_,null):s("div",null,null)),d}),K=w(()=>e.touch===!1?e.touch:{...{left:()=>{u.value?X():A()},right:()=>{u.value?A():X()},start:m=>{let{originalEvent:_}=m;_.stopPropagation()}},...e.touch===!0?{}:e.touch});return z(()=>$(s(e.tag,{ref:r,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},t.value]},{default:()=>{var d,m;return[s("div",{class:"v-window__container",style:{height:j.value}},[(d=o.default)==null?void 0:d.call(o,{group:a}),e.showArrows!==!1&&s("div",{class:"v-window__controls"},[Q.value])]),(m=o.additional)==null?void 0:m.call(o,{group:a})]}}),[[xe("touch"),K.value]])),{group:a}}}),Oe=E()({name:"VCarousel",props:{color:String,cycle:Boolean,delimiterIcon:{type:je,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...J({continuous:!0,mandatory:"force",showArrows:!0})},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:o}=n;const t=Ve(e,"modelValue"),{t:l}=W(),i=T();let a=-1;B(t,u),B(()=>e.interval,u),B(()=>e.cycle,c=>{c?u():window.clearTimeout(a)}),Te(r);function r(){!e.cycle||!i.value||(a=window.setTimeout(i.value.group.next,+e.interval>0?+e.interval:6e3))}function u(){window.clearTimeout(a),window.requestAnimationFrame(r)}return z(()=>s(Re,{ref:i,modelValue:t.value,"onUpdate:modelValue":c=>t.value=c,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters}],style:{height:Y(e.height)},continuous:!0,mandatory:"force",showArrows:e.showArrows},{default:o.default,additional:c=>{let{group:f}=c;return s(F,null,[!e.hideDelimiters&&s("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[f.items.value.length>0&&s(oe,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[f.items.value.map((g,j)=>{const b={id:`carousel-item-${g.id}`,"aria-label":l("$vuetify.carousel.ariaLabel.delimiter",j+1,f.items.value.length),class:[f.isSelected(g.id)&&"v-btn--active"],onClick:()=>f.select(g.id,!0)};return o.item?o.item({props:b,item:g}):s(S,Ce(g,b),null)})]})]),e.progress&&s(ne,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(f.getItemIndex(t.value)+1)/f.items.value.length*100},null)])},prev:o.prev,next:o.next})),{}}}),We=E()({name:"VWindowItem",directives:{Touch:N},props:{reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...ae(),...se()},emits:{"group:selected":e=>!0},setup(e,n){let{slots:o}=n;const t=Ie(U),l=ie(e,q),{isBooted:i}=le();if(!t||!l)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const a=T(!1),r=w(()=>t.isReversed.value?e.reverseTransition!==!1:e.transition!==!1);function u(){!a.value||!t||(a.value=!1,t.transitionCount.value>0&&(t.transitionCount.value-=1,t.transitionCount.value===0&&(t.transitionHeight.value=void 0)))}function c(){var h;a.value||!t||(a.value=!0,t.transitionCount.value===0&&(t.transitionHeight.value=Y((h=t.rootRef.value)==null?void 0:h.clientHeight)),t.transitionCount.value+=1)}function f(){u()}function g(h){!a.value||Be(()=>{!r.value||!a.value||!t||(t.transitionHeight.value=Y(h.clientHeight))})}const j=w(()=>{const h=t.isReversed.value?e.reverseTransition:e.transition;return r.value?{name:typeof h!="string"?t.transition.value:h,onBeforeEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:c,onAfterLeave:u,onLeaveCancelled:f,onEnter:g}:!1}),{hasContent:b}=ce(e,l.isSelected);return z(()=>s(ue,{transition:j.value,disabled:!i.value},{default:()=>{var h;return[$(s("div",{class:["v-window-item",l.selectedClass.value]},[b.value&&((h=o.default)==null?void 0:h.call(o))]),[[G,l.isSelected.value]])]}})),{}}}),Fe=E()({name:"VCarouselItem",inheritAttrs:!1,props:{value:null},setup(e,n){let{slots:o,attrs:t}=n;z(()=>s(We,{class:"v-carousel-item",value:e.value},{default:()=>[s(re,t,o)]}))}}),Ge={components:{navigation:Z,foote:ve},data:()=>({url:"https://top-lista-turista-default-rtdb.europe-west1.firebasedatabase.app/",fab:null,destinacija:{}}),methods:{toTop(){window.scrollTo({top:0,behavior:"smooth"})},check(){this.fab=window.pageYOffset>60},async load_destinacije(){let e,n,o;try{let t=await fetch(this.url+"/agencije.json");if(e=t.status,n=t.statusText,!t.ok)throw new Error;const l=await t.json();for(const a in l)l[a].naziv==this.$route.params.agencija&&(o=l[a].destinacije);if(!o)throw new Error("Agencija nije prona\u0111ena");if(t=await fetch(this.url+`/destinacije/${o}.json`),e=t.status,n=t.statusText,!t.ok)throw new Error;const i=await t.json();for(const a in i)if(i[a].naziv==this.$route.params.naziv){this.destinacija={id:a,tip:i[a].tip,opis:i[a].opis,cena:i[a].cena,naziv:i[a].naziv,slike:i[a].slike,prevoz:i[a].prevoz,maxOsoba:i[a].maxOsoba};break}if(!this.destinacija.id)throw new Error("Destinacija nije prona\u0111ena")}catch(t){console.log(t),n=`Firebase: ${e}\xA0${n}`;const l="Ooops";this.$router.push({path:"/error",state:e==200?{}:{title:l,message:n}})}}},beforeMount(){this.load_destinacije()}},L=e=>(Ee("data-v-d6c00d19"),e=e(),pe(),e),Ne={class:"text-tip mt-12"},Ue={class:"text-naziv font-weight-bold mt-2"},qe={class:"text-cena font-weight-bold my-auto"},Je={class:"text-prevoz text-capitalize mb-12"},Qe=L(()=>y("div",{class:"text-opis-naslov font-weight-bold mb-10 mt-7"}," Opis destinacije: ",-1)),Ke={class:"text-opis text-justify"},Ze=L(()=>y("br",null,null,-1)),et={class:"text-osobe mt-10 mb-11"},tt=L(()=>y("div",{style:{height:"60px",width:"100%"}},null,-1));function ot(e,n,o,t,l,i){const a=M("navigation"),r=M("foote");return $((x(),k(fe,null,{default:v(()=>[s(a,{color:"secondary",flat:!1}),s(me,null,{default:v(()=>[s(R,{id:"content_holder_container"},{default:v(()=>[s(C,{id:"content_holder",class:"align-center text-center px-xs-3 px-sm-5 px-md-11"},{default:v(()=>[s(R,{fluid:""},{default:v(()=>[s(p,null,{default:v(()=>[s(D,{cols:"12",md:"8",class:"coll"},{default:v(()=>[s(C,{class:"kartica"},{default:v(()=>[(x(),k(Oe,{cycle:"",id:"galerija",height:"600px",color:"#fffdf9","show-arrows":"hover",key:e.destinacija.id,"hide-delimiter-background":""},{default:v(()=>[(x(!0),Se(F,null,$e(e.destinacija.slike,(u,c)=>(x(),k(Fe,{src:u,key:c,cover:""},null,8,["src"]))),128))]),_:1}))]),_:1})]),_:1}),s(D,{cols:"12",md:"4",class:"colr"},{default:v(()=>[s(C,{id:"info",class:"kartica px-5 d-flex flex-column",height:"600px"},{default:v(()=>[y("div",Ne,V(e.destinacija.tip),1),y("div",Ue,V(e.destinacija.naziv),1),y("div",qe,V(Math.round(e.destinacija.cena/117.32))+" \u20AC ",1),y("div",Je,[e.destinacija.prevoz=="autobus"?(x(),k(I,{key:0,class:"ikona",size:"30px",icon:"mdi-bus"})):e.destinacija.prevoz=="sopstveni"?(x(),k(I,{key:1,class:"ikona2",size:"30px",icon:"mdi-car"})):e.destinacija.prevoz=="avion"?(x(),k(I,{key:2,class:"ikona",size:"30px",icon:"mdi-airplane"})):(x(),k(I,{key:3,class:"ikona",size:"30px",icon:"mdi-train-car"})),ze(" "+V(e.destinacija.prevoz),1)])]),_:1})]),_:1})]),_:1}),s(p,null,{default:v(()=>[s(D)]),_:1}),s(p,null,{default:v(()=>[s(C,{class:"kartica pt-7 px-9 px-md-15 mx-3 mt-1 w-100"},{default:v(()=>[Qe,s(he,null,{default:v(()=>[y("div",Ke,V(e.destinacija.opis),1),Ze,y("div",et," Maksimalan broj osoba: "+V(e.destinacija.maxOsoba),1)]),_:1})]),_:1})]),_:1}),tt]),_:1})]),_:1})]),_:1})]),_:1}),s(ge,null,{default:v(()=>[$(s(S,{fab:"",dark:"",fixed:"",bottom:"",right:"",class:"topFab",color:"#bfb7a7",icon:"mdi-arrow-up",onClick:i.toTop},null,8,["onClick"]),[[G,e.fab]])]),_:1}),s(r,{mediaLinks:!1})]),_:1})),[[De,i.check]])}const ct=de(Ge,[["render",ot],["__scopeId","data-v-d6c00d19"]]);export{ct as default};
