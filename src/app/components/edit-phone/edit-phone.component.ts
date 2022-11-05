import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { smartPhone } from 'src/app/models/smartphone.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit-phone',
  templateUrl: './edit-phone.component.html',
  styleUrls: ['./edit-phone.component.css']
})
export class EditPhoneComponent implements OnInit {
  phone: smartPhone;
  editForm: FormGroup;
  private subscription: Subscription;
  constructor(private fb: FormBuilder, private dataService: DataService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.editForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      rating: ['', Validators.required],
    })
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.subscription = this.dataService.getSmartphone(id).subscribe(phone => {
        this.phone = phone;
        this.editForm.setValue({
          title: this.phone.title,
          description: this.phone.description,
          price: this.phone.price,
          rating: this.phone.rating,
        })
      })
    })

  }

  onSubmit() {
    if (!this.editForm.valid) {
      return;
    }
    const title = this.editForm.controls['title'].value;
    const description = this.editForm.controls['description'].value;
    const price = this.editForm.controls['price'].value;
    const rating = this.editForm.controls['rating'].value;

    let newPhone = new smartPhone(this.phone.id, title, description, price, rating);
    console.log(newPhone);

    this.dataService.update(newPhone).subscribe(() => {
      this.router.navigate(['/smartphones', this.phone.id])
    });
  }
}
