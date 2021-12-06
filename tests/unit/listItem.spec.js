import ListItem from "@/components/ListItem.vue";
import { shallowMount } from "@vue/test-utils";
import ElementPlus from "element-plus";

describe("ListItem.vue", () => {
  it("renders content passed via props", () => {
    const checked = false;
    const content = "testing";
    const id = "test-id";
    const wrapper = shallowMount(ListItem, {
      global: {
        plugins: [ElementPlus],
      },
      props: { checked, content, id },
    });
    expect(wrapper.text()).toMatch(content);
  });
});
