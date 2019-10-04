import { ToastrService } from 'ngx-toastr';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { Appliance } from '../domain/appliance';
import { ApplicanceService } from '../services/appliances/applicance.service';

@Component({
  selector: 'app-appliances-state',
  templateUrl: './appliances-state.component.html',
  styleUrls: ['./appliances-state.component.scss']
})
export class AppliancesStateComponent implements OnInit{

  
  appliances : Appliance[];
  text:string


  
  constructor(private router: Router, private service:ApplicanceService,private toastr:ToastrService) { }
  
  ngOnInit(): void {
    {
      this.service.getAppliances().subscribe(appliances =>{
        this.appliances = appliances
      });      
    }
   } 

   turnOnOf(id:number){
     this.service.turnOnOfAppliance(id);
   }
 

}
