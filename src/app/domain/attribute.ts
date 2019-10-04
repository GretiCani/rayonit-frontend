import { Appliance } from './appliance';

export interface Attribute {
    id:number;
    name:string;
    min:number;
    max:number;
    current:number;
    appliance: Appliance;
}
