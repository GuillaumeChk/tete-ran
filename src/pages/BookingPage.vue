<template>
  <q-page class="wrapper q-pa-md">
    <q-tabs v-model="tab" dense style="color: #395875">
      <q-tab name="tarifs" label="Tarifs" />
      <q-tab name="reservation" label="Réservation" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="tarifs" class="form">
        <div class="text-h6">Tarifs</div>
        <table>
          <tbody>
            <tr>
              <td></td>
              <td><strong>Membre AN</strong></td>
              <td><strong>Non-membre</strong></td>
            </tr>
            <tr>
              <td>Adultes</td>
              <td>Fr. 16.-</td>
              <td>Fr. 25.-</td>
            </tr>
            <tr>
              <td>Juniors (16-20 ans)</td>
              <td>Fr. 10.-</td>
              <td>Fr. 19.-</td>
            </tr>
            <tr>
              <td>Enfants (5-15 ans)</td>
              <td>Fr. 9.-</td>
              <td>Fr. 14.-</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td><strong>Groupes</strong></td>
              <td><strong>1.05 – 31.10</strong></td>
              <td><strong>1.11 – 30.04</strong></td>
            </tr>
            <tr>
              <td>Lu – Ve</td>
              <td>Fr. 370.-</td>
              <td>Fr. 420.-</td>
            </tr>
            <tr>
              <td>Ve (14h) – Di (17h)</td>
              <td>Fr. 790.-</td>
              <td>Fr. 840.-</td>
            </tr>
            <tr>
              <td>Sa (14h) – Di (17h)</td>
              <td>Fr. 520.-</td>
              <td>Fr. 570.-</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td><strong>Ecoles</strong></td>
              <td><strong>1.05 – 31.10</strong></td>
              <td><strong>1.11 – 30.04</strong></td>
            </tr>
            <tr>
              <td>Lu – Ve</td>
              <td>Fr. 260.-</td>
              <td>Fr. 310.-</td>
            </tr>
            <tr>
              <td>Ve (14h) – Di (17h)</td>
              <td>Fr. 670.-</td>
              <td>Fr. 720.-</td>
            </tr>
            <tr>
              <td>Sa (14h) – Di (17h)</td>
              <td>Fr. 410.-</td>
              <td>Fr. 460.-</td>
            </tr>
          </tbody>
        </table>
      </q-tab-panel>

      <q-tab-panel name="reservation" class="form q-pa-none">
        <div v-if="bookingSystemWorking">
          <q-form
            @submit="displayConfirmation = true"
            @validation-error="showValidationErrorMessage = true"
            @validation-success="showValidationErrorMessage = false"
            class="q-gutter-y-sm q-pb-xl"
            greedy
          >
            <div class="q-gutter-y-sm">
              <h6 class="q-pt-md">Pré-réservation</h6>
              <p>Consultez nos disponibilités ci-dessous puis pré-réservez :</p>

              <div>
                <q-field
                  label-slot
                  filled
                  stack-label
                  v-model="reservationDate"
                  lazy-rules="ondemand"
                  :rules="[
                    (val) =>
                      (val && val.length > 0) ||
                      'Veuillez sélectionner une nuit',
                  ]"
                  hide-bottom-space
                >
                  <template v-slot:label> Jour(s) </template>
                  <template v-slot:control>
                    <q-date
                      v-model="reservationDate"
                      :disable="!datePickerDisabled"
                      :options="datesOptions"
                      :events="datesHighPrices"
                      event-color="amber"
                      navigation-min-year-month="2024/01"
                      navigation-max-year-month="2032/12"
                      mask="DD/MM/YYYY"
                      flat
                      square
                      class="q-mt-sm full-width"
                      minimal
                      multiple
                    />
                  </template>
                </q-field>
                <div>
                  <p class="text-caption bg-grey-3 rounded q-pa-sm">
                    <q-badge rounded color="white" />  Disponible<br />
                    <q-badge rounded color="yellow" />  Pré-réservation en
                    cours<br />
                    <q-badge rounded color="red" />  Réservé/complet <br />
                    <q-badge rounded color="purple" />  Places restantes
                    disponibles<br />
                  </p>
                </div>
                <div
                  v-if="reservationDate && reservationDate.length > 0"
                  class="q-pa-sm bg-blue-6 text-white"
                >
                  {{ getFirstAndLastReservationDate().first }} ➜
                  {{
                    getTomorrowDDMMYYYY(getFirstAndLastReservationDate().last)
                  }}
                </div>

                <h6 class="q-pt-lg">Vos coordonnées</h6>

                <!-- Nom -->
                <q-input
                  label-slot
                  filled
                  rounded
                  v-model="clientLastName"
                  type="text"
                  lazy-rules="ondemand"
                  :rules="[
                    (val) =>
                      (val && val.length > 0) ||
                      'Veuillez entrer votre nom de famille',
                  ]"
                  hide-bottom-space
                >
                  <template v-slot:label> Nom </template>
                </q-input>

                <!-- Prénom -->
                <q-input
                  label-slot
                  filled
                  v-model="clientFirstName"
                  type="text"
                  lazy-rules="ondemand"
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Veuillez entrer votre prénom',
                  ]"
                  hide-bottom-space
                >
                  <template v-slot:label> Prénom </template>
                </q-input>

                <!-- Adresse -->
                <q-input
                  label-slot
                  filled
                  v-model="clientAddress"
                  type="text"
                  lazy-rules="ondemand"
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Veuillez entrer votre prénom',
                  ]"
                  hide-bottom-space
                >
                  <template v-slot:label> Adresse </template>
                </q-input>

                <!-- Code postal -->
                <q-input
                  label-slot
                  filled
                  v-model="clientPostalCode"
                  type="text"
                  maxlength="6"
                  lazy-rules="ondemand"
                  :rules="[
                    (val) =>
                      (val && val.length > 0) ||
                      'Veuillez entrer votre code postal',
                  ]"
                  hide-bottom-space
                >
                  <template v-slot:label> Code postal </template>
                </q-input>

                <!-- Ville -->
                <q-input
                  label-slot
                  filled
                  v-model="clientCity"
                  type="text"
                  lazy-rules="ondemand"
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Veuillez entrer votre ville',
                  ]"
                  hide-bottom-space
                >
                  <template v-slot:label> Ville </template>
                </q-input>

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
                      (val && val.length > 0) ||
                      'Veuillez entrer un numéro valide',
                  ]"
                  hide-bottom-space
                >
                  <template v-slot:label> Télephone </template>
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
                >
                  <template v-slot:label> Mail </template>
                </q-input>

                <!-- Nombre de personnes -->
                <q-select
                  label-slot
                  filled
                  v-model="people"
                  :options="peopleQuantityOptions"
                  lazy-rules="ondemand"
                  :rules="[
                    (val) =>
                      (val && val > 0) ||
                      'Veuillez saisir le nombre de personnes',
                  ]"
                  hide-bottom-space
                >
                  <template v-slot:label> Nombre de personnes </template>
                </q-select>

                <!-- laisser un message -->
                <q-input
                  v-model="clientMessage"
                  class="last-rounded"
                  borderless
                  label-slot
                  autogrow
                  color="grey-8"
                  hide-bottom-space
                >
                  <template v-slot:label>    Laisser un message… </template>
                </q-input>
              </div>
            </div>

            <div class="q-pt-md">
              <q-btn rounded @click="onReset()" flat color="primary">
                <div>Effacer</div>
              </q-btn>
              <q-btn
                rounded
                unelevated
                class="q-ml-sm"
                type="submit"
                color="blue"
              >
                <div>Valider</div>
              </q-btn>
            </div>
            <p v-if="showValidationErrorMessage" class="text-red">
              Veuillez remplir correctement tous les champs.
            </p>
          </q-form>

          <q-dialog :persistent="true" maximized v-model="displayConfirmation">
            <q-card class="q-px-lg q-py-md wrapper">
              <section class="form items-center">
                <q-card-section class="q-pb-none">
                  <div class="text-h5 text-uppercase">Récapitulatif</div>
                  <p>Pré-réservation</p>
                </q-card-section>

                <q-card-section class="q-pt-none" id="reservationResume">
                  <div class="q-pl-sm">
                    <h6>Coordonnées</h6>
                    <div class="q-pl-md">
                      Prénom : {{ clientFirstName }}<br />
                      Nom : {{ clientLastName }}<br />
                      Adresse : {{ clientAddress }}<br />
                      Ville : {{ clientCity }}<br />
                      Code postal : {{ clientPostalCode }}<br />
                      Mail : {{ clientMail }}<br />
                      Téléphone : {{ clientPhone }}<br />
                      Nombre de personnes : {{ people }}<br />
                      Date d'arrivée :
                      {{ getFirstAndLastReservationDate().first }} <br />
                      Date de départ :
                      {{
                        getTomorrowDDMMYYYY(
                          getFirstAndLastReservationDate().last
                        )
                      }}
                    </div>
                  </div>

                  <div class="q-pt-md">
                    <div class="text-h6">Total</div>
                    <div class="q-pl-md">{{ priceTotal }} CHF</div>
                  </div>

                  <div class="q-pt-md" v-if="clientMessage">
                    <div class="text-h6">Message :</div>
                    <div class="q-pl-md">{{ clientMessage }}</div>
                  </div>
                </q-card-section>

                <q-card-actions align="right">
                  <q-btn flat unelevated v-close-popup>
                    <div>Retour</div>
                  </q-btn>

                  <q-btn
                    unelevated
                    color="blue"
                    v-close-popup
                    @click="checkout()"
                  >
                    <div>Envoyer</div>
                  </q-btn>
                </q-card-actions>
              </section>
            </q-card>
          </q-dialog>
        </div>
        <div v-else>
          <p class="text-italic">Chargement…</p>
          <p>Si rien ne s'affiche, appelez-nous directement.</p>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script setup>
import { onMounted, ref, watch, computed } from "vue";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import { date } from "quasar";

let tab = ref("tarifs");
let reservationDate = ref([]);
let datesHighPricesCalendar = ref([]);
let room = ref("chalet");
const roomNameOptions = ["chalet"];
let calendar = ref([]);

let datePickerDisabled = computed(() => {
  return roomNameOptions.includes(room.value);
});

const peopleQuantityOptions = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
];

let showValidationErrorMessage = ref(false);
let displayConfirmation = ref(false);

let clientLastName = ref();
let clientFirstName = ref();
let clientAddress = ref();
let clientPostalCode = ref();
let clientCity = ref();
let clientMail = ref();
let clientPhone = ref();
let clientMessage = ref("");
let people = ref();
let reservation = computed(() => {
  return {
    clientFirstName: clientFirstName.value,
    clientLastName: clientLastName.value,
    clientAddress: clientAddress.value,
    clientPostalCode: clientPostalCode.value,
    clientCity: clientCity.value,
    clientMail: clientMail.value,
    clientPhone: clientPhone.value,
    room: room.value,
    people: people.value,
    clientMessage: clientMessage.value,
    startDate: null,
    endDate: null,
  };
});

function onReset() {
  clientFirstName.value = null;
  clientLastName.value = null;
  clientAddress.value = null;
  clientPostalCode.value = null;
  clientCity.value = null;
  clientMail.value = null;
  clientPhone.value = null;
  clientMessage.value = "";
  reservationDate.value = null;
}

function getFirstAndLastReservationDate() {
  function convertDateToDDMMYYY(dateObject) {
    function pad(s) {
      return s < 10 ? "0" + s : s;
    }
    return [
      pad(dateObject.getDate()),
      pad(dateObject.getMonth() + 1),
      dateObject.getFullYear(),
    ].join("/");
  }

  let formatDateArray = [];
  reservationDate.value.forEach((element) => {
    let dateParts = element.split("/");
    let date = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    formatDateArray.push(date);
  });
  formatDateArray.sort((a, b) => a.getTime() - b.getTime());
  return {
    first: convertDateToDDMMYYY(formatDateArray[0]),
    last: convertDateToDDMMYYY(formatDateArray[formatDateArray.length - 1]),
  };
}

function getTomorrowDDMMYYYY(dateElement) {
  let dateParts = dateElement.split("/");
  let dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
  dateObject.setDate(dateObject.getDate() + 1);
  function pad(s) {
    return s < 10 ? "0" + s : s;
  }
  return [
    pad(dateObject.getDate()),
    pad(dateObject.getMonth() + 1),
    dateObject.getFullYear(),
  ].join("/");
}

// Disable already reserved dates in DatePicker
function datesOptions(dateElement) {
  return (
    !calendar.value.includes(dateElement) &&
    new Date(dateElement) >= new Date().setDate(new Date().getDate() - 1)
  ); // + not in the past
}

function datesHighPrices(dateElement) {
  return (
    datesHighPricesCalendar.value.includes(dateElement) ||
    new Date(dateElement).getDay() >= 5
  ); // + week-ends
}

// Update date picker options (set available dates) when a room is selected
watch(room, (newRoom) => {
  if (newRoom) {
    let roomPathName = roomsData.find(
      (object) => object.name === newRoom
    ).pathName;
    setRoomCalendar(roomPathName);
  }
});

let querySnapshot;

// Get room dates availabilities when selecting room
function setRoomCalendar(roomPathName) {
  let calendarData = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    if (doc.data().room === roomPathName && doc.data().confirmed) {
      const reservation = {
        id: doc.id,
        startDate: doc.data().startDate,
        endDate: doc.data().endDate,
        room: roomsData.find((object) => object.pathName === doc.data().room)
          .name,
      };

      // if unique night
      if (
        reservation.endDate.seconds - reservation.startDate.seconds <
        24 * 60 * 60
      ) {
        calendarData.push(
          date.formatDate(reservation.startDate.toDate(), "YYYY/MM/DD")
        ); // do not change mask 'YYYY/MM/DD'
      } else {
        let nextDate = new Date(doc.data().startDate.toDate());
        let nights =
          (reservation.endDate.seconds - reservation.startDate.seconds) /
          (24 * 60 * 60);

        for (let i = 0; i <= nights; i++) {
          calendarData.push(date.formatDate(nextDate, "YYYY/MM/DD")); // do not change mask 'YYYY/MM/DD'
          nextDate.setDate(nextDate.getDate() + 1);
        }
      }
    }
    // Désactiver toutes les chambres pour une période, vacances isa
    if (doc.data().allRoomsClosed === true) {
      let nextDate = new Date(doc.data().startDate.toDate());
      let nights =
        (doc.data().endDate.seconds - doc.data().startDate.seconds) /
        (24 * 60 * 60);

      for (let i = 0; i <= nights; i++) {
        calendarData.push(date.formatDate(nextDate, "YYYY/MM/DD")); // do not change mask 'YYYY/MM/DD'
        nextDate.setDate(nextDate.getDate() + 1);
      }
    }
  });
  // console.log(calendarData);
  calendar.value = calendarData;
}

let bookingSystemWorking = ref();

// Get calendar data from DB
onMounted(async () => {
  const docSnap = await getDoc(doc(db, "settings", "bookingStatus"));
  bookingSystemWorking.value = docSnap.data().bookingSystemActive;

  querySnapshot = await getDocs(collection(db, "calendar"));
});
</script>

<style>
.form {
  max-width: 400px;
  border-radius: 20px;
  margin: auto;
}

.rounded {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.last-rounded {
  background-color: rgba(0, 0, 0, 0.05);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}
</style>
