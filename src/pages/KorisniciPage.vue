<template>
  <v-app v-scroll="check">
    <navigation :color="'secondary'" :flat="false" />
    <v-main>
      <v-container id="content_holder_container">
        <v-card
          id="content_holder"
          class="align-center text-center px-xs-3 px-sm-5 px-md-11"
        >
          <!-- Edit agencija -->

          <v-row no-gutters>
            <v-col
              cols="12"
              md="7"
              class="text-center order-md-last order-first pa-3 ps-3 ps-md-2 ps-lg-4"
            >
              <v-card class="kartica" width="100%" variant="outlined">
                <v-form @submit.prevent="nekafunkcija" validate="blur" ref="forma" autocomplete="off">
                  <v-row class="pa-13 pt-7 px-7 px-sm-9 px-md-11 px-lg-13">
                    <v-col cols="12">
                      <div class="text-h4 font-weight-bold mb-2">Podaci</div>
                    </v-col>
                    <v-col sm="6" cols="12"> <v-text-field :rules="[required].flat()"                       class="mb-n4 text-left" variant="outlined" bg-color="#fff" label="Ime"              v-model="ime"></v-text-field> </v-col>
                    <v-col sm="6" cols="12"> <v-text-field :rules="[required].flat()"                       class="mb-n4 text-left" variant="outlined" bg-color="#fff" label="Prezime"          v-model="prezime"></v-text-field> </v-col>
                    <v-col        cols="12"> <v-text-field :rules="[required].flat()"                       class="mb-n4 text-left" variant="outlined" bg-color="#fff" label="Ulica i broj"     v-model="ulica"></v-text-field> </v-col>
                    <v-col sm="7" cols="12"> <v-text-field :rules="[required].flat()"                       class="mb-n4 text-left" variant="outlined" bg-color="#fff" label="Grad"             v-model="grad"></v-text-field> </v-col>
                    <v-col sm="5" cols="12"> <v-text-field :rules="[required, numeric].flat()"              class="mb-n4 text-left" variant="outlined" bg-color="#fff" label="Poštanski broj"   v-model="postBroj"></v-text-field> </v-col>
                    <v-col sm="6" cols="12"> <v-text-field :rules="[required, dateCheck].flat()"            class="mb-n4 text-left" variant="outlined" bg-color="#fff" label="Datum rođenja"    v-model="datum" type="date"></v-text-field> </v-col>
                    <v-col sm="6" cols="12"> <v-text-field :rules="[required, numericPhone].flat()"         class="mb-n4 text-left" variant="outlined" bg-color="#fff" label="Telefon"          v-model="telefon"></v-text-field> </v-col>
                    <v-col sm="6" cols="12"> <v-text-field :rules="[required, emailCheck].flat()"           class="mb-n4 text-left" variant="outlined" bg-color="#fff" label="Email"            v-model="email" ></v-text-field> </v-col>
                    <v-col sm="6" cols="12"> <v-text-field :rules="[required, nameCheck].flat()"            class="mb-n4 text-left" variant="outlined" bg-color="#fff" label="Korisničko ime"   v-model="username"></v-text-field> </v-col>
                    <v-col        cols="12"> <v-text-field :rules="[required, passCheck].flat()"            class="mb-n4 text-left" variant="outlined" bg-color="#fff" label="Lozinka"          v-model="lozinka" autocomplete="new-password" :type="lozinkaShow ? 'text' : 'password'" :append-inner-icon="lozinkaShow ? 'mdi-eye' : 'mdi-eye-off'" @click:append-inner="lozinkaShow = !lozinkaShow"></v-text-field> </v-col>
              
                    <!-- <v-col md="7" cols="12"> <v-file-input :rules="fileCheck"                               class="mb-n4 text-left" variant="outlined" bg-color="#fff" label="Slika"            v-model="slika" accept="image/*" prepend-icon prepend-inner-icon="mdi-paperclip"></v-file-input> </v-col> -->
                    <v-col md="5" cols="12" offset-md="7">
                      <v-btn type="submit" class="bg-white mt-4" style="font-weight: 600;" variant="outlined" width="100%" height="44px">
                        {{ !this.addEdit ? 'Ažuriraj' : 'Dodaj' }}
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card>
            </v-col>

            <v-col cols="12" md="5" class="pe-0 pe-md-2 pe-lg-4">
              <v-col cols="12" class="text-center">
                <v-card class="kartica" variant="outlined">
                  <div class="text-h4 font-weight-bold mb-n0 mt-7">
                    Korisnici:
                  </div>
                  <v-list
                    class="px-3 px-sm-6 py-13"
                    bg-color="#fffdf9"
                    lines="one"
                  >
                    <template
                      v-for="(korisnik, i) in korisnici"
                      :key="korisnik.id"
                    >
                      <v-hover>
                        <template v-slot:default="{ isHovering, props }">
                          <v-divider v-show="i == 0" thickness="2"></v-divider>
                          <v-list-item
                            v-bind="props"
                            :style="{
                              'background-color': isHovering ? '#f7f5f1' : '',
                            }"
                          >
                            <template v-slot:title>
                              <div class="float-left">
                                <span
                                  class="d-inline-block text-disabled text-right me-5 me-sm-12"
                                  style="
                                    width: 29px;
                                    font-family: monospace !important;
                                  "
                                >
                                  {{ i + 1 }}
                                </span>
                                <span class="">
                                  {{ korisnik.username }}
                                </span>
                              </div>
                            </template>
                            <template v-slot:append>
                              <v-btn
                                variant="plain"
                                @click="popuni(korisnik); addEdit=false"
                                icon="mdi-pencil"
                              ></v-btn>
                              <v-hover>
                                <template
                                  v-slot:default="{ isHovering, props }"
                                >
                                  <v-btn
                                    icon="mdi-delete"
                                    variant="plain"
                                    v-bind:="props"
                                    @click="
                                      dialog = true;
                                      korisnikBrisanje = korisnik.username;
                                    "
                                    :color="!isHovering ? '' : 'red-darken-1'"
                                  ></v-btn>
                                </template>
                              </v-hover>
                            </template>
                          </v-list-item>
                          <v-divider thickness="2"></v-divider>
                        </template>
                      </v-hover>
                    </template>
                  </v-list>
                </v-card>
              </v-col>
              <v-col cols="12" class="text-center">
                <v-btn
                  class="mb-9 px-11 kartica mt-1"
                  height="50px"
                  variant="outlined"
                  prependIcon="mdi-plus"
                  @click="clear(); addEdit=true"
                >
                  dodaj novog korisnika
                </v-btn>
              </v-col>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-main>
    <v-scale-transition>
      <v-btn
        fab
        v-show="fab"
        dark
        fixed
        bottom
        right
        class="topFab"
        color="#bfb7a7"
        icon="mdi-arrow-up"
        @click="toTop"
      >
      </v-btn>
    </v-scale-transition>
    <foote :mediaLinks="false" />

    <v-dialog v-model="dialog" width="auto">
      <v-card class="kartica_dijalog pa-4">
        <v-card-title class="text-wrap text-center mb-4 mt-1">
          Da li ste sigurni da želite da obrišete korisnika
          {{ korisnikBrisanje }}?
        </v-card-title>
        <v-card-actions class="justify-center">
          <v-btn
            class="me-2"
            style="border-radius: 13px"
            variant="text"
            @click="
              dialog = false;
              brisanjeAgencije();
            "
          >
            Da
          </v-btn>
          <v-btn
            style="border-radius: 13px"
            variant="text"
            @click="dialog = false"
          >
            Ne
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<style scoped lang="scss">
.kartica_dijalog {
  background-color: #fffdf9 !important;
  border-radius: 8px !important;
}
.kartica {
  font-weight: 600;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
}
#content_holder {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.7);
  min-height: calc(100vh - 80px - 90px);
  background-color: #f8f0e0;
  padding-bottom: 64px;
  padding-top: 45px;
  border-radius: 0;
}
#content_holder_container {
  padding-right: 13vw;
  padding-left: 13vw;
  padding-top: 16px;
  padding-bottom: 0;
  max-width: 100vw;
}
@media screen and (max-width: 1600px) {
  #content_holder_container {
    padding-left: 6vw !important;
    padding-right: 6vw !important;
  }
}
@media screen and (max-width: 1300px) {
  #content_holder_container {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}
@media screen and (max-width: 1100px) {
  #content_holder {
    padding-right: 20px !important;
    padding-left: 20px !important;
    padding-top: 23px !important;
  }
}
@media screen and (max-width: 599.9px) {
  #content_holder {
    padding-right: 4px !important;
    padding-left: 4px !important;
  }
}
</style>

<script>
import navigation from "@/components/AdminBar";
import foote from "@/components/MediaFooter";

export default {
  components: {
    navigation,
    foote,
  },
  data: () => ({
    url: "https://top-lista-turista-default-rtdb.europe-west1.firebasedatabase.app",
    lozinkaShow: false,
    addEdit: true,
    fab: null,
    dialog: false,
    korisnikBrisanje: null,
    korisnik: {},
    korisnici: [],
    ime: null,
    prezime: null,
    username: null,
    lozinka: null,
    ulica: null,
    grad: null,
    postBroj: null,
    email: null,
    telefon: null,
    datum: null,
    required: [(value) => !!value || "Obavezno polje"],
    numeric: [(value) => /^\d+$/.test(value) || "Mora biti broj"],
    numericPhone: [
      (value) =>
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.\\/]?[0-9]{2,6}[-\s\.]?[0-9]{2,6}[-\s\.]?[0-9]{1,6}$/.test(
          value
        ) || "Neispravan telefon",
      // value => /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(value) || 'Neispravan telefon'
    ],
    emailCheck: [
      (value) =>
        /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(value) ||
        "Neispravan email",
    ],
    nameCheck: [
      (value) =>
        /^[a-z0-9_-]{2,20}$/.test(value) || "Neispravano korisničko ime",
    ],
    dateCheck: [
      (value) => Date.parse(value) - Date.parse(new Date()) < 0 || "Neispravan datum",
    ],
    passCheck: [
      value => value.length > 4 || "Nedovoljno jaka lozinka", //(?=.*?[#?!@$ %^&*-])
      // (value) => /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(value) || "Nedovoljno jaka lozinka", //(?=.*?[#?!@$ %^&*-])
    ],
  }),
  computed: {
    fileCheck() {
      return [
        (value) => (!!value && !!value.length) || "Obavezno polje",
        (value) =>
          (!!value[0].size && !!value[0].size) ||
          value[0].name == this.korisnik.slika ||
          "Neispravan fajl",
      ];
    },
  },
  methods: {
    toTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    check() {
      this.fab = window.pageYOffset > 60;
    },
    async load_korisnici() {
      let code, message;
      try {
        let response = await fetch(this.url + "/korisnici.json");
        code = response.status;
        message = response.statusText;
        if (!response.ok) throw new Error();

        const data = await response.json();
        const results = [];

        for (const id in data) {
            results.push({
              id: id,
              ime: data[id]["ime"],
              prezime: data[id]["prezime"],
              email: data[id]["email"],
              lozinka: data[id]["lozinka"],
              adresa: data[id]["adresa"],
              datum: data[id]["datumRodjenja"],
              telefon: data[id]["telefon"],
              username: data[id]["korisnickoIme"],
            });
        }
        this.korisnici = results;
      } catch (e) {
        console.log(e);
        message = `Firebase: ${code}\u00A0${message}`;
        const title = "Ooops";
        this.$router.push({
          path: "/error",
          state: code == 200 ? {} : { title, message },
        });
      }
    },
    popuni(data) {
      this.ime = data.ime;
      this.prezime = data.prezime;
      this.username = data.username;
      this.email = data.email;
      this.lozinka = data.lozinka;
      this.ulica = data.adresa.split(",")[0].trim();
      this.grad = data.adresa.split(",")[1].trim();
      this.postBroj = data.adresa.split(",")[2].trim();
      this.telefon = data.telefon;
      this.datum = data.datum;
    },
    clear() {
      this.$refs.forma.resetValidation();
      this.$refs.forma.reset();
    }
  },
  beforeMount() {
    this.load_korisnici();
  },
};
</script>
