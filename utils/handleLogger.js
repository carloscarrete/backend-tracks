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