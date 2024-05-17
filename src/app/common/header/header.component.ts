import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatMenuModule,MatButtonModule,MatDividerModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
