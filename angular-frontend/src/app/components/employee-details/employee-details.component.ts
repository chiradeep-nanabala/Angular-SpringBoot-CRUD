import { Component } from '@angular/core';
import { Employee } from '../../model/employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {
  id: number;
  employee: Employee = new Employee();

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService){
  } 

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeByID(this.id).subscribe(data => {
      this.employee = data;
    });
  }
}
