<template>
  <q-page class="wrapper q-pa-md">
    <q-tabs v-model="tab" dense style="color: #395875">
      <q-tab name="tarifs" label="Tarifs" />
      <q-tab name="reservation" label="Réservation" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="tarifs">
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

      <q-tab-panel name="reservation">
        <div class="q-gutter-y-sm">
          <h6>Réservation</h6>
          Réservation et information auprès de Fabienne et Pascal Breux: +41 79
          256 44 90 Email: reservation @ prisemilord.ch (merci d’indiquer votre
          nom et adresse)

          <h6>Disponibilité</h6>

          <div>
            <q-field
              label-slot
              filled
              stack-label
              color="orange"
              v-model="reservationDate"
              lazy-rules="ondemand"
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Veuillez sélectionner une nuit',
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
                  navigation-min-year-month="2022/01"
                  navigation-max-year-month="2032/12"
                  mask="DD/MM/YYYY"
                  flat
                  square
                  color="orange"
                  class="q-mt-sm full-width"
                  minimal
                  multiple
                />
              </template>
            </q-field>
            <div>
              <span class="eventCaption q-mb-xs q-mr-xs"></span
              ><span class="text-italic text-orange">{{
                $t("booking.legende")
              }}</span>
            </div>
            <div
              v-if="reservationDate && reservationDate.length > 0"
              class="q-pa-sm bg-orange-6 text-white"
            >
              {{ getFirstAndLastReservationDate().first }} ➜
              {{ getTomorrowDDMMYYYY(getFirstAndLastReservationDate().last) }}
            </div>
          </div>
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

let datePickerDisabled = computed(() => {
  return roomNameOptions.includes(room.value);
});

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

// Get calendar data from DB
onMounted(async () => {
  const docSnap = await getDoc(doc(db, "settings", "bookingStatus"));
  bookingSystemWorking.value = docSnap.data().bookingSystemActive;

  querySnapshot = await getDocs(collection(db, "calendar"));
});
</script>
