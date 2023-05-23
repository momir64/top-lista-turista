# Top Lista Turista

Web stranica koja objedinjuje turističke agencije.  
Projekat iz predmeta web dizajn.  
https://tlt.moma.rs  
<br/>

## Homepage screenshot

![screenshot](https://user-images.githubusercontent.com/40437358/234534835-e8e455d3-d395-496c-9168-0e4eb4725200.png)  
<br/>

## Mapa sajta sa kratkim opisom

<pre>
<b>Top Lista Turista</b>
│
├── <b>[1]Početna stranica</b>
│   ├── Landing slika i citat
│   ├── Pretraga agencija po nazivu ili destinaciji
│   └── Lista agencija
│       │
│       └── <b>[2]Stranica agencije</b>
│           ├── Logo agencije
│           ├── Informacije o agenciji
│           ├── Pretraga destinacija po tipu, prevozu i nazivu
│           └── Lista destinacija
│               │
│               └── <b>[3]Stranica destinacije</b>
│                   ├── Slide show sa slikama destinacije
│                   ├── Informacije o destinaciji
│                   └── Opis destinacije
│
├── <b>[7]Pop-up za prijavu i registraciju</b>
│   ├── Forma za prijavu
│   │   ├── Zatvranje dijaloga pri uspšenoj prijavi
│   │   └── Otvaranje admin panela za korisnika sa kredencijalima <b>admin, admin</b>
│   │       └── Admin navigacija
│   │           ├── Agencije
│   │           │   └── Lista agencija sa opcijama za dodavanje, izmenu i brisanje
│   │           │       │
│   │           │       └── <b>[5]Stranica za uređivanje pojedinačne agencije</b>
│   │           │           ├── Lista destinacija sa opcijama za dodavanje, izmenu i brisanje
│   │           │           │   │
│   │           │           │   └── <b>[4]Stranica za uređivanje pojedinačne destinacije</b>
│   │           │           │       └── Forma za dodavanje ili izmenu destinacije
│   │           │           └── Forma za dodavanje ili izmenu agencije
│   │           │ 
│   │           └── <b>[6]Stranica za uređivanje korisnika</b>
│   │               ├── Lista korisnika sa opcijama za dodavanje, izmenu i brisanje
│   │               └── Forma za dodavanje ili izmenu korisnika
│   └── Forma za registraciju
│   
└── <b>[8]Stranica za greške</b>
</pre>
<br/>

## Linkovi
<pre>
<b>[1]  https://tlt.moma.rs</b>
<b>[2]  https://tlt.moma.rs/agencija/{ime agencije}</b>
       - https://tlt.moma.rs/agencija/Air%20Serbia
<b>[3]  https://tlt.moma.rs/destinacija/{ime agencije}/{ime destinacije}</b>
       - https://tlt.moma.rs/destinacija/Air%20Serbia/Sitonija
<b>[4]  https://tlt.moma.rs/admin_panel/destinacija/{ID grupe destinacija}/{ID destinacije - opcionalno}</b>
       - https://tlt.moma.rs/admin_panel/destinacija/-MNVEu6iMr2EFlQO6TW60/-MNQftJa4rskH-dBqF9Z3
       - https://tlt.moma.rs/admin_panel/destinacija/-MNVEu6iMr2EFlQO6TW60
<b>[5]  https://tlt.moma.rs/admin_panel/agencija/{ID agencije - opcionalno}</b>
       - https://tlt.moma.rs/admin_panel/agencija/-MNQftJa4rskH-dBqE9Z
       - https://tlt.moma.rs/admin_panel/agencija
       - https://tlt.moma.rs/admin_panel/agencije
<b>[6]  https://tlt.moma.rs/admin_panel/korisnici</b>
<b>[7]  dostupan na svakoj ne-admin stranici</b>
<b>[8]  https://tlt.moma.rs/error</b>  
       - https://tlt.moma.rs/agencija/NekaNovaNedefinisana
       - ili bilo koji drugi neispravan url
</pre>  
<br/>  
<br/>  
  
## Dependencies
```
vue: "^3.2.13
vuetify: ^3.0.0
vue-router: "^4.0.0

https://uploadcare.com - za uploadovanje i čuvanje slika online
```
