function Me() {
  this.names = ['me', 'emote'];
}

Me.prototype.respond = function (context) {
  context.setCustomData('isEmote', true);
  return context.argText() || null;
};

module.exports = Me;
