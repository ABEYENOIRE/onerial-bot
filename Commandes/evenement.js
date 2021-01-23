const Discord = require('discord.js');
const { url } = require('inspector');

module.exports.run = (client, message, args) => {



    if(!message.member.hasPermission("ADMINISTRATOR")) return false;
    const helpEmbed = new Discord.MessageEmbed()
           
        .setColor("6EEA4F")
        .setImage("https://cdn.discordapp.com/attachments/734457978358595686/768064333007159346/9fpe1-ehz9q.gif")
        .setTitle("Evenement Ønerial")
        .addField("SOON", "Y.../sm12  --")
        .setFooter("by OnerialMC, version: 1.0.0")

        message.channel.send(helpEmbed)
}

module.exports.help = {
    name: 'evenement'
}