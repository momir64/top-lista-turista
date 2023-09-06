import{n as C}from"./NavigationBar.00dcf57f.js";import{_ as $,f as U,h as A,V as g,a as j,k as I,j as L,i as O,b as F,c as B,o as h}from"./VMain.1d14ca28.js";import{r as _,s as y,o as c,c as f,w as t,a,b as n,t as d,d as k,e as w,F as T,v as E,n as M,f as N,p as D,g as R}from"./index.47f7c269.js";import{S as G,V as x}from"./index.94f23116.js";import{V as v,a as u,b as z}from"./VTextField.7f9fff51.js";import{V as b}from"./VSelect.d26cedd6.js";import"./VList.033b98aa.js";import"./VChip.95086708.js";const Y={components:{navigation:C,foote:U},data:()=>({url:"https://top-lista-turista-default-rtdb.europe-west1.firebasedatabase.app/",fab:null,selektovanaTip:"Tip putovanja",opcijeTip:["Svi tipovi","Letovanje","Zimovanje","Gradovi Evrope"],selektovanaPrevoz:"Vrsta prevoza",opcijePrevoz:["Svi prevozi","Avion","Autobus","Sopstveni prevoz"],agencija:{},destinacije:[],destinacijeShow:[],pretragaInput:""}),methods:{pretraga(){this.destinacijeShow=this.destinacije.filter(e=>e.naziv.toLowerCase().includes(this.pretragaInput.toLowerCase())&&(this.selektovanaTip=="Tip putovanja"||this.selektovanaTip=="Svi tipovi"||this.selektovanaTip==e.tip)&&(this.selektovanaPrevoz=="Vrsta prevoza"||this.selektovanaPrevoz=="Svi prevozi"||this.selektovanaPrevoz.toLowerCase().split(" ")[0]==e.prevoz.toLowerCase()))},toTop(){window.scrollTo({top:0,behavior:"smooth"})},check(){this.fab=window.pageYOffset>60},async load_agencije(){let e,s;try{let p=await fetch(this.url+"/agencije.json");if(e=p.status,s=p.statusText,!p.ok)throw new Error;const i=await p.json(),r=[];for(const l in i)r.push({id:l,logo:i[l].logo,naziv:i[l].naziv,email:i[l].email,adresa:i[l].adresa,osnovana:i[l].godina,telefon:i[l].brojTelefona,destinacije:i[l].destinacije});this.agencija=r.filter(l=>l.naziv==this.$route.params.naziv)[0],this.agencija.grad=this.agencija.adresa.substring(this.agencija.adresa.indexOf(",")+1),this.agencija.ulica=this.agencija.adresa.split(",")[0],this.load_destinacije(this.agencija.destinacije)}catch(p){console.log(p),s=`Firebase: ${e}\xA0${s}`;const i="Ooops";this.$router.push({path:"/error",state:e==200?{}:{title:i,message:s}})}},async load_destinacije(e){let s,p;try{let i=await fetch(this.url+"/destinacije.json");if(s=i.status,p=i.statusText,!i.ok)throw new Error;const r=await i.json(),l=[];console.log(r),console.log(e);for(const m in r[e])l.push({id:m,tip:r[e][m].tip,opis:r[e][m].opis,cena:r[e][m].cena,naziv:r[e][m].naziv,slike:r[e][m].slike,prevoz:r[e][m].prevoz,maxOsoba:r[e][m].maxOsoba});this.destinacije=l,this.destinacijeShow=l}catch(i){console.log(i),p=`Firebase: ${s}\xA0${p}`;const r="Ooops";this.$router.push({path:"/error",state:s==200?{}:{title:r,message:p}})}}},beforeMount(){this.load_agencije()},watch:{selektovanaTip:function(){this.pretraga()},selektovanaPrevoz:function(){this.pretraga()},pretragaInput:function(){this.pretraga()}}},Z=e=>(D("data-v-3ac70492"),e=e(),R(),e),q={class:"text-h1 font-weight-bold mt-7 mb-sm-3"},H={class:"text-h4 mb-n2 mb-sm-n1"},J={class:"text-h4 mb-n2 mb-sm-n1"},K={class:"text-h4 mb-n2 mb-sm-n1"},Q={class:"text-h4 mb-n2 mb-sm-n1"},W={class:"text-h5 mt-9"},X={class:"izbornik"},ee={id:"izbor"},ae={class:"izbornik2"},te={id:"izbor"},oe={id:"izbor"},se={id:"izbor"},ie={id:"izbor"},le={id:"izbor"},ne={class:"pr-2 cena",style:{float:"right"}},re=Z(()=>n("div",{style:{height:"60px",width:"100%"}},null,-1));function de(e,s,p,i,r,l){const m=_("navigation"),P=_("router-link"),S=_("foote");return y((c(),f(A,null,{default:t(()=>[a(m,{color:"secondary",flat:!1}),a(O,null,{default:t(()=>[a(x,{id:"content_holder_container"},{default:t(()=>[a(g,{id:"content_holder",class:"align-center text-center px-xs-3 px-sm-5 px-md-11"},{default:t(()=>[a(x,{fluid:""},{default:t(()=>[a(v,null,{default:t(()=>[a(u,{cols:"12",md:"6",class:"coll"},{default:t(()=>[a(g,{class:"kartica"},{default:t(()=>[a(j,{id:"imgag",src:e.agencija.logo,gradient:"to bottom, rgba(0,0,0,0.05), rgba(0,0,0,.4)",height:"400px",cover:""},null,8,["src"])]),_:1})]),_:1}),a(u,{cols:"12",md:"6",class:"colr"},{default:t(()=>[a(g,{id:"info",class:"kartica",height:"400px"},{default:t(()=>[n("div",q,d(e.agencija.naziv),1),n("div",H,d(e.agencija.ulica),1),n("div",J,d(e.agencija.grad),1),n("div",K,d(e.agencija.email),1),n("div",Q,d(e.agencija.telefon),1),n("div",W," Osnovana "+d(e.agencija.osnovana)+". godine ",1)]),_:1})]),_:1})]),_:1}),e.$vuetify.display.mdAndUp?(c(),f(v,{key:0,class:"mt-15"},{default:t(()=>[a(u,{id:"card_pretraga_col"},{default:t(()=>[a(g,{class:"card_pretraga mt-15 mb-5 d-flex",height:"56px",variant:"outlined"},{default:t(()=>[n("div",X,[a(b,{"bg-color":"#fffdf9",items:e.opcijeTip,modelValue:e.selektovanaTip,"onUpdate:modelValue":s[0]||(s[0]=o=>e.selektovanaTip=o),style:{"border-right":"1px solid #bbb"},variant:"x"},{selection:t(({item:o})=>[n("span",ee,d(o.title),1)]),_:1},8,["items","modelValue"])]),n("div",ae,[a(b,{"bg-color":"#fffdf9",items:e.opcijePrevoz,modelValue:e.selektovanaPrevoz,"onUpdate:modelValue":s[1]||(s[1]=o=>e.selektovanaPrevoz=o),style:{"border-right":"1px solid #bbb"},variant:"x"},{selection:t(({item:o})=>[n("span",te,d(o.title),1)]),_:1},8,["items","modelValue"])]),a(z,{"bg-color":"#fffdf9","single-line":"",class:"pretraga",label:"Pretraga destinacija",variant:"x",modelValue:e.pretragaInput,"onUpdate:modelValue":s[2]||(s[2]=o=>e.pretragaInput=o),"append-inner-icon":"mdi-magnify"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})):e.$vuetify.display.smAndUp?(c(),f(v,{key:1,class:"mt-15 mt-md-1"},{default:t(()=>[a(u,{id:"card_pretraga_col"},{default:t(()=>[a(g,{class:"card_pretraga mt-15 mb-5 d-flex",height:"111px",variant:"outlined"},{default:t(()=>[a(v,{"no-gutters":""},{default:t(()=>[a(u,{cols:"12",class:"mb-n6"},{default:t(()=>[a(z,{"bg-color":"#fffdf9","single-line":"",label:"Pretraga destinacija",variant:"x",modelValue:e.pretragaInput,"onUpdate:modelValue":s[3]||(s[3]=o=>e.pretragaInput=o),class:"pretraga","append-inner-icon":"mdi-magnify"},null,8,["modelValue"])]),_:1}),a(u,{cols:"6",style:{"border-top":"1px solid #bbb","z-index":"999"}},{default:t(()=>[a(b,{"bg-color":"#fffdf9",items:e.opcijeTip,modelValue:e.selektovanaTip,"onUpdate:modelValue":s[4]||(s[4]=o=>e.selektovanaTip=o),style:{"border-right":"1px solid #bbb"},variant:"x"},{selection:t(({item:o})=>[n("span",oe,d(o.title),1)]),_:1},8,["items","modelValue"])]),_:1}),a(u,{cols:"6",style:{"border-top":"1px solid #bbb","z-index":"999"}},{default:t(()=>[a(b,{"bg-color":"#fffdf9",items:e.opcijePrevoz,modelValue:e.selektovanaPrevoz,"onUpdate:modelValue":s[5]||(s[5]=o=>e.selektovanaPrevoz=o),variant:"x"},{selection:t(({item:o})=>[n("span",se,d(o.title),1)]),_:1},8,["items","modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):(c(),f(v,{key:2,class:"mt-15 mt-md-1"},{default:t(()=>[a(u,{id:"card_pretraga_col"},{default:t(()=>[a(g,{class:"card_pretraga mt-15 mb-5 d-flex",height:"165px",variant:"outlined"},{default:t(()=>[a(v,{"no-gutters":""},{default:t(()=>[a(u,{cols:"12",class:"mb-n6"},{default:t(()=>[a(z,{"bg-color":"#fffdf9","single-line":"",label:"Pretraga destinacija",variant:"x",modelValue:e.pretragaInput,"onUpdate:modelValue":s[6]||(s[6]=o=>e.pretragaInput=o),class:"pretraga","append-inner-icon":"mdi-magnify"},null,8,["modelValue"])]),_:1}),a(u,{cols:"12",class:"mb-n6",style:{"border-top":"1px solid #bbb","z-index":"999"}},{default:t(()=>[a(b,{"bg-color":"#fffdf9",items:e.opcijeTip,modelValue:e.selektovanaTip,"onUpdate:modelValue":s[7]||(s[7]=o=>e.selektovanaTip=o),variant:"x"},{selection:t(({item:o})=>[n("span",ie,d(o.title),1)]),_:1},8,["items","modelValue"])]),_:1}),a(u,{cols:"12",style:{"border-top":"1px solid #bbb","z-index":"999"}},{default:t(()=>[a(b,{"bg-color":"#fffdf9",items:e.opcijePrevoz,modelValue:e.selektovanaPrevoz,"onUpdate:modelValue":s[8]||(s[8]=o=>e.selektovanaPrevoz=o),variant:"x"},{selection:t(({item:o})=>[n("span",le,d(o.title),1)]),_:1},8,["items","modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})),a(v,null,{default:t(()=>[(c(!0),k(T,null,w(e.destinacijeShow,o=>(c(),f(u,{class:"pa-xs-3 pa-sm-4 pa-md-5 pa-lg-6 mb-2 mb-sm-1",key:o.id,cols:"12",md:"6",lg:"4"},{default:t(()=>[a(P,{style:{"text-decoration":"none",color:"inherit"},to:`/destinacija/${e.agencija.naziv}/${o.naziv}`},{default:t(()=>[a(g,{class:"kartica"},{default:t(()=>[a(j,{src:o.slike[0],class:"align-end",gradient:"to bottom, rgba(0,0,0,0.05), rgba(0,0,0,.4)",height:"280px",cover:""},null,8,["src"]),a(F,{class:"kartica_naslov"},{default:t(()=>[(c(!0),k(T,null,w(o.naziv.split(new RegExp(`(${e.pretragaInput})`,"ig")),V=>(c(),k("span",{class:"round",style:M(V.toLowerCase()==e.pretragaInput.toLowerCase()?{"background-color":"#d9d1c1"}:{})},d(V),5))),256))]),_:2},1024),a(B,{class:"kartica_tekst text-capitalize text-left px-5"},{default:t(()=>[o.prevoz=="autobus"?(c(),f(h,{key:0,class:"ikona",size:"30px",icon:"mdi-bus"})):o.prevoz=="sopstveni"?(c(),f(h,{key:1,class:"ikona2",size:"30px",icon:"mdi-car"})):o.prevoz=="avion"?(c(),f(h,{key:2,class:"ikona",size:"30px",icon:"mdi-airplane"})):(c(),f(h,{key:3,class:"ikona",size:"30px",icon:"mdi-train-car"})),N(" "+d(o.prevoz)+" ",1),n("span",ne,d(Math.round(o.cena/117.32))+" \u20AC",1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1}),re]),_:1})]),_:1})]),_:1}),a(I,null,{default:t(()=>[y(a(L,{fab:"",dark:"",fixed:"",bottom:"",right:"",class:"topFab",color:"#bfb7a7",icon:"mdi-arrow-up",onClick:l.toTop},null,8,["onClick"]),[[E,e.fab]])]),_:1})]),_:1}),a(S,{mediaLinks:!1})]),_:1})),[[G,l.check]])}const he=$(Y,[["render",de],["__scopeId","data-v-3ac70492"]]);export{he as default};