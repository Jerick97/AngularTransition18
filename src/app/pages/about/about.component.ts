import { Component } from '@angular/core';
import { CommentsComponent } from '../../comments/comments.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommentsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
