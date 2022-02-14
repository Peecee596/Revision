console.log("JS Constructor")
class car{
    constructor(){
        this.carname="BMW"
    }
    getCarbrand(){
        this.carname="FORD"
        console.log(this.carname)
    }
}

c1=new car()
c1.carname;
console.log(c1.carname)
c1.getCarbrand();