module.exports = function(raw) {
  return raw.map(function(item) {
    return [item.type, item.path, item.controller].join('          ');
  }).join('\n');
};