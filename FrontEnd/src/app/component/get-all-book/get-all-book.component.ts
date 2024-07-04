import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookService } from '../../service/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-book',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './get-all-book.component.html',
  styleUrl: './get-all-book.component.css'
})
export class GetAllBookComponent {

  getBook!: FormGroup;
  constructor(private boSer:BookService,private router:Router,private fb:FormBuilder){

  }
  ngOnInit()
  {
   this.getBook=this.fb.group({
    name:[null,Validators.required],
    author:[null,Validators.email],
    isbn:[null,Validators.required],
    available:[true],
    publicationyear:[null,Validators.required],
   })
  }

  onCreate()
  {
  
    this.boSer.CreateBook(this.getBook.value).subscribe((res)=>
    {
      console.log(res);
      this.router.navigateByUrl("get");
    })
  }


}
