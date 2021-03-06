import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from './shared/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  constructor(private router: Router, private apiService: ApiService) {}
  private errorMessage: any;
  private responseMessage: any;

  ngOnInit() {
    this.router.navigate(['/login']);
    //this.checkWalletStatus();
  }

  // private checkWalletStatus(){
  //   this.apiService.getWalletStatus()
  //     .subscribe(
  //       response => {
  //         if (response.status >= 200 && response.status < 400) {
  //           this.responseMessage = response;
  //           this.router.navigate(['/login']);
  //         }
  //       },
  //       error => {
  //         this.errorMessage = <any>error;
  //         if (error.status === 400 || error.status === 404) {
  //           this.router.navigate(['/setup']);
  //           console.log(this.errorMessage);
  //         }
  //       }
  //     );
  // }
}