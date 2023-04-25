<template>
  <v-container id="content_holder_container">
    <v-card
      id="content_holder"
      class="align-center text-center px-xs-3 px-sm-5 px-md-11"
    >
      <v-container fluid>
        <v-row>
          <v-col id="card_pretraga_col">            
            <v-card
              class="card_pretraga mb-15 d-flex"
              height="56px"
              variant="outlined"
            >
              <div class="izbornik">
                <v-select
                  bg-color="#fffdf9"
                  :items="opcije"
                  v-model="selektovana"
                  variant="solo"
                >
                  <template v-slot:selection="{ item }">
                    <span id="izbor">{{ item.title }}</span>
                  </template>
                </v-select>
              </div>
              <v-text-field
                bg-color="#fffdf9"
                single-line
                id="pretraga"
                label="Pretraga"
                variant="solo"
                append-inner-icon="mdi-magnify"
              ></v-text-field>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            class="pa-xs-3 pa-sm-4 pa-md-5 pa-lg-6 mb-2 mb-sm-1"
            v-for="agencija in agencije"
            :key="agencija.id"
            cols="12"
            md="6"
            lg="4"
          >
            <router-link
              style="text-decoration: none; color: inherit"
              :to="`/agencija/${agencija.naziv}`"
            >
              <v-card class="kartica">
                <v-img
                  :src="agencija.logo"
                  class="align-end"
                  gradient="to bottom, rgba(0,0,0,0.05), rgba(0,0,0,.4)"
                  height="222px"
                  cover
                >
                </v-img>
                <v-card-title class="kartica_naslov">{{
                  agencija.naziv
                }}</v-card-title>
                <v-card-text class="kartica_tekst">
                  {{ agencija.adresa }}<br />
                  {{ agencija.email }}<br />
                  {{ agencija.telefon }}<br />
                </v-card-text>
              </v-card>
            </router-link>
          </v-col>
        </v-row>
        <div style="height: 100px; width: 100%"></div>
      </v-container>
    </v-card>
  </v-container>
</template>

<style scoped lang="scss">
.kartica_naslov {
  font-family: "Source Sans Pro" !important;
  padding-bottom: 10px;
  padding-top: 10px;
  font-weight: 600;
  font-size: 26px;
}
.kartica_tekst {
  font-family: "Source Sans Pro" !important;
  padding-bottom: 22px;
  font-size: 16px;
}
.izbornik {
  transition: 0.11s;
  width: 160px;
}
#izbor {
  padding-left: 17px;
}
.card_pretraga {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  margin-right: auto !important;
  margin-left: auto !important;
  border-radius: 10px;
  max-width: 65vw;
  margin-top: 34px;
}
#content_holder {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.7);
  background-color: #f8f0e0;
  border-radius: 0;
}
#content_holder_container {
  padding-top: calc(100vh - 220px);
  padding-left: 10vw;
  padding-right: 10vw;
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
    width: 70vw;
    max-width: 975px;
  }
}
@media screen and (max-width: 850px) {
  .card_pretraga {
    width: 100%;
    max-width: 100%;
    margin-top: 15px !important;
  }
  #card_pretraga_col {
    transition: all 0.11s, margin-top 0s;
    margin-top: 0;
    padding-top: 0;
  }
  #content_holder_container {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
}
@media screen and (max-width: 599.9px) {
  .izbornik {
    transition: 0.11s;
    width: 140px;
  }
  #izbor {
    padding-left: 7px;
  }
}
</style>

<script>
export default {
  data: () => ({
    url: "https://top-lista-turista-default-rtdb.europe-west1.firebasedatabase.app/",
    selektovana: ["Agencija"],
    opcije: ["Agencija", "Destinacija"],
    agencije: [],
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
