<template>
  <div class="user-content">
    <div class="user-description">
      <img
        src="../HeaderComponent/UserBarImage/avatar.png"
        class="user-description__icon"
      />
      <div class="user-description__name">Rafu</div>
      <a href="#" class="user-description__edit">Редактировать</a>
      <div class="user-state">
        <div class="user-state__subscribers">+6 1 подписчик</div>
        <div class="user-state__time">На проекте с 14 июл 2022</div>
      </div>
      <div class="tabs">
        <button class="tab">Статьи</button>
        <button class="tab">Комментарии</button>
        <button class="tab">Черновики</button>
      </div>
    </div>
    <div
      style="
        display: flex;
        align-items: start;
        justify-content: space-between;
        padding-top: 20px;
      "
    >
      <ArticleTool></ArticleTool> <Subscribers></Subscribers>
    </div>
  </div>
</template>

<script>
import ArticleTool from "./ArticleTool.vue";
import Subscribers from "./Subscribers.vue";
export default {
  components: {
    ArticleTool,
    Subscribers,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.tabs {
  margin-top: 50px;
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* identical to box height */

  .tab {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    color: rgba(97, 97, 97, 0.9);
    border-bottom: 2px solid rgba(242, 178, 243, 0);
    &:hover {
      border-bottom: 2px solid rgba(242, 178, 243, 0.6);
    }
  }
}
.user-description {
  width: 960px;
  height: 375px;
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  &__name {
    padding: 10px 0;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;

    color: #000000;
  }
  &__icon {
    width: 112px;
    height: 112px;
  }
  &__edit {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 23px;
    /* identical to box height */
  }
}
.user-state {
  margin-top: 20px;
  display: block;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  /* identical to box height */

  color: #3f3f3f;
}
</style>