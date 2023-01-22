module.exports = {
    name: "ping",
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        message.channel.send(`> 🏓 Calculating...`).then(msg => {
            const apiPing = client.ws.ping;
            const botPing = msg.createdTimestap - message.createdTimestamp;

            msg.edit(`> Api Latency: ${apiPing}ms`);
        })
    }
}