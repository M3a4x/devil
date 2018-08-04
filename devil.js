const Eris = require("eris");
var kboosh = new Eris("NDU1NTE1NjQ5NzYzMTgwNTU0.DkbqAA.xgnS9WLFStWyVt1Ny2gxW6tXdi4");
var kboosh_id = "475204815736274974";
                    var i = "0";
                    var x = "0";
kboosh.on("voiceChannelJoin", (msg) => {
    x++;
    kboosh.editChannel(kboosh_id, { name : "Devil Community ⇏「" + x + "」"});
});
kboosh.on("voiceChannelLeave", (msg) => {
    x--;
    kboosh.editChannel(kboosh_id, { name : "Devil Community ⇏「" + x + "」"});
});

kboosh.on("messageCreate", (msg) => {
    if(msg.author.id !== "194559857536270336") return kboosh.createMessage('__**This Command is only for the bot Owner**__');
    if(msg.content === "#voice") {
        let users = msg.channel.guild.members.map(m => m.user.id);
        let messages = [];
        messages.push(users);
        setTimeout(function(){
        while (i <= messages[0].length - 1) {
            check = msg.channel.guild.members.get(messages[0][i]);
        if(!check.voiceState.channelID){
                i++;
        }else{
                x++;
                i++;
        }
}
    console.log(x);
    kboosh.createMessage(msg.channel.id, "Devil Community © Online Members Now Are: **"+x+"** Members!");
    kboosh.editChannel(kboosh_id, { name : "Devil Community ⇏「"+x+"」"});
    messages = [];
}, 1);
    }
});


  

kboosh.connect("NDU1NTE1NjQ5NzYzMTgwNTU0.DkbqAA.xgnS9WLFStWyVt1Ny2gxW6tXdi4")
