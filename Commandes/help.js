const Discord = require('discord.js');

module.exports.run = (client, message, args) => {

        const helpEmbed = new Discord.MessageEmbed()
           
        .setColor("039CEE")
        .setTitle("Help")
        .setDescription("Description des commandes de Onerial - Support")
        .addField("help","Affiche les commande du bot")
        .addField("about","Affiche les informations du bot")
        .addField("clear","Efface les message du salon")
        .addField("warn","Pour avertir un utlisateur dans le serveur")
        .addField("stats","Pour avoir des informations sur un membre du serveur (si aucun membre est précisé le bot donne les stats de votre compte)")
        .addField("ping","Réalise un test de ping entre vous et le bot (moy = 250ms)")
        .setFooter("by OnerialMC, version: 1.0.0")
        message.channel.send(helpEmbed)
}

module.exports.help = {
    name: 'help'
}