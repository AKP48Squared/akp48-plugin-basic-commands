const moment = require('moment-timezone'); // moment helps with time parsing.

function Uptime() {
  this.names = ['uptime', 'up', '↑', '▲', '🕐'];
}

Uptime.prototype.respond = function (context) {
  var startTime = global.AKP48._startTime;
  var formattedTime = moment.tz(startTime, 'UTC');

  if(moment.tz.zone(context.argText())) {
    formattedTime = moment(startTime).tz(context.argText());
  }

  formattedTime = formattedTime.format('[on] YYYY/MM/DD [at] HH:mm:ss z');

  return `I started ${moment(startTime).fromNow()}, ${formattedTime}.`;
};

module.exports = Uptime;
