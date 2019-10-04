import { Appliance } from './appliance';

export interface Type {
    id:number;
    name:string;
    appliances: Appliance[];
}
