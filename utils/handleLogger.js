const dotenv = require('dotenv');
dotenv.config();
const slackWebhook = require('@slack/webhook');
const webHook = new slackWebhook.IncomingWebhook(process.env.SLACK_WEBHOOK);

const loggerStream = {
    write: message => {
      webHook.send(message);
    },
  };

  module.exports = { loggerStream }


  /* const dotenv = require('dotenv');
dotenv.config();
const slackWebhook = require('@slack/webhook');
const webHook = new slackWebhook.IncomingWebhook(process.env.SLACK_WEBHOOK);

const sanitizeMessage = (message) => {
  try {
    const parsed = JSON.parse(message);

    if (parsed.body && typeof parsed.body === 'object') {
      // Reemplaza datos sensibles
      if (parsed.body.email) parsed.body.email = '[REDACTED]';
      if (parsed.body.password) parsed.body.password = '[REDACTED]';
    }

    return JSON.stringify(parsed, null, 2);
  } catch (error) {
    // Si no se puede parsear, retorna el mensaje original
    return message;
  }
};

const loggerStream = {
  write: (message) => {
    const sanitizedMessage = sanitizeMessage(message);
    webHook.send(sanitizedMessage);
  },
};

module.exports = { loggerStream };
 */