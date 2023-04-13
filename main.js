// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 
class Constuctor {
    constructor(name, role) {
        this._name = name
        this._role = role
    }
    get name() {
        return this._name
    }
    
    speak() {
        console.log(`Hi I am ${this.name} and my role is ${this.role}`)
    }
}
class Front extends Constuctor{
    constructor(name, role, specialization) {
        super(name)
        this._role = role
        this._specialization = specialization
    }
    get specialization() {
        return this._specialization
    }
    speak() {
        console.log(`Hi I am ${this.name}, my role is ${this.role} and my specialization is ${this.specialization}`)
    }
}

class Back extends Constuctor{
    constructor(name, role, specialization) {
        super(name)
        this._role = role
        this._specialization = specialization
    }
    get specialization() {
        return this._specialization
    }
    speak() {
        console.log(`Hi I am ${this.name}, my role is ${this.role} and my specialization is ${this.specialization}`)
    }
}



let bob = new Constuctor('Bob','Front-end')
let simba = new Front('Simba','Front-end','React')
let machi = new Back('The Machine','Back-end','Node')

let agency = [bob,simba,machi]

for(person of agency){
    person.speak()
}
