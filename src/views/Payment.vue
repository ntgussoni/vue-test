<template>
  <div id="container">
    <h1>CHECKOUT</h1>
    <CardsCarousel :flipCard="flipCard" :formData="formData"/>
    <form method="POST" @submit="submitForm">
      <NameInput :data="formData.name" @change="handleNameChange"/>
      <CardNumberInput :data="formData.cardNumber" @change="handleCardNumberChange"/>
      <div class="container-100">
        <div class="container-50">
          <ExpirationInput :data="formData.expiration" @change="handleExpirationChange"/>
        </div>
        <div class="container-50">
          <CcvInput
            :data="formData.ccv"
            @change="handleCcvChange"
            @blur="handleFlip"
            @focus="handleFlip"
          />
        </div>
      </div>
      <div class="clearfix"/>
      <PayButton :disabled="!formIsValid"/>
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

const updateData = (data, newValue) => {
  const { value, validations } = data;
  const errors = [];
  validations.forEach(fn => {
    const msg = fn(newValue);
    if (msg !== true) errors.push(msg);
  });

  return { ...data, value: newValue, isValid: errors.length == 0, errors };
};

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
        name: {
          value: "",
          placeholder: "John Doe",
          validations: [required],
          isValid: false,
          errors: []
        },
        cardNumber: {
          value: "",
          placeholder: "**** **** **** 2456",
          validations: [required, isCreditCard],
          isValid: false,
          errors: []
        },
        expiration: {
          value: "",
          placeholder: "11/22",
          validations: [required, validateExpiration],
          isValid: false,
          errors: []
        },
        ccv: {
          value: "",
          placeholder: "",
          validations: [required, isCCV],
          isValid: false,
          errors: []
        }
      }
    };
  },

  computed: {
    formIsValid() {
      const { name, cardNumber, expiration, ccv } = this.formData;
      return (
        name.isValid && cardNumber.isValid && expiration.isValid && ccv.isValid
      );
    }
  },

  methods: {
    handleNameChange(value) {
      this.formData.name = updateData(this.formData.name, value);
    },
    handleCardNumberChange(value) {
      this.formData.cardNumber = updateData(this.formData.cardNumber, value);
    },
    handleExpirationChange(value) {
      this.formData.expiration = updateData(this.formData.expiration, value);
    },
    handleCcvChange(value) {
      this.formData.ccv = updateData(this.formData.ccv, value);
    },
    handleFlip() {
      this.flipCard = !this.flipCard;
    },

    submitForm(e) {
      e.preventDefault();
      this.formIsValid ? this.$router.push("success") : e.preventDefault();
    }
  }
};
</script>
<style lang="scss" scoped>
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  margin: 18px;
  padding: 18px;
  border-radius: 16px;

  @include media(">=phone") {
    width: 100vw;
  }
  @include media(">=tablet") {
    width: 60vw;
  }
  @include media(">=desktop") {
    width: 45vw;
  }

  h1 {
    margin-top: 16px;
    margin-bottom: 16px;
    font-size: 2rem;
    color: $primary;
    font-weight: bold;

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
