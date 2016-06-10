function Reload() {
  this.names = ['reload', 'rl'];
}

Reload.prototype.respond = function () {
  global.AKP48.reload();
  return 'Reloading...';
};

module.exports = Reload;
