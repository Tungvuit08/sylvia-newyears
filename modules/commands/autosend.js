const moment = require('moment-timezone');
const axios = require('axios');

module.exports.config = {
 name: 'autosend',
 version: '10.02',
 hasPermission: 3,
 credits: 'DongDev',
 description: 'Tự động gửi tin nhắn theo giờ đã cài!',
 commandCategory: 'Tiện ích',
 usages: '[]',
 cooldowns: 3,
 images: [],
};

const weather = require('weather-js');
const findWeather = (city, degreeType = 'C') => {
 return new Promise((resolve, reject) => {
 weather.find({ search: city, degreeType }, (err, result) => {
 if (err) {
 reject(err);
 } else {
 resolve(result);
 }
 });
 });
};

const nam = [
 {
 timer: '00:00:00',
 message: ['Chúc mọi người ngủ ngon 😴', 'Khuya rùi ngủ ngon nhé các bạn 😇']
 },
 {
 timer: '00:30:00',
 message: ['\n{thoitiet}']
 },
 {
 timer: '05:00:00',
 message: ['\n{thoitiet}']
 },
 {
 timer: '06:00:00',
 message: ['Chúc mọi người buổi sáng vui vẻ 😉', 'Chúc mn buổi sáng vv ❤️', 'Buổi sáng đầy năng lượng nha các bạn 😙']
 },
 {
 timer: '07:00:00',
 message: ['Xuân Diệu thì biết làm thơ\nCòn anh chỉ biết ngẩn ngơ nhìn nàng', 'Ngoài kia đám cưới linh đình\nBao giờ thì đến lượt mình em ơi.', 'Ba đồng một mớ trầu cau\nEm cho anh hỏi cưới nhau ngày nào?']
 },
 {
 timer: '07:30:00',
 message: ['Tết này em không cần lì xì\nchỉ cần anh nói yêu em một câu thôi', 'Mùa xuân đến rồi, lòng em cũng bắt đầu rung rinh. Có phải vì anh không?', 'Năm mới, ước mơ giản đơn, có anh ngồi cạnh là hơn mọi điều.']
 },
 {
 timer: '08:00:00',
 message: ['Cho anh liều thuốc an thần\nĐể tim ổn định khi gần bên em.', 'Bao nhiêu cân thính cho vừa\nBao nhiêu cân bả mới lừa được em. 😙', 'Tính anh chẳng thích lưng chừng\nYêu anh chẳng sợ cắm sừng đâu em.']
 },
 {
    timer: '08:30:00',
    message: ['Tết này bánh mứt đủ đầy, nhưng em vẫn thiếu một người cầm tay.', 'Dự báo thời tiết Tết 2025 nói rằng, có em ở cạnh anh. Gió đưa cành trúc la đà, nếu ai thấy ảnh chắc là sẽ like. 😙', 'Tết này em không cần kẹo mứt. Em chỉ cần một câu chúc từ anh.']
    },
 {
 timer: '09:00:00',
 message: ['10 năm cắn kẹo cũng chẳng thể bằng một tẹo hun em.', 'Em ơi nước biển màu xanh\nKhoai môn màu tím, tim em màu gì?', 'Đêm rằm có bánh Trung thu\nTiện cho anh hỏi gu em là gì?']
 },
 {
    timer: '09:30:00',
    message: ['Miền Bắc có hoa đào, miền Nam có hoa mai. Tình yêu anh ngọt ngào, luôn đúng và không bao giờ sai.', 'Tết này ngắm pháo hoa bay, lòng em chỉ muốn một tay anh cầm.', 'Đầu năm hoa nở lung linh, lòng em chỉ muốn được mình bên nhau.']
    },
 {
 timer: '10:00:00',
 message: ['Em hôm nay vừa hâm vừa dở\nAnh bước vào che chở có được không?', 'Họ thích nghe nhạc có lời\nCòn anh lại thích trọn đời có em.', 'Người ta mê mẩn bóng cười\nCòn em mê mẩn bóng người em thương.']
 },
 {
    timer: '10:30:00',
    message: ['Tết này em mặc áo hoa, ngỡ rằng mình sẽ cùng ta chung đường.', 'Tết này em không cần lì xì, chỉ cần anh lì xì trái tim cho em thôi.', 'Dự báo thời tiết Tết: Có mưa trái tim, nguyên nhân do anh quá dễ thương.']
    },
 {
 timer: '11:00:00',
 message: ['Mẹ sinh em không phải để em vất vả\nMà là sau này để gả cho anh', 'Mượn xe nhớ đổ đầy bình\nMượn tim nhớ đổ đầy tình giúp anh.', 'Nước non phong cảnh hữu tình\nLiệu em có muốn chúng mình nên duyên?']
 },
 {
    timer: '11:30:00',
    message: ['Tết đến xuân về, hoa đào nở rộ. Còn tim em thì chỉ nở vì anh thôi.', 'Tết này không có gì đặc biệt, chỉ có em đặc biệt hơn mọi ngày.', 'Mùa xuân đến rồi, hoa lá cũng biết rung động. Còn anh, khi nào mới nhận ra em?']
    },
 {
 timer: '12:00:00',
 message: ['Chúc mọi người buổi trưa vui vẻ 😋', 'Chúc mọi người bữa trưa ngon miệng 😋']
 },
 {
 timer: '12:30:00',
 message: ['\n{thoitiet}']
 },
 {
 timer: '13:00:00',
 message: ['Chúc mọi người buổi chiều đầy năng lượng 😼', 'Chúc mọi người buổi chiều vui vẻ 🙌']
 },
 {
    timer: '13:30:00',
    message: ['Em là câu đối đỏ, anh là câu đối đen. Cùng nhau tạo nên một cặp đẹp đôi.', 'Tết này em không cần quà, chỉ cần anh dành thời gian cho em là đủ.']
    },
 {
 timer: '14:00:00',
 message: ['Trời buồn trời đổ mưa ngâu\nMẹ anh đang tuyển con dâu rồi nè.', 'Mẹ mua cho con heo đất\nTiền anh đem cất sau này cưới em.', 'Bình yên là một bờ vai\nMình đem ra đổi bằng 2 nụ cười.']
 },
 {
    timer: '14:30:00',
    message: ['Em là bánh chưng, anh là lá dong. Cùng nhau tạo nên một cặp hoàn hảo.', 'Tết này em ước gì? Ước gì anh cũng thích em như em thích anh.', 'Em có biết vì sao biển lại mê mải với cát không? Vì cát luôn ở đó, lắng nghe từng lời sóng vỗ. Còn em, em chính là cát trong biển đời anh.']
    },
 {
 timer: '15:00:00',
 message: ['Anh đăng story không phải để thả thính\nMà cái chính là để em xem.', 'Hôm nay em đói cồn cào\nShip anh một chút ngọt ngào đi em.', 'Order giùm anh một tình yêu chẳng phai\nGiá phải chăng nhưng chắc chẳng phải em?']
 },
 {
    timer: '15:30:00',
    message: ['Nếu cuộc đời là một cuốn sách, em chính là chương đẹp nhất mà anh từng đọc.', 'Em giống như một bản nhạc du dương,\n luôn vang vọng trong tâm trí anh.', 'Anh tin rằng, tình yêu của chúng ta sẽ mãi bền vững như những vì sao trên bầu trời.']
    },
 {
 timer: '16:00:00',
 message: ['Tim anh đã bật đèn xanh\nMà sao em mãi đạp phanh thế này?', 'Em giống như một tia nắng ấm áp, xua tan đi mọi bóng tối trong cuộc đời anh.', 'Anh đã từng nghĩ rằng trái tim mình đã đóng băng, cho đến khi gặp em.']
 },
 {
    timer: '16:30:00',
    message: ['Em có biết vì sao hoa hồng lại có gai không? Vì vẻ đẹp luôn cần sự bảo vệ. Và anh sẽ là người bảo vệ em mãi mãi.', 'Trăng lên đỉnh núi trăng tà\nEm yêu anh thật hay là yêu chơi?', 'Mời cậu ăn bát phở lòng tái\nĐể rồi mong cậu phải lòng tớ.']
    },
 {
 timer: '17:00:00',
 message: ['Nhân gian vốn lắm bộn bề\nSao không bỏ hết rồi về bên anh?', 'Nếu em thích người thú vị thì anh đây chính là một ví dụ.', 'Thời tiết trái gió trở trời\nTim anh lỡ nhịp cả đời thương em.']
 },
 {
    timer: '17:30:00',
    message: ['Em là tất cả những gì anh từng mơ ước và hơn thế nữa.', 'Em có tin vào tình yêu sét đánh không? Vì anh đã trúng ngay từ cái nhìn đầu tiên.', 'Anh muốn được là người cùng em đi hết quãng đời còn lại.']
    },
 {
 timer: '18:00:00',
 message: ['Đêm Hà Nội sương mù bao phủ\nNhớ em rồi có ngủ được đâu.', 'Tài nấu ăn anh hơi ẩu\nChẳng biết nấu gì ngoài lẩu tình yêu', 'Ăn ớt làm em cay\nCòn anh làm em say !']
 },
 {
    timer: '18:30:00',
    message: ['Em là ánh sao sáng nhất trong vũ trụ của anh.', 'Anh yêu em không phải vì em là ai, mà vì anh là ai khi ở bên em.', 'Em giống như một bản nhạc du dương, luôn vang vọng trong tâm trí anh.']
    },
 {
 timer: '19:00:00',
 message: ['Bắc Đẩu đã có Nam Tào\nCòn em đã có người nào hay chưa?', 'Tim anh đã bật đèn xanh\nYêu anh thì nói nhanh nhanh lên nào.', 'Giới hạn của hàm số là lim\nGiới hạn của trái tim tớ chính là cậu.']
 },
 {
    timer: '19:30:00',
    message: ['Em là tất cả những gì anh từng mơ ước và hơn thế nữa.', 'Anh đã từng nghĩ rằng trái tim mình đã đóng băng, cho đến khi gặp em.', 'Em là món quà quý giá nhất mà cuộc sống ban tặng cho anh.']
    },
 {
 timer: '20:00:00',
 message: ['Đừng nghĩ anh xấu mà chê\nYêu anh thì biết nó phê cỡ nào.', 'Lửa gần rơm lâu ngày cũng bén\nThích lâu rồi cho chén được không em?', 'Nếu em thấy tương lai mù mịt\nNhắm mắt vào để anh thịt em nha.']
 },
 {
    timer: '20:30:00',
    message: ['Anh yêu em không chỉ vì vẻ bề ngoài của em, mà còn vì trái tim ấm áp của em.', 'Em là lý do anh muốn thức dậy mỗi sáng.', 'Anh muốn được là người đầu tiên em nghĩ đến mỗi khi thức giấc và người cuối cùng em nghĩ đến trước khi đi ngủ.']
    },
 {
 timer: '21:00:00',
 message: ['Yêu anh đi anh cho hôn má\nNếu mà yêu quá thì mình hôn môi', 'Lung linh trong chút nắng chiều\nYêu em say đắm, muốn liều Kết Hôn', 'Nguyễn Du lúc viết Truyện Kiều\nHình như viết thiếu là Kiều thư em']
 },
 {
    timer: '21:30:00',
    message: ['Em à, anh không phải là thợ sửa ống nước, nhưng anh sẵn sàng sửa mọi lỗi trong trái tim em.', 'Anh nghĩ em là Wi-Fi, vì mỗi lần anh thấy em, anh lại mất kết nối với thế giới xung quanh.', 'Em có phải là Google không? Vì em là câu trả lời cho tất cả các câu hỏi trong lòng anh.']
    },
 {
 timer: '22:00:00',
 message: ['Thiếu oxi ta không thể thở\nVẻ đẹp của nàng thơ không thể tả.', 'Vì mật mà ong thật liều\nVì em mà yêu thật lòng.', 'Trái tim anh đang dao động điều hoà\nTừ khi em đến bỗng lệch pha.']
 },
 {
    timer: '22:30:00',
    message: ['Anh không phải là nhà toán học, nhưng mỗi lần nhìn em, anh thấy mình đang tìm ra một công thức hoàn hảo.', 'Nếu em là mặt trời, thì anh sẵn sàng làm mặt trăng để được luôn bên cạnh em mỗi khi đêm về.', 'Em giống như ứng dụng trên điện thoại anh, mỗi lần mất em, anh lại cảm thấy như mất cả thế giới.']
    },
 {
 timer: '23:00:00',
 message: ['Thả thính mệt wa rùi thôi để cho các bạn ngủ ngon nè.']
 }
];

module.exports.onLoad = o => setInterval(async () => {
 const r = a => a[Math.floor(Math.random() * a.length)];
 const currentTime = moment().tz('Asia/Ho_Chi_Minh').format('HH:mm:ss');

 if (á = nam.find(i => i.timer === currentTime)) {
 const gio = moment().tz('Asia/Ho_Chi_Minh').format('HH:mm:ss || DD/MM/YYYY');

var msg = r(á.message);
var tinh = [
"Bắc Ninh", "Hồ Chí Minh", "Đà Nẵng", "Hải Phòng", "Cần Thơ", "Hải Dương", "Hà Nội",
"Quảng Ninh", "Thái Bình", "Nam Định", "Ninh Bình", "Thái Nguyên", "Phú Thọ", "Vĩnh Phúc",
"Bắc Giang", "Lạng Sơn", "Quảng Bình", "Quảng Trị", "Thừa Thiên Huế", "Quảng Nam", "Quảng Ngãi",
"Bình Định", "Phú Yên", "Khánh Hòa", "Ninh Thuận", "Bình Thuận", "Kon Tum", "Gia Lai", "Đắk Lắk",
"Đắk Nông", "Lâm Đồng", "Bình Phước", "Tây Ninh", "Bình Dương", "Đồng Nai", "Long An", "Đồng Tháp",
"Tiền Giang", "An Giang", "Bà Rịa - Vũng Tàu", "Bến Tre", "Bạc Liêu", "Cà Mau", "Hậu Giang",
"Kiên Giang", "Sóc Trăng", "Trà Vinh", "Vĩnh Long", "Thanh Hóa"
];
const city = tinh[Math.floor(Math.random() * tinh.length)];
 const result = await findWeather(city);
 var currentDay = result[0].current.day.replace(/Friday/g, "Thứ 6").replace(/Saturday/g, "Thứ 7").replace(/Sunday/g, "Chủ nhật").replace(/Monday/g, "Thứ 2").replace(/Tuesday/g, "Thứ 3").replace(/Wednesday/g, "Thứ 4").replace(/Thursday/g, "Thứ 5");
 var date = result[0].current.date;
 var dateFormat = `Ngày ${date.split("-")[2]}-${date.split("-")[1]}-${date.split("-")[0]}`;
 var skytext = result[0].current.skytext.toString()
 "Cloudy" == skytext ? skytext = "Mây" : "Sunny" == skytext ? skytext = "Nắng" : "Partly Cloudy" == skytext ? skytext = "Mây một phần" : "Mostly Cloudy" == skytext ? skytext = "Mây rất nhiều" : "Rain" == skytext ? skytext = "Mưa" : "Thunderstorm" == skytext ? skytext = "Bão" : "Snow" == skytext ? skytext = "Tuyết" : "Fog" == skytext || "Haze" == skytext ? skytext = "Sương mù" : "Clear" == skytext ? skytext = "Trời trong" : "Light Rain" == skytext ? skytext = "Mưa nhẹ" : "Mostly Clear" == skytext && (skytext = "Trời trong rất nhiều");
 var winddisplay = result[0].current.winddisplay.toString().split(" ")[2];
 "Northeast" == winddisplay && (winddisplay = "Hướng Đông Bắc"), "Northwest" == winddisplay && (winddisplay = "Hướng Tây Bắc"), "Southeast" == winddisplay && (winddisplay = "Hướng Đông Nam"), "Southwest" == winddisplay && (winddisplay = "Hướng Tây Nam"), "East" == winddisplay && (winddisplay = "Hướng Đông"), "West" == winddisplay && (winddisplay = "Hướng Tây"), "North" == winddisplay && (winddisplay = "Hướng Bắc"), "South" == winddisplay && (winddisplay = "Hướng Nam");
 var thoitiet = `(~~[ ${gio} ]~~)\n──────────────────\n[🗺️] →⁠ Cập nhật thời tiết tại: ${result[0].location.name}\n[🌡] →⁠ Nhiệt độ: ${result[0].current.temperature}°${result[0].location.degreetype}\n[✏️] →⁠ Mô tả: ${skytext}\n[♒] →⁠ Độ ẩm: ${result[0].current.humidity}%\n[💨] →⁠ Hướng gió: ${result[0].current.windspeed} ${winddisplay}\n[⏰] →⁠ Ghi nhận vào: ${result[0].current.observationtime}\n[🗺️] →⁠ Từ trạm ${result[0].current.observationpoint}\n────────────────────\n🔄 Đây Là Tin Nhắn Tự Động`;
 
 msg = msg.replace(/{thoitiet}/, thoitiet);

 msg = {
 body: msg,
 };

 global.data.allThreadID.forEach(i => o.api.sendMessage(msg, i));
 }
}, 1000);

module.exports.run = () => {};