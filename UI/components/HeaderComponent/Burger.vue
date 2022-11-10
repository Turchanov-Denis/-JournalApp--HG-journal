<template>
  <div class="menu__icon" @click="()=>{this.$store.commit('main/changeListBar')}">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>


<style lang="scss">
.menu__icon {
  display: flex;
  flex-direction: column;
  height: 20px;
  width: 20px;
  justify-content: space-between;
  cursor: pointer;
}
span {
  display: block;
  width: 31px;
  height: 3px;
  background: #000000;
}
</style>