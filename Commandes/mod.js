const Discord = require('discord.js')

module.exports.run = (client, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return false;
    const helpEmbed = new Discord.MessageEmbed()
    .setColor("FF2300")
    .setTitle("Modération")
    .addField("Warn","`=warn <utilisateur> <raison>`")
    .addField("Mute - *en cours*","`=mute <utilisateur> <raison>`")
    .addField("Ban - *indisponible*","`=ban <utilisateur> <raison>`")
    .setFooter("OnerialMC, version: 1.0.0")

    message.channel.send(helpEmbed)

}

module.exports.help = {
    name: 'mod'
}