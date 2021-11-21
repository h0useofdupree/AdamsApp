<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>
        Header
      </ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-fab vertical="top" horizontal="end">
      <ion-fab-button>
        <ion-icon name="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
    <ion-fab vertical="center" horizontal="center">
      <ion-fab-button>
        <ion-icon name="settings"></ion-icon>
      </ion-fab-button>
      <ion-fab-list side="end">
        <ion-fab-button><ion-icon name="logo-ionic"></ion-icon></ion-fab-button>
        <ion-fab-button><ion-icon name="logo-vue"></ion-icon></ion-fab-button>
      </ion-fab-list>
    </ion-fab>
  </ion-content>  

  <ion-footer>
    <ion-toolbar>
      <ion-title>Footer</ion-title>
    </ion-toolbar>
  </ion-footer>
</template>

<script>

import { 
  IonContent, 
  IonFab, 
  IonFabButton, 
  IonFabList, 
  IonFooter, 
  IonHeader, 
  IonIcon, 
  IonTitle, 
  IonToolbar 
} from '@ionic/vue';
import { 
  add, 
  arrowBackCircle,
  arrowForwardCircle, 
  arrowUpCircle,
  logoFacebook, 
  logoInstagram, 
  logoTwitter, 
  logoVimeo, 
  person, 
  settings, 
  share
} from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonContent,
    IonFab,
    IonFabButton,
    IonFabList,
    IonFooter,
    IonHeader,
    IonIcon,
    IonTitle,
    IonToolbar
  },
  setup() {
    return {
      add,
      arrowBackCircle,
      arrowForwardCircle,
      arrowUpCircle,
      logoFacebook,
      logoInstagram,
      logoTwitter,
      logoVimeo,
      person,
      settings,
      share
    }
  }
});
</script>