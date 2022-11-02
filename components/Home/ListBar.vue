<template>
  <div class="list-bar">
    <button class="list-bar__button active">Популярное</button>
    <button class="list-bar__button">Свежее</button>
    <button class="list-bar__button">Моя лента</button>
    <button class="list-bar__button">закладки</button>
  </div>
</template>


<style lang="scss">
.list-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 100vh;
  padding: 20px;
  &__button {
    text-align: center;
    width: 240px;
    height: 49px;
    background: rgba(217, 217, 217, 0);
    border-radius: 10px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    /* identical to box height */

    color: #3f3f3f;
  }
}

.active {
  background: rgb(255, 255, 255);
}
</style>