<template>
  <div class="home">
    <div class="home__body">
      <ListBar></ListBar>
      <div class="content">
        <div class="articles"></div>
        <div class="comments"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ListBar from '../components/Home/ListBar.vue'
export default {
  name: "IndexPage",
  layout: 'default',
  components: {
    ListBar
  }
};
</script>

<style lang="scss">
.home {
  background: #F2F2F2;
  height: 100vh;
  &__body {
    display: flex;
  }
}
</style>