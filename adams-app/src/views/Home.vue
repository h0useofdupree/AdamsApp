<template>
  <ion-menu side="start" content-id="main-content">
    <ion-header>
      <ion-toolbar translucent>
        <ion-title>AdamsApp</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item href="/dashboard" detail="false">
        <ion-icon :icon="home" slot="start"></ion-icon>
          <ion-label>Dashboard</ion-label> 
        </ion-item>
        <ion-item href="/plan" detail="false">
        <ion-icon :icon="calendar" slot="start"></ion-icon>
          <ion-label>Stundenplan</ion-label>
        </ion-item>
        <ion-item href="/termine" detail="false">
        <ion-icon :icon="albums" slot="start"></ion-icon>
          <ion-label>Termine</ion-label>
        </ion-item>
        <ion-item href="/hausaufgaben" detail="false"> 
        <ion-icon :icon="document" slot="start"></ion-icon>
          <ion-label>Hausaufgaben</ion-label> 
        </ion-item>
        <ion-item href="/grades" detail="false">
        <ion-icon :icon="school" slot="start"></ion-icon>
          <ion-label>Noten</ion-label>
        </ion-item>
        <ion-item href="/settings" detail="false">
        <ion-icon :icon="settings" slot="start"></ion-icon>
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
        <ion-title class="ion-text-center ion-padding-bottom">{{ $route.name }}</ion-title>
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
  IonIcon,
  
} from "@ionic/vue";
import { defineComponent } from "vue";
import { home,calendar, school, document, albums, settings } from 'ionicons/icons';

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
    IonIcon,
    
  },

  setup(){
    return{
      calendar,
      home,
      school,
      document,
      albums,
      settings,
    }
  }
  
});
</script>

<style scoped>

</style>