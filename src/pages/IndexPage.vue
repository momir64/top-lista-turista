<template>
  <v-app v-scroll="check">
    <navigation :color="color" :flat="flat" />
    <v-main>
      <div class="home_cover_div hidden-sm-and-up">
        <img class="quote" src="@/assets/quote.svg" />
      </div>
      <v-parallax
        id="home_cover"
        class="hidden-xs"
        src="@/assets/background.jpg"
      >
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
        class="topFab"
        color="#bfb7a7"
        icon="mdi-arrow-up"
        @click="toTop"
      >
      </v-btn>
    </v-scale-transition>
    <foote :mediaLinks="true" />
  </v-app>
</template>

<style lang="scss">
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
</style>

<script>
import navigation from "@/components/NavigationBar";
import agencije from "@/components/SveAgencije";
import foote from "@/components/MediaFooter";

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
