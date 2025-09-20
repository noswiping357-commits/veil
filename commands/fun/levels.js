// Levels command
const { getXP } = require('../../database/xp');
module.exports = async (client, message) => {
  const xp = await getXP(message.author.id);
  message.channel.send(`${message.author}, you have ${xp} XP!`);
};