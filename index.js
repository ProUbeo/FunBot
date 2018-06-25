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
if(message.content.startsWith("a_hug")){
    random();
    if (hug == 1){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setDescription(`**${message.author}** fais un câlin à ${message.mentions.users.first()}`)
            .setColor(0x66c2ff)
            .setImage("https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif")
            message.channel.send({embed})
        }
        if (hug == 2){
            message.channel.send("", {
                file: "https://i.pinimg.com/originals/f2/80/5f/f2805f274471676c96aff2bc9fbedd70.gif"
            })}
if (hug == 3){
message.channel.send("", {
   file: "http://i.imgur.com/27gNd4G.gif"
   })}
}
}
)
function random(min, max) {
    min = Math.ceil(0)
    max = Math.floor(1)
   hug = Math.floor(Math.random() * (max - min +1) + min);
 }
