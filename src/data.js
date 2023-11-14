export const Users = [
  {
    id: '1',
    name: "John Doe",
    img: "/person/2.jpeg",
    email: "john@example.com",
    slug: "john-doe",
    role: "admin",
    status: true,
    createdAt: "2019-08-30T13:46:57.783Z",
  },
  {
    id: '2',
    name: "Jane Smith",
    img: "/person/1.jpeg",
    email: "jane@example.com",
    slug: "jane-smith",
    role: "client",
    status: false,
    createdAt: "2019-08-30T13:46:57.783Z",
  },
  {
    id: '3',
    name: "Alice Johnson",
    img: "/person/3.jpeg",
    email: "alice@example.com",
    slug: "alice-johnson",
    role: "client",
    status: true,
    createdAt: "2019-08-30T13:46:57.783Z",
  },
  {
    id: '4',
    name: "Bob Brown",
    img: "/person/4.jpeg",
    email: "bob@example.com",
    slug: "bob-brown",
    role: "client",
    status: false,
    createdAt: "2019-08-30T13:46:57.783Z",
  },
  {
    id: '5',
    name: "Charlie Davis",
    img: "/person/5.jpeg",
    email: "charlie@example.com",
    slug: "charlie-davis",
    role: "client",
    status: true,
    createdAt: "2019-08-30T13:46:57.783Z",
  },
  {
    id: '6',
    name: "David Green",
    img: "/person/6.jpeg",
    email: "david@example.com",
    slug: "david-green",
    role: "client",
    status: false,
    createdAt: "2019-08-30T13:46:57.783Z",
  },
  {
    id: '7',
    name: "Eva White",
    img: "/person/7.jpeg",
    email: "eva@example.com",
    slug: "eva-white",
    role: "client",
    status: true,
    createdAt: "2019-08-30T13:46:57.783Z",
  },
  {
    id: '8',
    name: "Frank Black",
    img: "/person/8.jpeg",
    email: "frank@example.com",
    slug: "frank-black",
    role: "admin",
    status: false,
    createdAt: "2019-08-30T13:46:57.783Z",
  },
];

export const Orders = [
  {
    id: "1",
    amount: 100.0,
    createdAt: "2019-08-30T13:46:57.783Z",
    status: "terminé",
  },
  {
    id: "2",
    amount: 200.0,
    createdAt: "2019-08-30T13:46:57.783Z",
    status: "en cours",
  },
  {
    id: "3",
    amount: 300.0,
    createdAt: "2019-08-30T13:46:57.783Z",
    status: "terminé",
  },
  {
    id: "4",
    amount: 400.0,
    createdAt: "2019-08-30T13:46:57.783Z",
    status: "en cours",
  },
]

export const fetchUsers = (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    const count = Users.find({ username: { $regex: regex } }).count();
    const users = Users.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
