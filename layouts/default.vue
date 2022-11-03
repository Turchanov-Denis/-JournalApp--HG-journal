<template>
  <div>
    <Header></Header>
    <div class="home">
      <div class="home__body">
        <ListBar v-if="this.$store.state.main.activeListBar"></ListBar>
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/HeaderComponent/Header.vue";
import ListBar from "../components/Home/ListBar.vue";
export default {
  name: "DefaultLayout",
  components: { Header, ListBar },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");
.home {
  background: #f2f2f2;
  min-height: 800px;
  padding-top: 20px;
  &__body {
    display: flex;
  }
}
span {
  height: 0;
}
</style>