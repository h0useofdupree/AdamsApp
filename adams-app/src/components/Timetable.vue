<template>
  <ion-grid class="container">
    <!-- Check, ob 'subjects' Objekt einträge hat, ansonsten wird das 
      Grid nicht gerendert (führt sonst zu Fehlern) -->
    <ion-row class="days">
      <!-- Reihe für die Wochentage -->
      <ion-col></ion-col>
      <ion-col>Mo</ion-col>
      <ion-col>Di</ion-col>
      <ion-col>Mi</ion-col>
      <ion-col>Do</ion-col>
      <ion-col>Fr</ion-col>
    </ion-row>

    <ion-row v-for="tp in timeperiods" :key="tp.display">
      <!-- 10 Reihen, da wir nicht mehr als 10 Stunden pro Tag haben. -->
      <ion-col class="timeperiods" v-html="tp.display"></ion-col>
      <!-- In 'timeperiods' sind die Uhrzeiten eingetragen, v-for iteriert durch -->
      <ion-col
        class="subject_columns"
        v-for="date_val in dates"
        :key="date_val"
      >
        <div v-for="table_data in timetable" :key="table_data.id">
          <div
            v-if="
              table_data.startTime === tp.startTime &&
              table_data.date === date_val
            "
            class="subjc"
          >
            <span
              class="subject-item"
              v-for="subject in table_data.su"
              :key="subject.id"
              >{{
                table_data.startTime === tp.startTime &&
                table_data.date === date_val
                  ? subject.name
                  : null
              }}</span
            >
          </div>
        </div>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
import { IonGrid, IonRow, IonCol } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonGrid,
    IonRow,
    IonCol,
  },
  data() {
    return {
      timetable: [],
      timeperiods: [
        {
          display: "07:45 <br>-<br> 08:30",
          startTime: 745,
          endTime: 830,
        },
        {
          display: "08:30 <br>-<br> 09:15",
          startTime: 830,
          endTime: 915,
        },
        {
          display: "09:30 <br>-<br> 10:15",
          startTime: 930,
          endTime: 1015,
        },
        {
          display: "10:15 <br>-<br> 11:00",
          startTime: 1015,
          endTime: 1100,
        },
        {
          display: "11:15 <br>-<br> 12:00",
          startTime: 1115,
          endTime: 1200,
        },
        {
          display: "12:00 <br>-<br> 12:45",
          startTime: 1200,
          endTime: 1245,
        },
        {
          display: "13:15 <br>-<br> 14:00",
          startTime: 1315,
          endTime: 1400,
        },
        {
          display: "14:00 <br>-<br> 14:45",
          startTime: 1400,
          endTime: 1445,
        },
      ],

      dates: [20211213, 20211214, 20211215, 20211216, 20211217],
    };
  },
  created() {
    let class_name = "ita3a"; // Klasse ist noch statisch eingetragen
    this.$store.dispatch("viewTimetable", class_name).then(() => {
      this.timetable = this.$store.getters.getTimetable; // Über den Getter bei Vuex werden die Daten geholt.
    });
  },
  methods: {
    convertDate(date, time) {
      // Datum und Zeit werden hier in JavaScript Date Objects konvertiert,
      // da die UntisAPI unbekannte Formate als Datum benutzt.
      // Bsp. : '20211201'

      let year = date.toString().substring(0, 4);
      let month = date.toString().substring(4, 6);
      let day = date.toString().substring(6, 8);

      if (time) {
        let hours =
          time.toString().length == 4
            ? time.toString().substring(0, 2)
            : time.toString().substring(0, 1);
        let minutes =
          time.toString().length == 4
            ? time.toString().substring(2, 4)
            : time.toString().substring(1, 3);

        return new Date(year, month - 1, day, hours, minutes);
      } else {
        return new Date(year, month - 1, day);
      }
    },
  },
});
</script>

<style scoped>
.container{
  font-size: 9pt;
}
.timeperiods {
  font-size: 11px;
  text-align: center;

  min-width: 45px;
  max-width: 55px;

  background-color: var(--ion-color-primary);

  padding: 5px;
  margin-top: 5px;

  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}
.timeperiods:nth-child(even){
  background-color: blue;
}
.subject-item {
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 9pt;

  padding-top: 10px;
  padding-right: 5px;
  padding-bottom: 10px;
  padding-left: 5px;

  border-radius: 5px;
  background-color: none;
}
/* Make every odd indexed column be a different color for contrast */
.subject_columns:nth-child(odd) {
  background-color: var(--color-main-3);
}
/* Make every even indexed column be a different color for contrast */
.subject_columns:nth-child(even) {
  background-color: var(--color-main-2);
}
/* Make first columns borders align to 'timeperiods' */
.subject_columns:nth-child(2){
  background-color: red;
  border-top-left-radius: none;
  border-bottom-left-radius: none;
}
.subject-item:hover{
  transition: 10ms;
  background-color: blue;
}
/*  */
.subject_columns {
  display: flex;
  flex-direction: row;

  margin-top: 5px;
  margin-bottom: 5px;

  min-width: 3em;
  max-width: 4;

  border-radius: 10px;
}
.dayEven{
  background-color: var(--ion-color-light);
}
.dayOdd{
  background-color: var(--ion-color-medium);
}
.days{
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: var(--color-main-3);
}
.days ion-col{
  text-align: center;
}
.days ion-col:nth-child(even){
  background-color: blue;
}
</style>