require('dotenv').config();
const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');

const client = new Client({
  intents: [
      GatewayIntentBits.Guilds,
          GatewayIntentBits.GuildMessages,
              GatewayIntentBits.MessageContent,
                  GatewayIntentBits.GuildMembers,
                      GatewayIntentBits.GuildBans
                        ],
                          partials: [Partials.Message, Partials.Channel, Partials.Reaction]
                          });

                          client.commands = new Collection();

                          // Command loader
                          const commandFolders = fs.readdirSync(path.join(__dirname, 'commands'));
                          for (const folder of commandFolders) {
                            const files = fs.readdirSync(`./commands/${folder}`).filter(f => f.endsWith('.js'));
                              for (const file of files) {
                                  const command = require(`./commands/${folder}/${file}`);
                                      if (command.name) client.commands.set(command.name, command);
                                        }
                                        }

                                        // Event loader
                                        const eventFiles = fs.readdirSync('./events').filter(f => f.endsWith('.js'));
                                        for (const file of eventFiles) {
                                          const event = require(`./events/${file}`);
                                            if (event.once) {
                                                client.once(event.name, (...args) => event.execute(...args, client));
                                                  } else {
                                                      client.on(event.name, (...args) => event.execute(...args, client));
                                                        }
                                                        }

                                                        client.login(process.env.DISCORD_TOKEN);
                                                        