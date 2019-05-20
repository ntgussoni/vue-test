<script>
import Label from "@/components/FormLabel.vue";
export default {
  name: "BaseInput",
  props: ["data"],
  components: {
    Label
  },

  computed: {
    errors() {
      return this.data.errors;
    },
    hasErrors() {
      return this.errors && this.errors.length > 0;
    }
  },

  methods: {
    handleChange(e) {
      let value = e;
      if (e.target) {
        value = e.target.value;
      }

      this.$emit("change", value);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/input.scss";
</style>
