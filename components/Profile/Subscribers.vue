<template>
  <div class="subscribers">
    <div style="display:flex;align-items:center"><div class="subscribers__title">Подписчики</div>
    <div class="subscribers__count">0</div></div>
  </div>
</template>

<style lang="scss">
.subscribers {
  width: 300px;
  height: 116px;
  background: #ffffff;
  border-radius: 12px;
  padding: 10px;
  &__title {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 23px;

    color: rgba(97, 97, 97, 0.9);
  }
  &__count {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;

    color: rgba(97, 97, 97, 0.9);
    margin-left: 10px;
  }
}
</style>