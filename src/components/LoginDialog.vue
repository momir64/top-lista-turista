<template>
  <v-card
    class="kartica_prijava"
    height="500px"
    v-bind="registracijaShow"
    v-if="!registracijaShow"
  >
    <v-form @submit.prevent="prijava" style="height: 100%">
      <v-row justify="center" class="mb-3" style="height: 100%">
        <v-col cols="12" class="mb-n1">
          <div
            v-show="loginError"
            style="width: 100%"
            class="text-center position-absolute text-red-darken-2 mt-err"
          >
            Neispravan e-mail ili lozinka!
          </div>
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
            v-model="loginEmail"
            bg-color="#fffdf9"
            variant="outlined"
            label="E-mail ili korisničko ime"
            class="mx-6 mx-sm-10 mb-n8 mt-0"
            @update:focused="loginError = false"
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="mt-n2 mb-0">
          <v-text-field
            v-model="loginLozinka"
            bg-color="#fffdf9"
            variant="outlined"
            label="Lozinka"
            class="mx-6 mx-sm-10"
            :type="lozinkaShow ? 'text' : 'password'"
            :append-inner-icon="lozinkaShow ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append-inner="lozinkaShow = !lozinkaShow"
            @update:focused="loginError = false"
          ></v-text-field>
        </v-col>
        <v-col cols="5" class="mt-n7 mb-10">
          <v-btn type="submit" variant="outlined" width="100%" height="40px">
            Prijavi se
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
    <div class="text-center mb-6">
      Nemaš nalog?

      <span
        v-bind="props"
        @click="
          registracijaShow = true;
          loginError = false;
          lozinkaShow = false;
        "
        style="cursor: pointer !important"
        class="cr-p text-decoration-underline"
        >Napravi ga!</span
      >
    </div>
  </v-card>

  <v-card class="kartica_registracija" height="100%" v-else>
    <v-form @submit.prevent="registracija" validate-on="blur" style="height: 100%">
      <v-row justify="center" class="mb-3" no-gutters>
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
          <v-btn
            fab
            icon="mdi-arrow-left"
            class="mt-2 ml-2"
            v-bind="props"
            size="30px"
            variant="plain"
            @click="registracijaShow = false"
          ></v-btn>
        </v-col>
        <v-col cols="12">
          <div class="text-center font-weight-bold text-h4 mt-2 mb-8">
            Registracija
          </div>
        </v-col>
        <v-col cols="12" sm="4"> <v-text-field :rules="[required].flat()"               class="mx-4 mx-sm-2 mx-md-3 my-2 my-sm-1 ml-sm-4 ml-md-8" variant="outlined" bg-color="#fffdf9" label="Ime"            v-model="ime"></v-text-field> </v-col>
        <v-col cols="12" sm="4"> <v-text-field :rules="[required].flat()"               class="mx-4 mx-sm-2 mx-md-3 my-2 my-sm-1"                 variant="outlined" bg-color="#fffdf9" label="Prezime"        v-model="prezime"></v-text-field> </v-col>
        <v-col cols="12" sm="4"> <v-text-field :rules="[required, dateCheck].flat()"    class="mx-4 mx-sm-2 mx-md-3 my-2 my-sm-1 mr-sm-4 mr-md-8" variant="outlined" bg-color="#fffdf9" label="Datum rođenja"  v-model="datum" type="date"></v-text-field> </v-col>
        <v-col cols="12" sm="6"> <v-text-field :rules="[required, nameCheck].flat()"    class="mx-4 mx-sm-2 mx-md-3 my-2 my-sm-1 ml-sm-4 ml-md-8" variant="outlined" bg-color="#fffdf9" label="Korisničko ime" v-model="korIme "></v-text-field> </v-col>
        <v-col cols="12" sm="6"> <v-text-field :rules="[required, passCheck].flat()"    class="mx-4 mx-sm-2 mx-md-3 my-2 my-sm-1 mr-sm-4 mr-md-8" variant="outlined" bg-color="#fffdf9" label="Lozinka"        v-model="lozinka" autocomplete="new-password" :type="lozinkaShow2 ? 'text' : 'password'" :append-inner-icon="lozinkaShow2 ? 'mdi-eye' : 'mdi-eye-off'" @click:append-inner="lozinkaShow2 = !lozinkaShow2"></v-text-field> </v-col>
        <v-col cols="12" sm="6"> <v-text-field :rules="[required, emailCheck].flat()"   class="mx-4 mx-sm-2 mx-md-3 my-2 my-sm-1 ml-sm-4 ml-md-8" variant="outlined" bg-color="#fffdf9" label="Email"          v-model="email"></v-text-field> </v-col>
        <v-col cols="12" sm="6"> <v-text-field :rules="[required, numericPhone].flat()" class="mx-4 mx-sm-2 mx-md-3 my-2 my-sm-1 mr-sm-4 mr-md-8" variant="outlined" bg-color="#fffdf9" label="Telefon"        v-model="telefon"></v-text-field> </v-col>    
        <v-col cols="12" sm="5"> <v-text-field :rules="[required].flat()"               class="mx-4 mx-sm-2 mx-md-3 my-2 my-sm-1 ml-sm-4 ml-md-8" variant="outlined" bg-color="#fffdf9" label="Ulica i broj"   v-model="ulica"></v-text-field> </v-col>        
        <v-col cols="12" sm="4"> <v-text-field :rules="[required].flat()"               class="mx-4 mx-sm-2 mx-md-3 my-2 my-sm-1"                 variant="outlined" bg-color="#fffdf9" label="Grad"           v-model="grad"></v-text-field> </v-col>        
        <v-col cols="12" sm="3"> <v-text-field :rules="[required, numeric].flat()"      class="mx-4 mx-sm-2 mx-md-3 my-2 my-sm-1 mr-sm-4 mr-md-8" variant="outlined" bg-color="#fffdf9" label="Poštanski broj" v-model="postBroj"></v-text-field> </v-col>
      </v-row>
      <v-row justify="center" justify-sm="end" no-gutters>
        <v-col cols="5" sm="3" class="mt-3 mt-sm-2 mx-sm-3 mr-sm-8 mb-12 mb-sm-8">
          <v-btn type="submit" variant="outlined" width="100%" height="40px">
            Registruj se
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>

<style scoped>
.kartica_prijava {
  width: min(calc(100vw - 32px), 420px);
  background-color: #f8f0e0 !important;
  border-radius: 8px !important;
}
.kartica_registracija {
  width: min(calc(100vw - 32px), 760px);
  background-color: #f8f0e0 !important;
  border-radius: 8px !important;
}
.mt-err {
  margin-top: 144px !important;
}
</style>

<script>
export default {
  data: () => ({
    loginError: false,
    lozinkaShow: false,
    lozinkaShow2: false,
    registracijaShow: false,
    loginEmail: null,
    loginLozinka: null,
    ime: null,
    prezime: null,
    datum: null,
    korIme: null,
    lozinka: null,
    email: null,
    telefon: null,
    ulica: null,
    grad: null,
    postBroj: null,
    required: [
        value => !!value || 'Obavezno polje'
    ],
    numeric: [
      value => /^\d+$/.test(value) || 'Mora biti broj'
    ],
    numericPhone: [
      value => /^[\+]?[(]?[0-9]{3}[)]?[-\s\.\\/]?[0-9]{2,6}[-\s\.]?[0-9]{2,6}[-\s\.]?[0-9]{1,6}$/.test(value) || "Neispravan telefon",
      // value => /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(value) || 'Neispravan telefon'
    ],
    emailCheck: [
      value => /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(value) || 'Neispravan email'
    ],
    nameCheck: [
      value => /^[a-z0-9_-]{2,20}$/.test(value) || 'Neispravano korisničko ime'
    ],
    dateCheck: [
      (value) => Date.parse(value) - Date.parse(new Date()) < 0 || "Neispravan datum",
    ],
    passCheck: [
      value => /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(value) || 'Nedovoljno jaka lozinka' //(?=.*?[#?!@$ %^&*-])
    ],
  }),
  methods: {
    prijava() {
      this.loginError =
        !this.loginEmail ||
        !this.loginLozinka ||
        this.loginEmail.trim().length == 0 ||
        this.loginLozinka.trim().length == 0;
      if (this.loginEmail == "admin" && this.loginLozinka == "admin")
        this.$router.push("/admin_panel");
      this.loginEmail = "";
      this.loginLozinka = "";
    },
    registracija() { 

    },
  },

};
</script>
