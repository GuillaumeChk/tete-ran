<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      id="navbar"
      :class="
        route.name === 'home' ? 'navbar-transparent gradient' : 'navbar-solid'
      "
      height-hint="98"
    >
      <q-toolbar id="toolbar" class="justify-between q-pa-md">
        <q-btn
          flat
          dense
          round
          class="lt-sm q-mx-sm"
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <div class="lt-sm q-px-xs q-px-md row inline">
          <router-link to="/" rounded class="homeLogoTab">
            <q-img
              v-if="route.name === 'home'"
              no-spinner
              style="max-width: 150px; min-width: 100px; max-height: 80px"
              src="sctdr.svg
            "
              fit="contain"
            ></q-img>
            <q-img
              v-else
              no-spinner
              style="max-width: 150px; min-width: 100px; max-height: 80px"
              src="sctdr.svg
            "
              fit="contain"
            ></q-img
          ></router-link>
        </div>
        <div class="lt-sm" style="width: 50px"></div>

        <div class="gt-xs row items-center">
          <q-btn
            flat
            dense
            round
            class="lt-sm q-mx-sm"
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />
          <div class="q-py-md q-pl-md row inline">
            <router-link to="/" rounded class="homeLogoTab">
              <q-img
                v-if="route.name === 'home'"
                no-spinner
                style="max-width: 150px; min-width: 100px; max-height: 80px"
                src="sctdr.svg
            "
                fit="contain"
              ></q-img>
              <q-img
                v-else
                no-spinner
                style="max-width: 150px; min-width: 100px; max-height: 80px"
                src="sctdr.svg
            "
                fit="contain"
              ></q-img>
            </router-link>
          </div>
        </div>

        <div class="gt-xs q-px-sm">
          <div class="gt-xs text-h5 column inline">
            Chalet Ski Club Tête de Ran
          </div>
          <!-- <div
            class="gt-md q-pl-xl column inline text-uppercase text-weight-light"
            style="font-size: 1em"
          >
            Menuiserie    —    Pose de cuisine    —    Sur mesure
          </div> -->
        </div>
        <div class="gt-xs column q-gutter-y-sm justify-evenly">
          <!-- <div
            style="display: inline-block; white-space: nowrap; font-size: 14px"
          >
            <q-icon name="phone" />  <a
              :style="route.name === 'home' ? 'color:white' : 'color: #395875'"
              href="tel:+41"
              >+41 X XX XX XX XX</a
            >
          </div> -->
          <div
            style="display: inline-block; white-space: nowrap; font-size: 14px"
          >
            <q-icon name="mail" />  <a
              :style="
                route.name === 'home' ? 'color:#395875' : 'color: #395875'
              "
              href="mailto:jpamcollaud@hotmail.com"
              >jpamcollaud@hotmail.com</a
            >
          </div>
        </div>
      </q-toolbar>

      <q-tabs
        v-model="tab"
        no-caps
        dense
        align="justify"
        class="gt-xs"
        style="font-size: 10px; background-color: rgba(255, 255, 255, 0.7)"
      >
        <q-route-tab
          v-for="route in routesList"
          :key="route.title"
          :name="route.title"
          exact
          :to="route.to"
        >
          <span class="gt-sm" style="font-size: 0.9em">{{ route.title }}</span>
          <span class="lt-md text-uppercase" style="font-size: 0.9em">{{
            route.title
          }}</span>
        </q-route-tab>
      </q-tabs>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      elevated
      overlay
      class="col items-center"
    >
      <div class="row justify-center">
        <q-btn
          flat
          rounded
          size="xl"
          class="q-ma-lg text-brand"
          @click="toggleLeftDrawer"
        >
          <q-icon name="close" size="lg" class="textSize" />
        </q-btn>
      </div>
      <q-list class="q-gutter-y-sm text-brand q-pl-xl">
        <q-item
          v-for="route in routesList"
          clickable
          tag="to"
          :key="route.to"
          :to="route.to"
          :active="false"
          class="items-center"
        >
          <q-item-section v-if="route.icon" avatar>
            <q-icon :name="route.icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ route.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

      <q-separator class="q-my-lg q-mx-xl" inset />

      <router-link to="/" rounded class="homeLogoTab column items-center">
        <q-img
          no-spinner
          style="max-width: 150px; min-width: 100px; max-height: 80px"
          src="sctdr.svg
          "
          fit="contain"
        ></q-img>
      </router-link>

      <q-separator class="q-my-lg q-mx-xl" inset />

      <div class="column q-gutter-y-sm items-center">
        <div
          style="display: inline-block; white-space: nowrap; font-size: 14px"
        >
          <q-icon name="mail" />  <a
            style="color: #395875"
            href="mailto:contact@gslr.ch"
            >contact@gslr.ch</a
          >
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

let tab = ref("unique");

let route = useRoute();

const routesList = [
  {
    title: "Le chalet",
    // caption: 'github.com/quasarframework',
    icon: "chalet",
    to: "description",
  },
  {
    title: "Tarifs et Réservation",
    // caption: 'chat.quasar.dev',
    icon: "calendar_month",
    to: "booking",
  },
  {
    title: "Taxe de séjour",
    icon: "attach_money",
    to: "tax",
  },
  {
    title: "Accès",
    icon: "route",
    to: "contact",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

// Navbar — trantparent to solid
// let topTransparent = true;
// uncomment below to enable on specific pages only
let topTransparent = ref(false);
watch(
  () => route.name,
  () => {
    topTransparent.value = route.name === "description";
  },
  { immediate: true }
);

window.onscroll = function () {
  if (topTransparent.value) {
    scrollFunction();
  }
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").classList.add("navbar-solid");
    document.getElementById("navbar").classList.remove("navbar-transparent");
    // document.getElementById("toolbar").classList.remove("gradient");
    document.getElementById("navbar").classList.remove("gradient");
  } else {
    document.getElementById("navbar").classList.add("navbar-transparent");
    document.getElementById("navbar").classList.remove("navbar-solid");
    // document.getElementById("toolbar").classList.add("gradient");
    document.getElementById("navbar").classList.add("gradient");
  }
}
</script>

<style scoped>
.navbar-solid {
  color: #395875;
  background-color: white;
  box-shadow: 0px 2px 8px rgb(0 0 0 / 20%);
}
.navbar-transparent {
  color: #395875;
  background-color: transparent;
}
.gradient {
  background: linear-gradient(rgba(255, 255, 255, 0.633), 85%, transparent);
}

a {
  text-decoration: none;
}
/* .homeLogoTab {
  height: 30px;
} */
</style>
