import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  buttonClicked = false;
  hideButton = false;

  constructor(private router: Router) {}

  ngOnInit() {
    if (this.router.url === '/start-location-form') {
      this.hideButton = true;
    }

    // Alternatively, listen to route changes
    this.router.events.subscribe(() => {
      if (this.router.url === '/start-location-form') {
        this.hideButton = true;
      }
    });
  }

  navigateToStartLocationForm() {
    this.buttonClicked = true;
    this.router.navigate(['/start-location-form']);
  }

}
