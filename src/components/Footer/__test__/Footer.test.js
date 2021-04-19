import { render, getByRole } from "@testing-library/vue";
import Footer from "../Footer.vue";

test("Should render the component", async () => {
  const { getByRole } = render(Footer);
});
