const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'hey') {
    	message.reply('hi my friend');
  	}
});
client.on('message', message => {
    if (message.content === 'what is DeltaSquad') {
    	message.reply('if anyone want to download type ``DeltaSquad`` or go in our website ``www.delta-squad.com`` or click in + sign and click join server and in code type ``deltasquad`` and ask there or go in browser and type ``discord.gg/deltasquad``');
  	}
});
client.on('message', message => {
    if (message.content === 'who is the owner of DeltaSquad') {
    	message.reply('the owner of DeltaSquad is Devios#3344');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
