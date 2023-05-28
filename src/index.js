require("dotenv").config();
const fs = require("node:fs");
const path = require("node:path");
const {
    Client,
    Collection,
    GatewayIntentBits,
    Events,
    EmbedBuilder,
} = require("discord.js");
const { channel, Channel } = require("node:diagnostics_channel");
// const { ActionRowBuilder, EmbedBuilder, Events, StringSelectMenuBuilder } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});
var gif_list = {};
client.commands = new Collection();
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    client.commands.set(command.data.name, command);
}

// const {Configuration, OpenAIApi} = require('openai')
// const configuration=new Configuration({
//     organization:process.env.OpenAI_ORG,
//     apiKey:process.env.OpenAI_KEY
// })

// const openai=new OpenAIApi(configuration);

function getFlame(first, second) {
    for (var i = 0; i < first.length; i++) {
        for (var j = 0; j < second.length; j++) {
            if (first[i] == second[j]) {
                var a1 = first.substring(0, i);
                var a2 = first.substring(i + 1, first.length);
                first = a1 + a2;
                i = -1;
                var b1 = second.substring(0, j);
                var b2 = second.substring(j + 1, second.length);
                second = b1 + b2;
                j = -1;
                break;
            }
        }
    }

    var ss = first + second;
    var l = ss.length;
    var ar = new Array("F", "L", "A", "M", "E", "S");
    var stp = 1;

    for (var x = 6; x > 1; x--) {
        var g = (l % x) + stp - 1;
        if (g > x) {
            g = g % x;
        }
        if (g == 0) {
            g = ar.length;
        }
        ar.splice(g - 1, 1);
        stp = g;
    }
    var flame;
    switch (ar[0]) {
        case "F":
            flame = "Both are frineds";
            break;
        case "L":
            flame = "Both love each other";
            break;
        case "A":
            flame = "Its just an affection";
            break;
        case "M":
            flame = "Both are life partners";
            break;
        case "E":
            flame = "Both are enemies";
            break;
        case "S":
            flame = "Both are siblings";
            break;
    }
    return flame;
}

function rps(input) {
    var cards = ["rock", "paper", "scissor"];
    var i = Math.floor(Math.random() * cards.length);
    let bot_val = cards[i];
    var res = "It's fucking draw!!😤";
    if (input == "rock") {
        console.log(input, bot_val)
        if (bot_val == "paper") {
            res = "Lmao U lost 😂";
        } else if (bot_val == "scissor") {
            res = "Bish u won 😫";
        }
    } else if (input == "paper") {
        console.log(input, bot_val)
        if (bot_val == "scissor") {
            res = "Lmao U lost 😂";
        } else if (bot_val == "rock") {
            res = "Bish u won 😫";
        }
    } else if (input == "scissor") {
        console.log(input, bot_val)
        if (bot_val == "rock") {
            res = "Lmao U lost 😂";
        } else if (bot_val == "paper") {
            res = "Bish u won 😫";
        }
    }
    return [input, bot_val, res];
}

client.on("messageCreate", async function (message) {
    try {
        if (message.author.bot && message.author.username !== "Carl-bot") return;

        const mess = message.content.toLowerCase();

        if (mess.startsWith("dot")) {
            const emb = new EmbedBuilder()
                .setColor(0x0099ff)
                .setTitle(`Sorry`)
                .setImage("https://media.giphy.com/media/3IQsGPmOK8s4U/giphy.gif")
            message.reply({ embeds: [emb] });
        }
        if (mess.includes("ok")) {
            message.reply("hmmm okay!");
        }
        else if (message.author.username == "JESS") {
            message.react("😈")
        }
        else if (message.author.username.startsWith("Gigi")) {
            message.react("🔪")
        }
        else if (message.author.username.startsWith("buN")) {
            message.react("🐔")
        }
        else if (message.author.username.startsWith("LiQuiD")) {
            message.react("💧")
        }
        else if (message.author.username === "Carl-bot") {
            message.reply("STFU BITCH");
            message.react("💩")
        }
        else if (message.content.startsWith("hello")) {
            const emb = new EmbedBuilder()
                .setColor(0x0099ff)
                .setDescription(`Hello Master ${message.author.username}!`);
            message.channel.send({ embeds: [emb] });
        }
        else if (mess.startsWith("bye") || mess.startsWith("tata") || mess.startsWith("cya") || mess.startsWith("brb")) {
            const emb = new EmbedBuilder()
                .setColor(0x0099ff)
                .setTitle("Tata")
                .setDescription('Life Goes On and on')
            message.reply({ embeds: [emb] });
        }

        else if (mess.endsWith(".")) {
            const emb = new EmbedBuilder()
                .setColor(0x0099ff)
                .setDescription("Yes! It's me. How can I help you! 🤴");
            message.channel.send({ embeds: [emb] });
        }

        else if (mess.startsWith(".ship")) {
            const names = mess.split(" ");
            const p1 = names[1];
            const p2 = names[2];
            if (names.length == 3) {
                var flame = getFlame(p1, p2);
                console.log(flame);
                const emb = new EmbedBuilder()
                    .setColor(0x0099ff)
                    .setTitle(`${p1} && ${p2}`)
                    .setDescription(`${flame}`);
                message.reply({ embeds: [emb] });
            } else {
                const emb = new EmbedBuilder()
                    .setColor(0x0099ff)
                    .setTitle("Bruh!")
                    .setDescription("Command: .ship name1 name2");
                message.reply({ embeds: [emb] });
            }
        }

        else if (mess.startsWith("chicken") || mess.startsWith("bun")) {
            var gifs = [
                'https://media.giphy.com/media/rZ7A5ayCa2zVcMgsvl/giphy.gif',
                'https://media.giphy.com/media/zzALYeLqMLDa6PEV2C/giphy.gif',
                'https://media.giphy.com/media/ld5tIWEqbXWdl30fvD/giphy.gif',
                'https://media.giphy.com/media/4VWrNjCmd5vgiLw7Hf/giphy.gif',
                'https://media.giphy.com/media/emwfDfisjNTB6/giphy.gif',
                'https://media.giphy.com/media/gj6IdyQspgwzRyPAon/giphy.gif',
                'https://media.giphy.com/media/b3V55NYuBFrQb2jOks/giphy.gif',
                'https://media.giphy.com/media/NoYMycuW0ompaJClVU/giphy.gif',
                'https://media.giphy.com/media/69v5cm3Vr5svzNMiEC/giphy.gif',
                'https://giphy.com/clips/happy-cartoon-kawaii-m5DJQ3nfIDGW83cdlC',
                'https://giphy.com/clips/gif-artist-g-foodieg-pmuK5gmmwTlw0mxS9Z',
                'https://media.giphy.com/media/A18oqU6cWwc2lZRc2I/giphy.gif',
                'https://media.giphy.com/media/xVOStTxZO036wsH42l/giphy.gif',
                'https://media.giphy.com/media/lBNV1XqVuLpElbb12B/giphy.gif',
                'https://media.giphy.com/media/01ffmPxaKc6L7MDr2q/giphy.gif',
                'https://media.giphy.com/media/HGM9kgyqgyFmCIvg1l/giphy.gif',
                'https://media.giphy.com/media/Tdf1jtTfjvRkJp743H/giphy.gif',
                'https://media.giphy.com/media/fj3N8H4JJruRducwao/giphy.gif',
                'https://media.giphy.com/media/eecZIsDkWa0zYZAKmJ/giphy.gif'

            ];
            var i = Math.floor(Math.random() * gifs.length);
            const emb = new EmbedBuilder()
                .setColor(0x0099ff)
                .setTitle("It's buN 😂")
                .setImage(`${gifs[i]}`);
            message.reply({ embeds: [emb] });
        }

        else if (mess.startsWith("rock") || mess.startsWith("paper") || mess.startsWith("scissor")) {
            await message.channel.send(`Let's do this ${message.author.username}`)
            var res = rps(mess)
            const emb = new EmbedBuilder()
                .setColor(0x0099ff)
                .setTitle("Result")
                .setDescription(`${message.author.username}: ${res[0]} \nDot: ${res[1]} \n\n${res[2]}`)
            await message.reply({ embeds: [emb] });
        }

        else if (mess.startsWith("d!help")) {
            const emb = new EmbedBuilder()
                .setColor(0x0099ff)
                .setTitle(`List of commands`)
                .setDescription("\nchiken or bun\n.ship\nrock | paper | scissor\nD! <gif_name>");
            message.channel.send({ embeds: [emb] });
        }
        if (mess.startsWith("d!")) {
            var input = mess.substring(2).trim();
            try {
                if (gif_list[`${input}`] == undefined) {
                    var gifs = []

                    const response = await fetch(
                        `http://api.giphy.com/v1/gifs/search?q=${input}&api_key=EVbjz1y8w0smyhxQ211NkRIixQV5YdYU&limit=20`
                    );
                    var result = await response.json();
                    for (var element of result['data']) {
                        gifs.push(element['images']['original']['url'])
                    }
                    gif_list[`${input}`] = gifs;
                    console.log(gif_list)

                    // const responce = await fetch(`https://tenor.googleapis.com/v2/search?q=${input}&key=AIzaSyBNgTjeOPwLXsnhZyOsznZjP-dHWN7t-yw&client_key=my_test_app&ContentFilter=medium&limit=20`);
                    // var result = await responce.json()
                    // for (var ele of result['results']) {
                    //     gifs.push(ele['media_formats']['gif']['url']);
                    // }
                    // gif_list[`${input}`] = gifs;
                }
                var i = Math.floor(Math.random() * gif_list[`${input}`].length);
                const emb = new EmbedBuilder()
                    .setColor(0x0099ff)
                    .setTitle(`${input}`)
                    .setImage(`${gif_list[`${input}`][i]}`);
                message.reply({ embeds: [emb] });
                console.log(gif_list[`${input}`][i], i)
            } catch (err) { console.log(err) }
        }
        if (mess === "test") {
            const mock = new EmbedBuilder()
                .setColor(0x0099ff)
                .setTitle(`${input}`)
                .setImage('https://media4.giphy.com/media/l3vR9IEU6nYAmZyoM/480w_s.jpg?cid=75883481yqcermfx7u3jhlf29f61bm7ddddsfeu26eu3c8tc&rid=480w_s.jpg&ct=g');
            message.reply({ embeds: [mock], ephemeral: false })
        }
    } catch (err) {
        console.log(err);
    }
});
client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isStringSelectMenu()) {
        if (!interaction.isChatInputCommand()) return;

        if (interaction.commandName === "propose") {
            const embed = new EmbedBuilder()
                .setColor(0x0099ff)
                .setTitle(`Proposal 😘!`)
                .setDescription(
                    `"I only want two things in this world. I want you and I want us. Will you be mine?!"`
                );
            await interaction.reply({
                embeds: [embed],
            });
        }
        if (interaction.commandName === "ping") {
            await interaction.reply({
                content: "Bitch what u want?",
                ephemeral: true,
            });
        }
        if (interaction.commandName === "bitch") {
            await interaction.reply({
                content: "U fucking bitch!",
                ephemeral: false,
            });
        }
        if (interaction.commandName === "morning") {
            const embed = new EmbedBuilder()
                .setColor(0x0099ff)
                .setTitle(`Hello!`)
                .setDescription(
                    `Good morning dear ${interaction.options.getUser("target")}`
                );
            await interaction.reply({
                embeds: [embed],
            });
        }
    }

    console.log(
        `${interaction.options.getUser("target")} : used ${interaction.commandName}`
    );
});

client.login(process.env.TOKEN);
console.log("Dot bot is online");
