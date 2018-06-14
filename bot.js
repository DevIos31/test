const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'hey') {
    	message.reply('hey ');
  	}
});
client.on('message', message => {
    if (message.content === 'anyone here') {
    	message.reply('yes i am here how can i help you');
  	}
});
client.on('message', message => {
    if (message.content === 'whats up') {
    	message.reply('fine and you');
  	}
});
client.on('message', message => {
    if (message.content === 'who is Antares Qlapard') {
    	message.reply('a world biggest noob that u will only found in this server');
  	}
});
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No.");
  if(!args[0]) return message.channel.send("no");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Clear ${args[0]} messages.`).then(msg => msg.delete(2000));
});

}


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
