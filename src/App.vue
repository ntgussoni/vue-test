<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
@import "./styles/reset.scss";
@import url("https://fonts.googleapis.com/css?family=Space+Mono:400,400i,700,700i");
* {
  font-family: "Space Mono", monospace;
}

#app {
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
}
</style>
