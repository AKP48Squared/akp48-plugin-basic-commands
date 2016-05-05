function Reload() {
  this.names = ['reload', 'rl'];
}

Reload.prototype.respond = function () {
  global.AKP48.reload();
  return '';
};

module.exports = Reload;
