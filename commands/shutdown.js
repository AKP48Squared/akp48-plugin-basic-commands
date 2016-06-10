function Shutdown() {
  this.names = ['shutdown', 'restart'];
}

Shutdown.prototype.respond = function (context) {
  global.AKP48.shutdown(context.argText());
  return '';
};

module.exports = Shutdown;
