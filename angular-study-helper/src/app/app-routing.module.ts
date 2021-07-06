import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionFormComponent } from './collection-form/collection-form.component';
import { CollectionComponent } from './collection/collection.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [    
  {path:'collection/add',component:CollectionFormComponent},
  {path:'collection/edit/:id',component:CollectionFormComponent},
  {path:'collection/:id',component:CollectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
