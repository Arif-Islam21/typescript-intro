type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

let person1: Person = {
  name: "arif",
  age: 20,
  isStudent: true,
};
let person2: Person = {
  name: "sojib",
  age: 29,
  isStudent: false,
};

// let People: Person[] = [person1, person2];
let People: Array<Person> = [person1, person2]; //DONE WITH GENERICS
