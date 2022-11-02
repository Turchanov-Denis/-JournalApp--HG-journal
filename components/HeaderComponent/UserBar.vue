<template>
  <div class="user-bar">
    <div class="user-bar__body">
      <div class="user-bar__column">
        <button class="user-bar__icon">
          <img src="./UserBarImage/message.png" alt="shopCart" />
        </button>
      </div>
      <div class="user-bar__column">
        <button class="user-bar__icon">
          <img src="./UserBarImage/bell.png" alt="favorites" />
        </button>
      </div>
      <div class="user-bar__column">
        <button class="user-bar__icon user-bar__icon_avatar">
          <img src="./UserBarImage/avatar.png" alt="favorites" />
        </button>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.user-bar {
  &__body {
    display: flex;
    min-width: 200px;
    justify-content: center;
    align-items: center;
  }

  &__column {
    width: 40px;
    padding: 0 30px;
  }

  &__icon {
    width: 40px;
    height: 40px;
    img {
      width: 100%;
      height: 100%;
    }
    &_avatar {
      img {
        border-radius: 100%;
      }
    }
  }

  &__profile {
    background-color: rgba(255, 255, 255, 0);
  }
}
</style>