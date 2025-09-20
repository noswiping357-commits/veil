// Kick command
module.exports = async (client, message, args) => {
  if (!message.member.permissions.has('KICK_MEMBERS')) return message.reply('No permission.');
  const member = message.mentions.members.first();
  if (!member) return message.reply('Mention a user to kick.');
  await member.kick();
  message.channel.send(`${member.user.tag} was kicked.`);
};