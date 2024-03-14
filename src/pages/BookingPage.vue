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
          <h4>En construction…</h4>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
let tab = ref("tarifs");
</script>
