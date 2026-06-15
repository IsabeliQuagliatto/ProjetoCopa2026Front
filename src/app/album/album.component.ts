import { Component, signal } from '@angular/core';
import { StickerService } from '../sticker.service';
import { Sticker } from '../sticker';

@Component({
  selector: 'app-album',
  standalone: false,
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})

export class AlbumComponent {

  stickers = signal<Sticker[]>([]);

  constructor(private service: StickerService) { }


  ngOnInit(): void {
      this.service.getAllStickers().subscribe(
          {
              next: json => this.stickers.set(json)
          }
      );
  }
}
