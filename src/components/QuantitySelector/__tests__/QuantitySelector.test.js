import { render, fireEvent } from "@testing-library/vue";
import QuantitySelector from "../QuantitySelector.vue";
import store from "../../../store/index";

const renderVuex = () => {
  return render(QuantitySelector, { store: { store } });
};

it("Displays 1 when increase button is clicked", async () => {
  const { getByText, findByRole } = renderVuex();
  await fireEvent.click(getByText("+"));

  expect(findByRole("text")).toHaveTextContent("1");
});
