type Userr = {
  id: number;
  userName: string;
  role: "member" | "contributor" | "admin";
};

type UpdatedUser = Partial<Userr>;

let nextUserId = 1;

const users: Userr[] = [
  { id: nextUserId++, userName: "Jhon Doe", role: "member" },
  { id: nextUserId++, userName: "Jhon Smith", role: "contributor" },
  { id: nextUserId++, userName: "Jhon hasg", role: "admin" },
  { id: nextUserId++, userName: "hi Doe", role: "member" },
];

function updateUser(id: number, updates: UpdatedUser) {
  const user = users.find((item) => item.id === id);
  if (user) {
    const result: object = Object.assign(user, updates);
    console.log(result);
  }
}

// updateUser(1, { userName: "new jhon doe" });
// updateUser(4, { role: "admin" });
// console.log(users);

function addNewUser(newUser: Omit<Userr, "id">): Userr {
  const user: Userr = {
    id: nextUserId++,
    ...newUser,
  };
  users.push(user);
  return user;
}

addNewUser({ userName: "jow smith", role: "member" });
console.log(users);
