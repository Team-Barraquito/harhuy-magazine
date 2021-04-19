import { render, getByRole } from "@testing-library/vue";
import TopBar from "../TopBar.vue";

test("Should render the component", async () => {
  const { getByRole } = render(TopBar);
});
