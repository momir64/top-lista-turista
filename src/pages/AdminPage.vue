<template>
  <v-app v-scroll="check">
    <navigation :color="'secondary'" :flat="false" />
    <v-main>
      <v-container id="content_holder_container">
        <v-card
          id="content_holder"
          class="align-center text-center px-4 px-sm-14 px-md-16"
        >
          <v-card class="kartica mb-9" variant="outlined">
            <div class="text-h4 font-weight-bold mb-n0 mt-7">Agencije:</div>
            <v-list class="px-3 px-sm-6 py-13" bg-color="#fffdf9" lines="one">
              <template v-for="(agencija, i) in agencije" :key="agencija.id">
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
                            {{ agencija.naziv }}
                          </span>
                        </div>
                      </template>
                      <template v-slot:append>
                        <v-btn
                          variant="plain"
                          @click="
                            $router.push('/admin_panel/agencija/' + agencija.id)
                          "
                          icon="mdi-pencil"
                        ></v-btn>
                        <v-hover>
                          <template v-slot:default="{ isHovering, props }">
                            <v-btn
                              icon="mdi-delete"
                              variant="plain"
                              v-bind:="props"
                              @click="
                                dialog = true;
                                agencijaBrisanje = agencija.naziv;
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

          <v-btn
            class="px-10 kartica mt-1"
            height="50px"
            variant="outlined"
            prependIcon="mdi-plus"
            @click="$router.push('/admin_panel/agencija/')"
          >
            dodaj novu agenciju
          </v-btn>
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
          Da li ste sigurni da želite da obrišete agenciju
          {{ agencijaBrisanje }}?
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
.text-opis-naslov {
  font-size: clamp(1.7em, 4vw, 3em) !important;
}
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
  padding-top: 56px;
  padding-bottom: 64px;
  border-radius: 0;
}
#content_holder_container {
  padding-right: 20vw;
  padding-left: 20vw;
  padding-top: 16px;
  padding-bottom: 0;
  max-width: 100vw;
}
@media screen and (max-width: 1280px) {
  #content_holder_container {
    padding-left: 15vw !important;
    padding-right: 15vw !important;
  }
}
@media screen and (max-width: 959.9px) {
  #content_holder_container {
    padding-left: 10vw !important;
    padding-right: 10vw !important;
  }
}
@media screen and (max-width: 599.9px) {
  #content_holder {
    padding-top: 35px;
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
import navigation from "@/components/AdminBar";
import foote from "@/components/MediaFooter";

export default {
  components: {
    navigation,
    foote,
  },
  data: () => ({
    url: "https://top-lista-turista-default-rtdb.europe-west1.firebasedatabase.app/",
    agencije: [],
    agencijaBrisanje: null,
    fab: null,
    dialog: false,
  }),
  methods: {
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
            adresa: data[id]["adresa"],
            email: data[id]["email"],
            telefon: data[id]["brojTelefona"],
          });
        }
        this.agencije = results;
      } catch (e) {
        console.log(e);
        message = `Firebase: ${code}\u00A0${message}`;
        code = "Ooops";
        this.$router.push({ path: "/error", state: { code, message } });
      }
    },
    brisanjeAgencije() {},
  },
  beforeMount() {
    this.load_agencije();
  },
};
</script>
