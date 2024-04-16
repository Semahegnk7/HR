import { Component } from '@angular/core';
import { CandidateService } from 'src/app/services/candidate.service';
import { CompanyService } from 'src/app/services/company.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private compService:CompanyService,private candService:CandidateService,private empService:EmployeeService){

  }
  totalCompany:number=0;
  totalCandidate:number=0;
  totalEmployee:number=0;
  ngOnInit(): void {
   
    this.getCompanies();
    this.getCandidates();
    this.getEmployees();
  }
  getCompanies(){
this.compService.getCompany().subscribe(resp=>{
  this.totalCompany=resp.length;
})
  }
  getEmployees(){
    this.empService.getEmployee().subscribe(emp=>{
      this.totalEmployee=emp.length;
    })

  }
  getCandidates(){
this.candService.getCandidates().subscribe(candidates=>{
  this.totalCandidate=candidates.length;
})
  }

}
