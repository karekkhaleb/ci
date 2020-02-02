class Person {
  constructor(firstName, lastName, country) {
    // if (firstName === undefined || lastName === undefined || country === undefined){
    //   throw "please provide firstName, lastName, country";
    // }
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
  }
  introduce() {
    return `My name is ${this.firstName} and my country is ${this.country}`;
  }
}
module.exports = Person;
