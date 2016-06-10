function SendAlert() {
  this.names = ['sendalert'];
}

SendAlert.prototype.respond = function (context) {
  return context.cloneWith({isAlert: true, text: context.argsText()});
};

module.exports = SendAlert;
