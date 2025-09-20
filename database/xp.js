// XP model helpers
const db = require('./sqlite');

function getXP(userId) {
  return new Promise((resolve, reject) => {
    db.get('SELECT xp FROM xp WHERE userId = ?', [userId], (err, row) => {
      if (err) return reject(err);
      resolve(row ? row.xp : 0);
    });
  });
}

function addXP(userId, amount) {
  db.run('INSERT INTO xp (userId, xp) VALUES (?, ?) ON CONFLICT(userId) DO UPDATE SET xp = xp + ?', [userId, amount, amount]);
}

module.exports = { getXP, addXP };