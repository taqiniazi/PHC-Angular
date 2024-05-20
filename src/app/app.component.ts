import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HeaderComponent } from './common/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Component, Inject, HostListener,PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
    CommonModule  ]
})
export class AppComponent {
  title = 'phc-new';
  sidebarView = true;
  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    if (isPlatformBrowser(this.platformId)) {
      this.sidebarView = window.innerWidth > 768;
      this.onResize();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    if (isPlatformBrowser(this.platformId)) {
      if (window.innerWidth <= 768) {
        this.sidebarView = false;
      } else {
        this.sidebarView = true;
      }
    }
  }
  
  toggleSidebarView() {
    this.sidebarView = !this.sidebarView;
  }
}
