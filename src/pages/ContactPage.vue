<template>
  <q-page class="wrapper q-pa-md">
    <h4>Accès</h4>

    <section class="q-py-md q-gutter-y-md">
      <div>
        Se garer sur le parking en face de l'hotel, puis continuer à pied sur le
        chemin pendant 400 mètres (10 minutes).
      </div>

      <fullscreenImage
        imagePath="src/assets/itineraire.jpg"
        width="611px"
      ></fullscreenImage>
    </section>

    <div class="map-container">
      <iframe
        class="responsive-iframe"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d456.9039220811653!2d6.855915384126339!3d47.055499712396376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sfr!2sfr!4v1710077781484!5m2!1sfr!2sfr"
        width="100%"
        height="70%"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <h4>Contact</h4>

    <address class="address q-gutter-md column">
      <div style="display: inline-block; white-space: nowrap">
        <q-icon name="location_city" />
        <p>2052 Les Hauts-Geneveys, Suisse</p>
        <div class="q-pa-xs q-gutter-sm">
          <q-btn
            rounded
            unelevated
            class="bg-brand text-white"
            :icon="addressCopied ? 'assignment_turned_in' : 'content_copy'"
            @click="copyAddress('2052 Les Hauts-Geneveys, Suisse')"
            > Copier</q-btn
          >
          <q-btn
            rounded
            unelevated
            class="bg-brand text-white"
            icon="directions"
            href="https://maps.app.goo.gl/wcqpH1eB4UaX841e8"
            target="_blank"
            > Google Maps</q-btn
          >
        </div>
      </div>
      <div style="display: inline-block; white-space: nowrap">
        <q-icon name="phone" />  <a href="tel:+41327242107">+41327242107</a>
        <span> et 079/ 316 77 06</span>
        <div>
          <q-btn
            rounded
            unelevated
            label="Appeler"
            class="bg-brand text-white"
            href="tel:+41327242107"
            icon="call"
          />
        </div>
      </div>
      <div style="display: inline-block; white-space: nowrap">
        <q-icon name="email" />  
        <a href="mailto:jpamcollaud@hotmail.com">jpamcollaud@hotmail.com</a>
      </div>
    </address>
  </q-page>
</template>

<script setup>
import FullscreenImage from "../components/FullscreenImage.vue";
</script>
