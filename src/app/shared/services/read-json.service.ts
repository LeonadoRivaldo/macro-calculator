import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ReadJsonService<T> {
  jsonFolder: string;
  origin: string;

  constructor(private readonly http: HttpClient) {
    const { jsonFolder } = environment;
    this.jsonFolder = jsonFolder;
    this.origin = window.location.origin;
  }

  getJSON(fileName: string): Promise<T> {
    return this.http.get<T>(`${this.origin}/${this.jsonFolder}/${fileName}`).toPromise();
  }

}
