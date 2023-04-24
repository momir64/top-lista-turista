<template>
  <v-app v-scroll="check">
    <navigation :color="'secondary'" :flat="false" />
    <v-main>
      <v-container id="content_holder_container">
        <v-card
          id="content_holder"
          class="align-center text-center px-xs-3 px-sm-5 px-md-11"
        >
          <v-btn
            class="mb-9"
            height="50px"
            width="270px"
            variant="outlined"
            prependIcon="mdi-plus"
          >
            dodaj novu agenciju
          </v-btn>

          <v-list
            class="px-6 py-8 border-opacity-100"
            rounded="xl"
            border="sm"
            bg-color="#f8f0e0"
            lines="one"
          >
            <v-list-item v-for="(agencija, i) in agencije" :key="agencija.id">
              <template v-slot:title>
                <div class="float-left pe-10">
                  {{ (i + 1) * (i + 1) * (i + 1) }}
                </div>
                <span class="float-left">{{ agencija.naziv }}</span>
              </template>
              <template v-slot:append>
                <v-btn icon="mdi-pencil" variant="plain"></v-btn>
                <v-btn icon="mdi-delete" variant="plain"></v-btn>
              </template>
            </v-list-item>
          </v-list>
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
#content_holder {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.7);
  min-height: calc(100vh - 80px - 90px);
  background-color: #f8f0e0;
  padding-top: 45px;
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
@media screen and (max-width: 599.9px) {
  #content_holder {
    padding-top: 20px;
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
    fab: null,
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
  },
  beforeMount() {
    this.load_agencije();
  },
};
</script>
