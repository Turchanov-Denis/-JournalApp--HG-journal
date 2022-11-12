<template>
    <div class="messages">
      <div class="messages__leftBar">
          <Label name="Rem" message="awdawdad" time="18:00" token="1"></Label>
      </div>
      <div class="messages__field" style="width: 100%;">
          <NuxtChild></NuxtChild>
      </div>
    </div>
  </template>
  
  <script>
  import Label from "../components/Messager/Label.vue";
  export default {
    layout: "default",
    components: {
      Label,
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
  }
  </style>