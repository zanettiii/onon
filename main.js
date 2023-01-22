const { Client, GatewayIntentBits, Collection } = require("discord.js");
const { config } = require("dotenv");
const fs = require("fs");

config({
    path: __dirname + "/.env"
})

const prefix = "!";

const client = new Client({ intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
    console.log("OnOn is online");

    client.user.setActivity("Coding Myself...", { type: "LISTENING" });
})

client.on("messageCreate", (message) => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    if(!cmd) return;

    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) 
        command.run(client, message, args);
})

client.login(process.env.TOKEN);