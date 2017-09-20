var employees = [];
function Employee(name, jobTitle, salary, status){
    this.firstName = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = staus || "full-time";
    this.printEmployeeForm = "Name: " this.firstName + "Job Title: " + this.jobTitle +  "Salary: " this.salary + "status: " + this.status
}
 
var allEmployees = new Employee("Nancy", "Engineering", "$3300/hour", "full time");
employees.push(allEmployees);

var allEmployees = new Employee("Rookie", "custodial", "$300/hour", "contract");
employees.push(allEmployees);

var allEmployees = new Employee("Bossman J", "CEO", "$3k/hour", "part time");
employees.push(allEmployees);

//Q: what do you mean by making the property default?
//


//
//Override the status attribute of one of them to either "Part Time" or "Contract"
