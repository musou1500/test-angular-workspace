import { Injectable } from "@angular/core";

export interface Entity {
  id: number;
}

@Injectable({
  providedIn: "root"
})
export class Lib2Service {
  constructor() {}

  getEntity(): Entity {
    return { id: 0 };
  }
}
