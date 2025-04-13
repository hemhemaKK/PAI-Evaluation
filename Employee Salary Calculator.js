function employees(employee){
  //original base salary
  let original = employee.map((ele)=>ele.baseSalary)
  
  //total salary if nothing applied
  let total = original.reduce((acc,curr)=>acc+curr)
  
  //service bonus of 5% if the experience is 3+ years
  let service_bonus = employee.map((ele)=>ele.yearsOfService>=3? ele.baseSalary * 0.05 : 0).reduce((acc,curr)=>acc+curr)

  //performance bonus of 10% if the performance is more that 8
  let performance_bonus = employee.map((ele)=>ele.performanceScore>=8? ele.baseSalary * 0.10 : 0).reduce((acc,curr)=>acc+curr)
  
  //total salary of both service and perfomance bonus added
  let total_ServiceandPerformance = service_bonus + performance_bonus + total

  //extra 15% for the department of Engineering is adding
  let department = employee.map((ele)=>ele.department == "Engineering" ? ele.baseSalary * 0.15: 0).reduce((acc,curr)=>acc+curr)
  let dept = department + total_ServiceandPerformance 
  
  //tax for all the employee with 7%
  let tax = employee.map((ele)=>ele.baseSalary * 0.07).reduce((acc,curr)=>acc+curr)
  let tax_final = tax + dept 
  
  return `Original Salary total: $${total}\nAfter service and performance bonuses: $${total_ServiceandPerformance}\nAfter department adjustments: $${dept}\nFinal salary after all calculations: $${tax_final}`
}


let employee =  [
    { name: "Alice", baseSalary: 5000, department: "Engineering", yearsOfService: 4, performanceScore: 8 },
    { name: "Bob", baseSalary: 4500, department: "Marketing", yearsOfService: 2, performanceScore: 7 },
    { name: "Charlie", baseSalary: 6000, department: "Engineering", yearsOfService: 7, performanceScore: 9 },
    { name: "Diana", baseSalary: 5500, department: "HR", yearsOfService: 3, performanceScore: 6 }
  ]

let manage = employees(employee);
console.log(manage)