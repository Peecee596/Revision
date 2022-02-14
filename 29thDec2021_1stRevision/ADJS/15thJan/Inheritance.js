class Parent{
    constructor(){
        this.age=59
    }
    displayage(){
        console.log(`Age is 40`)
    }
}
    class Child extends Parent{
        constructor(){
            super();
        }
        getAgeofParent(){
            super.displayage();
            console.log(`Father age is ${this.age}`)
        }

    }
    c1=new Child()
    c1.getAgeofParent();
    c1.displayage();

