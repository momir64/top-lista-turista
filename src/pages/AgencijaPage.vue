<template>
  <v-app>
    <navigation :color="'secondary'" :flat="false" />
    <v-main>
      <v-container id="content_holder_container">
        <v-card
          id="content_holder"
          class="align-center text-center px-xs-3 px-sm-5 px-md-11"
        >
          <v-container fluid>
            <v-row>
              <v-col cols="12" md="6">
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
              <v-col cols="12" md="6">
                <v-card id="info" class="kartica" height="400px">
                  <div class="text-h1 font-weight-bold mt-7 mb-sm-3">
                    {{ agencija.naziv }}
                  </div>
                  <div class="text-h4 mb-n2 mb-sm-n1">{{ agencija.ulica }}</div>
                  <div class="text-h4 mb-n2 mb-sm-n1">{{ agencija.grad }}</div>
                  <div class="text-h4 mb-n2 mb-sm-n1">{{ agencija.email }}</div>
                  <div class="text-h4 mb-n2 mb-sm-n1">{{ agencija.telefon }}</div>
                  <div class="text-h5 mt-9">
                    Osnovana {{ agencija.osnovana }}. godine
                  </div>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <div id="ponudat">Destinacije u ponudi:</div>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                class="pa-xs-3 pa-sm-4 pa-md-5 pa-lg-6 mb-2 mb-sm-1"
                v-for="destinacija in destinacije"
                :key="destinacija.id"
                cols="12"
                md="6"
                lg="4"
              >
                <v-card class="kartica">
                  <v-img
                    :src="destinacija.slike[0]"
                    class="align-end"
                    gradient="to bottom, rgba(0,0,0,0.05), rgba(0,0,0,.4)"
                    height="280px"
                    cover
                  >
                  </v-img>
                  <v-card-title class="kartica_naslov">{{
                    destinacija.naziv
                  }}</v-card-title>
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
              </v-col>
            </v-row>
            <div style="height: 60px; width: 100%"></div>
          </v-container>
        </v-card>
      </v-container>
    </v-main>
    <foote :mediaLinks="false" />
  </v-app>
</template>

<style scoped lang="scss">
.text-h1 {
  font-size: clamp(2.4em, 4vw, 4rem) !important;
}
.text-h4 {
  font-size: clamp(1.45em, 2.4vw, 1.8em) !important;
}
.text-h5 {
  font-size: clamp(1.125em, 1.2vw, 1.3rem) !important;
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
#ponudat {
  margin-top: 111px;
  margin-bottom: 20px;
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
.kartica {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  background-color: #f9f0e0;
}
#content_holder {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.7);
  min-height: calc(100vh - 80px - 90px);
  background-color: #fffbf5;
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
@media screen and (max-width: 850px) {
  #content_holder_container {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
}
</style>

<script>
import navigation from "@/components/NavigationBar";
import foote from "@/components/Footer";

export default {
  components: {
    navigation,
    foote,
  },
  data: () => ({
    url: "https://top-lista-turista-default-rtdb.europe-west1.firebasedatabase.app/",
    agencija: {},
    destinacije: [],
  }),
  methods: {
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
        code = "Ooops";
        this.$router.push({ path: "/error", state: { code, message } });
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
        code = "Ooops";
        this.$router.push({ path: "/error", state: { code, message } });
      }
    },
  },
  beforeMount() {
    this.load_agencije();
  },
};
</script>
