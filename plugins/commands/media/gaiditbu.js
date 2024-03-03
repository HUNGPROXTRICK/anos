const config = {
    name: "gaiditbu",
    aliases: ["mông"],
    credits: "XaviaTeam"
}

function onCall({ message }) {
    global.GET(`https://daubuoi-533ff54ea753.herokuapp.com/getlink3`)
        .then(async res => {
            try {
                let imgStream = await global.getStream(res.data.url);
                message.reply({
                    body: res.data.url,
                    attachment: imgStream
                });
            } catch {
                message.reply("Error!");
            }
        })
        .catch(_ => message.reply("Error!"));
}

export default {
    config,
    onCall
}