import { images } from "../database/images";

var posts = [
  {
    user: "Norbert Janowski",
    img: "https://randomuser.me/api/portraits/men/31.jpg",
    timestamp: "2020-05-24T12:59-0500",
    txt:
      "Wielkie dzięki <span>@Barbara Klimowicz</span> za współpracę przy ostatnim projekcie. Dzięki twojej pomocy poradziłam sobie z badaniami i analizą! Mam nadzieję że jeszcze wiele takich projektów przed nami.",
    kudos: "Świetny współpracownik",
    kudosImg: images.coworker,
    mention: "Barbara Klimowicz",
    group: "Marketing",
  },
  {
    user: "Albert Dziedzic",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    timestamp: "2020-05-25T12:59-0500",
    txt:
      "Wielkie dzięki <span>@Norbert Janowski</span> za współpracę przy ostatnim projekcie. Dzięki twojej pomocy poradziłem sobie z badaniami i analizą! Mam nadzieję że jeszcze wiele takich projektów przed nami.",
    kudos: "Pozytywny wpływ",
    kudosImg: images.positive,
    mention: "Norbert Janowski",
    group: "Białystok",
  },
];

export default posts;
