<template>
  <header class="header">
    <div class="header__body">
      <div
        style="display: flex;width: 120px;align-items: center;justify-content: space-between;"
      >
        <Burger></Burger>
        <NuxtLink to="/">
          <div class="header__title">H&G</div>
        </NuxtLink>
      </div>
      <Input></Input>
      <Nuxt-link  to="/write"><button class="header__create-button">+ Создать</button></Nuxt-link>
      <UserBar></UserBar>
    </div>
  </header>
</template>


<script>
import Burger from "./Burger.vue";
import Input from "./Input.vue";
import UserBar from "./UserBar.vue";
export default {
  components: { Burger, Input, UserBar },
};
</script>


<style lang="scss">
.header {
  padding: 0 40px;
  height: 60px;
  width: 100%;
  background: #ffdce3;
  &__body {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__title {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;

    color: #000000;
  }
  &__create-button {
    width: 144px;
    height: 48px;

    background: #ffffff;
    border-radius: 8px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    /* identical to box height */

    color: #3f3f3f;
  }
}
</style>