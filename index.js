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
if (message.content === "sigbot!ASDF Movie"){
    random();
    if (ASDF == 1){
        message.channel.send("", {
            file: "https://media1.tenor.com/images/1e5ea63a7ff58de29efd66799e10bf9a/tenor.gif"
        })
}
if (ASDF == 2){
    message.channel.send("", {
        file: "http://garfie.g.a.pic.centerblog.net/b290ac08.gif"
    })
}   if (ASDF == 3){
    message.channel.send("", {
        file: "http://gifimage.net/wp-content/uploads/2017/09/asdf-movie-gif-7.gif"
    })
}   if (ASDF == 4){
    message.channel.send("", {
        file: "https://media.giphy.com/media/XKnvIs2ELq7du/giphy.gif"
    })
}   if (ASDF == 5){
    message.channel.send("", {
        file: "https://media1.tenor.com/images/b5c745a817f0ef09a827bb48d83526be/tenor.gif"
    })}  
     if (ASDF == 6){
    message.channel.send("", {
        file: "https://vignette.wikia.nocookie.net/asdfmovie/images/7/73/You_Know_Who%27s_Gay%3F.gif/revision/latest?cb=20140307001053"
    })
}   if (ASDF == 7){
    message.channel.send("", {
        file: "https://i.imgur.com/5cL1Ld6.gif"
    })
}   if (ASDF == 8){
    message.channel.send("", {
        file: "https://i.pinimg.com/originals/6a/85/dd/6a85dd96d535832c22d5d5d34620615c.gif"
    })
}   if (ASDF == 9){
    message.channel.send("", {
        file: "https://i.pinimg.com/originals/c8/e2/29/c8e22909763d09c9ff31924ca150ac27.gif"
    })
}   if (ASDF == 10){
    message.channel.send("", {
        file: "https://i.imgur.com/P7BBAXh.gif"
    })
}}
}
)
 function random(min, max) {
    min = Math.ceil(0)
    max = Math.floor(3)
   kill = Math.floor(Math.random() * (max - min +1) + min);
 }
 function random(min, max) {
    min = Math.ceil(0)// 0 est impossible a avoir
    max = Math.floor(10)
    ASDF = Math.floor(Math.random() * (max - min +1) + min);
 }
