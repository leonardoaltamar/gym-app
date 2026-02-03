import { Component } from '@angular/core';


import { faClipboardList, faDumbbell, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',  
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  faUsers = faUsers;
  faDumbbell = faDumbbell;
  faClipboardList = faClipboardList;
}
