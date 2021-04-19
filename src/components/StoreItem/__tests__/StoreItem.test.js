import { render, getByRole, getByText, fireEvent } from "@testing-library/vue";
import StoreItem from "../StoreItem.vue";

const item = {
  name: "Harhuy Tee Logo White",
  urlName: "HarHuyTeeLogoWhite",
  isInStock: true,
  size: "L",
  rating: 4.9,
  price: 15,
  priceId: "price_1IdlcoLav5xUnjDzSjSypBlT",
  description: "Se trata de construir tu vida, en eso estás a diario,y mientras, cada decisión que tomas, ayuda a construir tu presente. Esta súper bolsa la vas a amar, en color negro combina con todo y está preparada para contener todo lo que necesites y acompañarte hasta el fin del mundo.",
  photos: {
    front: "/harhuyTeeLogoWhite.jpg",
    closeup: "/harhuyTeeLogoWhiteClose.jpg",
    wear: "/harhuyTeeLogoWhiteWear.jpg",
  },
};

test("Should render the component", async () => {
  const { getByRole } = render(StoreItem);
});

test("Should render the name of the product", async () => {
  const { getByRole } = render(StoreItem, {
    item,
  });

  const name = getByRole("contentinfo");
  expect(name).toBe(item.name);
});
