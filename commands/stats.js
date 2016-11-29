function Stats() {
  this.names = ['stats'];
}

Stats.prototype.respond = function (ctx) {
  ctx.setCustomData('noPrefix', true);
  var out = [];

  out.push({style: 'bold', text: 'Uptime: '});
  out.push(this.uptime(global.AKP48._startTime));
  out.push(' | ');

  if(global.AKP48._numReloads) {
    out.push({style: 'bold', text: 'Time since last reload: '});
    out.push(this.uptime(global.AKP48._lastReloadTime));
    out.push(' | ');

    out.push({style: 'bold', text: 'Number of reloads: '});
    out.push(global.AKP48._numReloads);
    out.push(' | ');
  }

  out.push({style: 'bold', text: 'Total Msgs Received: '});
  out.push(global.AKP48._totalMsgCount);
  out.push(' | ');

  out.push({style: 'bold', text: 'Total Msgs Sent: '});
  out.push(global.AKP48._totalSentMsgCount + 1); // we add one to account for this message itself.

  return out;
};

Stats.prototype.uptime = function (startTime) {
  var diff = Date.now() - startTime;
  var d = new Date(diff);

  return `${this.pad(d.getUTCHours(), 2)}:${this.pad(d.getUTCMinutes(), 2)}:${this.pad(d.getUTCSeconds(), 2)}.${this.pad(d.getUTCMilliseconds(), 3)}`;
};

// https://stackoverflow.com/a/10073788/645831
Stats.prototype.pad = function(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

module.exports = Stats;
