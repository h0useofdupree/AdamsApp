<template>
  <ion-page>
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
    <ion-loading
      :is-open="$store.getters.authStatus === 'loading'"
      message="Bitte warten..."
    >
    </ion-loading>
  </ion-page>
</template>


<script>
import {
  IonPage,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonLoading,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonPage,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonLoading,
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
      this.$store.dispatch("login", this.user).then(() => {
        console.log(this.$store.getters.authStatus);
        if (this.$store.getters.authStatus == "success") {
          this.$router.push({ path: "/home" });
        } else if (this.$store.getters.authStatus == "error") {
          console.log("error");
        }
      });
    },
  },
});
</script>