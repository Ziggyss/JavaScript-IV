// CODE here for your Lambda Classes
class Person {
    constructor (name, age, location){
        this.name = name;
        this.age = age;
        this.location = location;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
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
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
    randomPoints(student){
       student.grade = Math.random() * (100 - 1) + 0;
    }
};

let Gabe = new Instructor ('Gabe', 'unknown', 'Spain', 'Teaching Code', 'JS', 'This is brutal');

  class Student extends Person {
    constructor (name, age, location, previousBackground, className, favSubjects, grade){
        super(name, age, location);
        this.className = className;
        this.previousBackground = previousBackground;
        this.favSubjects = favSubjects;
        this.grade = grade;
    }
    listsSubjects(){
        console.log(JSON.stringify(this.favSubjects));
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ` + subject + `.`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ` + subject + `.`);
    }
    
    graduate(/* myInstructor */){
      
            while (this.grade <70){
                console.log(`Your grade is ${this.grade}. Back to grading those assignments, ${this.name}... You're not ready to graduate just yet. Let's regrade you...`);     
                this.grade = Math.random() * (100 - 1) + 1; 
               /*  myInstructor.randomPoints(this); */
            }
            if(this.grade>=70){
            console.log(`${this.name} gets to graduate! Congratulations!`);
            }      
    }
};
/* The commented out code above was a newly corrected version based on help I received from my fellow group member, Samuel. I've left it commented out, for now, as he helped me so much with it, but I believe this would be the proper way to refer back to the method in the Instructor object. Line 56 would replace line 55 and there would be a parameter in line 51. */

let LisaW = new Student('Lisa', 43, 'Belfast', 'teacher', 'WEBEU3', ['JS', 'Spanish', 'Game Design'], );

class projectManager extends Instructor {
    constructor (name, age, location, speciality, favLanguage, catchPhrase, gradClassName, favInstructor){
        super(name, age, location, speciality, favLanguage, catchPhrase);
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }
    standUp(channel){
         console.log(`${this.name} announces to ${channel}, @channel standby times!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
};

let Justinas = new projectManager ('Justinas', 'unknown', 'Lithuania', 'Web development', 'JS', 'Good job', 'WEBEU2', 'Gabe');