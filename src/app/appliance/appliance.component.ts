import { Router } from '@angular/router';
import { ApplianceDTO } from './../domain/appliance-dto';
import { Type } from './../domain/type';
import { Appliance } from './../domain/appliance';
import { Attribute } from './../domain/attribute';
import { Location } from '../domain/location';
import { ApplicanceService } from './../services/appliances/applicance.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl} from '@angular/forms';


@Component({
  selector: 'app-appliance',
  templateUrl: './appliance.component.html',
  styleUrls: ['./appliance.component.scss']
})
export class ApplianceComponent implements OnInit {

  applianceForm : FormGroup;
  attributeList: FormArray;
  nameFormControl: FormControl;
  typeFormControl: FormControl;
  locFormControl: FormControl;
  appliance = {} as Appliance;
  attribute = {} as Attribute;
  attrributes : Attribute[]=[];
  type = {} as  Type ;
  location = {} as Location;
  name:string;
  applianceDto = {} as ApplianceDTO;
  

  constructor(private service:ApplicanceService, private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.applianceForm = this.formBuilder.group({
      name: [null, Validators.compose([Validators.required])],
      type: [null, Validators.compose([Validators.required])],
      location: [null, Validators.compose([Validators.required])],
      attributes:this.formBuilder.array([this.createAttribute()])
     })
    this.attributeList = this.applianceForm.get('attributes') as FormArray;

  }


  createAttribute(): FormGroup{
  return this.formBuilder.group({
    name: [null, Validators.compose([Validators.required])],
    min: [null, Validators.compose([Validators.required])],
    max:[null, Validators.compose([Validators.required])],
    current:[null, Validators.compose([Validators.required])]
  })
  }

  addAttribute(){
    this.attributeList.push(this.createAttribute());
  }

  removeAttribute(index){
    this.attributeList.removeAt(index)
  }

  getAttributesFormGroup(index):FormGroup{
    const attributeFormGroup = this.attributeList.controls[index] as FormGroup; 
    return attributeFormGroup;
  }

  get attributeFormGroup(){
    return this.applianceForm.get('attributes');
  }

  submitForm(){
    this.attributeList = this.applianceForm.get('attributes') as FormArray;

    this.name =  this.applianceForm.get('name').value
    this.type.name = this.applianceForm.get('type').value;
    this.location.location = this.applianceForm.get('location').value

    for(let i=0;i<this.attributeList.length;i++){
      this.attribute.id=1;
      this.attribute.name = this.getAttributesFormGroup(i).get('name').value;
      this.attribute.min = this.getAttributesFormGroup(i).get('min').value;
      this.attribute.max = this.getAttributesFormGroup(i).get('max').value;
      this.attribute.current = this.getAttributesFormGroup(i).get('current').value;
      this.attrributes.push(this.attribute)
      }
      this.appliance.name = this.name;
      this.appliance.type = this.type;
      this.appliance.location = this.location;
      this.appliance.attributes = this.attrributes;

      this.applianceDto.id=1;
      this.applianceDto.state=false;
      this.applianceDto.name=this.name;
      this.applianceDto.type=this.type.name;
      this.applianceDto.location=this.location.location;
      this.applianceDto.attributeDTO=this.attrributes;

      this.service.addAppliance(this.applianceDto);

      this.router.navigate(['/dashboard']);
  }

}
