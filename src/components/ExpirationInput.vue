<template>
  <fieldset>
    <Label for="expiration">Expiration</Label>
    <MakedInput
      name="expiration"
      mask="##/##"
      placeholder="MM/YY"
      masked
      :value="expiration"
      @input="handleChange"
    />
  </fieldset>
</template>

<script>
import Label from "@/components/FormLabel.vue";
import { TheMask } from "vue-the-mask";

export default {
  name: "ExpirationInput",
  props: ["expiration"],
  components: {
    Label,
    MakedInput: TheMask
  },

  methods: {
    handleChange(e) {
      this.$emit("change", e);
    }

    // validDate(dValue) {
    //   var result = false;
    //   dValue = dValue.split("/");
    //   var pattern = /^\d{2}$/;

    //   if (dValue[0] < 1 || dValue[0] > 12) result = true;

    //   if (!pattern.test(dValue[0]) || !pattern.test(dValue[1])) result = true;

    //   if (dValue[2]) result = true;

    //   if (result) alert("Please enter a valid date in MM/YY format.");
    // }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/input.scss";
</style>
