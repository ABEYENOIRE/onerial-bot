const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return false;
    if(args[0] == 'site' && args[1] == 'on'){

        const helpEmbed = new Discord.MessageEmbed()
           
        .setColor("00FC2E")
        .setTitle("État de nos services")
        .addField("**Site**   »   ✅")
        .setFooter("OnerialMC, version: 1.0.0")

        message.channel.send(helpEmbed)
    }
}

module.exports.help = {
    name : 'etat'  
}