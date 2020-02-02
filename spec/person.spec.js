const Person = require("../person");
let person1;
beforeAll(() => {
  person1 = new Person("Caleb", "Rwanda");
});

describe("Person class", () => {
  it('should create a new person with provided name and address', () => {
    const person2 = new Person("John", "Malaysia");
    expect(person2.name).toEqual("John");
    expect(person2.country).toEqual("Malaysia");
  });
  it('the introduction should contain the name and address', () => {
    const introduction = person1.introduce();
    expect(introduction).toContain("Caleb");
    expect(introduction).toContain("Rwanda");
    expect(introduction).toEqual('My name is Caleb and my country is Rwanda')
  });
});