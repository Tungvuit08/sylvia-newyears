module.exports.config = {
  name: "dodeptrai",
  version: "0.0.1",
  hasPermssion: 0,
  credits: "SEN",
  description: "đo độ đẹp trai",
  commandCategory: "Tiện ích",
  cooldowns: 5
};

module.exports.run = function ({ api, event }) {
  const data = ["Độ đẹp trai của bạn là 1%","Độ đẹp trai của bạn là 2%","Độ đẹp trai của bạn là 3%","Độ đẹp trai của bạn là 4%","Độ đẹp trai của bạn là 5%","Độ đẹp trai của bạn là 6%","Độ đẹp trai của bạn là 7%","Độ đẹp trai của bạn là 8%","Độ đẹp trai của bạn là 9%","Độ đẹp trai của bạn là 10%","Độ đẹp trai của bạn là 11%","Độ đẹp trai của bạn là 12%","Độ đẹp trai của bạn là 13%","Độ đẹp trai của bạn là 14%","Độ đẹp trai của bạn là 15%","Độ đẹp trai của bạn là 16%","Độ đẹp trai của bạn là 17%","Độ đẹp trai của bạn là 18%","Độ đẹp trai của bạn là 19%","Độ đẹp trai của bạn là 20%","Độ đẹp trai của bạn là 21%","Độ đẹp trai của bạn là 22%","Độ đẹp trai của bạn là 23%","Độ đẹp trai của bạn là 24%","Độ đẹp trai của bạn là 25%","Độ đẹp trai của bạn là 26%","Độ đẹp trai của bạn là 27%","Độ đẹp trai của bạn là 28%","Độ đẹp trai của bạn là 29%","Độ đẹp trai của bạn là 30%","Độ đẹp trai của bạn là 31%","Độ đẹp trai của bạn là 32%","Độ đẹp trai của bạn là 33%","Độ đẹp trai của bạn là 34%","Độ đẹp trai của bạn là 35%","Độ đẹp trai của bạn là 36%","Độ đẹp trai của bạn là 37%","Độ đẹp trai của bạn là 38%","Độ đẹp trai của bạn là 39%","Độ đẹp trai của bạn là 40%","Độ đẹp trai của bạn là 41%","Độ đẹp trai của bạn là 42%","Độ đẹp trai của bạn là 43%","Độ đẹp trai của bạn là 44%","Độ đẹp trai của bạn là 45%","Độ đẹp trai của bạn là 46%","Độ đẹp trai của bạn là 47%","Độ đẹp trai của bạn là 48%","Độ đẹp trai của bạn là 49%","Độ đẹp trai của bạn là 50%","Độ đẹp trai của bạn là 51%","Độ đẹp trai của bạn là 52%","Độ đẹp trai của bạn là 53%","Độ đẹp trai của bạn là 54%","Độ đẹp trai của bạn là 55%","Độ đẹp trai của bạn là 56%","Độ đẹp trai của bạn là 57%","Độ đẹp trai của bạn là 58%","Độ đẹp trai của bạn là 59%","Độ đẹp trai của bạn là 60%","Độ đẹp trai của bạn là 61%","Độ đẹp trai của bạn là 62%","Độ đẹp trai của bạn là 63%","Độ đẹp trai của bạn là 64%","Độ đẹp trai của bạn là 65%","Độ đẹp trai của bạn là 66%","Độ đẹp trai của bạn là 67%","Độ đẹp trai của bạn là 68%","Độ đẹp trai của bạn là 69%","Độ đẹp trai của bạn là 70%","Độ đẹp trai của bạn là 71%","Độ đẹp trai của bạn là 72%","Độ đẹp trai của bạn là 73%","Độ đẹp trai của bạn là 74%","Độ đẹp trai của bạn là 75%","Độ đẹp trai của bạn là 76%","Độ đẹp trai của bạn là 77%","Độ đẹp trai của bạn là 78%","Độ đẹp trai của bạn là 79%","Độ đẹp trai của bạn là 80%","Độ đẹp trai của bạn là 81%","Độ đẹp trai của bạn là 82%","Độ đẹp trai của bạn là 83%","Độ đẹp trai của bạn là 84%","Độ đẹp trai của bạn là 85%","Độ đẹp trai của bạn là 86%","Độ đẹp trai của bạn là 87%","Độ đẹp trai của bạn là 88%","Độ đẹp trai của bạn là 89%","Độ đẹp trai của bạn là 90%","Độ đẹp trai của bạn là 91%","Độ đẹp trai của bạn là 92%","Độ đẹp trai của bạn là 93%","Độ đẹp trai của bạn là 94%","Độ đẹp trai của bạn là 95%","Độ đẹp trai của bạn là 96%","Độ đẹp trai của bạn là 97%","Độ đẹp trai của bạn là 98%","Độ đẹp trai của bạn là 99%","Độ đẹp trai của bạn là 100%",
  ];
  return api.sendMessage(`${data[Math.floor(Math.random() * data.length)]}`, event.threadID, event.messageID);
}