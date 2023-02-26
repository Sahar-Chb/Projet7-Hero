import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';
import { ListComponent } from './list/list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpdateComponent } from './update/update.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [

  {path:'', redirectTo:'home',pathMatch:'full'},

  { path:'home', component:WelcomeComponent},

  { path: 'list', component:ListComponent }, 
  
  { path: 'ajout', component: AjoutComponent },

  {path:'update/:id',component:UpdateComponent},
  
  {path:'**',component:NotFoundComponent}
  



];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
