export const config = {
    name: "vdgai",
    version: "0.0.1-xaviabot-port-refactor",
    credits: "đã xoá",
    description: "gái xinh 🥵",
    usage: "[cc]",
    cooldown: 5,
    permissions: [0],
    isAbsolute: false,
};

export async function onCall({ message }) {
    const { reply, mentions, react } = message;

    if (!mentions || !Object.keys(mentions)[0]) return reply("Please tag someone");

    return GET('https://taochap-6377c502025f.herokuapp.com/getlink3')
        .then(async res => {
            let mention = Object.keys(mentions)[0],
                tag = mentions[mention].replace("@", "");

            await react("✅");
            await reply({
                body: "Bị anh chịch sướng không bea~🥵 " + tag,
                mentions: [{
                    tag: tag,
                    id: mention
                }],
                attachment: await global.getStream(res.data.url)
            });
        })
        .catch(err => {
            console.error(err);
            reply("anh đã đóng api hahaha,chịch = mắt :))");
        })
}
