<template>
  <v-app v-scroll="check">
    <navigation :color="'secondary'" :flat="false" />
    <v-main>
      <v-container id="content_holder_container">
        <v-card
          id="content_holder"
          class="align-center text-center px-8 px-sm-12 px-md-16"
        >
          <v-card class="kartica" width="100%" variant="outlined">
            <v-form v-model:model-value="isFormValid" @submit.prevent="submit()" validate="blur" ref="forma" autocomplete="off">
              <v-row class="pa-13 pt-7 px-5 px-sm-9 px-md-11 px-lg-13 justify-center">
                <v-col>
                  <div class="text-h4 font-weight-bold mb-2">Podaci</div>
                </v-col>
                <v-col        cols="12"> <v-text-field :rules="required"                     class="mb-n4 text-left" variant="outlined" bg-color="#fff" label="Naziv destinacije" v-model="naziv"></v-text-field> </v-col>
                <v-col md="6" cols="12"> <v-select     :rules="required"                     class="mb-n4 text-left" variant="outlined" bg-color="#fff" label="Tip"               :items="opcijeTip" v-model="tip"></v-select><template v-slot:selection="{ item }"><span id="izbor">{{ item.title }}</span></template></v-col>
                <v-col md="6" cols="12"> <v-select     :rules="required"                     class="mb-n4 text-left" variant="outlined" bg-color="#fff" label="Prevoz"            :items="opcijePrevoz" v-model="prevoz"></v-select><template v-slot:selection="{ item }"><span id="izbor">{{ item.title }}</span></template></v-col>
                <v-col md="6" cols="12"> <v-text-field :rules="[required, numeric].flat()"   class="mb-n4 text-left" variant="outlined" bg-color="#fff" label="Cena"              v-model="cena" suffix="RSD"></v-text-field> </v-col>
                <v-col md="6" cols="12"> <v-text-field :rules="[required, numeric].flat()"   class="mb-n4 text-left" variant="outlined" bg-color="#fff" label="Maksimalno osoba"  v-model="maxOsoba"></v-text-field> </v-col>
                <v-col        cols="12"> <v-file-input :rules="fileCheck"                    class="mb-n4 text-left" variant="outlined" bg-color="#fff" label="Slike"             v-model="slike" accept="image/*" multiple chips prepend-icon prepend-inner-icon="mdi-paperclip"></v-file-input> </v-col>
                <v-col        cols="12"> <v-textarea   :rules="required"                     class="mb-n4 text-left" variant="outlined" bg-color="#fff" label="Opis"              v-model="opis" auto-grow></v-textarea> </v-col>
                <v-col md="3" cols="12">
                  <v-btn type="submit" class="bg-white mt-4" style="font-weight: 600;" variant="outlined" width="100%" height="44px">
                    {{ this.$route.params.id ? 'Ažuriraj' : 'Dodaj' }}
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card>
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
  </v-app>
</template>

<style scoped lang="scss">
.kartica_dijalog {
  background-color: #fffdf9 !important;
  border-radius: 8px !important;
}
.kartica {
  font-weight: 600;
  margin-top: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
}
#content_holder {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.7);
  min-height: calc(100vh - 80px - 90px);
  background-color: #f8f0e0;
  padding-bottom: 64px;
  padding-top: 45px;
  padding-left: 100px !important;
  padding-right: 100px !important;
  border-radius: 0;
}
#content_holder_container {
  padding-right: 15vw;
  padding-left: 15vw;
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
    padding-right: 64px !important;
    padding-left: 64px !important;
  }
}
@media screen and (max-width: 800px) {
  #content_holder {
    padding-right: 30px !important;
    padding-left: 30px !important;
    padding-top: 20px !important;
  }
}
@media screen and (max-width: 599.9px) {
  #content_holder {
    padding-right: 13px !important;
    padding-left: 13px !important;
    padding-top: 17px !important;
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
    destinacija: {},
    naziv: null,
    opis: null,
    tip: null,
    prevoz: null,
    cena: null,
    maxOsoba: null,
    slike: null,
    isFormValid: null,
    opcijeTip: ["Letovanje", "Zimovanje", "Gradovi Evrope"],
    opcijePrevoz: ["Avion", "Autobus", "Sopstveni"],
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
        (value) => value.every((s) => !!s.size) || (this.destinacija.slike.length && value.length == this.destinacija.slike.length && value.every((s, i) => s.name == this.destinacija.slike[i].split("/").pop())) || "Neispravan fajl",
        (value) => value.every((s, i) => (this.destinacija.slike && this.destinacija.slike.length > i && s.name == this.destinacija.slike[i].split("/").pop()) || s.size < 10000000) || `Slika "${value.find((s) => "size" in s && s.size >= 10000000).name}" je prevelika!`,
      ];
    },
  },
  methods: {
    async uploadImage(slika) {
      const formdata = new FormData();
      formdata.append("file", slika);
      formdata.append("UPLOADCARE_STORE", "auto");
      formdata.append("UPLOADCARE_PUB_KEY", "5e5635739f48855b98f7");
      let response = await fetch("https://upload.uploadcare.com/base/", {
        method: "POST",
        body: formdata,
      });
      return `https://ucarecdn.com/${(await response.json()).file}/${
        slika.name
      }`;
    },
    async submit() {
      let code, message;
      if (this.isFormValid) {
        if (!this.$route.params.id) this.destinacija.slike = [];
        if ("size" in this.slike[0]) {
          this.destinacija.slike.length = 0;
          for (let i = 0; i < this.slike.length; i++)
            this.destinacija.slike.push(await this.uploadImage(this.slike[i]));
        }
        try {
          this.destinacija = {
            tip: this.tip,
            opis: this.opis,
            cena: this.cena,
            naziv: this.naziv,
            slike: this.destinacija.slike,
            prevoz: this.prevoz,
            maxOsoba: this.maxOsoba,
          };

          let response = await fetch(
            this.url +
              (!this.$route.params.id
                ? `/destinacije/${this.$route.params.agencijaId}.json`
                : `/destinacije/${this.$route.params.agencijaId}/${this.$route.params.id}.json`),
            {
              method: !this.$route.params.id ? "POST" : "PATCH",
              body: JSON.stringify(this.destinacija),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            }
          );
          code = response.status;
          message = response.statusText;
          if (!response.ok) throw new Error();
          this.$router.go(-1);
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
    async load_destinacije(destinacijeId) {
      let code, message;
      try {
        let response = await fetch(this.url + "/destinacije.json");
        code = response.status;
        message = response.statusText;
        if (!response.ok) throw new Error();

        const data = await response.json();

        console.log(data);
        console.log(destinacijeId);
        for (const idG in data) {
          for (const id in data[idG]) {
            if (id == destinacijeId)
              this.destinacija = {
                id: id,
                tip: data[idG][id]["tip"],
                opis: data[idG][id]["opis"],
                cena: data[idG][id]["cena"],
                naziv: data[idG][id]["naziv"],
                slike: data[idG][id]["slike"],
                prevoz: data[idG][id]["prevoz"],
                maxOsoba: data[idG][id]["maxOsoba"],
              };
          }
        }

        this.naziv = this.destinacija.naziv;
        this.opis = this.destinacija.opis;
        this.tip = this.destinacija.tip;
        this.prevoz = this.destinacija.prevoz;
        this.prevoz = this.prevoz.charAt(0).toUpperCase() + this.prevoz.slice(1);
        this.cena = this.destinacija.cena;
        this.maxOsoba = this.destinacija.maxOsoba;
        this.slike = this.destinacija.slike.map(slika => { return { name: slika.split("/").pop() }; });
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
    if (this.$route.params.id) this.load_destinacije(this.$route.params.id);
  },
};
</script>
