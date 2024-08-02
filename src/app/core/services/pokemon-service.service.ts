import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonResults } from '../../interfaces/pokemon';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PokemonServiceService {
  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<PokemonResults> {
    return this.http.get<PokemonResults>(
      `${environment.apiURLBase}pokemon?limit=10&offset=0`
    );
  }
}
