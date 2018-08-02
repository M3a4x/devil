const Discord = require('discord.js');
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
    member.guild.channels.get('474540919396237343').setName(`Total Users: ${member.guild.memberCount}`);
    let humans = member.guild.memberCount - member.guild.members.filter(m => m.user.bot).size
    member.guild.channels.get('474546295441195010').setName(`Total Humans: ${humans}`);
    let bots = member.guild.members.filter(m => m.user.bot).size
    member.guild.channels.get('474558617014501386').setName(`Total Bots: ${bots}`);
});
client.on('guildMemberRemove', member => {
    member.guild.channels.get('474540919396237343').setName(`Total Users: ${member.guild.memberCount}`);
    let humans = member.guild.memberCount - member.guild.members.filter(m => m.user.bot).size
    member.guild.channels.get('474546295441195010').setName(`Total Humans: ${humans}`);
    let bots = member.guild.members.filter(m => m.user.bot).size
    member.guild.channels.get('474558617014501386').setName(`Total Bots: ${bots}`);
});

client.login('NDU1NTE1NjQ5NzYzMTgwNTU0.DkSAEw.aPlLk93jEH_SGm5LArbQ2pr5r5Y')
