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
              <v-col cols="12" md="8" class="coll">
                <v-card class="kartica">
                  <v-carousel
                    cycle
                    id="galerija"
                    height="600px"
                    color="#fffdf9"
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
              <v-col cols="12" md="4" class="colr">
                <v-card
                  id="info"
                  class="kartica px-5 d-flex flex-column"
                  height="600px"
                >
                  <div class="text-tip mt-12">
                    {{ destinacija.tip }}
                  </div>
                  <div class="text-naziv font-weight-bold mt-2">
                    {{ destinacija.naziv }}
                  </div>
                  <div class="text-cena font-weight-bold my-auto">
                    {{ Math.round(destinacija.cena / 117.32) }} €
                  </div>

                  <div class="text-prevoz text-capitalize mb-12">
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
            <v-row> <v-col> </v-col> </v-row>
            <v-row>
              <v-card class="kartica pt-7 px-9 px-md-15 mx-3 mt-1">
                <div class="text-opis-naslov font-weight-bold mb-10 mt-7">
                  Opis destinacije:
                </div>
                <v-responsive>
                  <div class="text-opis text-justify">
                    {{ destinacija.opis }}
                  </div>
                  <br />
                  <div class="text-osobe mt-10 mb-11">
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
.text-tip {
  font-size: clamp(1.4em, 1.8vw, 3.5rem) !important;
}
.text-naziv {
  font-size: clamp(1.8em, 3.1vw, 4.5rem) !important;
  line-height: calc(clamp(2.4em, 4vw, 4rem) * 0.4);
}
.text-cena {
  font-size: clamp(2.4em, 5.5vw, 6rem) !important;
  padding-bottom: 20px;
}
.text-prevoz {
  font-size: clamp(1.45em, 2.4vw, 1.8em) !important;
}
.text-opis-naslov {
  font-size: clamp(1.7em, 4vw, 3em) !important;
}
.text-opis {
  font-size: clamp(1.18em, 3vw, 1.8em) !important;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}
.text-osobe {
  font-size: clamp(1em, 3vw, 1.5em) !important;
}
@media screen and (max-width: 959.9px) {
  .text-tip {
    font-size: clamp(1.4em, 3vw, 2.5rem) !important;
  }
  .text-naziv {
    font-size: clamp(2.4em, 6vw, 5rem) !important;
    // line-height: calc(clamp(2.4em, 4vw, 4rem) * 0.4);
  }
  .text-cena {
    font-size: clamp(4em, 10vw, 7rem) !important;
    padding-bottom: 20px;
  }
  .text-prevoz {
    font-size: clamp(1.45em, 4vw, 2.5em) !important;
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
@media screen and (max-width: 1600px) {
  #content_holder_container {
    padding-left: 8vw !important;
    padding-right: 8vw !important;
  }
  #galerija,
  #info {
    height: 530px !important;
  }
}
@media screen and (max-width: 1340px) {
  #galerija,
  #info {
    height: 440px !important;
  }
}
@media screen and (max-width: 599.9px) {
  #content_holder {
    padding-top: 20px;
  }
}
@media screen and (min-width: 960px) {
  .coll {
    padding-right: max(1vw, 14px);
  }
  .colr {
    padding-left: max(1vw, 14px);
  }
}
@media screen and (max-width: 959.9px) {
  .coll {
    margin-bottom: 16px;
  }
  .colr {
    margin-bottom: 50px;
  }
  .text-tip {
    margin-top: 28px !important;
  }
  .text-prevoz {
    margin-bottom: 28px !important;
  }
}
@media screen and (max-width: 1160px) {
  #galerija,
  #info {
    height: 400px !important;
  }
}
@media screen and (max-width: 850px) {
  #content_holder_container {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  #galerija,
  #info {
    height: 400px !important;
  }
}
@media screen and (max-width: 599.9px) {
  #content_holder {
    padding-top: 10px !important;
  }
  #galerija {
    height: 230px !important;
  }
  #info {
    height: 330px !important;
  }
  .coll {
    margin-bottom: 3px;
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
    destinacija: {},
  }),
  methods: {
    toTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    check() {
      this.fab = window.pageYOffset > 60;
    },
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
        const title = "Ooops";
        this.$router.push({
          path: "/error",
          state: code == 200 ? {} : { title, message },
        });
      }
    },
  },
  beforeMount() {
    this.load_destinacije();
  },
};
</script>
