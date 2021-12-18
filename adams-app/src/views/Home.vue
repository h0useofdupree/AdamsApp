<template>
  <ion-menu side="start" content-id="main-content">
    <ion-header>
      <ion-toolbar translucent>
        <ion-title href="/dashboard"> AdamsApp</ion-title>
        <!-- TODO: Click on the app name / logo to go to the home page -->
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item href="/dashboard">
          <ion-label>Dashboard</ion-label>
        </ion-item>
        <ion-item href="/plan">
          <ion-label>Plan</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Termine</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Klausuren</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Hausaufgaben</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Noten</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Einstellungen</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>

  <div class="ion-page" id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons>
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.name }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-router-outlet />
    </ion-content>
  </div>
</template>


<script>
import {
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonMenuButton,
  IonButtons,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonRouterOutlet,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonMenuButton,
    IonButtons,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonRouterOutlet,
  },
});
</script>