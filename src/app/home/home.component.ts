import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  empcount:number=0;
  adminUsername:any=""

  constructor(private admin:AdminService,private router:Router){
    const adminData:any=sessionStorage.getItem("adminUser")
    this.adminUsername=JSON.parse(adminData).Username
  }


  ngOnInit() {
    this.getEmployeecount()
    
  }
  
 
  getEmployeecount(){
    this.admin.getEmployee().subscribe((res:any)=>{
      // console.log(res)
      this.empcount=res.filter((item:any)=>item.id!="1").length
      // console.log(this.empcount)
    })

  }

  getAdminusername(e:any){
    this.adminUsername=e
  }

  logOut(){
    sessionStorage.clear()
    this.router.navigateByUrl("/")
  }

}