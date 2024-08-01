import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css',
})
export class GamesComponent {
  games = [
    { id: 1, name: 'Uncharted 4' },
    {
      id: 2,
      name: 'Horizon Zero Dawn',
    },
    {
      id: 3,
      name: 'Halo CE',
    },
  ];

  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  favorite(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }
}
