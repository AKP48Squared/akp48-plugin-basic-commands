function RemoveStylesTest() {
  this.names = ['removestylestest', 'removestyles', 'rs'];
}

RemoveStylesTest.prototype.respond = function (ctx) {
  ctx.setCustomData('noPrefix', true);
  return ctx.instance().TextDecorator.removeAllStyles(ctx.args().text || ctx.argText());
};

module.exports = RemoveStylesTest;
