import { Component } from '@angular/core';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {
  
  employee: Employee = new Employee();
  id: number;
  constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute){
    
  }

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeByID(this.id).subscribe(data => {
      this.employee = data;
    }, error => {
      console.log(error);
    });
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.employee, this.id).subscribe(data => {
      console.log(data);  
      this.goToEmployeeList();
    }, error => {
      console.log(error);
    });
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    console.log(this.employee);
    this.updateEmployee();
  }
}
