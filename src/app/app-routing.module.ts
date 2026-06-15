import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { StickerComponent } from './sticker/sticker.component';

const routes: Routes = [
  {path: '', component: HomeComponentComponent},
  {path: 'sticker', component: StickerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

