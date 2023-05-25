<template>
  <v-app v-scroll="check">
    <navigation :color="'secondary'" :flat="false" />
    <v-main>
      <v-container id="content_holder_container">
        <v-card
          id="content_holder"
          class="align-center text-center px-xs-3 px-sm-5 px-md-11"
        >
          <v-container fluid>
            <v-row>
              <v-col cols="12" md="6" class="coll">
                <v-card class="kartica">
                  <v-img
                    id="imgag"
                    :src="agencija.logo"
                    gradient="to bottom, rgba(0,0,0,0.05), rgba(0,0,0,.4)"
                    height="400px"
                    cover
                  ></v-img
                ></v-card>
              </v-col>
              <v-col cols="12" md="6" class="colr">
                <v-card id="info" class="kartica" height="400px">
                  <div class="text-h1 font-weight-bold mt-7 mb-sm-3">
                    {{ agencija.naziv }}
                  </div>
                  <div class="text-h4 mb-n2 mb-sm-n1">{{ agencija.ulica }}</div>
                  <div class="text-h4 mb-n2 mb-sm-n1">{{ agencija.grad }}</div>
                  <div class="text-h4 mb-n2 mb-sm-n1">{{ agencija.email }}</div>
                  <div class="text-h4 mb-n2 mb-sm-n1">
                    {{ agencija.telefon }}
                  </div>
                  <div class="text-h5 mt-9">
                    Osnovana {{ agencija.osnovana }}. godine
                  </div>
                </v-card>
              </v-col>
            </v-row>
            <v-row class="mt-15" v-if="$vuetify.display.mdAndUp">
              <v-col id="card_pretraga_col">
                <v-card
                  class="card_pretraga mt-15 mb-5 d-flex"
                  height="56px"
                  variant="outlined"
                >
                  <div class="izbornik">
                    <v-select
                      bg-color="#fffdf9"
                      :items="opcijeTip"
                      v-model="selektovanaTip"
                      style="border-right: 1px solid #bbb"
                      variant="x"
                    >
                      <template v-slot:selection="{ item }">
                        <span id="izbor">{{ item.title }}</span>
                      </template>
                    </v-select>
                  </div>
                  <div class="izbornik2">
                    <v-select
                      bg-color="#fffdf9"
                      :items="opcijePrevoz"
                      v-model="selektovanaPrevoz"
                      style="border-right: 1px solid #bbb"
                      variant="x"
                    >
                      <template v-slot:selection="{ item }">
                        <span id="izbor">{{ item.title }}</span>
                      </template>
                    </v-select>
                  </div>
                  <v-text-field
                    bg-color="#fffdf9"
                    single-line
                    class="pretraga"
                    label="Pretraga destinacija"
                    variant="x"
                    v-model="pretragaInput"
                    append-inner-icon="mdi-magnify"
                  ></v-text-field>
                </v-card>
              </v-col>
            </v-row>
            <v-row class="mt-15 mt-md-1" v-else-if="$vuetify.display.smAndUp">
              <v-col id="card_pretraga_col">
                <v-card
                  class="card_pretraga mt-15 mb-5 d-flex"
                  height="111px"
                  variant="outlined"
                >
                  <v-row no-gutters>
                    <v-col cols="12" class="mb-n6">
                      <v-text-field
                        bg-color="#fffdf9"
                        single-line
                        label="Pretraga destinacija"
                        variant="x"
                        v-model="pretragaInput"
                        class="pretraga"
                        append-inner-icon="mdi-magnify"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="6"
                      style="border-top: 1px solid #bbb; z-index: 999"
                      ><v-select
                        bg-color="#fffdf9"
                        :items="opcijeTip"
                        v-model="selektovanaTip"
                        style="border-right: 1px solid #bbb"
                        variant="x"
                      >
                        <template v-slot:selection="{ item }">
                          <span id="izbor">{{ item.title }}</span>
                        </template>
                      </v-select>
                    </v-col>
                    <v-col
                      cols="6"
                      style="border-top: 1px solid #bbb; z-index: 999"
                    >
                      <v-select
                        bg-color="#fffdf9"
                        :items="opcijePrevoz"
                        v-model="selektovanaPrevoz"
                        variant="x"
                      >
                        <template v-slot:selection="{ item }">
                          <span id="izbor">{{ item.title }}</span>
                        </template>
                      </v-select>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
            <v-row class="mt-15 mt-md-1" v-else>
              <v-col id="card_pretraga_col">
                <v-card
                  class="card_pretraga mt-15 mb-5 d-flex"
                  height="165px"
                  variant="outlined"
                >
                  <v-row no-gutters>
                    <v-col cols="12" class="mb-n6">
                      <v-text-field
                        bg-color="#fffdf9"
                        single-line
                        label="Pretraga destinacija"
                        variant="x"
                        v-model="pretragaInput"
                        class="pretraga"
                        append-inner-icon="mdi-magnify"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      class="mb-n6"
                      style="border-top: 1px solid #bbb; z-index: 999"
                      ><v-select
                        bg-color="#fffdf9"
                        :items="opcijeTip"
                        v-model="selektovanaTip"
                        variant="x"
                      >
                        <template v-slot:selection="{ item }">
                          <span id="izbor">{{ item.title }}</span>
                        </template>
                      </v-select>
                    </v-col>
                    <v-col
                      cols="12"
                      style="border-top: 1px solid #bbb; z-index: 999"
                    >
                      <v-select
                        bg-color="#fffdf9"
                        :items="opcijePrevoz"
                        v-model="selektovanaPrevoz"
                        variant="x"
                      >
                        <template v-slot:selection="{ item }">
                          <span id="izbor">{{ item.title }}</span>
                        </template>
                      </v-select>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                class="pa-xs-3 pa-sm-4 pa-md-5 pa-lg-6 mb-2 mb-sm-1"
                v-for="destinacija in destinacijeShow"
                :key="destinacija.id"
                cols="12"
                md="6"
                lg="4"
              >
                <router-link
                  style="text-decoration: none; color: inherit"
                  :to="`/destinacija/${agencija.naziv}/${destinacija.naziv}`"
                  ><v-card class="kartica">
                    <v-img
                      :src="destinacija.slike[0]"
                      class="align-end"
                      gradient="to bottom, rgba(0,0,0,0.05), rgba(0,0,0,.4)"
                      height="280px"
                      cover
                    >
                    </v-img>
                    <v-card-title class="kartica_naslov">
                    <span v-for="word in destinacija.naziv.split(new RegExp(`(${pretragaInput})`, 'ig'))"
                      :style="word.toLowerCase() == pretragaInput.toLowerCase() ? {'background-color' : '#bfb7a7'} : {}"
                    >
                      {{ word }}
                    </span>  
                    </v-card-title>
                    <v-card-text
                      class="kartica_tekst text-capitalize text-left px-5"
                    >
                      <v-icon
                        class="ikona"
                        size="30px"
                        icon="mdi-bus"
                        v-if="destinacija.prevoz == 'autobus'"
                      ></v-icon>
                      <v-icon
                        class="ikona2"
                        size="30px"
                        icon="mdi-car"
                        v-else-if="destinacija.prevoz == 'sopstveni'"
                      ></v-icon>
                      <v-icon
                        class="ikona"
                        size="30px"
                        icon="mdi-airplane"
                        v-else-if="destinacija.prevoz == 'avion'"
                      ></v-icon>
                      <v-icon
                        class="ikona"
                        size="30px"
                        icon="mdi-train-car"
                        v-else
                      ></v-icon>
                      {{ destinacija.prevoz }}
                      <span class="pr-2 cena" style="float: right">
                        {{ Math.round(destinacija.cena / 117.32) }} €</span
                      >
                    </v-card-text>
                  </v-card>
                </router-link>
              </v-col>
            </v-row>
            <div style="height: 60px; width: 100%"></div>
          </v-container>
        </v-card>
      </v-container>
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
    </v-main>
    <foote :mediaLinks="false" />
  </v-app>
</template>

<style scoped lang="scss">
.izbornik {
  //transition: 0.11s;
  border-radius: 0;
  width: 190px;
}
.izbornik2 {
  //transition: 0.11s;
  border-radius: 0;
  width: 204px;
}
#izbor {
  padding-left: 10px;
}
.card_pretraga {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  margin-right: auto !important;
  margin-left: auto !important;
  border-radius: 10px;
  max-width: 65vw;
  margin-top: 34px;
}
.text-h1 {
  font-size: clamp(2.4em, 4vw, 4rem) !important;
}
.text-h4 {
  font-size: clamp(1.45em, 2.4vw, 1.8em) !important;
}
.text-h5 {
  font-size: clamp(1.125em, 1.2vw, 1.3rem) !important;
}
#ponudat {
  margin-top: 85px;
  margin-bottom: 15px;
  font-weight: 600;
  font-size: min(60px, 7.5vw);
}
.cena {
  font-family: "Source Sans Pro" !important;
  font-weight: 600;
  font-size: 32px;
  margin-top: -2px;
}
.ikona {
  padding-bottom: 6px;
}
.ikona2 {
  padding-bottom: 8px;
}
.kartica_naslov {
  font-family: "Source Sans Pro" !important;
  padding-bottom: 45px;
  padding-top: 20px;
  font-weight: 600;
  font-size: 32px;
}
.kartica_tekst {
  font-family: "Source Sans Pro" !important;
  padding-bottom: 21px;
  font-size: 26px;
}
#content_holder {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.7);
  min-height: calc(100vh - 80px - 90px);
  background-color: #f8f0e0;
  padding-top: 45px;
  border-radius: 0;
}
#content_holder_container {
  padding-right: 10vw;
  padding-left: 10vw;
  padding-top: 16px;
  padding-bottom: 0;
  max-width: 100vw;
}

@media screen and (max-width: 1500px) {
  #content_holder_container {
    padding-left: 8vw !important;
    padding-right: 8vw !important;
  }
}
@media screen and (max-width: 1200px) {
  .card_pretraga {
    width: 72.1vw;
    max-width: 72.1vw;
  }
  #content_holder_container {
    padding-right: 6vw !important;
    padding-left: 6vw !important;
  }
}
@media screen and (max-width: 850px) {
  .card_pretraga {
    width: 100%;
    max-width: 100%;
    margin-top: 15px !important;
  }
  #card_pretraga_col {
    //transition: all 0.11s, margin-top 0s;
    margin-top: 0 !important;
    padding-top: 0 !important;
  }
  #content_holder_container {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
}
@media screen and (max-width: 959.9px) {
  #content_holder {
    padding-top: 20px;
  }
  .card_pretraga {
    width: 100%;
    max-width: 100%;
  }
  #card_pretraga_col {
    //transition: all 0.11s, margin-top 0s;
    margin-top: -40px;
    padding-top: 0;
  }
}
@media screen and (min-width: 960px) {
  .coll {
    padding-right: max(1.1vw, 14px);
  }
  .colr {
    padding-left: max(1.1vw, 14px);
  }
}
@media screen and (max-width: 599.9px) {
  .text-h1 {
    margin-top: 6px !important;
  }
  #imgag {
    height: 250px !important;
  }
  #info {
    height: 330px !important;
  }
  #content_holder {
    padding-top: 10px !important;
  }
}
</style>

<script>
import navigation from "@/components/NavigationBar";
import foote from "@/components/MediaFooter";

export default {
  components: {
    navigation,
    foote,
  },
  data: () => ({
    url: "https://top-lista-turista-default-rtdb.europe-west1.firebasedatabase.app/",
    fab: null,
    selektovanaTip: "Tip putovanja",
    opcijeTip: ["Svi tipovi", "Letovanje", "Zimovanje", "Gradovi Evrope"],
    selektovanaPrevoz: "Vrsta prevoza",
    opcijePrevoz: ["Svi prevozi", "Avion", "Autobus", "Sopstveni prevoz"],
    agencija: {},
    destinacije: [],
    destinacijeShow: [],
    pretragaInput: "",
  }),
  methods: {
    pretraga() {
      this.destinacijeShow = this.destinacije.filter((v) =>
        v.naziv.toLowerCase().includes(this.pretragaInput.toLowerCase()) &&
        (this.selektovanaTip == "Tip putovanja" || this.selektovanaTip == "Svi tipovi" || this.selektovanaTip == v.tip) &&
        (this.selektovanaPrevoz == "Vrsta prevoza" || this.selektovanaPrevoz == "Svi prevozi" || this.selektovanaPrevoz.toLowerCase().split(' ')[0] == v.prevoz.toLowerCase())
      );
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
        const results = [];

        for (const id in data) {
          results.push({
            id: id,
            logo: data[id]["logo"],
            naziv: data[id]["naziv"],
            email: data[id]["email"],
            adresa: data[id]["adresa"],
            osnovana: data[id]["godina"],
            telefon: data[id]["brojTelefona"],
            destinacije: data[id]["destinacije"],
          });
        }
        this.agencija = results.filter(
          (agencija) => agencija.naziv == this.$route.params.naziv
        )[0];
        this.agencija.grad = this.agencija.adresa.substring(
          this.agencija.adresa.indexOf(",") + 1
        );
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
        this.destinacijeShow = results;
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
    this.load_agencije();
  },
  watch: {
    selektovanaTip: function () {
      this.pretraga();
    },
    selektovanaPrevoz: function () {
      this.pretraga();
    },
    pretragaInput: function () {
      this.pretraga();
    },
  },
};
</script>
