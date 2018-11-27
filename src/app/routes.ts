/**
 * Created by lesly on 14.06.17.
 */

// Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import { Routes } from '@angular/router';
import { MapComponent } from './pages/map/component/map.component';
import { ActivateComponent } from './features/user-management/activate/activate.component';


export const routes: Routes = [
  { path: '' , redirectTo: '/map', pathMatch: 'full' },
  { path: 'map' , component: MapComponent},
  { path: 'register' , component: MapComponent, children:[
    { path: ':token_activation' , component: ActivateComponent },
  ]},
];
