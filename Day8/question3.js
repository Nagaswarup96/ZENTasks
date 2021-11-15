// Write a “person” class to hold all the details.

console.log("\n\n\n************Question3***************\n\n\n");

class person {
  constructor({ name, age, gender, height, city, country }) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.height = height;
    this.city = city;
    this.country = country;
  }

  getData() {
    console.log(`
    Name    : ${this.name}
    Age     : ${this.age}
    Gender  : ${this.gender}
    Height  : ${this.height}
    City    : ${this.city}
    Country : ${this.country}
        `);
  }
}

const personData = {
  name: "Nagaswarup",
  age: 24,
  gender: "male",
  height: "5.11ft",
  city: "Bengaluru",
  country: "India",
};

const personInfo = new person(personData);

personInfo.getData();
