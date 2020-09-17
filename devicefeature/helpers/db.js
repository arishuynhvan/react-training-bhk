import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("places.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    //if some part of a query fails, the entire query rolls back
    db.transaction((transaction) => {
      transaction.executeSql(
        "CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, imageUri TEXT NOT NULL, address TEXT NOT NULL, lat REAL, lng REAL NOT NULL);",
        [],
        () => {
          //success case or table already exists
          resolve();
        },
        (_, err) => {
          //error case
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const insertPlace = (title, imageUri, address, lat, lng) => {
  const promise = new Promise((resolve, reject) => {
    //if some part of a query fails, the entire query rolls back
    db.transaction((transaction) => {
      //do not use `` as it's vulnerable to sql injection
      transaction.executeSql(
        "INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?);",
        [title, imageUri, address, lat, lng],
        (_, result) => {
          //success case 
          resolve(result);
        },
        (_, err) => {
          //error case
          reject(err);
        }
      );
    });
  });
  return promise;
};
