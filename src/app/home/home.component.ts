import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Hola Mundo';

  constructor(private notify: NotificationService) {
    // notify.add('Entra en la aplicacion.');
    // notify.add(null);
  }

  ngOnInit() {
  }

}
