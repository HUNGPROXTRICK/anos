export const config = {
    name: "địt",
    version: "0.0.1-xaviabot-port-refactor",
    credits: "đã xoá",
    description: "địt ai đó",
    usage: "[Chjch ai đó]",
    cooldown: 5,
    permissions: [2],
    isAbsolute: true,
};

export async function onCall({ message }) {
    const { reply, mentions, react } = message;

    if (!mentions || !Object.keys(mentions)[0]) return reply("Please tag someone");

    return GET('taochap-6377c502025f.herokuapp.com/getlink4')
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
