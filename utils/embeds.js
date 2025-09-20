// Embed helpers
const { EmbedBuilder } = require('discord.js');
function createSimpleEmbed(title, description) {
  return new EmbedBuilder().setTitle(title).setDescription(description).setColor(0x5865F2);
}
module.exports = { createSimpleEmbed };