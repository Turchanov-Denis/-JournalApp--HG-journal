<template>
  <div class="article-tool">
    <div style="display:flex;align-items:center"><button class="user-bar__icon user-bar__icon_avatar">
      <img src="../HeaderComponent/UserBarImage/avatar.png" alt="favorites" />
    </button>
    <button>Новая запись</button></div>
    <div style="display:flex;align-items:center">
        <button class="article-tool__note-button">Фото и видео</button>
        <button class="article-tool__note-button" >Ссылки</button>
    </div>
  </div>
</template>


<style lang="scss">
.article-tool {
  width: 640px;
  min-height: 94px;
  background: #ffffff;
  border-radius: 12px;
  
  padding: 10px;
  &__note-button {
    width: 136px;
    height: 30px;
    background: #F4F7F9;
    border-radius: 20px;
    margin: 10px;
  }
  button {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;

    color: rgba(97, 97, 97, 0.9);
  }
}
</style>