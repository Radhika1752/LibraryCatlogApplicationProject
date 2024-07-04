import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookService } from '../../service/book.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-post-book',
  standalone: true,
  imports: [NgFor,RouterLink,HttpClientModule],
  templateUrl: './post-book.component.html',
  styleUrl: './post-book.component.css'
})
export class PostBookComponent {

  book:any=[]
  constructor(private boService:BookService){

  }
  ngOnInit()
  {
    this.getAllValue()
  }
  getAllValue()
  {
    this.boService.getBook().subscribe((res)=>{
      console.log(res);
      this.book=res;
    })
  }
delBook(id:any)
{
  console.log(id)
  this.boService.delBook(id).subscribe((res)=>{
    console.log(res);
    this.getAllValue();
  });
}

}
