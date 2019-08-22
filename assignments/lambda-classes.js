// CODE here for your Lambda Classes
class Person {
    constructor (name, age, location){
        this.name = name;
        this.age = age;
        this.location = location;
    }
    speak(){
        console.log('Hello my name is ${this.name}, I am from ${this.location}.')
    }
};

class Instructor extends Person {
    constructor (name, age, location, speciality, favLanguage, catchPhrase){
        super.age(name, age, location);
        this.speciality = speciality;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }
    demo(subject){
        console.log('Today we are learning about ${subject}.')
    }
    grade(student, subject){
        console.log('${student.name} receives a perfect score on ${subject}')
    }
}
