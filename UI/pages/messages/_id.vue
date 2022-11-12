<template>
  <div  style="width: 100%;">
    <div
     
      v-for="(item, index) in this.$store.state.messages.messages.filter(
        (item) => item.id == id
      )[0].history"
      :key="index"
    >
      <div
        style="display: flex;margin: 20px;width: 80%;
        "
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const id = params.id; // When calling /abc the slug will be "abc"
    return { id };
  },
};
</script>