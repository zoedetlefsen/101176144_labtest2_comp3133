import { Component, OnInit } from '@angular/core';
import { SpacexService, Launch } from '../spacex.service'; // Update the import path as necessary

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  public launches: Launch[] = [];       // This will hold the list of all launches
  public selectedMission: Launch | null = null; // This will hold the currently selected mission

  constructor(private spacexService: SpacexService) {} // Injecting the SpaceX service

  ngOnInit(): void {
    // Fetch all launches when the component initializes
    this.spacexService.getLaunches().subscribe(
      (data: Launch[]) => {
        this.launches = data;
      },
      error => {
        console.error('Error fetching launches:', error);
      }
    );
  }

  // Method to set the currently selected mission
  selectMission(launch: Launch): void {
    this.selectedMission = launch;
  }
}
