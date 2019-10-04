import { Attribute } from './attribute';
import { Type } from './type';
import { Location } from './location';

export interface Appliance {
    id:number;
    name:string
    state:boolean;
    location:Location;
    type:Type;
    attributes: Attribute[];
}
