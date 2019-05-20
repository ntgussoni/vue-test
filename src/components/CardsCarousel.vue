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
  width: 100%;
  margin-bottom: 16px;
}
</style>
