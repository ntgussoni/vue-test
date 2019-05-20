<template>
  <label :for="target">
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: "Label",
  props: ["target", "label"]
};
</script>

<style lang="scss" scoped>
label {
  display: block;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  color: $primary;
}
</style>
