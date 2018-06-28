const Discord = require('discord.js');
const bot = new Discord.Client();

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('database.json');
const db = low(adapter);

db.defaults({ histoires: [],  xp: []}).write()
 
 var prefix = ("a_")
 
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
    if (message.content === prefix + "ServeurListe"){
        message.channel.send(bot.guilds.map(r => r.name + ` | **${r.memberCount}** membres`))
        }

    var msgauthor = message.author.id;
    if (message.author.bot)return;
    if(!db.get("xp").find({user: msgauthor}).value()){
    db.get("xp").push({user: msgauthor, xp: 1}).write();   
    }else{
        var userxpdb = db.get("xp").filter({user: msgauthor}).find('xp').value();
        console.log(userxpdb);
        var userxp = Object.values(userxpdb)
        console.log(userxp)
        console.log(`Niveau : ${userxp[1]}`)
        db.get("xp").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1]+= 1}).write();
    }
        if (message.content === prefix + "level"){
            var xp = db.get("xp").filter({user: msgauthor}).find("xp").value()
            var xpfinal = Object.values(xp);
            var xp_embed = new Discord.RichEmbed()
            .setColor(0x66c2ff)
            .addField (`Niveau de ${message.author.username}`, `Vous avez ${xpfinal[1]} d'XP !`)
            .setThumbnail(message.author.avatarURL)
            message.channel.send({embed: xp_embed});
        }

if(message.content.startsWith(prefix + "test")){
    message.channel.send(`**${message.author.username}** fait apparaître un test avec succéés !`)
}
if (message.content.startsWith(prefix + "sondage")){
    let args = message.content.split(" ").slice(1)
    let thingToEcho = args.join(" ")
    var embed = new Discord.RichEmbed()
    .setDescription(`Sondage lancé Par **${message.author.username}**`)
    .addField(thingToEcho, "Vous pouvez répondre par les réactions ❌ ou ✔")
    .setColor(0x66c2ff)
    message.channel.send(embed)
    .then(function (message) {
message.react("❌")
message.react("✔")    
    }).catch(function() {
    });
}
if(message.content.startsWith(prefix + "kill")){
    random();
    if (kill == 1){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setDescription(`**${message.author}** Tue ${message.mentions.users.first()}`)
            .setColor(0x66c2ff)
            .setImage("http://gifimage.net/wp-content/uploads/2017/09/anime-kill-gif.gif")
            message.channel.send({embed})
        }
        if (kill == 2){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setDescription(`**${message.author}** Tue ${message.mentions.users.first()}`)
            .setColor(0x66c2ff)
            .setImage("https://data.whicdn.com/images/277094600/original.gif")
            message.channel.send({embed})
        }
        if (kill == 3){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setDescription(`**${message.author}** Tue ${message.mentions.users.first()}`)
            .setColor(0x66c2ff)
            .setImage("https://i.makeagif.com/media/5-04-2015/FQmUz2.gif")
            message.channel.send({embed})
        }
}

if(message.content.startsWith(prefix + "hug")){
    random();
    if (calin == 1){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setDescription(`**${message.author}** Tue ${message.mentions.users.first()}`)
            .setColor(0x66c2ff)
            .setImage("http://gifimage.net/wp-content/uploads/2017/09/anime-kill-gif.gif")
            message.channel.send({embed})
        }
        if (calin == 2){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setDescription(`**${message.author}** Tue ${message.mentions.users.first()}`)
            .setColor(0x66c2ff)
            .setImage("https://data.whicdn.com/images/277094600/original.gif")
            message.channel.send({embed})
        }
        if (calin == 3){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setDescription(`**${message.author}** Tue ${message.mentions.users.first()}`)
            .setColor(0x66c2ff)
            .setImage("https://i.makeagif.com/media/5-04-2015/FQmUz2.gif")
            message.channel.send({embed})
        }
}

}
)

 function random(min, max) {
    min = Math.ceil(0)
    max = Math.floor(3)
   kill = Math.floor(Math.random() * (max - min +1) + min);
 }

 function random(min, max) {
    min = Math.ceil(0)
    max = Math.floor(3)
   calin = Math.floor(Math.random() * (max - min +1) + min);
 }
