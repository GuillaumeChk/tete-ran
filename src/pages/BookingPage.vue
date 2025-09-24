<template>
  <q-page class="wrapper q-pa-md">
    <q-tabs v-model="tab" dense style="color: #395875">
      <q-tab name="tarifs" label="Tarifs" />
      <q-tab name="reservation" label="Réservation" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated @transition="disableRedButtons()">
      <q-tab-panel name="tarifs" class="form">
        <!-- <div class="text-h6">Tarifs</div> -->
        <q-markup-table dense flat class="q-mt-md" wrap-cells>
          <thead>
            <tr>
              <th></th>
              <th><strong>Membres AN</strong></th>
              <th><strong>Non-membres</strong></th>
            </tr>
          </thead>
          <tbody>
            <!-- Tarifs individuels -->
            <tr class="section-header">
              <td colspan="3"><strong>Tarifs individuels</strong></td>
            </tr>
            <tr>
              <td>Adultes</td>
              <td>CHF 16.–</td>
              <td>CHF 25.–</td>
            </tr>
            <tr>
              <td>Juniors (16–20 ans)</td>
              <td>CHF 10.–</td>
              <td>CHF 19.–</td>
            </tr>
            <tr>
              <td>Enfants (5–15 ans)</td>
              <td>CHF 9.–</td>
              <td>CHF 14.–</td>
            </tr>

            <!-- Groupes -->
            <tr class="section-header">
              <td colspan="3">
                <strong>Groupes</strong><br />
                <small>1er mai – 31 octobre / 1er novembre – 30 avril</small>
              </td>
            </tr>
            <tr>
              <td>Lundi – Vendredi</td>
              <td>CHF 370.–</td>
              <td>CHF 420.–</td>
            </tr>
            <tr>
              <td>Vendredi 14h – Dimanche 17h</td>
              <td>CHF 790.–</td>
              <td>CHF 840.–</td>
            </tr>
            <tr>
              <td>Samedi 14h – Dimanche 17h</td>
              <td>CHF 520.–</td>
              <td>CHF 570.–</td>
            </tr>

            <!-- Écoles -->
            <tr class="section-header">
              <td colspan="3">
                <strong>Écoles</strong><br />
                <small>1er mai – 31 octobre / 1er novembre – 30 avril</small>
              </td>
            </tr>
            <tr>
              <td>Lundi – Vendredi</td>
              <td>CHF 260.–</td>
              <td>CHF 310.–</td>
            </tr>
            <tr>
              <td>Vendredi 14h – Dimanche 17h</td>
              <td>CHF 670.–</td>
              <td>CHF 720.–</td>
            </tr>
            <tr>
              <td>Samedi 14h – Dimanche 17h</td>
              <td>CHF 410.–</td>
              <td>CHF 460.–</td>
            </tr>
          </tbody>
        </q-markup-table>

        <p class="text-caption text-grey q-mt-sm">
          Chaque adulte qui dort = CHF 3.20 / nuit (détail des taxes ci-dessous)
        </p>

        <br />

        <section>
          <h2>Informations sur les taxes</h2>

          <h3>Taxes de séjour</h3>
          <ul>
            <li>
              Par nuitée et par personne (dès 18 ans) :
              <strong>Fr. 3.20</strong>
            </li>
          </ul>

          <h3>Taxes de passage (de 10h à 17h)</h3>
          <ul>
            <li>
              Forfait journalier (réservation pour une journée) :
              <strong>Fr. 150.-</strong>
            </li>
            <li>
              Par personne (adultes et enfants) : <strong>Fr. 5.-</strong>
            </li>
          </ul>

          <h3>Taxes de poubelle</h3>
          <ul>
            <li>Sac de 35 L : <strong>Fr. 5.-</strong></li>
            <li>Sac de 60 L : <strong>Fr. 10.-</strong></li>
          </ul>

          <p>
            <em
              >Les taxes de séjour et les taxes de poubelle sont à régler sur
              place.</em
            >
          </p>

          <h3>Suppléments par temps froid</h3>
          <p>
            Un supplément de <strong>Fr. 20.-</strong> par séjour (hors forfait)
            sera demandé pour le chauffage du chalet.
            <br />
            <em>L'électricité et l'eau seront facturées en supplément.</em>
          </p>
        </section>
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
              <h2 class="q-pt-md">Pré-réservation</h2>
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
                      :options="datesDisabled"
                      :events="datesCalendar"
                      :event-color="
                        (date) => (datesPreBooked(date) ? 'amber' : 'red')
                      "
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
                    <q-badge rounded color="amber" />  Pré-réservé (disponible
                    mais demande en cours)<br />
                    <q-badge rounded color="red" />  Réservé <br />
                    <!-- <q-badge rounded color="purple" />  Places restantes
                    disponibles<br /> -->
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

                <h2 class="q-pt-lg">Vos coordonnées</h2>

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
                </q-card-section>

                <q-card-section class="q-pt-none" id="reservationResume">
                  <div class="q-pl-sm">
                    <h6>Vos coordonnées</h6>
                    <div class="q-pl-md">
                      Prénom : {{ clientFirstName }}<br />
                      Nom : {{ clientLastName }}<br />
                      Adresse : {{ clientAddress }}<br />
                      Ville : {{ clientCity }}<br />
                      Code postal : {{ clientPostalCode }}<br />
                      Mail : {{ clientMail }}<br />
                      Téléphone : {{ clientPhone }}<br />
                    </div>
                  </div>

                  <div class="q-pt-md">
                    <div class="text-h6">Votre pré-réservation</div>
                    <p class="q-pl-sm">
                      Nombre de personnes : {{ people }}<br />
                      Date d'arrivée :
                      {{ getFirstAndLastReservationDate().first }} <br />
                      Date de départ :
                      {{
                        getTomorrowDDMMYYYY(
                          getFirstAndLastReservationDate().last
                        )
                      }}
                    </p>
                    <q-markup-table
                      separator="horizontal"
                      flat
                      bordered
                      wrap-cells
                    >
                      <tbody>
                        <tr v-for="(priceElement, index) in price" :key="index">
                          <td>1 jour {{ priceElement }}.-</td>
                          <td>taxe de séjour 0.-</td>
                        </tr>
                        <tr>
                          <td>
                            Total :
                            {{ priceTotal }}.- CHF
                          </td>
                        </tr>
                      </tbody>
                    </q-markup-table>
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

          <q-dialog :persistent="true" v-model="displayPaymentRedirected">
            <q-card class="q-px-lg q-py-md">
              <section class="wrapper items-center">
                <q-card-section v-if="waitForMailAndDB">
                  <q-spinner color="blue" size="3em" />
                  <p class="text-italic text-grey-6">
                    Veuillez patienter… Merci
                  </p>
                </q-card-section>

                <q-card-section v-else>
                  <!-- <p>Vous allez être redirigé automatiquement vers la page de paiement. Si la page ne s'ouvre pas, veuillez autoriser votre navigateur vers la redirection si un message vous le propose. Vous pouvez fermer cette page ou continuer à naviguer sur notre site.</p> -->

                  <p>Votre demande a bien été prise en compte.</p>

                  <q-btn rounded unelevated label="Accueil" to="/" />
                </q-card-section>
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

const dayPrice = 100;

let tab = ref("tarifs");
let reservationDate = ref([]);
let calendar = ref([]);
let calendarBookedDates = ref([]);
let calendarPreBookedDates = ref([]);
let displayPaymentRedirected = ref(false);
let waitForMailAndDB = ref(true);

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
  people.value = null;
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

// Disabled dates in DatePicker
function datesDisabled(dateElement) {
  return new Date(dateElement) >= new Date().setDate(new Date().getDate() - 1); // + not in the past
}

function datesCalendar(dateElement) {
  return calendar.value.includes(dateElement);
}

function datesPreBooked(dateElement) {
  return calendarPreBookedDates.value.includes(dateElement);
}

let querySnapshot;

// Get dates availabilities
function getCalendar() {
  let calendarData = [];
  let bookedDatesData = [];
  let preBookedDatesData = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots

    const reservation = {
      id: doc.id,
      startDate: doc.data().startDate,
      endDate: doc.data().endDate,
      confirmed: doc.data().confirmed,
    };

    function pushToAppropriateDatesArray(reservation, formatedDate) {
      if (reservation.confirmed) {
        // booked
        bookedDatesData.push(date.formatDate(formatedDate, "YYYY/MM/DD")); // do not change mask 'YYYY/MM/DD'
      } else {
        // preBooked
        preBookedDatesData.push(date.formatDate(formatedDate, "YYYY/MM/DD")); // do not change mask 'YYYY/MM/DD'
      }
      calendarData.push(date.formatDate(formatedDate, "YYYY/MM/DD")); // do not change mask 'YYYY/MM/DD'
    }

    // if unique night
    if (
      reservation.endDate.seconds - reservation.startDate.seconds <
      24 * 60 * 60
    ) {
      pushToAppropriateDatesArray(reservation, reservation.startDate.toDate());
    } else {
      let nextDate = new Date(doc.data().startDate.toDate());
      let nights =
        (reservation.endDate.seconds - reservation.startDate.seconds) /
        (24 * 60 * 60);

      for (let i = 0; i <= nights; i++) {
        pushToAppropriateDatesArray(reservation, nextDate);
        nextDate.setDate(nextDate.getDate() + 1);
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
  calendar.value = calendarData;
  calendarBookedDates.value = bookedDatesData;
  calendarPreBookedDates.value = preBookedDatesData;
  // console.log(calendarData);
}

const mailServiceUrlEnvVariable = import.meta.env.VITE_MAIL_SERVICE_URL;
const urlFront = import.meta.env.VITE_WEBSITE_FRONT;

async function checkout() {
  if (reservation.value) {
    displayPaymentRedirected.value = true;

    let bookingID = Date.now().toString();

    // Envoi du mail
    let resume = document.getElementById("reservationResume").outerHTML;

    // Lien bour confirmer la réservation (au simple clic sur le lien)
    let linkToConfirmBooking =
      `\n\n<a href="` +
      urlFront +
      `/booking-confirm/` +
      bookingID +
      `">Pour confirmer la réservation, cliquer ici.</a>\n`;

    let mailSubject =
      "RÉSERVATION : " +
      clientLastName.value +
      " " +
      clientFirstName.value +
      " " +
      getFirstAndLastReservationDate().first +
      " ";

    const mailData = {
      clientMail: clientMail.value,
      reservation: resume,
      mailSubject: mailSubject,
      linkToConfirm: linkToConfirmBooking,
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

    /// A COMMENTER pour utiliser
    let eventForDB = {
      ...reservation.value,
      autoCalculatedPrice: priceTotal.value,
      paid: false,
      confirmed: false,
      full: false,
    };

    if (reservationDate.value) {
      let dateTemp = getFirstAndLastReservationDate().first.split("/");
      eventForDB.startDate = Timestamp.fromDate(
        new Date(dateTemp[2], dateTemp[1] - 1, dateTemp[0])
      ); // from "DD/MM/YYYY"
      dateTemp = getFirstAndLastReservationDate().last.split("/");
      eventForDB.endDate = Timestamp.fromDate(
        new Date(dateTemp[2], dateTemp[1] - 1, dateTemp[0])
      ); // from "DD/MM/YYYY"
    }

    await setDoc(doc(db, "calendar", bookingID), eventForDB);

    console.log(eventForDB);

    waitForMailAndDB.value = false;
  }
}

let bookingSystemWorking = ref();

// Get calendar data from DB
onMounted(async () => {
  const docSnap = await getDoc(doc(db, "settings", "bookingStatus"));
  bookingSystemWorking.value = docSnap.data().bookingSystemActive;

  querySnapshot = await getDocs(collection(db, "calendar"));

  getCalendar();
});

// get all dates between 2 dates
let getDaysArray = function (start, end) {
  for (
    var arr = [], dt = new Date(start);
    dt <= new Date(end);
    dt.setDate(dt.getDate() + 1)
  ) {
    arr.push(new Date(dt));
  }
  return arr;
};

// function formatDateToYYYYMMDD(date) {
//     var d = new Date(date),
//         month = '' + (d.getMonth() + 1),
//         day = '' + d.getDate(),
//         year = d.getFullYear();

//     if (month.length < 2)
//         month = '0' + month;
//     if (day.length < 2)
//         day = '0' + day;

//     return [year, month, day].join('/');
// }

let price = computed(() => {
  let priceArray = [];

  // add days between if multiple
  if (reservationDate.value && reservationDate.value.length >= 2) {
    let formatDateArray = [];
    reservationDate.value.forEach((element) => {
      let dateParts = element.split("/");
      let date = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
      formatDateArray.push(date);
    });
    formatDateArray.sort((a, b) => a.getTime() - b.getTime());

    let datesBetween = getDaysArray(
      formatDateArray[0],
      formatDateArray[formatDateArray.length - 1]
    );

    datesBetween.forEach(() => {
      priceArray.push(dayPrice);
    });
  } else if (reservationDate.value && reservationDate.value.length === 1) {
    priceArray.push(dayPrice);
  } else {
    priceArray = [0];
  }

  console.log(priceArray);
  return priceArray;
});
let priceTotal = computed(() => {
  return price.value.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
});

// Disable booked dates but still display red background
function disableRedButtons() {
  // Sélection de tous les boutons avec l'enfant spécifié
  const buttons = document.querySelectorAll("button .bg-red");
  console.log(buttons);

  // Parcours de tous les boutons
  buttons.forEach((button) => {
    button.parentElement.parentElement.disabled = true;
  });
}
</script>

<style>
.form {
  max-width: 400px;
  border-radius: 20px;
  margin: auto;
}
.section-header {
  background-color: #f5f5f5;
  text-align: center;
  font-size: 0.95rem;
}

.q-date__event {
  position: absolute;
  bottom: 0px;
  z-index: -1;
  left: 50%;
  height: 30px;
  width: 30px;
  border-radius: 50px;
}
.q-btn.bg-primary .q-date__event {
  background: transparent !important;
}
.block {
  font-size: 14px !important;
}
/* .q-date__calendar-item--out div {
  background: red !important;
  height: 30px !important;
  width: 30px !important;
  border-radius: 50px;
  color: white;
  font-size: 14px;
}
.q-date__calendar-item--out {
  opacity: 1 !important;
} */

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
