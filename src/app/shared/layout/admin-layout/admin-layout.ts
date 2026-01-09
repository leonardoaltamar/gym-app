import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, FontAwesomeModule],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayout {
  faSignOut = faSignOut;
}
