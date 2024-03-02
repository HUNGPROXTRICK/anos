const config = {
  name: "taixiu",
  description: "",
  usage: "",
  cooldown: 3,
  permissions: [0],
};

function onLoad() {
  if (!global.taixiu_888) {
    global.taixiu_888 = new Map();
  }
}

async function onCall({ message, args }) {
  const { threadID, senderID } = message;
  const { Users } = global.controllers

  let input = args[0];

  switch (input) {
    case "create": {
      let taixiu = global.taixiu_888.get(threadID);
      if (taixiu) return message.send(`Nhóm đã có bàn tài xỉu do ${taixiu.author} tạo!`);

      global.taixiu_888.set(threadID, { author: senderID, status: "pending", players: [] });

      message.send("Đã tạo bàn tài xỉu thành công!\nSố người tham gia hiện tại là 0");
      break;
    }

    case "join": {
      let taixiu = global.taixiu_888.get(threadID);

      if (!taixiu) return message.send("Nhóm hiện không có bàn tài xỉu nào!");
      if (taixiu.status == "starting") return message.send("Bạn không thể tham gia cược vì bàn tài xỉu của nhóm hiện tại đang bắt đầu!")

      if (taixiu.players.some(e => e.id == senderID)) {
        message.send("Bạn đã có trong bàn tài xỉu này!");
      } else {
        if (isNaN(args[1])) return message.send("Số tiền cược không hợp lệ!");
        const userMoney = await Users.getMoney(message.senderID);
        if (parseInt(args[1]) > userMoney) return message.send(`Bạn không đủ tiền để cược, bạn chỉ có ${userMoney}$`);
        if (!args[2] || !["tài", "xỉu", "tai", "xiu", "t", "x"].includes(args[2].toLowerCase())) return message.send("Bạn phải chọn tài hoặc xỉu!");
