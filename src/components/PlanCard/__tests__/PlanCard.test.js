import { render, getByRole, getByText, fireEvent } from "@testing-library/vue";
import PlanCard from "../PlanCard.vue";

test("Should render the component", async () => {

    const {getByRole} = render(PlanCard);
});

/*test("Should fire the event", async () => {

    const props= {itemid:"price_1Ier8jLav5xUnjDzfsDbGlYC"}
    const { getByText } = render(PlanCard, {
        props,
    });
    const button = getByText('Compralo ya!');
    await fireEvent.click(button);

    expect(window.location.href).toEqual('https://checkout.stripe.com/pay/ppage_1IheLXLav5xUnjDzySfFUdMW#fidkdWxOYHwnPyd1blpxYHZxWjA0TGFNanNJZHMwfVBrb0F%2FTjZkVUN0XVdJQUtGd3BQcGJHd2xJQWRvVWtNcHxwSD10b3FPbzx%2FX0YyTGtibTVgMWFHRHRyN3BoVUAzaFBsUGQxSEROUjRgNTVqa0drUW9vcCcpJ2hsYXYnP34nYnBsYSc%2FJ0tEJyknaHBsYSc%2FJ0tEJykndmxhJz8nS0QneCknZ2BxZHYnP15YKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSd3YGNgd3dgd0p3bGJsayc%2FJ21xcXU%2FKippamZkaW1qdnE%2FPTU9NScpJ2lqZmRpYCc%2FJ2RwcWoneCUl')
});*/
