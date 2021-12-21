<template>
 <div>
 <ion-toolbar>
    <ion-segment @ionChange="segmentChanged(segment)" value="other">
      <ion-segment-button value="other" >
        Termine
      </ion-segment-button>
      <ion-segment-button value="exams">
        Klausuren
      </ion-segment-button>
    </ion-segment>
  </ion-toolbar>

 <div class="ion-margin-vertical">
  <!-- <ion-searchbar placeholder="Suche"></ion-searchbar> -->

  <ion-item-sliding>
    <ion-item>
      <ion-label>Inhalt</ion-label>
    </ion-item>
  <ion-item-options side="end">
    <ion-item-option color="danger">Löschen</ion-item-option>
  </ion-item-options>
  </ion-item-sliding>
    
  </div>
    <ion-fab vertical="bottom" horizontal="end" >
      <ion-fab-button class="floating-btn">+</ion-fab-button>
      <ion-fab-list side="start">
        <ion-fab-button href="#" name="termine"><ion-icon :icon="calendar"></ion-icon></ion-fab-button>
        <ion-fab-button href="#" name="klausuren"><ion-icon :icon="book"></ion-icon></ion-fab-button>
      </ion-fab-list>
 
   
    </ion-fab>
</div>
  
</template>

<script>
import {  } from '@ionic/vue';
import { defineComponent } from "vue";
import { book,calendar } from 'ionicons/icons';









export default defineComponent({
  components: {
  

  },
  setup() {
     return { 
      book,
      calendar,
    }
  },

  constructor(){
    this.segment = "other";
  }


});
</script>

<style>
.divider{
  min-height: 2px !important;
  background: linear-gradient(to right,var(--ion-color-primary) 0%,var(--ion-color-primary) 30%, var(--ion-card-background) 100%);
}
.swiper {
  align-content: center;
}
ion-segment ion-segment-button{
  text-transform: none;
}

.floating-btn{
  align-self: center;
  margin-bottom: 5%;
  text-transform: none;
  font-size: 32px;
  
}


</style>