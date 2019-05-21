import { shallowMount } from "@vue/test-utils";
import Card from "@/components/Card.vue";

describe("Card.vue", () => {
  it("renders card data when passed", () => {
    const name = "Jane";
    const cardNumber = "1234 1234 1234 1234";
    const expiration = "11/24";

    const wrapper = shallowMount(Card, {
      propsData: { name, cardNumber, expiration }
    });

    expect(wrapper.text()).toMatch(name);
    expect(wrapper.text()).toMatch(cardNumber);
    expect(wrapper.text()).toMatch(expiration);
  });

  it("flips card data when flipCard is passed as true", () => {
    const flipCard = false;
    const className = "flipped";

    const wrapper = shallowMount(Card, {
      propsData: { flipCard }
    });

    const card = wrapper.find(".card");
    expect(card.classes()).not.toContain(className);
    wrapper.setProps({ flipCard: !flipCard });
    expect(card.classes()).toContain(className);
  });

  it("flips card data when flipCard is passed as true", () => {
    const flipCard = false;
    const className = "flipped";

    const wrapper = shallowMount(Card, {
      propsData: { flipCard }
    });

    const card = wrapper.find(".card");
    expect(card.classes()).not.toContain(className);
    wrapper.setProps({ flipCard: !flipCard });
    expect(card.classes()).toContain(className);
  });
});
