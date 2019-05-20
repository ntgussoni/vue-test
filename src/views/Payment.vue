<template>
  <div id="container">
    <h1>Payment</h1>
    <CardsCarousel :flipCard="flipCard" :formData="formData"/>
    <form method="POST" @submit="submitForm">
      <NameInput @change="handleNameChange"/>
      <CardNumberInput @change="handleCardNumberChange"/>
      <div class="container-100">
        <div class="container-50">
          <ExpirationInput @change="handleExpirationChange"/>
        </div>
        <div class="container-50">
          <CcvInput @change="handleCcvChange" @blur="handleFlip" @focus="handleFlip"/>
        </div>
      </div>
      <div class="clearfix"/>
      <PayButton/>
    </form>
  </div>
</template>

<script>
import CardsCarousel from "@/components/CardsCarousel";
import PayButton from "@/components/PayButton";
import NameInput from "@/components/NameInput.vue";
import CardNumberInput from "@/components/CardNumberInput.vue";
import ExpirationInput from "@/components/ExpirationInput.vue";
import CcvInput from "@/components/CcvInput.vue";
import { required, isCreditCard, isCCV, validateExpiration } from "@/helpers";

export default {
  components: {
    CardsCarousel,
    PayButton,
    NameInput,
    CardNumberInput,
    ExpirationInput,
    CcvInput
  },

  data() {
    return {
      flipCard: false,
      formData: {
        name: "John Doe",
        cardNumber: "**** **** **** 2456",
        expiration: "11/22",
        ccv: ""
      }
    };
  },

  methods: {
    handleNameChange(value) {
      this.formData.name = value;
    },
    handleCardNumberChange(value) {
      this.formData.cardNumber = value;
    },
    handleExpirationChange(value) {
      this.formData.expiration = value;
    },
    handleCcvChange(value) {
      this.formData.ccv = value;
    },
    handleFlip() {
      this.flipCard = !this.flipCard;
    },

    validateForm() {
      const { name, cardNumber, expiration, ccv } = this.formData;
      const nameIsValid = required(name);
      const cardNumberIsValid =
        required(cardNumber) && isCreditCard(cardNumber);
      const expirationIsValid =
        required(expiration) && validateExpiration(expiration);
      const ccvIsValid = required(ccv) && isCCV(ccv);

      return (
        nameIsValid && cardNumberIsValid && expirationIsValid && ccvIsValid
      );
    },

    submitForm(e) {
      e.preventDefault();
      this.validateForm() ? this.$router.push("success") : e.preventDefault();
    }
  }
};
</script>
<style lang="scss" scoped>
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 30vw;

  @include media("<tablet") {
    width: 100vw;
  }

  @include media(">=tablet", "<=desktop") {
    width: 50vw;
  }

  h1 {
    margin-bottom: 16px;
    font-size: 1.2rem;

    @include media("<tablet") {
      display: none;
    }
  }

  .container-100 {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .container-50 {
    width: 50%;
    float: left;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 16px;

    fieldset {
      display: flex;
      width: 100%;
    }

    button {
      margin-top: 40px;
    }
  }
}
</style>
