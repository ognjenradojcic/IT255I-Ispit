import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { smartPhone } from 'src/app/models/smartphone.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.css']
})
export class SmartphonesComponent implements OnInit {
  smartphones: smartPhone[];
  searchText: string;
  @HostBinding('class') classes = "mt-3 container";

  constructor(private router: Router, private dataService: DataService) {
    this.searchText = "";
   }

  ngOnInit(): void {
    this.dataService.getSmartphones().subscribe(data => this.smartphones = data['products'])
  }

  seeDetails(id: number){
    this.router.navigate(['/smartphones/', id]);
  }

}
