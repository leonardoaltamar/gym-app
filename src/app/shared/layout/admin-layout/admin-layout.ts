import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { SidebarNavigation } from "@/shared/components/sidebar-navigation/sidebar-navigation";
@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, FontAwesomeModule, SidebarNavigation],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayout {
  faSignOut = faSignOut;
}
