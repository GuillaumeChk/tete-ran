<template>
  <h6 class="text-uppercase">Calendrier des réservations</h6>

  <p>
    État du système de réservation :<br />
    <q-btn-toggle
      v-model="bookingSystemWorking"
      class="my-custom-toggle"
      rounded
      dark
      unelevated
      color="grey-4"
      text-color="grey"
      :options="[
        { label: 'ON', value: true },
        { label: 'OFF', value: false },
      ]"
    />
  </p>

  <p>
    Sauvegarder l'agenda en l'état :<br />
    <q-btn
      unelevated
      label="Sauver l'agenda"
      color="blue"
      @click="downloadCalendar()"
    />
  </p>
  <p class="text-italic">
    Attention, chaque modification est envoyée en temps réel.
  </p>

  <FullCalendar :options="calendarOptions" />

  <p class="text-grey-7">
    Pour ajouter une réservation : cliquer sur une date de début, puis remplir
    les infos. On peut déplacer et redimensionner toute réservation.
  </p>

  <q-dialog v-model="displayNewEvent">
    <q-card class="q-pa-sm">
      <q-card-section>
        <div class="text-h6 text-uppercase">Nouvelle réservation</div>
      </q-card-section>
      <q-form @submit="addNewEvent">
        <q-card-section class="q-gutter-y-sm">
          <div class="row justify-between items-baseline">
            <span> Rendre indisponible sur une période ? </span>

            <q-btn-toggle
              v-model="newEventData.allRoomsClosed"
              class="my-custom-toggle"
              rounded
              unelevated
              toggle-color="yellow-8"
              color="grey-4"
              text-color="grey"
              :options="[
                { label: 'Non', value: false },
                { label: 'Oui', value: true },
              ]"
            />
          </div>

          <div class="row justify-between items-baseline q-pt-md">
            <q-btn-toggle
              v-model="newEventData.confirmed"
              class="my-custom-toggle"
              rounded
              unelevated
              toggle-color="yellow-8"
              color="grey-4"
              text-color="grey"
              :options="[
                { label: 'Pré-réservé', value: false },
                { label: 'Réservé', value: true },
              ]"
            />
          </div>

          <p class="text-grey-7 q-pa-md">
            Confirmer une réservation bloque les dates selectionnables par un
            client.
          </p>

          <h6 class="q-pt-md">Client</h6>

          <q-input
            rounded
            filled
            bg-color="grey-4"
            label-color="grey-10"
            v-model="newEventData.clientFirstName"
            label="Prénom du client"
            lazy-rules="ondemand"
            :rules="[
              (val) => (val && val.length > 0) || 'Veuillez entrer le prénom',
            ]"
            hide-bottom-space
          />
          <q-input
            filled
            bg-color="grey-4"
            label-color="grey-10"
            v-model="newEventData.clientLastName"
            label="Nom du client"
            lazy-rules="ondemand"
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Veuillez entrer le nom de famille',
            ]"
            hide-bottom-space
          />

          <q-input
            filled
            bg-color="grey-4"
            label-color="grey-10"
            v-model="newEventData.clientAddress"
            label="Adresse du client"
            lazy-rules="ondemand"
            :rules="[
              (val) =>
                (val && val.length > 0) ||
                'Veuillez entrer une Adresse complète',
            ]"
            hide-bottom-space
          />

          <q-input
            filled
            bg-color="grey-4"
            label-color="grey-10"
            v-model="newEventData.clientPostalCode"
            label="Code postal du client"
            lazy-rules="ondemand"
            :rules="[
              (val) =>
                (val && val.length > 0) ||
                'Veuillez entrer une Adresse complète',
            ]"
            hide-bottom-space
          />

          <q-input
            filled
            bg-color="grey-4"
            label-color="grey-10"
            v-model="newEventData.clientCity"
            label="Ville du client"
            lazy-rules="ondemand"
            :rules="[
              (val) =>
                (val && val.length > 0) ||
                'Veuillez entrer une Adresse complète',
            ]"
            hide-bottom-space
          />

          <q-input
            filled
            bg-color="grey-4"
            label-color="grey-10"
            v-model="newEventData.clientMail"
            label="Adresse mail"
            lazy-rules="ondemand"
            :rules="[
              (val) => (val && val.length > 0) || 'Veuillez entrer un mail',
            ]"
            hide-bottom-space
          />

          <q-input
            filled
            bg-color="grey-4"
            label-color="grey-10"
            v-model="newEventData.clientPhone"
            label="Téléphone"
            lazy-rules="ondemand"
            :rules="[
              (val) =>
                (val && val.length > 0) ||
                'Veuillez entrer un numéro de téléphone',
            ]"
            hide-bottom-space
          />

          <h6 class="q-pt-md">Réservation</h6>

          <q-select
            filled
            bg-color="grey-4"
            label-color="grey-10"
            v-model="newEventData.people"
            :options="peopleQuantityOptions"
            label="Nombre de personnes"
          />

          <p v-if="newEventData.start">
            Le
            {{
              newEventData.start.toLocaleDateString({
                timeZone: "UTC",
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            }}.
          </p>
          <p class="text-italic text-grey-6">
            Pour modifier la date : cliquer/glisser la réservation.
            <br />
            Pour modifier la durée : redimensionner la réservation.
          </p>

          <q-input
            v-model="newEventData.clientMessage"
            filled
            bg-color="grey-4"
            label-color="grey-10"
            placeholder="Message du client ou note"
            autogrow
          />
        </q-card-section>

        <q-card-actions align="right" class="q-py-lg">
          <q-btn flat unelevated label="Annuler" v-close-popup />
          <q-btn
            unelevated
            label="Ajouter"
            type="submit"
            color="green"
            v-close-popup
          />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>

  <q-dialog v-model="displayEventEdit">
    <q-card class="q-px-lg q-py-md">
      <q-card-section>
        <div class="text-h6 text-uppercase">Modifier une réservation</div>
      </q-card-section>

      <q-form @submit="editEvent" greedy>
        <q-card-section class="q-gutter-y-sm">
          <div class="row justify-between items-baseline">
            <span> Rendre indisponible sur une période ? </span>

            <q-btn-toggle
              v-model="eventData.allRoomsClosed"
              class="my-custom-toggle"
              rounded
              unelevated
              toggle-color="yellow-8"
              color="grey-4"
              text-color="grey"
              :options="[
                { label: 'Non', value: false },
                { label: 'Oui', value: true },
              ]"
            />
          </div>

          <h6 class="q-pt-md">Message du client ou note</h6>

          <q-input
            v-model="eventData.clientMessage"
            filled
            bg-color="grey-4"
            label-color="grey-10"
            placeholder="Message du client ou note"
            autogrow
          />

          <h6 class="q-pt-md">Réservation</h6>

          <div class="row justify-between items-baseline">
            <q-btn-toggle
              v-model="eventData.confirmed"
              class="my-custom-toggle"
              rounded
              toggle-color="green"
              color="grey-4"
              text-color="grey"
              :options="[
                { label: 'Pré-réservé', value: false },
                { label: 'Réservé', value: true },
              ]"
            />
          </div>

          <p class="text-grey-7 q-pa-md">
            Confirmer une réservation bloque les dates selectionnables par un
            client.
          </p>

          <h6 class="q-pt-md">Client</h6>

          <q-input
            rounded
            filled
            bg-color="grey-4"
            label-color="grey-10"
            v-model="eventData.clientFirstName"
            label="Prénom du client"
            lazy-rules="ondemand"
            :rules="[
              (val) => (val && val.length > 0) || 'Veuillez entrer le prénom',
            ]"
            hide-bottom-space
          />

          <q-input
            filled
            bg-color="grey-4"
            label-color="grey-10"
            v-model="eventData.clientLastName"
            label="Nom du client"
            lazy-rules="ondemand"
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Veuillez entrer le nom de famille',
            ]"
            hide-bottom-space
          />

          <q-input
            filled
            bg-color="grey-4"
            label-color="grey-10"
            v-model="eventData.clientAddress"
            label="Adresse du client"
            lazy-rules="ondemand"
            :rules="[
              (val) =>
                (val && val.length > 0) ||
                'Veuillez entrer une Adresse complète',
            ]"
            hide-bottom-space
          />

          <q-input
            filled
            bg-color="grey-4"
            label-color="grey-10"
            v-model="eventData.clientPostalCode"
            label="Code postal du client"
            lazy-rules="ondemand"
            :rules="[
              (val) =>
                (val && val.length > 0) ||
                'Veuillez entrer une Adresse complète',
            ]"
            hide-bottom-space
          />

          <q-input
            filled
            bg-color="grey-4"
            label-color="grey-10"
            v-model="eventData.clientCity"
            label="Ville du client"
            lazy-rules="ondemand"
            :rules="[
              (val) =>
                (val && val.length > 0) ||
                'Veuillez entrer une Adresse complète',
            ]"
            hide-bottom-space
          />

          <q-input
            filled
            bg-color="grey-4"
            label-color="grey-10"
            v-model="eventData.clientMail"
            label="Adresse mail"
            lazy-rules="ondemand"
            :rules="[
              (val) => (val && val.length > 0) || 'Veuillez entrer un mail',
            ]"
            hide-bottom-space
          />

          <q-input
            filled
            bg-color="grey-4"
            label-color="grey-10"
            v-model="eventData.clientPhone"
            label="Téléphone"
            lazy-rules="ondemand"
            :rules="[
              (val) =>
                (val && val.length > 0) ||
                'Veuillez entrer un numéro de téléphone',
            ]"
            hide-bottom-space
          />

          <h6 class="q-pt-md">Réservation</h6>

          <q-select
            filled
            bg-color="grey-4"
            label-color="grey-10"
            v-model="eventData.people"
            :options="peopleQuantityOptions"
            label="Nombre de personnes"
          />

          <p v-if="eventData.start">
            Le
            {{
              eventData.start.toLocaleDateString({
                timeZone: "UTC",
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            }}
            <span v-if="eventData.end"
              ><br />jusqu'au matin du
              {{
                eventData.end.toLocaleDateString({
                  timeZone: "UTC",
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              }}. </span
            ><br />
          </p>
          <p class="text-italic text-grey-6">
            Pour modifier la date : cliquer/glisser la réservation.
            <br />
            Pour modifier la durée : redimensionner la réservation.
          </p>
        </q-card-section>

        <q-card-actions align="right" class="q-py-lg">
          <q-btn flat unelevated label="Annuler" v-close-popup />
          <q-btn
            unelevated
            label="Modifier"
            type="submit"
            color="blue"
            v-close-popup
          />
          <q-btn
            unelevated
            label="Supprimer"
            @click="deleteEvent"
            color="red"
            v-close-popup
          />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { copyToClipboard } from "quasar";

// import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue3";
import frLocale from "@fullcalendar/core/locales/fr";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { exportFile } from "quasar";

const mailServiceUrlEnvVariable = import.meta.env.VITE_MAIL_SERVICE_URL;

const signatureHtmlText = `<p>Recevez, nos salutations Féeriques</p><img style="display: inline-block; margin: 10px;" height="130" src="cid:unique@logodesfees"/><img style="display: inline-block; margin: 10px;" height="130" src="cid:unique@gitedefrance"/><img style="display: inline-block; margin: 10px;" height="130" src="cid:unique@tripadvisor"/><img style="display: inline-block; margin: 10px;" height="130" src="cid:unique@vignobleetdecouvertes"/><img style="display: inline-block; margin: 10px;" height="130" src="cid:unique@tourdefrance"/><p>Isabelle Gisler<br />2, rue de la Chassignoles<br />39110 Pretin - Jura - France</p><p><a href="https://www.desfees.fr" target="_blank">https://www.desfees.fr</a><br />E-mail : <a href="mailto:contact@desfees.fr" target="_blank">contact@desfees.fr</a></p><p>+33 3 84 73 26 36</p><p><br /><i>Ce message a été envoyé automatiquement. Merci de ne pas répondre directement mais d'utiliser l'adresse mail ci-dessus.</i></p>`;

const preReservationMailHtmlText =
  `<p>Chère Madame, Cher Monsieur,</p><p>Bonne nouvelle 😊 !</p><p>Merci pour votre demande que nous avons enregistrée provisoirement.</p><p>Afin de valider celle-ci, vous avez plusieurs possibilités :</p><p>- Verser un acompte par courrier de 50% que vous avez la possibilité derégler par chèque ou espèces ou virement.</p><p>- Un appel au +33 3.84.73.26.36 (laisser sonner au moins 10 fois) où il vous sera demandé un N° CB avec date expiration et cryptogramme</p><p>Aussitôt, votre demande ou appel reçu, nous validerons définitivementvotre réservation.</p><p>Nous vous confirmerons le versement par E-Mail, commencer à préparer votre séjour en Franche-Comté.</p><p>Les Fées se réjouissent de faire votre connaissance ou simplement vousrevoir dans notre Jura qui respire la nature !</p>` +
  signatureHtmlText;

const preReservationMailText =
  "Chère Madame, Cher Monsieur,\n\nBonne nouvelle 😊 !\n\nMerci pour votre demande que nous avons enregistrée provisoirement.\n\nAfin de valider celle-ci, vous avez plusieurs possibilités :\n\n- Verser un acompte par courrier de 50% que vous avez la possibilité derégler par chèque ou espèces ou virement.\n\n- Un appel au +33 3.84.73.26.36 (laisser sonner au moins 10 fois) où il vous sera demandé un N° CB avec date expiration et cryptogramme\n\nAussitôt, votre demande ou appel reçu, nous validerons définitivementvotre réservation.\n\nNous vous confirmerons le versement par E-Mail, commencer à préparer votre séjour en Franche-Comté.\n\nLes Fées se réjouissent de faire votre connaissance ou simplement vousrevoir dans notre Jura qui respire la nature !\n\n";

const confirmationMailHtmlText = "<p></p>" + signatureHtmlText;

async function sendPreReservationDirectMail() {
  const mailData = {
    clientMail: eventData.value.clientMail,
  };

  console.log("tentative d'envoi du mail");

  const responseMailSend = await fetch(
    mailServiceUrlEnvVariable + `/send-pre-reservation-mail-sctdr`,
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

async function sendConfirmationReservationDirectMail() {
  const mailData = {
    clientMail: eventData.value.clientMail,
  };

  console.log("tentative d'envoi du mail");

  const responseMailSend = await fetch(
    mailServiceUrlEnvVariable + `/send-confirmation-reservation-mail-sctdr`,
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

let displayPreReservationMailViewer = ref(false);
let displayConfirmationReservationMailViewer = ref(false);

let preReservationMailCopied = ref(false);

function copyPreReservationMailText() {
  copyToClipboard(preReservationMailText)
    .then(() => {
      // success!
      console.log("copié !");
      preReservationMailCopied.value = true;
    })
    .catch(() => {
      // fail
      console.log("copy fail !");
    });
}

function daysNumberBetween(first, last) {
  let difference = last.getTime() - first.getTime();
  let days = Math.ceil(difference / (1000 * 3600 * 24));

  return days;
}

// Export Download
function downloadCalendar() {
  const status = exportFile(
    "calendar_" + new Date().getTime() + ".txt",
    JSON.stringify(calendar.value, null, "\t")
  );

  if (status === true) {
    // browser allowed it
  } else {
    // browser denied it
    console.log("Error: " + status);
  }
}

const peopleQuantityOptions = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
];

let calendar = ref([]);
let calendarOptions = computed(() => {
  return {
    // timeZone: "UTC",
    plugins: [dayGridPlugin, interactionPlugin],
    buttonIcons: false,
    locale: frLocale,
    initialView: "dayGridMonth",
    editable: true,
    dateClick: handleDateClick,
    eventClick: handleEventClick,
    eventDrop: handleEventDrop,
    eventResize: handleEventResize,
    events: calendar.value,
    eventOrder: "order",
  };
});

let bookingSystemWorking = ref();
watch(bookingSystemWorking, async (newValue) => {
  await setDoc(doc(db, "settings", "bookingStatus"), {
    bookingSystemActive: newValue,
  });
});

/// EVENTS HANDLERS
let displayNewEvent = ref(false);
let newEventData = ref();

// add new
function handleDateClick(info) {
  // let endDate = new Date(info.date);
  // endDate.setDate(endDate.getDate() + 1);

  newEventData.value = {
    id: Date.now().toString(),
    title: "",
    start: info.date,
    end: info.date,
    clientMessage: "",
    clientFirstName: "",
    clientLastName: "",
    clientMail: "",
    clientAddress: "",
    clientPostalCode: "",
    clientCity: "",
    clientPhone: "",
    people: 0,
    allDay: true,
    borderColor: "white",
    allRoomsClosed: false,
    confirmed: false,
    paid: false,
  };

  displayNewEvent.value = true;
}

let displayEventEdit = ref(false);
let eventData = ref();

// modify
function handleEventClick(info) {
  // solve bug clicking empty date triggering event edit
  if (!displayNewEvent.value && info.event.id != "") {
    eventData.value = {
      id: info.event.id,
      title:
        info.event.extendedProps.clientLastName +
        " " +
        info.event.extendedProps.clientFirstName,
      start: info.event.start,
      end: info.event.end,
      allDay: true,
      people: info.event.extendedProps.people,
      clientMessage: info.event.extendedProps.clientMessage,
      clientFirstName: info.event.extendedProps.clientFirstName,
      clientLastName: info.event.extendedProps.clientLastName,
      clientMail: info.event.extendedProps.clientMail,
      clientPhone: info.event.extendedProps.clientPhone,
      clientAddress: info.event.extendedProps.clientAddress,
      clientPostalCode: info.event.extendedProps.clientPostalCode,
      clientCity: info.event.extendedProps.clientCity,
      borderColor: "white",
      allRoomsClosed: info.event.extendedProps.allRoomsClosed,
      confirmed: info.event.extendedProps.confirmed,
      paid: info.event.extendedProps.paid,
    };

    displayEventEdit.value = true;
  }
}

let eventDroppedData = ref();

// modify date
async function handleEventDrop(info) {
  eventDroppedData.value = {
    id: info.event.id,
    title: info.event.title,
    start: info.event.start,
    end: info.event.end,
    allDay: true,
    people: info.event.extendedProps.people,
    clientMessage: info.event.extendedProps.clientMessage,
    clientFirstName: info.event.extendedProps.clientFirstName,
    clientLastName: info.event.extendedProps.clientLastName,
    clientMail: info.event.extendedProps.clientMail,
    clientPhone: info.event.extendedProps.clientPhone,
    clientAddress: info.event.extendedProps.clientAddress,
    clientPostalCode: info.event.extendedProps.clientPostalCode,
    clientCity: info.event.extendedProps.clientCity,
    borderColor: "white",
    allRoomsClosed: info.event.extendedProps.allRoomsClosed,
    confirmed: info.event.extendedProps.confirmed,
    paid: info.event.extendedProps.paid,
  };

  // update event
  calendar.value.splice(
    calendar.value.findIndex((event) => event.id === eventDroppedData.value.id),
    1,
    eventDroppedData.value
  );

  await updateDB(eventDroppedData);

  eventDroppedData.value = {};

  calendarOptions.value.events = calendar.value;
}

let eventResizedData = ref();

// modify date duration
async function handleEventResize(info) {
  eventResizedData.value = {
    id: info.event.id,
    title: info.event.title,
    start: info.event.start,
    end: info.event.end,
    allDay: true,
    people: info.event.extendedProps.people,
    clientMessage: info.event.extendedProps.clientMessage,
    clientFirstName: info.event.extendedProps.clientFirstName,
    clientLastName: info.event.extendedProps.clientLastName,
    clientMail: info.event.extendedProps.clientMail,
    clientPhone: info.event.extendedProps.clientPhone,
    clientAddress: info.event.extendedProps.clientAddress,
    clientPostalCode: info.event.extendedProps.clientPostalCode,
    clientCity: info.event.extendedProps.clientCity,
    borderColor: "white",
    allRoomsClosed: info.event.extendedProps.allRoomsClosed,
    confirmed: info.event.extendedProps.confirmed,
    paid: info.event.extendedProps.paid,
  };

  // update event
  calendar.value.splice(
    calendar.value.findIndex((event) => event.id === eventResizedData.value.id),
    1,
    eventResizedData.value
  );

  await updateDB(eventResizedData);

  eventResizedData.value = {};

  calendarOptions.value.events = calendar.value;
}
/// EVENTS HANDLER - end

/// CRUD
async function addNewEvent() {
  calendar.value.push({
    ...newEventData.value,
    title:
      newEventData.value.clientLastName +
      " " +
      newEventData.value.clientFirstName,
  });
  calendarOptions.value.events = calendar.value;

  // update db
  await updateDB(newEventData);

  newEventData.value = {};
}

async function editEvent() {
  // update event
  calendar.value.splice(
    calendar.value.findIndex((event) => event.id === eventData.value.id),
    1,
    eventData.value
  );

  // update db
  await updateDB(eventData);

  eventData.value = {};
  calendarOptions.value.events = calendar.value;
}

async function deleteEvent() {
  calendar.value.splice(
    calendar.value.findIndex((event) => event.id === eventData.value.id),
    1
  );

  await deleteDoc(doc(db, "calendar", eventData.value.id));
  calendarOptions.value.events = calendar.value;
}

// Add/update event to db
async function updateDB(eventRef) {
  let endDate = new Date(eventRef.value.end);
  endDate.setDate(endDate.getDate() - 1);

  let eventForDB = {
    clientName: eventRef.value.title,
    startDate: eventRef.value.start,
    endDate: endDate,
    people: eventRef.value.people,
    clientMessage: eventRef.value.clientMessage,
    clientFirstName: eventRef.value.clientFirstName,
    clientLastName: eventRef.value.clientLastName,
    clientMail: eventRef.value.clientMail,
    clientPhone: eventRef.value.clientPhone,
    clientAddress: eventRef.value.clientAddress,
    clientPostalCode: eventRef.value.clientPostalCode,
    clientCity: eventRef.value.clientCity,
    allDay: true,
    allRoomsClosed: eventRef.value.allRoomsClosed
      ? eventRef.value.allRoomsClosed
      : false,
    confirmed: eventRef.value.confirmed,
    paid: eventRef.value.paid,
  };
  console.log(eventForDB);
  await setDoc(doc(db, "calendar", eventRef.value.id), eventForDB);
}

// Get calendar data from firebase
onMounted(async () => {
  const docSnap = await getDoc(doc(db, "settings", "bookingStatus"));
  bookingSystemWorking.value = docSnap.data().bookingSystemActive;

  const querySnapshot = await getDocs(collection(db, "calendar"));
  let calendarData = [];

  let reservationEvent = {};
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots

    reservationEvent = {
      id: doc.id,
      title:
        (doc.data().clientMessage ? "✱" : "") +
        doc.data().clientLastName +
        " " +
        doc.data().clientFirstName,
      start: new Date(doc.data().startDate.seconds * 1000), // millisecond time
      end: new Date(doc.data().endDate.seconds * 1000 + 24 * 60 * 60 * 1000),
      allDay: true,
      extendedProps: {
        //   order: roomsData.find((object) => object.pathName === doc.data().room)
        //     .index,
        people: doc.data().people,
        clientMessage: doc.data().clientMessage,
        clientFirstName: doc.data().clientFirstName,
        clientLastName: doc.data().clientLastName,
        clientMail: doc.data().clientMail,
        clientPhone: doc.data().clientPhone,
        clientAddress: doc.data().clientAddress,
        clientPostalCode: doc.data().clientPostalCode,
        clientCity: doc.data().clientCity,
        allRoomsClosed: doc.data().allRoomsClosed
          ? doc.data().allRoomsClosed
          : false,
        confirmed: doc.data().confirmed,
        paid: doc.data().paid,
      },
    };

    calendarData.push(reservationEvent);
  });

  // console.log(calendarData);
  // calendar.value = calendarData;

  calendar.value = calendarData;
});
/// CRUD - end
</script>

<style lang="scss">
/* FullCalendar */
.fc-event-title {
  font-size: 14px;
  color: #eeeeee;
}

.fc-theme-standard td,
.fc-theme-standard th,
.fc-theme-standard .fc-scrollgrid {
  border-color: grey;
  border-radius: 5px;
}

.fc .fc-bg-event {
  background: #faad4f;
  opacity: 0.7;
}
</style>
