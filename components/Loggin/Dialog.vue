<template>
  <div v-if="activeLogin" class="dialog">
    <div class="dialog__content">
      <div
        v-if="this.$store.state.login.activeLogin"
        class="dialog__content content-login"
      >
        <div class="dialog__image"></div>
        <div class="log-field">
          <button
            class="log-field__close"
            @click="
              () => {
                this.$store.commit('main/changeActiveLogin');
              }
            "
          >
            X
          </button>
          <div class="log-field__row"></div>
          <div class="log-field__title">Вход</div>

          <div>
            <button @click="()=>{this.$store.dispatch('login/switchMail')}"  class="log-field__button">
              <img src="../../static/icon/mail.png" alt="" /> Почта
            </button>
            <button class="log-field__button">
              <img src="../../static/icon/google.png" alt="" />Google
            </button>
            <button class="log-field__button">
              <img src="../../static/icon/apple.png" alt="" />Apple
            </button>
          </div>

          <div class="log-field__entire" >
            Нет аккаунта? <a href="#">Регистрация</a>
          </div>
        </div>
      </div>
      
      
      <div v-if="this.$store.state.login.activeMail" class="dialog__content-email">
        <div style="width: 400px;position: relative;">
            <button
            class="log-field__close"
            style="top:-20px"
            @click="
              ()=>{this.$store.dispatch('login/switchMail')}
            "
          >
            X
          </button>
          <b-form @submit="onSubmit"  v-if="show">
            <b-form-group
              id="input-group-2"
              label="Your Name:"
              label-for="input-2"
            >
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
                numbers, and must not contain spaces, special characters, or
                emoji.
              </b-form-text>
            </b-form-group>

            <b-button type="submit">Submit</b-button>
          </b-form>
        </div>
      </div>
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

<style lang="scss">
.dialog {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #46464672;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;

  &__image {
    width: 300px;
    background-image: url("../../static/HgjLog1.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  &__content {
    width: 600px;
    height: 650px;
    background: #ffffff;
    border-radius: 8px;
    display: flex;
    justify-content: flex-end;
    overflow: hidden;
    &-email {
        width: 600px;
    height: 650px;
    background: #ffffff;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    }
  }

}
.log-field {
  position: relative;
  flex: 0 0 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 40px;

  &__row {
  }
  &__title {
    padding: 15px 0;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 42px;

    color: #000000;
  }
  &__close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 23px;

    /* identical to box height */

    color: #3f3f3f;
  }
  &__button {
    position: relative;
    width: 320px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    color: #000;
    box-shadow: 0 1px 2px rgb(0 0 0 / 8%), inset 0 0 0 1px rgb(0 0 0 / 6%),
      inset 0 -1px 0 rgb(0 0 0 / 12%), inset 1px 0 0 rgb(0 0 0 / 6%),
      inset -1px 0 0 rgb(0 0 0 / 6%);
    border-radius: 8px;
    margin-bottom: 10px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    /* identical to box height */

    color: #3f3f3f;
    img {
      width: 20px;
      height: 20px;
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(100%, 60%);
    }
  }
  &__entire {
    margin-top: 40px;
    a {
      color: rgb(223, 113, 124);
    }
  }
}
</style>