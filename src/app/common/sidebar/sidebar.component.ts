import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatListModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  activeItem: any = null;
  navItems = [
    { 
      label: 'Home', 
      url: '#',
      children: [],
      expanded: false
    },
    { 
      label: 'About', 
      url: '#',
      children: [
        { label: 'Team', url: '#team' },
        { label: 'Company', url: '#company' }
      ],
      expanded: false
    }
  ];

  toggleExpand(item: any) {
    item.expanded = !item.expanded;
    this.activeItem = this.activeItem === item ? null : item;
  }

  isActive(item: any): boolean {
    return this.activeItem === item;
  }
}
