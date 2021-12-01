<template>
  <ion-content>
    <ion-grid v-if="Object.values(subjects).some((x) => x.length > 1)">
      <!-- Check, ob 'subjects' Objekt einträge hat, ansonsten wird das 
      Grid nicht gerendert (führt sonst zu Fehlern) -->
      <ion-row>
        <!-- Reihe für die Wochentage -->
        <ion-col></ion-col>
        <ion-col>Mo</ion-col>
        <ion-col>Di</ion-col>
        <ion-col>Mi</ion-col>
        <ion-col>Do</ion-col>
        <ion-col>Fr</ion-col>
      </ion-row>

      <ion-row v-for="i in 8" :key="i">
        <!-- 8 Reihen, da wir nicht mehr als 8 Stunden pro Tag haben. -->
        <ion-col class="timeperiods" v-html="timeperiods[i - 1]"></ion-col>
        <!-- In timeperiods sind die Uhrzeiten eingetragen, v-for iteriert durch -->
        <ion-col v-for="j in 5" :key="j">
          <!-- 5 Spalten, für die 5 Wochentage -->
          {{
            subjects[Object.getOwnPropertyNames(this.subjects)[j - 1]][i - 1] !=
            null
              ? subjects[Object.getOwnPropertyNames(this.subjects)[j - 1]][
                  i - 1
                ].su[0].name
              : ""
          }}

          <!-- Object.getOwnPropertyNames gibt alle Keys eines Objektes zurück.
          Dadurch kann z.B mit index 0 => Montag, über das Subject Objekt alle Fächer,
          die am Montag sind ausgelesen werden
          
            Beispiel: subjects['monday'][0] gibt die Daten der ersten Stunde am Montag zurück.

           -->
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>
</template>

<script>
import { IonContent, IonGrid, IonRow, IonCol } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
  },
  data() {
    return {
      timetable: [],
      timeperiods: [
        "07:45 <br>-<br> 08:30",
        "08:30 <br>-<br> 09:15",
        "09:30 <br>-<br> 10:15",
        "10:15 <br>-<br> 11:00",
        "11:15 <br>-<br> 12:00",
        "12:00 <br>-<br> 12:45",
        "13:15 <br>-<br> 14:00",
        "14:00 <br>-<br> 14:45",
        "15:00 <br>-<br> 15:45",
        "15:45 <br>-<br> 16:30",
      ],
      subjects: {
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
      },
    };
  },
  created() {
    let class_name = "ita3a";
    this.$store.dispatch("viewTimetable", class_name).then(() => {
      this.timetable = this.$store.getters.getTimetable; // Über den Getter bei Vuex werden die Daten geholt.
      this.splitSubjects(); // Die Methode teilt alle Fächer in die Wochentage ein.
    });
  },
  methods: {
    // Die Methode sortiert alle Fächer nach Datum, da die Untis-API alle Fächer unsortiert ausgibt.
    sortTimetable(timetable) {
      return timetable.sort(
        (a, b) =>
          this.convertDate(a.date, a.startTime) -
          this.convertDate(b.date, b.startTime)
      );
    },
    splitSubjects() {
      // In der Methode wird durch das Datum des jeweiligen Fach der Wochentag ermittelt.
      console.log(this.timetable);
      for (let i = 0; i < this.timetable.length; i++) {
        switch (this.convertDate(this.timetable[i].date).getDay()) {
          case 1:
            this.subjects.monday.push(this.timetable[i]);
            break;
          case 2:
            this.subjects.tuesday.push(this.timetable[i]);
            break;
          case 3:
            this.subjects.wednesday.push(this.timetable[i]);
            break;
          case 4:
            this.subjects.thursday.push(this.timetable[i]);
            break;
          case 5:
            this.subjects.friday.push(this.timetable[i]);
            break;
          default:
            console.log("Fehler");
            break;
        }
      }
    },
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
.timeperiods {
  font-size: 12px;
  text-align: center;
}
</style>