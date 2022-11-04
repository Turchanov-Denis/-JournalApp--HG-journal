<!-- Dialog copy -->
<template>
    <div  class="dialog">
      <div class="dialog__content">
        <NuxtChild></NuxtChild>
      </div>
    </div>
  </template>
  
  <script>

  export default {
    
    computed: {
      activeLogin() {
        return this.$store.state.main.activeLogin;
      },
    },
  };
  </script>
  
  <style lang="scss">
  </style>