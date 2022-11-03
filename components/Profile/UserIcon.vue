<template>
  <div style="display:flex;width:100px;align-items:center">
    <img
      src="../HeaderComponent/UserBarImage/avatar.png"
      class="write__icon"
    />
    <div class="write__name">Rafu</div>
  </div>
</template>


<style lang="scss">
.write {
  width: 960px;
  height: 375px;
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  &__name {
    padding: 0 10px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 42px;

    color: #00000078;
  }
  &__icon {
    width: 25px;
    height: 25px;
  }
}
</style>