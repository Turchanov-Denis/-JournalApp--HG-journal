<template>
  <div class="list-bar">
    <button class="list-bar__button active">Популярное</button>
    <button class="list-bar__button">Свежее</button>
    <button class="list-bar__button">Моя лента</button>
    <button class="list-bar__button">Закладки</button>
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
    margin-bottom: 10px;
    text-align: center;
    width: 200px;
    height: 44px;
    background: rgba(217, 217, 217, 0);
    border-radius: 10px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 23px;
    text-align: left;
    padding-left: 20px;
    /* identical to box height */

    color: #3f3f3f;
    &:hover {
      background: rgba(255, 255, 255, 0.4);
    }
  }
}

.active {
  background: rgb(255, 255, 255);
}
</style>