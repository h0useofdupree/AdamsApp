<template>
  <ion-content>
    <app-timetable></app-timetable>
  </ion-content>
</template>

<script>
import { IonContent } from "@ionic/vue";
import { defineComponent } from "vue";

import Timetable from "@/components/Timetable.vue";

export default defineComponent({
  components: {
    IonContent,
    "app-timetable": Timetable,
  },
});
</script>

<style scoped>
</style>