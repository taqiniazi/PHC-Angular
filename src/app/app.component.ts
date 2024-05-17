import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HeaderComponent } from './common/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    SidebarComponent,
    HeaderComponent,
    MatIconModule,
    MatButtonModule,
    CommonModule  ],
})
export class AppComponent {
  title = 'phc-new';
  sidebarView = false;
  toggleSidebarView() {
    this.sidebarView = !this.sidebarView;
  }
}
