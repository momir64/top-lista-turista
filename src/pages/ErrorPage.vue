<template>
  <v-app>
    <navigation :color="'secondary'" :flat="false" />
    <v-main>
      <v-responsive
        id="content_holder_container"
        class="d-flex text-center fill-height align-center"
      >
        <p id="p_code">{{ code }}</p>
        <pre><p id="p_message"><br />{{ message }}</p></pre>
      </v-responsive>
    </v-main>
    <foote :mediaLinks="false" />
  </v-app>
</template>

<style scoped lang="scss">
#content_holder_container {
  height: calc(100vh - 80px - 90px) !important;
  margin-top: 16px;
  padding-top: 0px;
}
$fsize: min(25vw, calc(40vh - 70px));
$lsize: calc($fsize * 0.8);
#p_code {
  line-height: $lsize;
  font: {
    size: $fsize;
    family: "Roboto";
    weight: 600;
  }
}
#p_message {
  @extend #p_code;
  margin-left: 10vw;
  margin-right: 10vw;
  line-height: calc($lsize * 0.35);
  font: {
    size: calc($fsize / 3);
    weight: 300;
  }
}
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: inherit;
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
    code: 404,
    message: "Page Not Found",
  }),
  mounted() {
    if (history.state.code) this.code = history.state.code;
    if (history.state.message) this.message = history.state.message;
  },
};
</script>
