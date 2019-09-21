import { Injectable } from '@angular/core';
import { Lib2Service } from 'lib2';

@Injectable({
  providedIn: 'root'
})
export class Lib1Service {

  constructor(private lib: Lib2Service) { }

  test() {
    return this.lib.getEntity();
  }
}
