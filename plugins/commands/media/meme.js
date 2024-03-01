const config = {
  name: "meme",
  aliases: ["mêm", "mim"], 
  description: "random meme",
  version: "1.0.0",
  permissions: [0, 1, 2],
  credits: "Huynh Le Tan Phat"
};

const images = [
  "https://i.imgur.com/19sEFXH.jpeg", 
  "https://i.imgur.com/hpWn7My.jpeg",
  "https://i.imgur.com/D37h0ju.jpeg",
  "https://i.imgur.com/HF3nkPb.jpeg",
  "https://i.imgur.com/yvpkcfo.jpeg",
  "https://i.imgur.com/IMrNsoH.jpeg",
  "https://i.imgur.com/S8r1aQ2.jpeg",
  "https://i.imgur.com/IU9vBnd.jpeg",
  "https://i.imgur.com/kpg8gNu.jpeg",
  "https://i.imgur.com/2oTNvMp.jpeg",
  "https://i.imgur.com/I54S89i.jpeg",
  "https://i.imgur.com/D37h0ju.jpeg",
  "https://i.imgur.com/o99ErQp.jpeg",
  "https://i.imgur.com/jf7rDre.jpeg",
  "https://i.imgur.com/cGfU2gD.jpeg",
  "https://i.imgur.com/ZUdSkuT.jpeg",
  "https://i.imgur.com/euo5OeL.jpeg",
  "https://i.imgur.com/ZJYI9pQ.jpg",
  "https://i.imgur.com/Aewq2Kx.jpeg",
  "https://i.imgur.com/RyyL7Jg.jpeg",
  "https://i.imgur.com/jRB8q74.jpeg ",
  "https://i.imgur.com/QYT0Grs.jpeg",
  "https://i.imgur.com/JmNh2pi.jpeg",
  "https://i.imgur.com/icpz3xs.jpeg",
  "https://i.imgur.com/QYT0Grs.jpeg",
  "https://i.imgur.com/D37h0ju.jpeg",
  "https://i.imgur.com/U7hxpGS.jpeg",
  "https://i.imgur.com/xXEdcdg.jpeg",
  "https://i.imgur.com/VMX9Mev.jpeg",
  "https://i.imgur.com/rlAXBM1.jpeg",
  "https://i.imgur.com/XgPjlSE.jpeg",
  "https://i.imgur.com/xTUKxTu.jpeg",
  "https://i.imgur.com/D37h0ju.jpeg",
  "https://i.imgur.com/BX3xAUw.jpeg",
  "https://i.imgur.com/yj12rzG.jpeg",
  "https://i.imgur.com/tpXfP10.jpeg",
  "https://i.imgur.com/7d9w7Jz.jpeg",
  "https://i.imgur.com/QK9eEMD.jpeg",
  "https://i.imgur.com/lqd7H1l.jpeg",
  "https://i.imgur.com/D37h0ju.jpeg",
  "https://i.imgur.com/8Au4rIp.jpeg",
  "https://i.imgur.com/wLuX1eH.jpeg",
  "https://i.imgur.com/9l0VThK.jpeg",
  "https://i.imgur.com/06RoJla.jpeg",
  "https://i.imgur.com/dB3m7WQ.jpeg",
  "https://i.imgur.com/9l0VThK.jpeg",
  "https://i.imgur.com/XcHxnx4.jpeg",
  "https://i.imgur.com/euQrxCq.jpeg",
  "https://i.imgur.com/W6mKsuL.jpeg",
  "https://i.imgur.com/t8Bg3uK.jpeg",
  "https://i.imgur.com/D37h0ju.jpeg",
  "https://i.imgur.com/HF3nkPb.jpeg",
  "https://i.imgur.com/p0UKRmf.jpeg",
  "https://i.imgur.com/AM7oYWf.jpeg",
  "https://i.imgur.com/HF3nkPb.jpeg",
  "https://i.imgur.com/V0oPJuh.jpeg",
  "https://i.imgur.com/o7PaId0.jpeg",
  "https://i.imgur.com/HF3nkPb.jpeg",
  "https://i.imgur.com/XNUlqX1.jpeg",
  "https://i.imgur.com/3lkZF5X.jpeg",
  "https://i.imgur.com/4SxWJKu.jpeg",
  "https://i.imgur.com/D37h0ju.jpeg",
  "https://i.imgur.com/NLNBSvh.jpeg",
  "https://i.imgur.com/TxWuanz.jpeg",
  "https://i.imgur.com/oIvcMIF.jpeg",
  "https://i.imgur.com/HF3nkPb.jpeg",
  "https://i.imgur.com/Hev4Gpc.jpeg",
  "https://i.imgur.com/pdDltTQ.jpeg",
  "https://i.imgur.com/g5B3ukY.jpeg",
  "https://i.imgur.com/DUuzp4V.jpeg",
  "https://i.imgur.com/49zVcko.jpeg",
  "https://i.imgur.com/D37h0ju.jpeg",
  "https://i.imgur.com/mq2QO81.jpeg",
  "https://i.imgur.com/jmi0df1.jpeg",
  "https://i.imgur.com/R0wmRaR.jpeg",
  "https://i.imgur.com/IU9vBnd.jpeg",
  "https://i.imgur.com/hpWn7My.jpeg",
  "https://i.imgur.com/pM2HPa0.jpeg",
  "https://i.imgur.com/icN4cFd.jpeg",
  "https://i.imgur.com/Ql0xx1y.mp4",
  "https://i.imgur.com/1h9NLuB.jpeg",
  "https://i.imgur.com/7GigaaZ.jpeg",
  "https://i.imgur.com/7GigaaZ.jpeg",
  "https://i.imgur.com/hpWn7My.jpeg"
];

function getRandomIndex(arr) {
  const max = arr.length - 1;
  const min = 0;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function onCall({ message }) {
  try {
    if (images.length === 0) return message.reply(getLang("error"));

    const index = getRandomIndex(images);
    const image = images[index];

    const imageStream = await global.getStream(image);
    await message.reply({
      attachment: [imageStream]
    });
  } catch (e) {
    message.reply(getLang("error"));
  }

  return;
}

export default {
  config,
  onCall
};