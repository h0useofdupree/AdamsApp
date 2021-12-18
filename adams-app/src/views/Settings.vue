<template>
<ion-header></ion-header>
    <div>    
      <ion-card class="ion-padding">
      <ion-card-header>Konto</ion-card-header>
      <ion-card-content class="text-center">
      <ion-text>Max Mustermann</ion-text><br><br>
      <ion-button color="primary" size="small">Abmelden</ion-button>
      </ion-card-content>
      </ion-card>

      <ion-card class="ion-padding">
      <ion-card-header>Darstellung</ion-card-header>
      <ion-card-content>
      <ion-toolbar class="toolbar">
      <ion-segment value="all">
      <ion-segment-button value="system">
        System  
      </ion-segment-button>
      <ion-segment-button value="dark">
        Dunkel  
      </ion-segment-button>
      <ion-segment-button value="light">
        Hell
      </ion-segment-button>
    </ion-segment>
  </ion-toolbar>
      </ion-card-content>
      </ion-card>

      <ion-card class="ion-padding">
      <ion-card-header>Benachrichtungen</ion-card-header>
      <ion-card-content>
      <ion-toolbar class="toolbar">
      <ion-segment>
      <ion-segment-button value="an">
        An  
      </ion-segment-button>
        <ion-segment-button value="wichtig">
        Wichtig 
      </ion-segment-button>
      <ion-segment-button value="aus">
        Aus  
      </ion-segment-button>
    </ion-segment>
  </ion-toolbar>
      </ion-card-content>
      </ion-card>

       <ion-card class="ion-padding">
      <ion-card-content class="text-center">
      <ion-button color="light" size="small" class="ion-align-center">Datenschutz</ion-button>
      <ion-button color="light" size="small" class="ion-align-center">Impressum</ion-button>
      </ion-card-content>
      </ion-card>

      


    </div>
</template>

<script>
import {IonCard, IonCardContent, IonCardHeader, IonButton,IonToolbar, IonHeader, IonText, IonSegment, IonSegmentButton } from '@ionic/vue';

export default {
  components: {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonButton,
    IonToolbar,
    IonHeader,
    IonText,
    IonSegment,
    IonSegmentButton,

  }

};

</script>

<style>

.toolbar {
  --background: none;
  
}
.text-center {
  text-align: center;

}

ion-segment-button{
 min-width: 5px;
}


</style>