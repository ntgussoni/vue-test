import { shallowMount } from "@vue/test-utils";
import PayButton from "@/components/PayButton.vue";

describe("PayButton.vue", () => {
  it("renders enabled button if no disabled prop is passed", () => {
    const wrapper = shallowMount(PayButton, { propsData: { disabled: false } });
    expect(wrapper.props("disabled")).toBe(false);
  });

  it("renders disabled button if  disabled prop is passed", () => {
    const disabled = true;
    const wrapper = shallowMount(PayButton, { propsData: { disabled } });
    expect(wrapper.props("disabled")).toBe(true);
  });
});
