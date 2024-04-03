import { Component, OnInit } from '@angular/core';
import { SpacexService, Launch } from '../spacex.service'; 

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  public launches: Launch[] = [];     
  public selectedMission: Launch | null = null; 

  constructor(private spacexService: SpacexService) {} 

  ngOnInit(): void {

    this.spacexService.getLaunches().subscribe(
      (data: Launch[]) => {
        this.launches = data;
      },
      error => {
        console.error('Error fetching launches:', error);
      }
    );
  }

  selectMission(launch: Launch): void {
    this.selectedMission = launch;
  }
}
