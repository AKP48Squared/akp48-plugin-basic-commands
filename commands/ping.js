function Ping() {
  this.names = ['ping', 'p'];
}

Ping.prototype.respond = function (context) {
  var str = '';
  if(context.argText().length) {
    str = Date.now();
  }
  return `Pong. ${str}`;
};

module.exports = Ping;
