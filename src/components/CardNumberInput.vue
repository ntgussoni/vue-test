<template>
  <fieldset>
    <Label for="card-number">Card Number</Label>
    <MakedInput name="card-number" mask="#### #### #### ####" masked @input="handleChange"/>
    <span class="error">{{errors[0]}}</span>
  </fieldset>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";
import { TheMask } from "vue-the-mask";

export default {
  name: "CardNumberInput",
  extends: BaseInput,
  components: {
    MakedInput: TheMask
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/input.scss";

input {
  font-size: 1.1rem;
}
</style>
