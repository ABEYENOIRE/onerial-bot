const Discord = require('discord.js');
const { url } = require('inspector');

module.exports.run = (client, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return false;
   


    const helpEmbed = new Discord.MessageEmbed()
           
        .setColor("B403E4")
        .setImage("https://cdn.discordapp.com/attachments/734457978358595686/768064333086326794/2allc-x6nsh.gif")
        .setTitle("Liens uriles Ønerial")
        .addField("**Twitter** :", url("https://twitter.com/OnerialMC"))
        .addField("**Instagram** :", "https://www.instagram.com/OnerialMC")
        .addField("**Youtube** :", "https://www.youtube.com/channel/UCUbNTe6cVKtaWGAEvk9-W-Q")
        .addField("**Site** :", "Indisponible")
        .setFooter("OnerialMC, version: 1.0.0")

        message.channel.send(helpEmbed)

}

module.exports.help = {
    name: 'liens'
}