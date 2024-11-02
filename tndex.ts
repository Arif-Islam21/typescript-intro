// CUSTOM TYPE
// type Food = string;

// let favouriteFood: Food = "pizza";

// CUSTOM TYPE OBJECT
type Address = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: Address;
};

let person: Person = {
  name: "arif",
  age: 20,
  isStudent: true,
};
let person2: Person = {
  name: "Tarik",
  age: 66,
  isStudent: false,
  address: {
    street: "Mokterpara",
    city: "Nilphamari",
    country: "Bangladesh",
  },
};
