type Userr = {
  id: number;
  userName: string;
  role: "member" | "contributor" | "admin";
};

type UpdatedUser = Partial<Userr>;

const users: Userr[] = [
  { id: 1, userName: "Jhon Doe", role: "member" },
  { id: 2, userName: "Jhon Smith", role: "contributor" },
  { id: 3, userName: "Jhon hasg", role: "admin" },
  { id: 4, userName: "hi Doe", role: "member" },
];

function updateUser(id: number, updates: UpdatedUser) {
  const user = users.find((item) => item.id === id);
  if (user) {
    const result: object = Object.assign(user, updates);
    console.log(result);
  }
}

updateUser(1, { userName: "new jhon doe" });
updateUser(4, { role: "admin" });
console.log(users);
