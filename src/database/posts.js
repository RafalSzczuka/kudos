import { images } from "../database/images";

var initialialPosts = [
  {
    user: "Norbert Janowski",
    img: "https://randomuser.me/api/portraits/men/31.jpg",
    timestamp: "2020-05-25T10:54-0500",
    txt:
      "Wielkie dzięki <span>@Barbara Klimowicz</span> za współpracę przy ostatnim projekcie. Dzięki twojej pomocy poradziłam sobie z badaniami i analizą! Mam nadzieję że jeszcze wiele takich projektów przed nami.",
    kudos: "Świetny współpracownik",
    kudosImg: images.coworker,
    mention: "Barbara Klimowicz",
    group: "Marketing",
    groupIco: "fas fa-search-dollar",
    likes: 4,
  },
  {
    user: "Albert Dziedzic",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    timestamp: "2020-05-24T12:59-0500",
    txt:
      "Super się pracowało z <span>@Norbert Janowski</span> przy ostatnim mega dużym projekcie. Wiele się nauczyłem, a głównie to Twoja zasługa :) Mam nadzieję że jeszcze wspólnie będziemy pracować.",
    kudos: "Pozytywny wpływ",
    kudosImg: images.positive,
    mention: "Norbert Janowski",
    group: "Białystok",
    groupIco: "fas fa-city",
    likes: 2,
  },
  {
    user: "Florian Zawisza",
    img: "https://randomuser.me/api/portraits/men/39.jpg",
    timestamp: "2020-05-23T12:59-0500",
    txt:
      "Jestem tu nowy i bez pomocnej dłoni <span>@Albert Dziedzic</span> chyba bym sobie nie poradził 💪 Deadline nas gonił, ale daliśmy radę! Dzięki za pomoc, masz u mnie piwo! 👌",
    kudos: "Gracz zespołowy",
    kudosImg: images.teamplay,
    mention: "Albert Dziedzic",
    group: "Backend",
    groupIco: "fas fa-server",
    likes: 12,
  },
];

export default initialialPosts;
