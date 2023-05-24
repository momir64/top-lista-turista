<template>
  <v-app v-scroll="check">
    <navigation :color="'secondary'" :flat="false" />
    <v-main>
      <v-container id="content_holder_container">
        <v-card
          id="content_holder"
          class="align-center text-center px-xs-3 px-sm-5 px-md-11"
        >
          <v-row no-gutters>
            <v-col
              cols="12"
              md="6"
              class="text-center order-md-last order-first pa-3 ps-3 ps-md-2 ps-lg-4"
            >
              <v-card class="kartica" width="100%" variant="outlined">
                <v-form v-model:model-value="isFormValid" @submit.prevent="submit()" validate="blur" ref="forma" autocomplete="off">
                  <v-row class="pa-13 pt-7 px-7 px-sm-9 px-md-11 px-lg-13">
                    <v-col>
                      <div class="text-h4 font-weight-bold mb-2">Podaci</div>
                    </v-col>
                    <v-col        cols="12"> <v-text-field :rules="required"                                class="mb-n4 text-left" variant="outlined" bg-color="#fff" label="Naziv agencije"   v-model="naziv"></v-text-field> </v-col>
                    <v-col        cols="12"> <v-text-field :rules="required"                                class="mb-n4 text-left" variant="outlined" bg-color="#fff" label="Ulica i broj"     v-model="ulica"></v-text-field> </v-col>
                    <v-col md="7" cols="12"> <v-text-field :rules="required"                                class="mb-n4 text-left" variant="outlined" bg-color="#fff" label="Grad"             v-model="grad"></v-text-field> </v-col>
                    <v-col md="5" cols="12"> <v-text-field :rules="[required, numeric].flat()"              class="mb-n4 text-left" variant="outlined" bg-color="#fff" label="Poštanski broj"   v-model="postBroj"></v-text-field> </v-col>
                    <v-col        cols="12"> <v-text-field :rules="[required, emailCheck].flat()"           class="mb-n4 text-left" variant="outlined" bg-color="#fff" label="Email"            v-model="email"></v-text-field> </v-col>
                    <v-col        cols="12"> <v-text-field :rules="[required, numericPhone].flat()"         class="mb-n4 text-left" variant="outlined" bg-color="#fff" label="Telefon"          v-model="telefon"></v-text-field> </v-col>
                    <v-col md="5" cols="12"> <v-text-field :rules="[required, numeric, numericYear].flat()" class="mb-n4 text-left" variant="outlined" bg-color="#fff" label="Godina osnivanja" v-model="osnovana"></v-text-field> </v-col>
                    <v-col md="7" cols="12"> <v-file-input :rules="fileCheck"                               class="mb-n4 text-left" variant="outlined" bg-color="#fff" label="Slika"            v-model="slika" accept="image/*" prepend-icon prepend-inner-icon="mdi-paperclip"></v-file-input> </v-col>
                    <v-col md="5" cols="12" offset-md="7">
                      <v-btn type="submit" class="bg-white mt-4" style="font-weight: 600" variant="outlined" width="100%" height="44px" :disabled="disabledBtn">
                        {{ this.$route.params.id ? 'Ažuriraj' : 'Dodaj' }}
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card>
            </v-col>

            <v-col cols="12" md="6" class="pe-0 pe-md-2 pe-lg-4">
              <v-col cols="12" class="text-center">
                <v-card class="kartica" variant="outlined">
                  <div class="text-h4 font-weight-bold mb-n0 mt-7">
                    Destinacije:
                  </div>
                  <v-list
                    class="px-3 px-sm-6 py-13"
                    bg-color="#fffdf9"
                    lines="one"
                  >
                    <template
                      v-for="(destinacija, i) in destinacije"
                      :key="destinacija.id"
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
                                  {{ destinacija.naziv }}
                                </span>
                              </div>
                            </template>
                            <template v-slot:append>
                              <router-link
                                style="text-decoration: none; color: inherit"
                                :to="`/admin_panel/destinacija/${agencija.destinacije}/${destinacija.id}`"
                              >
                                <v-btn
                                  variant="plain"
                                  icon="mdi-pencil"
                                ></v-btn>
                              </router-link>
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
                                      destinacijaBrisanje = destinacija.naziv;
                                      destinacijaBrisanjeID = destinacija.id;
                                      destinacijaBrisanjeIndex = i;
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
                <router-link
                  :style="!this.$route.params.id ? { pointerEvents: 'none', opacity: 0.5 } : {}"
                  :to="'/admin_panel/destinacija/' + agencija.destinacije"
                  style="text-decoration: none; color: inherit"
                >
                  <v-btn
                    class="mb-9 px-11 kartica mt-1"
                    height="50px"
                    variant="outlined"
                    prependIcon="mdi-plus"
                  >
                    dodaj novu destinaciju
                  </v-btn>
                </router-link>
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
          Da li ste sigurni da želite da obrišete destinaciju
          {{ destinacijaBrisanje }}?
        </v-card-title>
        <v-card-actions class="justify-center">
          <v-btn
            class="me-2"
            style="border-radius: 13px"
            variant="text"
            @click="
              dialog = false;
              brisanjeDestinacije();
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
    url: "https://top-lista-turista-default-rtdb.europe-west1.firebasedatabase.app/",
    fab: null,
    dialog: false,
    disabledBtn: false,
    destinacijaBrisanje: null,
    destinacijaBrisanjeID: null,
    destinacijaBrisanjeIndex: null,
    agencijaMenjanjeID: null,
    agencijaMenjanjeIndex: null,
    agencija: {},
    destinacije: [],
    naziv: null,
    ulica: null,
    grad: null,
    postBroj: null,
    email: null,
    telefon: null,
    osnovana: null,
    slika: null,
    slikaURL: null,
    isFormValid: false,
    required: [(value) => !!value || "Obavezno polje"],
    numeric: [(value) => /^\d+$/.test(value) || "Mora biti broj"],
    numericPhone: [
      (value) =>
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.\\/]?[0-9]{2,6}[-\s\.]?[0-9]{2,6}[-\s\.]?[0-9]{1,6}$/.test(
          value
        ) || "Neispravan telefon",
      // value => /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(value) || 'Neispravan telefon'
    ],
    numericYear: [
      (value) =>
        (+value >= 1923 && +value <= new Date().getFullYear()) ||
        "Neispravna godina",
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
    passCheck: [
      (value) =>
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(value) ||
        "Nedovoljno jaka lozinka", //(?=.*?[#?!@$ %^&*-])
    ],
  }),
  computed: {
    fileCheck() {
      return [
        (value) => (!!value && !!value.length) || "Obavezno polje",
        (value) => !!value[0].size || value[0].name == this.agencija.slika || "Neispravan fajl",
        (value) => value[0].name == this.agencija.slika || value[0].size < 10000000 || "Prevelika slika",
      ];
    },
  },
  methods: {
    async brisanjeDestinacije() {
      let code, message;
      try {
        let response = await fetch(
          this.url +
            `/destinacije/${this.agencija.destinacije}/${this.destinacijaBrisanjeID}.json`,
          { method: "DELETE" }
        );
        code = response.status;
        message = response.statusText;
        if (!response.ok) throw new Error();
        this.destinacije.splice(this.destinacijaBrisanjeIndex, 1);
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
    async uploadImage() {
      const formdata = new FormData();
      formdata.append("file", this.slika[0]);
      formdata.append("UPLOADCARE_STORE", "auto");
      formdata.append("UPLOADCARE_PUB_KEY", "5e5635739f48855b98f7");
      let response = await fetch("https://upload.uploadcare.com/base/", {
        method: "POST",
        body: formdata,
      });
      return `https://ucarecdn.com/${(await response.json()).file}/${
        this.slika[0].name
      }`;
    },
    async newDestinacije() {
      let code, message;
      try {
        let response = await fetch(this.url + "/destinacije.json", {
          method: "POST",
          body: JSON.stringify({}),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        code = response.status;
        message = response.statusText;
        if (!response.ok) throw new Error();
        this.agencija.destinacije = (await response.json())["name"];
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
    async submit() {
      let code, message;
      if (this.isFormValid) {
        this.disabledBtn = true;
        if (this.slika && "size" in this.slika[0])
          this.slikaURL = await this.uploadImage();
        if (!this.$route.params.id) await this.newDestinacije();
        let tmpAgencija = {
          adresa: `${this.ulica}, ${this.grad}, ${this.postBroj}`,
          brojTelefona: this.telefon,
          destinacije: this.agencija.destinacije,
          email: this.email,
          godina: this.osnovana,
          logo: this.slikaURL,
          naziv: this.naziv,
        };
        try {
          let response = await fetch(
            this.url +
              (!this.$route.params.id
                ? "/agencije.json"
                : `/agencije/${this.agencija.id}.json`),
            {
              method: !this.$route.params.id ? "POST" : "PATCH",
              body: JSON.stringify(tmpAgencija),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            }
          );
          code = response.status;
          message = response.statusText;
          if (!response.ok) throw new Error();
          if (!this.$route.params.id) {
            let id = (await response.json())["name"];
            this.disabledBtn = false;
            this.agencija.id = id;
            this.$router.push(`/admin_panel/agencija/${id}`);
          }
          else
            this.$router.push("/admin_panel/agencije");
        } catch (e) {
          console.log(e);
          message = `Firebase: ${code}\u00A0${message}`;
          const title = "Ooops";
          this.$router.push({
            path: "/error",
            state: code == 200 ? {} : { title, message },
          });
        }
      }
    },
    toTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    check() {
      this.fab = window.pageYOffset > 60;
    },
    async load_agencije() {
      let code, message;
      try {
        let response = await fetch(this.url + "/agencije.json");
        code = response.status;
        message = response.statusText;
        if (!response.ok) throw new Error();

        const data = await response.json();

        for (const id in data) {
          if (id == this.$route.params.id) {
            this.agencija = {
              id: id,
              naziv: data[id]["naziv"],
              email: data[id]["email"],
              adresa: data[id]["adresa"],
              osnovana: data[id]["godina"],
              telefon: data[id]["brojTelefona"],
              destinacije: data[id]["destinacije"],
              slika: data[id]["logo"].split("/").pop(),
              slikaURL: data[id]["logo"],
            };

            this.naziv = this.agencija.naziv;
            this.ulica = this.agencija.adresa.split(",")[0].trim();
            this.grad = this.agencija.adresa.split(",")[1].trim();
            this.postBroj = this.agencija.adresa.split(",")[2].trim();
            this.email = this.agencija.email;
            this.telefon = this.agencija.telefon;
            this.osnovana = this.agencija.osnovana;
            this.slika = [{ name: this.agencija.slika }];
            this.slikaURL = this.agencija.slikaURL;

            break;
          }
        }

        this.agencija.ulica = this.agencija.adresa.split(",")[0];
        this.load_destinacije(this.agencija.destinacije);
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
    async load_destinacije(destinacijeId) {
      let code, message;
      try {
        let response = await fetch(this.url + "/destinacije.json");
        code = response.status;
        message = response.statusText;
        if (!response.ok) throw new Error();

        const data = await response.json();
        const results = [];

        console.log(data);
        console.log(destinacijeId);
        for (const id in data[destinacijeId]) {
          results.push({
            id: id,
            tip: data[destinacijeId][id]["tip"],
            opis: data[destinacijeId][id]["opis"],
            cena: data[destinacijeId][id]["cena"],
            naziv: data[destinacijeId][id]["naziv"],
            slike: data[destinacijeId][id]["slike"],
            prevoz: data[destinacijeId][id]["prevoz"],
            maxOsoba: data[destinacijeId][id]["maxOsoba"],
          });
        }
        this.destinacije = results;
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
  },
  beforeMount() {
    if (this.$route.params.id) this.load_agencije();
  },
};
</script>
