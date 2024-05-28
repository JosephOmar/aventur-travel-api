const myName = 'Joseph';
const myAge = 29;
const suma = (a: number, b: number) => {
  return a + b;
};
suma(12, 4);

class Persona {
  constructor(
    private age: number,
    private name: string,
  ) {}

  getSummary() {
    return `my name is ${this.name}, ${this.age}`;
  }
}

const joseph = new Persona(20, 'Joseph');
