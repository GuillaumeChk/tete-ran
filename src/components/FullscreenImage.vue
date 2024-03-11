<template>
  <q-img
    @click="fullscreen = true"
    class="gt-sm"
    :style="{ maxWidth: width }"
    :src="imagePath"
  ></q-img>

  <q-img class="lt-md" :style="{ maxWidth: width }" :src="imagePath"></q-img>

  <q-dialog
    v-model="fullscreen"
    full-height
    full-width
    style="overflow: hidden"
  >
    <q-img
      :src="imagePath"
      class="full-width"
      fit="contain"
      @click="fullscreen = false"
    ></q-img>
  </q-dialog>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  imagePath: String,
  width: String,
});

let fullscreen = ref(false);
</script>

<style>
.full-width {
  max-width: 100%;
  max-height: 100%;
}
</style>
