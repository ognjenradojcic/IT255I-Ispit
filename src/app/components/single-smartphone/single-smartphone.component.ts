import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { smartPhone } from 'src/app/models/smartphone.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-single-smartphone',
  templateUrl: './single-smartphone.component.html',
  styleUrls: ['./single-smartphone.component.css']
})
export class SingleSmartphoneComponent implements OnInit {
  id: number;
  smartphone: smartPhone;
  loaded = false;
  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) { 
    route.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit(): void {
    this.dataService.getSmartphone(this.id).subscribe(data => {
      this.smartphone = data
      this.loaded = true;
    })
  }

  onDelete(){
    this.dataService.delete(this.smartphone).subscribe(() =>{
      this.router.navigate(['/smartphones'])
    })
  }

  onUpdate(){
    this.router.navigate(['/editphone', this.smartphone.id])
  }

}
