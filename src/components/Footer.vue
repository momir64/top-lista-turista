<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-footer>
    <v-card flat tile class="secondary text-white text-center">
      <v-card-text v-if="mediaLinks">
        <v-btn
          v-for="(icon, i) in icons"
          :key="i"
          class="mx-4"
          :href="icon.link"
          target="_blank"
          icon
        >
          <v-icon size="24px">{{ icon.text }}</v-icon>
        </v-btn>
      </v-card-text>
      <!-- <v-divider></v-divider> -->
      <v-card-text>
        <span id="text1"
          >{{ new Date().getFullYear() }} — Top Lista Turista</span
        >
        <br />
        <span id="text2">
          By
          <a
            target="_blank"
            href="http://moma.rs"
            class="text-decoration-none text-white"
          >
            moma
          </a>
        </span>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style scoped>
.v-card {
  width: 100%;
  background-color: #37342d;
}
.v-footer {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.7);
  background-color: #37342d;
}
#text1 {
  font-weight: 400;
  font-size: medium;
}
#text2 {
  font-weight: 300;
  font-size: medium;
}
</style>

<script>
export default {
  data: () => ({
    icons: [
      {
        text: "mdi-facebook",
        link: "https://www.youtube.com/watch?v=G1IbRujko-A",
      },
      {
        text: "mdi-twitter",
        link: "https://youtu.be/v9D4FtuyYaw",
      },
      {
        text: "mdi-linkedin",
        link: "https://i.kym-cdn.com/photos/images/original/000/733/273/448.jpg",
      },
      {
        text: "mdi-instagram",
        link: "https://youtu.be/dQw4w9WgXcQ",
      },
    ],
  }),
  props: {
    mediaLinks: Boolean,
  },
};
</script>
