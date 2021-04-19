import { render, getByRole } from "@testing-library/vue";
import TopBarTransparent from "../TopBarTransparent.vue";

test("Should render the component", async () => {
  const { getByRole } = render(TopBarTransparent);
});
