import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../../services/spacex.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Mission } from '../../models/mission.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-missiondetails',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './missiondetails.component.html',
  styleUrl: './missiondetails.component.css'
})
export class MissiondetailsComponent implements OnInit {
  mission!: Mission;

  constructor(private route: ActivatedRoute, private service: SpacexService,  private location: Location) { }
  ngOnInit(): void { 
    const id = this.route.snapshot.paramMap.get('id')!;
    this.service.getMissionById(Number(id)).subscribe(data => {
      this.mission = data;
    }
    );
  }
  goBack(): void {
    this.location.back();
  }
}
