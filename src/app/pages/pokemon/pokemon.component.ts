import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PokemonItemComponent } from '../../components/pokemon-item/pokemon-item.component';
import { PokemonServiceService } from '../../core/services/pokemon-service.service';
import { catchError, EMPTY, Observable } from 'rxjs';
import { PokemonResults } from '../../interfaces/pokemon';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [AsyncPipe, PokemonItemComponent, ErrorMessageComponent],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css',
})
export class PokemonComponent implements OnInit {
  public pokemonResults$!: Observable<PokemonResults>;
  public errorMessage!: string;
  constructor(private service: PokemonServiceService) {}

  ngOnInit(): void {
    this.pokemonResults$ = this.service.getPokemonList().pipe(
      catchError((error: string) => {
        this.errorMessage = error;
        return EMPTY;
      })
    );
  }
}
