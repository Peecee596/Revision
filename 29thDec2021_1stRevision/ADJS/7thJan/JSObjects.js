console.log(50)
console.log("Class function can be called only using object")
console.log("Multiple objects can be craeted of a single class")

class car{
    start(){
        console.log("car started")
    }
    stop(){
        console.log("car stopped")
    }
}
//creating a object
carobj=new car();
carobj.start();
carobj.stop();

