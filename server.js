const Discord = require("discord.js");
const client = new Discord.Client();

function presence(){
  client.user.setPresence({
    status: "online",
    game: {
      name: "banear",
      type: "PLAYING"
    }
  });
}

client.on("ready", () => {
    console.log("Wilbur listo!");
    presence();
 });

 client.on("message", (message) => {
   if(message.content.startsWith("!dal")) {
     message.channel.send("¡La mejor línea aérea en bara!");
   }
 
 });
 
 client.login("NzI0MzUxMDgyMjIyMDU5NjAw.Xu-_fg.CbXXY-CPpe2faj7zyZbhOywLre8");
