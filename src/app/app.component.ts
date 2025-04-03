import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MissionfilterComponent } from "./components/missionfilter/missionfilter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'COMP3133 | Lab Test 2 | SpaceX API';
  name = 'Duc Thien Tran';
  studentId = '101333237';
 
  
}
