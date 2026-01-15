// logger.js
const fs = require("fs");

function logActivity(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} - ${message}\n`;
    fs.appendFileSync("activity.log", logMessage);
}

module.exports = { logActivity };
