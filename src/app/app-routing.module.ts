import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyListComponent } from './my-module/my-list/my-list.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:' ',component: MyListComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
