<template>
  <div class="carousel">
    <Card :flipCard="flipCard" :formData="formData"/>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  name: "CardCarousel",
  props: ["formData", "flipCard"],
  components: {
    Card
  }
};
</script>

<style lang="scss" scoped>
.carousel {
  padding: 1rem;
  width: 100%;

  @include media("<tablet") {
    padding: 1.8rem;
  }
}
</style>
