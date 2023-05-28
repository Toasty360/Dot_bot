// const { HTTPError } = require("discord.js");
// import fetch from 'node-fetch';

// const {fetch} = require('node-fetch')

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
            flame = "You both are frineds";
            break;
        case "L":
            flame = "You both love each other";
            break;
        case "A":
            flame = "Its just an affection";
            break;
        case "M":
            flame = "You both are life partners";
            break;
        case "E":
            flame = "You both are enemies";
            break;
        case "S":
            flame = "You both are siblings";
            break;
    }
    console.log(ar);
    console.log(flame);
    console.log();
}

// getFlame("toast","goose")
// getFlame("toast","toast")
// getFlame("","")
// getFlame("a","b")
// getFlame()

// var i = Math.floor(Math.random()*4);
// console.log(i)
//api.giphy.com/v1/gifs
//http://api.giphy.com/v1/gifs/search?q=chicken&api_key=EVbjz1y8w0smyhxQ211NkRIixQV5YdYU&limit=2
var gifs=[]
async function apicalls() {
    const response = await fetch(
        "http://api.giphy.com/v1/gifs/search?q=anime+blush&api_key=EVbjz1y8w0smyhxQ211NkRIixQV5YdYU&limit=10"
    );
    var gifs=[]
    var result= await response.json();

    // console.log(result['data'][0]['gif']['images']['original']['url'])

    // console.log(result)
    for(var element of result['data']){
        gifs.push(element['images']['original']['url'])
        // console.log(element['images']['original']['url'])
    }

    console.log(gifs)

}
// apicalls()

// .then((data)=>{
//     for(element of data['data']){
//         l_gifs.push(element['url'])
//         gifs.push(element['url'])
//     };
//     console.log(l_gifs)});

// else {
    //     if (interaction.customId == "rps") {
    //         const row = new ActionRowBuilder()
    //         .addComponents(
    //             new StringSelectMenuBuilder()
    //                 .setCustomId('rps')
    //                 .setPlaceholder('Nothing selected')
    //                 .addOptions(
    //                     {
    //                         label: 'Rock 🗿',
    //                         value: 'Rock',
    //                     },
    //                     {
    //                         label: 'Paper 📄',
    //                         value: 'Paper',
    //                     },
    //                     {
    //                         label: 'Scissor ✂',
    //                         value: 'Scissor',
    //                     },
    //                 ),
    //         );
    //         await interaction.reply({content:"Pick something", components: [row]});

    //         var input = interaction.values[0];
    //         var result_list = rps(input);
    //         const embed = new EmbedBuilder()
    //             .setColor(0x0099ff)
    //             .setTitle("RPS Game")
    //             .setFields(
    //                 { name: "Ur pick", value: `${input}` },
    //                 { name: "My Pick", value: `${result_list[1]}` },
    //                 { name: "Result", value: `${result_list[2]}` }
    //             );

    //         await interaction.reply({ embeds: [embed] });
    //     }
    // }

    // const embed = new EmbedBuilder()
//             .setColor(0x0099FF)
//             .setTitle('Some title')
//             .setURL('https://discord.js.org/')
//             .setDescription('Some description here');
//         await interaction.reply({ content: '', ephemeral: true, embeds: [embed], components: [row] });

// if (mess.startsWith("twerk")) {
        //     var gifs = [
        //         "https://media.giphy.com/media/3oAt1NiCiTCZrlZvy0/giphy.gif",
        //         "https://media.giphy.com/media/WEiKBTaESHHhK/giphy.gif",
        //         "https://media.giphy.com/media/7rp0WSajAOqw8/giphy.gif",
        //         "https://media.giphy.com/media/gpZsmrh1eXUXK/giphy.gif",
        //         "https://media.giphy.com/media/h1ojsprlDCgbS/giphy.gif",
        //         "https://media.giphy.com/media/RJwX8uzgNZhyh8RbYk/giphy.gif",
        //         "https://media.giphy.com/media/3gGMgLfSaVFsxVu0yh/giphy.gif",
        //         "https://media.giphy.com/media/3ohs7W95Oj3hXG8kZG/giphy.gif",
        //         'https://media.giphy.com/media/l0K43RsWs2yiyhtba/giphy.gif',
        //         'https://media.giphy.com/media/5zkHGrgdd5Hu6DsYuj/giphy.gif'

        //     ];
        //     var i = Math.floor(Math.random() * gifs.length);
        //     const emb = new EmbedBuilder()
        //         .setColor(0x0099ff)
        //         .setTitle(`lemme twerk for u ${message.author.username}`)
        //         .setImage(`${gifs[i]}`);
        //     console.log(message.author.username);
        //     message.reply({ embeds: [emb] });
        // }


// console.log("D! chicken".toLowerCase().substring(2).trim())

///tenorAPI

async function getgifs(){
    const responce = await fetch("https://tenor.googleapis.com/v2/search?q=twerk&key=AIzaSyBNgTjeOPwLXsnhZyOsznZjP-dHWN7t-yw&client_key=my_test_app&ContentFilter=medium&limit=2");
    var result= await responce.json()
    // console.log(result)
    for(var ele of result['results']){
        console.log(ele['media_formats']['gif']['url'])
    }
}
getgifs()