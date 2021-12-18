<template>
  <div class="ion-margin-vertical">
    <ion-card class="ion-padding">
    <ion-card-header>
      <ion-card-title>Allgemein</ion-card-title> 
      <ion-item-divider color="none" class="divider"></ion-item-divider>
    </ion-card-header>
    <ion-card-content>
      <swiper 
      :slides-per-view="3"
      :space-between="0"
     
      class="swiper-settings">
      <swiper-slide>
        <ion-card>
        <ion-card-content>
          <ion-card-title>Test 1</ion-card-title>
        </ion-card-content>
        </ion-card>
      </swiper-slide>
      <swiper-slide>
       <ion-card>
        <ion-card-content>
          <ion-card-title>Test 2</ion-card-title>
        </ion-card-content>
        </ion-card>
      </swiper-slide>
      <swiper-slide>
       <ion-card>
        <ion-card-content>
          <ion-card-title>Test 3</ion-card-title>
        </ion-card-content>
        </ion-card>
      </swiper-slide>
      </swiper>
    </ion-card-content>
    </ion-card>

    <ion-card class="ion-padding">
    <ion-card-header>
      <ion-card-title>Klausuren</ion-card-title> 
      <ion-item-divider color="none" class="divider"></ion-item-divider>
    </ion-card-header>
    <ion-card-content>
    </ion-card-content>
    </ion-card>
  </div>

  
</template>

<script>
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItemDivider } from '@ionic/vue';
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';


import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';






export default defineComponent({
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItemDivider,
    Swiper, 
    SwiperSlide,

  },
  setup() {
    return{
   }
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



</style>