import{n as L}from"./AdminBar.9d747660.js";import{_ as U,f as F,h as q,V as h,j as m,i as M,k as N,b as P,ag as K}from"./VMain.c69f6bff.js";import{r as j,q as b,o as V,c as v,w as s,a,s as A,f,t as c,d as O,e as R,F as H,v as w,x as z,b as k,p as G,g as J}from"./index.d94e732b.js";import{S as Y,V as Q}from"./index.048d152a.js";import{V as C,a as r,c as W,b as d}from"./VTextField.2851ea9e.js";import{V as X,b as y,a as Z}from"./VList.1329814c.js";import{V as x}from"./VDialog.e5b5785a.js";import{V as I}from"./VHover.dd05b3a3.js";const _={components:{navigation:L,foote:F},data:()=>({url:"https://top-lista-turista-default-rtdb.europe-west1.firebasedatabase.app",lozinkaShow:!1,addEdit:!0,fab:null,dialog:!1,korisnikBrisanje:null,korisnikBrisanjeID:null,korisnikBrisanjeIndex:null,korisnikMenjanjeID:null,korisnikMenjanjeIndex:null,korisnik:{},korisnici:[],ime:null,prezime:null,username:null,lozinka:null,ulica:null,grad:null,postBroj:null,email:null,telefon:null,datum:null,isFormValid:!1,required:[e=>!!e||"Obavezno polje"],numeric:[e=>/^\d+$/.test(e)||"Mora biti broj"],numericPhone:[e=>/^[\+]?[(]?[0-9]{3}[)]?[-\s\.\\/]?[0-9]{2,6}[-\s\.]?[0-9]{2,6}[-\s\.]?[0-9]{1,6}$/.test(e)||"Neispravan telefon"],emailCheck:[e=>/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(e)||"Neispravan email"],nameCheck:[e=>/^[a-z0-9_-]{2,20}$/.test(e)||"Neispravano korisni\u010Dko ime"],dateCheck:[e=>Date.parse(e)-Date.parse(new Date)<0||"Neispravan datum"],passCheck:[e=>e.length>4||"Nedovoljno jaka lozinka"]}),computed:{zauzetoIme(){return[e=>{let i=this.korisnici.filter(l=>l.username.toLowerCase()==e.toLowerCase()).length,o=!this.addEdit&&this.korisnici.find(l=>l.id===this.korisnikMenjanjeID).username.toLowerCase()==e.toLowerCase()&&i==1;return!i||o||"Korisni\u010Dko ime je zauzeto"}]},zauzetEmail(){return[e=>{let i=this.korisnici.filter(l=>l.email.toLowerCase()==e.toLowerCase()).length,o=!this.addEdit&&this.korisnici.find(l=>l.id===this.korisnikMenjanjeID).email.toLowerCase()==e.toLowerCase()&&i==1;return!i||o||"Email je zauzet"}]}},methods:{async brisanjeKorisnika(){let e,i;try{let o=await fetch(this.url+`/korisnici/${this.korisnikBrisanjeID}.json`,{method:"DELETE"});if(e=o.status,i=o.statusText,!o.ok)throw new Error;this.korisnici.splice(this.korisnikBrisanjeIndex,1)}catch(o){console.log(o),i=`Firebase: ${e}\xA0${i}`;const l="Ooops";this.$router.push({path:"/error",state:e==200?{}:{title:l,message:i}})}},async submit(){let e,i,o;if(this.isFormValid){this.korisnik={ime:this.ime,prezime:this.prezime,email:this.email,lozinka:this.lozinka,adresa:`${this.ulica}, ${this.grad}, ${this.postBroj}`,datumRodjenja:this.datum,telefon:this.telefon,korisnickoIme:this.username};try{let l=await fetch(this.url+(this.addEdit?"/korisnici.json":`/korisnici/${this.korisnikMenjanjeID}.json`),{method:this.addEdit?"POST":"PATCH",body:JSON.stringify(this.korisnik),headers:{"Content-type":"application/json; charset=UTF-8"}});if(e=l.status,i=l.statusText,!l.ok)throw new Error;this.addEdit?this.korisnici.push({id:(await l.json()).name,ime:this.korisnik.ime,prezime:this.korisnik.prezime,email:this.korisnik.email,lozinka:this.korisnik.lozinka,adresa:this.korisnik.adresa,datum:this.korisnik.datumRodjenja,telefon:this.korisnik.telefon,username:this.korisnik.korisnickoIme}):(o=this.korisnici.find(u=>u.id===this.korisnikMenjanjeID),o.ime=this.korisnik.ime,o.prezime=this.korisnik.prezime,o.email=this.korisnik.email,o.lozinka=this.korisnik.lozinka,o.adresa=this.korisnik.adresa,o.datum=this.korisnik.datumRodjenja,o.telefon=this.korisnik.telefon,o.username=this.korisnik.korisnickoIme)}catch(l){console.log(l),i=`Firebase: ${e}\xA0${i}`;const u="Ooops";this.$router.push({path:"/error",state:e==200?{}:{title:u,message:i}})}this.addEdit=!0,this.clear()}},toTop(){window.scrollTo({top:0,behavior:"smooth"})},check(){this.fab=window.pageYOffset>60},async load_korisnici(){let e,i;try{let o=await fetch(this.url+"/korisnici.json");if(e=o.status,i=o.statusText,!o.ok)throw new Error;const l=await o.json(),u=[];for(const n in l)u.push({id:n,ime:l[n].ime,prezime:l[n].prezime,email:l[n].email,lozinka:l[n].lozinka,adresa:l[n].adresa,datum:l[n].datumRodjenja,telefon:l[n].telefon,username:l[n].korisnickoIme});this.korisnici=u}catch(o){console.log(o),i=`Firebase: ${e}\xA0${i}`;const l="Ooops";this.$router.push({path:"/error",state:e==200?{}:{title:l,message:i}})}},popuni(e){this.ime=e.ime,this.prezime=e.prezime,this.username=e.username,this.email=e.email,this.lozinka=e.lozinka,this.ulica=e.adresa.split(",")[0].trim(),this.grad=e.adresa.split(",")[1].trim(),this.postBroj=e.adresa.split(",")[2].trim(),this.telefon=e.telefon,this.datum=e.datum},clear(){this.$refs.forma.resetValidation(),this.$refs.forma.reset()}},beforeMount(){this.load_korisnici()}},$=e=>(G("data-v-923ae346"),e=e(),J(),e),ee=$(()=>k("div",{class:"text-h4 font-weight-bold mb-2"},"Podaci",-1)),ie=$(()=>k("div",{class:"text-h4 font-weight-bold mb-n0 mt-7"}," Korisnici: ",-1)),ae={class:"float-left"},se={class:"d-inline-block text-disabled text-right me-5 me-sm-12",style:{width:"29px","font-family":"monospace !important"}},te={class:""};function le(e,i,o,l,u,n){const D=j("navigation"),E=j("foote");return b((V(),v(q,null,{default:s(()=>[a(D,{color:"secondary",flat:!1}),a(M,null,{default:s(()=>[a(Q,{id:"content_holder_container"},{default:s(()=>[a(h,{id:"content_holder",class:"align-center text-center px-xs-3 px-sm-5 px-md-11"},{default:s(()=>[a(C,{"no-gutters":""},{default:s(()=>[a(r,{cols:"12",md:"7",class:"text-center order-md-last order-first pa-3 ps-3 ps-md-2 ps-lg-4"},{default:s(()=>[a(h,{class:"kartica",width:"100%",variant:"outlined"},{default:s(()=>[a(W,{"model-value":e.isFormValid,"onUpdate:modelValue":i[11]||(i[11]=t=>e.isFormValid=t),onSubmit:i[12]||(i[12]=A(t=>n.submit(),["prevent"])),validate:"blur",ref:"forma",autocomplete:"off"},{default:s(()=>[a(C,{class:"pa-13 pt-7 px-7 px-sm-9 px-md-11 px-lg-13"},{default:s(()=>[a(r,{cols:"12"},{default:s(()=>[ee]),_:1}),a(r,{sm:"6",cols:"12"},{default:s(()=>[a(d,{rules:[e.required].flat(),class:"mb-n4 text-left",variant:"outlined","bg-color":"#fff",label:"Ime",modelValue:e.ime,"onUpdate:modelValue":i[0]||(i[0]=t=>e.ime=t)},null,8,["rules","modelValue"])]),_:1}),a(r,{sm:"6",cols:"12"},{default:s(()=>[a(d,{rules:[e.required].flat(),class:"mb-n4 text-left",variant:"outlined","bg-color":"#fff",label:"Prezime",modelValue:e.prezime,"onUpdate:modelValue":i[1]||(i[1]=t=>e.prezime=t)},null,8,["rules","modelValue"])]),_:1}),a(r,{cols:"12"},{default:s(()=>[a(d,{rules:[e.required].flat(),class:"mb-n4 text-left",variant:"outlined","bg-color":"#fff",label:"Ulica i broj",modelValue:e.ulica,"onUpdate:modelValue":i[2]||(i[2]=t=>e.ulica=t)},null,8,["rules","modelValue"])]),_:1}),a(r,{sm:"7",cols:"12"},{default:s(()=>[a(d,{rules:[e.required].flat(),class:"mb-n4 text-left",variant:"outlined","bg-color":"#fff",label:"Grad",modelValue:e.grad,"onUpdate:modelValue":i[3]||(i[3]=t=>e.grad=t)},null,8,["rules","modelValue"])]),_:1}),a(r,{sm:"5",cols:"12"},{default:s(()=>[a(d,{rules:[e.required,e.numeric].flat(),class:"mb-n4 text-left",variant:"outlined","bg-color":"#fff",label:"Po\u0161tanski broj",modelValue:e.postBroj,"onUpdate:modelValue":i[4]||(i[4]=t=>e.postBroj=t)},null,8,["rules","modelValue"])]),_:1}),a(r,{sm:"6",cols:"12"},{default:s(()=>[a(d,{rules:[e.required,e.dateCheck].flat(),class:"mb-n4 text-left",variant:"outlined","bg-color":"#fff",label:"Datum ro\u0111enja",modelValue:e.datum,"onUpdate:modelValue":i[5]||(i[5]=t=>e.datum=t),type:"date"},null,8,["rules","modelValue"])]),_:1}),a(r,{sm:"6",cols:"12"},{default:s(()=>[a(d,{rules:[e.required,e.numericPhone].flat(),class:"mb-n4 text-left",variant:"outlined","bg-color":"#fff",label:"Telefon",modelValue:e.telefon,"onUpdate:modelValue":i[6]||(i[6]=t=>e.telefon=t)},null,8,["rules","modelValue"])]),_:1}),a(r,{sm:"6",cols:"12"},{default:s(()=>[a(d,{rules:[e.required,e.emailCheck,n.zauzetEmail].flat(),class:"mb-n4 text-left",variant:"outlined","bg-color":"#fff",label:"Email",modelValue:e.email,"onUpdate:modelValue":i[7]||(i[7]=t=>e.email=t)},null,8,["rules","modelValue"])]),_:1}),a(r,{sm:"6",cols:"12"},{default:s(()=>[a(d,{rules:[e.required,e.nameCheck,n.zauzetoIme].flat(),class:"mb-n4 text-left",variant:"outlined","bg-color":"#fff",label:"Korisni\u010Dko ime",modelValue:e.username,"onUpdate:modelValue":i[8]||(i[8]=t=>e.username=t)},null,8,["rules","modelValue"])]),_:1}),a(r,{cols:"12"},{default:s(()=>[a(d,{rules:[e.required,e.passCheck].flat(),class:"mb-n4 text-left",variant:"outlined","bg-color":"#fff",label:"Lozinka",modelValue:e.lozinka,"onUpdate:modelValue":i[9]||(i[9]=t=>e.lozinka=t),autocomplete:"new-password",type:e.lozinkaShow?"text":"password","append-inner-icon":e.lozinkaShow?"mdi-eye":"mdi-eye-off","onClick:appendInner":i[10]||(i[10]=t=>e.lozinkaShow=!e.lozinkaShow)},null,8,["rules","modelValue","type","append-inner-icon"])]),_:1}),a(r,{md:"5",cols:"12","offset-md":"7"},{default:s(()=>[a(m,{type:"submit",class:"bg-white mt-4",style:{"font-weight":"600"},variant:"outlined",width:"100%",height:"44px"},{default:s(()=>[f(c(this.addEdit?"Dodaj":"A\u017Euriraj"),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])]),_:1})]),_:1}),a(r,{cols:"12",md:"5",class:"pe-0 pe-md-2 pe-lg-4"},{default:s(()=>[a(r,{cols:"12",class:"text-center"},{default:s(()=>[a(h,{class:"kartica",variant:"outlined"},{default:s(()=>[ie,a(X,{class:"px-3 px-sm-6 py-13","bg-color":"#fffdf9",lines:"one"},{default:s(()=>[(V(!0),O(H,null,R(e.korisnici,(t,p)=>(V(),v(I,{key:t.id},{default:s(({isHovering:B,props:S})=>[b(a(y,{thickness:"2"},null,512),[[w,p==0]]),a(Z,z(S,{style:{"background-color":B?"#f7f5f1":""}}),{title:s(()=>[k("div",ae,[k("span",se,c(p+1),1),k("span",te,c(t.username),1)])]),append:s(()=>[a(m,{variant:"plain",onClick:g=>{n.popuni(t),e.korisnikMenjanjeID=t.id,e.korisnikMenjanjeIndex=p,e.addEdit=!1},icon:"mdi-pencil"},null,8,["onClick"]),a(I,null,{default:s(({isHovering:g,props:T})=>[a(m,z({icon:"mdi-delete",variant:"plain"},T,{onClick:oe=>{e.dialog=!0,e.korisnikBrisanje=t.username,e.korisnikBrisanjeID=t.id,e.korisnikBrisanjeIndex=p},color:g?"red-darken-1":""}),null,16,["onClick","color"])]),_:2},1024)]),_:2},1040,["style"]),a(y,{thickness:"2"})]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),a(r,{cols:"12",class:"text-center"},{default:s(()=>[a(m,{class:"mb-9 px-11 kartica mt-1",height:"50px",variant:"outlined",prependIcon:"mdi-plus",onClick:i[13]||(i[13]=t=>{n.clear(),e.addEdit=!0})},{default:s(()=>[f(" dodaj novog korisnika ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(N,null,{default:s(()=>[b(a(m,{fab:"",dark:"",fixed:"",bottom:"",right:"",class:"topFab",color:"#bfb7a7",icon:"mdi-arrow-up",onClick:n.toTop},null,8,["onClick"]),[[w,e.fab]])]),_:1}),a(E,{mediaLinks:!1}),a(x,{modelValue:e.dialog,"onUpdate:modelValue":i[16]||(i[16]=t=>e.dialog=t),width:"auto"},{default:s(()=>[a(h,{class:"kartica_dijalog pa-4"},{default:s(()=>[a(P,{class:"text-wrap text-center mb-4 mt-1"},{default:s(()=>[f(" Da li ste sigurni da \u017Eelite da obri\u0161ete korisnika "+c(e.korisnikBrisanje)+"? ",1)]),_:1}),a(K,{class:"justify-center"},{default:s(()=>[a(m,{class:"me-2",style:{"border-radius":"13px"},variant:"text",onClick:i[14]||(i[14]=t=>{n.brisanjeKorisnika(),e.dialog=!1})},{default:s(()=>[f(" Da ")]),_:1}),a(m,{style:{"border-radius":"13px"},variant:"text",onClick:i[15]||(i[15]=t=>e.dialog=!1)},{default:s(()=>[f(" Ne ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})),[[Y,n.check]])}const he=U(_,[["render",le],["__scopeId","data-v-923ae346"]]);export{he as default};
