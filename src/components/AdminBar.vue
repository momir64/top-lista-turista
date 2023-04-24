<template>
  <v-app-bar
    app
    :color="color"
    :flat="flat"
    dark
    class="px-1"
    :class="{ expand: flat }"
  >
    <v-toolbar-title max-width="100px" v-if="isXs">
      <router-link to="/">
        <v-img id="mini-panel" src="@/assets/panel_mini.png" />
      </router-link>
    </v-toolbar-title>
    <v-toolbar-title v-else>
      <router-link to="/">
        <v-img src="@/assets/panel.png" />
      </router-link>
    </v-toolbar-title>

    <router-link
      style="text-decoration: none; color: inherit"
      to="/admin_panel/agencije"
    >
      <v-btn
        class="ma-4 mr-2"
        variant="outlined"
        size="large"
        append-icon="mdi-compass"
        @click="dialog = true"
        v-if="$vuetify.display.width >= 850"
      >
        Agencije
      </v-btn>
      <v-btn
        class="ma-4 mr-2"
        variant="outlined"
        height="44px"
        min-width="50px"
        width="50px"
        @click="dialog = true"
        v-else
      >
        <v-icon icon="mdi-compass" size="24px"></v-icon>
      </v-btn>
    </router-link>

    <router-link
      style="text-decoration: none; color: inherit"
      to="/admin_panel/korisnici"
    >
      <v-btn
        class="ma-4 ml-2"
        variant="outlined"
        size="large"
        append-icon="mdi-account-multiple"
        @click="dialog = true"
        v-if="$vuetify.display.width >= 850"
      >
        Korisnici
      </v-btn>
      <v-btn
        class="ma-4 ml-2"
        variant="outlined"
        height="44px"
        min-width="50px"
        width="50px"
        @click="dialog = true"
        v-else
      >
        <v-icon icon="mdi-account-multiple" size="24px"></v-icon>
      </v-btn>
    </router-link>
  </v-app-bar>
</template>

<style lang="scss">
.v-toolbar {
  transition: 0.2s;
  height: 80px;
  .v-img,
  .v-btn {
    transition: 0.2s;
    top: 10px;
  }
  .v-img {
    position: absolute;
    max-width: 400px;
    height: 100%;
    width: 100%;
  }
  #mini-panel {
    max-width: 130px;
  }
  .v-btn {
    font: {
      family: "Source Sans Pro";
      weight: 600;
    }
  }
}

@media screen and (min-width: 850px) {
  .expand {
    height: 115px !important;
    padding-top: 46px;
    .v-btn {
      transition: 0.2s;
      margin-right: 70px !important;
    }
    .v-img {
      transition: 0.2s;
      max-width: 520px;
      margin-left: 50px;
    }
  }
}
</style>

<script>
export default {
  data: () => ({
    isXs: false,
    ok: "mesaad",
    dialog: false,
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>
