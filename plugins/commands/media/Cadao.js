const config = {
  "name": "cadao",
  "aliases": [],
  "description": "",
  "usage": "",
  "cooldown": 3,
  "permissions": [0, 1, 2],
  "credits": "WaifuCat",
  "extra": {}
};
const list = [
  "Chớ nghe lời phỉnh tiếng phờ",
  "Thò tay vào lờ, mắc kẹt cái hom",
  "Có công mài sắt, có ngày nên kim",
  "Một câu nói đúng, ngàn vàng người tán",
  "Lá lành đùm lá rách",
  "Đi một ngày đàng, học một sàng khôn",
  "Ai đi nấy đỗ",
  "Bán diêm, bán đèn, không bán chữ",
  "Cái khó ló cái khôn",
  "Cái nết đánh chết cái dại",
  "Con đường mới đi lời con hoang",
  "Cũng tốt nhưng cái chính chiến",
  "Ăn quả nhớ kẻ trồng cây",
  "Đầu không đội trời chung, đuôi không đạp ruồi",
  "Ngã tư đường quyết định",
  "Tham gia trận đại thắng vắng mặt trận nhỏ",
  "Có chí thì nên",
  "Học trên giường, chiến trên đất",
  "Chim én nhà đổ, người đàn ông hư",
  "Có tật giật mình",
  "Mười năm trồng cây, trăm năm trồng người",
  "Một câu đúng, trăm câu nghe",
  "Thung lũng hoa hồng, đường đời thăng trầm",
  "Thời gian là vàng bạc",
  "Con cháu nội ngoại",
  "Đeo bám mồi, có khi cũng thành mồi",
  "Đố ai nghĩ được",
  "Đông tàn, xuân lai, hạ thổn, thu phục",
  "Học hành đến trạng người",
  "Không thử không biết",
  "Một miếng đất hơn một gói vàng",
  "Nói đúng không bằng việc làm đúng",
  "Nước chảy đá mòn",
  "Thì thầm không bằng nói to",
  "Thương cho đủ cả, ghét cho đủ cay",
  "Nói khó tránh khỏi",
  "Có công mài sắt, có ngày nên kim",
  "Còn nước còn tát",
  "Có tránh né cũng khó tránh né",
  "Công cha như núi Thái Sơn",
  "Giây phút vàng son",
  "Một câu đố đến nghẹt thở",
  "Một lời nói đúng, vạn người tin",
  "Xấu xa đối với người khác",
  "Gần mực thì đen, gần đèn thì rạng",
  "Nón nao ai đội",
  "Uống nước nhớ nguồn",
  "Việc Nhà cho Vua một năm",
  "Thanh niên nghĩa là thanh cao",
  "Học trên ghế, đánh trên giường",
  "Nước đục thả câu",
  "Rêu phong nhà ai cũng có, điểm tô giá trị đón xuân sang",
  "Trèo cao đến tận mây",
  "Xa nhà cách cánh đồng",
  "Đi với đạo, trở về nhà hòa",
  "Học, học nữa, học mãi",
  "Hạt đậu tầm bao ",
  "Yêu đời yêu người, quý trọng tuổi trẻ",
  "Hai đầu mối giao nhau",
  "Cười người hôm trước, hôm sau người cười",
  "Cá voi là cá lớn nhất trong mọi loài cá",
  "Từ nhỏ đã học lớn",
]

export function onCall({ message }){
const cadao = list[Math.floor(Math.random() * list.length)];
 message.reply(cadao);
}
 export default {
    config,
    onCall
  }