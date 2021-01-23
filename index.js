const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require('fs');
const { config } = require('process');
const message = require('./Events/message');


client.login(process.env.TOKEN);


client.commands = new Discord.Collection();

fs.readdir("./Commandes/", (error, f) => {
    if(error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if(commandes.length <= 0) return console.log("Aucune commande trouvée !");

    commandes.forEach((f) => {

        let commande = require(`./Commandes/${f}`);
        console.log(`${f} commande chargée !`);

    client.commands.set(commande.help.name, commande);
    });
});

client.on('message', (message) =>{
    if(message.content === `${prefix}test`){
        message.channel.send("Onerial")
    }
})


fs.readdir("./Events/", (error, f) => {
    if(error) console.log(error);
    console.log(`${f.length} events en chargement`);

    f.forEach((f) => {
        const events = require(`./Events/${f}`);
        const event = f.split(".")[0];

    client.on(event, events.bind(null, client));
    });
});

client.on('ready', async () => {
    console.log(`${client.user.username} Connected`);
    client.user.setStatus("online")
client.user.setActivity("play.onerial.fr")
});

client.on("guildMemberAdd", user => {
    const salon = user.guild.channels.cache.get("698184983839244390"); // cherche le salon sur le serveur
    if(!salon) return console.log("Le salon n'existe pas"); // si le salon n'existe pas, il return pour éviter de crash
    const helpEmbed = new Discord.MessageEmbed()
    .setColor("039CEE")
    .setTitle("Arrivé !")
    .setDescription("Bienvenue " + user.toString() + " sur le serveur " + user.guild.name + " :whale: !")
    salon.send(helpEmbed);

    const role = user.guild.roles.cache.get('698140594941198437'); // il cherche le role sur le serveur
    if(!role) return console.log("Le role n'existe pas"); // si le role n'existe pas, il return pour éviter de crash
    user.roles.add(role.id).catch(console.error); // il ajoute le role à l'user
  });


client.on("message", message =>{
    if(!message.guild) return
    if(message.content === "Bonjour"){
        message.channel.send("Bonjour !")
    }
    if(message.content === "Bonsoir"){
        message.channel.send("Bonsoir !")
    }
});

client.on("message", async message => {
    let blacklisted = ["fdp", "ntm", "salope", 'fdp', 'ntm', 'connard', 'pute', 'putain', 'ta gueule', 'nique', 'salope', 'PD', 'batard', 'putin', 'enfoiré', 'connare', 'fils de pute', 'bâtard', 'bicot', 'conasse', 'couille molle', 'débile', 'ducon', 'dugland', 'enculé', 'fachiste', 'imbécile', 'lavette', ]
    let foundInText = false;

    for(var i in blacklisted) {
        if(message.content.toLocaleLowerCase().includes(blacklisted[i].toLocaleLowerCase())) foundInText = true;
    }
    if(foundInText) {
        message.delete()
        message.channel.send("OnerialChat: ce mot est interdit !")
    }
})

var old_msg = []


function timer(msg){
    var temp = msg
    setTimeout(() => {

    }, 5000);
}

client.on('message', message =>{
    if (message.content.startsWith('=msg')) {
        const salon = message.guild.channels.cache.get("750032666967015586");
        let ann = message.content.split(' ')
        salon.send(ann);
    }
})

client.on('message', message => {

    if (message.content.startsWith('!play')) {
      // On récupère le premier channel audio du serveur
      let voiceChannel = message.guild.channels
        .filter(function (channel) { return channel.type === 'voice' })
        .first()
      // On récupère les arguments de la commande 
      // il faudrait utiliser une expression régulière pour valider le lien youtube
      let args = message.content.split(' ')
      // On rejoint le channel audio
      voiceChannel
        .join()
        .then(function (connection) {
          // On démarre un stream à partir de la vidéo youtube
          let stream = YoutubeStream(args[1])
          stream.on('error', function () {
            message.reply("Je n'ai pas réussi à lire cette vidéo :(")
            connection.disconnect()
          })
          // On envoie le stream au channel audio
          // Il faudrait ici éviter les superpositions (envoie de plusieurs vidéo en même temps)
          connection
            .playStream(stream)
            .on('end', function () {
              connection.disconnect()
            })
        })
    }
  
  })