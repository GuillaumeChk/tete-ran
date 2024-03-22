<template>
  <q-page class="wrapper q-pa-md q-gutter-y-md">
    <h4>Accès</h4>

    <section class="q-py-md q-gutter-y-md">
      <div>
        Se garer sur le parking en face de l'hotel, puis continuer à pied sur le
        chemin pendant 400 mètres (10 minutes).
      </div>

      <fullscreenImage
        imagePath="itineraire.jpg"
        width="611px"
      ></fullscreenImage>
    </section>

    <div>Latitude, longitude : 47.0525, 6.8538</div>
    <div>47°03'09.0"N 6°51'13.7"E</div>

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

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
      style="max-width: 400px"
    >
      <h6>Nous contacter</h6>
      <q-input
        v-model="clientMessage"
        lazy-rules="ondemand"
        filled
        label-slot
        autogrow
        label="Écrire votre message"
        :input-style="{ minHeight: '150px' }"
      >
      </q-input>

      <!-- Nom -->
      <q-input
        label-slot
        filled
        v-model="clientName"
        type="text"
        lazy-rules="ondemand"
        :rules="[(val) => (val && val.length > 0) || 'Veuillez entrer un nom']"
        hide-bottom-space
        label="Nom"
      ></q-input>

      <!-- Tel -->
      <q-input
        label-slot
        filled
        v-model="clientPhone"
        type="tel"
        maxlength="13"
        mask="##############"
        lazy-rules="ondemand"
        :rules="[
          (val) =>
            (val && val.length > 0) || 'Veuillez entrer un numéro valide',
        ]"
        hide-bottom-space
        label="Télephone"
      >
      </q-input>

      <!-- Mail -->
      <q-input
        label-slot
        filled
        v-model="clientMail"
        type="email"
        lazy-rules="ondemand"
        :rules="[
          (val) =>
            (val && val.length > 0) ||
            'Veuillez entrer une adresse mail valide',
        ]"
        hide-bottom-space
        label="Mail"
      >
      </q-input>

      <div class="q-pt-md">
        <q-btn rounded @click="onReset()" flat color="primary">
          <div>Effacer</div>
        </q-btn>
        <q-btn
          rounded
          unelevated
          icon-right="send"
          class="q-ml-sm"
          type="submit"
          color="blue"
          label="Envoyer"
        >
        </q-btn>
      </div>
    </q-form>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { copyToClipboard } from "quasar";
import FullscreenImage from "../components/FullscreenImage.vue";

const mailServiceUrlEnvVariable = import.meta.env.VITE_MAIL_SERVICE_URL;

let clientName = ref("");
let clientMail = ref();
let clientPhone = ref();
let clientMessage = ref("");

async function onSubmit() {
  // Envoi du mail
  let resume =
    "A écrit : \n\n« " +
    clientMessage.value +
    " »\n\n et a laissé les coordonnées suivantes : \n\n Nom : " +
    clientName.value +
    "\n Mail : " +
    clientMail.value +
    "\nTél : " +
    clientPhone.value +
    "\n\n <p><i>Ce message a été envoyé automatiquement. Ne pas répondre directement mais utiliser les coordonnées laissées par le client.</i></p>";

  let mailSubject =
    "MESSAGE de " +
    clientName.value +
    ", " +
    clientMail.value +
    ", " +
    clientPhone.value;

  const mailData = {
    resume: resume,
    mailSubject: mailSubject,
  };

  console.log("tentative d'envoi du mail");

  const responseMailSend = await fetch(
    mailServiceUrlEnvVariable + `/send-contact-message-sctdr`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(mailData),
    }
  );

  if (responseMailSend.ok) {
    console.log("mail envoyé");
  } else {
    console.log("mail non envoyé");
  }
}

function onReset() {
  clientMail.value = null;
  clientPhone.value = null;
  clientMessage.value = "";
}

let addressCopied = ref(false);

function copyAddress(text) {
  copyToClipboard(text)
    .then(() => {
      // success!
      console.log("copié");
      addressCopied.value = true;
    })
    .catch(() => {
      // fail
      console.log("copie échouée");
    });
}
</script>
