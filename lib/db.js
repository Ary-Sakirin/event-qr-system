const Database = require("better-sqlite3");

let db;

function getDb() {
  if (!db) {
    db = new Database("event.db", { verbose: console.log });
  }
  return db;
}

function closeDb() {
  if (db) {
    db.close();
    db = null;
  }
}

module.exports = { getDb, closeDb };
