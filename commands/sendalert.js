function SendAlert() {
  this.names = ['sendalert'];
}

SendAlert.prototype.respond = function (context) {
  return context.cloneWith({isAlert: true, text: context.argText()});
};

module.exports = SendAlert;
