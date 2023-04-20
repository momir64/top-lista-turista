<template>
  <v-app v-scroll="check">
    <navigation :color="color" :flat="flat" />
    <v-main>
      <div class="home_cover_div hidden-sm-and-up">
        <img class="quote" src="@/assets/quote.svg" />
      </div>
      <v-parallax id="home_cover" class="hidden-xs" src="@/assets/background.jpg">
        <img class="quote" src="@/assets/quote.svg" />
      </v-parallax>
      <agencije />
    </v-main>
    <v-scale-transition>
      <v-btn
        fab
        v-show="fab"
        dark
        fixed
        bottom
        right
        color="#bfb7a7"
        icon="mdi-arrow-up"
        @click="toTop"
      >
      </v-btn>
    </v-scale-transition>
    <foote />
  </v-app>
</template>

<style lang="scss">
@font-face {
  font-family: "Times New Roman";
  src: url("C:\\Windows\\Fonts\\times.ttf") format("opentype");
}
.quote {
  position: absolute;
  padding: 70px;
  margin: auto;
  width: 100%;
  max-width: 800px;
  bottom: 80px;
  right: 0;
  left: 0;
  top: 0;
}
#home_cover {
  position: absolute;
  width: 100vw;
  height: calc(100vh - 75px);
  top: 0;
  left: 0;
}
.home_cover_div {
  @extend #home_cover;
  background: url("@/assets/background.jpg");

  background: {
    size: cover;
    position: 35% 100%;
    repeat: no-repeat;
  }
}
:root {
  color-scheme: dark;
  font-family: "Source Sans Pro";
}
.v-main {
  background-color: #dcd4c6;
}
.v-btn[fab] {
  position: fixed;
  z-index: 1000;
  bottom: 30px;
  right: 30px;
}
</style>

<script>
import navigation from "@/components/NavigationBar";
import agencije from "@/components/SveAgencije";
import foote from "@/components/Footer";

export default {
  components: {
    navigation,
    agencije,
    foote,
  },

  data: () => ({
    flat: null,
    fab: null,
    color: "",
  }),

  watch: {
    flat(value) {
      if (value) {
        this.color = "transparent";
      } else {
        this.color = "secondary";
      }
    },
  },

  methods: {
    toTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    check() {
      this.fab = window.pageYOffset > 60;
      this.flat = window.pageYOffset <= 60 && window.innerHeight > 520;
    },
  },
  mounted() {
    this.check();
    window.addEventListener("resize", this.check, { passive: true });
  },
};
</script>
