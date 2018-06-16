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
    if (message.content === '?who is Antares Qlapard') {
    	message.reply('one of our mod team ');
  	}
});
client.on('message', message => {
    if (message.content === '?who is rgt') {
    	message.reply('one of our admin team ');
  	}
});
client.on('message', message => {
    if (message.content === '?who is devios') {
    	message.reply('owner/devloper of the game called DeltaSquad ');
  	}
});
if (command === "say") {
		message.delete()
        const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setDescription(message.author.username + " says: " + args.join(" "));
		message.channel.send({embed})
	} else

	if (command == "help") {
		const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setTitle("Command List:")
		.addField("!help", "Will give the current command list")
		.addField("!ping", "WIll show the ping time for the bot")
		.addField("!say [text]", "Will make the bot say something")
		.addField("!announcement [text]", "Will make the bot say an announcement and tag everyone")
		.addField("!cat", "Will send a random cat image");
		message.channel.send({embed})
	}

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
