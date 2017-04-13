import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private router: Router) {
      this.showRebeka();
  }

  public showAnte() {
    this.router.navigateByUrl('ante');
  }

  public showRebeka() {
    this.router.navigateByUrl('rebeka');
  }
}
