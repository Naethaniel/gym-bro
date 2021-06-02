import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private db: SQLiteObject;

  constructor(private sqlite: SQLite) {
  }

  public async initialise(): Promise<void> {
    this.db = await this.sqlite.create({
      name: 'gym_bro.db',
      location: 'default'
    });
    console.log(1);
    await this.db.executeSql(`CREATE TABLE IF NOT EXISTS workouts(id INTEGER PRIMARY KEY, date TEXT NOT NULL)`, []);
    console.log(2);
    await this.db.executeSql(`CREATE TABLE IF NOT EXISTS exercises(id INTEGER PRIMARY KEY, name TEXT NOT NULL, workout_id REFERENCES workout(id))`, []);
    console.log(3);
    await this.db.executeSql(`CREATE TABLE IF NOT EXISTS sets(id INTEGER PRIMARY KEY, reps INTEGER NOT NULL, weight REAL, exercise_id REFERENCES exercise(id))`, []);
    console.log(4);

    // Add some initial data to work with
    let result;
    try {
      // TODO: find out why this does not execute and 5,6 is not logged
      result =  await this.db.executeSql(`INSERT INTO workouts (id, date) VALUES (1, 'asdf')`);
      console.log('Result', result);
    } catch (e) {
      console.log('Error', e);
    } finally {
      console.log(5);
    }
    console.log(6);
    console.log('Result', result);
    result = await this.db.executeSql('SELECT id, date FROM workouts');
    console.log('Result', result);
    // await this.db.executeSql(`INSERT INTO exercises (name, workout_id) VALUES ('First test workout', 1)`);
    // await this.db.executeSql(`INSERT INTO sets (reps, weight, exercise_id) VALUES (5, 20, 1)`);
    // await this.db.executeSql(`INSERT INTO sets (reps, weight, exercise_id) VALUES (4, 25, 1)`);
  }
}
