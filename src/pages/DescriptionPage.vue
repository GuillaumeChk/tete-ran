<template>
  <q-page class="wrapper q-pa-md">
    <h4>Présentation du chalet</h4>

    <fullscreenImage imagePath="Chalet.jpg"></fullscreenImage>

    <q-responsive
      :ratio="16 / 9"
      style="height: 600px; max-width: 100%; margin-bottom: 100px"
    >
      <q-carousel
        swipeable
        animated
        arrows
        infinite
        thumbnails
        v-model="slide"
        v-model:fullscreen="fullscreen"
        class="uncropped-image"
      >
        <q-carousel-slide
          v-for="(slide, index) in photos"
          :key="index"
          :name="index"
          :img-src="slide"
          class="uncropped-image"
        />

        <template v-slot:control>
          <q-carousel-control position="bottom-right" :offset="[18, 18]">
            <q-btn
              round
              flat
              color="white"
              text-color="black"
              :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
              @click="fullscreen = !fullscreen"
            />
          </q-carousel-control>
        </template>
      </q-carousel>
    </q-responsive>

    <p>
      Notre chalet La Prise-Milord se trouve au nord du village de
      Saint-Sulpice, au Val-de-Travers, à une altitude de 860 mètres, à la
      lisière d’une belle forêt. Situé à l’écart du village de Saint-Sulpice,
      notre chalet bénéficie d’un très bon ensoleillement. Il est bien équipé
      pour les séjours et vacances d’été et d’hiver. Le chalet convient
      particulièrement bien aux familles et aux écoles pour les semaines vertes
      ou de neige. Bien que se trouvant en dehors de toute circulation routière,
      elle est proche des transports publics (train à Fleurier et ligne de bus
      Fleurier – Les Verrières). Il est également ouvert aux réunions de toutes
      sortes, d’un week-end, d’une journée ou même d’une soirée. La location se
      fait sur réservation. Il compte 42 lits répartis dans des chambres de 1×2,
      2×4, 4×6 et 1×8 lits (matelas mousse). Les sacs de couchage ou draps,
      ainsi que les pantoufles sont obligatoires; nous mettons à disposition les
      couvertures et les taies d’oreillers. Un réfectoire (70 places) et une
      salle de jeux modulable en réfectoire (30 places) sont à disposition, de
      même qu’une cuisine parfaitement équipée; cuisinière à gaz (6 brûleurs
      avec four), cuisinière électrique, lave-vaisselle, eau courante chaude et
      froide, frigo et congélateur. Accès au WIFI, flipchart, Beamer (location
      Fr. 10.- par jour) à disposition. Cinq douches et 4 WC complètent le
      confort de la maison. Celle-ci dispose d’un chauffage central. Deux
      terrains de jeux ainsi qu’une aire de pique-nique avec cheminée pour les
      grillades ont été aménagés à l’est. La place de jeux est sécurisée.
    </p>
  </q-page>
</template>

<script setup>
import FullscreenImage from "../components/FullscreenImage.vue";
import { ref } from "vue";

const slide = ref(0);
const fullscreen = ref(false);

const photos = [
  "photos/1AA9259D-2D6F-4F36-A423-8313567FE795_1_105_c.jpeg",
  "photos/1D4DA726-26F6-4FDF-BB91-8CB569A9A39C_1_105_c.jpeg",
  "photos/2F83569C-02D4-471E-848A-00914D14A2BA_1_105_c.jpeg",
  "photos/3EB3378D-DF05-4BCD-8C63-B6A004936F90_1_105_c.jpeg",
  "photos/7C7876A2-AECA-43CA-BE6A-187F6373DA3C_1_105_c.jpeg",
  "photos/9A5D732A-0A9C-4C3B-A055-27F839D0C321_1_105_c.jpeg",
  "photos/9F74426C-1B41-4C55-8DF1-3748D5AEC8F5_1_105_c.jpeg",
  "photos/087A3168-C590-4B89-B2F2-3C36A3CCD622_1_105_c.jpeg",
  "photos/87D35B27-78A5-4EE3-B425-580E224B877F_1_105_c.jpeg",
  "photos/283FB738-534F-451B-B775-3F2AE997EB12_1_105_c.jpeg",
  "photos/774E9415-BA1E-4B2C-9F52-21FF76B4CE2F_1_105_c.jpeg",
  "photos/3369D4D2-98E0-40AB-BADC-ADE5D211A54E_1_105_c.jpeg",
  "photos/3640050B-14A3-448B-806D-0A9F0E02B3BD_1_105_c.jpeg",
  "photos/B3447364-1215-4384-9BFE-4897A326E477_1_105_c.jpeg",
  "photos/D1DEAF55-B11C-46A2-B9F7-226F9E527721_1_105_c.jpeg",
  "photos/E4828447-9189-4BD9-8757-E9F85118AD01_1_105_c.jpeg",
  "photos/EA79FA44-AB7A-4322-A3E2-26974FED787E_1_105_c.jpeg",
];
</script>

<style scoped>
:deep(.q-carousel .q-icon) {
  height: 50px;
  width: 50px;
  font-size: 50px !important;
  color: #b2b2b2c9;
}
:deep(.q-carousel) {
  margin-bottom: 80px;
  overflow: visible !important;
}

:deep(.q-carousel__control.q-carousel__navigation) {
  bottom: -80px !important;
}
.uncropped-image {
  background-size: contain; /* don't crop the image  */
  background-repeat: no-repeat; /* only show the image one time  */
  background-color: #eeeeee; /* color to fill empty space with  */
}
</style>
