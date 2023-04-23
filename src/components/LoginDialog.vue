<template>
  <v-card class="container" height="500px">
    <v-row justify="center" class="mb-3">
      <v-col cols="12" class="mb-n1">
        <v-btn
          fab
          icon="mdi-close"
          class="float-right mt-2 mr-2"
          v-bind="props"
          size="30px"
          variant="plain"
          @click="$emit('close')"
        ></v-btn>
      </v-col>
      <v-col cols="12">
        <div class="text-center font-weight-bold text-h4 mt-2 mb-5">
          Prijava
        </div>
      </v-col>
      <v-col cols="12">
        <v-text-field
          bg-color="#fffdf9"
          variant="outlined"
          label="E-mail"
          class="mx-6 mx-sm-10 mb-n8 mt-0"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="mt-n2 mb-0">
        <v-text-field
          bg-color="#fffdf9"
          variant="outlined"
          label="Lozinka"
          :type="show1 ? 'text' : 'password'"
          class="mx-6 mx-sm-10"
          :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append-inner="show1 = !show1"
        ></v-text-field>
      </v-col>
      <v-col cols="5" class="mt-n7 mb-10">
        <v-btn variant="outlined" width="100%" height="40px">
          Prijavi se
        </v-btn>
      </v-col>
    </v-row>
    <div class="text-center mb-6">Nemaš nalog? Napravi ga!</div>
  </v-card>
</template>

<style>
.container {
  width: min(calc(100vw - 32px), 420px);
  background-color: #f8f0e0 !important;
  border-radius: 8px !important;
}
</style>

<script>
export default {
  data: () => ({
    show1: false,
    show2: true,
  }),
  params: {},
  created() {},
};
</script>
