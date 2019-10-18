// CODE here for your Lambda Classes
class Person {
  constructor(attr) {
    (this.name = attr.name),
      (this.age = attr.age),
      (this.location = attr.location);
  }
  speak() {
    return `Hello my name is ${this.name} I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(attr) {
    super(attr);
    (this.speialty = attr.speialty),
      (this.favLanguage = attr.favLanguage),
      (this.catchPhrase = attr.catchPhrase);
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(attr) {
    super(attr);
    (this.previousBackground = attr.previousBackground),
      (this.className = attr.className),
      (this.favSubjects = attr.favSubjects);
  }
  listsSubjects() {
    this.favSubjects.forEach((subject) => {
      return console.log(`My favorite subjects are ${subject}.`);
    });
  }
  PRAssignment(student, subject) {
    return `${student.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(student, subject) {
    return `${student.name} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManagers extends Instructor {
  constructor(attr) {
    super(attr);
    (this.gradClassName = attr.gradClassName),
      (this.favInstructor = attr.favInstructor);
  }
  standUp(pm, channel) {
    return `${pm.name} announces to ${channel}, @channel standy times!`;
  }
  debugsCode(pm, student, subject) {
    return `${pm.name} debugs ${student.name}\'s code on ${subject}`;
  }
}

let brittH = new Instructor({
  name: 'Britt Hemming',
  age: 30,
  location: 'Canada',
  speialty: 'JavaScript',
  favLanguage: 'JavaScript',
  catchPhrase: 'How are you today eh!',
});

let velma = new Instructor({
  name: 'Velma Dinkley',
  age: 40,
  location: 'Crystal Cove',
  speialty: 'React',
  favLanguage: 'React',
  catchPhrase: "Jinkies y'all!",
});

let aaron = new Student({
  name: 'Aaron Doran',
  age: 27,
  location: 'Kalamazoo, MI, USA',
  speialty: 'LESS',
  favLanguage: 'JavaScript',
  catchPhrase: "Howdey y'all",
  previousBackground: 'Auto Tech',
  className: 'Web 25',
  favSubjects: ['Less, JavaScript, & React'],
});

let fez = new Student({
  name: 'Fez',
  age: 40,
  location: 'Wisconsin',
  speialty: 'Python',
  favLanguage: 'C#',
  catchPhrase: 'I said good day!',
  previousBackground: 'High school student',
  className: 'Web 19',
  favSubjects: ['React, & Python'],
});

let allie = new ProjectManagers({
  name: 'Allie',
  age: 24,
  location: 'IL',
  speialty: 'JavaScript',
  favLanguage: 'JavaScript, & React',
  catchPhrase: "Let's get on the struggle bus",
  previousBackground: 'IDK',
  className: 'Web 23',
  favSubjects: 'React, & LESS',
  gradClassName: 'Web 23',
  favInstructor: 'Britt',
});

let fonz = new ProjectManagers({
  name: 'The Fonz',
  age: 55,
  location: 'HollyWood',
  speialty: 'C++',
  favLanguage: 'C++',
  catchPhrase: 'Heyyyyyy!!!!!',
  previousBackground: 'Street tough',
  className: 'Web 28',
  favSubjects: 'JavaScript, React, LESS, & Python',
  gradClassName: 'Web 26',
  favInstructor: 'Daddio',
});

console.log(brittH);
console.log(velma);
console.log(aaron);
console.log(fez);
console.log(allie);
console.log(fonz);
console.log(brittH.demo('CSS'));
console.log(velma.grade(aaron, 'LESS'));
console.log(aaron.listsSubjects());
console.log(fez.PRAssignment(fez, 'JavaScript-I'));
console.log(aaron.sprintChallenge(aaron, 'Sprint-Challenge--JavaScript'));
console.log(allie.standUp(allie, 'Web25_allie'));
console.log(fonz.debugsCode(fonz, fez, 'JavaScript-III'));
console.log(fonz.catchPhrase);
console.log(fez.speak());
