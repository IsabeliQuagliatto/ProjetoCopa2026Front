import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sticker } from './sticker';

@Injectable({
  providedIn: 'root'
})

export class StickerService {
  apiUrl = "http://localhost:8080/stickers";

  constructor(private http: HttpClient) { }

  //Get All
  getAllStickers(): Observable<Sticker[]>{
    return this.http.get<Sticker[]>(this.apiUrl);
  }

  //Post
  save(sticker: Sticker): Observable<Sticker>{
    return this.http.post<Sticker>(this.apiUrl, sticker);
  }

  //Delete
  delete(sticker: Sticker): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${sticker.id}`);
  }

  //Put
  update(sticker: Sticker): Observable<Sticker>{
    return this.http.put<Sticker>(`${this.apiUrl}/${sticker.id}`, sticker);
  }

}
