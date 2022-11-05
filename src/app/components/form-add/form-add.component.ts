import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { smartPhone } from 'src/app/models/smartphone.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {
  addForm: FormGroup
  constructor(private fb: FormBuilder, private dataService: DataService, private router: Router) { }
  

  ngOnInit(): void {
    this.addForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      rating: ['', Validators.required],
    })
    
  }
  
  onSubmit(){
    if(!this.addForm.valid){
      return;
    }
    const title = this.addForm.controls['title'].value;
    const description = this.addForm.controls['description'].value;
    const price = this.addForm.controls['price'].value;
    const rating = this.addForm.controls['rating'].value;

    let newPhone = new smartPhone(0, title, description, price, rating);
    console.log(newPhone);

    this.dataService.create(newPhone).subscribe(phone => this.router.navigate(['/smartphones', phone.id]));
    
  }

}
