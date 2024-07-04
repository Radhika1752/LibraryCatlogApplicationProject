import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../service/book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [],
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent {

  constructor(private activateRoute:ActivatedRoute,private router:Router,
    private boServive:BookService, private fb:FormBuilder ){

  }
  UpdateBooks!:FormGroup
  id: number=this.activateRoute.snapshot.params['id'];
  ngOnInit()
  {
    this.UpdateBooks=this.fb.group({
      bname:[null,Validators.required],
      bauthor:[null,Validators.email],
      bisbn:[null,Validators.required],
      bavailable:[true],
      byear:[null],
     })
     this.getBookById()
  }
  getBookById()
  {
    this.boServive.getSingleBook(this.id).subscribe((res)=>{
      console.log(res);
      this.UpdateBooks.patchValue(res)
    })
  }
  updateBook(){
    this.boServive.updateSingleBook(this.id,this.UpdateBooks.value).subscribe((res=>{
      console.log(res);
      this.router.navigateByUrl("");
    }))
  }


}
