import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpacexService, Launch } from '../spacex.service';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent implements OnInit {
  missions: Launch[] = [];
  filteredMissions: Launch[] = [];
  years: number[] = []; // Array to hold the years for the filter buttons

  constructor(private spacexService: SpacexService, private router: Router) {}

  ngOnInit(): void {
    this.spacexService.getLaunches().subscribe(data => {
      this.missions = this.filteredMissions = data;
      this.years = this.extractYears(data);
    });
  }

  // Extracts unique years from the missions data
  extractYears(data: Launch[]): number[] {
    return Array.from(new Set(data.map(mission => Number(mission.launch_year)))).sort((a, b) => a - b);
  }

  // Filters missions by the selected year
  filterByYear(year: number): void {
    this.filteredMissions = this.missions.filter(mission => Number(mission.launch_year) === year);
  }

  // Filters missions by their launch success status
  filterBySuccess(successful: boolean): void {
    this.filteredMissions = this.missions.filter(mission => mission.launch_success === successful);
  }

  // Navigates to the detail page for a selected mission
  goToMissionDetails(flightNumber: number): void {
    this.router.navigate(['/missions', flightNumber]);
  }

  // Optional: Method to navigate to the filter missions page
  navigateToFilterMissions(): void {
    this.router.navigate(['/filtermissions']);
  }
}
