import { render, getByRole } from "@testing-library/vue";
import SideMenu from "../SideMenu.vue";

test("Should render the component", async () => {
  const { getByRole } = render(StoreBadge);
});
