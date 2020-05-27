import { images } from "../database/images";

// here you can coustomize your kudos card (avaliable at kudos editor page, "Wybierz kudos").
// You only need to add another element in data array below. All properties are required.

const data = [
  {
    id: "thanks",
    value: "Dziękuję Ci",
    img: images.thanks,
  },
  { id: "congrats", value: "Gratulacje", img: images.congrats },
  { id: "teamplay", value: "Gracz zespołowy", img: images.teamplay },
  { id: "positive", value: "Pozytywny wpływ", img: images.positive },
  { id: "coworker", value: "Świetny współpracownik", img: images.coworker },
  {
    id: "outboundaries",
    value: "Przechodzisz samego (samą) siebie",
    img: images.outboundaries,
  },
];

export default data;
