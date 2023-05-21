import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any>{
    const ids = this.getRandomIds(8, 1, 826).join(',');
    return this.http.get(`https://rickandmortyapi.com/api/character/${ids}`);
  }

  getCharactersDetail(id: number): Observable<any> {
    return this.http.get(`https://rickandmortyapi.com/api/character/${id}`)
  }

  getRandomIds(count: number, min: number, max: number): number[] {
    const ids = [];
    for(let i = 0; i < count; i++) {
      ids.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return ids;
  }

}
