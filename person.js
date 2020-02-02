class Person {
  name;
  country;
  constructor(name, country) {
    this.name = name;
    this.country = country;
  }
  introduce() {
    return `My name is ${this.name} and my country is ${this.country}`;
  }
}
module.exports = Person;
