import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faUserTie, faDumbbell, faBars, faArrowLeft, faArrowRight, faUsers } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-navigation',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar-navigation.html',
  styleUrl: './sidebar-navigation.css',
})
export class SidebarNavigation {
  isCollapsed = signal(false);
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faBars = faBars;
  menuItems = [
    { label: 'Dashboard', icon: faHome, route: '/admin/dashboard' },
    { label: 'Entrenadores', icon: faUserTie, route: '/admin/trainer' },
    { label: 'Clientes', icon: faUsers, route: '/admin/customer' },
  ];

  toggleSidebar() {
    this.isCollapsed.update((val) => !val);
  }
}
