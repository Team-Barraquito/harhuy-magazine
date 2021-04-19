import { render, getByRole } from "@testing-library/vue";
import StoreBadge from "../StoreBadge.vue";

test("Should render the component", async () => {
  const { getByRole } = render(StoreBadge);
});
