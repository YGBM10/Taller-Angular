import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../Interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacteresService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllCharacteres():Observable<Character[]>{
    const url_api: string = 'https://thronesapi.com/api/v2/Characters';
    return this.http.get<Character[]>(url_api);
  }

}
