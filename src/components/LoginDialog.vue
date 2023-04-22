<template>
  <v-card class="container" height="500px">
    <v-col>
      <v-hover v-slot:default="{ isHovering, props }">
        <v-btn
          fab
          icon="mdi-close"
          class="float-right mt-2 mr-2"
          v-bind="props"
          :elevation="isHovering ? 1 : 0"
          size="30px"
          color="transparent"
          @click="$emit('close')"
        ></v-btn>
      </v-hover>
    </v-col>
    <v-row justify="center" class="mb-14">
      <v-col cols="12">
        <v-text-field
          bg-color="#fffdf9"
          variant="outlined"
          label="E-mail"
          class="mx-4 mx-sm-12"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="mt-n10 mb-3">
        <v-text-field
          bg-color="#fffdf9"
          variant="outlined"
          label="Password"
          class="mx-4 mx-sm-12"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-btn color="#fffdf9" width="100%"> Prijavi se </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
.container {
  background-color: #f8f0e0;
  width: min(calc(100vw - 32px), 420px);
}
</style>

<script>
export default {
  data: () => ({ hover: false }),
  params: {},
  created() {},
};
</script>
