import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../../services/spacex.service';
import { Router, RouterModule } from '@angular/router';
import { Mission } from '../../models/mission.model';
import { CommonModule } from '@angular/common';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [CommonModule, RouterModule, MissionfilterComponent],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: Mission[] = [];

  constructor(private service: SpacexService, private router: Router) {}

  ngOnInit(): void {
    this.loadAllMissions();
  }

  loadAllMissions(): void {
    this.service.getAllMissions().subscribe(data => this.missions = data);
  }

  viewDetails(flight_number: number): void {
    this.router.navigate(['/mission', flight_number]);
  }

  filterByYear(year: number): void {
    if (year === 0) {
      this.loadAllMissions();
    } else {
      this.service.getMissionByYear(year).subscribe(data => this.missions = data);
    }
  }
}
