<template>
  <div>
    <div class="ion-margin-vertical trans-back">
      <ion-card>
        <ion-card-header>
          <ion-card-title>Stundenplan</ion-card-title>
          <ion-item-divider color="none" class="divider"></ion-item-divider>
        </ion-card-header>

        <ion-card-content>
          <ion-card-subtitle class="change-date">{{
            new Date().toLocaleDateString({ weekday: "long" }) +
            " der " +
            new Date().toLocaleDateString()
          }}</ion-card-subtitle>
        </ion-card-content>
      </ion-card>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Termine</ion-card-title>
          <ion-item-divider color="none" class="divider"></ion-item-divider>
        </ion-card-header>

        <ion-card-content>
          <ion-card-subtitle>Klausuren</ion-card-subtitle>
          <ion-card-content></ion-card-content>
          <ion-card-subtitle>Sonstige Termine</ion-card-subtitle>
          <ion-card-content></ion-card-content>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-icon name="home"></ion-icon>
          <ion-card-title>Hausaufgaben</ion-card-title>
          <ion-item-divider color="none" class="divider"></ion-item-divider>
        </ion-card-header>

        <ion-card-content> </ion-card-content>
      </ion-card>
    </div>

    <ion-fab horizontal="center" vertical="bottom" slot="fixed">
      <ion-fab-button color="light">
        <ion-icon name="share"></ion-icon>
      </ion-fab-button>
      <ion-fab-list side="top">
        <ion-fab-button color="primary">
          <ion-icon name="logo-vimeo"></ion-icon>
        </ion-fab-button>
      </ion-fab-list>
      <ion-fab-list side="end">
        <ion-fab-button color="dark">
          <ion-icon name="logo-twitter"></ion-icon>
        </ion-fab-button>
      </ion-fab-list>
      <ion-fab-list side="bottom">
        <ion-fab-button color="secondary">
          <ion-icon name="logo-facebook"></ion-icon>
        </ion-fab-button>
      </ion-fab-list>
      <ion-fab-list side="start">
        <ion-fab-button color="light">
          <ion-icon name="logo-google"></ion-icon>
        </ion-fab-button>
      </ion-fab-list>
    </ion-fab>
  </div>
</template>

<script>
import {
  IonIcon,
  IonFab,
  IonFabList,
  IonFabButton,
  IonItemDivider,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { createAnimation } from "@ionic/vue";

export default defineComponent({
  components: {
    IonIcon,
    IonFab,
    IonFabList,
    IonFabButton,
    IonCard,
    IonItemDivider,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
  },
  methods: {
    buttonEvent() {
      const loadingAnimation = createAnimation
        .create("parent")
        .duration(300)
        .easing("ease-out")
        .iterations(2)
        .direction("alternate");

      loadingAnimation.play();
    },
  },
});
</script>

<style scoped>
.trans-back {
  background: none;
}
.empty-margin {
  margin: 20px 0px;
}
.floating-btn {
  align-self: center;
  margin-bottom: 5%;
  text-transform: none;
  font-size: 30px;
}

.change-date {
  text-transform: lowercase !important;
}
.change-date::first-letter {
  text-transform: uppercase !important;
}
.divider {
  min-height: 2px !important;
  background: linear-gradient(
    to right,
    var(--ion-color-primary) 0%,
    var(--ion-color-primary) 30%,
    var(--ion-card-background) 100%
  );
}
</style>