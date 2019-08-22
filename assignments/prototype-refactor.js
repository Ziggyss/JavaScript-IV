/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
//function Person(name, age) {
    /* this.name = name;
    this.age = age;
    this.stomach = [];
  }
  Person.prototype.greet = function() {
    return this.name + ' ' + this.age;
  }
  Person.prototype.eatEdibles = function (food) {
    return this.stomach.push(food);
  }
  Person.prototype.poop = function(){
    this.stomach = [];
  };
  
  const Bob = new Person('Bob', 35);
 */

class Person {
  constructor(name,age) {
      this.name = name;
      this.age = age;
      this.stomach = [];
  }
  greet () {
    return this.name + ' ' + this.age; 
  }
  eatEdibles (food) {
    return this.stomach.push(food);  
  }
  poop () {
      this.stomach = [];
  }
};

const Bob = new Person('Bob', 35);

//Task 2
/* function Car(make, model){
    this.model = model;
    this.make = make;
    this.odometer = 0;
    this.canDrive = true;
  
    Car.prototype.drive = function(distance){
      this.odometer += distance;
    }
    Car.prototype.crash = function(){
      this.canDrive = false;
      return 'I crashed at ' + this.odometer + ' miles';
    }
    Car.prototype.repair = function(){
       this.canDrive = true;
    }
  };
 */
  class Car {
    constructor (make, model){
    this.model = model;
    this.make = make;
    this.odometer = 0;
    this.canDrive = true;
      }
        drive (distance) {
        this.odometer += distance;
      }
        crash () {
        this.canDrive = false;
        return 'I crashed at ' + this.odometer + ' miles';
      }
        repair () {
        this.canDrive = true;
      }
  };
  
  const myCar = new Car('Seat', 'Ibiza');
  
  //Task 3
  
  /* function Baby(name, age){
    Person.call(this, name, age);
  }
  
  Baby.prototype = Object.create(Person.prototype);
  
  Baby.prototype.play = function (toy){
    return this.name + ' is playing with ' + toy + '.';
   };
  
  const BobbieJr = new Baby('Bobbie Junior', 1); */

  class Baby extends Person {
      play (toy) {
          return this.name + ' is playing with ' + toy + '.';
    }
  };

  const BobbieJr = new Baby('Bobbie Junior', 1);
  
  //Task 4
  //Example 1: 
  
  /* function Student(name, course) {
    this.name = name;
    this.course = course;
    this.testsTaken = 0;
    this.totalScore = 0;
    this.averageScore = 0;
  }
  Student.prototype.details = function() {
    return this.name + ' ' + this.course + ' ' + this.averageScore;
  }
  Student.prototype.takeTest = function(score) {
    this.testsTaken ++;
    this.totalScore += score;
    this.averageScore = this.totalScore / this.testsTaken;
  }
  
  Student.prototype.passing = function(){
  if (this.averageScore >= 70){
      return true;
    }
    else {
      return false;
    }
  };
  
  const student1 = new Student('Lisa', 'WEBEU3'); */

  class Student {
      constructor (name, course){
      this.name = name;
      this.course = course;
      this.testsTaken = 0;
      this.totalScore = 0;
      this.averageScore = 0;
      }
  
     details () {
     return this.name + ' ' + this.course + ' ' + this.averageScore;
      }
     takeTest (score) {
     this.testsTaken ++;
     this.totalScore += score;
     this.averageScore = this.totalScore / this.testsTaken;
      }
  
     passing () {
       if (this.averageScore >= 70){
       return true;
        }
       else {
       return false;
       }
    }
};
  
  let student1 = new Student('Lisa', 'WEBEU3');
  
  //Example 2
  
  /* function Plant(name, location){
    this.name = name;
    this.location = location;
    this.health = 100;
  }
  
  Plant.prototype.hotDay = function(){
    if (this.location === 'greenhouse'){
      return 'Water and move ' + this.name + ' outside';
    }
    return 'Water' + this.name + '.'; 
  }
  
  Plant.prototype.coldDay = function(){
    if(this.location === 'outside'){
      return 'Move' + this.name + 'into greenhouse.';
    }
    return 'Leave ' + this.name + ' alone.';
  }
  
  Plant.prototype.forgot = function(){
    this.health -= 20;
    return this.health;
  }
  
  Plant.prototype.healthStatus = function(){
    if (this.health <20){
      return 'RIP ' + this.name;
    }
    return this.health;
  
  };
  
  const basil = new Plant('basil', 'greenhouse'); */

  function Plant(name, location){
    this.name = name;
    this.location = location;
    this.health = 100;
  }
  
  Plant.prototype.hotDay = function(){
    if (this.location === 'greenhouse'){
      return 'Water and move ' + this.name + ' outside';
    }
    return 'Water' + this.name + '.'; 
  }
  
  Plant.prototype.coldDay = function(){
    if(this.location === 'outside'){
      return 'Move' + this.name + 'into greenhouse.';
    }
    return 'Leave ' + this.name + ' alone.';
  }
  
  Plant.prototype.forgot = function(){
    this.health -= 20;
    return this.health;
  }
  
  Plant.prototype.healthStatus = function(){
    if (this.health <20){
      return 'RIP ' + this.name;
    }
    return this.health;
  
  };
  
  const basil = new Plant('basil', 'greenhouse');
  
  //Example 3
  
  function Seedling (name, location, weeksOld){
    Plant.call(this, name, location);
    this.age = weeksOld;
  }
  Seedling.prototype = Object.create(Plant.prototype);
  
  Seedling.prototype.newPotCheck = function() {
    if(age % 4 === 0){
      return 'Move ' + this.name + ' to a bigger pot.';
    }
    return 'Leave ' + this.name + 'for now.';
  };
  
  const babyBasil = new Seedling (babyBasil, greenhouse, 2);
