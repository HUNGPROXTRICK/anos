const config = {
  name: "cat",
  aliases: ['meo', 'mèo', 'cat'],
  description: "Random image/gif của cat",
  version: "0.0.1",
  cooldown: 7,
  credits: "Huỳnh Lê Tấn Phátt" 
}
// có tình người đừng đổi credits 
// do Xavia Team code ở youtube đấy🐧

const onCall = ({ message, args }) => {
  let type = args[0]?.toLowerCase();

  let url = type == "gif" ? "https://cataas.com/cat/gif" : "https://cataas.com/cat";

  let text = args.slice(1).join(" ") || null;

  url = (text != null && type != "gif") ? `https://cataas.com/cat/says/${text}` : url

  global.getStream(url)
  .then(stream => message.reply({ attachment: stream }).catch(e => console.error(e)))
  .catch(e => console.error(e));
}

export {
  config,
  onCall
  }
