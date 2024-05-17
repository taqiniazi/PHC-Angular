import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
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
  }
}
