import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';
import { InsertionSortComponent } from './insertion-sort/insertion-sort.component';
import { MergeSortComponent } from './merge-sort/merge-sort.component';


//routes for components
const routes: Routes = [
  //if path is empty redirect to bubble sort component path
  { path: '', redirectTo: '/bubbleSort', pathMatch: 'full' },
  {path: 'bubbleSort',component: BubbleSortComponent},
  {path: 'insertionSort', component: InsertionSortComponent},
  {path: 'mergeSort', component: MergeSortComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
