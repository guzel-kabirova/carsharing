import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing-info',
  templateUrl: './landing-info.component.html',
  styleUrls: ['./landing-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingInfoComponent {
  constructor(private router: Router) { }

  public navigateToOrderPage() {
    this.router.navigate(['/order']);
  }
}
