import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Sticker } from '../sticker';

@Component({
  selector: 'app-sticker',
  standalone: false,
  templateUrl: './sticker.component.html',
  styleUrl: './sticker.component.css'
})
export class StickerComponent {

  stickers: Sticker[] = [];
  formGroupSticker: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.formGroupSticker = formBuilder.group({
      id: [''],
      name: [''],
      team: [''],
      type: [''],
      number: [''],
      doubles: ['']
    });
  }

  save() {
    this.stickers.push(this.formGroupSticker.value);
    this.formGroupSticker.reset();
  }
}
