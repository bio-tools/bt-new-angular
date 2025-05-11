import { Component, OnInit } from '@angular/core';
import { AuthService } from '@bt-core/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'biotools2';
  constructor(private authService: AuthService){}
  
  ngOnInit(): void {
      this.authService.autoLogin();
  }
}
