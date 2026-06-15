import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Sticker } from '../sticker';

@Component({
  selector: 'app-sticker',
  standalone: false,
  templateUrl: './sticker.component.html',
  styleUrl: './sticker.component.css'
})
export class StickerComponent implements OnInit {

  formGroupSticker: FormGroup;
  stickers = signal<Sticker[]>([]);
  isEditing: boolean = false;

  constructor(private formBuilder: FormBuilder, private service: StickerService) {

    this.formGroupSticker = formBuilder.group({
      id: [''],
      name: [''],
      team: [''],
      type: [''],
      number: [''],
      doubles: ['']
    });
  }

  //Get
  ngOnInit(): void {
      this.service.getAllStickers().subscribe(
          {
              next: json => this.stickers.set(json)
          }
      );
  }

  //Post
 save() {

    this.service.save(this.formGroupSticker.value).subscribe(
      {
        next: json => {
          this.stickers.update(stickers => [...stickers, json]); // atualiza o Signal
          this.formGroupSticker.reset(); // reseta o form
        }
      }
    )
  }

  //Delete
  delete(sticker: Sticker) {
    this.service.delete(sticker).subscribe(
      {
        next: () => {
          this.stickers.update(stickers => stickers.filter(s => s.id != sticker.id));
        }
      }
    )
  }

  //Put
  update() {
this.service.update(this.formGroupSticker.value).subscribe(
        {
          next: json => {
            this.stickers.update(stickers => stickers.map(s=> s.id === json.id ? json : s));
            this.isEditing = false;
            this.formGroupSticker.reset();
          }
        }
      )
  }
}
