<template>
  <button type="submit" :disabled="disabled">
    PAY NOW
    <AngleRight class="icon"/>
  </button>
</template>
<script>
import AngleRight from "@/assets/angle-right-solid.svg";
export default {
  name: "PayButton",
  props: ["disabled"],
  components: {
    AngleRight
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/pop-mixin.scss";

button {
  position: relative;
  background-color: #e3e3e3;
  width: 80%;
  padding: 8px;
  border-radius: 10vw;
  font-size: 1rem;
  color: #fff;
  border: none;
  &:enabled {
    background-color: $primary;
    cursor: pointer;

    &:hover {
      @include pop-mixin(1.05);
      -webkit-transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      -moz-transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      -ms-transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      -o-transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      -webkit-transform-style: preserve-3d;
      -moz-transform-style: preserve-3d;
      -webkit-backface-visibility: hidden;
      -moz-backface-visibility: hidden;
    }
  }

  .icon {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
