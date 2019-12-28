class Animal {
  constructor(animalName, nickName) {
    this.animalName = animalName;
    this.nickName = nickName;
  }

  breath() {
    return `(${this.animalName}): ${this.nickName} is breathing...`;
  }

  sleep() {
    return `(${this.animalName}): ${this.nickName} is sleeping...`;
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

let tom = new Persian("tom");
console.log(tom.breath());
console.log(tom.meow());
console.log(tom.jump());
console.log(tom.sleep());
