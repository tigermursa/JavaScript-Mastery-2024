class Person {
  constructor(name, by) {
    this.name = name;
    this.by = by;
  }

  calAge() {
    return 2024 - this.by;
  }
}

// inheritance happening here using extends
class Dev extends Person {
  constructor(name, by, subject) {
    super(name, by, subject); //super
    this.subject = subject;
  }
}

const Mursalin = new Dev("BEST dev", 1999);
console.log(Mursalin.calAge());
