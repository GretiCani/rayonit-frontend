import { Type } from './type';
import { Attribute } from './attribute';
import { Location } from './location';
import { AttributeDTO } from './attribute-dto';

export class ApplianceDTO {
    id:number;
    name:string
    state:boolean;
    location:string;
    type:string;
    attributeDTO: AttributeDTO[];
}
