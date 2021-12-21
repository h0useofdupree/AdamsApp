<template>
    <div  class="ion-margin-vertical trans-back" style="padding-bottom: 5rem" >
    <ion-card class="ion-padding">
    <ion-card-header>
      <ion-card-title>Stundenplan</ion-card-title> 
      <ion-item-divider  color="none" class="divider"></ion-item-divider>
    </ion-card-header>
    <ion-card-content>
      <ion-card-subtitle class="change-date">{{ new Date().toLocaleDateString(locale,{ weekday: 'long' }) + " der " + new Date().toLocaleDateString() }}</ion-card-subtitle>
    </ion-card-content>
    </ion-card>

    <ion-card class="ion-padding">
    <ion-card-header> 
      <ion-card-title>Termine</ion-card-title> 
      <ion-item-divider  color="none" class="divider"></ion-item-divider>
    </ion-card-header>
    <ion-card-content >
      <ion-card-subtitle>Klausuren</ion-card-subtitle>
      <ion-card-content></ion-card-content>
      <ion-card-subtitle>Sonstige Termine</ion-card-subtitle>
      <ion-card-content></ion-card-content>
    </ion-card-content>
    </ion-card>

    <ion-card class="ion-padding ion">
    <ion-card-header>
      <ion-card-title name="title">Hausaufgaben</ion-card-title> 
      <ion-item-divider name="line" color="none" class="divider"></ion-item-divider>
    </ion-card-header>

    <ion-card-content >
    </ion-card-content>
    </ion-card>
    

    <ion-fab vertical="bottom" horizontal="center" >
      <ion-fab-button class="floating-btn">+</ion-fab-button>
      <ion-fab-list side="top">
        <ion-fab-button href="#" name="termine" class="inner"><ion-icon :icon="calendar"></ion-icon></ion-fab-button>
      </ion-fab-list>
      <ion-fab-list side="start">
        <ion-fab-button href="/" name="klausuren"><ion-icon :icon="book"></ion-icon></ion-fab-button>
      </ion-fab-list>
      <ion-fab-list side="end">
        <ion-fab-button href="/" name="hausaufgaben"><ion-icon :icon="pencil"></ion-icon></ion-fab-button>
      </ion-fab-list>
    </ion-fab>
  </div>

</template> 

<script>

import { IonItemDivider, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle,IonFabButton, IonIcon, IonFab, IonFabList} from '@ionic/vue';
import { defineComponent } from "vue";
import { book,pencil,calendar } from 'ionicons/icons';


export default defineComponent({
  components:{ 
    IonItemDivider,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonFabButton,
    IonCard,
    IonIcon,
    IonFab,
    IonFabList,
  },
   setup() {
    return { 
      book, 
      pencil,
      calendar,
    }

   },
   methods:{
     
   },
     beforeMount(){
      
   },
 
});

</script>

<style scoped>
.trans-back{
  background: none;
}
.empty-margin{
  margin: 20px 0px;
}
.floating-btn{
  align-self: center;
  margin-bottom: 5%;
  text-transform: none;
  font-size: 32px;
  
}
.change-date{
    text-transform: lowercase !important;
}
.change-date::first-letter{
    text-transform: uppercase !important;
}
.divider{
  min-height: 2px !important;
  background: linear-gradient(to right,var(--ion-color-primary) 0%,var(--ion-color-primary) 30%, var(--ion-card-background) 100%);
}

.empty-spacer{
  min-height: 5rem;
}



</style>