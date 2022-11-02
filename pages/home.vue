<template>
  <div class="home">
    <div class="home__body">
      <div class="list-bar"></div>
      <div class="content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: 'default'
};
</script>

<style lang="scss">
.home {
  &__body {
    display: flex;
  }
}
</style>