<template>
  <v-card>
    <v-card-text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" block @click="$emit('close')">
        Close Dialog
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped></style>

<script>
export default {
  data: () => ({}),
  params: {},
  created() {},
};
</script>
