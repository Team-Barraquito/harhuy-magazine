import { render, getByRole } from "@testing-library/vue";
import StoreFeaturedItem from "../StoreFeaturedItem.vue";

test("Should render the component", async () => {
  const { getByRole } = render(StoreFeaturedItem);
});