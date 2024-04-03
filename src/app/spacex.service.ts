import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Launch {
  flight_number: number;
  mission_name: string;
  launch_year: string;
  launch_success: boolean;
  details: string;
  links: {
    mission_patch_small: string;
  };
  rocket: { // Assuming this is the structure based on the SpaceX API
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
  };
  launch_site: {
    site_id: string;
    site_name: string;
    site_name_long: string;
  };
  // Include other properties as needed based on the SpaceX API
}

@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  private baseUrl: string = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) { }

  // Method to fetch all SpaceX launches
  getLaunches(): Observable<Launch[]> {
    return this.http.get<Launch[]>(this.baseUrl);
  }

  // Method to fetch SpaceX launches filtered by year
  getLaunchesByYear(year: string): Observable<Launch[]> {
    const url = `${this.baseUrl}?launch_year=${year}`;
    return this.http.get<Launch[]>(url);
  }

  // Method to fetch details for a specific launch using its flight number
  getLaunchDetails(flightNumber: number): Observable<Launch> {
    const url = `${this.baseUrl}/${flightNumber}`;
    return this.http.get<Launch>(url);
  }
}
