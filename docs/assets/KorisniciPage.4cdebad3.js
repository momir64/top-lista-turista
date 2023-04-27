import{n as I}from"./AdminBar.a2f714ea.js";import{_ as T,f as P,h as E,V as p,j as u,i as F,k as A,b as L,ag as K}from"./VMain.95753a85.js";import{r as v,q as k,o as V,c as w,w as a,a as l,s as M,f as m,t as b,d as O,e as R,F as G,v as j,x as z,b as f,p as H,g as Y}from"./index.00a3e580.js";import{S as J,V as Q}from"./index.78641151.js";import{V as C,a as s,c as W,b as r}from"./VTextField.0b6e96d5.js";import{V as X,b as y,a as Z}from"./VList.bc940a3e.js";import{V as _}from"./VDialog.0d065938.js";import{V as S}from"./VHover.7806badf.js";const x={components:{navigation:I,foote:P},data:()=>({url:"https://top-lista-turista-default-rtdb.europe-west1.firebasedatabase.app",lozinkaShow:!1,addEdit:!0,fab:null,dialog:!1,korisnikBrisanje:null,korisnik:{},korisnici:[],ime:null,prezime:null,username:null,lozinka:null,ulica:null,grad:null,postBroj:null,email:null,telefon:null,datum:null,required:[e=>!!e||"Obavezno polje"],numeric:[e=>/^\d+$/.test(e)||"Mora biti broj"],numericPhone:[e=>/^[\+]?[(]?[0-9]{3}[)]?[-\s\.\\/]?[0-9]{2,6}[-\s\.]?[0-9]{2,6}[-\s\.]?[0-9]{1,6}$/.test(e)||"Neispravan telefon"],emailCheck:[e=>/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(e)||"Neispravan email"],nameCheck:[e=>/^[a-z0-9_-]{2,20}$/.test(e)||"Neispravano korisni\u010Dko ime"],dateCheck:[e=>Date.parse(e)-Date.parse(new Date)<0||"Neispravan datum"],passCheck:[e=>e.length>4||"Nedovoljno jaka lozinka"]}),computed:{fileCheck(){return[e=>!!e&&!!e.length||"Obavezno polje",e=>!!e[0].size&&!!e[0].size||e[0].name==this.korisnik.slika||"Neispravan fajl"]}},methods:{toTop(){window.scrollTo({top:0,behavior:"smooth"})},check(){this.fab=window.pageYOffset>60},async load_korisnici(){let e,o;try{let d=await fetch(this.url+"/korisnici.json");if(e=d.status,o=d.statusText,!d.ok)throw new Error;const n=await d.json(),c=[];for(const i in n)c.push({id:i,ime:n[i].ime,prezime:n[i].prezime,email:n[i].email,lozinka:n[i].lozinka,adresa:n[i].adresa,datum:n[i].datumRodjenja,telefon:n[i].telefon,username:n[i].korisnickoIme});this.korisnici=c}catch(d){console.log(d),o=`Firebase: ${e}\xA0${o}`;const n="Ooops";this.$router.push({path:"/error",state:e==200?{}:{title:n,message:o}})}},popuni(e){this.ime=e.ime,this.prezime=e.prezime,this.username=e.username,this.email=e.email,this.lozinka=e.lozinka,this.ulica=e.adresa.split(",")[0].trim(),this.grad=e.adresa.split(",")[1].trim(),this.postBroj=e.adresa.split(",")[2].trim(),this.telefon=e.telefon,this.datum=e.datum},clear(){this.$refs.forma.resetValidation(),this.$refs.forma.reset()}},beforeMount(){this.load_korisnici()}},$=e=>(H("data-v-bffa1bd9"),e=e(),Y(),e),ee=$(()=>f("div",{class:"text-h4 font-weight-bold mb-2"},"Podaci",-1)),le=$(()=>f("div",{class:"text-h4 font-weight-bold mb-n0 mt-7"}," Korisnici: ",-1)),ae={class:"float-left"},oe={class:"d-inline-block text-disabled text-right me-5 me-sm-12",style:{width:"29px","font-family":"monospace !important"}},te={class:""};function se(e,o,d,n,c,i){const q=v("navigation"),B=v("foote");return k((V(),w(E,null,{default:a(()=>[l(q,{color:"secondary",flat:!1}),l(F,null,{default:a(()=>[l(Q,{id:"content_holder_container"},{default:a(()=>[l(p,{id:"content_holder",class:"align-center text-center px-xs-3 px-sm-5 px-md-11"},{default:a(()=>[l(C,{"no-gutters":""},{default:a(()=>[l(s,{cols:"12",md:"7",class:"text-center order-md-last order-first pa-3 ps-3 ps-md-2 ps-lg-4"},{default:a(()=>[l(p,{class:"kartica",width:"100%",variant:"outlined"},{default:a(()=>[l(W,{onSubmit:M(e.nekafunkcija,["prevent"]),validate:"blur",ref:"forma",autocomplete:"off"},{default:a(()=>[l(C,{class:"pa-13 pt-7 px-7 px-sm-9 px-md-11 px-lg-13"},{default:a(()=>[l(s,{cols:"12"},{default:a(()=>[ee]),_:1}),l(s,{sm:"6",cols:"12"},{default:a(()=>[l(r,{rules:[e.required].flat(),class:"mb-n4 text-left",variant:"outlined","bg-color":"#fff",label:"Ime",modelValue:e.ime,"onUpdate:modelValue":o[0]||(o[0]=t=>e.ime=t)},null,8,["rules","modelValue"])]),_:1}),l(s,{sm:"6",cols:"12"},{default:a(()=>[l(r,{rules:[e.required].flat(),class:"mb-n4 text-left",variant:"outlined","bg-color":"#fff",label:"Prezime",modelValue:e.prezime,"onUpdate:modelValue":o[1]||(o[1]=t=>e.prezime=t)},null,8,["rules","modelValue"])]),_:1}),l(s,{cols:"12"},{default:a(()=>[l(r,{rules:[e.required].flat(),class:"mb-n4 text-left",variant:"outlined","bg-color":"#fff",label:"Ulica i broj",modelValue:e.ulica,"onUpdate:modelValue":o[2]||(o[2]=t=>e.ulica=t)},null,8,["rules","modelValue"])]),_:1}),l(s,{sm:"7",cols:"12"},{default:a(()=>[l(r,{rules:[e.required].flat(),class:"mb-n4 text-left",variant:"outlined","bg-color":"#fff",label:"Grad",modelValue:e.grad,"onUpdate:modelValue":o[3]||(o[3]=t=>e.grad=t)},null,8,["rules","modelValue"])]),_:1}),l(s,{sm:"5",cols:"12"},{default:a(()=>[l(r,{rules:[e.required,e.numeric].flat(),class:"mb-n4 text-left",variant:"outlined","bg-color":"#fff",label:"Po\u0161tanski broj",modelValue:e.postBroj,"onUpdate:modelValue":o[4]||(o[4]=t=>e.postBroj=t)},null,8,["rules","modelValue"])]),_:1}),l(s,{sm:"6",cols:"12"},{default:a(()=>[l(r,{rules:[e.required,e.dateCheck].flat(),class:"mb-n4 text-left",variant:"outlined","bg-color":"#fff",label:"Datum ro\u0111enja",modelValue:e.datum,"onUpdate:modelValue":o[5]||(o[5]=t=>e.datum=t),type:"date"},null,8,["rules","modelValue"])]),_:1}),l(s,{sm:"6",cols:"12"},{default:a(()=>[l(r,{rules:[e.required,e.numericPhone].flat(),class:"mb-n4 text-left",variant:"outlined","bg-color":"#fff",label:"Telefon",modelValue:e.telefon,"onUpdate:modelValue":o[6]||(o[6]=t=>e.telefon=t)},null,8,["rules","modelValue"])]),_:1}),l(s,{sm:"6",cols:"12"},{default:a(()=>[l(r,{rules:[e.required,e.emailCheck].flat(),class:"mb-n4 text-left",variant:"outlined","bg-color":"#fff",label:"Email",modelValue:e.email,"onUpdate:modelValue":o[7]||(o[7]=t=>e.email=t)},null,8,["rules","modelValue"])]),_:1}),l(s,{sm:"6",cols:"12"},{default:a(()=>[l(r,{rules:[e.required,e.nameCheck].flat(),class:"mb-n4 text-left",variant:"outlined","bg-color":"#fff",label:"Korisni\u010Dko ime",modelValue:e.username,"onUpdate:modelValue":o[8]||(o[8]=t=>e.username=t)},null,8,["rules","modelValue"])]),_:1}),l(s,{cols:"12"},{default:a(()=>[l(r,{rules:[e.required,e.passCheck].flat(),class:"mb-n4 text-left",variant:"outlined","bg-color":"#fff",label:"Lozinka",modelValue:e.lozinka,"onUpdate:modelValue":o[9]||(o[9]=t=>e.lozinka=t),autocomplete:"new-password",type:e.lozinkaShow?"text":"password","append-inner-icon":e.lozinkaShow?"mdi-eye":"mdi-eye-off","onClick:appendInner":o[10]||(o[10]=t=>e.lozinkaShow=!e.lozinkaShow)},null,8,["rules","modelValue","type","append-inner-icon"])]),_:1}),l(s,{md:"5",cols:"12","offset-md":"7"},{default:a(()=>[l(u,{type:"submit",class:"bg-white mt-4",style:{"font-weight":"600"},variant:"outlined",width:"100%",height:"44px"},{default:a(()=>[m(b(this.addEdit?"Dodaj":"A\u017Euriraj"),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1}),l(s,{cols:"12",md:"5",class:"pe-0 pe-md-2 pe-lg-4"},{default:a(()=>[l(s,{cols:"12",class:"text-center"},{default:a(()=>[l(p,{class:"kartica",variant:"outlined"},{default:a(()=>[le,l(X,{class:"px-3 px-sm-6 py-13","bg-color":"#fffdf9",lines:"one"},{default:a(()=>[(V(!0),O(G,null,R(e.korisnici,(t,g)=>(V(),w(S,{key:t.id},{default:a(({isHovering:U,props:D})=>[k(l(y,{thickness:"2"},null,512),[[j,g==0]]),l(Z,z(D,{style:{"background-color":U?"#f7f5f1":""}}),{title:a(()=>[f("div",ae,[f("span",oe,b(g+1),1),f("span",te,b(t.username),1)])]),append:a(()=>[l(u,{variant:"plain",onClick:h=>{i.popuni(t),e.addEdit=!1},icon:"mdi-pencil"},null,8,["onClick"]),l(S,null,{default:a(({isHovering:h,props:N})=>[l(u,z({icon:"mdi-delete",variant:"plain"},N,{onClick:ie=>{e.dialog=!0,e.korisnikBrisanje=t.username},color:h?"red-darken-1":""}),null,16,["onClick","color"])]),_:2},1024)]),_:2},1040,["style"]),l(y,{thickness:"2"})]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),l(s,{cols:"12",class:"text-center"},{default:a(()=>[l(u,{class:"mb-9 px-11 kartica mt-1",height:"50px",variant:"outlined",prependIcon:"mdi-plus",onClick:o[11]||(o[11]=t=>{i.clear(),e.addEdit=!0})},{default:a(()=>[m(" dodaj novog korisnika ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(A,null,{default:a(()=>[k(l(u,{fab:"",dark:"",fixed:"",bottom:"",right:"",class:"topFab",color:"#bfb7a7",icon:"mdi-arrow-up",onClick:i.toTop},null,8,["onClick"]),[[j,e.fab]])]),_:1}),l(B,{mediaLinks:!1}),l(_,{modelValue:e.dialog,"onUpdate:modelValue":o[14]||(o[14]=t=>e.dialog=t),width:"auto"},{default:a(()=>[l(p,{class:"kartica_dijalog pa-4"},{default:a(()=>[l(L,{class:"text-wrap text-center mb-4 mt-1"},{default:a(()=>[m(" Da li ste sigurni da \u017Eelite da obri\u0161ete korisnika "+b(e.korisnikBrisanje)+"? ",1)]),_:1}),l(K,{class:"justify-center"},{default:a(()=>[l(u,{class:"me-2",style:{"border-radius":"13px"},variant:"text",onClick:o[12]||(o[12]=t=>{e.dialog=!1,e.brisanjeAgencije()})},{default:a(()=>[m(" Da ")]),_:1}),l(u,{style:{"border-radius":"13px"},variant:"text",onClick:o[13]||(o[13]=t=>e.dialog=!1)},{default:a(()=>[m(" Ne ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})),[[J,i.check]])}const ce=T(x,[["render",se],["__scopeId","data-v-bffa1bd9"]]);export{ce as default};
