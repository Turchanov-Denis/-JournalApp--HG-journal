<template>
  <div class="notifications">
    <h1>Уведомления</h1>
    <div
      v-for="(item, index) in this.$store.state.notification.notification"
      :key="index"
    >
      <LabelNotification
        :url="item.url"
        :text="item.text"
        :link="item.link"
        :time="item.time"
      ></LabelNotification>
    </div>
  </div>
</template>

<script>
import LabelNotification from "../components/Notification/LabelNotification.vue";
export default {
  layout: "default",
  components: { LabelNotification },
};
</script>

<style lang="scss">
.notifications {
  width: 50%;
  margin-top: 30px;
  height: 400px;
  background-color: #fff;
  border-radius: 10px;
  h1 {
    font-size: 30px;
    padding: 20px;
    border-bottom: 0.5px solid rgba(135, 135, 135, 0.375);
  }
}
</style>