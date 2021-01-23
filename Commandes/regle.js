const Discord = require('discord.js');
const { url } = require('inspector');

module.exports.run = (client, message, args) => {



    if(!message.member.hasPermission("ADMINISTRATOR")) return false;
    const helpEmbed = new Discord.MessageEmbed()
           
        .setColor("FC5632")
        .setImage("https://cdn.discordapp.com/attachments/734457978358595686/767858411768905728/1g0gc-fhjzp.gif")
        .setTitle("Règlement d'Ønerial")
        .addField("Article-1","Les insultes, les propos haineux, homophobes, racistes, discriminatoires sont strictement interdits. Le robot chargé de vérifier les salons de discussions rendra muet toute personne qui dégoisera des propos interdits.")
        .addField("Article-2", "Les pseudonymes incorrectes et les photos de profils irrespectueux sont interdits. Ils ne doivent pas contenir de pubs ou d'injures. Les status personnalisés contenants des pubs ne seront pas sanctionnés.")
        .addField("Article-3", "Le spam, le flood, les caractères spéciaux et abusifs sont interdits.")
        .addField("Article-4", "Les discussions politiques ou religieuses sont interdites.")
        .addField("Article-5", "Les provocations/menaces (ddos, boot, etc ...) envers un joueur ou un membre du staff sont interdites.")
        .addField("Article-6", "Les publicités, que ce soit en MP ou sur le discord sont interdites, sauf avec autorisation administrative.")
        .addField("Article-7", "Les modificateurs de voix et les soundboards sont interdits dans les salons vocaux.")
        .addField("Article-8", "L'usurpation d'identité est interdite.")
        .addField("Article-9", "Les mentions inutiles ou abusives envers le staff sont interdites (Si vous avez des soucis, ouvrez un ticket. Si vous avez des questions, mentionnez une fois un @➢  |  Assistant).")
        .addField("⚠","Merci de prendre en compte les différentes règles à ne pas enfreindre. Le règlement peut changer à tout moment donc doit être contrôlé de temps à autre. Date de la dernière modification du règlement du serveur discord d'Onerial : 09/10/20. Toute l'équipe d'Ønerial vous souhaite la bienvenue et bon jeu sur nos services !")

        .setFooter("OnerialMC, version: 1.0.0")

        message.channel.send(helpEmbed)
}

module.exports.help = {
    name: 'regle'
}