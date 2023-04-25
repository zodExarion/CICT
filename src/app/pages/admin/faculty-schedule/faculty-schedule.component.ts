import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faculty-schedule',
  templateUrl: './faculty-schedule.component.html',
  styleUrls: ['./faculty-schedule.component.css']
})
export class FacultyScheduleComponent {
  
  constructor(private http: HttpClient) {}
  dtOptions: DataTables.Settings = {
    pagingType: 'full_numbers',
    pageLength: 10,
    processing: true,
    responsive: true,
    dom: 'Bfrtip'
    
  };
  cartData: any;
  ngOnInit() {
    this.http.get('http://127.0.0.1:8000/api/index').subscribe((data: any) => {
      this.cartData = data.carts;
    });
  }


  
}
