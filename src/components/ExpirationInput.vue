<template>
  <fieldset>
    <Label for="expiration">Expiration</Label>
    <MakedInput name="expiration" mask="##/##" placeholder="MM/YY" masked @input="handleChange"/>
    <span v-if="errors.length > 0" class="error">{{ errors[0] }}</span>
  </fieldset>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";
import { TheMask } from "vue-the-mask";

export default {
  extends: BaseInput,
  name: "ExpirationInput",
  components: {
    MakedInput: TheMask
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/input.scss";
</style>
