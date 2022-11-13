<template>
  <div class="messages">
    <div class="messages__leftBar">
      <div style="display:flex;align-items: center;padding-left: 10px; border-bottom: 0.5px solid rgba(88, 88, 88, 0.215);">
        <div class="messages__input-icon"></div>
        <input class="messages__input" placeholder="Поиск..." />
      </div>
      <LabelMessage
        name="Rem"
        message="awdawdad"
        time="18:00"
        token="1"
      ></LabelMessage>
    </div>
    <div class="messages__field" style="width: 100%">
      <NuxtChild></NuxtChild>
    </div>
  </div>
</template>
  
  <script>
import LabelMessage from "../components/Messager/LabelMessage.vue";
export default {
  layout: "default",
  components: {
    LabelMessage,
  },
};
</script>
  
  <style lang="scss">
.messages {
  width: 100%;
  height: 800px;
  background-color: #fff;
  display: flex;
  justify-content: start;
  &__leftBar {
    height: 100%;
    width: 300px;
    border-right: 1px solid rgba(88, 88, 88, 0.389);
  }
  &__input {
    position: relative;
    height: 40px;
    width: 100%;
    padding-left: 20px;
   
    padding-left: 10px;
    &-icon {
      opacity: 0.7;
      width: 15px;
      height: 15px;
      background-image: url("../static/icon/search.png");
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
}
</style>