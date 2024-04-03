import { Component, Input, OnInit } from '@angular/core';

import { Launch } from '../spacex.service';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  @Input() mission: Launch | null = null;

  constructor() { }

  ngOnInit(): void {
  }
}
