const Discord = require('discord.js')
const message = require('../Events/message')
const { run } = require('./liens')

module.exports.run = async (client, message, args) =>{


    if(message.channel.type === "dm") return;
    message.delete()
    if(message.author.bot) return;
    var mentionned = message.mentions.users.first()

    if(!message.guild.member(message.author).hasPermission("VIEW_AUDIT_LOG")){
        return message.channel.send("Error")
    } 
    if(message.mentions.users.size === 0) {
        return message.channel.send("Vous n'avez pas mentionné d'utilisateur");
    }else{
        const args = message.content.split(' ').slice(1)
        if(args[0] === "<@!" + mentionned.id + ">" || args[0] === "<@" + mentionned.id + ">"){
            if(args.slice(1).lenght != 0) {
                message.channel.send(`${mentionned.tag} a été averti !`)
                mentionned.send(`⚠️ | **Onerial-Sanction**  vous avez été averti par __${message.author.username}__ pour **${args.slice(1).join(' ')}**`)

            }else{
                return message.replay("Error")
            }
        }else{
            return message.replay("Error")
        }
    }
}

module.exports.help = {
    name: 'warn'
}