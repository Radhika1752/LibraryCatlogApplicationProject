import { Routes } from '@angular/router';

import { GetAllBookComponent } from './component/get-all-book/get-all-book.component';
import { PostBookComponent } from './component/post-book/post-book.component';
import { UpdateBookComponent } from './component/update-book/update-book.component';

export const routes: Routes = [
    {path:"", component:GetAllBookComponent},
    {path:"new", component:PostBookComponent},
    {path:"get", component:GetAllBookComponent},
    {path:"edit/:id", component:UpdateBookComponent},
    //{path:'del/:id', component:}
    //{path:"**", component:PostBookComponent}
];
