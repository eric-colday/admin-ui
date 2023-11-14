export const Users = [
  {
    name: "John Doe",
    img: "/person/2.jpeg",
    email: "john@example.com",
    role: "admin",
    status: true,
    createdAt: "2019-08-30T13:46:57.783Z",
  },
  {
    name: "Jane Smith",
    img: "/person/1.jpeg",
    email: "jane@example.com",
    role: "client",
    status: false,
    createdAt: "2019-08-30T13:46:57.783Z",
  },
  {
    name: "Alice Johnson",
    img: "/person/3.jpeg",
    email: "alice@example.com",
    role: "client",
    status: true,
    createdAt: "2019-08-30T13:46:57.783Z",
  },
  {
    name: "Bob Brown",
    img: "/person/4.jpeg",
    email: "bob@example.com",
    role: "client",
    status: false,
    createdAt: "2019-08-30T13:46:57.783Z",
  },
  {
    name: "Charlie Davis",
    img: "/person/5.jpeg",
    email: "charlie@example.com",
    role: "client",
    status: true,
    createdAt: "2019-08-30T13:46:57.783Z",
  },
  {
    name: "David Green",
    img: "/person/6.jpeg",
    email: "david@example.com",
    role: "client",
    status: false,
    createdAt: "2019-08-30T13:46:57.783Z",
  },
  {
    name: "Eva White",
    img: "/person/7.jpeg",
    email: "eva@example.com",
    role: "client",
    status: true,
    createdAt: "2019-08-30T13:46:57.783Z",
  },
  {
    name: "Frank Black",
    img: "/person/8.jpeg",
    email: "frank@example.com",
    role: "admin",
    status: false,
    createdAt: "2019-08-30T13:46:57.783Z",
  },
];

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
