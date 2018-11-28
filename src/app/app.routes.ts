import {RouterModule, Routes} from '@angular/router';
import {RestComponent} from './rest/rest.component';

const appRoutes: Routes = [
  {path: 'rest', component: RestComponent},
  {path: 'info', component: RestComponent},
  {path: '**', pathMatch : 'full', redirectTo : '/'},
];

export const app_routing = RouterModule.forRoot(appRoutes);
