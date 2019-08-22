// CODE here for your Lambda Classes
class Person {
    constructor (name, age, location){
        this.name = name;
        this.age = age;
        this.location = location;
    }
    speak(){
        console.log('Hello my name is ${this.name}, I am from ${this.location}.');
    }
};

class Instructor extends Person {
    constructor (name, age, location, speciality, favLanguage, catchPhrase){
        super(name, age, location);
        this.speciality = speciality;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }
    demo(subject){
        console.log('Today we are learning about ${subject}.');
    }
    grade(student, subject){
        console.log('${student.name} receives a perfect score on ${subject}');
    }
};

  class Student extends Person {
    constructor (name, age, location, previousBackground, className, favSubjects){
        super(name, age, location);
        this.className = className;
        this.previousBackground = previousBackground;
        this.favSubjects = favSubjects;
    }
    listsSubjects(){
        console.log(JSON.stringify(this.favSubjects));
    }
    PRAssignment(subject){
        console.log('${this.name} has submitted a PR for ' + subject + '.');
    }
    sprintChallenge(subject){
        console.log('${this.name} has begun sprint challenge on ' + subject + '.');
    }
};

let LisaW = new Student('Lisa', 43, 'Belfast', 'teacher', 'WEBEU3', ['JS', 'Spanish', 'Game Design']);

