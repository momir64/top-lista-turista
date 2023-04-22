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
              <v-col cols="12" lg="8">
                <v-card class="kartica">
                  <v-carousel
                    cycle
                    color="#fffdf9"
                    height="600px"
                    show-arrows="hover"
                    :key="destinacija.id"
                    hide-delimiter-background
                  >
                    <v-carousel-item
                      v-for="(slika, i) in destinacija.slike"
                      :src="slika"
                      :key="i"
                      cover
                    ></v-carousel-item>
                  </v-carousel>
                </v-card>
              </v-col>
              <v-col cols="12" lg="4">
                <v-card id="info" class="kartica" height="600px">
                  <div class="text-h4 mb-n2 mb-sm-n1">
                    {{ destinacija.tip }}
                  </div>
                  <div class="text-h1 font-weight-bold mt-7 mb-sm-3">
                    {{ destinacija.naziv }}
                  </div>
                  <div class="cena">
                    {{ Math.round(destinacija.cena / 117.32) }} €
                  </div>

                  <div class="kartica_tekst text-capitalize pa-10 ml-n2">
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
                  </div>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col> </v-col>
            </v-row>
            <v-row>
              <v-card class="kartica pt-7 px-15">
                <div class="text-h3 font-weight-bold mb-10 mt-7">
                  Opis destinacije:
                </div>
                <v-responsive>
                  <div class="text-h4 text-justify">{{ destinacija.opis }}</div>
                  <br />
                  <div class="text-h5 mt-10 mb-7">
                    Maksimalan broj osoba: {{ destinacija.maxOsoba }}
                  </div>
                </v-responsive>
              </v-card>
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
    destinacija: {},
  }),
  methods: {
    async load_destinacije() {
      let code, message;
      try {
        let response = await fetch(this.url + "/destinacije.json");
        code = response.status;
        message = response.statusText;
        if (!response.ok) throw new Error();

        const data = await response.json();

        for (const idG in data) {
          for (const idD in data[idG]) {
            if (data[idG][idD]["naziv"] == this.$route.params.naziv) {
              this.destinacija = {
                id: idD,
                tip: data[idG][idD]["tip"],
                opis: data[idG][idD]["opis"],
                cena: data[idG][idD]["cena"],
                naziv: data[idG][idD]["naziv"],
                slike: data[idG][idD]["slike"],
                prevoz: data[idG][idD]["prevoz"],
                maxOsoba: data[idG][idD]["maxOsoba"],
              };
              break;
            }
          }
          if (Object.keys(this.destinacija).length > 0) break;
        }
      } catch (e) {
        console.log(e);
        message = `Firebase: ${code}\u00A0${message}`;
        code = "Ooops";
        this.$router.push({ path: "/error", state: { code, message } });
      }
    },
  },
  beforeMount() {
    this.load_destinacije();
  },
};
</script>
