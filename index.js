const Discord = require('discord.js');
const bot = new Discord.Client();

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('database.json');
const db = low(adapter);

db.defaults({ histoires: [],  xp: []}).write()
 
 var prefix = ("a_")
 
 bot.on('ready', function() {
     bot.user.setUsername("Clicker")
     bot.user.setPresence({ game: { name: 'Se mazouter le poireau de modération !'}, status: 'dnd'}) //en ligne;
     console.log("Connected")
 });
 
 bot.login(process.env.TOKEN);
 
 bot.on("guildMemberAdd", member => {
    
member.guild.channels.find("name", "bienvenue-au-revoir").send(`Bienvenue ${member} sur le serveur ${message.guild.name}`)
    })
    bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "bienvenue-au-revoir").send(`${member.username} est parti... Au moins on s'amusera entre nous, sans lui ^^`)
    })
    
 

 bot.on('message', message => {

    if (message.content.startsWith(prefix + "help")){
        var embed = new Discord.RichEmbed()
        .addField("**Transition**", "Voici les Commandes Disponibles !")
        .addField("```actions```", "```a_calin @mention\na_tue @mention\na_claque @mention\na_embrasse @mention```")
        .setColor(0x66c2ff)
        message.channel.send(embed)
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
message.react("✔")
message.react("❌")    
    }).catch(function() {
    });
}
if(message.content.startsWith(prefix + "tue")){
    random();
    if (test == 1){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setDescription(`**${message.author}** Tue ${message.mentions.users.first()}`)
            .setColor(0x66c2ff)
            .setImage("http://gifimage.net/wp-content/uploads/2017/09/anime-kill-gif.gif")
            message.channel.send({embed})
        }
        if (test == 2){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setDescription(`**${message.author}** Tue ${message.mentions.users.first()}`)
            .setColor(0x66c2ff)
            .setImage("https://data.whicdn.com/images/277094600/original.gif")
            message.channel.send({embed})
        }
        if (test == 3){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setDescription(`**${message.author}** Tue ${message.mentions.users.first()}`)
            .setColor(0x66c2ff)
            .setImage("https://i.makeagif.com/media/5-04-2015/FQmUz2.gif")
            message.channel.send({embed})
        }
        if (test == 4){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setDescription(`**${message.author}** Tue ${message.mentions.users.first()}`)
            .setColor(0x66c2ff)
            .setImage("http://gifimage.net/wp-content/uploads/2017/09/anime-kill-gif.gif")
            message.channel.send({embed})
        }
        if (test == 5){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setDescription(`**${message.author}** Tue ${message.mentions.users.first()}`)
            .setColor(0x66c2ff)
            .setImage("https://data.whicdn.com/images/277094600/original.gif")
            message.channel.send({embed})
        }
}

if(message.content.startsWith(prefix + "calin")){
    random();
    if (test == 1){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setDescription(`**${message.author}** fait un calin à ${message.mentions.users.first()}`)
            .setColor(0x66c2ff)
            .setImage("https://media1.giphy.com/media/143v0Z4767T15e/giphy.gif")
            message.channel.send({embed})
        }
        if (test == 2){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setDescription(`**${message.author}** fait un calin à ${message.mentions.users.first()}`)
            .setColor(0x66c2ff)
            .setImage("https://i.pinimg.com/originals/f2/80/5f/f2805f274471676c96aff2bc9fbedd70.gif")
            message.channel.send({embed})
        }
        if (test == 3){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setDescription(`**${message.author}** fait un calin à ${message.mentions.users.first()}`)
            .setColor(0x66c2ff)
            .setImage("http://gifimage.net/wp-content/uploads/2017/10/hug-anime-gif-9.gif")
            message.channel.send({embed})
        }
        if (test == 4){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setDescription(`**${message.author}** fait un calin à ${message.mentions.users.first()}`)
            .setColor(0x66c2ff)
            .setImage("https://media1.giphy.com/media/143v0Z4767T15e/giphy.gif")
            message.channel.send({embed})
        }
        if (test == 5){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setDescription(`**${message.author}** fait un calin à ${message.mentions.users.first()}`)
            .setColor(0x66c2ff)
            .setImage("https://i.pinimg.com/originals/f2/80/5f/f2805f274471676c96aff2bc9fbedd70.gif")
            message.channel.send({embed})
        }
}
if(message.content.startsWith(prefix + "claque")){
    random();
    if (test == 1){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setDescription(`**${message.author}** claque ${message.mentions.users.first()}`)
            .setColor(0x66c2ff)
            .setImage("https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/c/cd/Slap.gif.gif/revision/latest?cb=20130131011837")
            message.channel.send({embed})
        }
        if (test == 2){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setDescription(`**${message.author}** claque ${message.mentions.users.first()}`)
            .setColor(0x66c2ff)
            .setImage("https://media.giphy.com/media/jLeyZWgtwgr2U/giphy.gif")
            message.channel.send({embed})
        }
        if (test == 3){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setDescription(`**${message.author}** claque ${message.mentions.users.first()}`)
            .setColor(0x66c2ff)
            .setImage("https://i.pinimg.com/originals/55/a5/00/55a500fdf173b915bcba57bcbd2dd12e.gif")
            message.channel.send({embed})
        }
        if (test == 4){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setDescription(`**${message.author}** claque ${message.mentions.users.first()}`)
            .setColor(0x66c2ff)
            .setImage("https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/c/cd/Slap.gif.gif/revision/latest?cb=20130131011837")
            message.channel.send({embed})
        }
        if (test == 5){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setDescription(`**${message.author}** claque ${message.mentions.users.first()}`)
            .setColor(0x66c2ff)
            .setImage("https://media.giphy.com/media/jLeyZWgtwgr2U/giphy.gif")
            message.channel.send({embed})
        }
}
if(message.content.startsWith(prefix + "embrasse")){
    random();
    if (test == 1){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setDescription(`**${message.author}** embrasse ${message.mentions.users.first()}`)
            .setColor(0x66c2ff)
            .setImage("https://media.giphy.com/media/FmB6UTdCj3G12/giphy.gif")
            message.channel.send({embed})
        }
        if (test == 2){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setDescription(`**${message.author}** embrasse ${message.mentions.users.first()}`)
            .setColor(0x66c2ff)
            .setImage("https://media.giphy.com/media/mGAzm47irxEpG/giphy.gif")
            message.channel.send({embed})
        }
        if (test == 3){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setDescription(`**${message.author}** embrasse ${message.mentions.users.first()}`)
            .setColor(0x66c2ff)
            .setImage("http://aws-cf.ados.fr/prod/photos/9/1/6/8040916/4532954/img-4532954f7e.gif?v=16")
            message.channel.send({embed})
        }
        if (test == 4){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setDescription(`**${message.author}** embrasse ${message.mentions.users.first()}`)
            .setColor(0x66c2ff)
            .setImage("https://media.giphy.com/media/FmB6UTdCj3G12/giphy.gif")
            message.channel.send({embed})
        }
        if (test == 5){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setDescription(`**${message.author}** embrasse ${message.mentions.users.first()}`)
            .setColor(0x66c2ff)
            .setImage("https://media.giphy.com/media/mGAzm47irxEpG/giphy.gif")
            message.channel.send({embed})
        }
}
  
  if (message.content.startsWith("a_dit")){
    let args = message.content.split(" ").slice(1)
    let thingToEcho = args.join(" ")
    message.delete();
    message.channel.send(`${thingToEcho}`)  
}
}
)

 function random(min, max) {
    min = Math.ceil(0)
    max = Math.floor(5)
    test = Math.floor(Math.random() * (max - min +1) + min);
 }
