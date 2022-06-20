import { Injectable } from '@angular/core';
import { concatMap, from, delay, of, concatAll } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  constructor() {}

  getUsers() {
    const dummyData = from(['Anna', 'Bert', 'Chris']);
    return dummyData.pipe(delay(5000)); // each user is emitted after 1 second
  }

  getNumbers = () => of(1, 2, 3);

  getTime() {
    return of(['a', 'b', 'c']).pipe(
      concatAll(),
      concatMap((val) => of(val).pipe(delay(100)))
    );
  }
}
