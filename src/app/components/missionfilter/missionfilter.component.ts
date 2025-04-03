import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  year: string = '';
  launchSuccess: boolean | null = null;
  landingSuccess: boolean | null = null;

  @Output() yearChanged = new EventEmitter<number>();
  
  applyFilter(): void {
    const numericYear = Number(this.year);
    if (numericYear) {
      console.log('📤 Year emitted:', numericYear);
      this.yearChanged.emit(numericYear);
    }
  }

 

  resetFilters(): void {
    this.year = '';
    this.launchSuccess = null;
    this.landingSuccess = null;
    this.yearChanged.emit(0);
  }
}
