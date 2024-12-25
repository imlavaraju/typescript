/*var username ='nani'
console.log(username) 

let name : string = "nani"
let age : any = 24
let ismake: boolean= true
age="nani"

let i:number| string | boolean =35
i="nani"
i=true 

let details:Array<any>=[{
    name:"nani",
    age:23,
    salaried:false},{name:"lava",
        age:24,
        salaried:false}
    ]
console.log(`${details[0].name}`)



class Employee{
    name:string;
    Age:number;
    department:string;
    constructor(name:string,
        Age:number,
        department:string,){
        this.name=name;
        this.Age=Age;
        this.department=department
        }
    employeedetails(){
        console.log(this.name,this.Age,this.department)
    }
}

const emp = new Employee("nani",21,"frontend")
emp.employeedetails()
const ndemp = new Employee("lava",21,"backend")
ndemp.employeedetails()
*/

type dtype= {name:string,age:number,is:boolean}



interface dt  {he:string}

interface dt  {num:number}

const obj:dt={
    he:"rethu",
    num:23
}
console.log(obj.he)