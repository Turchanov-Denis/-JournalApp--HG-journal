<template>
  <input
    class="find-input"
    placeholder="Find"
    type="text"
    @input=" (event) => test(event)"
    :value="this.$store.state.main.inputValue"
  />
</template>

<script>

  export default {
    methods: {
      test(event) {
        this.$store.commit('main/changeInputValue', event.target.value)
      }
    }
  }

</script>
<style lang="scss">
.find-input {
  width: 519px;
  height: 42px;
  left: 513px;
  top: 16px;
  background: #edc1ca;
  border-radius: 6px;
  padding-left: 20px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  /* identical to box height */

  color: #3f3f3f;
  &:focus {
    background: #f9f0f2;
  }
}
</style>