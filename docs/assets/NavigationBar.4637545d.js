import{o as d,c as u,w as o,a,s as z,q as I,b as g,v as U,x as p,f as k,p as L,g as N,r as y,y as q}from"./index.395a7d4a.js";import{_ as C,j as f,V,l as w,a as c,m as B,n as F,o as j,p as P}from"./VMain.bb3aa9c0.js";import{c as $,V as b,a as s,b as m}from"./VTextField.d47620c9.js";import{V as R}from"./VDialog.2635539c.js";const T={data:()=>({url:"https://top-lista-turista-default-rtdb.europe-west1.firebasedatabase.app/",korisnici:[],loginError:!1,lozinkaShow:!1,lozinkaShow2:!1,registracijaShow:!1,loginEmail:null,loginLozinka:null,ime:null,prezime:null,datum:null,korIme:null,lozinka:null,email:null,telefon:null,ulica:null,grad:null,postBroj:null,isFormValid:null,required:[e=>!!e||"Obavezno polje"],numeric:[e=>/^\d+$/.test(e)||"Mora biti broj"],numericPhone:[e=>/^[\+]?[(]?[0-9]{3}[)]?[-\s\.\\/]?[0-9]{2,6}[-\s\.]?[0-9]{2,6}[-\s\.]?[0-9]{1,6}$/.test(e)||"Neispravan telefon"],emailCheck:[e=>/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(e)||"Neispravan email"],nameCheck:[e=>/^[a-z0-9_-]{2,20}$/.test(e)||"Neispravano korisni\u010Dko ime"],dateCheck:[e=>Date.parse(e)-Date.parse(new Date)<0||"Neispravan datum"],passCheck:[e=>/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(e)||"Nedovoljno jaka lozinka"]}),computed:{zauzetoIme(){return[e=>!this.korisnici.filter(l=>l.username.toLowerCase()==e.toLowerCase()).length||"Korisni\u010Dko ime je zauzeto"]},zauzetEmail(){return[e=>!this.korisnici.filter(l=>l.email.toLowerCase()==e.toLowerCase()).length||"Email je zauzet"]}},methods:{prijava(){const e=!this.loginEmail||!this.loginLozinka||!this.loginEmail.trim().length||!this.loginLozinka.trim().length;this.loginEmail=="admin"&&this.loginLozinka=="admin"?this.$router.push("/admin_panel"):(this.loginError=e||!this.korisnici.some(l=>(l.email==this.loginEmail||l.username==this.loginEmail)&&l.lozinka==this.loginLozinka),this.loginError||this.$emit("close"),this.loginEmail="",this.loginLozinka="")},async registracija(){let e,l;if(this.isFormValid){this.korisnik={ime:this.ime,prezime:this.prezime,email:this.email,lozinka:this.lozinka,adresa:`${this.ulica}, ${this.grad}, ${this.postBroj}`,datumRodjenja:this.datum,telefon:this.telefon,korisnickoIme:this.korIme};try{let t=await fetch(this.url+"/korisnici.json",{method:"POST",body:JSON.stringify(this.korisnik),headers:{"Content-type":"application/json; charset=UTF-8"}});if(e=t.status,l=t.statusText,!t.ok)throw new Error;this.registracijaShow=!1}catch(t){console.log(t),l=`Firebase: ${e}\xA0${l}`;const n="Ooops";this.$router.push({path:"/error",state:e==200?{}:{title:n,message:l}})}}},async load_korisnici(){let e,l;try{let t=await fetch(this.url+"/korisnici.json");if(e=t.status,l=t.statusText,!t.ok)throw new Error;const n=await t.json(),h=[];for(const r in n)h.push({id:r,ime:n[r].ime,prezime:n[r].prezime,email:n[r].email,lozinka:n[r].lozinka,adresa:n[r].adresa,datum:n[r].datumRodjenja,telefon:n[r].telefon,username:n[r].korisnickoIme});this.korisnici=h}catch(t){console.log(t),l=`Firebase: ${e}\xA0${l}`;const n="Ooops";this.$router.push({path:"/error",state:e==200?{}:{title:n,message:l}})}}},created(){this.load_korisnici()}},S=e=>(L("data-v-b21f163c"),e=e(),N(),e),A={style:{width:"100%"},class:"text-center position-absolute text-red-darken-2 mt-err"},D=S(()=>g("div",{class:"text-center font-weight-bold text-h4 mt-2 mb-5"}," Prijava ",-1)),O={class:"text-center mb-6"},x=S(()=>g("div",{class:"text-center font-weight-bold text-h4 mt-2 mb-8"}," Registracija ",-1));function X(e,l,t,n,h,r){return e.registracijaShow?(d(),u(V,{key:1,class:"kartica_registracija",height:"100%"},{default:o(()=>[a($,{"model-value":e.isFormValid,"onUpdate:modelValue":l[20]||(l[20]=i=>e.isFormValid=i),onSubmit:l[21]||(l[21]=z(i=>r.registracija(),["prevent"])),validate:"blur",ref:"forma",autocomplete:"off"},{default:o(()=>[a(b,{justify:"center",class:"mb-3","no-gutters":""},{default:o(()=>[a(s,{cols:"12",class:"mb-n1"},{default:o(()=>[a(f,p({fab:"",icon:"mdi-close",class:"float-right mt-2 mr-2"},e.props,{size:"30px",variant:"plain",onClick:l[7]||(l[7]=i=>e.$emit("close"))}),null,16),a(f,p({fab:"",icon:"mdi-arrow-left",class:"mt-2 ml-2"},e.props,{size:"30px",variant:"plain",onClick:l[8]||(l[8]=i=>e.registracijaShow=!1)}),null,16)]),_:1}),a(s,{cols:"12"},{default:o(()=>[x]),_:1}),a(s,{cols:"12",sm:"4"},{default:o(()=>[a(m,{rules:[e.required].flat(),class:"mx-4 mx-sm-2 mx-md-3 my-2 my-sm-1 ml-sm-4 ml-md-8",variant:"outlined","bg-color":"#fffdf9",label:"Ime",modelValue:e.ime,"onUpdate:modelValue":l[9]||(l[9]=i=>e.ime=i)},null,8,["rules","modelValue"])]),_:1}),a(s,{cols:"12",sm:"4"},{default:o(()=>[a(m,{rules:[e.required].flat(),class:"mx-4 mx-sm-2 mx-md-3 my-2 my-sm-1",variant:"outlined","bg-color":"#fffdf9",label:"Prezime",modelValue:e.prezime,"onUpdate:modelValue":l[10]||(l[10]=i=>e.prezime=i)},null,8,["rules","modelValue"])]),_:1}),a(s,{cols:"12",sm:"4"},{default:o(()=>[a(m,{rules:[e.required,e.dateCheck].flat(),class:"mx-4 mx-sm-2 mx-md-3 my-2 my-sm-1 mr-sm-4 mr-md-8",variant:"outlined","bg-color":"#fffdf9",label:"Datum ro\u0111enja",modelValue:e.datum,"onUpdate:modelValue":l[11]||(l[11]=i=>e.datum=i),type:"date"},null,8,["rules","modelValue"])]),_:1}),a(s,{cols:"12",sm:"6"},{default:o(()=>[a(m,{rules:[e.required,e.nameCheck,r.zauzetoIme].flat(),class:"mx-4 mx-sm-2 mx-md-3 my-2 my-sm-1 ml-sm-4 ml-md-8",variant:"outlined","bg-color":"#fffdf9",label:"Korisni\u010Dko ime",modelValue:e.korIme,"onUpdate:modelValue":l[12]||(l[12]=i=>e.korIme=i)},null,8,["rules","modelValue"])]),_:1}),a(s,{cols:"12",sm:"6"},{default:o(()=>[a(m,{rules:[e.required,e.passCheck].flat(),class:"mx-4 mx-sm-2 mx-md-3 my-2 my-sm-1 mr-sm-4 mr-md-8",variant:"outlined","bg-color":"#fffdf9",label:"Lozinka",modelValue:e.lozinka,"onUpdate:modelValue":l[13]||(l[13]=i=>e.lozinka=i),autocomplete:"new-password",type:e.lozinkaShow2?"text":"password","append-inner-icon":e.lozinkaShow2?"mdi-eye":"mdi-eye-off","onClick:appendInner":l[14]||(l[14]=i=>e.lozinkaShow2=!e.lozinkaShow2)},null,8,["rules","modelValue","type","append-inner-icon"])]),_:1}),a(s,{cols:"12",sm:"6"},{default:o(()=>[a(m,{rules:[e.required,e.emailCheck,r.zauzetEmail].flat(),class:"mx-4 mx-sm-2 mx-md-3 my-2 my-sm-1 ml-sm-4 ml-md-8",variant:"outlined","bg-color":"#fffdf9",label:"Email",modelValue:e.email,"onUpdate:modelValue":l[15]||(l[15]=i=>e.email=i)},null,8,["rules","modelValue"])]),_:1}),a(s,{cols:"12",sm:"6"},{default:o(()=>[a(m,{rules:[e.required,e.numericPhone].flat(),class:"mx-4 mx-sm-2 mx-md-3 my-2 my-sm-1 mr-sm-4 mr-md-8",variant:"outlined","bg-color":"#fffdf9",label:"Telefon",modelValue:e.telefon,"onUpdate:modelValue":l[16]||(l[16]=i=>e.telefon=i)},null,8,["rules","modelValue"])]),_:1}),a(s,{cols:"12",sm:"5"},{default:o(()=>[a(m,{rules:[e.required].flat(),class:"mx-4 mx-sm-2 mx-md-3 my-2 my-sm-1 ml-sm-4 ml-md-8",variant:"outlined","bg-color":"#fffdf9",label:"Ulica i broj",modelValue:e.ulica,"onUpdate:modelValue":l[17]||(l[17]=i=>e.ulica=i)},null,8,["rules","modelValue"])]),_:1}),a(s,{cols:"12",sm:"4"},{default:o(()=>[a(m,{rules:[e.required].flat(),class:"mx-4 mx-sm-2 mx-md-3 my-2 my-sm-1",variant:"outlined","bg-color":"#fffdf9",label:"Grad",modelValue:e.grad,"onUpdate:modelValue":l[18]||(l[18]=i=>e.grad=i)},null,8,["rules","modelValue"])]),_:1}),a(s,{cols:"12",sm:"3"},{default:o(()=>[a(m,{rules:[e.required,e.numeric].flat(),class:"mx-4 mx-sm-2 mx-md-3 my-2 my-sm-1 mr-sm-4 mr-md-8",variant:"outlined","bg-color":"#fffdf9",label:"Po\u0161tanski broj",modelValue:e.postBroj,"onUpdate:modelValue":l[19]||(l[19]=i=>e.postBroj=i)},null,8,["rules","modelValue"])]),_:1})]),_:1}),a(b,{justify:"center","justify-sm":"end","no-gutters":""},{default:o(()=>[a(s,{cols:"5",sm:"3",class:"mt-3 mt-sm-2 mx-sm-3 mr-sm-8 mb-12 mb-sm-8"},{default:o(()=>[a(f,{type:"submit",variant:"outlined",width:"100%",height:"40px"},{default:o(()=>[k(" Registruj se ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])]),_:1})):(d(),u(V,p({key:0,class:"kartica_prijava",height:"500px"},e.registracijaShow),{default:o(()=>[a($,{onSubmit:z(r.prijava,["prevent"]),style:{height:"100%"}},{default:o(()=>[a(b,{justify:"center",class:"mb-3",style:{height:"100%"}},{default:o(()=>[a(s,{cols:"12",class:"mb-n1"},{default:o(()=>[I(g("div",A," Neispravan e-mail ili lozinka! ",512),[[U,e.loginError]]),a(f,p({fab:"",icon:"mdi-close",class:"float-right mt-2 mr-2"},e.props,{size:"30px",variant:"plain",onClick:l[0]||(l[0]=i=>e.$emit("close"))}),null,16)]),_:1}),a(s,{cols:"12"},{default:o(()=>[D]),_:1}),a(s,{cols:"12"},{default:o(()=>[a(m,{modelValue:e.loginEmail,"onUpdate:modelValue":l[1]||(l[1]=i=>e.loginEmail=i),"bg-color":"#fffdf9",variant:"outlined",label:"E-mail ili korisni\u010Dko ime",class:"mx-6 mx-sm-10 mb-n8 mt-0","onUpdate:focused":l[2]||(l[2]=i=>e.loginError=!1)},null,8,["modelValue"])]),_:1}),a(s,{cols:"12",class:"mt-n2 mb-0"},{default:o(()=>[a(m,{modelValue:e.loginLozinka,"onUpdate:modelValue":l[3]||(l[3]=i=>e.loginLozinka=i),"bg-color":"#fffdf9",variant:"outlined",label:"Lozinka",class:"mx-6 mx-sm-10",type:e.lozinkaShow?"text":"password","append-inner-icon":e.lozinkaShow?"mdi-eye":"mdi-eye-off","onClick:appendInner":l[4]||(l[4]=i=>e.lozinkaShow=!e.lozinkaShow),"onUpdate:focused":l[5]||(l[5]=i=>e.loginError=!1)},null,8,["modelValue","type","append-inner-icon"])]),_:1}),a(s,{cols:"5",class:"mt-n7 mb-10"},{default:o(()=>[a(f,{type:"submit",variant:"outlined",width:"100%",height:"40px"},{default:o(()=>[k(" Prijavi se ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]),g("div",O,[k(" Nema\u0161 nalog? "),g("span",p(e.props,{onClick:l[6]||(l[6]=i=>{e.registracijaShow=!0,e.loginError=!1,e.lozinkaShow=!1}),style:{cursor:"pointer !important"},class:"cr-p text-decoration-underline"}),"Napravi ga!",16)])]),_:1},16))}const J=C(T,[["render",X],["__scopeId","data-v-b21f163c"]]);const K={components:{login:J},data:()=>({isXs:!1,dialog:!1}),props:{color:String,flat:Boolean},methods:{onResize(){this.isXs=window.innerWidth<850}},mounted(){this.onResize(),window.addEventListener("resize",this.onResize,{passive:!0})}};function M(e,l,t,n,h,r){const i=y("router-link"),E=y("login");return d(),u(P,{app:"",color:t.color,flat:t.flat,dark:"",class:q(["px-1",{expand:t.flat}])},{default:o(()=>[e.isXs?(d(),u(w,{key:0,"max-width":"100px"},{default:o(()=>[a(i,{to:"/"},{default:o(()=>[a(c,{id:"mini-panel",src:B})]),_:1})]),_:1})):(d(),u(w,{key:1},{default:o(()=>[a(i,{to:"/"},{default:o(()=>[a(c,{src:F})]),_:1})]),_:1})),a(i,{style:{"text-decoration":"none",color:"inherit"},to:"/admin_panel"},{default:o(()=>[e.$vuetify.display.width>=1050?(d(),u(f,{key:0,class:"ma-4 mr-2",variant:"outlined",size:"large","append-icon":"mdi-security"},{default:o(()=>[k(" Admin ")]),_:1})):(d(),u(f,{key:1,class:"ma-4 mr-2",variant:"outlined",height:"44px","min-width":"50px",width:"50px"},{default:o(()=>[a(j,{icon:"mdi-security",size:"24px"})]),_:1}))]),_:1}),e.$vuetify.display.width>=1050?(d(),u(f,{key:2,class:"rightbtn ma-4 ml-2",variant:"outlined",size:"large","append-icon":"mdi-account-circle",onClick:l[0]||(l[0]=v=>e.dialog=!0)},{default:o(()=>[k(" PRIJAVA ")]),_:1})):(d(),u(f,{key:3,class:"rightbtn ma-4 ml-2",variant:"outlined",height:"44px","min-width":"50px",width:"50px",onClick:l[1]||(l[1]=v=>e.dialog=!0)},{default:o(()=>[a(j,{icon:"mdi-account-circle",size:"24px"})]),_:1})),a(R,{modelValue:e.dialog,"onUpdate:modelValue":l[3]||(l[3]=v=>e.dialog=v),width:"auto",class:"ma-n2"},{default:o(()=>[a(E,{onClose:l[2]||(l[2]=v=>e.dialog=!1)})]),_:1},8,["modelValue"])]),_:1},8,["color","flat","class"])}const Q=C(K,[["render",M]]);export{Q as n};
