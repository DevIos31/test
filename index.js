const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Portable Strike Bot is ready`);
});

client.on('message', async (message) => {
  if (message.author.bot) return undefined;
  if (!message.content.startsWith(prefix)) return undefined;
  let args = message.content.slice(prefix.length).trim().split(' ');
  let command = args.shift().toLowerCase();

  if (command === 'ping') {
    message.channel.send(`Pong! Latency: ${Math.round(client.ping)}`);
    return;
  }

  if (command === 'portablestrike') {
    message.channel.send('')
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
