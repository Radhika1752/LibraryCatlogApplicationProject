import { Component, createComponent } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PostBookComponent } from './component/post-book/post-book.component';
import { UpdateBookComponent } from './component/update-book/update-book.component';
import { GetAllBookComponent } from './component/get-all-book/get-all-book.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent,PostBookComponent,UpdateBookComponent,
    GetAllBookComponent,HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CustomerApp';
}
