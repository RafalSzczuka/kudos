// users database. You can switch active user (visible at comments avatar, and name at newly added post) by changing "active" flag

const users = [
  {
    id: 1,
    display: "Zygfryd Paszek",
    avatar: "https://randomuser.me/api/portraits/men/21.jpg",
    active: false,
  },
  {
    id: 2,
    display: "Albert Dziedzic",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    active: false,
  },
  {
    id: 3,
    display: "Barbara Klimowicz",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    active: false,
  },
  {
    id: 4,
    display: "Norbert Janowski",
    avatar: "https://randomuser.me/api/portraits/men/31.jpg",
    active: false,
  },
  {
    id: 5,
    display: "Florian Zawisza",
    avatar: "https://randomuser.me/api/portraits/men/39.jpg",
    active: false,
  },
  {
    id: 6,
    display: "Anna Korolczuk",
    avatar: "https://randomuser.me/api/portraits/women/91.jpg",
    active: true,
  },
];

export default users;
