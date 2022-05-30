const { IncomingWebhook } = require("@slack/webhook");
const url = 'https://hooks.slack.com/services/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'
const webHook = new IncomingWebhook(url);
const loggerStream = {
    write: (message) => {
        webHook.send({
            text: message,
        });
    },
};

module.exports =loggerStream