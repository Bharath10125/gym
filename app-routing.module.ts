import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from './packages/packages.component';
import { TrainersComponent } from './trainers/trainers.component';
import { WorkoutplanComponent } from './workoutplan/workoutplan.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'packages', component: PackagesComponent, pathMatch: 'full' },
  { path: 'trainers', component: TrainersComponent },
  { path: 'workoutplan', component: WorkoutplanComponent },
  {path: 'register',component: RegisterComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
