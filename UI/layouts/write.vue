<template>
  <div>
    <Header></Header>
    <Nuxt></Nuxt>
  </div>
</template>


<script>
import Header from "../components/HeaderComponent/Header.vue";

export default {
  components: {
    Header
  },
};
</script>

<style lang="scss">
.v-ripple__container {
  display: none;
}
.v-card__title {
  span {
    width: 150px;
    height: 0;
    background: rgba(255, 255, 255, 0);
    transform: scale(1);
  }
}
</style>