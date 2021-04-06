import { render } from "@testing-library/vue";
import CircularCursor from "../CircularCursor.vue";

test("It renders the component correctly", async () => {
  const { getByRole } = render(CircularCursor);
});
