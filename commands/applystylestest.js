function ApplyStylesTest() {
  this.names = ['applystylestest', 'applystyles', 'as'];
}

ApplyStylesTest.prototype.respond = function (ctx) {
  ctx.setCustomData('noPrefix', true);
  return [{style: ctx.args().style || "", text: ctx.args().text || ""}];
};

module.exports = ApplyStylesTest;
