const Discord = require('discord.js');
const message = require('../Events/message');

module.exports.run = (client, message, args) => {
    let onlines = message.guild.members.cache.filter(({ presence }) => presence.status !== 'offline').size;
    let total = message.guild.members.cache.size;
    if(!message.member.hasPermission("ADMINISTRATOR")) return false;

    const embed = new Discord.MessageEmbed()
    .setColor("FF0000")
    .setTitle("Statistique du serveur discord [ADMIN]")
    .setThumbnail("https://cdn.discordapp.com/attachments/734457978358595686/777573924677615616/Baleine_Onerial_cubique.png")
    .addField("Nombre total de membre", total)
    .addField("Nombre de connecté", onlines)
    
    .setFooter("OnerialMC, version: 1.0.0", "https://cdn.discordapp.com/attachments/734457978358595686/777573924677615616/Baleine_Onerial_cubique.png")
    message.channel.send(embed);

}

module.exports.help = {
    name: 'stats' 
}