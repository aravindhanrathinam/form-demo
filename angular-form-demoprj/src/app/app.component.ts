import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = 'Miracle';
// }
export class AppComponent implements OnInit {
  title = 'Miracle';
  value2: string = "debitAmount";
  paymentOptions: { name: string; value: string; }[];
  constructor( private router: Router  ) {
    this.paymentOptions = [
      { name: 'Debit Amount', value: "debitAmount" },
      { name: 'Grouping Amount', value: "groupingAmount" },
      { name: 'Tab 3', value: "tab3" },
      { name: 'Tab 4', value: "tab4" }
    ];
  }
  ngOnInit(): void {
this.changeTab("debitAmount")
  }
  changeTab(e:any) {
    this.router.navigate([`/${e}`]);
  }
}