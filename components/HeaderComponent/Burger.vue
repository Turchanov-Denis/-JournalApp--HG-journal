<template>
  <div class="menu__icon">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>


<style lang="scss">
.menu {
  &__icon {
    display: block;
    position: relative;
    width: 40px;
    height: 30px;
    cursor: pointer;
    z-index: 3;
    span {
      display: block;
      position: absolute;
      width: 100%;
      height: 3px;
      background-color: #4d4959;
      z-index: 5;
      top: 14px;
      left: 0;
      transition: all 1s ease 0s;

      &:first-child {
        top: 0;
      }

      &:last-child {
        top: auto;
        bottom: 0;
      }
    }

    &.active {
      span {
        transform: scale(0);
        background-color: #fff;

        &:first-child {
          top: 14px;
          transform: rotate(-45deg);
        }

        &:nth-child(2) {
          display: none;
        }

        &:last-child {
          bottom: 14px;
          transform: rotate(45deg);
        }
      }
    }
  }
}
</style>