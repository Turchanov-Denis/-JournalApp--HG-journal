<template>
  <div class="notification-label">
    <div class="notification-label__column">
      <div
        class="notification-label__avatar"
        style="display: flex; align-items: center"
      >
        <img src="../HeaderComponent/UserBarImage/avatar.png" alt="favorites" />
      </div>
    </div>

    <div
      class="notification-label__column"
      
    >
      <div class="notification-label__text">
        {{ text }}
      </div>
    </div>
    <div class="notification-label__column">
      <div class="notification-label__time">{{ time }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["url", "text", "link", "time"],
};
</script>

<style lang="scss">
.notification-label {
    padding: 10px 20px;
  display: flex;
  width: 100%;
  height: 54px;
  border-bottom: 1px solid  rgba(135, 135, 135, 0.127);
  
  &__column {
    padding: 0 10px;
    display: flex;
    align-items: center;
  }
  &__avatar {
    width: 55px;
    height: 55px;
    img {
      width: 100%;
      border-radius: 10px;
    }
  }
  &__time {
    color: rgb(98, 98, 98);
  }
  &__text {
    font-size: 15px;
  }
}
</style>