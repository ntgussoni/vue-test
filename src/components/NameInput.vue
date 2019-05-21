<template>
  <fieldset>
    <Label for="name">Name</Label>
    <input name="name" @input="handleChange">
    <span v-if="errors.length > 0" class="error">{{ errors[0] }}</span>
  </fieldset>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";
import Label from "@/components/FormLabel.vue";
export default {
  name: "NameInput",
  extends: BaseInput,
  components: {
    Label
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/input.scss";
</style>
