<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CardWrapper"
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  margin-bottom: 16px;
}
</style>
