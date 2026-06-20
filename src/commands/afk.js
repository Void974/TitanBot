module.exports = {
    name: 'afk',
    description: 'Sets your status to Away From Keyboard 🕊️',
    async execute(message, args, client) {
        const reason = args.join(' ') || 'No reason provided';
        
        if (!client.afkStatus) client.afkStatus = new Map();
        
        client.afkStatus.set(message.author.id, reason);
        message.reply(`🕊️ You are now AFK: **${reason}**`);
    }
};
