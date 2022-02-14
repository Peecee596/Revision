class Employee{
    constructor(){
        this.salary=5000;
    }
    getSalary(){
        console.log(`salary is ${this.salary}`)
    }
}
class contractEmployee extends Employee{
    constructor(){
        super();
        this.contractPeriod=2
    }
    getContractEmployeeSalary(){
        super.getSalary();
        console.log(`salary is ${this.salary}`)
    }
    getContractPeroid(){
        console.log(`Contract Peroid is ${this.contractPeriod}`)
    }

}
e1=new contractEmployee
e1.getContractEmployeeSalary();
e1.getContractPeroid();
e1.getSalary();