module.exports = {
    name: "tictactoe",
    aliases: ["ttt"],
    category: "fun",
    description: "Play tic tac toe",
    usage: "[ user ]",
    run: async (client, message, args) => {
        message.channel.send(`🏓 Pinging....`).then(msg => {
            const apiPing = client.ws.ping;
            const botPing = msg.createdTimestap - message.createdTimestamp;

            msg.edit(`Api Latency: ${apiPing}ms\nBotLatency: ${botPing}ms`);
        })
    }
}