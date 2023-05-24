import{n as A}from"./AdminBar.3be4c6e5.js";import{_ as E,f as S,h as P,V as h,j as c,i as x,k as L,b as N,ag as R}from"./VMain.ad086986.js";import{r as b,q as v,o as k,c as w,w as s,a as t,s as q,f as m,t as g,d as I,e as M,F as Y,aD as G,v as $,x as y,b as f,p as H,g as J}from"./index.04e8cc8d.js";import{S as K,V as Z}from"./index.103af9d0.js";import{V as z,a as r,c as Q,b as p}from"./VTextField.85814425.js";import{V as W}from"./VFileInput.00cfca5f.js";import{V as X,b as B,a as ee}from"./VList.facf17de.js";import{V as ae}from"./VDialog.52c3c506.js";import{V as C}from"./VHover.9f4b8553.js";import"./VChip.22a06fed.js";const te={components:{navigation:A,foote:S},data:()=>({url:"https://top-lista-turista-default-rtdb.europe-west1.firebasedatabase.app/",fab:null,dialog:!1,disabledBtn:!1,destinacijaBrisanje:null,destinacijaBrisanjeID:null,destinacijaBrisanjeIndex:null,agencijaMenjanjeID:null,agencijaMenjanjeIndex:null,agencija:{},destinacije:[],naziv:null,ulica:null,grad:null,postBroj:null,email:null,telefon:null,osnovana:null,slika:null,slikaURL:null,isFormValid:!1,required:[e=>!!e||"Obavezno polje"],numeric:[e=>/^\d+$/.test(e)||"Mora biti broj"],numericPhone:[e=>/^[\+]?[(]?[0-9]{3}[)]?[-\s\.\\/]?[0-9]{2,6}[-\s\.]?[0-9]{2,6}[-\s\.]?[0-9]{1,6}$/.test(e)||"Neispravan telefon"],numericYear:[e=>+e>=1923&&+e<=new Date().getFullYear()||"Neispravna godina"],emailCheck:[e=>/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(e)||"Neispravan email"],nameCheck:[e=>/^[a-z0-9_-]{2,20}$/.test(e)||"Neispravano korisni\u010Dko ime"],passCheck:[e=>/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(e)||"Nedovoljno jaka lozinka"]}),computed:{fileCheck(){return[e=>!!e&&!!e.length||"Obavezno polje",e=>!!e[0].size||e[0].name==this.agencija.slika||"Neispravan fajl",e=>e[0].name==this.agencija.slika||e[0].size<1e7||"Prevelika slika"]}},methods:{async brisanjeDestinacije(){let e,a;try{let n=await fetch(this.url+`/destinacije/${this.agencija.destinacije}/${this.destinacijaBrisanjeID}.json`,{method:"DELETE"});if(e=n.status,a=n.statusText,!n.ok)throw new Error;this.destinacije.splice(this.destinacijaBrisanjeIndex,1)}catch(n){console.log(n),a=`Firebase: ${e}\xA0${a}`;const i="Ooops";this.$router.push({path:"/error",state:e==200?{}:{title:i,message:a}})}},async uploadImage(){const e=new FormData;return e.append("file",this.slika[0]),e.append("UPLOADCARE_STORE","auto"),e.append("UPLOADCARE_PUB_KEY","5e5635739f48855b98f7"),`https://ucarecdn.com/${(await(await fetch("https://upload.uploadcare.com/base/",{method:"POST",body:e})).json()).file}/${this.slika[0].name}`},async newDestinacije(){let e,a;try{let n=await fetch(this.url+"/destinacije.json",{method:"POST",body:JSON.stringify({}),headers:{"Content-type":"application/json; charset=UTF-8"}});if(e=n.status,a=n.statusText,!n.ok)throw new Error;this.agencija.destinacije=(await n.json()).name}catch(n){console.log(n),a=`Firebase: ${e}\xA0${a}`;const i="Ooops";this.$router.push({path:"/error",state:e==200?{}:{title:i,message:a}})}},async submit(){let e,a;if(this.isFormValid){this.disabledBtn=!0,this.slika&&"size"in this.slika[0]&&(this.slikaURL=await this.uploadImage()),this.$route.params.id||await this.newDestinacije();let n={adresa:`${this.ulica}, ${this.grad}, ${this.postBroj}`,brojTelefona:this.telefon,destinacije:this.agencija.destinacije,email:this.email,godina:this.osnovana,logo:this.slikaURL,naziv:this.naziv};try{let i=await fetch(this.url+(this.$route.params.id?`/agencije/${this.agencija.id}.json`:"/agencije.json"),{method:this.$route.params.id?"PATCH":"POST",body:JSON.stringify(n),headers:{"Content-type":"application/json; charset=UTF-8"}});if(e=i.status,a=i.statusText,!i.ok)throw new Error;if(this.$route.params.id)this.$router.push("/admin_panel/agencije");else{let l=(await i.json()).name;this.disabledBtn=!1,this.agencija.id=l,this.$router.push(`/admin_panel/agencija/${l}`)}}catch(i){console.log(i),a=`Firebase: ${e}\xA0${a}`;const l="Ooops";this.$router.push({path:"/error",state:e==200?{}:{title:l,message:a}})}}},toTop(){window.scrollTo({top:0,behavior:"smooth"})},check(){this.fab=window.pageYOffset>60},async load_agencije(){let e,a;try{let n=await fetch(this.url+"/agencije.json");if(e=n.status,a=n.statusText,!n.ok)throw new Error;const i=await n.json();for(const l in i)if(l==this.$route.params.id){this.agencija={id:l,naziv:i[l].naziv,email:i[l].email,adresa:i[l].adresa,osnovana:i[l].godina,telefon:i[l].brojTelefona,destinacije:i[l].destinacije,slika:i[l].logo.split("/").pop(),slikaURL:i[l].logo},this.naziv=this.agencija.naziv,this.ulica=this.agencija.adresa.split(",")[0].trim(),this.grad=this.agencija.adresa.split(",")[1].trim(),this.postBroj=this.agencija.adresa.split(",")[2].trim(),this.email=this.agencija.email,this.telefon=this.agencija.telefon,this.osnovana=this.agencija.osnovana,this.slika=[{name:this.agencija.slika}],this.slikaURL=this.agencija.slikaURL;break}this.agencija.ulica=this.agencija.adresa.split(",")[0],this.load_destinacije(this.agencija.destinacije)}catch(n){console.log(n),a=`Firebase: ${e}\xA0${a}`;const i="Ooops";this.$router.push({path:"/error",state:e==200?{}:{title:i,message:a}})}},async load_destinacije(e){let a,n;try{let i=await fetch(this.url+"/destinacije.json");if(a=i.status,n=i.statusText,!i.ok)throw new Error;const l=await i.json(),u=[];console.log(l),console.log(e);for(const d in l[e])u.push({id:d,tip:l[e][d].tip,opis:l[e][d].opis,cena:l[e][d].cena,naziv:l[e][d].naziv,slike:l[e][d].slike,prevoz:l[e][d].prevoz,maxOsoba:l[e][d].maxOsoba});this.destinacije=u}catch(i){console.log(i),n=`Firebase: ${a}\xA0${n}`;const l="Ooops";this.$router.push({path:"/error",state:a==200?{}:{title:l,message:n}})}}},beforeMount(){this.$route.params.id&&this.load_agencije()}},T=e=>(H("data-v-6ec520dc"),e=e(),J(),e),se=T(()=>f("div",{class:"text-h4 font-weight-bold mb-2"},"Podaci",-1)),ie=T(()=>f("div",{class:"text-h4 font-weight-bold mb-n0 mt-7"}," Destinacije: ",-1)),le={class:"float-left"},oe={class:"d-inline-block text-disabled text-right me-5 me-sm-12",style:{width:"29px","font-family":"monospace !important"}},ne={class:""};function re(e,a,n,i,l,u){const d=b("navigation"),V=b("router-link"),D=b("foote");return v((k(),w(P,null,{default:s(()=>[t(d,{color:"secondary",flat:!1}),t(x,null,{default:s(()=>[t(Z,{id:"content_holder_container"},{default:s(()=>[t(h,{id:"content_holder",class:"align-center text-center px-xs-3 px-sm-5 px-md-11"},{default:s(()=>[t(z,{"no-gutters":""},{default:s(()=>[t(r,{cols:"12",md:"6",class:"text-center order-md-last order-first pa-3 ps-3 ps-md-2 ps-lg-4"},{default:s(()=>[t(h,{class:"kartica",width:"100%",variant:"outlined"},{default:s(()=>[t(Q,{"model-value":e.isFormValid,"onUpdate:modelValue":a[8]||(a[8]=o=>e.isFormValid=o),onSubmit:a[9]||(a[9]=q(o=>u.submit(),["prevent"])),validate:"blur",ref:"forma",autocomplete:"off"},{default:s(()=>[t(z,{class:"pa-13 pt-7 px-7 px-sm-9 px-md-11 px-lg-13"},{default:s(()=>[t(r,null,{default:s(()=>[se]),_:1}),t(r,{cols:"12"},{default:s(()=>[t(p,{rules:e.required,class:"mb-n4 text-left",variant:"outlined","bg-color":"#fff",label:"Naziv agencije",modelValue:e.naziv,"onUpdate:modelValue":a[0]||(a[0]=o=>e.naziv=o)},null,8,["rules","modelValue"])]),_:1}),t(r,{cols:"12"},{default:s(()=>[t(p,{rules:e.required,class:"mb-n4 text-left",variant:"outlined","bg-color":"#fff",label:"Ulica i broj",modelValue:e.ulica,"onUpdate:modelValue":a[1]||(a[1]=o=>e.ulica=o)},null,8,["rules","modelValue"])]),_:1}),t(r,{md:"7",cols:"12"},{default:s(()=>[t(p,{rules:e.required,class:"mb-n4 text-left",variant:"outlined","bg-color":"#fff",label:"Grad",modelValue:e.grad,"onUpdate:modelValue":a[2]||(a[2]=o=>e.grad=o)},null,8,["rules","modelValue"])]),_:1}),t(r,{md:"5",cols:"12"},{default:s(()=>[t(p,{rules:[e.required,e.numeric].flat(),class:"mb-n4 text-left",variant:"outlined","bg-color":"#fff",label:"Po\u0161tanski broj",modelValue:e.postBroj,"onUpdate:modelValue":a[3]||(a[3]=o=>e.postBroj=o)},null,8,["rules","modelValue"])]),_:1}),t(r,{cols:"12"},{default:s(()=>[t(p,{rules:[e.required,e.emailCheck].flat(),class:"mb-n4 text-left",variant:"outlined","bg-color":"#fff",label:"Email",modelValue:e.email,"onUpdate:modelValue":a[4]||(a[4]=o=>e.email=o)},null,8,["rules","modelValue"])]),_:1}),t(r,{cols:"12"},{default:s(()=>[t(p,{rules:[e.required,e.numericPhone].flat(),class:"mb-n4 text-left",variant:"outlined","bg-color":"#fff",label:"Telefon",modelValue:e.telefon,"onUpdate:modelValue":a[5]||(a[5]=o=>e.telefon=o)},null,8,["rules","modelValue"])]),_:1}),t(r,{md:"5",cols:"12"},{default:s(()=>[t(p,{rules:[e.required,e.numeric,e.numericYear].flat(),class:"mb-n4 text-left",variant:"outlined","bg-color":"#fff",label:"Godina osnivanja",modelValue:e.osnovana,"onUpdate:modelValue":a[6]||(a[6]=o=>e.osnovana=o)},null,8,["rules","modelValue"])]),_:1}),t(r,{md:"7",cols:"12"},{default:s(()=>[t(W,{rules:u.fileCheck,class:"mb-n4 text-left",variant:"outlined","bg-color":"#fff",label:"Slika",modelValue:e.slika,"onUpdate:modelValue":a[7]||(a[7]=o=>e.slika=o),accept:"image/*","prepend-icon":"","prepend-inner-icon":"mdi-paperclip"},null,8,["rules","modelValue"])]),_:1}),t(r,{md:"5",cols:"12","offset-md":"7"},{default:s(()=>[t(c,{type:"submit",class:"bg-white mt-4",style:{"font-weight":"600"},variant:"outlined",width:"100%",height:"44px",disabled:e.disabledBtn},{default:s(()=>[m(g(this.$route.params.id?"A\u017Euriraj":"Dodaj"),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["model-value"])]),_:1})]),_:1}),t(r,{cols:"12",md:"6",class:"pe-0 pe-md-2 pe-lg-4"},{default:s(()=>[t(r,{cols:"12",class:"text-center"},{default:s(()=>[t(h,{class:"kartica",variant:"outlined"},{default:s(()=>[ie,t(X,{class:"px-3 px-sm-6 py-13","bg-color":"#fffdf9",lines:"one"},{default:s(()=>[(k(!0),I(Y,null,M(e.destinacije,(o,j)=>(k(),w(C,{key:o.id},{default:s(({isHovering:U,props:_})=>[v(t(B,{thickness:"2"},null,512),[[$,j==0]]),t(ee,y(_,{style:{"background-color":U?"#f7f5f1":""}}),{title:s(()=>[f("div",le,[f("span",oe,g(j+1),1),f("span",ne,g(o.naziv),1)])]),append:s(()=>[t(V,{style:{"text-decoration":"none",color:"inherit"},to:`/admin_panel/destinacija/${e.agencija.destinacije}/${o.id}`},{default:s(()=>[t(c,{variant:"plain",icon:"mdi-pencil"})]),_:2},1032,["to"]),t(C,null,{default:s(({isHovering:F,props:O})=>[t(c,y({icon:"mdi-delete",variant:"plain"},O,{onClick:de=>{e.dialog=!0,e.destinacijaBrisanje=o.naziv,e.destinacijaBrisanjeID=o.id,e.destinacijaBrisanjeIndex=j},color:F?"red-darken-1":""}),null,16,["onClick","color"])]),_:2},1024)]),_:2},1040,["style"]),t(B,{thickness:"2"})]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),t(r,{cols:"12",class:"text-center"},{default:s(()=>[t(V,{style:G([this.$route.params.id?{}:{pointerEvents:"none",opacity:.5},{"text-decoration":"none",color:"inherit"}]),to:"/admin_panel/destinacija/"+e.agencija.destinacije},{default:s(()=>[t(c,{class:"mb-9 px-11 kartica mt-1",height:"50px",variant:"outlined",prependIcon:"mdi-plus"},{default:s(()=>[m(" dodaj novu destinaciju ")]),_:1})]),_:1},8,["style","to"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(L,null,{default:s(()=>[v(t(c,{fab:"",dark:"",fixed:"",bottom:"",right:"",class:"topFab",color:"#bfb7a7",icon:"mdi-arrow-up",onClick:u.toTop},null,8,["onClick"]),[[$,e.fab]])]),_:1}),t(D,{mediaLinks:!1}),t(ae,{modelValue:e.dialog,"onUpdate:modelValue":a[12]||(a[12]=o=>e.dialog=o),width:"auto"},{default:s(()=>[t(h,{class:"kartica_dijalog pa-4"},{default:s(()=>[t(N,{class:"text-wrap text-center mb-4 mt-1"},{default:s(()=>[m(" Da li ste sigurni da \u017Eelite da obri\u0161ete destinaciju "+g(e.destinacijaBrisanje)+"? ",1)]),_:1}),t(R,{class:"justify-center"},{default:s(()=>[t(c,{class:"me-2",style:{"border-radius":"13px"},variant:"text",onClick:a[10]||(a[10]=o=>{e.dialog=!1,u.brisanjeDestinacije()})},{default:s(()=>[m(" Da ")]),_:1}),t(c,{style:{"border-radius":"13px"},variant:"text",onClick:a[11]||(a[11]=o=>e.dialog=!1)},{default:s(()=>[m(" Ne ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})),[[K,u.check]])}const ke=E(te,[["render",re],["__scopeId","data-v-6ec520dc"]]);export{ke as default};
