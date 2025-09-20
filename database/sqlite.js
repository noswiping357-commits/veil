// SQLite DB setup
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./veil.sqlite');
db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS xp (userId TEXT PRIMARY KEY, xp INTEGER)');
});
module.exports = db;