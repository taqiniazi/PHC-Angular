import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const ELEMENT_DATA: PeriodicElement[] = [
  { label: 'Name of HCE', value: 'RHC Bucheki'},
  { label: 'Date of Establishment at Present Location', value: '---'},
  { label: 'Previous Name	', value: '--'},
  { label: 'Sector Type', value: 'Public'}
];
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    MatTabsModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  providers: [provideNativeDateAdapter()],
})
export class MainComponent {
  displayedColumns: string[] = ['label', 'value'];
  dataSource = ELEMENT_DATA;

  showEditView = false;
  toggleView() {
    this.showEditView = !this.showEditView;
  }
}

export interface PeriodicElement {
  label: string;
  value: string;
}
