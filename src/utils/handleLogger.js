const { IncomingWebhook } = require("@slack/webhook");
const url = 'https:/'
const webHook = new IncomingWebhook(url);
const loggerStream = {
    write: (message) => {
        webHook.send({
            text: message,
        });
    },
};

module.exports =loggerStream
