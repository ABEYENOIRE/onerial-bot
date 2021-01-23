const Discord = require('discord.js')


module.exports.run = async (client, message, args) =>{


    if(message.channel.type === "dm") return;
    message.delete()
    if(message.author.client) return;
    let tomute = message.guild.member(message.mentions.users.first() || member.guild.member.get(args[0]));
    if(!tomute){
        return message.channel.send("Error: je ne trouve pas le sanctionné")

    }
    if(tomute.roles.has("709035561616277504")) return message.channel.send("Vous ne pouvez pas mute un membre du Staff !")
    
    

}

module.exports.help = {
    name: 'mute'
}