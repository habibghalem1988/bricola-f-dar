import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { TradesListComponent } from '../trades-list/trades-list.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, TradesListComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
