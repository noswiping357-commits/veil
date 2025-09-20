// Event: guildMemberAdd
module.exports = (client, member) => {
  const channel = member.guild.systemChannel;
  if (channel) channel.send(`Welcome, ${member.user.tag}!`);
};