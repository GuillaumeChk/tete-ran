<template>
  <q-page class="wrapper q-pa-md">
    <section class="q-pa-md q-pl-lg q-gutter-y-md">
      <p>Cette page est réservée aux admnistrateurs du site.</p>
      <p>Pour revenir à l'acceuil :</p>

      <q-btn rounded unelevated label="Accueil" to="/" color="primary" />
    </section>

    <div class="q-px-md q-gutter-y-md q-py-xl">
      <h5>Accès privé</h5>

      <q-input
        v-model="password"
        filled
        bg-color="grey-4"
        label-color="grey-10"
        :type="isPwd ? 'password' : 'text'"
        style="max-width: 500px"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <div v-if="password === pwdEnvVariable" class="q-mt-xl q-gutter-y-md">
        <CalendarManager />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue";
import CalendarManager from "../components/CalendarManager.vue";

// const pwdEnvVariable = import.meta.env.VITE_ADMIN_BOOKING_PASSWORD;
const pwdEnvVariable = "test";

let password = ref("");
let isPwd = ref(true);
</script>
