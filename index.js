const Discord = require('discord.js');
const bot = new Discord.Client();
 
 var prefix = ("a_")
 var randnum = 0;
 
 bot.on('ready', function() {
     bot.user.setUsername("FunBot")
     bot.user.setPresence({ game: { name: 'Procurer du fun'}, status: 'dnd'}) //en ligne;
     console.log("Connected")
 });
 
 bot.login(process.env.TOKEN);
 
 bot.on("guildMemberAdd", member => {
    
member.guild.channels.find("name", "général").send(`Bienvenue ${member} sur le serveur ${message.guild.name}`)
    })
    bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "général").send(`${member} est parti... Au moins on s'amusera entre nous, sans lui ^^`)
    })
    
 

 bot.on('message', message => {

if(message.content.startsWith("a_test")){
    message.channel.send(`**${message.author.username}** fait apparaître un test avec succéés !`)
}
}
)
