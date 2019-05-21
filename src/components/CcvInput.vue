<template>
  <fieldset>
    <Label for="ccv">CCV</Label>
    <MakedInput
      type="password"
      name="ccv"
      mask="####"
      placeholder="CCV"
      @input="handleChange"
      @focus.native="handleFocus"
      @blur.native="handleBlur"
    />
    <span v-if="errors.length > 0" class="error">{{ errors[0] }}</span>
  </fieldset>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";
import { TheMask } from "vue-the-mask";

export default {
  name: "CCV",
  extends: BaseInput,
  components: {
    MakedInput: TheMask
  },

  methods: {
    handleFocus() {
      this.$emit("focus");
    },
    handleBlur() {
      this.$emit("blur");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/input.scss";
</style>
