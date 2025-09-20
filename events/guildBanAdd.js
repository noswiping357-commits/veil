// Event: guildBanAdd
module.exports = (client, ban) => {
  const channel = ban.guild.systemChannel;
  if (channel) channel.send(`${ban.user.tag} was banned.`);
};