import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrossComponentService {

  public slideOutToggle$ = new BehaviorSubject<boolean>(false);
  constructor() { }

}
