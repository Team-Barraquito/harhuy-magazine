import { render, getByRole } from "@testing-library/vue";
import ShowcaseArtist from "../ShowcaseArtist.vue";

test("Should render the component", async () => {
  const { getByRole } = render(ShowcaseArtist);
});
