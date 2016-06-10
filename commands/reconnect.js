function Reconnect() {
  this.names = ['reconnect', 'rc'];
}

Reconnect.prototype.respond = function (context) {
  context.instance.disconnect(context.argText() || 'brb <3');
  setTimeout(function(){
    context.instance.connect();
  }, 100);
  return;
};

module.exports = Reconnect;
