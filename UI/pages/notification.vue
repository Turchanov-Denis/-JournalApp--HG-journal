<template>
  <div class="notifications">
    <div
      v-for="(item, index) in this.$store.state.notification.notification"
      :key="index"
    >
      <div style="color: black; text-align: center; padding: 20px">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
};
</script>

<style lang="scss">
.notifications {
  width: 60%;
  margin-top: 30px;
  height: 400px;
  background-color: #fff;
  border-radius: 10px;
}
</style>