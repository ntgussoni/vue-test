<template>
  <div id="container">
    <CheckIcon class="success-icon" />
    <h1>Payment successfull</h1>
    <h2>Thank you!</h2>
  </div>
</template>
<script>
import CheckIcon from "@/assets/check-circle-solid.svg";
export default {
  name: "Success",
  components: {
    CheckIcon
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/scale-up.scss";

#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 300px;
  background: #4caf50;
  color: #fff;
  border-radius: 16px;
  padding: 16px;

  @include media("<desktop") {
    height: 100vh;
    width: 100vw;
    border-radius: 0;
  }

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1rem;
  }

  .success-icon {
    width: 100px;
    height: 100px;
    margin-bottom: 32px;
    -webkit-animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
      both;
    animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
}
</style>
