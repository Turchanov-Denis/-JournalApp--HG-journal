<template>
  <div  class="dialog__content-email">
    <div style="width: 400px; position: relative">
      <Nuxt-link to="/home/login/gate"><button
        class="log-field__close"
        style="top: -20px"
      >
        X
      </button></Nuxt-link>
      
      <b-form @submit="onSubmit" v-if="show">
        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group @submit.stop.prevent>
          <label for="text-password">Password</label>
          <b-form-input
            type="password"
            id="text-password"
            aria-describedby="password-help-block"
            v-model="form.password"
          ></b-form-input>
          <b-form-text id="password-help-block">
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </b-form-text>
        </b-form-group>

        <b-button type="submit">Submit</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        checked: [],
        password: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
  computed: {
    activeLogin() {
      return this.$store.state.main.activeLogin;
    },
  },
};
</script>