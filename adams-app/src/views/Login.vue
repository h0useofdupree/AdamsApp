<template>
  <div>
    <form>
      <ion-item>
        <ion-label position="floating">Username</ion-label>
        <ion-input
          v-model="user.username"
          placeholder="Gebe deinen Usernamen ein"
        ></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Schlüssel</ion-label>
        <ion-input
          v-model="user.key"
          placeholder="Gebe deinen Schlüssel ein"
        ></ion-input>
      </ion-item>
      <ion-button @click="login" expand="block" size="medium">Login</ion-button>
    </form>
  </div>
</template>


<script>
import { IonItem, IonLabel, IonInput } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonItem,
    IonLabel,
    IonInput,
  },
  data() {
    return {
      user: {
        username: "",
        key: "",
      },
    };
  },
  methods: {
    login() {
      console.log(this.user);
    },
  },
});
</script>