import { Appliance } from './../domain/appliance';
import { ApplicanceService } from './../services/appliances/applicance.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-appliances',
  templateUrl: './home-appliances.component.html',
  styleUrls: ['./home-appliances.component.scss']
})
export class HomeAppliancesComponent implements OnInit {

  appliances : Appliance[];
  constructor(private service: ApplicanceService,private toastr:ToastrService) { }

  ngOnInit(): void {
    {
      this.service.getAppliances().subscribe(appliances=> {		
        this.appliances = appliances
      });
    }
   } 
 
   decrementValue(attributeId:number){
     return this.service.decreaseAttributeValue(attributeId);
   }

   incrementValue(attributeId:number){
    return this.service.increaseAttributeValue(attributeId);

   }

}
