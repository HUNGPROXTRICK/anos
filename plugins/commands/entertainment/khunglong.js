// commands only support Vietnamese 
// wait me update 
const cungvoi = [
  "Messi",
  "Ronaldo",
  "cô hành xóm",
  "𝐂𝚛𝚞𝚜𝚑",
  "người yêu",
  "người yêu cũ:))",
  "Taylor Swift",
  "Bill Gates:v",
  "vợ yêu",
  "chồng yêu",
  "gay🏳️‍🌈?"
];

const dino = [
    "Tyrannosaurus Rex",
    "Velociraptor",
    "Triceratops",
    "Stegosaurus",
    "Brachiosaurus",
    "Allosaurus",
    "Ankylosaurus",
    "Parasaurolophus",
    "Spinosaurus",
    "Carnotaurus",
    "Deinonychus",
    "Dilophosaurus",
    "Edmontosaurus",
    "Gallimimus",
    "Ichthyosaurus",
    "Iguanodon",
    "Kentrosaurus",
    "Maiasaura",
    "Megalosaurus",
    "Ornithomimus",
    "Pachycephalosaurus",
    "Plateosaurus",
    "Pteranodon",
    "Sauroposeidon",
    "Therizinosaurus",
    "Tyrannosaur",
    "Utahraptor",
    "Wuerhosaurus",
    "Xenoceratops",
    "Yandusaurus",
    "Zephyrosaurus",
    "Brontosaurus",
    "Camptosaurus",
    "Dacentrurus",
    "Einiosaurus",
    "Fukuiraptor",
    "Gorgosaurus",
    "Haplocanthosaurus",
    "Indosaurus",
    "Jeholosaurus",
    "Kritosaurus",
    "Lambeosaurus",
    "Microraptor",
    "Nodosaurus",
    "Oviraptor",
    "Protoceratops",
    "RugopsSuchomimus",
    "Yi",
];

const vitri = [
  "Nam Mỹ",
  "Bắc Mỹ",
  "Châu Âu",
  "Châu Phi",
  "Châu Á",
  "Châu Đại Dương"
];

const weather = [
  "Mưa",
  "Thiên thạch giáng trần",
  "Nắng ấm",
  "Mưa giông",
  "Mưa rào",
  "Bão"
]

export function onCall ({ message }) {
  const cung_voi = cungvoi[Math.floor(Math.random() * cungvoi.length)];
  const di_no = dino[Math.floor(Math.random() * dino.length)];
  const vi_tri = vitri[Math.floor(Math.random() * vitri.length)];
  const thoi_tiet = weather[Math.floor(Math.random() * weather.length)];
  const reply = `
Hôm nay đi bắt khủng long cho cháy 
━━━━━━━━━━━━━━━━
Đi cùng ${cung_voi}
Bắt ở ${vi_tri}
Thời tiết hiện tại: ${thoi_tiet}
━━━━━━━━━━━━━━━━
Khủng long bắt được: ${di_no}
`;
  message.reply(reply);
}
