// Event: messageCreate
const path = require('path');
const fs = require('fs');

module.exports = async (client, message) => {
  if (message.author.bot || !message.content.startsWith('!')) return;
  const args = message.content.slice(1).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
  const categories = ['moderation', 'utility', 'fun'];
  for (const category of categories) {
    const commandPath = path.join(__dirname, '../commands', category, `${commandName}.js`);
    if (fs.existsSync(commandPath)) {
      const command = require(commandPath);
      return command(client, message, args);
    }
  }
};