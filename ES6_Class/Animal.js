class Animal {
  constructor(animalName, nickName) {
    this.animalName = animalName;
    this.nickName = nickName;
    this.food = [];
  }

  breath() {
    return `(${this.animalName}): ${this.nickName} is breathing...`;
  }

  sleep() {
    return `(${this.animalName}): ${this.nickName} is sleeping...`;
  }

  set foodName(foodName) {
    console.log(`I am have ${foodName} and its tasty.`);
    return this.food.push(foodName);
  }

  get foodName() {
    return this.food;
  }
}

class Dog extends Animal {
  constructor(nickName) {
    super("Dog", nickName);
  }

  bark() {
    return `(${this.animalName}): ${this.nickName} is barking now (Bhow Bhow)`;
  }
}

class Cat extends Animal {
  constructor(nickName) {
    super("Cat", nickName);
  }

  meow() {
    return `(${this.animalName}): ${this.nickName} is meowing now (Meow meow)`;
  }
}

class Persian extends Cat {
  constructor(nickName) {
    super(nickName);
  }

  jump() {
    return `(${this.animalName}): ${this.nickName} is jumping now`;
  }
}

let tom = new Persian();
tom.foodName = "Fish";
console.log(tom.food);
