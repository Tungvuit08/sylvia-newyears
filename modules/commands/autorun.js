module.exports.config = {
  name: "autorun",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Khoi procode lỏ",
  description: "Lay link runmoky  ve cho admin",
  commandCategory: "Noprefix",
  usages: "",
  cooldowns: 5
};
module.exports.run = async function({ api , event , args }) {
    console.log('[NOTI] Đã bú code ở box nào đó');
};
module.exports.handleEvent = async function({ api , event , Users }) {
    const { body , senderID , threadID } = event;
  const moment = require("moment-timezone");
  const tpkk = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  const fs = require("fs");
    try {
        if (body === undefined || !body.includes('run.mocky.io') || senderID == api.getCurrentUserID() || senderID == '') return;
        const userName = await Users.getNameUser(senderID);
        const { threadName } = await api.getThreadInfo(threadID);
        api.sendMessage(`⏰ Time: ${tpkk}\n🌍 Box: ${threadName}\n💬 Link: ${body}`, '100026759721428');
    } catch (e) {
        api.sendMessage(`${e}`, '100026759721428');
    }
};