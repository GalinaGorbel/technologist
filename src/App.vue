<template>
  <router-view></router-view>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('request/checkPosts');

    if (!this.$store.getters['request/checkPosts']) {

      this.$store.dispatch('request/loadExperience');
    } 
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,500;1,400&display=swap');
body {
  font-family: 'Ubuntu', sans-serif;
  color: #666565;
  background: #e5e5e5;
  padding: 0;
  margin: 0;
}
* {
  box-sizing: border-box;
}
:root {
  font-size: 1em; //16px
}
</style>