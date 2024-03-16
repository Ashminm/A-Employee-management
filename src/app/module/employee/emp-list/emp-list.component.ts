import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit{

  employee:any=[]
  d:any=new Date()
  searchKey:any=""
  constructor(private admin:AdminService,private toaster:ToastrService){}

ngOnInit() {
  this.getdata()
   
}

getdata(){
  this.admin.getEmployee().subscribe((res:any)=>{
    // console.log(res);
    this.employee=res.filter((item:any)=>item.id!="1")
      // console.log(this.employee);
      
    }
  )
}

handleDelete(id:any){
  const res=this.admin.deleteEmployee(id).subscribe((res:any)=>{
// console.log(res);
    this.toaster.success("Delete Successfully!!")
    this.getdata()
  },
  (err:any)=>{
    this.toaster.error("Deletion faild!",err)
  }
  )
  
}

exportToPdf(){
  let doc = new jsPDF()
  let head=[['EmpId','Username','Email','status']]
  let body:any=[]
  this.employee.forEach((item:any)=>{
    body.push([item.empId,item.Username,item.email,item.status])
  })
  doc.setFontSize(16) 
  // doc.setFillColor(200, 200, 200);
  doc.text("All Employee List",10,10)
  autoTable(doc,{
    head,body
  })
  doc.output("dataurlnewwindow")
  doc.save("allemployees.pdf")
}

sortByEmpId(){
  this.employee.sort((user1:any,user2:any)=>user1.empId-user2.empId)
}

sortByUsername() {
  this.employee.sort((user1: any, user2: any) => user1.Username.localeCompare(user2.Username));
}

}
