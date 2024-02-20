const Person = function (name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
};

//prototype inheritance

Person.prototype.calAge = function (year) {
  return year - this.birthYear;
};

const mir = new Person("Mir", 1998);
console.log(mir);
console.log(mir.calAge(1255));

const Student = function (name, birthYear, subject) {
  this.name = name;
  this.birthYear = birthYear;
  this.subject = subject;
};

//prototype inheritance

Student.prototype.intro = function () {
  return `I am ${this.name}`;
};

const mursalin = new Student("Mezba", 2000, "Science");

console.log(mursalin.intro());
//prototype inheritance


