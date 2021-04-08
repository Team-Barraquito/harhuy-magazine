import { render, fireEvent } from "@testing-library/vue";
import IncreaseButton from "../IncreaseButton.vue";
import store from "../../../store/index";

const renderVuex = () => {
  return render(IncreaseButton, { store: { store } });
};

it("Can add 1 to current itemQuantity state", async () => {
  const { getByRole } = renderVuex();
});
