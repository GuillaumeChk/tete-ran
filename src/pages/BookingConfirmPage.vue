<template>
  <q-page class="wrapper column justify-center items-center">
    <h6>Confirmation</h6>
    <q-spinner v-if="!confirmed" color="blue" size="3em" />
    <q-icon v-else name="done" color="green" size="3em" />
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

let route = useRoute();
let confirmed = ref(false);

const bookingID = route.params.id;

console.log(route.params.id);

onMounted(async () => {
  if (bookingID !== undefined) {
    console.log(bookingID);

    await updateDoc(doc(db, "calendar", bookingID), {
      confirmed: true,
    });

    confirmed.value = true;
  }
});
</script>
