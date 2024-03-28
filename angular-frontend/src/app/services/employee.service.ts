import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { 
  }

  getEmployeesList(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl + '/employees');
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.http.post(this.baseUrl + '/employees', employee);
  }

  getEmployeeByID(id: number): Observable<Employee>{
    return this.http.get<Employee>(this.baseUrl + `/employees/${id}`);
  }

  updateEmployee(employee: Employee, id: number): Observable<Object>{
    return this.http.put(this.baseUrl + `/employees/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.http.delete(this.baseUrl + `/employees/${id}`)
  }

}
