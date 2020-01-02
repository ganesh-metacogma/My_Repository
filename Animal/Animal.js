class Animal {
  constructor() {
    this.food;
  }

  set food(foodName) {
    return (this.food = foodName);
  }
  get food() {
    return this.food;
  }
}

let tom = new Animal();
tom.food = "drools";
console.log(tom.food);
