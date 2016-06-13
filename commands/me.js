function Me() {
  this.names = ['me', 'emote'];
}

Me.prototype.respond = function (context) {
  if(!context.argText().length) { return; }

  var c = context.cloneWith({text: context.argText()});
  c.setCustomData('isEmote', true);
  return c;
};

module.exports = Me;
