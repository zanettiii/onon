const { EmbedBuilder, PermissionsBitField  } = require("discord.js");

module.exports = {
    name: "ban",
    category: "moderation",
    description: "ban a member",
    usage: "< mention > [ reason ]",
    run: async (client, message, args) => {
        if(!message.member.permissions.has(PermissionsBitField.Flags.BanMembers))
            return error("you don't have the permission to ban members");
        
        if(!args[0])
            return error("you didn't provide a valid member", message.channel);

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!member)
            return error("you didn't provide a valid member", message.channel);
    }
}

function error(errorMsg, channel) {
    const embed = new EmbedBuilder()
        .setColor(0xFB6962)
        .setAuthor({ name: 'OnOn    |    !ban', iconURL: 'https://i.imgur.com/AfFp7pu.png' })
        .setDescription(errorMsg)
    
    channel.send({ embeds: [ embed ] });
}