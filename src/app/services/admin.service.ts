import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  base_url ="https://a-employee-management-server.onrender.com"

  constructor(private http:HttpClient) { }


  AdminDetails(){
    return this.http.get(`${this.base_url}/employees/1`)
  }
  addEmployeeDetails(data:any){
    return this.http.post(`${this.base_url}/employees`,data)
  }

  getEmployee(){
    return this.http.get(`${this.base_url}/employees`)
  }

  getSpecificEmployee(id:any){
    return this.http.get(`${this.base_url}/employees/${id}`)
  }

  updateEmployee(data:any,id:any){
    return this.http.put(`${this.base_url}/employees/${id}`,data)
  }

  deleteEmployee(id:any){
    return this.http.delete(`${this.base_url}/employees/${id}`)
  }

  getAdmin(){
    return this.http.get(`${this.base_url}/employees/1`)
  }

  
  updateAdmin(data:any){
    return this.http.put(`${this.base_url}/employees/1`,data)
  }

  isLoggedIn(){
    return !!sessionStorage.getItem("adminUser")
  }

}
