<template>
  <Nuxt-link :to="'/messages/' + token" style="color:black">
    <div class="destination-label">
      <div class="destination-label__column">
        <div
          class="destination-label__avatar"
          style="display: flex; align-items: center"
        >
          <img
            src="../HeaderComponent/UserBarImage/avatar.png"
            alt="favorites"
          />
        </div>
      </div>

      <div class="destination-label__column" style="flex-grow: 2;display:block;">
        <div class="destination-label__user-name">
          {{ name }}
        </div>
        <div class="destination-label__message">
          {{ message.slice(0, 8) }}
        </div>
      </div>
      <div class="destination-label__column">
        <div class="destination-label__time">{{ time }}</div>
      </div>
    </div>
  </Nuxt-link>
</template>

<script>
export default {
  props: ["name", "message", "time", "token"],
  data() {
    return {};
  },
};
</script>


<style lang="scss">
.destination-label {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 10px auto;
  &__column {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }
  &__avatar {
    width: 55px;
    height: 55px;
    img {
      width: 100%;
      border-radius: 100%;
    }
  }
}
</style>