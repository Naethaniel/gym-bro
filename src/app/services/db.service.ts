import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { ReplaySubject } from 'rxjs';
import { first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private db: ReplaySubject<SQLiteObject> = new ReplaySubject<SQLiteObject>();

  constructor(
    private sqlite: SQLite,
    private http: HttpClient
  ) {
    this.sqlite.create({
      name: 'gym_bro.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.db.next(db);
    });
  }

  public async initialise(): Promise<void> {
    this.db.pipe(
      first()
    ).subscribe(async (instance: SQLiteObject) => {
      try {
        // use batch?
        this.http.get<string>('assets/db-fixtures.sql').subscribe((res: string) => {
          console.log('Content read', res);
        });
        console.log('Done');
      } catch (e) {
        console.log('Caught', e);
      }
      // await instance.executeSql(`CREATE TABLE IF NOT EXISTS danceMoves(name VARCHAR(32))`, []);
      // await instance.executeSql(`INSERT OR IGNORE INTO danceMoves(name) VALUES ('dance1')`, []);
      // const response = await instance.executeSql(`SELECT name FROM danceMoves`, []);
      // console.log('Done', response.rows.item(1).name);
    });
  }
}
