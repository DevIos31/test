const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
   client.user.setPresence({ game: { name: 'with discord.js' }, status: 'idle' })
  .then(console.log)
  .catch(console.error);
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'hey') {
    	message.reply('hi my friend');
  	}
});
client.on('message', message => {
    if (message.content === 'what is DeltaSquad') {
    	message.reply('DeltaSquad is cool fps game for mobile and pc platmform and if anyone want to download type ``DeltaSquad`` in playstore  or go in our website ``www.delta-squad.com`` or click in + sign and click join server and in code type ``deltasquad`` and ask there or go in browser and type ``discord.gg/deltasquad``');
  	}
});
client.on('message', message => {
    if (message.content === 'who is the owner of DeltaSquad') {
    	message.reply('the owner of DeltaSquad is Devios#3344');
  	}
});
client.on('message', message => {
    if (message.content === 'what is portable strike') {
    	message.reply('a best and cool upcoming ios and andriod game with cool features and gamemode');
  	}
});
client.on('message', message => {
    if (message.content === 'who is the owner of Portable Strike') {
    	message.reply('the owner of Portable Strike is Arab2op#1292');
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
    message.reply('A cool moderator of a game called DeltaSquad');
  	}
});
client.on('message', message => {
    if (message.content === 'who is rgt') {
   	message.reply('A cool Admin of a game called DeltaSquad ');
  	}
});
client.on('message', message => {
    if (message.content === 'who is devios') {
    	message.reply('owner/devloper of the game called DeltaSquad ');
  	}
});
client.on('message', message => {
   if (message.content === 'help') {
    	message.reply('go ask mod i am lazy ');
    }
});
client.on('message', message => {
   if (message.content === 'who is  KrishPhadte') {
  	message.reply('A cool moderator of a game called DeltaSquad');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
