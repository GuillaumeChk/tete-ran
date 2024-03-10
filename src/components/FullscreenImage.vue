<template>
  <q-img @click="fullscreen = true" :src="imagePath"></q-img>

  <q-dialog
    v-model="fullscreen"
    class="q-pb-lg column flex-center q-gutter-y-md"
    full-width
    full-height
  >
    <q-btn icon="close" color="white" text-color="black" round v-close-popup />
    <q-img width="611px" :src="imagePath"></q-img>
  </q-dialog>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["imagePath"]);

let fullscreen = ref(false);
</script>
