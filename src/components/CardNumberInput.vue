<template>
  <fieldset>
    <Label for="card-number">Card Number</Label>
    <MakedInput
      name="card-number"
      mask="#### #### #### ####"
      masked
      :value="cardNumber"
      @input="handleChange"
    />
  </fieldset>
</template>

<script>
import Label from "@/components/FormLabel.vue";
import { TheMask } from "vue-the-mask";

export default {
  name: "CardNumberInput",
  props: ["cardNumber"],
  components: {
    Label,
    MakedInput: TheMask
  },

  methods: {
    handleChange(e) {
      this.$emit("change", e);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/input.scss";

input {
  font-size: 1.1rem;
}
</style>
