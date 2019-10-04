import { ApplianceComponent } from './../../appliance/appliance.component';
import { AppliancesStateComponent } from './../../appliances-state/appliances-state.component';
import { HomeAppliancesComponent } from './../../home-appliances/home-appliances.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'appliances-state',  component: AppliancesStateComponent },
    { path: 'home-appliances',component: HomeAppliancesComponent},
    { path: 'appliance',  component: ApplianceComponent }


    
];
