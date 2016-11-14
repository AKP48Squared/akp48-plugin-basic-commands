function GetInstanceID() {
  this.names = ['getinstanceid', 'instanceid', 'instance', 'id'];
}

GetInstanceID.prototype.respond = function (ctx) {
  return ctx.instanceId();
};

module.exports = GetInstanceID;
