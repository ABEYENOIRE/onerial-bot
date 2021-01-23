const Discord = require('discord.js');

module.exports.run = (client, message, args) => {



    if(!message.member.hasPermission("ADMINISTRATOR")) return false;
    if(!args[0]) return message.channel.send("Merci d'indiquer le nombre de message à supprimer.")

        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send("Les messages ont été supprimés.")
        })
}

module.exports.help = {
    name: 'clear'
}