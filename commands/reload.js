function Reload() {
  this.names = ['reload', 'rl'];
}

Reload.prototype.respond = function (c) {
  global.AKP48.reload();
  return c.cloneWith({isAlert: true, text: 'Reloading...'});
};

module.exports = Reload;
