?const Discord = require('discord.js');
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
    	message.reply('A cool moderator of a game called DeltaSquad');
  	}
});
client.on('message', message => {
    if (message.content === '?who is rgt') {
    	message.reply('A cool Admin of a game called DeltaSquad ');
  	}
});
client.on('message', message => {
    if (message.content === '?who is devios') {
    	message.reply('owner/devloper of the game called DeltaSquad ');
  	}
});
client.on('message', message => {
    if (message.content === 'help') {
    	message.reply('go ask mod i am lazy ');
    }
});
client.on('message', message => {
    if (message.content === '?who is  KrishPhadte') {
    	message.reply('A cool moderator of a game called DeltaSquad');
    }
});
client.on('message', message => {
    if (message.content === '?who is T4LHA') {
    	message.reply('A cool Admin of a game called DeltaSquad ');
  	}
});
client.on('message', message => {
    if (message.content === '?who is  MedarkDuk3') {
    	message.reply('A cool moderator of a game called DeltaSquad');
    }
});
client.on('message', message => {
    if (message.content === '?who is  Cookie') {
    	message.reply('A cool moderator of a game called DeltaSquad');
    }
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
