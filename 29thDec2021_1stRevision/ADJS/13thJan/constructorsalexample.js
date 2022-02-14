class Employee{
    constructor(){
        this.salary=5000;
        this.sickLeaves=5;
        this.paidLeaves=1.75;
    }
    getAnnualSalary(){
        console.log(`Annual salary : ${this.salary*12}`)
    }
    getAnnualPaidLeaves(){
        console.log(`Annual Paid Leaves : ${this.paidLeaves*12}`)
    }
    getSickLeaves(){
        console.log(`Annual Sick Leave : ${this.sickLeaves}`)
    }
}
emp=new Employee;
emp.getAnnualSalary();
emp.getAnnualPaidLeaves();
emp.getSickLeaves();