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

    <v-btn
      class="ma-4"
      variant="outlined"
      size="large"
      append-icon="mdi-account-circle"
      @click="dialog = true"
    >
      PRIJAVA
    </v-btn>
    <v-dialog v-model="dialog" width="auto">
      <login v-on:close="dialog = false"></login>
    </v-dialog>
  </v-app-bar>
</template>

<style scoped lang="scss">
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
import login from "@/components/LoginDialog";
export default {
  components: {
    login,
  },
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
