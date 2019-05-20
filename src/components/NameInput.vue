<template>
  <fieldset>
    <Label for="name">Name</Label>
    <input name="name" :value="name" @input="handleChange" />
  </fieldset>
</template>

<script>
import Label from "@/components/FormLabel.vue";
export default {
  name: "NameInput",
  props: ["name"],
  components: {
    Label
  },

  methods: {
    handleChange(e) {
      const {
        target: { value }
      } = e;

      this.$emit("change", value);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/input.scss";
</style>
