<template>
  <div v-if="activeLogin" class="dialog">
    <div class="dialog__content">
      <Gate></Gate>
      <RegistrationEmail></RegistrationEmail>
      <GateEmail></GateEmail>
    </div>
  </div>
</template>

<script>
import Gate from "./Gate.vue";
import RegistrationEmail from "./RegistrationEmail.vue";
import GateEmail from "./GateEmail.vue";
export default {
  components: { Gate, RegistrationEmail,GateEmail },
  computed: {
    activeLogin() {
      return this.$store.state.main.activeLogin;
    },
  },
};
</script>

<style lang="scss">
</style>